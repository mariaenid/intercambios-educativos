
/*
Certificados
    {
        contractAddressConsortiumAcademic: "0x554e3DEF5789Fb733E1173369f48F3F79901384C",
        nameConsortiumAcademic: "Universidad Tecnica Particular de Loja",
        nameCompetence: "Ingeniera en Sistemas",
        addressOwner: accounts[1],
        nameOwner: "Maria Rivas",
        identificationOwner: "1105148595"
    }
*/

const faker = require("faker");
import competences from "./competences";

const numCompetences = competences.length - 1;

export const certificateMock = () => {
    return {
        "addressInstitute": null,
        "nameConsortiumAcademic": null,
        "nameCompetence": competences[faker.random.number(numCompetences)],
        "address": null,
        "name": faker.name.findName(),
        "identificationOwner": faker.random.uuid(),
        "email": faker.internet.email(),
        "county": faker.address.country()
    }
}