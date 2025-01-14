'use server'

import { revalidatePath } from 'next/cache'

import { db } from '@/app/_lib/prisma'

import type { DeleteInvestmentSchema } from './schema'

export const deleteInvestment = async ({
  transactionId,
}: DeleteInvestmentSchema) => {
  await db.transaction.delete({
    where: {
      id: transactionId,
    },
  })
  revalidatePath('/investments')
  revalidatePath('/')
}
