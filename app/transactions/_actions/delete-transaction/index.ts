'use server'

import { revalidatePath } from 'next/cache'

import { db } from '@/app/_lib/prisma'

import type { DeleteTransactionSchema } from './schema'

export const deleteTransaction = async ({
  transactionId,
}: DeleteTransactionSchema) => {
  await db.transaction.delete({
    where: {
      id: transactionId,
    },
  })
  revalidatePath('/transactions')
  revalidatePath('/')
}
