import { Icons } from "@/lib/icons";
import Link from "next/link";

export const VaultOverview = () => {
  return (
    <div className="rounded-lg space-y-8 text-zinc-700">
      {/* Strategy Overview Section */}
      <div className="space-y-4">
        <h3 className="font-medium text-2xl text-zinc-900">
          Available Trading Strategies
        </h3>
        <p className="text-md text-[#3E4784]">
          Omnis connects to{" "}
          <span className="text-blue-400">
            <Link href={"https://fapi.asterdex.com"}>AsterDex</Link>
          </span>{" "}
          to deploy trading strategies automatically based on your allocated
          USDT amount. Each strategy intelligently manages order sizing,
          execution, and risk control based on market conditions.
        </p>

        {/* Aster Points Maximizer */}
        <div className="p-4 border rounded-md space-y-2">
          <h4 className="font-semibold text-lg text-zinc-800">
            1. Aster Points Maximizer
          </h4>
          <p className="text-sm">
            <strong>Goal:</strong> Maximize AsterDex reward points by generating
            sustained trading volume.
          </p>
          <p className="text-sm text-gray-600">
            <strong>How it works:</strong>
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 pl-4 space-y-1">
            <li>
              Uses your USDT to repeatedly place buy and sell market orders to
              create volume.
            </li>
            <li>
              Optimized for accumulating points, not for making trading profits.
            </li>
            <li>
              Order sizing and timing are managed automatically based on your
              capital input.
            </li>
          </ul>
          <p className="text-xs font-semibold text-red-500 pt-2">
            <strong>Key Risks:</strong> This strategy is designed to maximize
            points, not profits. Trading fees and slippage can result in
            expected capital loss over time.
          </p>
        </div>

        {/* Normal Grid Strategy */}
        <div className="p-4 border rounded-md space-y-2">
          <h4 className="font-semibold text-lg text-zinc-800">
            2. Normal Grid Strategy
          </h4>
          <p className="text-sm">
            <strong>Goal:</strong> Capture small profits from regular price
            fluctuations within a set price range.
          </p>
          <p className="text-sm text-gray-600">
            <strong>How it works:</strong>
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 pl-4 space-y-1">
            <li>
              Splits your USDT across a series of evenly spaced buy and sell
              orders (arithmetic spacing).
            </li>
            <li>
              Buys when the price drops, sells when the price rises, locking in
              profits as the market moves sideways.
            </li>
            <li>
              Best suited for stable or slightly volatile market conditions.
            </li>
          </ul>
          <p className="text-xs font-semibold text-red-500 pt-2">
            <strong>Key Risks:</strong> If the market moves sharply beyond the
            grid range, profits may stop and open positions could become
            exposed. Trading fees apply.
          </p>
        </div>

        {/* Logarithmic Grid Strategy */}
        <div className="p-4 border rounded-md space-y-2">
          <h4 className="font-semibold text-lg text-zinc-800">
            3. Logarithmic Grid Strategy
          </h4>
          <p className="text-sm">
            <strong>Goal:</strong> Adapt grid trading to wider, more volatile
            market conditions.
          </p>
          <p className="text-sm text-gray-600">
            <strong>How it works:</strong>
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 pl-4 space-y-1">
            <li>
              Divides the price range unevenly: tighter grids at lower prices,
              wider grids at higher prices (logarithmic spacing).
            </li>
            <li>
              Designed to perform better in volatile and fast-moving markets
              compared to Normal Grid.
            </li>
            <li>
              Automatically places and adjusts orders across the calculated grid
              levels.
            </li>
          </ul>
          <p className="text-xs font-semibold text-red-500 pt-2">
            <strong>Key Risks:</strong> Extended price movements beyond the grid
            can leave you with unfilled or exposed positions. Trading fees apply
            to each transaction.
          </p>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="space-y-3 p-4 border">
        <h3 className="font-semibold text-2xl text-red-700">
          Important Disclaimer
        </h3>
        <ul className="text-xs text-red-600 space-y-1 list-disc list-inside">
          <li>
            Trading cryptocurrencies involves significant risk. These strategies
            are provided for educational and demonstration purposes only.
          </li>
          <li>
            There is <strong>no guarantee of profit</strong>, and you could lose
            a significant portion or all of your invested capital.
          </li>
          <li>
            Past performance is not indicative of future results. Exchange fees,
            market volatility, API latency, and software bugs can all impact
            outcomes.
          </li>
          <li>
            Ensure you fully understand each strategy and its risks before
            deploying capital.
          </li>
        </ul>
      </div>
    </div>
  );
};
