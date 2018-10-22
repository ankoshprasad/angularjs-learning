'use strict'; 
angular.module('Home') 
.controller('HomeController', function($scope,HomeService) {
HomeService.getDetails().success(function(data)
    {
        $scope.data = data;
        console.log($scope.data.critical[0].name);
    });
HomeService.getSelectDetails().success(function(data1)
    {
        $scope.data1 = data1.records;
        console.log($scope.data1.records);
    });		 

});