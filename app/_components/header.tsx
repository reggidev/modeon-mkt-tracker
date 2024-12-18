'use client'

import { useClerk } from '@clerk/nextjs'
import { LogOutIcon } from 'lucide-react'
import { redirect } from 'next/navigation'

import { Button } from './ui/button'
import { Separator } from './ui/separator'

const Header = () => {
  const { signOut } = useClerk()

  const handleSignOutClick = () => {
    signOut()
    redirect('/login')
  }

  return (
    <>
      <header className="flex justify-end px-4 py-2">
        <Button onClick={handleSignOutClick} variant="outline">
          <LogOutIcon size={16} />
          Sair
        </Button>
      </header>
      <Separator className="bg-muted-foreground/50" />
    </>
  )
}

export default Header
