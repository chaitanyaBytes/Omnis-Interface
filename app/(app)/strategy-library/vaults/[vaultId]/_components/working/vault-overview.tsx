import { Icons } from "@/lib/icons"
import Link from "next/link"

export const VaultOverview = () => {
    return (
        <div className="rounded-lg space-y-8 text-zinc-700">

            {/* Strategy Overview Section */}
            <div className="space-y-4">
                <h3 className="font-medium text-2xl text-zinc-900">Available Trading Strategies</h3>
                <p className="text-md text-[#3E4784]">
                    These strategies operate on the AsterDex exchange <span className="text-blue-400"><Link href={"https://www.fapi.asterdex.com"}>(fapi.asterdex.com)</Link></span> via the backend API.
                    They are managed by providing a total USDT amount, which the strategy uses to calculate order sizes.
                </p>

                {/* Grid Bots */}
                <div className="p-4 border rounded-md space-y-2">
                    <h4 className="font-semibold text-lg text-zinc-800">1. Grid Trading Bots (Normal & Logarithmic)</h4>
                    <p className="text-sm">
                        <strong>Goal:</strong> Profit from price volatility within a defined range.
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>How it works:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 pl-4 space-y-1">
                        <li>Places a series of buy limit orders below the current market price and sell limit orders above it.</li>
                        <li>When price goes down and hits a buy order, the order fills. If the price then goes up and hits a sell order above it, that sell order fills, locking in a small profit.</li>
                        <li>The process repeats as the price fluctuates within the grid range.</li>
                        <li><strong>Normal Grid:</strong> Uses equally spaced price levels (arithmetic).</li>
                        <li><strong>Log Grid:</strong> Uses proportionally spaced price levels (logarithmic), meaning grid steps are wider at higher prices.</li>
                        <li><strong>Configuration:</strong> You provide the total `usdt_amount`. The bot uses internal defaults for the price range (`UPPER_PRICE`, `LOWER_PRICE`) and number of grids (`NUM_GRIDS`). The order quantity per grid level is calculated based on your `usdt_amount` and the number of grids.</li>
                    </ul>
                    <p className="text-xs font-semibold text-red-500 pt-2">
                        <strong>Key Risks:</strong> Requires price to stay and fluctuate *within* the set grid range. If the price moves significantly outside the range (either up or down), the bot stops generating profit and may hold losing positions. Trading fees impact profitability. Requires sufficient USDT to meet minimum order size requirements at the lowest grid level.
                    </p>
                </div>

                {/* Volume Bot */}
                <div className="p-4 border rounded-md space-y-2">
                    <h4 className="font-semibold text-lg text-zinc-800">2. Volume Bot</h4>
                    <p className="text-sm">
                        <strong>Goal:</strong> Primarily designed to generate trading volume, *not* necessarily profit.
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>How it works:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 pl-4 space-y-1">
                        <li>Repeatedly places a market buy order followed immediately by a market sell order for the same calculated quantity.</li>
                        <li>The quantity is calculated based on the `usdt_amount` you provide and the current market price.</li>
                        <li>By default, it runs indefinitely unless an iteration limit is provided via configuration.</li>
                    </ul>
                    <p className="text-xs font-semibold text-red-500 pt-2">
                        <strong>Key Risks & Considerations:</strong> This strategy is **highly likely to lose money** due to the combination of:
                        <ul className='list-decimal list-inside pl-4 pt-1'>
                            <li>**Trading Fees:** Fees are paid on *both* the buy and the sell orders in each cycle.</li>
                            <li>**Bid-Ask Spread:** Market buy orders typically fill at a higher price (ask) than market sell orders (bid), creating an immediate loss on each cycle.</li>
                            <li>**Slippage:** During volatile times, the actual execution price of market orders can be worse than expected.</li>
                        </ul>
                        Use this strategy with extreme caution and only if you have a specific reason to generate volume (e.g., participating in trading competitions, specific fee rebate structures) and understand the inherent costs. It is **not** designed as a profit-generating strategy under normal circumstances.
                    </p>
                </div>
            </div>

            {/* Disclaimer Section */}
            <div className="space-y-3 p-4 border">
                <h3 className="font-semibold text-2xl text-red-700">Important Disclaimer</h3>
                <ul className="text-xs text-red-600 space-y-1 list-disc list-inside">
                    <li>Trading cryptocurrencies involves significant risk. These strategies and the provided software are for educational and technical demonstration purposes only.</li>
                    <li>There is <strong>no guarantee of profit</strong>, and you could lose a significant portion or all of your invested capital. Use these tools entirely at your own risk.</li>
                    <li>Past performance is not indicative of future results. Market conditions, exchange fees, API latency, and software bugs can all impact performance.</li>
                    <li>Ensure you understand how each strategy works and its associated risks before deploying any capital.</li>
                </ul>
            </div>

        </div>
    )
}
