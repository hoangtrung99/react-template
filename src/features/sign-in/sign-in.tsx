import { authAtom } from '@/stores/auth'
import { useSetAtom } from 'jotai'

function SignIn() {
  const updateAuth = useSetAtom(authAtom)

  return (
    <div>
      Hello "/login/"!
      <button
        type="button"
        onClick={() => {
          updateAuth({
            user: {
              id: '1',
              name: 'John Doe',
              email: 'john.doe@example.com',
              avatar: 'https://example.com/avatar.png'
            },
            token: {
              accessToken: '1234567890',
              refreshToken: '1234567890'
            }
          })
        }}
      >
        Login
      </button>
    </div>
  )
}

export { SignIn }
