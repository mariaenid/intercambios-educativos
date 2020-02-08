'use strict';


/**
 * Get academic competences
 * 
 *
 * body Competences Get comptences
 * returns Competences
 **/
exports.competenceGET = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "password" : "password",
  "userStatus" : 6,
  "phone" : "phone",
  "id" : 0,
  "email" : "email",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add competences
 * add competences to the semantic server
 *
 * body Competences Add competences
 * returns Competences
 **/
exports.competencePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "password" : "password",
  "userStatus" : 6,
  "phone" : "phone",
  "id" : 0,
  "email" : "email",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find a competence 
 * Returns a single competence
 *
 * competenceId Long ID of competence to return
 * returns Competences
 **/
exports.competencescompetenceIdGET = function(competenceId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "password" : "password",
  "userStatus" : 6,
  "phone" : "phone",
  "id" : 0,
  "email" : "email",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

