pragma solidity >=0.4.21 <0.6.0;

contract RegistroConsorcioAcademico {
    struct consorcioConstructor {
        uint indexConsorcio;
        address addressConsorcio;
    }
    mapping(uint => consorcioConstructor) registerConsorcioList;
    uint countList = 0;

    constructor (address c1, address c2) public {
        registerConsorcioList[countList].indexConsorcio = countList;
        registerConsorcioList[countList].addressConsorcio = c1;
        countList++;

        registerConsorcioList[countList].indexConsorcio = countList;
        registerConsorcioList[countList].addressConsorcio = c2;
        countList++;
    }

    function set (
        address addressConsorcio
    ) public {
        registerConsorcioList[countList].indexConsorcio = countList;
        registerConsorcioList[countList].addressConsorcio = addressConsorcio;

        countList++;
    }

    function get (uint index) public view returns (
        uint indexConsorcio,
        address addressConsorcio
    ) {
        indexConsorcio = registerConsorcioList[index]. indexConsorcio;
        addressConsorcio = registerConsorcioList[index]. addressConsorcio;
    }

    function getAll () public view returns (uint) {
        return countList;
    }
}