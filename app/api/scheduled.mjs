// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import canI from '../models/auth/can-i.mjs'
import { getRequests } from '../models/requests.mjs'

/**
 * @type {EnhanceApiFn}
 */
export async function get (req) {
  const authenticated = canI(req)

  if (!authenticated) {
    return {
      location: '/auth/login'
    }
  }

  const currentUser = req.session.account.user.email
  const allRequests = await getRequests()
  const requests = allRequests.filter(request => request.requestor === currentUser)

  return {
    json: { account: authenticated, requests }
  }
}
