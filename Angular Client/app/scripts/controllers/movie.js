'use strict';

angular.module('angularJwtnodeAuthApp').controller('MovieCtrl', function (formservice,$scope, $http,alert,$stateParams) {

	$scope.formdata = [];

	$http.get('http://localhost:8080/movies/'+ $stateParams.id).then(function(res){
		$scope.formdata.movie = res.data;
		 

		console.log(res);
	},function(err){
		alert('Error', 'Oops! ',err.data.msg);
	});

	$http.get('http://localhost:8081/snacks/').then(function(res){
		$scope.snacks = res.data;
		console.log(res);
	},function(err){
		alert('Error', 'Oops! ',err.data.msg);
	});

	 

	$http.get('http://localhost:8082/restaurants/').then(function(res){
		$scope.restaurants = res.data;
		console.log(res);
	},function(err){
		alert('Error', 'Oops! ',err.data.msg);
	});
 
	var customObj = {
		tickets:{
			mID: "das",
			noOfTickets : $scope.qty
		}
	}
	
	$scope.formdata.grandtotal = 0;

	$scope.gt = function(){
		var total1 = 0;
		var total2 = 0;
		var total3 = 0;
		var grandtotal = 0;


		if($scope.formdata.suite){
			total1 = $scope.formdata.suite.price;
		}
		if($scope.formdata.snack  && $scope.formdata.sqty){
			total2 = $scope.formdata.sqty * $scope.formdata.snack.price;
		}
		if($scope.formdata.movie && $scope.formdata.qty){
			total3 = $scope.formdata.movie.price * $scope.formdata.qty;
		}

		grandtotal = total1 + total2 + total3;
		$scope.grandtotal  = grandtotal;

		return "RS "+grandtotal+ " /=";
	};

 	$scope.submit = function(){

 		if($scope.formdata.snack &&  !$scope.formdata.sqty ){
 			alert('danger', 'Oops! ',"Please Select a Snack Quantity");
 			return
 		}

 		if($scope.formdata.restaurant &&  !$scope.formdata.suite ){
 			alert('danger', 'Oops! ',"Please Select a suite to stay");
 			return
 		}

 		$scope.actionURL = "/#!/payments/";
 		$scope.formdata.grandtotal = $scope.grandtotal;
 		formservice.addForm($scope.formdata);
 		location.href = $scope.actionURL;
 	}


	/*


	},tickets:[{
		mID :{type: String},
		noOfTickets:{type:Number},
		totalCost:{type:Number}
	}],snacks:[{
		sID : {type: String},
		quantity:{type:Number},
		totalCost:{type:Number}
	}]
	,reservations:[{
		rID : {type :String},
		quantity:{type:Number},
		totalCost:{type:Number}
	}]

	*/
	

	});
