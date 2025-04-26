import Link from "next/link"

export const UserInstrctions = () => {
    return (
        <div className="p-4 space-y-4 rounded-2xl bg-[#F8F9FC]">
            <div className="text-2xl text-[#1C274C] font-semibold">
                Wallet Connection & Setup Guide
            </div>

            <div className="text-[#4E5BA6] text-sm">
                <ol className="list-decimal pl-2">
                    <li className="ml-2">
                        Connect your Binance Smart Chain compatible wallet to get started.
                    </li>
                    <li className="ml-2">
                        Visit Aster (link) and connect the same wallet to obtain your API keys.
                    </li>
                    <li className="ml-2">
                        Using your wallet, deposit USDT to your Aster account.
                    </li>
                    <li className="ml-2">
                        Return to Omnis and carefully paste your API keys in the designated fields.
                    </li>
                    <li className="ml-2">
                        Enter your desired trading amount and complete your deposit.
                    </li>
                </ol>
            </div>



            <div className="text-[#4E5BA6] text-sm">
                <p>Aster Link: </p>
                <Link className="underline text-blue-400" href={"https://www.asterdex.com/en/api-management"}>https://www.asterdex.com/en/api-management</Link>
            </div>
        </div>
    )
}