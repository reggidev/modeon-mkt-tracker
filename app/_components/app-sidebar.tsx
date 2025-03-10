'use client'

import { ArrowLeftRightIcon, HomeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from '@/app/_components/ui/sidebar'

import UserProfileCard from './user-profile-card'

const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/',
      icon: HomeIcon,
    },
    {
      title: 'Investimentos',
      url: '/investments',
      icon: ArrowLeftRightIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar()
  const pathname = usePathname()

  return (
    <Sidebar {...props} collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="p-4">
            <Link href="/">
              <Image src="/logo.png" width={250} height={100} alt="ModeON" />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton className="py-5" asChild>
                  <Link
                    href={item.url}
                    className={`${pathname === item.url ? 'bg-muted-foreground/15 font-extrabold' : ''}`}
                  >
                    <item.icon />
                    {item.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter className="flex items-center justify-center py-3">
        <UserProfileCard isCollapsed={state} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
