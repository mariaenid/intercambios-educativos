import React from "react";

import ContractDataContainer from "containers/ContractDataContainer";

class CompetenciasContainer extends React.Component {
  // metodo para obtener valores de un contrato inteligente

  render(){
    return(
      <ContractDataContainer
        contractAddress='0xB4fd76B030cAcbC076D251029Aed9b63613ae0E1'
        contractName='CompetenciaAcademica'
        MethodName='get'
      />)
  };
}
export default CompetenciasContainer;