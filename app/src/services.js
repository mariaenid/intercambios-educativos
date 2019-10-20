
import { Drizzle, generateStore } from "drizzle";
import CompetenciaAcademica from "./contracts/CompetenciaAcademica.json";


export const getContractInstance = () => {
    const options = {
        contracts: [CompetenciaAcademica]
    };
    const drizzleStore = generateStore(options);
    return new Drizzle(options, drizzleStore);
}
