const SimpleStorage = artifacts.require("SimpleStorage");
const TutorialToken = artifacts.require("TutorialToken");
const CompetenciaAcademica = artifacts.require("CompetenciaAcademica");
const ConsorcioAcademico = artifacts.require("ConsorcioAcademico");
const RegistroCompetenciaAcademica = artifacts.require("RegistroCompetenciaAcademica");
const RegistroConsorcioAcademico = artifacts.require("RegistroConsorcioAcademico");

module.exports = function(deployer, network, accounts) {
  let c1, c2;
  deployer.deploy(SimpleStorage);
  deployer.deploy(TutorialToken);
  deployer.deploy(ConsorcioAcademico,
    0,
    accounts[0],
    'Universidad Tecnica Particular de Loja',
    'Loja').then(res => {
      c1 = res.address
      // deploy otro consorcio
      if(c1) {
        deployer.deploy(ConsorcioAcademico,
        0,
        accounts[1],
        'Universidad Tecnica Particular de Ambato',
        'Ambato',
        ).then(r => {
          c2 = r.address;
          deployer.deploy(RegistroConsorcioAcademico, c1, c2);
        });
      }
    });
  deployer.deploy(RegistroCompetenciaAcademica);
  deployer.deploy(CompetenciaAcademica,
    0,
    '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
    'Universidad Tecnica Particular de Loja',
    0,
    'Ingeniera en Sistemas',
    '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
    'Mercedes Source');
  deployer.deploy(CompetenciaAcademica,
                  0,
                  '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
                  'Universidad Tecnica Particular de Loja',
                  0,
                  'Ingeniera en Sistemas',
                  '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
                  'Maria Pineda');
};
