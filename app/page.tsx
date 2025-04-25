import { Button } from "@/components/ui/button";
import { logos } from "@/lib/icons"
import Link from "next/link";

export default function Home() {

  return (
    <div className="relative font-[family-name:var(--font-geist-sans)] text-foreground">
      <div className="pt-4 px-4 mx-auto max-w-5xl text-center space-y-20">
        <div className="flex flex-col items-center justify-center space-y-6">

          <div className="flex flex-col items-center gap-2">
            <logos.omnisBlack width={80} />
            <div className="text-[5.5rem] font-semibold tracking-tight leading-none">
              <p>Omnis AI</p>
              <p>Portfolio Agent</p>
            </div>
          </div>

          <div className="text-center text-xl max-w-2xl mx-auto">
            AI-powered DeFi strategist that builds and executes personalized portfolio strategies on-chain. Chat with our agent to create, deploy, and monitor custom trading strategies without writing code.
          </div>
          <Link href={"/sign-in"}>
            <Button className="px-6 py-6 text-xl rounded-3xl cursor-pointer text-center relative overflow-hidden bg-gradient-to-r from-[#000A3F] via-[#000A3F] to-[#6FB1FC] flex justify-center group/modal-btn">
              Launch App
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="relative w-[300px] h-[180px] rounded-3xl overflow-hidden">
            {/* Background layer */}
            <div className="absolute inset-0 bg-[url('/stats/img1.jpeg')] bg-cover bg-center z-0" />
            <div className="absolute inset-0 bg-[#BC000070] bg-cover bg-center z-0" />

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col gap-2 items-center justify-center h-full text-white text-center">
              <p className="text-7xl font-semibold">$1.2M</p>
              <p className="text-3xl">Total Value Locked</p>
            </div>
          </div>

          <div className="relative w-[300px] h-[180px] rounded-3xl overflow-hidden">
            {/* Background layer */}
            <div className="absolute inset-0 bg-[url('/stats/img2.jpeg')] bg-cover bg-center z-0" />
            <div className="absolute inset-0 bg-[#01412C70] bg-cover bg-center z-0" />

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col gap-2 items-center justify-center h-full text-white text-center">
              <p className="text-7xl font-semibold">12</p>
              <p className="text-3xl">Strategy Count</p>
            </div>
          </div>

          <div className="relative w-[300px] h-[180px] rounded-3xl overflow-hidden">
            {/* Background layer */}
            <div className="absolute inset-0 bg-[url('/stats/img3.jpeg')] bg-cover bg-center z-0" />
            <div className="absolute inset-0 bg-[#133AD870] bg-cover bg-center z-0" />

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col gap-2 items-center justify-center h-full text-white text-center">
              <p className="text-7xl font-semibold">17.8%</p>
              <p className="text-3xl">Avergae APR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
