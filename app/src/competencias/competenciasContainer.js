import competenciasComponent from "./competenciasComponent";
import { drizzleConnect } from "drizzle-react";


const CompetenciasContainer = drizzleConnect(competenciasComponent);

export default CompetenciasContainer;
