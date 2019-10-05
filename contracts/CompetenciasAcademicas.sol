pragma solidity >=0.4.21 <0.6.0;
// Competencias academicas

contract CompetenciasAcademicas {
    struct competenceData {
        string authorCompetence;
        address addressCompetence;
        uint centerCompetence;
        uint typeCompetence;
    }
    // un contrato de definiciones de niveles de competencia
    // Tipo de Formacion (Formal, INformal)
    //
    // Tipo formal
    // PREGRADO / POSTGRADO
    //

    // Tipo Informal
    // Titulo de certificacion

    struct centerCompetenceStruct {
        uint indexCenterCompetence;
        address addressCenterCompetence;
        string nameCompetence;
    }
    centerCompetenceStruct ownCenterCompetence;

    // esta tripleta deberia ser un contrato separado deberia estar en un contrato
    struct competenceDetails {
        uint competence;
        string nameCompetence;
        string departamentCompetence;
    }
    mapping (uint => competenceDetails) competenceTypeData;
    uint competenceTypeIndex;

    mapping (uint => competenceData) competenceDataArray;
    uint countCompentences = 0;

    constructor(uint indexCenterCompetence, address addressCenterCompetence, string memory nameCompetence) public {
        ownCenterCompetence = centerCompetenceStruct(indexCenterCompetence, addressCenterCompetence, nameCompetence);
        competenceTypeData[0] = competenceDetails(0, "Ingenieria en Sistemas", "Ciencias de la Compuraticon");
    }

    // Deberia ser NombreDelInteresado, Direccion del Interesado, TypoDeCompetencia
    function set(string memory authorCompetence, address addressCompetence, uint typeCompentence) public {
        competenceDataArray[countCompentences] = competenceData(authorCompetence,
        addressCompetence,
        ownCenterCompetence.indexCenterCompetence,
        typeCompentence);
    }

    //Obtener compentencia
    function get(uint index) public view returns (string memory authorCompetence,
                                                       address addressCompetence,
                                                       string memory centerCompetence,
                                                       string memory typeCompetence) {
        authorCompetence = competenceDataArray[index].authorCompetence;
        addressCompetence = competenceDataArray[index].addressCompetence;
        centerCompetence = ownCenterCompetence.nameCompetence;
        typeCompetence = competenceTypeData[competenceDataArray[index].typeCompetence].nameCompetence;
    }
}


