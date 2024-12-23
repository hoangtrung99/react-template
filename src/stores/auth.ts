import type { Auth, AuthToken, User } from '@/libs/types/user'
import { atom } from 'jotai'

export const userAtom = atom<User | null>(null)
export const isAuthenticationAtom = atom((get) => !!get(userAtom))
export const tokenAtom = atom<AuthToken | null>(null)

export const authAtom = atom((get) => ({
  user: get(userAtom),
  isAuthenticated: get(isAuthenticationAtom),
  token: get(tokenAtom)
}))

export const setAuthAtom = atom(null, (_, set, auth: Auth) => {
  set(userAtom, auth.user)
  set(tokenAtom, auth.token)
})
