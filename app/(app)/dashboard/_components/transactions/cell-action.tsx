"use client"
import { Eye } from "lucide-react";
import Link from "next/link";

interface CellActionProps {
    tx: string;
}

export const CellAction = ({ tx }: CellActionProps) => {
    return (
        <Link href={`https://bscscan.com/`} className="flex gap-2">
            <Eye />
            <p>View</p>
        </Link>
    )
}