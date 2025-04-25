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
import { Filter } from "lucide-react"

export function StrategyFilter() {
    return (
        <Select>
            <SelectTrigger className="w-full rounded-3xl border-muted-foreground">
                <div className="flex items-center gap-2">
                    <Filter size={20} />
                    <span>Filter</span>
                </div>
            </SelectTrigger>
            <SelectContent>

            </SelectContent>
        </Select>
    )
}
