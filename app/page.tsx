'use client'

import { Button } from '@fluentui/react-components'
import { useContext } from 'react';
import { AuthContext } from '@/contexts/Auth/AuthContext';
import { useRouter } from 'next/navigation';
import { useSignOut } from '@/hooks/useSignOut';

export default function Home() {
  const { loggedInUser } = useContext(AuthContext)
  const router = useRouter()
  const logOut = useSignOut()

  if (loggedInUser.token) {
    return (
      <div>
        <main className="container">
          <Button 
            appearance='primary'
            onClick={logOut}
          >
            Sign Out Of Google
          </Button>
        </main>
        {JSON.stringify(loggedInUser)}
      </div>
    )
  } else {
    router.push('/auth/login')
  }

  return (
    <div>Not logged in! Redirect to login page ...</div>
  )
}
