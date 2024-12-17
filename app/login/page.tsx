import { LogInIcon } from 'lucide-react'
import Image from 'next/image'

import { Button } from '../_components/ui/button'

const LoginPage = () => {
  return (
    <div className="grid h-full">
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
        <Button variant="outline">
          <LogInIcon />
          Fazer login ou criar conta
        </Button>
      </div>
    </div>
  )
}

export default LoginPage
