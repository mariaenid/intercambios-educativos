// import models from '../models'
import { getParams } from '../utils/swagger'
import { GraphdbService } from '../services/graphdbService';
import { getUrlParams, getProperties } from '../utils/getUriParams';

const certificate = {}

let certificates = []

export async function getAll (req, res, next) {
  try {
    const graphdb = new GraphdbService()
    await graphdb.initCliente()

    const response = await graphdb.getAllClass('sb:EducationalSmartContract')
    const allRecords = response && response.records

    if (!(certificates.length && certificates.length < allRecords.length)) {
      certificates = await Promise.all(
        allRecords.map(async ({ s }) => {
          const address = getUrlParams(s)
          return {
            address,
            ...await getPropertiesByName(address)
          }
        }))
    }

    res.json(certificates)
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
    const certificate = await getPropertiesByName(id)
    if (!certificate) return res.sendStatus(404).send({ message: 'not found' })
    return res.json(certificate)
  } catch (error) {
    console.log('error', error)
  }
}

export async function update (req, res, next) {
  const { id, data } = getParams(req, ['id', 'data'])
  // const user = await models.user.findOne({ where: { id } })
  await certificate.update({ ...data })
  return res.json(certificate)
}

export async function create (req, res, next) {
  const { data } = getParams(req, ['data'])
  // const user = await models.user.create(data)
  return res.json(certificate)
}

export async function remove (req, res, next) {
  const { id } = getParams(req, ['id'])
  // const user = await models.user.findOne({ where: { id } })
  await certificate.destroy()
  return res.json({ success: 1, description: 'supprimer' })
}
