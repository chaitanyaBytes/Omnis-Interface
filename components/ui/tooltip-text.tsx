import { cn } from "@/lib/utils"

export const TooltipText = ({ text, className }: { text: string, className?: string }) => {
    return (
        <p className={cn("font-normal text-sm text-zinc-500 tracking-tighter border-b border-dashed border-zinc-400/80", className)}>{text}</p>
    )
}
