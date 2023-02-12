import PocketBase from 'pocketbase'

export function getUserInfo () {
  const db = new PocketBase(process.env.POCKET_BASE_URL)

}
