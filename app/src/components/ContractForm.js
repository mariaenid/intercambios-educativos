import React, { Component } from "react";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { drizzleConnect } from "drizzle-react";
import InputForm from "components/InputForm";

import Button from "components/Button";

const translateType = type => {
  switch (true) {
    case /^uint/.test(type):
      return "number";
    case /^string/.test(type) || /^bytes/.test(type):
      return "text";
    case /^bool/.test(type):
      return "checkbox";
    default:
      return "text";
  }
};

class ContractForm extends Component {
  constructor(props, context) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.contracts = context.drizzle.contracts;
    this.utils = context.drizzle.web3.utils;

    // Get the contract ABI
    const abi = this.contracts[this.props.contract].abi;

    this.inputs = [];
    var initialState = {};

    // Iterate over abi for correct function.
    for (var i = 0; i < abi.length; i++) {
      if (abi[i].name === this.props.method) {
        this.inputs = abi[i].inputs;

        for (var j = 0; j < this.inputs.length; j++) {
          initialState[this.inputs[j].name] = "";
        }

        break;
      }
    }

    this.state = initialState;
  }

  handleSubmit = async (event) => {
    const { values, instanceContrat, byteCode, accounts } = this.props;

    const convertedInputs = this.inputs.map(input => {
      if (input.type === "bytes32") {
        return this.utils.toHex(values[input.name]);
      }
      return this.inputs[input.name];

    });
    console.log('convertedInputs', convertedInputs, values, instanceContrat);
    if (this.props.sendArgs) {
      return await instanceContrat.deploy({
        arguments: [values]})
    }

    return await instanceContrat.deploy({
        arguments: [values], data: byteCode})
        .send({from: accounts[0]})
        .then(function(newContractInstance){
            console.log(newContractInstance.options.address) // instance with the new contract address
        });

    }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { contract, instanceContrat } = this.props;

    if (this.props.render) {
      return this.props.render({
        inputs: this.inputs,
        inputTypes: this.inputs.map(input => translateType(input.type)),
        handleSubmit: this.handleSubmit
      });
    }

    return (
        <React.Fragment>
            {
            instanceContrat && (<Button label={"Submit"} handleClick={this.handleSubmit} />)

            }
        </React.Fragment>
    );
  }
}

ContractForm.contextTypes = {
  drizzle: PropTypes.object
};

ContractForm.propTypes = {
  contract: PropTypes.string.isRequired,
  instanceContrat: PropTypes.func,
  method: PropTypes.string.isRequired,
  sendArgs: PropTypes.object,
  labels: PropTypes.arrayOf(PropTypes.string),
  values: PropTypes.arrayOf(PropTypes.string),
  render: PropTypes.func
};

/*
 * Export connected component.
 */

const mapStateToProps = state => {
  return {
    contracts: state.contracts,
    accounts: state.accounts
  };
};

export default drizzleConnect(ContractForm, mapStateToProps);
