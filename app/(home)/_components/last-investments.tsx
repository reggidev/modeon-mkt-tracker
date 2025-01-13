import type { Transaction } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/app/_components/ui/button'
import { CardContent, CardHeader, CardTitle } from '@/app/_components/ui/card'
import { ScrollArea } from '@/app/_components/ui/scroll-area'
import { TRANSACTION_PAYMENT_METHOD_ICONS } from '@/app/_constants/transactions'
import { formatCurrency } from '@/app/utils/currency'

interface LastInvestmentsProps {
  lastInvestments: Transaction[]
}

const LastInvestments = ({ lastInvestments }: LastInvestmentsProps) => {
  return (
    <ScrollArea className="rounded-md border">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="font-bold">Últimos Investimentos</CardTitle>
        <Button variant="outline" className="rounded-full font-bold" asChild>
          <Link href="/transactions">Ver mais</Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {lastInvestments.map((investment) => (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-accent p-2">
                <Image
                  src={
                    TRANSACTION_PAYMENT_METHOD_ICONS[
                      investment.platform as keyof typeof TRANSACTION_PAYMENT_METHOD_ICONS
                    ]
                  }
                  width={20}
                  height={20}
                  alt="Pix"
                />
              </div>
              <div>
                <p className="text-sm font-bold">{investment.name}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(investment.date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
            <p className="text-sm font-bold text-primary">
              {formatCurrency(Number(investment.amount))}
            </p>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  )
}

export default LastInvestments
