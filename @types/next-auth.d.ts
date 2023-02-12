/**
 * Extends accessToken fields
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    idToken: string
    accessToken: string
    id: string
    loginCode: string
  }

}

declare module "next-auth/jwt" {
  interface JWT {
    login_code: string
  }
}
