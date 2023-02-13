import { NotLoggedIn } from '@/common/components/NotLoggedIn'
import { AuthContext } from '@/contexts/Auth/AuthContext'
import { AuthContextProvider } from '@/contexts/Auth/AuthContextProvider'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'

type ProviderWrapperProps = {
  children: React.ReactNode
}

export default function ProviderWrapper({ children }: ProviderWrapperProps) {
  const router = useRouter()
  const { loggedInUser } = useContext(AuthContext)

  useEffect(() => {
    if (!loggedInUser.token) {
      router.push('/auth/login')
    }
  }, [loggedInUser])
  
  return (
    <AuthContextProvider>
      {loggedInUser ? <div>{children}</div> : <NotLoggedIn/>}
    </AuthContextProvider>
  )
}
