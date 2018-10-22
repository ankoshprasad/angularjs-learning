'use strict';
angular.module('Product').factory('ProductService', function($http) {   
return {
getDetails: function() {
    var url = "http://localhost/angularjs/project/api/details.json";			
    return $http.get(url);
},
         getSelectDetails: function() {
    var url = "http://localhost/angularjs/project/api/data.json";			
    return $http.get(url);
}
};
});