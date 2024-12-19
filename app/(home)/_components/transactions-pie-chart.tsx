'use client'

import { TransactionCategory } from '@prisma/client'
import { MapPinnedIcon, TrafficConeIcon } from 'lucide-react'
import { Pie, PieChart } from 'recharts'

import { Card, CardContent } from '@/app/_components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/app/_components/ui/chart'
import type { TransactionPercentagePerCategory } from '@/app/_data/get-dashboard/types'

import PieChartPercentageItem from './pie-chart-percentage-item'

const chartConfig = {
  [TransactionCategory.OFFLINE]: {
    label: 'Offline',
    color: 'hsl(var(--chart-1))',
  },
  [TransactionCategory.ONLINE]: {
    label: 'Online',
    color: 'hsl(var(--chart-4))',
  },
} satisfies ChartConfig

interface TransactionsPieChartProps {
  offlineTotal: number
  onlineTotal: number
  typesPercentage: TransactionPercentagePerCategory
}

const TransactionsPieChart = ({
  offlineTotal,
  onlineTotal,
  typesPercentage,
}: TransactionsPieChartProps) => {
  const chartData = [
    {
      type: TransactionCategory.OFFLINE,
      amount: offlineTotal,
      fill: 'hsl(var(--chart-1))',
    },
    {
      type: TransactionCategory.ONLINE,
      amount: onlineTotal,
      fill: 'hsl(var(--chart-4))',
    },
  ]

  return (
    <Card className="flex flex-row p-12">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>

        <div className="space-y-3">
          <PieChartPercentageItem
            icon={
              <MapPinnedIcon size={16} className="text-[hsl(var(--chart-1))]" />
            }
            title="Offline"
            percentage={typesPercentage[TransactionCategory.OFFLINE]}
          />
          <PieChartPercentageItem
            icon={
              <TrafficConeIcon
                size={16}
                className="text-[hsl(var(--chart-4))]"
              />
            }
            title="Online"
            percentage={typesPercentage[TransactionCategory.ONLINE]}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default TransactionsPieChart
