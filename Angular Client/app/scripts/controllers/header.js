'use strict';

/**
 * @ngdoc function
 * @name angularJwtnodeAuthApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the angularJwtnodeAuthApp
 */
angular.module('angularJwtnodeAuthApp')
  .controller('HeaderCtrl', function ($scope, auth) {
    $scope.isAuthenticated = auth.isAuthenticated;
  });
