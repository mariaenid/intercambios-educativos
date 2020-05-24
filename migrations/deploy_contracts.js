/*
    Fixtures for institutes and certificates
    Universidades del ecuador
    https://www.educacionsuperior.gob.ec/wp-content/uploads/downloads/2014/09/Directorio-IES-2014.pdf

    Run script
    node -r esm migrations/deploy_contracts.js
*/

import Web3 from 'web3';
import { createFixture, createAccount, addProvider, deployContract } from "./fixtures/util";
import { certificateMock } from "./fixtures/factoryCertificate";

const institutes = require("./fixtures/institutes.json")
const competences = require("./fixtures/competences.json");

const STUDENTS_NUMBER = 10;
const INSTITUTES_NUMBER = institutes.length;

const CONTRACT_NAMES = ["AcademicConsortium", "AcademicCertificate"];

const deployContracts = async (web3) => {
    try {
        await Promise.all(institutes.map(async (institute) => {
            try {
                const {contractAddress, name} = await createAcademicContract(web3, "AcademicConsortium", institute);

                for (let i=0; i< STUDENTS_NUMBER; i++) {
                    const certificate = certificateMock();

                    certificate.addressInstitute = contractAddress;
                    certificate.nameConsortiumAcademic = name;
                    console.log("certificates", certificate);

                    await createAcademicContract(web3, "AcademicCertificate", certificate)
                }
            } catch (error) {
              console.log(error, `Error`);
            }
          },
        ));

        // createFixture("example", account)
    }
    catch(error) {
        console.log(`Error ${error.toString()}`)
    }
}

const createAcademicContract = async (web3, contractName, data) => {
    const account = await createAccount(web3);
    console.log("Creating account ", account);
    const c = await deployContract(web3, account, contractName, data);
    console.log("Deploying contract", c.address);

    return {...data, contractAddress: c.address};
}

/*
    Main Script

    console.log("holisss", certificateMock());
*/


// add provider
const provider = addProvider();

// start web3 service
const web3 = new Web3(provider)

deployContracts(web3)