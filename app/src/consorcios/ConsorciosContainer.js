import React from "react";

import ContractDataContainer from "containers/ContractDataContainer";

class ConsorciosContainer extends React.Component {
  // metodo para obtener valores de un contrato inteligente

  render(){
    return(
      <ContractDataContainer
        contractAddress='0x3fd21f8B856D80F1Da4C65e45750f77DaFaE45b3'
        contractName='ConsorcioAcademico'
        MethodName='get'
      />)
  };
}
export default ConsorciosContainer;