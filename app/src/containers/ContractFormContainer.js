import React from "react";
import PropTypes from "prop-types";
import 'react-toastify/dist/ReactToastify.css'
import { drizzleConnect } from "drizzle-react";
import { getContractArtifacts } from 'utils';

import {
    ContractForm,
  } from "drizzle-react-components";

import ContractFormComponent from "components/ContractFormComponent";

class ContractFormContainer extends React.Component {
    static propTypes = {
        contractName: PropTypes.string,
        contractAddress: PropTypes.string,
        methodName: PropTypes.string,
        args: PropTypes.array
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
        const { contractName, contractAddress } = this.props;

        const contractConfig = {
            contractName: contractAddress,
            web3Contract: new this.state.context.drizzle.web3.eth.Contract(
                (getContractArtifacts(contractName)).abi,
                contractAddress,
            )
          };

        await this.state.context.drizzle.addContract(contractConfig);
        this.setState({instanced: !!this.state.context.drizzle.contracts[contractAddress]});

    }

    render() {
        const { contractName, methodName, args, title } = this.props
        return(
            <div style={this.style}>
                <h4> {title} </h4>
                <ContractFormComponent
                  contract={contractName}
                  method={methodName}
                  labels={args}
                />
            </div>
);
    }

}

ContractFormContainer.contextTypes = {
    drizzle: PropTypes.object
};

export default drizzleConnect(ContractFormContainer);
