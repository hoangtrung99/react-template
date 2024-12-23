import type { Auth, AuthToken, User } from '@/libs/types/user'
import { router } from '@/router'
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const userAtom = atomWithStorage<User | null>('user', null)
export const isAuthenticationAtom = atom((get) => !!get(userAtom))
export const tokenAtom = atomWithStorage<AuthToken | null>('token', null)

export const authAtom = atom(
  (get) => ({
    user: get(userAtom),
    isAuthenticated: get(isAuthenticationAtom),
    token: get(tokenAtom)
  }),
  (_, set, auth: Omit<Auth, 'isAuthenticated'>) => {
    set(userAtom, auth.user)
    set(tokenAtom, auth.token)
    router.invalidate({ filter: (filter) => filter.pathname === '/_auth' })
  }
)
