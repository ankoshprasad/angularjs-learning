'use strict'; 
angular.module('Authentication') 
.controller('LoginController', function($scope,$location,AuthenticationService) {
 $scope.login = function () {
$scope.val=""+$scope.email+"&"+$scope.password+"" ;
//$scope.val = {email: $scope.email, password: $scope.password}
console.log($scope.val);
 AuthenticationService.loginDetails($scope.val)
 .success(function(data)
    {
        if(data.success){			
            console.log("opa");
			 $location.path("/");
        }else{
            console.log("den");
        }
    }).
	 error(function (data) {
                alert("An error occurred during the AJAX request");
            });
	
	

 } 
});