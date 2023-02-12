import { getFromStorage, saveToStorage } from "@/common/localstorage";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

// Initialize Next Auth
export default async function auth(req: NextApiRequest, res: NextApiResponse) {

  console.log({ query: req.query })

  return NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
      async redirect(props) {
        const { url, baseUrl } = props
        // Allows relative callback URLs
        if (url.startsWith("/")) return `${baseUrl}${url}`
        // Allows callback URLs on the same origin
        else if (new URL(url).origin === baseUrl) return url
        return baseUrl
      },
      async jwt({ token, account, profile }) {
        // Persist the OAuth access_token and or the user id to the token right after signin
        if (account) {
          token.id_token = account.id_token
          token.access_token = account.access_token
          token.login_code = req.query.code as string
        }
        return token
      },
      async session({ session, token, user }) {
        // Send properties to the client, like an access_token and user id from a provider.
        session.idToken = token.id_token as string
        session.accessToken = token.access_token as string
        session.loginCode = token.login_code

        // const authData = await pb.collection('users').authWithOAuth2(
        //   'google',
        //   code as string,
        //   verifer,
        //   process.env.NEXTAUTH_URL as string,
        // )
        // console.log({ authData })
        return session
      },
      async signIn({ user, account, profile, email, credentials }) {
        const isAllowedToSignIn = true
        // console.log({ user, account, profile, email, credentials })
        if (isAllowedToSignIn) {
          return true
        } else {
          // Return false to display a default error message
          return false
          // Or you can return a URL to redirect to:
          // return '/unauthorized'
        }
      }
    }
  })  
}
