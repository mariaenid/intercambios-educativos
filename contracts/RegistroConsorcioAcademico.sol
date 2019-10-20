pragma solidity >=0.4.21 <0.6.0;

contract RegistroConsorcioAcademico {
    struct consorcioConstructor {
        uint indexConsorcio;
        address addressConsorcio;
    }
    mapping(uint => consorcioConstructor) registerConsorcioList;
    uint countList = 0;

    constructor () public {

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