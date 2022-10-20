// View documentation at: https://enhance.dev/docs/learn/starter-project/api
import { deleteRequest } from '../../../models/requests.mjs'


/**
 * @type {import('@enhance/types').EnhanceApiFn}
 */
export async function post (req) {
  const id = req.pathParameters?.id

  const session = req.session
  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, request: removed, ...newSession } = session
  try {
    await deleteRequest(id)
    return {
      session: newSession,
      json: null,
      location: '/requests'
    }
  }
  catch (err) {
    return {
      session: { ...newSession, error: err.message },
      json: { error: err.message },
      location: '/requests'
    }
  }
}
