const SimpleStorage = artifacts.require("SimpleStorage");
const TutorialToken = artifacts.require("TutorialToken");
const CompetenciasAcademicas = artifacts.require("CompetenciasAcademicas");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(TutorialToken);
  deployer.deploy(CompetenciasAcademicas, 0,'0x554e3DEF5789Fb733E1173369f48F3F79901384C', 'Ciencias Computacion');
};