const SimpleStorage = artifacts.require("SimpleStorage");
const TutorialToken = artifacts.require("TutorialToken");
const CompetenciaAcademica = artifacts.require("CompetenciaAcademica");
const ConsorcioAcademico = artifacts.require("ConsorcioAcademico");
const RegistroCompetenciaAcademica = artifacts.require("RegistroCompetenciaAcademica");
const RegistroConsorcioAcademico = artifacts.require("RegistroConsorcioAcademico");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(TutorialToken);
  deployer.deploy(CompetenciaAcademica,
                  0,
                  '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
                  'Universidad Tecnica Particular de Loja',
                  0,
                  'Ingeniera en Sistemas',
                  '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
                  'Maria Pineda');
  deployer.deploy(ConsorcioAcademico,
    '0',
    '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
    'Universidad Tecnica Particular de Loja',
    'Loja');
    deployer.deploy(RegistroCompetenciaAcademica);
    deployer.deploy(RegistroConsorcioAcademico);
};