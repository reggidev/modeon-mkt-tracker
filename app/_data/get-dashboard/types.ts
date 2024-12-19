import { TransactionCategory } from '@prisma/client'

export type TransactionPercentagePerCategory = {
  [key in TransactionCategory]: number
}
