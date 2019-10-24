pragma solidity >=0.4.21 <0.6.0;
// ConsorcioAcademico

contract RegistroCompetenciaAcademica {
    struct competenciaAcademica {
        uint indexCompetenciaAcademica;
        string nameCompetenciaAcademica;
        uint indexTipoCompetenciaAcademica;
    }
    mapping(uint => competenciaAcademica) competenciaAcademicaList;
    uint countList = 0;

    string[] tipoCompetenciaAcademicaList;

    constructor () public {
        tipoCompetenciaAcademicaList.push("Formal");
        tipoCompetenciaAcademicaList.push("Informal");

        competenciaAcademicaList[countList].indexCompetenciaAcademica = countList;
        competenciaAcademicaList[countList].nameCompetenciaAcademica = 'Ingenieria en Sistemas';
        competenciaAcademicaList[countList].indexTipoCompetenciaAcademica = 0;
        countList++;

        competenciaAcademicaList[countList].indexCompetenciaAcademica = countList;
        competenciaAcademicaList[countList].nameCompetenciaAcademica = 'Ingenieria en Electronica';
        competenciaAcademicaList[countList].indexTipoCompetenciaAcademica = 0;
        countList++;
    }

    function set (
        string memory nameCompetenciaAcademica,
        uint indexTipoCompetenciaAcademica
    ) public {
        competenciaAcademicaList[countList].indexCompetenciaAcademica = countList;
        competenciaAcademicaList[countList].nameCompetenciaAcademica = nameCompetenciaAcademica;
        competenciaAcademicaList[countList].indexTipoCompetenciaAcademica = indexTipoCompetenciaAcademica;

        countList++;
    }

    function get (uint index
    ) public view returns (
        uint indexCompetenciaAcademica,
        string memory nameCompetenciaAcademica,
        uint indexTipoCompetenciaAcademica
    ) {
        indexCompetenciaAcademica = competenciaAcademicaList[index].indexCompetenciaAcademica;
        nameCompetenciaAcademica = competenciaAcademicaList[index].nameCompetenciaAcademica;
        indexTipoCompetenciaAcademica = competenciaAcademicaList[index].indexTipoCompetenciaAcademica;
    }

    function getAll () public view returns (uint) {
        return countList;
    }
}