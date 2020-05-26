import React from "react";

import ContractDataContainer from "containers/ContractDataContainer";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { ACADEMIC_CERTIFICATE_FIELDS } from "../constants.js/StaticFields";

class CompetenciasContainer extends React.Component {
  // metodo para obtener valores de un contrato inteligente
  PropTypes = {
    match: PropTypes.object
  };

  renderCertificate = displayData => {
    return (
    <div>
      {ACADEMIC_CERTIFICATE_FIELDS.map(field => {
        let label = field.label
        let value = displayData[field.key];

        return(<div>{label}: {value}</div>)})
      }
    </div>);
  };

  render() {
    const { id } = this.props.match.params;

    return (
        <ContractDataContainer
          title={"Certificate Smart Contract"}
          contractAddress={id}
          contractName="AcademicCertificate"
          MethodName="get"
          render={this.renderCertificate}
        />
    );
  }
}
export default withRouter(CompetenciasContainer);
