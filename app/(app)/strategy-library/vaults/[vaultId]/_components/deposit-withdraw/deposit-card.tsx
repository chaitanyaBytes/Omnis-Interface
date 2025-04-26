"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "@/lib/icons"
import { TooltipText } from "@/components/ui/tooltip-text"
import { X, ArrowRight } from "lucide-react"
import { formatCurrency, formatNumber } from "@/lib/utils"
import { useEffect, useState } from "react"
import { DepositRules } from "./rules"
import { useUsdtBalance } from "@/hooks/useUsdtBalance"
import { Skeleton } from "@/components/ui/skeleton"
import { useStartStrategy } from "../../_hooks/useStartStrategy"
import { useAccount } from "wagmi"
import { toast } from "sonner"
import { useParams } from "next/navigation"

export const DepositCard = () => {
    const { vaultId } = useParams();

    const [amount, setAmount] = useState("");
    const strategyName = useState(vaultId);
    const [symbol, setSymbol] = useState('CRVUSDT');
    const { address } = useAccount()

    const { formatted, isLoading } = useUsdtBalance()

    const { startStrategy, loading, error } = useStartStrategy();

    const currBalance = Number(formatted);
    const apy = 12.6;
    const vaultBalance = 0;

    useEffect(() => {
        console.log(strategyName[0])
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!amount || !address || !strategyName || !symbol) {
            toast.error("Please fill in all the details.");
            return;
        }

        console.log(address);
        console.log(strategyName);
        console.log(amount);
        console.log(symbol);

        try {
            await startStrategy({
                wallet_address: address,
                usdt_amount: Number(amount),
                strategy_name: strategyName[0] as string, // Ensure type safety with type assertion
                symbol
            })
            toast.success("Strategy Started Successfully");
        } catch (err: any) {
            toast.error(`Error: ${error || 'An error occurred'}`);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={`relative border rounded-lg px-4 py-2 ${Number(amount) > currBalance ? "border-red-500 border-2" : "border-zinc-600/90"}`}>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="text-2xl font-semibold border-none outline-none appearance-textfield [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    {!amount ? <Icons.usdt className="absolute right-2 bottom-1/4 w-6 h-6" /> : <X onClick={() => setAmount("")} className="absolute right-2 bottom-1/4 w-6 h-6 p-1 cursor-pointer text-zinc-800 rounded-full border border-zinc-700" />}
                </div>

                <div className="flex items-center justify-between my-2">
                    <div className="flex gap-2 text-lg">
                        <p>Balance:</p>
                        <p>{isLoading ? <Skeleton className="h-4 w-6" /> : formatCurrency(currBalance)}</p>
                    </div>
                    <Button disabled={isLoading} type="button" onClick={() => setAmount(formatted)} className="rounded-full cursor-pointer px-2 py-1 text-sm bg-[#F4EBFF] text-[#6941C6] hover:bg-[#F4EBFF]/60">MAX</Button>
                </div>

                <div className="space-y-1 mt-6">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-muted-foreground">Your Current Balance</p>
                        <p className="">{formatCurrency(vaultBalance)}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-muted-foreground">New Total After Deposit</p>
                        <p className="">{formatCurrency(vaultBalance + Number(amount))}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-muted-foreground">Estimated Annual Returns</p>
                        <p className="text-[var(--vault-page-primary)]">{formatCurrency((vaultBalance + Number(amount)) * apy / 100)}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center mt-2">
                        <TooltipText text="Your Vault Balance" />
                        <div className="flex flex-row items-center gap-2">
                            <p className="font-normal text-md tracking-tighter text-zinc-400">{formatNumber(0)}</p>
                            {amount &&
                                <div className="flex flex-row items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-green-400" />
                                    <p className="font-normal text-lg tracking-tighter">{formatNumber(Number(amount), 2)}</p>
                                </div>
                            }
                            <Icons.usdt className="w-4 h-4" />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={!amount || loading}
                        className={`w-full border border-zinc-600/80 text-md py-5 my-6 ${amount
                            ? "bg-[#363F72] hover:bg-blue-500 cursor-pointer"
                            : "bg-zinc-600 hover:bg-zinc-800"
                            }`}
                    >
                        Add Funds
                    </Button>

                    <DepositRules />
                </div>
            </form>
        </>
    )
}