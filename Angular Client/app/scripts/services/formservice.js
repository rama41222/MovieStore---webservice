'use strict';

angular.module('angularJwtnodeAuthApp').service('formservice', function () {
   var formdata = null;

  var addForm = function(newObj) {
      formdata = newObj;
  };

  var getForm = function(){
      return formdata;
  };

  return {
    addForm: addForm,
    getForm: getForm
  };

  });
