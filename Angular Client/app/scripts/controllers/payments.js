'use strict';

angular.module('angularJwtnodeAuthApp').controller('PaymentsCtrl', function ($state,$scope, auth,$http,alert,formservice) {
    $scope.formdata = formservice.getForm();
    console.log($scope.formdata)
    if($scope.formdata == null){
    	return $state.go('movies');
    }

    $scope.paymethod = function(){
    	if($scope.formdata.paymentsmethod == "Sampath"){
   			$scope.formdata.sam=true;
   		}
   		if($scope.formdata.paymentsmethod == "Dialog"){
   			$scope.formdata.sam=false;
   		}

    }

   
   	$scope.pay = function(){
   	
   	console.log($scope.formdata.paymentsmethod);
   	
   	if($scope.formdata.paymentsmethod == "Sampath"){
   		$scope.formdata.sam=true;

   		$http({
          method  : 'POST',
          url     : 'http://localhost:3001/transaction',
          data    : {"ccno" : $scope.formdata.ccno,"cvv":$scope.formdata.cvv,"amt":$scope.formdata.grandtotal,"email":$scope.formdata.email}, //forms user object
          headers : {'Content-Type': 'application/json'} 
         }).then(function(res){

    		alert('success', 'Email! ',res.data.msg);
    		
    	
		var tickets;

		if($scope.formdata.snack  && $scope.formdata.restaurant){
			    tickets = {
    			mmID:$scope.formdata.movie.id,
    			mname:$scope.formdata.movie.name,
    			mprice:$scope.formdata.movie.price,
    			mtime:$scope.formdata.time,
    			mnoOfTickets:$scope.formdata.qty,
    			mtotal:$scope.formdata.movie.price*$scope.formdata.qty,
    			ssID:$scope.formdata.snack.id,
    			sname:$scope.formdata.snack.name,
    			sprice:$scope.formdata.snack.price,
    			squantity:$scope.formdata.sqty,
    			stotal:$scope.formdata.sqty*$scope.formdata.snack.price,
				rrID : $scope.formdata.restaurant.id,
				rlocation : $scope.formdata.restaurant.location,
				rname: $scope.formdata.restaurant.name,
				rtype:$scope.formdata.suite.type,
				raccomodation:$scope.formdata.suite.accomodation,
				rprice:$scope.formdata.suite.price,
				grandtotal:$scope.formdata.grandtotal
    		};
		}else if($scope.formdata.snack){

			    tickets = {
    			mmID:$scope.formdata.movie.id,
    			mname:$scope.formdata.movie.name,
    			mprice:$scope.formdata.movie.price,
    			mtime:$scope.formdata.time,
    			mnoOfTickets:$scope.formdata.qty,
    			mtotal:$scope.formdata.movie.price*$scope.formdata.qty,
    			ssID:$scope.formdata.snack.id,
    			sname:$scope.formdata.snack.name,
    			sprice:$scope.formdata.snack.price,
    			squantity:$scope.formdata.sqty,
    			stotal:$scope.formdata.sqty*$scope.formdata.snack.price,
				grandtotal:$scope.formdata.grandtotal
    		};

			
		}else{
			    tickets = {
    			mmID:$scope.formdata.movie.id,
    			mname:$scope.formdata.movie.name,
    			mprice:$scope.formdata.movie.price,
    			mtime:$scope.formdata.time,
    			mnoOfTickets:$scope.formdata.qty,
    			mtotal:$scope.formdata.movie.price*$scope.formdata.qty,
				grandtotal:$scope.formdata.grandtotal
    		};
		}
		
    		
    		console.log(tickets)

	    	$http({
	          method  : 'PUT',
	          url     : 'http://localhost:3000/users',
	          data    :  {"id" : auth.getID(),"tickets":tickets}, //forms user object
	          headers : {'Content-Type': 'application/json','Authorization': auth.getToken()} 
	         }).then(function(res){
	      
	    		alert('success', 'User Added! ',res.data.msg);
	    		$state.go('profile');
	    	
	    	},function(err){
	    		alert('danger', 'Oops! ',err);
	    		$state.go('movies');
	    	});



    	
    	},function(err){
    		alert('danger', 'Oops! ',err);
    	});

    }else if($scope.formdata.paymentsmethod == "Dialog"){
    	$scope.formdata.sam=false;

    	$http({
          method  : 'POST',
          url     : 'http://localhost:3002/transaction',
          data    : {"mob" : $scope.formdata.mob,"amt":$scope.formdata.grandtotal}, //forms user object
          headers : {'Content-Type': 'application/json'} 
         }).then(function(res){

    		alert('success', 'Sms! ',res.data.msg);

		var tickets;

		if($scope.formdata.snack  && $scope.formdata.restaurant){
			    tickets = {
    			mmID:$scope.formdata.movie.id,
    			mname:$scope.formdata.movie.name,
    			mprice:$scope.formdata.movie.price,
    			mtime:$scope.formdata.time,
    			mnoOfTickets:$scope.formdata.qty,
    			mtotal:$scope.formdata.movie.price*$scope.formdata.qty,
    			ssID:$scope.formdata.snack.id,
    			sname:$scope.formdata.snack.name,
    			sprice:$scope.formdata.snack.price,
    			squantity:$scope.formdata.sqty,
    			stotal:$scope.formdata.sqty*$scope.formdata.snack.price,
				rrID : $scope.formdata.restaurant.id,
				rlocation : $scope.formdata.restaurant.location,
				rname: $scope.formdata.restaurant.name,
				rtype:$scope.formdata.suite.type,
				raccomodation:$scope.formdata.suite.accomodation,
				rprice:$scope.formdata.suite.price,
				grandtotal:$scope.formdata.grandtotal+5
    		};
		}else if($scope.formdata.snack){

			    tickets = {
    			mmID:$scope.formdata.movie.id,
    			mname:$scope.formdata.movie.name,
    			mprice:$scope.formdata.movie.price,
    			mtime:$scope.formdata.time,
    			mnoOfTickets:$scope.formdata.qty,
    			mtotal:$scope.formdata.movie.price*$scope.formdata.qty,
    			ssID:$scope.formdata.snack.id,
    			sname:$scope.formdata.snack.name,
    			sprice:$scope.formdata.snack.price,
    			squantity:$scope.formdata.sqty,
    			stotal:$scope.formdata.sqty*$scope.formdata.snack.price,
				grandtotal:$scope.formdata.grandtotal+5
    		};

			
		}else{
			    tickets = {
    			mmID:$scope.formdata.movie.id,
    			mname:$scope.formdata.movie.name,
    			mprice:$scope.formdata.movie.price,
    			mtime:$scope.formdata.time,
    			mnoOfTickets:$scope.formdata.qty,
    			mtotal:$scope.formdata.movie.price*$scope.formdata.qty,
				grandtotal:$scope.formdata.grandtotal+5
    		};
		}
		
    		
    		console.log(tickets)

	    	$http({
	          method  : 'PUT',
	          url     : 'http://localhost:3000/users',
	          data    :  {"id" : auth.getID(),"tickets":tickets}, //forms user object
	          headers : {'Content-Type': 'application/json','Authorization': auth.getToken()} 
	         }).then(function(res){
	         	console.log(res);
	    		alert('success', 'User Added! ',res.data.msg);
	    		$state.go('profile');
	    	
	    	},function(err){
	    		alert('danger', 'Oops! ',err);
	    		$state.go('movies');
	    	});

    	
    	},function(err){
    		alert('danger', 'Oops! ',err);
    		$state.go('movies');
    	});

    }else{
    	
    	alert('danger', 'Oops! ',"Invalid Payments Method");
    	$state.go('movies');
    }

   	}

   	var saveData = function(){

   	}


  });
