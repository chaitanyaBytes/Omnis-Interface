import numpy as np
import scipy.optimize as sco
from rich.console import Console
from rich.progress import Progress, SpinnerColumn, BarColumn, TextColumn
from rich.table import Table
from rich.panel import Panel
from rich import print as rprint
import time
import random

console = Console()

def generate_fake_asset_data(num_assets=5):
    """Generate simulated crypto asset data (returns, volatility, correlation matrix)."""
    asset_names = ['BTC', 'ETH', 'SOL', 'AVAX', 'DOT', 'ADA', 'LINK', 'MATIC', 'XRP', 'LUNA']
    selected_assets = random.sample(asset_names, num_assets)

    # Simulate annualized returns (expected value)
    returns = np.random.rand(num_assets) * 0.8 + 0.1 # 10% to 90% annual return

    # Simulate annualized volatility (standard deviation)
    volatilities = np.random.rand(num_assets) * 0.6 + 0.2 # 20% to 80% annual volatility

    # Generate a random correlation matrix
    # 1. Create a random matrix
    rand_matrix = np.random.rand(num_assets, num_assets)
    # 2. Calculate the covariance matrix C = R * R^T (ensure positive semi-definite)
    cov_matrix = np.dot(rand_matrix, rand_matrix.T)
    # 3. Derive standard deviations from the covariance matrix (sqrt of diagonal)
    std_devs = np.sqrt(np.diag(cov_matrix))
    # 4. Calculate the correlation matrix corr = C_ij / (std_i * std_j)
    corr_matrix = np.zeros_like(cov_matrix)
    for i in range(num_assets):
        for j in range(num_assets):
            # Avoid division by zero if a standard deviation happens to be zero
            if std_devs[i] > 0 and std_devs[j] > 0:
                 corr_matrix[i, j] = cov_matrix[i, j] / (std_devs[i] * std_devs[j])
            elif i == j:
                 corr_matrix[i,j] = 1.0 # Correlation with self is 1
            else:
                 corr_matrix[i,j] = 0.0 # Set correlation to 0 if std dev is 0
    # 5. Set diagonal elements to 1.0
    np.fill_diagonal(corr_matrix, 1.0)
    # Ensure symmetry (due to potential floating point inaccuracies)
    corr_matrix = (corr_matrix + corr_matrix.T) / 2
    np.fill_diagonal(corr_matrix, 1.0)


    # Rebuild the covariance matrix using the simulated volatilities and correlation matrix
    cov_matrix_final = np.outer(volatilities, volatilities) * corr_matrix

    return selected_assets, returns, volatilities, cov_matrix_final, corr_matrix

def calculate_portfolio_performance(weights, returns, cov_matrix):
    """Calculate the expected annualized return and volatility of the portfolio."""
    portfolio_return = np.sum(returns * weights)
    # Ensure covariance matrix is positive semi-definite for sqrt calculation
    # Adding a small identity matrix nudge if necessary
    min_eig = np.min(np.linalg.eigvalsh(cov_matrix))
    if min_eig < 0:
        cov_matrix += -min_eig * np.eye(len(weights)) * 1.00001 # Add a small positive nudge
        
    portfolio_volatility = np.sqrt(np.dot(weights.T, np.dot(cov_matrix, weights)))
    return portfolio_return, portfolio_volatility

def neg_sharpe_ratio(weights, returns, cov_matrix, risk_free_rate):
    """Calculate the negative Sharpe ratio (for minimization)."""
    p_return, p_volatility = calculate_portfolio_performance(weights, returns, cov_matrix)
    if p_volatility == 0: # Avoid division by zero
        return np.inf
    return -(p_return - risk_free_rate) / p_volatility

def portfolio_volatility_func(weights, returns, cov_matrix):
     """Return the portfolio volatility (for minimization)."""
     # Note: We only need the volatility itself, return is not needed here
     _, p_volatility = calculate_portfolio_performance(weights, returns, cov_matrix)
     return p_volatility

def find_optimal_portfolio(returns, cov_matrix, optimization_target='sharpe', risk_free_rate=0.02):
    """Find the optimal portfolio weights."""
    num_assets = len(returns)
    args = (returns, cov_matrix)

    # Constraints: Sum of weights is 1
    constraints = ({'type': 'eq', 'fun': lambda x: np.sum(x) - 1})

    # Bounds: Each weight between 0 and 1 (no short selling)
    bounds = tuple((0, 1) for asset in range(num_assets))

    # Initial guess: Equal weights
    initial_guess = num_assets * [1. / num_assets,]

    if optimization_target == 'sharpe':
        target_func = neg_sharpe_ratio
        args = (returns, cov_matrix, risk_free_rate)
        objective_name = "Maximize Sharpe Ratio (Risk-Adjusted Return)"
    elif optimization_target == 'variance':
        target_func = portfolio_volatility_func
        objective_name = "Minimize Portfolio Variance (Risk)"
    else:
        raise ValueError("Optimization target must be 'sharpe' or 'variance'")

    rprint(f"\n[bold cyan]Starting Optimization Target:[/bold cyan] {objective_name}")

    # Use SciPy's optimizer
    result = sco.minimize(target_func, initial_guess, args=args,
                          method='SLSQP', bounds=bounds, constraints=constraints)

    if not result.success:
        rprint("[bold red]Optimization Failed:[/bold red]", result.message)
        return None, None

    rprint(f"[bold green]Optimization Successful![/bold green]")
    optimal_weights = result.x
    # Normalize weights slightly due to potential floating point errors in solver
    optimal_weights /= np.sum(optimal_weights)
    optimal_performance = calculate_portfolio_performance(optimal_weights, returns, cov_matrix)


    return optimal_weights, optimal_performance

def display_results(title, asset_names, weights, performance, risk_free_rate=None):
    """Display results in a table format."""
    table = Table(title=title, show_header=True, header_style="bold magenta")
    table.add_column("Asset", style="dim", width=12)
    table.add_column("Weight", justify="right")

    for name, weight in zip(asset_names, weights):
        table.add_row(name, f"{weight:.2%}")

    console.print(table)

    perf_table = Table(title="Portfolio Performance", show_header=True, header_style="bold blue")
    perf_table.add_column("Metric", style="dim", width=25)
    perf_table.add_column("Value", justify="right")

    p_return, p_volatility = performance
    perf_table.add_row("Expected Annualized Return", f"{p_return:.2%}")
    perf_table.add_row("Annualized Volatility (Risk)", f"{p_volatility:.2%}")

    if risk_free_rate is not None:
        sharpe = (p_return - risk_free_rate) / p_volatility if p_volatility != 0 else 0
        perf_table.add_row("Sharpe Ratio", f"{sharpe:.2f}")

    console.print(perf_table)

def run_simulation():
    """Execute the complete simulation and optimization process."""
    console.clear()
    rprint(Panel("[bold yellow]Web3 Asset Portfolio Markowitz Optimization Demo[/bold yellow]", expand=False, border_style="green"))

    num_assets = 5
    risk_free_rate = 0.03 # Assume risk-free rate is 3%

    with Progress(
        SpinnerColumn(),
        TextColumn("[progress.description]{task.description}"),
        BarColumn(),
        TextColumn("[progress.percentage]{task.percentage:>3.0f}%"),
        transient=True, # Disappear after completion
    ) as progress:
        task1 = progress.add_task("[cyan]Generating simulated asset data...", total=100)
        # Simulate some delay to show the progress bar
        for _ in range(100):
            time.sleep(0.02)
            progress.update(task1, advance=1)
        selected_assets, returns, volatilities, cov_matrix, corr_matrix = generate_fake_asset_data(num_assets)

    rprint("\n[bold green]1. Simulated asset data generation complete[/bold green]")
    data_table = Table(title="Simulated Asset Base Data", show_header=True, header_style="bold cyan")
    data_table.add_column("Asset", style="dim")
    data_table.add_column("Expected Ann. Return", justify="right")
    data_table.add_column("Ann. Volatility", justify="right")

    for i in range(num_assets):
        data_table.add_row(selected_assets[i], f"{returns[i]:.2%}", f"{volatilities[i]:.2%}")
    console.print(data_table)

    # Display correlation matrix (optional, adds professionalism)
    rprint("\n[bold]Asset Correlation Matrix:[/bold]")
    corr_table = Table(show_header=True, header_style="bold blue")
    corr_table.add_column("", style="dim")
    for asset in selected_assets:
        corr_table.add_column(asset, justify="center")

    for i, asset_row in enumerate(selected_assets):
        row_data = [asset_row] + [f"{corr_matrix[i, j]:.2f}" for j in range(num_assets)]
        corr_table.add_row(*row_data)
    console.print(corr_table)


    rprint("\n[bold yellow]2. Starting portfolio optimization calculations...[/bold yellow]")

    # --- Minimum Variance Optimization ---
    with Progress(
        SpinnerColumn(spinner_name="dots"),
        TextColumn("[progress.description]{task.description}", style="magenta"),
        transient=True
    ) as progress:
        task_min_var = progress.add_task("Calculating Minimum Variance Portfolio...", total=None) # Indeterminate mode
        min_var_weights, min_var_performance = find_optimal_portfolio(
            returns, cov_matrix, optimization_target='variance'
        )
        time.sleep(1.5) # Simulate calculation time
        progress.stop_task(task_min_var)
        progress.update(task_min_var, description="Minimum Variance calculation complete!")
        time.sleep(0.5)


    if min_var_weights is not None:
         display_results("[bold green]Minimum Variance Portfolio[/bold green]",
                         selected_assets, min_var_weights, min_var_performance)
    else:
         rprint("[bold red]Could not find the Minimum Variance Portfolio.[/bold red]")


    # --- Maximum Sharpe Ratio Optimization ---
    with Progress(
        SpinnerColumn(spinner_name="line"),
        TextColumn("[progress.description]{task.description}", style="cyan"),
        transient=True
    ) as progress:
         task_max_sharpe = progress.add_task("Calculating Maximum Sharpe Ratio Portfolio...", total=None)
         max_sharpe_weights, max_sharpe_performance = find_optimal_portfolio(
             returns, cov_matrix, optimization_target='sharpe', risk_free_rate=risk_free_rate
         )
         time.sleep(2) # Simulate calculation time
         progress.stop_task(task_max_sharpe)
         progress.update(task_max_sharpe, description="Maximum Sharpe Ratio calculation complete!")
         time.sleep(0.5)

    if max_sharpe_weights is not None:
        display_results("[bold green]Maximum Sharpe Ratio Portfolio[/bold green]",
                        selected_assets, max_sharpe_weights, max_sharpe_performance, risk_free_rate)
    else:
        rprint("[bold red]Could not find the Maximum Sharpe Ratio Portfolio.[/bold red]")


    rprint(Panel("[bold yellow]Demo Complete![/bold yellow]", expand=False, border_style="green"))


if __name__ == "__main__":
    run_simulation() 