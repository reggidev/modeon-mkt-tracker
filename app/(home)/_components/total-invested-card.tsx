import { CoinsIcon, MapPinnedIcon, TrafficConeIcon } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/app/_components/ui/card'

import PercentageItem from './percentage-item'

interface TotalInvestedCardProps {
  month: string
  investmentTotal: number
  marketingTotal: number
  paidTrafficTotal: number
}

const TotalInvestedCard = async ({
  investmentTotal,
  marketingTotal,
  paidTrafficTotal,
}: TotalInvestedCardProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex-row items-center gap-2">
          <p className="text-2xl font-bold">Investimento</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <PercentageItem
            icon={<CoinsIcon size={16} />}
            title="Total"
            amount={investmentTotal}
          />
          <PercentageItem
            icon={<MapPinnedIcon size={16} />}
            title="Marketing"
            amount={marketingTotal}
          />
          <PercentageItem
            icon={<TrafficConeIcon size={16} />}
            title="Tráfego Pago"
            amount={paidTrafficTotal}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default TotalInvestedCard
