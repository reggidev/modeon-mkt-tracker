'use client'

import { useClerk } from '@clerk/nextjs'
import { LogOutIcon } from 'lucide-react'
import { redirect } from 'next/navigation'

import ToggleThemeButton from './toggle-theme-button'
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
      <header className="-mt-3 flex justify-end gap-3 px-4 py-2">
        <ToggleThemeButton />
        <Button onClick={handleSignOutClick} variant="outline">
          <LogOutIcon size={16} />
          Sair
        </Button>
      </header>
      <Separator className="bg-sidebar-border" />
    </>
  )
}

export default Header
