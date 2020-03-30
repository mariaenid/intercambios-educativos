import React from "react";

import ContractDataContainer from "containers/ContractDataContainer";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { ACADEMIC_CONSORTIUM_FIELDS, CONSORTIUM_TYPE } from "../constants.js/StaticFields";

class ConsorciosContainer extends React.Component {
  // metodo para obtener valores de un contrato inteligente

  PropTypes = {
    match: PropTypes.object
  }

  renderConsortium = displayData => {
    console.log('displayDAta', displayData);
    return (
    <div>
      {ACADEMIC_CONSORTIUM_FIELDS.map(field => {
        let label = field.label
        let value = displayData[field.key];

        if(field.key === 'consortiumType') {
          value = CONSORTIUM_TYPE[displayData[field.key]]
        }

        return(<div>{label}: {value}</div>)})
      }
    </div>);
  };
  // this.props.match.params.redirectParam

  render(){
    const { id } = this.props.match.params;

    return(
      <ContractDataContainer
        contractAddress={id}
        contractName='AcademicConsortium'
        MethodName='get'
        render={this.renderConsortium}
      />)
  };
}
export default withRouter(ConsorciosContainer);