import { getFromStorage } from "@/common/localstorage";
import { createContext } from "react";

const loggedInUser = JSON.parse(getFromStorage('user') || '{}')

export const userInitialValue: Auth.ContextValues['loggedInUser'] = {
  name: loggedInUser?.name || '',
  avatar: loggedInUser?.avatar || '',
  token: loggedInUser?.token || '',
  userName: loggedInUser?.userName || ''
}

export const AuthContext = createContext<Auth.ContextValues>({
  loggedInUser: userInitialValue,
  setLoggedInUser: () => {}
})
