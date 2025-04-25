import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VaultChart from "../performance/vault-chart"

export const Risk = () => {
    return (
        <div>
            <Tabs defaultValue="market-crash">
                <h2 className="text-2xl mb-1">Risk Simualation</h2>

                <div className="flex flex-row flex-wrap items-center justify-between gap-6">
                    <div>
                        <p>Scenerio analysis</p>
                        <p className="text-muted-foreground max-w-sm  text-xs">The simulation shows projected vault performance during a severe market turndown of -20%</p>
                    </div>

                    <div>
                        <TabsList className="grid grid-cols-3">
                            <TabsTrigger value="market-crash">Market Crash (20%)</TabsTrigger>
                            <TabsTrigger value="fee-anomaly">Fee anaomaly</TabsTrigger>
                            <TabsTrigger value="Liquidity-crises">Liquidity Crises</TabsTrigger>
                        </TabsList>
                    </div>
                </div>

                <TabsContent value="market-crash">
                    <div className="mt-4 h-[300px]">
                        <VaultChart timeRange={"30D"} />
                    </div>
                </TabsContent>
                <TabsContent value="fee-anomaly">
                    <div className="mt-4 h-[300px]">
                        <VaultChart timeRange={"30D"} />
                    </div>
                </TabsContent>
                <TabsContent value="Liquidity-crises">
                    <div className="mt-4 h-[300px]">
                        <VaultChart timeRange={"30D"} />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}