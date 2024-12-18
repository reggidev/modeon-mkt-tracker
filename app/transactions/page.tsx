import { auth } from '@clerk/nextjs/server'
import { ArrowDownUpIcon } from 'lucide-react'
import { redirect } from 'next/navigation'

import Header from '../_components/header'
import { Button } from '../_components/ui/button'
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
        {/* Título e Botão */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <Button>
            Adicionar Transação
            <ArrowDownUpIcon />
          </Button>
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </>
  )
}

export default TransactionsPage
