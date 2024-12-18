import { AppSidebar } from '../_components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '../_components/ui/sidebar'

export default function TransactionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="grid w-full grid-cols-[auto,1fr]">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
