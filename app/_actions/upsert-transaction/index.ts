'use server'

import { auth } from '@clerk/nextjs/server'
import type { TransactionCategory, TransactionPlatform } from '@prisma/client'
import { revalidatePath } from 'next/cache'

import { db } from '@/app/_lib/prisma'

import { upsertTransactionSchema } from './schema'

interface UpsertTransactionParams {
  id?: string
  name: string
  amount: number
  category: TransactionCategory
  platform: TransactionPlatform
  date: Date
}

export const upsertTransaction = async (params: UpsertTransactionParams) => {
  upsertTransactionSchema.parse(params)
  const { userId } = await auth()
  if (!userId) {
    throw new Error('Unauthorized')
  }
  await db.transaction.upsert({
    update: { ...params, userId },
    create: { ...params, userId },
    where: {
      id: params?.id ?? '',
    },
  })
  revalidatePath('/transactions')
}
