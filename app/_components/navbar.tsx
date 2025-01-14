'use client'

import { useClerk } from '@clerk/nextjs'
import { LogOutIcon, SettingsIcon } from 'lucide-react'
import { redirect } from 'next/navigation'

import ToggleThemeButton from './toggle-theme-button'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from './ui/sheet'

const NavBar = () => {
  const { signOut } = useClerk()

  const handleSignOutClick = () => {
    signOut()
    redirect('/login')
  }

  return (
    <>
      <div className="hidden md:block">
        <header className="container -mt-3 flex justify-end gap-3 px-4 py-2">
          <ToggleThemeButton />
          <Button onClick={handleSignOutClick} variant="outline">
            <LogOutIcon size={16} />
            Sair
          </Button>
        </header>
        <Separator className="bg-sidebar-border" />
      </div>

      <div className="block md:hidden">
        <header className="-mt-4 flex justify-end p-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <SettingsIcon size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>Menu</SheetHeader>
              <div className="grid gap-2 py-4">
                <SheetClose asChild>
                  <Button
                    onClick={handleSignOutClick}
                    variant="secondary"
                    className="w-full font-bold"
                  >
                    <LogOutIcon size={16} />
                    Sair
                  </Button>
                </SheetClose>
                <ToggleThemeButton className="w-full" />
              </div>
            </SheetContent>
          </Sheet>
        </header>
        <Separator className="bg-sidebar-border" />
      </div>
    </>
  )
}

export default NavBar
