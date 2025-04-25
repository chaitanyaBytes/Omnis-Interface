import { DataTable } from "./data-table"
import { columns } from "./columns"
import { useTransactions } from "@/hooks/useTransactions";

export const TransactionHistory = () => {
    const { transactions } = useTransactions();

    return (
        <div>
            <div className="text-2xl">
                Transaction History
            </div>

            <div className="container mx-auto">
                <DataTable searchKey="status" columns={columns} data={transactions} />
            </div>
        </div>
    )
}