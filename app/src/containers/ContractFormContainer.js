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
    web3Contract: null,
    byteCode: {},
    context: {},
    instanced: false,
    currentProvider: null
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
      web3Contract: web3Contract
    };

    await this.state.context.drizzle.addContract(contractConfig);

    this.setState({
      instanced: !!this.state.context.drizzle.web3.eth.currentProvider,
      currentProvider: await this.state.context.drizzle.web3.eth.currentProvider
    });

  }

  render() {
    const { contractName } = this.props;
    const { currentProvider } = this.state;
    console.log("CurrentProvicer", this.state.currentProvider)
    return (
      <React.Fragment>
        {!!currentProvider && (
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

ContractFormContainer.contextTypes = {
  drizzle: PropTypes.object
};

export default drizzleConnect(ContractFormContainer);
