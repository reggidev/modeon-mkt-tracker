import { auth } from '@clerk/nextjs/server'
import { isMatch } from 'date-fns'
import { redirect } from 'next/navigation'

import Header from '../_components/header'
import { getDashboard } from '../_data/get-dashboard'
import TimeSelect from './_components/time-select'
import TotalInvestedCard from './_components/total-invested-card'
import TransactionPieChart from './_components/transactions-pie-chart'

interface HomeProps {
  searchParams: {
    month: string
  }
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth()
  if (!userId) {
    redirect('/login')
  }
  const monthIsInvalid = !month || !isMatch(month, 'MM')
  if (monthIsInvalid) {
    redirect('?month=01')
  }
  const dashboard = await getDashboard(month)

  return (
    <>
      <Header />
      <div className="flex h-full flex-col space-y-6 p-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Aqui você obtém uma visão geral do investimento
            </p>
          </div>
          <TimeSelect />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <TotalInvestedCard month={month} {...dashboard} />
          <TransactionPieChart {...dashboard} />
        </div>
      </div>
    </>
  )
}

export default Home
