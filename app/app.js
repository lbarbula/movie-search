var app = angular.module('movieSearch', ['ui.router', 'ui.materialize'])

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise('/')
  $stateProvider
  .state('home', {
    url: '/:title',
    templateUrl: 'partials/home.html',
    controller: 'homeController'
  })
  .state('next', {
    url:'/next/:movieTitle',
    templateUrl: 'partials/next.html',
    controller: 'nextController'
  })
  $locationProvider.html5Mode(true)
}])
