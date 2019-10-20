pragma solidity >=0.4.21 <0.6.0;
// Competencias academicas

contract CompetenciaAcademica {
    // un contrato de definiciones de niveles de competencia
    // Tipo de Formacion (Formal, INformal)
    //
    // Tipo formal
    // PREGRADO / POSTGRADO
    //

    // Tipo Informal
    // Titulo de certificacion

    struct centerCompetenceStruct {
        uint indexCentroEducacion;
        address addressCentroEducacion;
        string nameCentroEducacion;
        uint indexTipoCompetencia; // es formal o curso
        string nameTipoCompetencia;
        address addressIdentificacionPersona;
        string nameIdentificacionPersona;
    }

    centerCompetenceStruct ownCenterCompetence;

    constructor(
        uint indexCentroEducacion,
        address addressCentroEducacion,
        string memory nameCentroEducacion,
        uint indexTipoCompetencia,
        string memory nameTipoCompetencia,
        address addressIdentificacionPersona,
        string memory nameIdentificacionPersona
        ) public {
        ownCenterCompetence.indexCentroEducacion = indexCentroEducacion;
        ownCenterCompetence.addressCentroEducacion = addressCentroEducacion;
        ownCenterCompetence.nameCentroEducacion = nameCentroEducacion;
        ownCenterCompetence.indexTipoCompetencia = indexTipoCompetencia;
        ownCenterCompetence.nameTipoCompetencia = nameTipoCompetencia;
        ownCenterCompetence.addressIdentificacionPersona = addressIdentificacionPersona;
        ownCenterCompetence.nameIdentificacionPersona = nameIdentificacionPersona;
    }

    // solo deberia poder realizarlo el owner de la aplicacion
    function set (
        uint indexCentroEducacion,
        address addressCentroEducacion,
        string memory nameCentroEducacion,
        uint indexTipoCompetencia,
        string memory nameTipoCompetencia,
        address addressIdentificacionPersona,
        string memory nameIdentificacionPersona
        ) public {
        ownCenterCompetence.indexCentroEducacion = indexCentroEducacion;
        ownCenterCompetence.addressCentroEducacion = addressCentroEducacion;
        ownCenterCompetence.nameCentroEducacion = nameCentroEducacion;
        ownCenterCompetence.indexTipoCompetencia = indexTipoCompetencia;
        ownCenterCompetence.nameTipoCompetencia = nameTipoCompetencia;
        ownCenterCompetence.addressIdentificacionPersona = addressIdentificacionPersona;
        ownCenterCompetence.nameIdentificacionPersona = nameIdentificacionPersona;
    }

    //Obtener compentencia
    function get() public view returns (
        uint indexCentroEducacion,
        address addressCentroEducacion,
        string memory nameCentroEducacion,
        uint indexTipoCompetencia,
        string memory nameTipoCompetencia,
        address addressIdentificacionPersona,
        string memory nameIdentificacionPersona

    ) {
        indexCentroEducacion = ownCenterCompetence.indexCentroEducacion;
        addressCentroEducacion = ownCenterCompetence.addressCentroEducacion;
        nameCentroEducacion = ownCenterCompetence.nameCentroEducacion;
        indexTipoCompetencia = ownCenterCompetence.indexTipoCompetencia;
        nameTipoCompetencia = ownCenterCompetence.nameTipoCompetencia;
        addressIdentificacionPersona = ownCenterCompetence.addressIdentificacionPersona;
        nameIdentificacionPersona = ownCenterCompetence.nameIdentificacionPersona;
    }
}


