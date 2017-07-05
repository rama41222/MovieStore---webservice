'use strict';

/**
 * @ngdoc directive
 * @name angularJwtnodeAuthApp.directive:confirmEquals
 * @description
 * # confirmEquals
 */
angular.module('angularJwtnodeAuthApp')
  .directive('confirmEquals', function () {
    return {
      require:'ngModel',
      link : function(scope,element,attrs,ngModelCtrl){

      	function confirmEquals(value){
      		var valid = (value === scope.$eval(attrs.confirmEquals));
      		ngModelCtrl.$setValidity('equal', valid);
      		return valid ? value : undefined;
      	}

      	ngModelCtrl.$parsers.push(confirmEquals);
      	ngModelCtrl.$formatters.push(confirmEquals);

      	scope.$watch(attrs,confirmEquals,function(){
      		ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
      	})

      }
    };
  });
