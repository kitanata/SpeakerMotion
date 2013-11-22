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
            false
        , false

        el.addEventListener 'dragenter', (e) =>
            sessionStorage.setItem('after', scope.card.id)
            $('.drop-indicator').remove()
            $("<div class='drop-indicator'>&nbsp;</div>").insertAfter($(e.currentTarget))
            false

        el.addEventListener 'dragend', (e) ->
            $(e.currentTarget).removeClass('drag')
            $('.drop-indicator').remove()
            false
        , false
