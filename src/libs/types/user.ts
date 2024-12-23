export type User = {
  id: string
  email: string
  name: string
  avatar: string
}

export type Auth = {
  user: User | null
  isAuthenticated: boolean
  token: AuthToken | null
}

export type AuthToken = {
  accessToken: string
  refreshToken: string
}
