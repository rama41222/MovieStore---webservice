'use strict';

/**
 * @ngdoc function
 * @name angularJwtnodeAuthApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the angularJwtnodeAuthApp
 */
angular.module('angularJwtnodeAuthApp').controller('LogoutCtrl', function (auth, $state) {
    auth.removeToken();
    $state.go('main');
  });
