import { auth } from '@clerk/nextjs/server'
import { TransactionCategory } from '@prisma/client'

import { db } from '@/app/_lib/prisma'

import type {
  TotalInvestedPerPlatform,
  TransactionPercentagePerCategory,
} from './types'

export const getDashboard = async (month: string, year: string) => {
  const { userId } = await auth()
  if (!userId) {
    throw new Error('Unauthorized')
  }

  const where = {
    userId,
    date: {
      gte: new Date(`${year}-${month}-01`),
      lt: new Date(`${year}-${month}-31`),
    },
  }

  const investmentTotal = Number(
    (
      await db.transaction.aggregate({
        where,
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount,
  )
  const offlineTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          ...where,
          category: 'OFFLINE',
        },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount,
  )
  const onlineTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          ...where,
          category: 'ONLINE',
        },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount,
  )
  /* Total Invested Card */

  /* Percentages Pie Chart */
  const typesPercentage: TransactionPercentagePerCategory = {
    [TransactionCategory.OFFLINE]: Math.round(
      (Number(offlineTotal || 0) / Number(investmentTotal)) * 100,
    ),
    [TransactionCategory.ONLINE]: Math.round(
      (Number(onlineTotal || 0) / Number(investmentTotal)) * 100,
    ),
  }
  /* Percentages Pie Chart */

  /* Percentages per Platform (Component) */
  const totalInvestedPerPlatform: TotalInvestedPerPlatform[] = (
    await db.transaction.groupBy({
      by: ['platform'],
      where,
      _sum: {
        amount: true,
      },
    })
  ).map((platform) => ({
    platform: platform.platform,
    totalAmount: Number(platform._sum.amount),
    percentageOfTotal: Math.round(
      (Number(platform._sum.amount) / Number(investmentTotal)) * 100,
    ),
  }))
  /* Percentages per Platform (Component) */

  /* Last Investments */
  const lastInvestments = await db.transaction.findMany({
    where,
    orderBy: { date: 'desc' },
    take: 15,
  })
  /* Last Investments */

  return {
    investmentTotal,
    offlineTotal,
    onlineTotal,
    typesPercentage,
    totalInvestedPerPlatform,
    lastInvestments: JSON.parse(JSON.stringify(lastInvestments)),
  }
}
