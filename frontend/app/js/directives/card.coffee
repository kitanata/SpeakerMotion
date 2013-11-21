angular.module("app").directive 'card', ->
    restrict: 'C'
    link: (scope, element) ->
        el = element[0]

        el.draggable = true

        el.addEventListener 'dragstart', (e) =>
            e.dataTransfer.effectAllowed = 'move'

            if scope.$parent.room
                e.dataTransfer.setData('fromRoomId', scope.$parent.room.id)
                e.dataTransfer.setData('from', "room")
            else
                e.dataTransfer.setData('from', "unscheduled")

            e.dataTransfer.setData('card', JSON.stringify(scope.card))
            $(e.currentTarget).addClass('drag')
            return false
        , false

        el.addEventListener 'dragenter', (e) =>
            sessionStorage.setItem('after', scope.card.id)
            return false;

        el.addEventListener 'dragend', (e) ->
            $(e.currentTarget).removeClass('drag')
            return false;
        , false
