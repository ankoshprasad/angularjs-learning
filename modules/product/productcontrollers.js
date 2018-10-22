'use strict'; 
angular.module('Product') 
.controller('ProductController', function($scope,ProductService) {
ProductService.getDetails().success(function(data)
    {
        $scope.data = data;
        console.log($scope.data.critical[0].name);
    });
ProductService.getSelectDetails().success(function(data1)
    {
        $scope.data1 = data1.records;
        console.log($scope.data1.records);
    });		 

});