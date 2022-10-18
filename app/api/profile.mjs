import canI from '../models/auth/can-i.mjs'
import { getUser, upsertUser, validate } from '../models/users.mjs'

/**
 * @type {import('@enhance/types').EnhanceApiFn}
 */
export async function get (req) {
  const authenticated = canI(req)

  if (authenticated) {
    const user = await getUser(authenticated.user.key)
    return {
      json: { account: authenticated, user }
    }
  }
  else {
    return {
      location: '/'
    }
  }
}

/**
 * @type {import('@enhance/types').EnhanceApiFn}
 */
export async function post (req) {
  console.log('post profile', req)
  let { problems, user } = await validate.update(req)

  if (req.session.account.user.key !== user.key) {
    return {
      statusCode: 401
    }
  }

  const session = req.session
  // Validate
  if (problems) {
    return {
      session: {...session, problems, user },
      json: { problems, user },
      location: `/profile`
    }
  }

  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, user: removed, ...newSession } = session
  try {
    const currentUser = await getUser(user.key)
    const result = await upsertUser({...currentUser, ...user})
    return {
      session: newSession,
      json: { user: result },
      location: '/profile'
    }
  }
  catch (err) {
    return {
      session: { ...newSession, error: err.message },
      json: { error: err.message },
      location: '/profile'
    }
  }
}
