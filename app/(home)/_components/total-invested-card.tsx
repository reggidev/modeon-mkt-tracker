import {
  CoinsIcon,
  MapPinnedIcon,
  TrafficConeIcon,
  WalletIcon,
} from 'lucide-react'

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
          <div className="rounded-lg bg-accent p-2">
            <WalletIcon size={16} />
          </div>
          <p className="font-bold">Investimento</p>
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
