angular.module("app").directive 'cardlist', ->
    restrict: 'C'
    link: (scope, element) ->
        el = element[0]

        el.addEventListener 'dragover', (e) ->
            e.dataTransfer.dropEffect = 'move'
            if e.preventDefault
                e.preventDefault()

            $(e.currentTarget).addClass('over')
            return false
        , false

        el.addEventListener 'dragenter', (e) ->
            $(e.currentTarget).addClass('over')
            return false
        , false

        el.addEventListener 'dragleave', (e) ->
            $(e.currentTarget).removeClass('over')
            return false
        , false

        el.addEventListener 'drop', (e) =>
            if e.stopPropagation
                e.stopPropagation()

            $(e.currentTarget).removeClass('over')

            card = e.dataTransfer.getData('card')
            scope.room.talks.push(card)

            return false
        false
