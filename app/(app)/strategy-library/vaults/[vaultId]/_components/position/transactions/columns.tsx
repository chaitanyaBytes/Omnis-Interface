"use client"

import { Transaction } from "@/types/api"
import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"
import { formatCurrency } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

export const columns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "date",
        header: "Date",
        enableSorting: true,
        cell: ({ row }) => `${formatDate(row.original.date)}`
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => `${formatCurrency(row.original.amount!)}`
    },

    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            let badge;
            switch (row.original.status) {
                case "Completed":
                    badge = <Badge className="bg-[#D1FADF] w-full md:w-1/2 text-[#027A48] font-normal rounded-2xl text-sm py-1">{row.original.status}</Badge>;
                    break;
                case "Pending":
                    badge = <Badge className="bg-gray-300 w-full md:w-1/2 text-gray-500 font-normal rounded-2xl text-sm py-1">{row.original.status}</Badge>;
                    break;
                case "Failed":
                    badge = <Badge className="bg-red-300 w-full md:w-1/2 text-red-600 font-normal rounded-2xl text-sm py-1">{row.original.status}</Badge>;
                    break;
                default:
                    badge = <Badge className="bg-[#D1FADF] w-full text-[#027A48] font-normal rounded-2xl text-sm py-1">{row.original.status}</Badge>;
            }
            return badge;
        },
    },
    {
        accessorKey: "id",
        header: "Transaction",
        cell: ({ row }) => <CellAction tx={row.original.id} />,
    },

]


