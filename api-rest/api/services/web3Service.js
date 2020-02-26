import Web3, { providers } from 'web3';

const currentProvider = process.env.LOCAL_PROVIDER || 'http://localhost:8545'
const provider = new providers.HttpProvider(currentProvider)

const web3Service = new Web3(provider)

export default web3Service
