import { TransactionCategory, type TransactionPlatform } from '@prisma/client'

export type TransactionPercentagePerCategory = {
  [key in TransactionCategory]: number
}

export interface TotalInvestedPerPlatform {
  platform: TransactionPlatform
  totalAmount: number
  percentageOfTotal: number
}
