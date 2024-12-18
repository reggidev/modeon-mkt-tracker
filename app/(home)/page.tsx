import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const Home = async () => {
  const { userId } = await auth()
  if (!userId) {
    redirect('/login')
  }

  return <div className="flex h-full bg-red-500">Teste</div>
}

export default Home
