import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Flame, Zap, LucideIcon } from "lucide-react" // import your icons

import { cn } from "@/lib/utils"

const statusVariants = cva(
    "inline-flex items-center gap-2 px-2 py-1 rounded-full text-white text-sm font-medium",
    {
        variants: {
            variant: {
                HOT: "bg-gradient-to-r from-[#F31E06] via-[#F31E06] to-[#F5AF19]",
                NEW: "bg-gradient-to-r from-[#006AD5] via-[#006AD5] to-[#00D153]",
            },
        },
        defaultVariants: {
            variant: "HOT",
        },
    }
)

type StatusProps = React.ComponentProps<"button"> &
    VariantProps<typeof statusVariants> & {
        asChild?: boolean
        icon?: LucideIcon
    }

function Status({
    className,
    variant,
    asChild = false,
    children,
    icon: IconOverride,
    ...props
}: StatusProps) {
    const Comp = asChild ? Slot : "button"

    const defaultIcons: Record<string, LucideIcon> = {
        HOT: Flame,
        NEW: Zap,
    }

    const Icon = IconOverride || defaultIcons[variant || "HOT"]

    return (
        <Comp
            data-slot="button"
            className={cn(statusVariants({ variant, className }))}
            {...props}
        >
            <div className="flex gap-0.5 items-center justify-center">
                {Icon &&
                    <Icon className="w-4 h-4" stroke="1" fill="white" />}
                {children}
            </div>
        </Comp>
    )
}

export { Status, statusVariants }
