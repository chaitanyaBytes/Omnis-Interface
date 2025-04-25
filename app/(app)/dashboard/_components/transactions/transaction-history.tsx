"use client"

import { DataTable } from "./data-table"
import { columns } from "./columns"
import { useTransactions } from "@/hooks/useTransactions";

export const TransactionHistory = () => {
    const { transactions } = useTransactions();

    return (
        <div className="bg-white p-4 rounded-2xl shadow-xl">
            <div className="text-xl font-medium">
                Transaction History
            </div>

            <div className="container mx-auto">
                <DataTable columns={columns} data={transactions} />
            </div>
        </div>
    )
}