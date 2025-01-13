import { auth } from '@clerk/nextjs/server'
import { isMatch } from 'date-fns'
import { redirect } from 'next/navigation'

import AddTransactionButton from '../_components/add-transaction-button'
import Header from '../_components/header'
import { getDashboard } from '../_data/get-dashboard'
import InvestedPerPlatform from './_components/invested-per-platform'
import LastInvestments from './_components/last-investments'
import MonthSelect from './_components/month-select'
import TotalInvestedCard from './_components/total-invested-card'
import TransactionPieChart from './_components/transactions-pie-chart'
import YearSelect from './_components/year-select'

interface HomeProps {
  searchParams: {
    month: string
    year: string
  }
}

const Home = async ({ searchParams: { month, year } }: HomeProps) => {
  const { userId } = await auth()
  if (!userId) {
    redirect('/login')
  }

  const monthIsInvalid = !month || !isMatch(month, 'MM')
  const yearIsInvalid = !year || !['2024', '2025'].includes(year)

  if (monthIsInvalid || yearIsInvalid) {
    const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0')
    const currentYear = String(new Date().getFullYear())
    redirect(`?year=${currentYear}&month=${currentMonth}`)
  }

  const dashboard = await getDashboard(month, year)

  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col space-y-6 p-4 pb-20 md:pb-0 lg:overflow-hidden lg:p-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Aqui você obtém uma visão geral do investimento
            </p>
          </div>
          <div className="flex items-center gap-3">
            <YearSelect />
            <MonthSelect />
            <AddTransactionButton />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr,1fr] lg:overflow-hidden">
          <div className="grid grid-cols-2 gap-6 overflow-hidden">
            <TotalInvestedCard month={month} year={year} {...dashboard} />
            <TransactionPieChart {...dashboard} />
            <InvestedPerPlatform
              investedPerPlatform={dashboard.totalInvestedPerPlatform}
            />
          </div>
          <LastInvestments lastInvestments={dashboard.lastInvestments} />
        </div>
      </div>
    </>
  )
}

export default Home
