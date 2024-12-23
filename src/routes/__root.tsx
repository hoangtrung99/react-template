import type { AuthContext } from '@/libs/types/auth'
import type { QueryClient } from '@tanstack/react-query'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

export const Route = createRootRouteWithContext<{
  auth: AuthContext
  queryClient: QueryClient
}>()({
  component: RootComponent
})

function RootComponent() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
