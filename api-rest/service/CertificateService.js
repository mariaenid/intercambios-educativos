'use strict';


/**
 * Returns all certificates
 * Returns all certificates
 *
 * returns Certificate
 **/
exports.certificateGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "petId" : 6,
  "quantity" : 1,
  "id" : 0,
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : false,
  "status" : "placed"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find a certificate 
 * Returns a single certificate
 *
 * certificateId Long ID of pet to return
 * returns Certificate
 **/
exports.certificatecertificateIdGET = function(certificateId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "petId" : 6,
  "quantity" : 1,
  "id" : 0,
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : false,
  "status" : "placed"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Place an order for a pet
 * 
 *
 * body Certificate order placed for purchasing the pet
 * returns Certificate
 **/
exports.placeOrder = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "petId" : 6,
  "quantity" : 1,
  "id" : 0,
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : false,
  "status" : "placed"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

