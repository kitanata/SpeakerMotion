angular.module("app").directive 'card', ->
    restrict: 'C'
    link: (scope, element) ->
        el = element[0]

        el.draggable = true

        el.addEventListener 'dragstart', (e) =>
            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.setData('card', scope.card)
            $(e.currentTarget).addClass('drag')
            return false
        , false

        el.addEventListener 'dragend', (e) ->
            $(e.currentTarget).removeClass('drag')
            return false;
        , false
