'use strict';


/**
 * Add new consortium
 * 
 *
 * body Consortium Pet object that needs to be added to the store
 * returns Consortium
 **/
exports.addPet = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "doggie",
  "id" : 0,
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get consortium
 * All about consortium
 *
 * returns Consortium
 **/
exports.consortiumGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "doggie",
  "id" : 0,
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find a consortium 
 * Returns a single consortium
 *
 * competenceId Long ID of consortium to return
 * returns Consortium
 **/
exports.consortiumconsortiumIdGET = function(competenceId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "doggie",
  "id" : 0,
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

