// View documentation at: https://docs.begin.com
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getGoalie, upsertGoalie, validate } from '../../models/goalies.mjs'
import canI from '../../models/auth/can-i.mjs'

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


  if (req.session.problems) {
    let { problems, goalie, ...session } = req.session
    return {
      session,
      json: { problems, goalie }
    }
  }

  const id = req.pathParameters?.id
  const result = await getGoalie(id)
  return {
    json: { goalie: result }
  }
}

/**
 * @type {EnhanceApiFn}
 */
export async function post (req) {
  const authenticated = canI(req)

  if (!authenticated) {
    return {
      location: '/auth/login'
    }
  }

  const id = req.pathParameters?.id

  const session = req.session
  // Validate
  let { problems, goalie } = await validate.update(req)
  if (problems) {
    return {
      session: {...session, problems, goalie },
      json: { problems, goalie },
      location: `/goalies/${goalie.key}`
    }
  }

  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, goalie: removed, ...newSession } = session
  try {
    const result = await upsertGoalie({ key: id, ...goalie })
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
