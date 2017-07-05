'use strict';

angular.module('angularJwtnodeAuthApp').controller('ProfileCtrl', function ($scope, $http,alert,auth) {
	console.log('http://localhost:3000/users/'+auth.getID());
	$http({
          method  : 'GET',
          url     : 'http://localhost:3000/users/'+auth.getID(),
          headers : {'Content-Type': 'application/json','Authorization': auth.getToken()} 

    }).then(function(res){
		$scope.tickets = res.data.user[0].tickets;
		console.log(res.data.user[0].tickets);
	},function(err){
		alert('Error', 'Oops! ',err.data.msg);
	});

  });
