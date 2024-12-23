import { SignIn } from '@/features/sign-in'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/login/')({
  component: SignIn,
  beforeLoad: ({ context: { auth } }) => {
    if (auth.isAuthenticated) {
      throw redirect({
        to: '/'
      })
    }
  }
})
