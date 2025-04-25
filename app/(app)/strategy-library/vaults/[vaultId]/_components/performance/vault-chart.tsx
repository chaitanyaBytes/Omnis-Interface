"use client"
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    type ChartOptions,
} from "chart.js"
import { TimeRange } from "./vault-performance"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

interface VaultChartProps {
    timeRange: TimeRange
}

export default function VaultChart({ timeRange }: VaultChartProps) {
    // Generate dates for x-axis based on timeRange
    const generateDates = () => {
        const dates = []
        const today = new Date()
        let daysToShow = 30

        if (timeRange === "1D") daysToShow = 1
        if (timeRange === "7D") daysToShow = 7
        if (timeRange === "30D") daysToShow = 30
        if (timeRange === "6M") daysToShow = 180

        for (let i = daysToShow; i >= 0; i--) {
            const date = new Date(today)
            date.setDate(date.getDate() - i)
            dates.push(`${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}`)
        }

        return dates
    }

    // Generate price data with a realistic pattern
    const generatePriceData = () => {
        let daysToShow = 30
        if (timeRange === "1D") daysToShow = 1
        if (timeRange === "7D") daysToShow = 7
        if (timeRange === "30D") daysToShow = 30
        if (timeRange === "6M") daysToShow = 180

        const basePrice = 1.015
        const prices = []
        let currentPrice = basePrice

        for (let i = 0; i <= daysToShow; i++) {
            // Add some randomness to create a realistic chart
            const change = (Math.random() - 0.48) * 0.003
            currentPrice += change
            prices.push(currentPrice)
        }

        return prices
    }

    const dates = generateDates()
    const prices = generatePriceData()

    const chartData = {
        labels: dates,
        datasets: [
            {
                data: prices,
                borderColor: "#00c389",
                tension: 0.4,
                pointRadius: 0,
                borderWidth: 2,
            },
        ],
    }

    const options: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    color: "rgba(0, 0, 0, 0.05)",
                },
                ticks: {
                    color: "#363F72",
                    maxRotation: 0,
                    autoSkip: true,
                    maxTicksLimit: 7,
                },
            },
            y: {
                grid: {
                    color: "rgba(0, 0, 0, 0.05)",
                },
                ticks: {
                    color: "#363F72",
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    callback: function (this: any, value: string | number) {
                        if (typeof value === 'number') {
                            return "$" + value.toFixed(3)
                        }
                        return value
                    },
                },
                min: Math.min(...prices) * 0.998,
                max: Math.max(...prices) * 1.002,
            },
        },
        plugins: {
            tooltip: {
                mode: "index",
                intersect: true,
                backgroundColor: "rgba(255, 255, 255)",
                titleColor: "rgba(0, 0, 0, 0.8)",
                bodyColor: "rgba(0, 0, 0, 0.8)",
                borderColor: "rgba(0, 0, 0, 0.3)",
                borderWidth: 1,
                padding: 10,
                displayColors: false,
                callbacks: {
                    label: (context) => "$" + context.parsed.y.toFixed(4),
                },
            },
            legend: {
                display: false,
            },
        },
        interaction: {
            mode: "index",
            intersect: false,
        },
    }

    return (
        <div className="h-full w-full">
            <Line data={chartData} options={options} />
        </div>
    )
}

