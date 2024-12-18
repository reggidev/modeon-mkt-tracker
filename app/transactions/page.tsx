import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import Header from '../_components/header'

const TransactionsPage = async () => {
  const { userId } = await auth()
  if (!userId) {
    redirect('/login')
  }

  return (
    <>
      <Header />
      <div className="flex h-full">
        <h1>Transaction Page</h1>
      </div>
    </>
  )
}

export default TransactionsPage
