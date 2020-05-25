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
    // const newAccount = await web3.eth.personal.newAccount(PASSWORD);

    const newAccount = await web3.eth.accounts.create(PASSWORD);
    // await web3.eth.accounts.wallet.add(newAccount)
    //web3.shh.addPrivateKey(newAccount.privateKey)

    await web3.eth.personal.importRawKey(newAccount.privateKey, PASSWORD)
    await web3.eth.sendTransaction({from: defaultAccount,
        to: newAccount.address, value: ETHER_VALUE });

    // await web3.eth.personal.unlockAccount(newAccount.address, PASSWORD, 50);

    /*
    const privateKey = await web3.eth.personal.sign(
        `I am signing my one-time nonce: ${Math.floor(Math.random() * 1000000)}`,
        newAccount,
        PASSWORD)
    */
    // return { address: newAccount };
    return newAccount
}

export const deployContract = async (web3, account, contractName, data) => {
    await web3.eth.personal.unlockAccount(account.address, PASSWORD, 50);
    data.address = account.address;

    const contractArtifacts = getContractArtifacts(contractName);
    const deployedContract = contract(contractArtifacts);
    deployedContract.setProvider(web3.currentProvider);

    const args = Object.keys(data).map(k => data[k])
    const instance = await deployedContract.new(...args, {from: account.address, gas: "2613930"});
    return instance;
}


export const sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }