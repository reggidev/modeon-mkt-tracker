import { SignInButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { LogInIcon } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { Button } from '../_components/ui/button'

const LoginPage = async () => {
  const { userId } = await auth()
  if (userId) {
    redirect('/')
  }

  return (
    <div className="grid h-screen items-center justify-center">
      <div className="mx-auto flex h-full max-w-[500px] flex-col justify-center p-8">
        <Image
          src="/logo.png"
          width={434}
          height={74}
          alt="ModeON"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          O ModeON Marketing Tracker é uma plataforma de gestão financeira para
          monitorar suas movimentações facilitando o controle do orçamento.
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
    </div>
  )
}

export default LoginPage
