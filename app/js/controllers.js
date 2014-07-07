'use strict';

/* Controllers */

var myApp = angular.module('myApp.controllers', []);
myApp.controller('loginController', ["$scope", "AuthenticationService", function($scope, AuthenticationService) {
    $scope.creds = {username: "", password: ""};
    
    $scope.login = function(){
        AuthenticationService.login($scope.creds);
    },
    $scope.logout = function(){
        AuthenticationService.logout();
    }
}]);
myApp.controller('dashboardController', ["$scope", function($scope) {
    $scope.title="Dashboard"
}]);
myApp.controller('customerController', ["$scope", "CustomerService", function($scope, CustomerService) {
    $scope.customers = CustomerService.getCustomers()
}]);

