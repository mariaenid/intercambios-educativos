import React, { Component } from "react";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { drizzleConnect } from "drizzle-react";
import contract from "@truffle/contract";

import { getContractArtifacts } from "utils";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

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

const styles = (theme) =>  ({
  button: {
    color: '#fff',
    'background-color': '#556cd6',
    flex: 'align-end'
  }
});


class ContractForm extends Component {
  constructor(props, context) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.contracts = context.drizzle.contracts;
    this.utils = context.drizzle.web3.utils;

    // Get the contract ABI
    const abi = this.contracts[this.props.contractName].abi;

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
    const { contractName, currentProvider, accounts, inputs } = this.props;

    try {
      event.preventDefault();

      const truffleContract = await contract(getContractArtifacts(contractName));
      await truffleContract.setProvider(currentProvider);
      // console.log("deploy ", inputs, truffleContract)

      return await truffleContract.new(
        ...inputs,
        { from: accounts[0] }
      );
    } catch (error) {
      console.log("Error", error)
    }
  };

  render () {
    const { handleSubmit, classes } = this.props;

    if (this.props.render) {
      return this.props.render({
        inputs: this.props.inputs,
        inputTypes: this.inputs.map(input => translateType(input.type)),
        handleSubmit: handleSubmit || this.handleSubmit
      });
    }

    return (
      <React.Fragment>
        <Button onClick={handleSubmit || this.handleSubmit} className={classes.button}>
          Deploy
        </Button>
      </React.Fragment>
    );
  }
}

ContractForm.contextTypes = {
  drizzle: PropTypes.object
};

ContractForm.propTypes = {
  classes: PropTypes.object.isRequired,
  contractName: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.string),

  /* Deploy contracts*/
  currentProvider: PropTypes.object,
  truffleContract: PropTypes.object,
  /* Send Transactions */
  handleInputChange: PropTypes.func,
  method: PropTypes.string.isRequired,
  sendArgs: PropTypes.object,
  labels: PropTypes.arrayOf(PropTypes.string),
  render: PropTypes.func,
  handleSubmit: PropTypes.func
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

export default withStyles(styles)(drizzleConnect(ContractForm, mapStateToProps));
