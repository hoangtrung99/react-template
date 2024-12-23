import { ErrorComponent, createRouter } from '@tanstack/react-router'
import { queryClient } from './libs/react-query'
import { routeTree } from './routeTree.gen'

export const router = createRouter({
  routeTree,
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  context: {
    auth: {
      user: null,
      isAuthenticated: false
    },
    queryClient
  },
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
