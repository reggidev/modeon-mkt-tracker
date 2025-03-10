import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import AddInvestmentButton from '../_components/add-investment-button'
import NavBar from '../_components/navbar'
import { DataTable } from '../_components/ui/data-table'
import { ScrollArea } from '../_components/ui/scroll-area'
import { db } from '../_lib/prisma'
import { investmentColumns } from './_columns'

const InvestmentsPage = async () => {
  const { userId } = await auth()
  if (!userId) {
    redirect('/login')
  }

  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
    orderBy: {
      date: 'desc',
    },
  })

  return (
    <>
      <NavBar />
      <div className="container flex h-full flex-col space-y-6 p-6 xl:overflow-hidden">
        <div className="flex w-full flex-col justify-between xl:flex-row xl:items-center">
          <div className="mb-2 flex flex-col xl:mb-0">
            <h1 className="text-3xl font-bold">Investimentos</h1>
            <p className="text-sm text-muted-foreground">
              Aqui você obtém todas as informações de cada investimento
            </p>
          </div>
          <AddInvestmentButton />
        </div>
        <ScrollArea className="h-full">
          <DataTable
            columns={investmentColumns}
            data={JSON.parse(JSON.stringify(transactions))}
          />
        </ScrollArea>
      </div>
    </>
  )
}

export default InvestmentsPage
