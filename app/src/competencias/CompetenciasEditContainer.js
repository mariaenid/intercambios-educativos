import React from "react";

import ContractFormContainer from "containers/ContractFormContainer";

class CompetenciasEditContainer extends React.Component {
  // metodo para obtener valores de un contrato inteligente

  render(){
    return(
      <ContractFormContainer
        title="Registro de Certificado"
        contractAddress='0xf3C0F3F57BE2B7c3A572749784476473E93D82B5'
        contractName='CompetenciaAcademica'
        methodName='set'
        args={['indexCentroEducacion', 'addressCentroEducacion', 'nameCentroEducacion', 'indexTipoCompetencia', 'nameTipoCompetencia', 'addressIdentificacionPersona', 'nameIdentificacionPersona']}
      />
      )
  };
}
export default CompetenciasEditContainer;