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
  [TransactionCategory.MARKETING]: {
    label: 'Marketing',
    color: 'hsl(var(--chart-1))',
  },
  [TransactionCategory.PAID_TRAFFIC]: {
    label: 'Tráfego Pago',
    color: 'hsl(var(--chart-4))',
  },
} satisfies ChartConfig

interface TransactionsPieChartProps {
  marketingTotal: number
  paidTrafficTotal: number
  typesPercentage: TransactionPercentagePerCategory
}

const TransactionsPieChart = ({
  marketingTotal,
  paidTrafficTotal,
  typesPercentage,
}: TransactionsPieChartProps) => {
  const chartData = [
    {
      type: TransactionCategory.MARKETING,
      amount: marketingTotal,
      fill: 'hsl(var(--chart-1))',
    },
    {
      type: TransactionCategory.PAID_TRAFFIC,
      amount: paidTrafficTotal,
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
            title="Marketing"
            percentage={typesPercentage[TransactionCategory.MARKETING]}
          />
          <PieChartPercentageItem
            icon={
              <TrafficConeIcon
                size={16}
                className="text-[hsl(var(--chart-4))]"
              />
            }
            title="Tráfego Pago"
            percentage={typesPercentage[TransactionCategory.PAID_TRAFFIC]}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default TransactionsPieChart
