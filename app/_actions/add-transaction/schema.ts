import { TransactionCategory, TransactionPlatform } from '@prisma/client'
import { z } from 'zod'

export const addTransactionSchema = z.object({
  name: z.string().trim().min(1),
  amount: z.number().positive(),
  category: z.nativeEnum(TransactionCategory),
  platform: z.nativeEnum(TransactionPlatform),
  date: z.date(),
})
