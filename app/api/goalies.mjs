// View documentation at: https://docs.begin.com
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getGoalies, upsertGoalie, validate } from '../models/goalies.mjs'


/**
 * @type {EnhanceApiFn}
 */
export async function get (req) {
  const goalies = await getGoalies()
  if (req.session.problems) {
    let { problems, goalie, ...session } = req.session
    return {
      session,
      json: { problems, goalies, goalie }
    }
  }

  return {
    json: { goalies }
  }
}

/**
 * @type {EnhanceApiFn}
 */
export async function post (req) {
  const session = req.session
  // Validate
  let { problems, goalie } = await validate.create(req)
  if (problems) {
    return {
      session: { ...session, problems, goalie },
      json: { problems, goalie },
      location: '/goalies'
    }
  }

  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, goalie: removed, ...newSession } = session
  try {
    const result = await upsertGoalie(goalie)
    return {
      session: newSession,
      json: { goalie: result },
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
