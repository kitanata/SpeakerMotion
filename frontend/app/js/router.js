angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard.html',
    controller: 'DashboardController'
  });

  $routeProvider.when('/event/new', {
    templateUrl: 'create-event.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/event/:id', {
    templateUrl: 'event.html',
    controller: 'EventController'
  });

  $routeProvider.when('/profile', {
    templateUrl: 'profile.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/speaker', {
    templateUrl: 'speaker.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/review', {
    templateUrl: 'review.html',
    controller: 'ReviewController'
  });

  $routeProvider.when('/schedule', {
    templateUrl: 'schedule.html',
    controller: 'ScheduleController'
  });

  $routeProvider.when('/register', {
    templateUrl: 'register.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/billing', {
    templateUrl: 'billing.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/contact', {
    templateUrl: 'contact.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/list-of-books', {
    templateUrl: 'books.html',
    controller: 'BooksController'
    // uncomment if you want to see an example of a route that resolves a request prior to rendering
    // resolve: {
    //   books : function(BookService) {
    //     return BookService.get();
    //   }
    // }
  });

  $routeProvider.otherwise({ redirectTo: '/' });

});
