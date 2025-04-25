"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "@/lib/icons"
import { TooltipText } from "@/components/ui/tooltip-text"
import { X, ArrowRight } from "lucide-react"
import { formatCurrency, formatNumber } from "@/lib/utils"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { DepositRules } from "./rules"
import { useAccount } from "wagmi"
import { useWithdraw } from "../../_hooks/useWithdraw"
import { toast } from "sonner"
import { useUsdtBalance } from "@/hooks/useUsdtBalance"

export const WithdrawlCard = () => {
    const [amount, setAmount] = useState("");
    const { address } = useAccount()
    const { formatted, isLoading } = useUsdtBalance()
    const { withdraw, loading, error } = useWithdraw();

    const currBalance = Number(formatted);
    const apy = 12.6;
    const vaultBalance = 0;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!address) {
            toast.error("Please fill in all the details.");
            return;
        }

        console.log(address);
        console.log(amount);

        try {
            await withdraw({
                wallet_address: address,
            })
            toast.success("Stragies Withdraw Successfully");
        } catch (err: any) {
            toast.error(`Error: ${error || 'An error occurred'}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative border border-zinc-600/90 rounded-lg px-4 py-2">
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
                    <p>{formatCurrency(currBalance)}</p>
                </div>
                <Button disabled={isLoading} type="button" onClick={() => setAmount(formatted)} className="rounded-full cursor-pointer px-2 py-1 text-sm bg-[#F4EBFF] text-[#6941C6] hover:bg-[#F4EBFF]/60">MAX</Button>
            </div>

            <div className="space-y-1 mt-6">
                <div className="flex flex-row justify-between items-center">
                    <p className="text-muted-foreground">Your Current Balance</p>
                    <p className="">{formatCurrency(currBalance)}</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <p className="text-muted-foreground">New Total After Deposit</p>
                    <p className="">{formatCurrency(currBalance - Number(amount))}</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <p className="text-muted-foreground">Estimated Annual Returns</p>
                    <p className="text-[var(--vault-page-primary)]">{formatCurrency((currBalance - Number(amount)) * apy / 100)}</p>
                </div>
                <div className="flex flex-row justify-between items-center mt-2">
                    <TooltipText text="Your Vault Balance" />
                    <div className="flex flex-row items-center gap-2">
                        <span className="font-normal text-md tracking-tighter text-zinc-400">{formatNumber(0)}</span>
                        {amount &&
                            <div className="flex flex-row items-center gap-1">
                                <ArrowRight className="w-4 h-4 text-red-400" />
                                <p className="font-normal text-lg tracking-tighter">-{formatNumber(Number(amount), 2)}</p>
                            </div>
                        }
                        <Icons.usdt className="w-4 h-4" />
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={!amount}
                    className={`w-full border border-zinc-600/80 text-md py-5 my-6 ${amount
                        ? "bg-[#363F72] hover:bg-blue-500 cursor-pointer"
                        : "bg-zinc-600 hover:bg-zinc-800"
                        }`}
                >
                    Remove Funds
                </Button>

                <DepositRules />
            </div>
        </form>
    )
}