import { useState } from "react"
import { userInitialValue, AuthContext } from "./AuthContext"

type Props = {
  children: React.ReactNode
}

export const AuthContextProvider = ({ children }: Props) => {
  const [loggedInUser, setLoggedInUser] = useState(userInitialValue)

  const contextValue: Auth.ContextValues = {
    loggedInUser,
    setLoggedInUser,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
