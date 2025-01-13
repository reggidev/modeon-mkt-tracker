import { CoinsIcon, MapPinnedIcon, TrafficConeIcon } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/app/_components/ui/card'
import { Separator } from '@/app/_components/ui/separator'

import PercentageItem from './percentage-item'

interface TotalInvestedCardProps {
  month: string
  year: string
  investmentTotal: number
  offlineTotal: number
  onlineTotal: number
}

const TotalInvestedCard = async ({
  investmentTotal,
  offlineTotal,
  onlineTotal,
}: TotalInvestedCardProps) => {
  return (
    <div className="space-y-6">
      <Card className="max-h-[360px] min-h-[360px]">
        <CardHeader className="flex-row items-center gap-2">
          <p className="text-2xl font-bold">Investimento total</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <PercentageItem
            icon={<MapPinnedIcon size={16} />}
            title="Offline"
            amount={offlineTotal}
          />
          <PercentageItem
            icon={<TrafficConeIcon size={16} />}
            title="Online"
            amount={onlineTotal}
          />
          <Separator />
          <PercentageItem
            icon={<CoinsIcon size={16} />}
            title="Total"
            amount={investmentTotal}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default TotalInvestedCard
