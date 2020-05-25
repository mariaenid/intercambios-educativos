import AcademicConsortium from "contracts/AcademicConsortium.json";
import AcademicCertificate from "contracts/AcademicCertificate.json";
import RegistroCompetenciaAcademica from "contracts/RegistroCompetenciaAcademica.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545",
    },
  },
  contracts: [ RegistroCompetenciaAcademica],
  events: {
    AcademicConsortium: ["academicConsorsium"],
  },
  polls: {
    accounts: 1500,
  }
};

export default options;
