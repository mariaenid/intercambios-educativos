const AcademicCertificateArtifacts = artifacts.require("AcademicCertificate");
/*
  The uint values in a contract can't be same equals to another numbers setter
  Need evalue with valueOf() or toNumber() because has a new type value
  calle big number
*/

contract("CompetenciaAcademica", accounts => {
  let CompetenciaAcademica;

  beforeEach(async () => {
    AcademicCertificate = await AcademicCertificateArtifacts.new(
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      'Universidad Tecnica Particular de Loja',
      '0',
      'Ingeniera en Sistemas',
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      'Maria Pineda',
      '1105148595'
      );
  });

  it("...should  get the params of the contract", async () => {
    const response = await AcademicCertificate.get.call();

    const real_response = {
      contractAddressConsortiumAcademic: '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      nameConsortiumAcademic: 'Universidad Tecnica Particular de Loja',
      indexCompetence: 0,
      nameCompetence: 'Ingeniera en Sistemas',
      addressOwner: '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      nameOwner: 'Maria Pineda',
      identificationOwner: '1105148595'
    }

    const responseContract = {
      contractAddressConsortiumAcademic: response.contractAddressConsortiumAcademic,
      nameConsortiumAcademic: response.nameConsortiumAcademic,
      indexCompetence: response.indexCompetence.toNumber(),
      nameCompetence: response.nameCompetence,
      addressOwner: response.addressOwner,
      nameOwner: response.nameOwner,
      identificationOwner: response.identificationOwner
    }
    assert.deepEqual(real_response, responseContract, "The values are not the same");
  });

  it("...should set a new param in the contract", async () => {
    await AcademicCertificate.set(
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      'Universidad Tecnica Particular de Loja',
      '0',
      'Ingeniera en Sistemas',
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      'Maria Rivas',
      '1105148595'
    );

    const response = await AcademicCertificate.get.call();

    const real_response = {
      contractAddressConsortiumAcademic: '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      nameConsortiumAcademic: 'Universidad Tecnica Particular de Loja',
      indexCompetence: 0,
      nameCompetence: 'Ingeniera en Sistemas',
      addressOwner: '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      nameOwner: 'Maria Rivas',
      identificationOwner: '1105148595'
    }

    const responseContract = {
      contractAddressConsortiumAcademic: response.contractAddressConsortiumAcademic,
      nameConsortiumAcademic: response.nameConsortiumAcademic,
      indexCompetence: response.indexCompetence.toNumber(),
      nameCompetence: response.nameCompetence,
      addressOwner: response.addressOwner,
      nameOwner: response.nameOwner,
      identificationOwner: response.identificationOwner
    }
    assert.deepEqual(real_response, responseContract, "The values are not the same");
  });
});
