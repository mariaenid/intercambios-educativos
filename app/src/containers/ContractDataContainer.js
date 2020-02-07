import React from "react";
import PropTypes from "prop-types";
import 'react-toastify/dist/ReactToastify.css'
import { drizzleConnect } from "drizzle-react";

import {
    ContractData,
  } from "drizzle-react-components";

import { getContractArtifacts } from 'utils';

class ContractDataContainer extends React.Component {
    static propTypes = {
        contractName: PropTypes.string,
        contractAddress: PropTypes.string,
        MethodName: PropTypes.string
      };

    constructor(props, context) {
        super(props);
        this.state = {context}
      }

    state = {
        context: {},
        instanced: false
    }

    async componentDidMount() {
        const { contractName, contractAddress, MethodName } = this.props;

        const contractConfig = {
            contractName: contractAddress,
            web3Contract: new this.state.context.drizzle.web3.eth.Contract(
                (getContractArtifacts(contractName)).abi,
                contractAddress,
            )
        };

        await this.state.context.drizzle.addContract(contractConfig);
        const instanced = !!this.state.context.drizzle.contracts[contractAddress]
        this.setState({instanced});

        if(instanced){
            const contract = this.state.context.drizzle.contracts[contractAddress];

            const dataKey = contract.methods[MethodName].cacheCall();
            this.setState({ dataKey });
        }

        // let drizzle know we want to watch the `myString` method
    }

    render () {
        const { contractAddress, MethodName, render } = this.props;
        const { instanced } = this.state;
        console.log(this.state.dataKey);

        return(
        <div>
            <div className="section">
                <h2>Contracto {contractAddress}</h2>
            </div>
            {instanced && (<p>
                <strong>Datos del contrato inteligente: </strong>
                <ContractData
                    contract={contractAddress}
                    method={MethodName}
                    render={render}
                />
            </p>)}
        </div>
        );
    };
}

ContractDataContainer.contextTypes = {
    drizzle: PropTypes.object,
    render: PropTypes.func
};

export default drizzleConnect(ContractDataContainer);

