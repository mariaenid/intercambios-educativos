import React from "react";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { drizzleConnect } from "drizzle-react";

import { getContractArtifacts } from "utils";
import ContractForm from "../components/ContractForm";

class ContractFormContainer extends React.Component {
  static propTypes = {
    contractName: PropTypes.string,
    inputs: PropTypes.arrayOf(PropTypes.string),
    labels: PropTypes.arrayOf(PropTypes.string),
    method: PropTypes.string.isRequired,
    sendArgs: PropTypes.object,
    render: PropTypes.func
  };

  constructor(props, context) {
    super(props);
    this.state = { context };
  }

  state = {
    web3Contract: {},
    byteCode: {},
    context: {},
    instanced: false
  };

  async componentDidMount() {
    const { contractName } = this.props;

    const byteCode = getContractArtifacts(contractName).byteCode;
    const abi = getContractArtifacts(contractName).abi;

    const web3Contract = new this.state.context.drizzle.web3.eth.Contract(abi, {
      data: byteCode
    });
    web3Contract.options.data = byteCode;
    const contractConfig = {
      contractName: contractName,
      web3Contract
    };

    await this.state.context.drizzle.addContract(contractConfig);

    this.setState({
      instanced: !!this.state.context.drizzle.contracts[contractName],
      currentProvider: web3Contract.currentProvider
    });
  }

  render() {
    const { contractName } = this.props;
    const { instanced, currentProvider } = this.state;
    return (
      <React.Fragment>
        {instanced && (
          <ContractForm
            contractName={contractName}
            currentProvider={currentProvider}
            {...this.props}
          />
        )}
      </React.Fragment>
    );
  }
}

ContractFormContainer.defaultProps = {
  currentProvider: {},
  truffleContract: {},
  method: ""
};
ContractFormContainer.contextTypes = {
  drizzle: PropTypes.object
};

export default drizzleConnect(ContractFormContainer);
