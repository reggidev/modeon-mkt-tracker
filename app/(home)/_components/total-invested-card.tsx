import {
  CoinsIcon,
  MapPinnedIcon,
  TrafficConeIcon,
  WalletIcon,
} from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/app/_components/ui/card'
import { db } from '@/app/_lib/prisma'

import PercentageItem from './percentage-item'

const TotalInvestedCard = async () => {
  const investmentTotal = Number(
    (
      await db.transaction.aggregate({
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount,
  )
  const marketingTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          category: 'MARKETING',
        },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount,
  )
  const paidTrafficTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          category: 'PAID_TRAFFIC',
        },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount,
  )

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
