const RegistroCompetenciaAcademica = artifacts.require("RegistroCompetenciaAcademica");

module.exports = async (deployer, network, accounts) => {
  deployer.deploy(RegistroCompetenciaAcademica);
};
