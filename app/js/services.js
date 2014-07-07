'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var myApp = angular.module('myApp.services', []);

myApp.value('version', '0.2');

myApp.factory("AuthenticationService",["$location", function($location){
    return{
        login: function(creds){
            if(creds.username == "admin" && creds.password == "1234"){
                $location.path("/dashboard");
            } else {
                $(".alert-box").show();
            }
        },
        logout: function(){
            $location.path("/");
        }
    }
}]);

myApp.factory("CustomerService",[function(){
    var customers = [
        {name: "John Samson", address: "155 Main St", city: "Boston, MA"},
        {name: "Steve Smith", address: "233 Mass Ave", city: "Cambridge, MA"},
        {name: "Carol Stevens", address: "12 Congress St", city: "Amesbury, MA"},
        {name: "Kyle Savon", address: "111 School St", city: "Amesbury, MA"},
        {name: "Benjamin Button", address: "122 Union St", city: "Lynn, MA"},
        {name: "Derek Salmon", address: "15 Marston St", city: "Lawrence, MA"}
    ];
    
    var factory = {};
    
    factory.getCustomers = function(){
        return customers;
    }
    
    factory.postCustomers = function(customers){
        //code to add customer
    }
    
    return factory;
}]);