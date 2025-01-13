import { CardContent, CardHeader, CardTitle } from '@/app/_components/ui/card'
import { Progress } from '@/app/_components/ui/progress'
import { ScrollArea } from '@/app/_components/ui/scroll-area'
import { TRANSACTION_PLATFORM_LABELS } from '@/app/_constants/transactions'
import type { TotalInvestedPerPlatform } from '@/app/_data/get-dashboard/types'

interface InvestedPerPlatformProps {
  investedPerPlatform: TotalInvestedPerPlatform[]
}

const InvestedPerPlatform = ({
  investedPerPlatform,
}: InvestedPerPlatformProps) => {
  return (
    <ScrollArea className="col-span-2 h-full max-h-[360px] rounded-md border pb-6">
      <CardHeader>
        <CardTitle className="font-bold">Investimento por plataforma</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {investedPerPlatform.map((platform) => (
          <div key={platform.platform} className="space-y-2">
            <div className="flex w-full justify-between">
              <p className="text-sm font-bold">
                {TRANSACTION_PLATFORM_LABELS[platform.platform]}
              </p>
              <p className="text-sm font-bold">{platform.percentageOfTotal}%</p>
            </div>
            <Progress value={platform.percentageOfTotal} />
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  )
}

export default InvestedPerPlatform
