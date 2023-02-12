import { removeFromStorage } from "@/common/localstorage"
import { AuthContext, userInitialValue } from "@/contexts/Auth/AuthContext"
import { useContext } from "react"

export const useSignOut = () => {
  const { setLoggedInUser } = useContext(AuthContext)

  const signOut = () => {
    console.log('signOut...')
    setLoggedInUser(userInitialValue)
    removeFromStorage('provider')
    removeFromStorage('user')

    window.location.reload()
  }

  return signOut
}
