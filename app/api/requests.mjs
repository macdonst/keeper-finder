// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import canI from '../models/auth/can-i.mjs'
import { getRequests, upsertRequest, validate } from '../models/requests.mjs'


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

  const requests = await getRequests()
  if (req.session.problems) {
    let { problems, request, ...session } = req.session
    return {
      session,
      json: { account: authenticated, problems, requests, request }
    }
  }

  return {
    json: { account: authenticated, requests }
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

  const session = req.session
  // Validate
  let { problems, request } = await validate.create(req)
  if (problems) {
    return {
      session: { ...session, problems, request },
      json: { problems, request },
      location: '/requests'
    }
  }

  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, request: removed, ...newSession } = session
  try {
    const result = await upsertRequest(request)
    return {
      session: newSession,
      json: { request: result },
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
