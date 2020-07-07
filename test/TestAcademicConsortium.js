const AcademicConsortiumArtifacts = artifacts.require("AcademicConsortium");
/*
  The uint values in a contract can't be same equals to another numbers setter
  Need evalue with valueOf() or toNumber() because has a new type value
  calle big number
*/

/*
        address ad,
        string memory name,
        string memory phone,
        string memory email,
        string memory country,
        string memory city,
        CONSORTIUM_TYPE consortiumType
*/

contract("...academicConsortium", accounts => {
  let AcademicConsortium;

  beforeEach(async () => {
    AcademicConsortium = await AcademicConsortiumArtifacts.deployed(
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      'Universidad Tecnica Particular de Loja',
      '1231313',
      'mepineda@gmail.com',
      'Ecuador',
      'Loja',
      0
      );
  });


  it("...should  get the params of the contract", async () => {
    const response = await AcademicConsortium.get.call();
    const real_response = {
      addressConsortium: '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      name: 'Universidad Tecnica Particular de Loja',
      phone: '1231313',
      email: 'mepineda@gmail.com',
      country: 'Ecuador',
      city: 'Loja',
      consortiumType: 0
    }

    const responseContract = {
      addressConsortium: response.addressConsortium,
      name: response.name,
      phone: response.phone,
      country: response.country,
      email: response.email,
      city: response.city,
      consortiumType: response.consortiumType.toNumber()
    }
    assert.deepEqual(real_response, responseContract, "The values are not the same");
  });

  it("...should set a new param in the contract", async () => {
    await AcademicConsortium.set(
      '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      'Universidad Tecnica Particular de Loja',
      '1231313',
      'mepineda@gmail.com',
      'Ecuador',
      'Cuenca',
      0
    );

    const response = await AcademicConsortium.get.call();

    const real_response = {
      addressConsortium: '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
      name: 'Universidad Tecnica Particular de Loja',
      phone: '1231313',
      email: 'mepineda@gmail.com',
      country: 'Ecuador',
      city: 'Cuenca',
      consortiumType: 0
    }

    const responseContract = {
      addressConsortium: response.addressConsortium,
      name: response.name,
      phone: response.phone,
      email: response.email,
      country: response.country,
      city: response.city,
      consortiumType: response.consortiumType.toNumber()
    }
    assert.deepEqual(real_response, responseContract, "The values are not the same");
  });

});
