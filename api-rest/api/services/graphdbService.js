import { EnapsoGraphDBClient } from "@innotrade/enapso-graphdb-client"
import fs from 'fs'
import { prefixes } from '../constants/prefix'
import { EducationalSmartContract } from '../models/EducationalSmartContract'
import { Consortium } from '../models/Consortium'
import { Person } from '../models/Person'
import web3Service from './web3Service'
import { Base64 } from '../utils/base64'

const GRAPHDB_BASE_URL = process.env.GRAPHDB_BASE_URL || 'http://localhost:7200',
  GRAPHDB_REPOSITORY = process.env.GRAPHDB_REPOSITORY || "semantic-blockchain",
  GRAPHDB_USERNAME = process.env.GRAPHDB_USERNAME || "admin",
  GRAPHDB_PASSWORD = process.env.GRAPHDB_PASSWORD || "admin",
  GRAPHDB_CONTEXT_SB =
    process.env.GRAPHDB_CONTEXT_BLOCKCHAIN || "http://semantic-blockchain.org";

export class GraphdbService {
  constructor () {
    this._init()
  }

  _init () {
    const DEFAULT_PREFIXES = [
      EnapsoGraphDBClient.PREFIX_OWL,
      EnapsoGraphDBClient.PREFIX_RDF,
      EnapsoGraphDBClient.PREFIX_RDFS,
      EnapsoGraphDBClient.PREFIX_XSD,
      EnapsoGraphDBClient.PREFIX_PROTONS,
      EnapsoGraphDBClient.PREFIX_ENTEST
    ]

    prefixes.forEach(({ name, prefix, iri }) => {
      DEFAULT_PREFIXES.push({ prefix, iri });
    })

    this.graphDBEndpoint = new EnapsoGraphDBClient.Endpoint({
      baseURL: GRAPHDB_BASE_URL,
      repository: GRAPHDB_REPOSITORY,
      prefixes: DEFAULT_PREFIXES
    });
  }

  async initCliente () {
    try {
      if (this.graphDBEndpoint) {
        await this.graphDBEndpoint.login(GRAPHDB_USERNAME, GRAPHDB_PASSWORD);
      }
    } catch (e) {
      console.log('Error logining graphDb', e)
    }
  }

  async saveNewAcademicCertificate (log) {
    // const educationalContract = new EducationalSmartContract({isTypeOf: 'certificate', address: '0x2324', controlsAccount: 'UTPL'})
    // return educationalContract
    const {
      _id,
      contractName,
      contractAddress,
      items
    } = log

    // new EducationalSmartContract({isTypeOf: 'certificate', address: '0x2324', controlsAccount: 'UTPL'})
    const educationalSmartContract = new EducationalSmartContract({
      isTypeOf: contractName,
      address: contractAddress,
      controlsAccount: items.addressOwner,
      belongsTo: items.addressOwner,
      isValidatedBy: items.contractConsortium
    })

    const person = new Person({
      name: Base64.encode(items.nameOwner).slice(0, -1),
      hasAccount: items.addressOwner,
      hasDigitalCertificate: contractAddress
    })

    //  new Consortium({hasCredential: '', hasDigitalRegister: '', alumni: '', hasAccount: '', name:''})
    const triples = educationalSmartContract.triples
    await Promise.all(triples.map(async(triple) => await this.updateTriples(triple)))
    await Promise.all(person.triples.map(async(triple) => await this.updateTriples(triple)))
    return 'OK'
  }

  async saveNewAcademicConsortium (log) {
    // const educationalContract = new EducationalSmartContract({isTypeOf: 'certificate', address: '0x2324', controlsAccount: 'UTPL'})
    // return educationalContract
    const {
      _id,
      contractName,
      contractAddress,
      items // name, contractType, addressConsortium
    } = log

    const digitalRegister = new EducationalSmartContract({
      isTypeOf: contractName,
      address: contractAddress,
      controlsAccount: items.addressConsortium
    })

    const consortium = new Consortium({
      hasAccount: items.addressConsortium,
      hasDigitalRegister: contractAddress,
      name: Base64.encode(items.name).slice(0, -1)
    })

    //  new Consortium({hasCredential: '', hasDigitalRegister: '', alumni: '', hasAccount: '', name:''})
    const triples = consortium.triples
    triples.concat(digitalRegister.triples)

    await Promise.all(triples.map(async(triple) => await this.updateTriples(triple)))
    await Promise.all(digitalRegister.triples.map(async(triple) => await this.updateTriples(triple)))
    return 'OK'
  }

  async updateTriples (triple) {
    try {
      let resp = await this.graphDBEndpoint.update(`
      insert data {
        graph <${GRAPHDB_CONTEXT_SB}> {
          ${triple}
        }
      }`);
      console.log(
        'Insert ' +
          (resp.success ? 'succeeded' : 'failed') +
      ':\n' + JSON.stringify(resp, null, 2), triple)
    } catch (e) {
      console.log(`Error updating new record ${e}`)
    }
  }

  /*
  PREFIX sb: <http://semantic-blockchain.org/>
  PREFIX org: <https://schema.org/>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

    SELECT DISTINCT *
      WHERE {
    ?s rdf:type sb:EducationalSmartContract .
    }
  */
  async getAllClass (className) {
    let response
    try {
      response = await this.graphDBEndpoint.query(`
        SELECT DISTINCT * from <${GRAPHDB_CONTEXT_SB}>
        where {
          ?s rdf:type ${className}
        }
      `)
    } catch (e) {
      console.log(`Error getting new record ${e}`)
    }

    if (response.success) {
      let resp = await this.graphDBEndpoint.transformBindingsToResultSet(response)
      console.log('Query succeeded:\n' + JSON.stringify(resp, null, 2))
      return resp
    } else {
      console.log('Query failed:\n' + JSON.stringify(response, null, 2))
    }
  }

  /*
    SELECT DISTINCT ?p ?o
    WHERE {
        sb:0x0bab5C55C0A75074A549CACB29F97c0B06c3099e ?p ?o.
    }
  */
  async getAllProperties (name) {
    let response

    try {
      response = await this.graphDBEndpoint.query(`
        SELECT DISTINCT * from <${GRAPHDB_CONTEXT_SB}>
        where {
          sb:${name} ?p ?o.
        }
      `)
    } catch (e) {
      console.log(`Error getting new record ${e}`)
    }

    if (response.success) {
      let resp = await this.graphDBEndpoint.transformBindingsToResultSet(response)
      console.log('Query succeeded:\n' + JSON.stringify(resp, null, 2))
      return resp
    } else {
      console.log('Query failed:\n' + JSON.stringify(response, null, 2))
    }
  }
}

