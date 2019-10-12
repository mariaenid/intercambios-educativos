import competenciasComponent from "./competenciasComponent";
import { drizzleConnect } from "drizzle-react";

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    SimpleStorage: state.contracts.SimpleStorage,
    TutorialToken: state.contracts.TutorialToken,
    drizzleStatus: state.drizzleStatus,
  };
};

const CompetenciasContainer = drizzleConnect(competenciasComponent, mapStateToProps);
export default CompetenciasContainer;
