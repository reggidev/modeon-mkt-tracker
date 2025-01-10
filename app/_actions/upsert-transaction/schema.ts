import { TransactionCategory, TransactionPlatform } from '@prisma/client'
import { z } from 'zod'

export const upsertTransactionSchema = z.object({
  name: z.string().trim().min(1),
  amount: z.number().positive(),
  category: z.nativeEnum(TransactionCategory),
  platform: z.nativeEnum(TransactionPlatform),
  date: z
    .union([z.date(), z.string()])
    .transform((value) =>
      typeof value === 'string' ? new Date(value) : value,
    ),
})
