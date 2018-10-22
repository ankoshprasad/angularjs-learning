'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);
angular.module('Product', []);
angular.module('BasicHttpAuthExample', [
    'Authentication',
    'Home',
	'Product',
    'ngRoute',
    'ngCookies'
])
 
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/login.html',
            hideMenus: true
        })
 
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'modules/home/home.html'
        })
		
		.when('/product', {
            controller: 'ProductController',
            templateUrl: 'modules/product/product.html'
        })
 
        .otherwise({ redirectTo: '/login' });
}])
 
