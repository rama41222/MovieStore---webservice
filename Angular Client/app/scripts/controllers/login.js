'use strict';

angular.module('angularJwtnodeAuthApp').controller('LoginCtrl', function ( authentication,$scope, alert) {
  	$scope.submit= function(){
		

		authentication.login($scope.email, $scope.password).then(function(res){
			alert('success', 'Welcome! Thanks for coming back ','Login Success');
			
		},function(res){
			alert('warning', 'Oops! ',res.data.msg);
		});
	
	}
  });
