angular.module("app", ["restangular", "ngRoute"]).run(function($rootScope, Restangular) {

    Restangular.setBaseUrl('/api');

    // adds some basic utilities to the $rootScope for debugging purposes
    $rootScope.log = function(thing) {
        console.log(thing);
    };

    $rootScope.alert = function(thing) {
        alert(thing);
    };
});
