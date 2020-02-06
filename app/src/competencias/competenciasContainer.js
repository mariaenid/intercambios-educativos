import React from "react";

import ContractDataContainer from "containers/ContractDataContainer";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class CompetenciasContainer extends React.Component {
  // metodo para obtener valores de un contrato inteligente
  PropTypes = {
    match: PropTypes.object
  }

  render(){
    const { id } = this.props.match.params;

    return(
      <ContractDataContainer
        contractAddress={id}
        contractName='AcademicCertificate'
        MethodName='get'
      />)
  };
}
export default withRouter(CompetenciasContainer);