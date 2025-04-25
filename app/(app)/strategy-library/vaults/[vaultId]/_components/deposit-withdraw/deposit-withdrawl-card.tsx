import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { DepositCard } from "./deposit-card"
import { WithdrawlCard } from "./withdrawl-card"

export function DepositWaithrawlCard() {
    return (
        <Card className="w-full rounded-2xl h-fit bg-[#f8f9fcaf] shadow-none border-none">
            <Tabs defaultValue="Add Funds" className="h-full flex flex-col">
                <CardHeader>
                    <TabsList className="grid w-full grid-cols-2 h-fit">
                        <TabsTrigger value="Add Funds" className="text-md cursor-pointer py-2">Add Funds</TabsTrigger>
                        <TabsTrigger value="Remove Funds" className="text-md cursor-pointer py-2">Remove Funds</TabsTrigger>
                    </TabsList>
                </CardHeader>

                <CardContent className="h-full mt-4">
                    <TabsContent value="Add Funds" className="h-full">
                        <DepositCard />
                    </TabsContent>

                    <TabsContent value="Remove Funds" className="h-full">
                        <WithdrawlCard />
                    </TabsContent>
                </CardContent>
            </Tabs>
        </Card >
    )
}