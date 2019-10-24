import React from "react";

import ContractFormContainer from "containers/ContractFormContainer";

class CompetenciasEditContainer extends React.Component {
  // metodo para obtener valores de un contrato inteligente

  render(){
    return(
      <ContractFormContainer
        contractAddress='0x7BF21f7ECA0829721B42109D03d60E99eDA21279'
        contractName='CompetenciaAcademica'
        methodName='set'
        args={['indexCentroEducacion', 'addressCentroEducacion', 'nameCentroEducacion', 'indexTipoCompetencia', 'nameTipoCompetencia', 'addressIdentificacionPersona', 'nameIdentificacionPersona']}
      />
      )
  };
}
export default CompetenciasEditContainer;