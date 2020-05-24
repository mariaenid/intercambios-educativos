pragma solidity >= 0.4.21 < 0.6.1;
// Competencias academicas

contract AcademicCertificate {
    // Academic Certificate

    address owner;
    // solo el administrador de blockchain
    modifier onlyOwner {
        require(
            msg.sender == owner,
            "Only owner can call this function."
        );
        _;
    }

    enum CONTRACT_TYPE { Certificate, Consortium }

    struct certificate {
        address addressInstitute;
        string nameConsortiumAcademic;
        string nameCompetence;
        address addressOwner;
        string nameOwner;
        string identificationOwner;
        string email;
        string country;
    }

    certificate certificateOwn;

    event academicCertificate(
        CONTRACT_TYPE contractType,
        address addressOwner,
        string nameConsortiumAcademic,
        address contractConsortium,
        string nameOwner,
        string nameCompetence);

    constructor(
        address addressInstitute,
        string memory nameConsortiumAcademic,
        string memory nameCompetence,
        address addressOwner,
        string memory nameOwner,
        string memory identificationOwner,
        string memory email,
        string memory country
        ) public {
        certificateOwn.addressInstitute = addressInstitute;
        certificateOwn.nameConsortiumAcademic = nameConsortiumAcademic;
        certificateOwn.nameCompetence = nameCompetence;
        certificateOwn.addressOwner = addressOwner;
        certificateOwn.nameOwner = nameOwner;
        certificateOwn.identificationOwner = identificationOwner;
        certificateOwn.email = email;
        certificateOwn.country = country;

        emit academicCertificate(CONTRACT_TYPE.Certificate,
            certificateOwn.addressOwner,
            certificateOwn.nameConsortiumAcademic,
            certificateOwn.addressInstitute,
            certificateOwn.nameOwner,
            certificateOwn.nameCompetence);
    }

    // solo deberia poder realizarlo el owner de la aplicacion
    function set (
        address addressInstitute,
        string memory nameConsortiumAcademic,
        string memory nameCompetence,
        address addressOwner,
        string memory nameOwner,
        string memory identificationOwner
        ) public {
        certificateOwn.addressInstitute = addressInstitute;
        certificateOwn.nameConsortiumAcademic = nameConsortiumAcademic;
        certificateOwn.nameCompetence = nameCompetence;
        certificateOwn.addressOwner = addressOwner;
        certificateOwn.nameOwner = nameOwner;
        certificateOwn.identificationOwner = identificationOwner;

        emit academicCertificate(CONTRACT_TYPE.Certificate,
            certificateOwn.addressOwner,
            certificateOwn.nameConsortiumAcademic,
            certificateOwn.addressInstitute,
            certificateOwn.nameOwner,
            certificateOwn.nameCompetence);
    }
    //Obtener compentencia
    function get() public view returns (
        address addressInstitute,
        string memory nameConsortiumAcademic,
        string memory nameCompetence,
        address addressOwner,
        string memory nameOwner,
        string memory identificationOwner,
        string memory email,
        string memory country
    ) {
        addressInstitute = certificateOwn.addressInstitute;
        nameConsortiumAcademic = certificateOwn.nameConsortiumAcademic;
        nameCompetence = certificateOwn.nameCompetence;
        addressOwner = certificateOwn.addressOwner;
        nameOwner = certificateOwn.nameOwner;
        identificationOwner = certificateOwn.identificationOwner;
        email = certificateOwn.email;
        country = certificateOwn.country;
    }
}
