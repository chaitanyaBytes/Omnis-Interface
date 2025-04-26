"use client"

import { logos } from "@/lib/icons"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { WalletStatus } from "./ui/wallet-status";
import { MainNav } from "./main-nav";
import { siteConfig } from "@/config/site";

export const Header = () => {
    const path = usePathname();
    console.log(path)

    return (
        <header className="sticky top-0 bg-white/50 z-50">
            <div className="max-w-[90rem] pr-2 mx-auto w-full">
                <div className="flex justify-between h-12 items-center font-medium">
                    <div className="flex items-center gap-2">
                        <Link href="/">
                            <logos.omnisFullBlack width={130} height={130} />
                        </Link>
                    </div>

                    {path !== "/" && !path.includes("sign-in") && <MainNav />}

                    {path === "/" || path.includes("sign-in") ?
                        <div className="flex gap-4">
                            <Link href={siteConfig.links.docs} target="_blank">Docs</Link>
                            <Link href={siteConfig.links.github} target="_blank">Github</Link>
                            <Link href={siteConfig.links.twitter} target="_blank">Support</Link>
                        </div>
                        :
                        <WalletStatus />
                    }
                </div>
            </div>
        </header>
    )
}