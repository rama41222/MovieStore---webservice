'use strict';

angular.module('angularJwtnodeAuthApp').controller('MoviesCtrl', function ($scope, $http,alert) {
     
	$http.get('http://localhost:8080/movies').then(function(res){
		$scope.movies = res.data;
		console.log(res);
	},function(err){
		alert('Error', 'Oops! ',err.data.msg);
	});

});
