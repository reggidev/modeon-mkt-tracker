import { TransactionCategory } from '@prisma/client'

import { db } from '@/app/_lib/prisma'

import type { TransactionPercentagePerCategory } from './types'

export const getDashboard = async (month: string) => {
  /* Total Invested Card */
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
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
  const marketingTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          ...where,
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
          ...where,
          category: 'PAID_TRAFFIC',
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
    [TransactionCategory.MARKETING]: Math.round(
      (Number(marketingTotal || 0) / Number(investmentTotal)) * 100,
    ),
    [TransactionCategory.PAID_TRAFFIC]: Math.round(
      (Number(paidTrafficTotal || 0) / Number(investmentTotal)) * 100,
    ),
  }
  /* Percentages Pie Chart */

  return {
    investmentTotal,
    marketingTotal,
    paidTrafficTotal,
    typesPercentage,
  }
}
