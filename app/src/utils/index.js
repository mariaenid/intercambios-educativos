
import AcademicConsortium from "../contracts/AcademicConsortium.json";
import AcademicCertificate from "../contracts/AcademicCertificate.json";
import RegistroCompetenciaAcademica from "../contracts/RegistroCompetenciaAcademica.json";

export const mapContractNameToArtifacts = {
  'AcademicConsortium': AcademicConsortium,
  'AcademicCertificate': AcademicCertificate,
  'RegistroCompetenciaAcademica': RegistroCompetenciaAcademica
}

export const getContractArtifacts = (contractName) => mapContractNameToArtifacts[contractName];
