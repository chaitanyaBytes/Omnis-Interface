"use client"

import { Transaction } from "@/types/api"
import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"
import { formatDate, formatNumber } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export const columns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "type",
        header: "Type",
        cell: ({ row }) => <p className="text-[#293056] text-sm">{row.original.type}</p>
    },
    {
        accessorKey: "date",
        header: "Date",
        enableSorting: true,
        cell: ({ row }) => <p className="text-[#293056] text-sm">{formatDate(row.original.date)}</p>
    },
    {
        accessorKey: "strategy",
        header: "Strategy",
        cell: ({ row }) => <p className="text-sm font-medium">{row.original.strategy}</p>
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => <div className="text-sm font-semibold">{row.original.amount ? `${formatNumber(row.original.amount)} USDT` : "--"}</div>
    },

    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            let badge;
            switch (row.original.status) {
                case "Completed":
                    badge = <Badge className="bg-[#D1FADF] w-full md:w-3/4 text-[#027A48] font-normal rounded-2xl text-sm py-0.5">{row.original.status}</Badge>;
                    break;
                case "Pending":
                    badge = <Badge className="bg-gray-300 w-full md:w-3/4 text-gray-500 font-normal rounded-2xl text-sm py-0.5">{row.original.status}</Badge>;
                    break;
                case "Failed":
                    badge = <Badge className="bg-red-300 w-full md:w-3/4 text-red-600 font-normal rounded-2xl text-sm py-0.5">{row.original.status}</Badge>;
                    break;
                default:
                    badge = <Badge className="bg-[#D1FADF] w-full text-[#027A48] font-normal rounded-2xl text-sm py-0.5">{row.original.status}</Badge>;
            }
            return badge;
        },
    },
    {
        accessorKey: "network",
        header: "Network",
        cell: ({ row }) => `${row.original.network}`,
    },
    {
        accessorKey: "gas",
        header: "Gas",
        cell: ({ row }) => `${formatNumber(row.original.gas, 4)}`,
    },
    {
        accessorKey: "id",
        header: "Transaction",
        cell: ({ row }) => <CellAction tx={row.original.id} />,
    },

]


