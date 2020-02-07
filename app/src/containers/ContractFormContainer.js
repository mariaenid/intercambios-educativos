import React from "react";
import PropTypes from "prop-types";
import 'react-toastify/dist/ReactToastify.css'
import { drizzleConnect } from "drizzle-react";
import { getContractArtifacts } from 'utils';

import ContractForm from "../components/ContractForm";


class ContractFormContainer extends React.Component {
    static propTypes = {
        contractName: PropTypes.string,
        method: PropTypes.string.isRequired,
        sendArgs: PropTypes.object,
        labels: PropTypes.arrayOf(PropTypes.string),
        values: PropTypes.arrayOf(PropTypes.string),
        render: PropTypes.func
    };

    constructor(props, context) {
        super(props);
        this.state = {context}
    }

    state = {
        web3Contract: {},
        byteCode: {},
        context: {},
        instanced: false
    }

    async componentDidMount() {
        const { contractName } = this.props;

        const byteCode = getContractArtifacts(contractName).byteCode;
        const abi = getContractArtifacts(contractName).abi;
        const web3Contract = new this.state.context.drizzle.web3.eth.Contract(
            abi, {data: byteCode})
        web3Contract.options.data = byteCode;
        const contractConfig = {
            contractName: contractName,
            web3Contract};

        await this.state.context.drizzle.addContract(contractConfig);
        this.setState({instanced: !!this.state.context.drizzle.contracts[contractName],
        web3Contract, byteCode
        });

    }

    render() {
        const { contractName } = this.props;
        const {instanced, web3Contract, byteCode} = this.state;
        console.log('web3Cintract', web3Contract);
        return(
            <React.Fragment>
                {instanced && (<ContractForm contract={contractName}
                instanceContrat = {web3Contract}
                byteCode={byteCode}
                  {...this.props}
                />)}
            </React.Fragment>)
        }

}

ContractFormContainer.contextTypes = {
    drizzle: PropTypes.object
};

export default drizzleConnect(ContractFormContainer);
