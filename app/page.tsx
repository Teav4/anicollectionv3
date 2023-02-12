'use client'

import { Button } from '@fluentui/react-components'
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/contexts/Auth/AuthContext'
import { useRouter } from 'next/navigation'
import { useSignOut } from '@/hooks/useSignOut'

export default function Home() {
  const router = useRouter()
  const { loggedInUser } = useContext(AuthContext)
  const logOut = useSignOut()
  
  useEffect(() => {
    if (!loggedInUser.token) {
      router.push('/auth/login')
    }
  }, [loggedInUser.token])

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
    return (
      <div>Not logged in! Redirect to login page ...</div>
    )
  }

}
