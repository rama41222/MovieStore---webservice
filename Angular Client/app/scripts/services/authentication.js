'use strict';

angular.module('angularJwtnodeAuthApp').service('authentication', function ($state,$http,
auth) {
   

	this.login = function(email,password){
		return $http.post('http://localhost:3000/users/authenticate', {
			email: email,
			password : password
		}).then(authSuccessful);
	};

	this.register = function(email, password){
		return $http.post('http://localhost:3000/users/',{
			email: email,
			password : password
		}).then(authSuccessful);
	};

	function authSuccessful(res){
		console.log(res);
		auth.setToken(res.data.token);
		auth.setID(res.data.user.id);
		auth.setEmail(res.data.user.email);
		$state.go('main');
	}
  });
