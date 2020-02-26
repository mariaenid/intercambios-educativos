import { EnapsoGraphDBClient } from "@innotrade/enapso-graphdb-client";
import fs from "fs";
import { prefixes } from "../constants/prefix";
import { EducationalSmartContract } from "../models/EducationalSmartContract";
import { Consortium } from "../models/Consortium";
import { Person } from "../models/Person";
import web3Service from "./web3Service";

const GRAPHDB_BASE_URL = process.env.GRAPHDB_BASE_URL || "http://localhost:7200",
GRAPHDB_REPOSITORY = process.env.GRAPHDB_REPOSITORY || "semantic-blockchain",
GRAPHDB_USERNAME = process.env.GRAPHDB_USERNAME || "admin",
GRAPHDB_PASSWORD = process.env.GRAPHDB_PASSWORD || "admin",
GRAPHDB_CONTEXT_SB =
  process.env.GRAPHDB_CONTEXT_BLOCKCHAIN ||
  'http://semantic-blockchain.org'

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
      DEFAULT_PREFIXES.push({ prefix, iri })
    })

    this.graphDBEndpoint = new EnapsoGraphDBClient.Endpoint({
      baseURL: GRAPHDB_BASE_URL,
      repository: GRAPHDB_REPOSITORY,
      prefixes: DEFAULT_PREFIXES
    })
  }

  async initCliente () {
    try {
      if (this.graphDBEndpoint) {
        await this.graphDBEndpoint.login(
          GRAPHDB_USERNAME,
           GRAPHDB_PASSWORD
        )
      }
    } catch (e) {
      console.log('error logining graphDb', e)
    }
  }

  async saveNewCertificate (log) {
    // const educationalContract = new EducationalSmartContract({isTypeOf: 'certificate', address: '0x2324', controlsAccount: 'UTPL'})
    // return educationalContract
    const { _id, name, contractName, transactionHash, contractAddress, items } = log

    // new EducationalSmartContract({isTypeOf: 'certificate', address: '0x2324', controlsAccount: 'UTPL'})
    const educationalSmartContract = new EducationalSmartContract({ isTypeOf: name, address: contractAddress, controlsAccount: items.addressOwner })

    // new Person({hasCredential: '', hasDigitalRegister: '', hasAccount: '', name:''})
    const person = new Person({hasDigitalRegister: educationalSmartContract.main,
      hasAccount: items.addressOwner
    })

    //  new Consortium({hasCredential: '', hasDigitalRegister: '', alumni: '', hasAccount: '', name:''})
    const consortium = new Consortium({ alumni: person.main, name: items.nameConsortiumAcademic })
    const triples = []
    triples.push(educationalSmartContract.main)
    triples.push(educationalSmartContract.triples)
    triples.push(person.main)
    triples.push(person.triples)
    triples.push(consortium.main)
    triples.push(consortium.triples)

    return await Promise.all(triples.map(async(triple) => await this.updateTriples(triple)))
  }

  async updateTriples (triple) {
    console.log(triple)
    try {
      let resp = await this.graphDBEndpoint.update(`
      insert data {
        graph <${GRAPHDB_CONTEXT_SB}> {
          ${triple}
        }
      }`)
      console.log('Insert ' +
      (resp.success ? 'succeeded' : 'failed') +
      ':\n' + JSON.stringify(resp, null, 2))
    } catch (e) {
      console.log(`Error updating new record ${e}`)
    }
  }
}
