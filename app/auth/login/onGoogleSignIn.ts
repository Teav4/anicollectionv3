import { saveToStorage } from "@/common/localstorage";
import PocketBase from 'pocketbase'

export async function onGoogleSignIn() {
  
  const pb = new PocketBase(process.env.POCKET_BASE_URL);
  const authMethods = await pb.collection('users').listAuthMethods();
  const redirectUrl = process.env.REDIRECT_URL as string

  saveToStorage('provider', JSON.stringify(authMethods.authProviders[0]))

  const callbackUrl = authMethods.authProviders[0].authUrl+encodeURIComponent(redirectUrl)
  return callbackUrl
}
