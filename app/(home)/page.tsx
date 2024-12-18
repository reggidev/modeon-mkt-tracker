import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import Header from '../_components/header'

const Home = async () => {
  const { userId } = await auth()
  if (!userId) {
    redirect('/login')
  }

  return (
    <>
      <Header />
      <div className="flex h-full">Teste</div>
    </>
  )
}

export default Home
