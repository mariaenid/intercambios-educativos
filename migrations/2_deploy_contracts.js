const AcademicConsortium = artifacts.require("AcademicConsortium");
const CompetenciaAcademica = artifacts.require("CompetenciaAcademica");
const RegistroCompetenciaAcademica = artifacts.require("RegistroCompetenciaAcademica");

module.exports = function(deployer, network, accounts) {
  let c1, c2;
  deployer.deploy(AcademicConsortium,
    accounts[0],
    'Universidad Tecnica Particular de Loja',
    '1231313',
    'mepineda@gmail.com',
    'Ecuador',
    'Loja',
    0,
    {from: accounts[0]}
    ).then(res => {
      c1 = res.address
      // deploy otro consorcio
      if(c1) {
        deployer.deploy(AcademicConsortium,
          '0x554e3DEF5789Fb733E1173369f48F3F79901384C',
          'Universidad Tecnica Particular de Loja',
          '1231313',
          'mepineda@gmail.com',
          'Ecuador',
          'Loja',
          0
          ).then(r => {
          c2 = r.address;
          console.log('Deployando consorcios ...');
          // deployer.deploy(RegistroConsorcioAcademico, c1, c2);
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
