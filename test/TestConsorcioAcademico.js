const ConsorcioAcademicoArtifacts = artifacts.require("ConsorcioAcademico");
/*
  The uint values in a contract can't be same equals to another numbers setter
  Need evalue with valueOf() or toNumber() because has a new type value
  calle big number
*/

contract("...ConsorcioAcademico", accounts => {
  let ConsorcioAcademico;

  beforeEach(async () => {
    ConsorcioAcademico = await ConsorcioAcademicoArtifacts.new(
      '0',
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      'Universidad Tecnica Particular de Loja',
      'Loja'
      );
  });

  it("...should  get the params of the contract", async () => {
    const response = await ConsorcioAcademico.get.call();

    const real_response = {
      indexConsorcioEducativo: 0,
      addressConsorcioEducativo: '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      nameConsorcioEducativo: 'Universidad Tecnica Particular de Loja',
      directionConsorcioEducativo: 'Loja',
    }

    const responseContract = {
      indexConsorcioEducativo: response.indexConsorcioEducativo.toNumber(),
      addressConsorcioEducativo: response.addressConsorcioEducativo,
      nameConsorcioEducativo: response.nameConsorcioEducativo,
      directionConsorcioEducativo: response.directionConsorcioEducativo,
    }
    assert.deepEqual(real_response, responseContract, "The values are not the same");
  });

  it("...should set a new param in the contract", async () => {
    await ConsorcioAcademico.set(
      '0',
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      'Universidad Tecnica Particular de Cuenca',
      'Cuenca'
    );

    const response = await ConsorcioAcademico.get.call();

    const real_response = {
      indexConsorcioEducativo: 0,
      addressConsorcioEducativo: '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      nameConsorcioEducativo: 'Universidad Tecnica Particular de Cuenca',
      directionConsorcioEducativo: 'Cuenca',
    }

    const responseContract = {
      indexConsorcioEducativo: response.indexConsorcioEducativo.toNumber(),
      addressConsorcioEducativo: response.addressConsorcioEducativo,
      nameConsorcioEducativo: response.nameConsorcioEducativo,
      directionConsorcioEducativo: response.directionConsorcioEducativo,
    }
    assert.deepEqual(real_response, responseContract, "The values are not the same");
  });

  it( "... should get a list of competences by address account", async () => {
    const contractAddresses = [
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      '0x6D534167805B7b93046e856329E72db26ead2558'
    ];

    contractAddresses.forEach(async(contractAddress) => {
      await ConsorcioAcademico.setRegisterCompetenciaAcademica(
        contractAddress,
        accounts[0]
      )
    });

    const competences = await ConsorcioAcademico.getRegisterCompetenciaAcademicaByOwner(
      accounts[0]
    )

    const registersAcademicas = await Promise.all(competences.map(async(competence) => {
      const response = await ConsorcioAcademico.getRegisterCompetenciaAcademica.call(competence.toNumber());
      const {
        _,
        addressRegisterCompetencia
      } = response;

      return addressRegisterCompetencia;
    }));

    assert.deepEqual(registersAcademicas, contractAddresses);
  })

  it("...should set a register and get  ", async () => {
    await ConsorcioAcademico.setRegisterCompetenciaAcademica(
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      accounts[0]
    )

    const real_response = {
      indexRegisterCompetencia: 0,
      addressRegisterCompetencia: '0x554e3DEF5789Fb733E1173369f48F3F79901384C'
    }

    const response = await ConsorcioAcademico.getRegisterCompetenciaAcademica.call(0);
    const {
      indexRegisterCompetencia,
      addressRegisterCompetencia
    } = response;

    const responseContract = {
      indexRegisterCompetencia: indexRegisterCompetencia.toNumber(),
      addressRegisterCompetencia
    }
    assert.deepEqual(real_response, responseContract, "The values are not the same");
  })

  it("...should set a new competence and get all ", async () => {
    await ConsorcioAcademico.setAllowedCompetence('0');
    await ConsorcioAcademico.setAllowedCompetence('3');
    await ConsorcioAcademico.setAllowedCompetence('5');

    const real_response = [0, 3, 5]

    const response = await ConsorcioAcademico.getAllAllowedCompetence.call();
    const responseContract = response.map(res => res.toNumber());

    assert.deepEqual(real_response, responseContract, "The values are not the same");
  })
});
