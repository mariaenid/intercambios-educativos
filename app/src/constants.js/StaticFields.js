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
    { 'label': 'Name', 'key': 'name' },
    { 'label': 'Phone', 'key': 'phone' },
    { 'label': 'Email', 'key': 'email' },
    { 'label': 'Country', 'key': 'country' },
    { 'label': 'Consortium', 'key': 'address' },
    {'label': 'Consortium type', 'key': 'consortiumType'},
    {'label': 'Contract Address', 'key': 'contractAddress'}
];

export const ACADEMIC_CERTIFICATE_FIELDS = [
    { 'label': 'Consortium contract address', 'key': 'contractAddressConsortiumAcademic' },
    { 'label': 'Consortium Name', 'key': 'nameConsortiumAcademic' },
    { 'label': 'Type Competence', 'key': 'competenceType'},
    { 'label': 'Name Competence', 'key': 'nameCompetence'},
    { 'label': 'Address Owner', 'key': 'addressOwner'},
    { 'label': 'Name Owner', 'key': 'nameOwner'},
    { 'label': 'Identification Owner', 'key': 'identificationOwner'},
]



