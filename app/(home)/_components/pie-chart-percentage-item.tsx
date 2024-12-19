import type { ReactNode } from 'react'

interface PieChartPercentageItemProps {
  icon: ReactNode
  title: string
  percentage: number
}

const PieChartPercentageItem = ({
  icon,
  title,
  percentage,
}: PieChartPercentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-accent p-2">{icon}</div>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <p className="text-sm font-bold">{percentage}%</p>
    </div>
  )
}

export default PieChartPercentageItem
