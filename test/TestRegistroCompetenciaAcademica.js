const RegistroCompetenciaAcademicaArtifacts = artifacts.require("RegistroCompetenciaAcademica");
/*
  The uint values in a contract can't be same equals to another numbers setter
  Need evalue with valueOf() or toNumber() because has a new type value
  calle big number
*/

contract("RegistroCompetenciaAcademica", accounts => {
  let RegistroCompetenciaAcademica;

  beforeEach(async () => {
    RegistroCompetenciaAcademica = await RegistroCompetenciaAcademicaArtifacts.new();
  });

  it("...should  get all competences", async () => {

    await RegistroCompetenciaAcademica.set(
      'Ingenieria en Sistemas',
      0);
    await RegistroCompetenciaAcademica.set(
      'Ingenieria en Electronica',
      0);

    const real_response = [
      {indexCompetenciaAcademica: 0, nameCompetenciaAcademica: 'Ingenieria en Sistemas', indexTipoCompetenciaAcademica: 0},
      {indexCompetenciaAcademica: 1, nameCompetenciaAcademica: 'Ingenieria en Electronica', indexTipoCompetenciaAcademica: 0}
    ]
    const allCompetences = await RegistroCompetenciaAcademica.getAll.call();

    const competences  = new Array(allCompetences.toNumber());
      let responseContract = [];
      for(let i = 0; i < competences.length; i++ )  {
        const response =  await RegistroCompetenciaAcademica.get.call(i);
        const { indexCompetenciaAcademica, nameCompetenciaAcademica, indexTipoCompetenciaAcademica } = response;

        responseContract.push({
          indexCompetenciaAcademica: indexCompetenciaAcademica.toNumber(),
          nameCompetenciaAcademica,
          indexTipoCompetenciaAcademica: indexTipoCompetenciaAcademica.toNumber()
        });
      };

    assert.deepEqual(responseContract, real_response, 'Not registered');
  });

});
