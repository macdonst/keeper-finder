// View documentation at: https://docs.begin.com
import { deleteGoalie } from '../../../models/goalies.mjs'


/**
 * @type {import('@enhance/types').EnhanceApiFn}
 */
export async function post (req) {
  const id = req.pathParameters?.id

  const session = req.session
  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, goalie: removed, ...newSession } = session
  try {
    await deleteGoalie(id)
    return {
      session: newSession,
      json: null,
      location: '/goalies'
    }
  }
  catch (err) {
    return {
      session: { ...newSession, error: err.message },
      json: { error: err.message },
      location: '/goalies'
    }
  }
}
