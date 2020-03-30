const AcademicConsortium = artifacts.require("AcademicConsortium");
const AcademicCertificate = artifacts.require("AcademicCertificate");
const RegistroCompetenciaAcademica = artifacts.require("RegistroCompetenciaAcademica");

module.exports = async (deployer, network, accounts) => {
  let c1;

  const consortiums = [
    {
      addressConsortium: accounts[0],
      name: "Universidad Tecnica Particular de Loja",
      phone: "1231313",
      email: "mepineda@gmail.com",
      country: "Ecuador",
      city: "Loja",
      consortiumType: 0
    },
    {
      addressConsortium: accounts[0],
      name: "Universidad Tecnica de Ambato",
      phone: "1231313",
      email: "mepineda@gmail.com",
      country: "Ecuador",
      city: "Ambato",
      consortiumType: 0
    }

  ];

  const certificates = [
    {
      contractAddressConsortiumAcademic:
        "0x554e3DEF5789Fb733E1173369f48F3F79901384C",
      nameConsortiumAcademic: "Universidad Tecnica Particular de Loja",
      indexCompetence: 0,
      nameCompetence: "Ingeniera en Sistemas",
      addressOwner: accounts[1],
      nameOwner: "Maria Rivas",
      identificationOwner: "1105148595"
    }
  ];

  for(let i = 0; i < consortiums.length; i++) {
    const consortium = consortiums[i];

    deployer.deploy(AcademicConsortium,
      consortium.addressConsortium,
      consortium.name,
      consortium.phone,
      consortium.email,
      consortium.country,
      consortium.city,
      consortium.consortiumType,
      {from: accounts[0]}
      ).then(async(res) => {
        c1 = res.address || ''
        // deploy otro consorcio
        if(c1) {
          const selectCertificates = certificates.filter(certificate => certificate.nameConsortiumAcademic === consortium.name);
          for( let j = 0; j< selectCertificates.length; j++) {
            const certificate = selectCertificates[j]
            await deployer.deploy(AcademicCertificate,
              c1, // contract Address
              certificate.nameConsortiumAcademic,
              certificate.indexCompetence,
              certificate.nameCompetence,
              certificate.addressOwner,
              certificate.nameOwner,
              certificate.identificationOwner
            );
          };
        };
      })
  };
  deployer.deploy(RegistroCompetenciaAcademica);
};
