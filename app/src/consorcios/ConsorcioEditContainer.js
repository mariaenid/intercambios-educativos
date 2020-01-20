import React from "react";

import ContractFormContainer from "containers/ContractFormContainer";

class ConsorcioEditContainer extends React.Component {
  // metodo para obtener valores de un contrato inteligente

  render(){
    return(
      <ContractFormContainer
        title="Registro de Consorcio"
        contractAddress='0x7ab9915133A275E007996fA792791d95a6351191'
        contractName='ConsorcioAcademico'
        methodName='set'
        args={['indexConsorcioEducativo', 'addressConsorcioEducativo', 'nameConsorcioEducativo', 'directionConsorcioEducativo']}
      />
      )
  };
}
export default ConsorcioEditContainer;