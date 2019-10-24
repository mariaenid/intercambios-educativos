import React from "react";
import PropTypes from "prop-types";
import 'react-toastify/dist/ReactToastify.css'
import { drizzleConnect } from "drizzle-react";

import {
    ContractForm,
  } from "drizzle-react-components";

class ContractDataFormContainer extends React.Component {
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

    render() {
        const { contractName, methodName, args } = this.props
        return(
            <div style={this.style}>
                <h4>Get data from {methodName} </h4>
                <ContractForm
                contract={contractName}
                method={methodName}
                labels={args}
                />
            </div>
);
    }

}

ContractDataFormContainer.contextTypes = {
    drizzle: PropTypes.object
};

export default drizzleConnect(ContractDataFormContainer);
