"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

interface TvlProps {
    currTvl: number,
    maxCap: number
}

export function TvlBar({ currTvl, maxCap }: TvlProps) {
    const [tvl, setTvl] = React.useState(3)

    React.useEffect(() => {
        const timer = setTimeout(() => setTvl(currTvl / maxCap * 100), 500)
        return () => clearTimeout(timer)
    }, [])

    return <Progress value={tvl} className="bg-[#D3E1FF]" />
}
