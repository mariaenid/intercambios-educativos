import React from "react";

import ContractFormContainer from "containers/ContractFormContainer";

class ConsorcioEditContainer extends React.Component {
  // metodo para obtener valores de un contrato inteligente

  render(){
    return(
      <ContractFormContainer
        title="Registro de Consorcio"
        contractAddress='0xACf5BCc75A71b5395EFE4Ef5747dC6Da91F724fD'
        contractName='AcademicConsortium'
        methodName='set'
        args={['indexConsorcioEducativo', 'addressConsorcioEducativo', 'nameConsorcioEducativo', 'directionConsorcioEducativo']}
      />
      )
  };
}
export default ConsorcioEditContainer;