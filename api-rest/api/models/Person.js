import { generateTriples } from "../constants/generateModel";

const mainPrefix = 'org:Person'
/*
{ name: 'isTypeOf', prefix: 'sb:isTypeOf', type: 'org:Text' }, // should certificate, academicCompetence, registerContract
{ name: 'address', prefix: 'ethon:address', type: 'ethon:Account' },
{ name: 'controlsAccount', prefix: 'ethon:controlsAccount', type: ['org:Person', 'org:Consortium'] }
*/
const objectProperties = [
  { name: 'hasCredential',
    prefix: 'org:hasCredential',
    type: 'org:EducationalOccupationalCredential'
  },
  { name: 'hasDigitalCertificate',
    prefix: 'sb:hasDigitalCertificate',
    type: 'sb:EducationalSmartContract'
  },
  { name: 'hasAccount', prefix: 'sb:hasAccount', type: 'ethon:Account' },
  { name: 'name', prefix: 'org:name', type: 'org:Text' }
]

export class Person {

  // new Person({hasCredential: '', hasDigitalCertificate: '', hasAccount: '', name:''})
  constructor (dataIn) {
    const { triples, main } = generateTriples('hasAccount', mainPrefix, dataIn, objectProperties)

    this.triples = triples
    this.main = main
  }
}
