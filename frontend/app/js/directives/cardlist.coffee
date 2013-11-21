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

            card = JSON.parse(e.dataTransfer.getData('card'))
            from = e.dataTransfer.getData('from')
            after = sessionStorage.getItem('after')
            console.log after

            if scope.room
                rooms = scope.$parent.rooms
            else
                rooms = scope.rooms

            if from == "room"
                fromRoomId = e.dataTransfer.getData('fromRoomId')
                room = _.find rooms, (x) => x.id.toString() == fromRoomId

                room.talks = _.reject room.talks, (x) => x.id == card.id

                for talk, i in room.talks
                    talk.room_order = i

            else if from == "unscheduled"
                scope.$parent.unscheduled = _.reject scope.$parent.unscheduled, (x) => x.id == card.id

            if scope.room
                afterTalk = _.find scope.room.talks, (x) => x.id.toString() == after
                afterIndex = scope.room.talks.indexOf afterTalk
                scope.room.talks.splice(afterIndex + 1, 0, card);

                for talk, i in scope.room.talks
                    talk.room_order = i
            else
                scope.unscheduled.push(card)
                scope.unscheduled = _.sortBy scope.unscheduled, (x) -> 5 - x.rating

            scope.$apply('drop()')

            return false
        false
