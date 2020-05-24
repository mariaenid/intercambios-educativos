/*
    Write JSON fixtures
*/

import { writeFile } from 'fs';
import contract from "truffle-contract";

import { getContractArtifacts } from "../../app/src/utils";

import { providers } from 'web3';

const PATH = "migrations/fixtures";
const PASSWORD = "test123";

// const COST_GAS = 100000000000000000;
const ETHER_VALUE = 100000000000000000;

/**
 *
 * @param {*} name
 * @param {*} data
 */
export const createFixture = (name, data) => {
    const jsonString = JSON.stringify(data);

    writeFile(`${PATH}/tempfile_${name}.json`, jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })

}

/*
    Web3 Services
*/

export const addProvider = () => {
    const currentProvider = process.env.LOCAL_PROVIDER || 'http://localhost:8545';
    return new providers.HttpProvider(currentProvider)
}

const getDefaultAccount = async (web3) => {
    const accounts = await web3.eth.getAccounts();
    return accounts[0]
}

export const createAccount = async (web3) =>  {
    const defaultAccount = await getDefaultAccount(web3);
    const newAccount = await web3.eth.personal.newAccount(PASSWORD);

    await web3.eth.sendTransaction({from: defaultAccount,
        to: newAccount, value: ETHER_VALUE });

    return newAccount;
}

export const deployContract = async (web3, account, contractName, data) => {
    await web3.eth.personal.unlockAccount(account, PASSWORD, 50);
    data.address = account;

    const contractArtifacts = getContractArtifacts(contractName);
    const deployedContract = contract(contractArtifacts);
    deployedContract.setProvider(web3.currentProvider);

    const args = Object.keys(data).map(k => data[k])
    const instance = await deployedContract.new(...args, {from: account, gas: "2613930"});
    return instance;
}
