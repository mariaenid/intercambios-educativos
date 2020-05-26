/*
    Fixtures for institutes and certificates
    Universidades del ecuador
    https://www.educacionsuperior.gob.ec/wp-content/uploads/downloads/2014/09/Directorio-IES-2014.pdf

    Run script
    node -r esm migrations/deploy_contracts.js
*/

import Web3 from 'web3';
import { createFixture, createAccount, addProvider, deployContract, sleep } from "./fixtures/util";
import { certificateMock } from "./fixtures/factoryCertificate";

const institutes = require("./fixtures/institutes.json")
const competences = require("./fixtures/competences.json");

const STUDENTS_NUMBER = 5;

const CONTRACT_NAMES = ["AcademicConsortium", "AcademicCertificate"];

const dataInfo =[];

const deployContracts = async (web3) => {
    try {
        await Promise.all(institutes.map(async (institute) => {
            try {
                const {contractAddress, name, account: temp} = await createAcademicContract(web3, "AcademicConsortium", institute);
                dataInfo.push({...temp, ...institute});

                for (let i=0; i < STUDENTS_NUMBER; i++) {
                    const certificate = certificateMock();

                    certificate.addressInstitute = contractAddress;
                    certificate.nameConsortiumAcademic = name;

                    const {account: temp2} = await createAcademicContract(web3, "AcademicCertificate", certificate)
                    dataInfo.push({...temp2, ...certificate});
                }
            } catch (error) {
              console.log(error, `Error`);
            }
          },
        ));

        createFixture("accounts", dataInfo)
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

    sleep(1500)

    return {...data, contractAddress: c.address, account};
}

/*
    Main Script
*/

// add provider
const provider = addProvider();

// start web3 service
const web3 = new Web3(provider)

deployContracts(web3)