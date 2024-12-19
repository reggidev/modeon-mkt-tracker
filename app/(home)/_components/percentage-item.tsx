import type { ReactNode } from 'react'

interface PercentageItemProps {
  icon: ReactNode
  title: string
  amount: number
}

const PercentageItem = ({ icon, title, amount }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-accent p-2">{icon}</div>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <p className="text-sm font-bold">
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(amount || 0)}
      </p>
    </div>
  )
}

export default PercentageItem
