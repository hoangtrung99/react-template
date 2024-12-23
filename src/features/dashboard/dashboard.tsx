import { authAtom } from '@/stores/auth'
import { Link } from '@tanstack/react-router'
import { useAtomValue, useSetAtom } from 'jotai'

function Dashboard() {
  const authValue = useAtomValue(authAtom)
  const setAuth = useSetAtom(authAtom)

  return (
    <div>
      <Link to="/login">Login</Link>
      <button
        type="button"
        onClick={() => {
          setAuth({ user: null, token: null })
        }}
      >
        Logout
      </button>
      <pre>{JSON.stringify(authValue, null, 2)}</pre>
    </div>
  )
}

export { Dashboard }
