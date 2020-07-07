import { generateTriples } from "../constants/generateModel";

const mainPrefix = 'org:Consortium'

const objectProperties = [
  { name: 'hasCredential', prefix: 'org:hasCredential', type: 'org:EducationalOccupationalCredential' },
  { name: 'hasDigitalRegister', prefix: 'sb:hasDigitalRegister', type: 'sb:EducationalSmartContract'},
  { name: 'alumni', prefix: 'org:alumni', type: 'org:Person'},
  { name: 'hasAccount', prefix: 'sb:hasAccount', type: 'ethon:Account'},
  { name: 'name', prefix: 'sb:name', type: 'org:Text'},
  { name: 'siglas', prefix: 'sb:siglas', type: 'org:Text'},
]

export class Consortium {

  // new Consortium({hasCredential: '', hasDigitalRegister: '', alumni: '', hasAccount: '', name:''})
  constructor (dataIn) {
    const { triples, main } = generateTriples('hasAccount', mainPrefix, dataIn, objectProperties)

    this.triples = triples
    this.main = main
  }
}
