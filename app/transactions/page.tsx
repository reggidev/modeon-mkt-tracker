import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import AddTransactionButton from '../_components/add-transaction-button'
import Header from '../_components/header'
import { DataTable } from '../_components/ui/data-table'
import { db } from '../_lib/prisma'
import { transactionColumns } from './_columns'

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({})

  const { userId } = await auth()
  if (!userId) {
    redirect('/login')
  }

  return (
    <>
      <Header />
      <div className="flex h-full flex-col space-y-6 p-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Transações</h1>
            <p className="text-sm text-muted-foreground">
              Aqui você obtém todas as informações de cada investimento
            </p>
          </div>
          <AddTransactionButton />
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </>
  )
}

export default TransactionsPage
