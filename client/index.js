'use strict';

angular.module('checklist', ['firebase', 'ui.router', 'ngTagsInput'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  // create state refs
  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/home/home.html', controller: 'Main'})
  .state('about', {url: '/about', templateUrl: '/views/home/about.html'})
  .state('faq', {url: '/faq', templateUrl: '/views/home/faq.html'})
  .state('contact', {url: '/contact', templateUrl: '/views/home/contact.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('tasks', {url: '/tasks', templateUrl: '/views/tasks/tasks.html', controller: 'TasksCtrl'})
  .state('blogpost', {url: '/{blogpost}', templateUrl: '/views/blogpost/blogpost.html', controller: 'BlogCtrl'});

  // $locationProvider.html5Mode(true);
}])
.run(['$rootScope','$window', '$firebaseAuth', 'firebaseUrl', function($rootScope, $window, $firebaseAuth, firebaseUrl){
  $rootScope.fbRoot = new $window.Firebase(firebaseUrl);
  $rootScope.afAuth = $firebaseAuth($rootScope.fbRoot);
}]);
