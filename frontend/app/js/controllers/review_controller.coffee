angular.module("app").controller "ReviewController", ($scope, Restangular) ->

    event = Restangular.one('event', 1)

    $scope.unreviewed = []

    event.getList('unreviewed').then (unreviewed) ->
        $scope.unreviewed = unreviewed

    reviewCard = (card) ->
        console.log "reviewCard"
        console.log card

    $scope.userLoggedIn = true
    $scope.reviewCard = reviewCard
