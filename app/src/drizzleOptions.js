import CompetenciasAcademicas from "./contracts/CompetenciasAcademicas.json";
import TutorialToken from "./contracts/TutorialToken.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545",
    },
  },
  contracts: [CompetenciasAcademicas, TutorialToken],
//  events: {
//    SimpleStorage: ["StorageSet"],
//  },
  polls: {
    accounts: 1500,
  },
};

export default options;
