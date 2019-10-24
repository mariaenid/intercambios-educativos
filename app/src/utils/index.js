
import CompetenciaAcademica from "contracts/CompetenciaAcademica.json";
import RegistroCompetenciaAcademica from "contracts/RegistroCompetenciaAcademica.json";
import ConsorcioAcademico from "contracts/ConsorcioAcademico";

export const mapContractNameToArtifacts = {
  'CompetenciaAcademica': CompetenciaAcademica,
  'RegistroCompetenciaAcademica': RegistroCompetenciaAcademica,
  'ConsorcioAcademico': ConsorcioAcademico
}

export const getContractArtifacts = (contractName) => mapContractNameToArtifacts[contractName];
