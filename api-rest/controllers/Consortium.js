'use strict';

var utils = require('../utils/writer.js');
var Consortium = require('../service/ConsortiumService');

module.exports.addPet = function addPet (req, res, next) {
  var body = req.swagger.params['body'].value;
  Consortium.addPet(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consortiumGET = function consortiumGET (req, res, next) {
  Consortium.consortiumGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.consortiumconsortiumIdGET = function consortiumconsortiumIdGET (req, res, next) {
  var competenceId = req.swagger.params['competenceId'].value;
  Consortium.consortiumconsortiumIdGET(competenceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
