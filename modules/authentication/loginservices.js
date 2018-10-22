'use strict';
angular.module('Authentication').factory('AuthenticationService', function($http) {   
return {
loginDetails: function(val) {
    var url = "http://localhost/angularjs/nlq/api/login.json?"+val;			
    return $http.post(url);
},
headers: {'Content-Type': 'application/x-www-form-urlencoded'}
};
});