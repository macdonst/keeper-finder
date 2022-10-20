import data from '@begin/data'
import { validator } from '@begin/validator'
import { Request } from './schemas/request.mjs'

const deleteRequest = async function (key) {
  return data.destroy({ table: 'requests', key })
}

const upsertRequest = async function (request) {
  return data.set({ table: 'requests', ...request })
}

const getRequest = async function (key) {
  return data.get({ table: 'requests', key })
}

const getRequests = async function () {
  return data.get({ table: 'requests' })
}

const validate = {
  shared (req) {
    return validator(req, Request)
  },
  async create (req) {
    let { valid, problems, data } = validate.shared(req)
    if (req.body.key) {
      problems['key'] = { errors: '<p>should not be included on a create</p>' }
    }
    // Insert your custom validation here
    return !valid ? { problems, request: data } : { request: data }
  },
  async update (req) {
    let { valid, problems, data } = validate.shared(req)
    // Insert your custom validation here
    return !valid ? { problems, request: data } : { request: data }
  }
}

export {
  deleteRequest,
  getRequest,
  getRequests,
  upsertRequest,
  validate
}
