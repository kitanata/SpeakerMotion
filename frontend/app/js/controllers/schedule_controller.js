angular.module("app").controller("ScheduleController", function ($scope, Restangular) {

  Restangular.one('event', 1).getList('rooms').then(function(rooms) {
    $scope.rooms = rooms;
  });

});
