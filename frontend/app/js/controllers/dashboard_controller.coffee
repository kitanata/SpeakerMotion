angular.module("app").controller "DashboardController", ($scope, Restangular) ->

    events = Restangular.all('events')

    $scope.events = []

    events.getList().then (response) ->
        $scope.events = response
