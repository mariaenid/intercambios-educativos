import AcademicConsortium from "../../../app/src/contracts/AcademicConsortium.json";
import AcademicCertificate from "../../../app/src/contracts/AcademicCertificate.json";
import RegistroCompetenciaAcademica from "../../../app/src/contracts/RegistroCompetenciaAcademica.json";
import web3Service from "./web3Service.js";
import { GraphdbService } from "./graphdbService.js";

export const mapContractNameToArtifacts = {
  AcademicConsortium: AcademicConsortium,
  AcademicCertificate: AcademicCertificate,
  RegistroCompetenciaAcademica: RegistroCompetenciaAcademica
};

export const getContractArtifacts = contractName =>
  mapContractNameToArtifacts[contractName];

export const instanceContract = contractName =>
  new web3Service.eth.Contract(getContractArtifacts(contractName).abi);

export const getContractEvents = contracts =>
  contracts.reduce((acc, contract) => {
    const abiContract = getContractArtifacts(contract).abi;
    const events = abiContract.filter(method => method.type === "event");

    // event has name inputs
    const parameterEvents = events.map(event => {
      const topics = web3Service.eth.abi.encodeEventSignature({
        name: event.name,
        type: "event",
        inputs: event.inputs
      });

      return {
        name: event.name,
        inputs: event.inputs,
        topics,
        contractName: contract
      };
    });

    acc = acc.concat(parameterEvents);

    return acc;
  }, []);

export const processLog = (log, contracts, contractEvents) => {
  const events = contractEvents || getContractEvents(contracts);

  const event = events.find(event => event.topics === log.topics[0]);

  if (event) {
    const result = web3Service.eth.abi.decodeLog(
      event.inputs,
      log.data,
      log.topic
    )

    return {
      _id: log.id,
      name: event.name,
      contractName: event.contractName,
      items: result,
      transactionHash: log.transactionHash,
      contractAddress: log.address
    }
  }

  return {}
}

export const processLogs = (contracts, logs) => {
  const contractEvents = getContractEvents(contracts)

  return logs.reduce((acc, log) => {
    const result = processLog(log, [], contractEvents)

    if (result) {
      acc.push(result)
    }
    return acc
  }, [])
}

export const saveAllEvents = async (logs, graphdb) =>
  await Promise.all(
    logs.map(async (log) => {
      const { contractName } = log
      switch (contractName) {
        case 'AcademicCertificate': {
          console.log("AcademicCertificate", log)
          await graphdb.saveNewAcademicCertificate(log)
          break
        }
        case 'AcademicConsortium': {
          console.log("AcademicConsortium", log)

          await graphdb.saveNewAcademicConsortium(log)
          break
        }
        default:
          break
      }
    })
  )
