const RegistroConsorcioAcademicoArtifacts = artifacts.require("RegistroConsorcioAcademico");
/*
  The uint values in a contract can't be same equals to another numbers setter
  Need evalue with valueOf() or toNumber() because has a new type value
  calle big number
*/

contract("RegistroConsorcioAcademico", accounts => {
  let RegistroConsorcioAcademico;

  beforeEach(async () => {
    RegistroConsorcioAcademico = await RegistroConsorcioAcademicoArtifacts.new(accounts[0], accounts[1]);
  });

  it("...should  get all competences", async () => {

    // await RegistroConsorcioAcademico.set('0x554e3DEF5789Fb733E1173369f48F3F79901384C');
    // await RegistroConsorcioAcademico.set('0x554e3DEF5789Fb733E1173369f48F3F79901384C');

    const real_response = [
      {indexConsorcio: 0, addressConsorcio: accounts[0]},
      {indexConsorcio: 1, addressConsorcio: accounts[1]}
    ]
    const allCompetences = await RegistroConsorcioAcademico.getAll.call();

    const competences  = new Array(allCompetences.toNumber());
      let responseContract = [];
      for(let i = 0; i < competences.length; i++ )  {
        const response =  await RegistroConsorcioAcademico.get.call(i);
        const { indexConsorcio, addressConsorcio } = response;

        responseContract.push({
            indexConsorcio: indexConsorcio.toNumber(),
            addressConsorcio,
        });
      };

    assert.deepEqual(responseContract, real_response, 'Not registered');
  });

});
