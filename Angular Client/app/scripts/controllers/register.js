'use strict';


angular.module('angularJwtnodeAuthApp').controller('RegisterCtrl', function (authentication,$scope, alert) {
 
	$scope.submit= function(){
		 
		authentication.register($scope.email, $scope.password).then(function(res){
			alert('success', 'Done! ','Registration Success, ');
		},function(res){
			alert('warning', 'Oops! ',res.data.msg);
		});
	
	}

 });
