import {
  FacebookIcon,
  InstagramIcon,
  PanelTopIcon,
  WalletIcon,
} from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/app/_components/ui/card'
import { db } from '@/app/_lib/prisma'

import PercentageItem from './percentage-item'

const MediaInvestedCard = async () => {
  // TODO: Adicionar Google Ads total
  const facebookTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          platform: 'FACEBOOK',
        },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount,
  )
  const instagramTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          platform: 'INSTAGRAM',
        },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount,
  )
  const webTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          platform: 'WEB',
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
          <p className="font-bold">Redes sociais</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <PercentageItem
            icon={<FacebookIcon size={16} />}
            title="Facebook"
            amount={facebookTotal}
          />
          <PercentageItem
            icon={<InstagramIcon size={16} />}
            title="Instagram"
            amount={instagramTotal}
          />
          <PercentageItem
            icon={<PanelTopIcon size={16} />}
            title="Web"
            amount={webTotal}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default MediaInvestedCard
