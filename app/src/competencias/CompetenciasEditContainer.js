import React from "react";

import ContractFormContainer from "containers/ContractFormContainer";

class CompetenciasEditContainer extends React.Component {
  // metodo para obtener valores de un contrato inteligente

  render(){
    return(
      <ContractFormContainer
        title="Registro de Certificado"
        contractAddress='0x422F84F458536D1657C3BA1f055035E022034c6f'
        contractName='CompetenciaAcademica'
        methodName='set'
        args={['indexCentroEducacion', 'addressCentroEducacion', 'nameCentroEducacion', 'indexTipoCompetencia', 'nameTipoCompetencia', 'addressIdentificacionPersona', 'nameIdentificacionPersona']}
      />
      )
  };
}
export default CompetenciasEditContainer;