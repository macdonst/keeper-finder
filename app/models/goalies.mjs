import data from '@begin/data'
import { validator } from '@begin/validator'
import { Goalie } from './schemas/goalie.mjs'

const deleteGoalie = async function (key) {
  return data.destroy({ table: 'goalies', key })
}

const upsertGoalie = async function (goalie) {
  return data.set({ table: 'goalies', ...goalie })
}

const getGoalie = async function (key) {
  return data.get({ table: 'goalies', key })
}

const getGoalies = async function () {
  return data.get({ table: 'goalies' })
}

const validate = {
  shared (req) {
    return validator(req, Goalie)
  },
  async create (req) {
    let { valid, problems, data } = validate.shared(req)
    if (req.body.key) {
      problems['key'] = { errors: '<p>should not be included on a create</p>' }
    }
    // Insert your custom validation here
    return !valid ? { problems, goalie: data } : { goalie: data }
  },
  async update (req) {
    let { valid, problems, data } = validate.shared(req)
    // Insert your custom validation here
    return !valid ? { problems, goalie: data } : { goalie: data }
  }
}

export {
  deleteGoalie,
  getGoalie,
  getGoalies,
  upsertGoalie,
  validate
}
