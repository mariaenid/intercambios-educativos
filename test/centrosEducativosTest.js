const CentrosEducativosContract = artifacts.require("ComplexStorage");

contract("ComplexStorage", accounts => {
  it("...should  save the contract to centros Educativos Test", async () => {
    const centrosEducativosContract = await CentrosEducativosContract.new(1, accounts[0], "UTPL");

    // Set value of 89
    //await centrosEducativosContract.set(89, { from: accounts[0] });

    // Get stored value
    //const storedData = await simpleStorageInstance.storedData.call();

    //assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});
