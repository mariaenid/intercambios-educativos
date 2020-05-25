// import models from '../models'
import { getParams } from '../utils/swagger'
import { GraphdbService } from '../services/graphdbService';
import { getUrlParams, getProperties } from '../utils/getUriParams';

const consortium = {}
let institutes = []

export async function getAll (req, res, next) {
  try {
    const graphdb = new GraphdbService()
    await graphdb.initCliente()

    const response = await graphdb.getAllClass('org:Consortium')
    const allRecords = response && response.records

    if (!(institutes.length && institutes.length < allRecords.length)) {
      institutes = await Promise.all(
        allRecords.map(async ({ s }) => {
          const main = getUrlParams(s)
          return {
            main,
            ...await getPropertiesByName(main)
          }
        }))
    }

    res.json(institutes)
  } catch (error) {
    console.log('Error', error)
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
    const consortium = await getPropertiesByName(id)
    if (!consortium) return res.sendStatus(404).send({ message: 'not found' })
    return res.json(consortium)
  } catch (error) {
    console.log('error', error)
  }
}

export async function update (req, res, next) {
  const { id, data } = getParams(req, ['id', 'data'])
  // const user = await models.user.findOne({ where: { id } })
  await consortium.update({ ...data })
  return res.json(consortium)
}

export async function create (req, res, next) {
  const { data } = getParams(req, ['data'])
  // const user = await models.user.create(data)
  return res.json(consortium)
}

export async function remove (req, res, next) {
  const { id } = getParams(req, ['id'])
  // const user = await models.user.findOne({ where: { id } })
  await consortium.destroy()
  return res.json({ success: 1, description: 'supprimer' })
}
