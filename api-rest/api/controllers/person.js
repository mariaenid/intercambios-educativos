// import models from '../models'
import { getParams } from '../utils/swagger'
import { GraphdbService } from '../services/graphdbService';
import { getUrlParams, getProperties } from '../utils/getUriParams';

const person = {}
let persons = []

export async function getAll (req, res, next) {
  try {
    const graphdb = new GraphdbService()
    await graphdb.initCliente()

    const response = await graphdb.getAllClass('org:Person')
    const allRecords = response && response.records

    if (!(persons.length && persons.length < allRecords.length)) {
      persons = await Promise.all(
        allRecords.map(async ({ s }) => {
          const main = getUrlParams(s)
          return {
            main,
            ...await getPropertiesByName(main)
          }
        }))
    }

    res.json(persons)
  } catch (error) {
    console.log('erro', error)
  }
}

const getPropertiesByName = async (id) => {
  const graphdb = new GraphdbService()
  await graphdb.initCliente()

  const uriParams = await graphdb.getAllProperties(id)
  return getProperties(uriParams.records)
}

export async function getOne (req, res, next) {
  try {
    const { id } = getParams(req, ['id'])
    // const user = await models.user.findOne({ where: { id } })
    const person = await getPropertiesByName(id)
    if (!person) return res.sendStatus(404).send({ message: 'not found' })
    return res.json(person)
  } catch (error) {
    console.log('error', error)
  }
}

export async function update (req, res, next) {
  const { id, data } = getParams(req, ['id', 'data'])
  // const user = await models.user.findOne({ where: { id } })
  await person.update({ ...data })
  return res.json(person)
}

export async function create (req, res, next) {
  const { data } = getParams(req, ['data'])
  // const user = await models.user.create(data)
  return res.json(person)
}

export async function remove (req, res, next) {
  const { id } = getParams(req, ['id'])
  // const user = await models.user.findOne({ where: { id } })
  await person.destroy()
  return res.json({ success: 1, description: 'supprimer' })
}
