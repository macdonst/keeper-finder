// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getRequest, upsertRequest, validate } from '../../models/requests.mjs'


/**
 * @type {EnhanceApiFn}
 */
export async function get (req) {
  if (req.session.problems) {
    let { problems, request, ...session } = req.session
    return {
      session,
      json: { problems, request }
    }
  }

  const id = req.pathParameters?.id
  const result = await getRequest(id)
  return {
    json: { request: result }
  }
}

/**
 * @type {EnhanceApiFn}
 */
export async function post (req) {
  const id = req.pathParameters?.id

  const session = req.session
  // Validate
  let { problems, request } = await validate.update(req)
  if (problems) {
    return {
      session: {...session, problems, request },
      json: { problems, request },
      location: `/requests/${request.key}`
    }
  }

  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, request: removed, ...newSession } = session
  try {
    const result = await upsertRequest({ key: id, ...request })
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
