import { getContractArtifacts } from 'utils';

export const addContractInstance = async (drizzle, contractAddress, contractName) => {

    const contractConfig = {
        contractName: contractAddress,
        web3Contract: new drizzle.web3.eth.Contract(
            (getContractArtifacts(contractName)).abi,
            contractAddress,
        )
    };

    await this.state.context.drizzle.addContract(contractConfig);
}