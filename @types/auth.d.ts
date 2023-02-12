module Auth {
  type User = {
    name: string
    userName: string
    token: string
    avatar: string
  }

  type ContextValues = {
    loggedInUser: User
    setLoggedInUser: React.Dispatch<React.SetStateAction<User>>
  } 

}
