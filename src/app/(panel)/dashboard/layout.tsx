import { DashboardSidebar } from "./_components/sidebar"

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DashboardSidebar>
        {children}
      </DashboardSidebar>

    </>
  )
}