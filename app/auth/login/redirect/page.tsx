'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useContext, useEffect } from "react";
import PocketBase from 'pocketbase';
import { getFromStorage, saveToStorage } from "@/common/localstorage";
import { AuthContext } from '@/contexts/Auth/AuthContext';

const pb = new PocketBase(process.env.POCKET_BASE_URL);

export default function RedirectPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { setLoggedInUser } = useContext(AuthContext)

  useEffect(() => {
    const provider = getFromStorage('provider')
    const code = searchParams.get('code') as string

    if (provider) {
      const jsonProvider = JSON.parse(provider)
      const { codeVerifier } = jsonProvider
      const redirectUrl = process.env.REDIRECT_URL as string

      pb.collection('users').authWithOAuth2(
        'google',
        code,
        codeVerifier,
        redirectUrl,
      )
      .then(authData => {
        const user = {
          name: authData.record.name,
          userName: authData.record.username,
          token: authData.token,
          avatar: authData.record.avatar,
        }

        setLoggedInUser(user)
        saveToStorage('user', JSON.stringify(user))
        router.replace('/')
      })
      .catch(console.log)
    }
  }, [searchParams, setLoggedInUser, router])

  return (
    <div>
      Redirect ...
    </div>
  )

}
