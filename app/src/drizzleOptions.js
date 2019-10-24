import CompetenciaAcademica from "./contracts/CompetenciaAcademica.json";
import RegistroCompetenciaAcademica from "./contracts/RegistroCompetenciaAcademica.json";
import ConsorcioAcademico from "./contracts/ConsorcioAcademico";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545",
    },
  },
  contracts: [ConsorcioAcademico, RegistroCompetenciaAcademica, CompetenciaAcademica],
//  events: {
//    SimpleStorage: ["StorageSet"],
//  },
  polls: {
    accounts: 1500,
  }
};

export default options;
