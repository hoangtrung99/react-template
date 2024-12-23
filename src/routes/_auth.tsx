import { DashboardLayout } from '@/libs/components/layout'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: DashboardLayout,
  beforeLoad: ({
    context: {
      auth: { isAuthenticated }
    }
  }) => {
    if (!isAuthenticated) {
      throw redirect({
        to: '/login'
      })
    }
  }
})
