angular.module("app").controller "ScheduleController", ($scope, Restangular) ->

    event = Restangular.one('event', 1)

    event.getList('rooms').then (rooms) ->
        $scope.rooms = rooms;

    event.getList('unscheduled').then (unscheduled) ->
        $scope.unscheduled = _.sortBy unscheduled, (x) -> 5 - x.rating

    $scope.new_room_name = "";

    $scope.addRoom = () ->
        if $scope.new_room_name != ""
            $scope.rooms.push
                id: $scope.rooms.length
                event: 1
                name: $scope.new_room_name
                show: true
                talks: []

            $scope.new_room_name = ""

    $scope.removeRoom = (room) ->
        $scope.unscheduled = _.union($scope.unscheduled, room.talks)
        $scope.unscheduled = _.sortBy $scope.unscheduled, (x) -> 5 - x.rating
        $scope.rooms = _($scope.rooms).without(room)
