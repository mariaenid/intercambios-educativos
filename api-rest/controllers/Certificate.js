'use strict';

var utils = require('../utils/writer.js');
var Certificate = require('../service/CertificateService');

module.exports.certificateGET = function certificateGET (req, res, next) {
  Certificate.certificateGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.certificatecertificateIdGET = function certificatecertificateIdGET (req, res, next) {
  var certificateId = req.swagger.params['certificateId'].value;
  Certificate.certificatecertificateIdGET(certificateId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.placeOrder = function placeOrder (req, res, next) {
  var body = req.swagger.params['body'].value;
  Certificate.placeOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
