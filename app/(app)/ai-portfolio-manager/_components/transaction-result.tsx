"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { formatNumber } from "@/lib/utils"
import { Transaction } from "@/types/transaction-result";
import { CircleCheck, SquareArrowOutUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface TransactionResultProps {
    transactionResult: Transaction
    straegiesNum: number;
}

export const TransactionResult = ({ straegiesNum, transactionResult }: TransactionResultProps) => {
    const router = useRouter();

    return (
        <div className="relative rounded-2xl w-xl">
            {/* background layer */}
            <div className="absolute rounded-2xl inset-0 bg-[url('/green-bg.jpeg')] bg-cover bg-center -z-10" />
            <div className="absolute rounded-2xl inset-0 bg-[#00381F66] bg-cover bg-center -z-10" />

            <div className="px-6 py-3">
                <div className="text-accent text-md font-medium">Transaction Complete</div>
            </div>

            <div className="py-3 px-6 bg-white rounded-b-xl text-[#293056] space-y-2">
                <div className="flex items-center justify-between text-md">
                    <p>Transaction Hash</p>
                    <div className="flex items-center gap-1.5 text-[#6938EF]">
                        <SquareArrowOutUpRight size={19} />
                        <p className="font-medium">{transactionResult.hash} USDT</p>
                    </div>
                </div>

                <Separator orientation="horizontal" />

                <div className="flex items-center justify-between text-md text-[#293056]">
                    <p>Status</p>
                    <div className="flex items-center gap-1.5 text-[#039855]">
                        <CircleCheck size={19} />
                        <p className="font-medium">{transactionResult.status}</p>
                    </div>
                </div>

                <Separator orientation="horizontal" />

                <div className="flex items-center justify-between text-md text-[#293056]">
                    <p>Gas Paid</p>
                    <p className="font-semibold">{formatNumber(transactionResult.gasPaid, 3)} BNB</p>
                </div>

                <Separator orientation="horizontal" />

                <div className="flex items-center justify-between text-md text-[#293056]">
                    <p>Strategies activated</p>
                    <p className="font-semibold">{transactionResult.strategiesActivated}/{straegiesNum}</p>
                </div>

                <div className="bg-[#E1FFED] px-4 py-2 text-[#027A48] mt-4 rounded-2xl">
                    This will execute via our vault smart contract. You'll need to sign this transaction with your wallet.
                </div>

                <Button onClick={() => router.push("/dashboard")} className="bg-[#363F72] w-full rounded-3xl hover:bg-[#363F72]/90 cursor-pointer">
                    View in Dashboard
                </Button>
            </div>
        </div>
    )
}