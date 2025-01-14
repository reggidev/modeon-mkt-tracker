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
      <main className="flex w-full flex-col overflow-x-hidden">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
