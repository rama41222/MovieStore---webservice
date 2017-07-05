'use strict';

angular.module('angularJwtnodeAuthApp').config(function($urlRouterProvider,$stateProvider, $httpProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('main',{
		url:'/',
		templateUrl: '/views/main.html'
	})

	.state('register',{
		url:'/register',
		templateUrl: '/views/register.html',
		controller : 'RegisterCtrl'
	})

	.state('login',{
		url:'/login',
		templateUrl: '/views/login.html',
		controller : 'LoginCtrl'
	})
	.state('profile',{
		url:'/profile',
		templateUrl: '/views/profile.html',
		controller : 'ProfileCtrl'
	})
	.state('movies',{
		url:'/movies',
		templateUrl: '/views/movies.html',
		controller : 'MoviesCtrl'
	})
	.state('payments',{
		url:'/payments/',
		templateUrl: '/views/payments.html',
		controller : 'PaymentsCtrl'
	})
	.state('movie',{
		url:'/movie/:id',
		templateUrl: '/views/movie.html',
		controller : 'MovieCtrl'
	})
	.state('logout',{
		url:'/logout',
		controller : 'LogoutCtrl'
	});
}) 