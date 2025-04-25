import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ArrowUpDown } from "lucide-react"

export function StrategySort() {
    return (
        <Select>
            <SelectTrigger className="w-full rounded-3xl border-muted-foreground">
                <div className="flex items-center gap-2">
                    <ArrowUpDown size={20} />
                    <span>APY (Highest first)</span>
                </div>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>

                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
