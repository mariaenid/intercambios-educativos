import { generateTriples } from '../constants/generateModel'

const mainPrefix = 'sb:EducationalSmartContract'

const objectProperties = [
  { name: 'isTypeOf', prefix: 'sb:isTypeOf', type: 'org:Text' }, // should certificate, academicCompetence, registerContract
  { name: 'address', prefix: 'ethon:address', type: 'ethon:Account' },
  { name: 'controlsAccount', prefix: 'ethon:controlsAccount', type: ['org:Person', 'org:Consortium'] },
  { name: 'belongsTo', prefix: 'sb:belongsTo', type: 'org:Person'},
  { name: 'isValidatedBy', prefix: 'sb:isValidatedBy', type: 'sb:EducationalSmartContract'}
]

export class EducationalSmartContract {

  // const educationalContract = new EducationalSmartContract({isTypeOf: 'certificate', address: '0x2324', controlsAccount: 'UTPL'})
  constructor (dataIn) {
    const { triples, main } = generateTriples('address', mainPrefix, dataIn, objectProperties)

    this.triples = triples
    this.main = main
  }

};
