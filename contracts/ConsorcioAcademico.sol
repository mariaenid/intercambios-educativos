pragma solidity >=0.4.21 <0.6.0;
// ConsorcioAcademico

contract ConsorcioAcademico {

    struct detailsConsorcio {
        uint indexConsorcioEducativo;
        address addressConsorcioEducativo;
        string nameConsorcioEducativo;
        string directionConsorcioEducativo;
    }

    detailsConsorcio ownConsorcio;

    struct registerCompetenciaAcademica {
        uint indexRegisterCompetencia;
        address addressRegisterCompetencia;
    }
    uint countRegisterList = 0;
    mapping(uint => registerCompetenciaAcademica) registerList;

    uint[] allowedCompetenceList;

    constructor(
        uint indexConsorcioEducativo,
        address addressConsorcioEducativo,
        string memory nameConsorcioEducativo,
        string memory directionConsorcioEducativo
    ) public {
        ownConsorcio.indexConsorcioEducativo = indexConsorcioEducativo;
        ownConsorcio.addressConsorcioEducativo = addressConsorcioEducativo;
        ownConsorcio.nameConsorcioEducativo = nameConsorcioEducativo;
        ownConsorcio.directionConsorcioEducativo = directionConsorcioEducativo;
    }

    // get details of the consorcio
    function get () public view returns (
        uint indexConsorcioEducativo,
        address addressConsorcioEducativo,
        string memory nameConsorcioEducativo,
        string memory directionConsorcioEducativo
    ) {
        indexConsorcioEducativo = ownConsorcio.indexConsorcioEducativo;
        addressConsorcioEducativo = ownConsorcio.addressConsorcioEducativo;
        nameConsorcioEducativo = ownConsorcio.nameConsorcioEducativo;
        directionConsorcioEducativo = ownConsorcio.directionConsorcioEducativo;
    }

    function set (
        uint indexConsorcioEducativo,
        address addressConsorcioEducativo,
        string memory nameConsorcioEducativo,
        string memory directionConsorcioEducativo
    ) public {
        ownConsorcio.indexConsorcioEducativo = indexConsorcioEducativo;
        ownConsorcio.addressConsorcioEducativo = addressConsorcioEducativo;
        ownConsorcio.nameConsorcioEducativo = nameConsorcioEducativo;
        ownConsorcio.directionConsorcioEducativo = directionConsorcioEducativo;
    }

    //competencias Academicas registradas
    function setRegisterCompetenciaAcademica(
        address addressRegisterCompetencia
    ) public {
        registerList[countRegisterList].indexRegisterCompetencia = countRegisterList;
        registerList[countRegisterList].addressRegisterCompetencia = addressRegisterCompetencia;
        countRegisterList++;
    }

    function getRegisterCompetenciaAcademica(
        uint index
    ) public view returns(
        uint indexRegisterCompetencia,
        address addressRegisterCompetencia
    ) {
        indexRegisterCompetencia = registerList[index].indexRegisterCompetencia;
        addressRegisterCompetencia = registerList[index].addressRegisterCompetencia;
    }

    function getAllRegisterCompetenciaAcademica() public view returns (uint) {
        return countRegisterList;
    }

    // Allowed competences
    function setAllowedCompetence (uint indexAllowedCompetence) public {
        allowedCompetenceList.push(indexAllowedCompetence);
    }

    function getAllowedCompetence (uint indexAllowedCompetence) public view returns (uint) {
        return allowedCompetenceList[indexAllowedCompetence];
    }

    function getAllAllowedCompetence () public view returns (uint[] memory) {
        return allowedCompetenceList;
    }
}