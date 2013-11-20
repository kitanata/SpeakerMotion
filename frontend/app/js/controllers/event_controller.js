// with $resource
angular.module("app").controller("EventController", function ($scope, EventResource) {

  // because the stubbed endpoint returns an array of results, .query() is used
  // if the endpoint returned an object, you would use .get()
  $scope.event = EventResource.get({id: 2});
});

// with $http
// angular.module("app").controller("BooksController", function ($scope, BookService) {
//   $scope.books = BookService.getBooks();
// });
