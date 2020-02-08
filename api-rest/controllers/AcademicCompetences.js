'use strict';

var utils = require('../utils/writer.js');
var AcademicCompetences = require('../service/AcademicCompetencesService');

module.exports.competenceGET = function competenceGET (req, res, next) {
  var body = req.swagger.params['body'].value;
  AcademicCompetences.competenceGET(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.competencePOST = function competencePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  AcademicCompetences.competencePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.competencescompetenceIdGET = function competencescompetenceIdGET (req, res, next) {
  var competenceId = req.swagger.params['competenceId'].value;
  AcademicCompetences.competencescompetenceIdGET(competenceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
