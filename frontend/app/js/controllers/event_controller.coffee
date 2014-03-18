angular.module("app").controller "EventController", ($scope, $routeParams, Restangular) ->
  eventId = $routeParams.id 

  Restangular.one('event', eventId).get().then (event) =>
    $scope.event = event
