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
    { 'label': 'Institute Contract address', 'key': 'addressConsortium' },
    { 'label': 'Institute Name', 'key': 'name' },
    { 'label': 'Phone', 'key': 'phone' },
    { 'label': 'Email', 'key': 'email' },
    { 'label': 'Country', 'key': 'country' },
    {'label': 'City', 'key': 'city'},
    // {'label': 'Contract Address', 'key': 'contractAddress'} should be or not
];

export const ACADEMIC_CERTIFICATE_FIELDS = [
    { 'label': 'Institute Contract address', 'key': 'addressInstitute' },
    { 'label': 'Institute Name', 'key': 'nameConsortiumAcademic' },
    { 'label': 'Name Competence', 'key': 'nameCompetence'},
    { 'label': 'Address Owner', 'key': 'address'},
    { 'label': 'Name Owner', 'key': 'name'},
    { 'label': 'Identification Owner', 'key': 'identificationOwner'},
    { 'label': 'Email', 'key': 'email'},
    { 'label': 'Country', 'key': 'country'},
]

const  staticFields = {
    CONSORTIUM_TYPE: CONSORTIUM_TYPE,
    CONTRACT_TYPE: CONTRACT_TYPE,
    ACADEMIC_CONSORTIUM_FIELDS: ACADEMIC_CONSORTIUM_FIELDS,
    ACADEMIC_CERTIFICATE_FIELDS:ACADEMIC_CERTIFICATE_FIELDS
}

export default staticFields;




