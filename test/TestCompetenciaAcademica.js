const CompetenciaAcademicaArtifacts = artifacts.require("CompetenciaAcademica");
/*
  The uint values in a contract can't be same equals to another numbers setter
  Need evalue with valueOf() or toNumber() because has a new type value
  calle big number
*/

contract("CompetenciaAcademica", accounts => {
  let CompetenciaAcademica;

  beforeEach(async () => {
    CompetenciaAcademica = await CompetenciaAcademicaArtifacts.new(
      '0',
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      'Universidad Tecnica Particular de Loja',
      '0',
      'Ingeniera en Sistemas',
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      'Maria Pineda'
      );
  });

  it("...should  get the params of the contract", async () => {
    const response = await CompetenciaAcademica.get.call();

    const real_response = {
      indexCentroEducacion: 0,
      addressCentroEducacion: '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      nameCentroEducacion: 'Universidad Tecnica Particular de Loja',
      indexTipoCompetencia: 0,
      nameTipoCompetencia: 'Ingeniera en Sistemas',
      addressIdentificacionPersona: '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      nameIdentificacionPersona: 'Maria Pineda'
    }

    const responseContract = {
      indexCentroEducacion: response.indexCentroEducacion.toNumber(),
      addressCentroEducacion: response.addressCentroEducacion,
      nameCentroEducacion: response.nameCentroEducacion,
      indexTipoCompetencia: response.indexTipoCompetencia.toNumber(),
      nameTipoCompetencia: response.nameTipoCompetencia,
      addressIdentificacionPersona: response.addressIdentificacionPersona,
      nameIdentificacionPersona: response.nameIdentificacionPersona
    }
    assert.deepEqual(real_response, responseContract, "The values are not the same");
  });

  it("...should set a new param in the contract", async () => {
    await CompetenciaAcademica.set(
      '0',
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      'Universidad Tecnica Particular de Loja',
      '0',
      'Ingenieria en Electronica',
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      'New User'
    );

    const response = await CompetenciaAcademica.get.call();

    const real_response = {
      indexCentroEducacion: 0,
      addressCentroEducacion: '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      nameCentroEducacion: 'Universidad Tecnica Particular de Loja',
      indexTipoCompetencia: 0,
      nameTipoCompetencia: 'Ingenieria en Electronica',
      addressIdentificacionPersona: '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      nameIdentificacionPersona: 'New User'
    }

    const responseContract = {
      indexCentroEducacion: response.indexCentroEducacion.toNumber(),
      addressCentroEducacion: response.addressCentroEducacion,
      nameCentroEducacion: response.nameCentroEducacion,
      indexTipoCompetencia: response.indexTipoCompetencia.toNumber(),
      nameTipoCompetencia: response.nameTipoCompetencia,
      addressIdentificacionPersona: response.addressIdentificacionPersona,
      nameIdentificacionPersona: response.nameIdentificacionPersona
    }
    assert.deepEqual(real_response, responseContract, "The values are not the same");
  });
});
