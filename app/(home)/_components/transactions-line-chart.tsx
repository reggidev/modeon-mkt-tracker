'use client'

import { TransactionCategory } from '@prisma/client'
import * as React from 'react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/app/_components/ui/chart'

const chartData = [
  { date: '2024-04-01', ONLINE: 222, OFFLINE: 150 },
  { date: '2024-04-02', ONLINE: 97, OFFLINE: 180 },
  { date: '2024-04-03', ONLINE: 167, OFFLINE: 120 },
  { date: '2024-04-04', ONLINE: 242, OFFLINE: 260 },
  { date: '2024-04-05', ONLINE: 373, OFFLINE: 290 },
  { date: '2024-04-06', ONLINE: 301, OFFLINE: 340 },
  { date: '2024-04-07', ONLINE: 245, OFFLINE: 180 },
  { date: '2024-04-08', ONLINE: 409, OFFLINE: 320 },
  { date: '2024-04-09', ONLINE: 59, OFFLINE: 110 },
  { date: '2024-04-10', ONLINE: 261, OFFLINE: 190 },
  { date: '2024-04-11', ONLINE: 327, OFFLINE: 350 },
  { date: '2024-04-12', ONLINE: 292, OFFLINE: 210 },
  { date: '2024-04-13', ONLINE: 342, OFFLINE: 380 },
  { date: '2024-04-14', ONLINE: 137, OFFLINE: 220 },
  { date: '2024-04-15', ONLINE: 120, OFFLINE: 170 },
  { date: '2024-04-16', ONLINE: 138, OFFLINE: 190 },
  { date: '2024-04-17', ONLINE: 446, OFFLINE: 360 },
  { date: '2024-04-18', ONLINE: 364, OFFLINE: 410 },
  { date: '2024-04-19', ONLINE: 243, OFFLINE: 180 },
  { date: '2024-04-20', ONLINE: 89, OFFLINE: 150 },
  { date: '2024-04-21', ONLINE: 137, OFFLINE: 200 },
  { date: '2024-04-22', ONLINE: 224, OFFLINE: 170 },
  { date: '2024-04-23', ONLINE: 138, OFFLINE: 230 },
  { date: '2024-04-24', ONLINE: 387, OFFLINE: 290 },
  { date: '2024-04-25', ONLINE: 215, OFFLINE: 250 },
  { date: '2024-04-26', ONLINE: 75, OFFLINE: 130 },
  { date: '2024-04-27', ONLINE: 383, OFFLINE: 420 },
  { date: '2024-04-28', ONLINE: 122, OFFLINE: 180 },
  { date: '2024-04-29', ONLINE: 315, OFFLINE: 240 },
  { date: '2024-04-30', ONLINE: 454, OFFLINE: 380 },
  { date: '2024-05-01', ONLINE: 165, OFFLINE: 220 },
  { date: '2024-05-02', ONLINE: 293, OFFLINE: 310 },
  { date: '2024-05-03', ONLINE: 247, OFFLINE: 190 },
  { date: '2024-05-04', ONLINE: 385, OFFLINE: 420 },
  { date: '2024-05-05', ONLINE: 481, OFFLINE: 390 },
  { date: '2024-05-06', ONLINE: 498, OFFLINE: 520 },
  { date: '2024-05-07', ONLINE: 388, OFFLINE: 300 },
  { date: '2024-05-08', ONLINE: 149, OFFLINE: 210 },
  { date: '2024-05-09', ONLINE: 227, OFFLINE: 180 },
  { date: '2024-05-10', ONLINE: 293, OFFLINE: 330 },
  { date: '2024-05-11', ONLINE: 335, OFFLINE: 270 },
  { date: '2024-05-12', ONLINE: 197, OFFLINE: 240 },
  { date: '2024-05-13', ONLINE: 197, OFFLINE: 160 },
  { date: '2024-05-14', ONLINE: 448, OFFLINE: 490 },
  { date: '2024-05-15', ONLINE: 473, OFFLINE: 380 },
  { date: '2024-05-16', ONLINE: 338, OFFLINE: 400 },
  { date: '2024-05-17', ONLINE: 499, OFFLINE: 420 },
  { date: '2024-05-18', ONLINE: 315, OFFLINE: 350 },
  { date: '2024-05-19', ONLINE: 235, OFFLINE: 180 },
  { date: '2024-05-20', ONLINE: 177, OFFLINE: 230 },
  { date: '2024-05-21', ONLINE: 82, OFFLINE: 140 },
  { date: '2024-05-22', ONLINE: 81, OFFLINE: 120 },
  { date: '2024-05-23', ONLINE: 252, OFFLINE: 290 },
  { date: '2024-05-24', ONLINE: 294, OFFLINE: 220 },
  { date: '2024-05-25', ONLINE: 201, OFFLINE: 250 },
  { date: '2024-05-26', ONLINE: 213, OFFLINE: 170 },
  { date: '2024-05-27', ONLINE: 420, OFFLINE: 460 },
  { date: '2024-05-28', ONLINE: 233, OFFLINE: 190 },
  { date: '2024-05-29', ONLINE: 78, OFFLINE: 130 },
  { date: '2024-05-30', ONLINE: 340, OFFLINE: 280 },
  { date: '2024-05-31', ONLINE: 178, OFFLINE: 230 },
  { date: '2024-06-01', ONLINE: 178, OFFLINE: 200 },
  { date: '2024-06-02', ONLINE: 470, OFFLINE: 410 },
  { date: '2024-06-03', ONLINE: 103, OFFLINE: 160 },
  { date: '2024-06-04', ONLINE: 439, OFFLINE: 380 },
  { date: '2024-06-05', ONLINE: 88, OFFLINE: 140 },
  { date: '2024-06-06', ONLINE: 294, OFFLINE: 250 },
  { date: '2024-06-07', ONLINE: 323, OFFLINE: 370 },
  { date: '2024-06-08', ONLINE: 385, OFFLINE: 320 },
  { date: '2024-06-09', ONLINE: 438, OFFLINE: 480 },
  { date: '2024-06-10', ONLINE: 155, OFFLINE: 200 },
  { date: '2024-06-11', ONLINE: 92, OFFLINE: 150 },
  { date: '2024-06-12', ONLINE: 492, OFFLINE: 420 },
  { date: '2024-06-13', ONLINE: 81, OFFLINE: 130 },
  { date: '2024-06-14', ONLINE: 426, OFFLINE: 380 },
  { date: '2024-06-15', ONLINE: 307, OFFLINE: 350 },
  { date: '2024-06-16', ONLINE: 371, OFFLINE: 310 },
  { date: '2024-06-17', ONLINE: 475, OFFLINE: 520 },
  { date: '2024-06-18', ONLINE: 107, OFFLINE: 170 },
  { date: '2024-06-19', ONLINE: 341, OFFLINE: 290 },
  { date: '2024-06-20', ONLINE: 408, OFFLINE: 450 },
  { date: '2024-06-21', ONLINE: 169, OFFLINE: 210 },
  { date: '2024-06-22', ONLINE: 317, OFFLINE: 270 },
  { date: '2024-06-23', ONLINE: 480, OFFLINE: 530 },
  { date: '2024-06-24', ONLINE: 132, OFFLINE: 180 },
  { date: '2024-06-25', ONLINE: 141, OFFLINE: 190 },
  { date: '2024-06-26', ONLINE: 434, OFFLINE: 380 },
  { date: '2024-06-27', ONLINE: 448, OFFLINE: 490 },
  { date: '2024-06-28', ONLINE: 149, OFFLINE: 200 },
  { date: '2024-06-29', ONLINE: 103, OFFLINE: 160 },
  { date: '2024-06-30', ONLINE: 446, OFFLINE: 400 },
]

const chartConfig = {
  views: {
    label: 'Page Views',
  },
  [TransactionCategory.OFFLINE]: {
    label: 'Offline',
    color: 'hsl(var(--chart-1))',
  },
  [TransactionCategory.ONLINE]: {
    label: 'Online',
    color: 'hsl(var(--chart-4))',
  },
} satisfies ChartConfig

const TransactionsLineChart = () => {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('ONLINE')

  const total = React.useMemo(
    () => ({
      ONLINE: chartData.reduce((acc, curr) => acc + curr.ONLINE, 0),
      OFFLINE: chartData.reduce((acc, curr) => acc + curr.OFFLINE, 0),
    }),
    [],
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Investimento ao longo do ano</CardTitle>
          <CardDescription>
            Investimento ao longo dos últimos 6 meses.
          </CardDescription>
        </div>
        <div className="flex">
          {['ONLINE', 'OFFLINE'].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('pt-BR', {
                  month: 'short',
                  day: 'numeric',
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('pt-BR', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default TransactionsLineChart
