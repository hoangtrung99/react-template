import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/react-router'
import { useAtomValue } from 'jotai'
import { authAtom } from 'stores/auth'
import { queryClient } from './libs/react-query'
import { router } from './router'

function App() {
  const auth = useAtomValue(authAtom)

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ queryClient, auth }} />
    </QueryClientProvider>
  )
}

export default App
