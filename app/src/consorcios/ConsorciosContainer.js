import React from "react";

import ContractDataContainer from "containers/ContractDataContainer";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class ConsorciosContainer extends React.Component {
  // metodo para obtener valores de un contrato inteligente

  PropTypes = {
    match: PropTypes.object
  }

  // this.props.match.params.redirectParam

  render(){
    const { id } = this.props.match.params;

    return(
      <ContractDataContainer
        contractAddress={id}
        contractName='ConsorcioAcademico'
        MethodName='get'
      />)
  };
}
export default withRouter(ConsorciosContainer);