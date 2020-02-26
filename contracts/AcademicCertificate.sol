pragma solidity >=0.4.21 <0.6.0;
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
        address contractAddressConsortiumAcademic;
        string nameConsortiumAcademic;
        uint indexCompetence; // es formal o curso
        string nameCompetence;
        address addressOwner;
        string nameOwner;
        string identificationOwner;
    }

    certificate certificateOwn;

    event academicCertificate(CONTRACT_TYPE contractType, address addressOwner, string nameConsortiumAcademic);

    constructor(
        address contractAddressConsortiumAcademic,
        string memory nameConsortiumAcademic,
        uint indexCompetence, // es formal o curso
        string memory nameCompetence,
        address addressOwner,
        string memory nameOwner,
        string memory identificationOwner
        ) public {
        certificateOwn.contractAddressConsortiumAcademic = contractAddressConsortiumAcademic;
        certificateOwn.nameConsortiumAcademic = nameConsortiumAcademic;
        certificateOwn.indexCompetence = indexCompetence;
        certificateOwn.nameCompetence = nameCompetence;
        certificateOwn.addressOwner = addressOwner;
        certificateOwn.nameOwner = nameOwner;
        certificateOwn.identificationOwner = identificationOwner;

        emit academicCertificate(CONTRACT_TYPE.Certificate, certificateOwn.addressOwner, certificateOwn.nameConsortiumAcademic);
    }

    // solo deberia poder realizarlo el owner de la aplicacion
    function set (
        address contractAddressConsortiumAcademic,
        string memory nameConsortiumAcademic,
        uint indexCompetence, // es formal o curso
        string memory nameCompetence,
        address addressOwner,
        string memory nameOwner,
        string memory identificationOwner
        ) public {
        certificateOwn.contractAddressConsortiumAcademic = contractAddressConsortiumAcademic;
        certificateOwn.nameConsortiumAcademic = nameConsortiumAcademic;
        certificateOwn.indexCompetence = indexCompetence;
        certificateOwn.nameCompetence = nameCompetence;
        certificateOwn.addressOwner = addressOwner;
        certificateOwn.nameOwner = nameOwner;
        certificateOwn.identificationOwner = identificationOwner;

        emit academicCertificate(CONTRACT_TYPE.Certificate, certificateOwn.addressOwner, certificateOwn.nameConsortiumAcademic);
    }

    //Obtener compentencia
    function get() public view returns (
        address contractAddressConsortiumAcademic,
        string memory nameConsortiumAcademic,
        uint indexCompetence, // es formal o curso
        string memory nameCompetence,
        address addressOwner,
        string memory nameOwner,
        string memory identificationOwner
    ) {
        contractAddressConsortiumAcademic = certificateOwn.contractAddressConsortiumAcademic;
        nameConsortiumAcademic = certificateOwn.nameConsortiumAcademic;
        indexCompetence = certificateOwn.indexCompetence;
        nameCompetence = certificateOwn.nameCompetence;
        addressOwner = certificateOwn.addressOwner;
        nameOwner = certificateOwn.nameOwner;
        identificationOwner = certificateOwn.identificationOwner;

    }
}


