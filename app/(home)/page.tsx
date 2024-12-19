import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import AddTransactionButton from '../_components/add-transaction-button'
import Header from '../_components/header'
import MediaInvestedCard from './_components/media-invested-card'
import TotalInvestedCard from './_components/total-invested-card'

const Home = async () => {
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
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Aqui você obtém uma visão geral do investimento
            </p>
          </div>
          <AddTransactionButton />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <TotalInvestedCard />
          <MediaInvestedCard />
          <TotalInvestedCard />
        </div>
      </div>
    </>
  )
}

export default Home
