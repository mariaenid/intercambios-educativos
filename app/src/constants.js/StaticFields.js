/*  Consorsiums */

export const CONSORTIUM_TYPE = {
    0: 'Formal',
    1: 'Informal'
};

export const CONTRACT_TYPE = {
    0: 'Certificate',
    1: 'Consortium'
}

export const ACADEMIC_CONSORTIUM_FIELDS = [
    { 'label': 'Consortium', 'key': 'addressConsortium' },
    { 'label': 'Name', 'key': 'name' },
    { 'label': 'Phone', 'key': 'phone' },
    { 'label': 'Email', 'key': 'email' },
    { 'label': 'Country', 'key': 'country' },
    {'label': 'City', 'key': 'city'},
    {'label': 'Consortium type', 'key': 'consortiumType'},
    // {'label': 'Contract Address', 'key': 'contractAddress'} should be or not
];

export const ACADEMIC_CERTIFICATE_FIELDS = [
    { 'label': 'Consortium contract address', 'key': 'contractAddressConsortiumAcademic' },
    { 'label': 'Consortium Name', 'key': 'nameConsortiumAcademic' },
    {'label': '', 'key': 'indexCompetence'},
    { 'label': 'Name Competence', 'key': 'nameCompetence'},
    { 'label': 'Address Owner', 'key': 'addressOwner'},
    { 'label': 'Name Owner', 'key': 'nameOwner'},
    { 'label': 'Identification Owner', 'key': 'identificationOwner'},
]

const  staticFields = {
    CONSORTIUM_TYPE: CONSORTIUM_TYPE,
    CONTRACT_TYPE: CONTRACT_TYPE,
    ACADEMIC_CONSORTIUM_FIELDS: ACADEMIC_CONSORTIUM_FIELDS,
    ACADEMIC_CERTIFICATE_FIELDS:ACADEMIC_CERTIFICATE_FIELDS
}

export default staticFields;




