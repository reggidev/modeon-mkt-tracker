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
    <div className="grid h-screen items-center justify-center bg-accent p-10">
      <div className="flex max-w-[500px] flex-col items-center justify-center">
        <Image
          src="/logo.png"
          width={380}
          height={74}
          alt="ModeON"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="mb-8 text-center text-muted-foreground">
          O ModeON Marketing Tracker é uma plataforma de gestão financeira para
          monitorar suas movimentações facilitando o controle do orçamento.
        </p>
        <SignInButton>
          <Button variant="outline" className="hover:bg-primary/10">
            <LogInIcon />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
    </div>
  )
}

export default LoginPage
