'use strict';

/**
 * @ngdoc overview
 * @name aokeApp
 * @description
 * # aokeApp
 *
 * Main module of the application.
 */
angular
  .module('aokeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'LocalStorageModule',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: '../views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: '../views/about.html'
      })
      .when('/create', {
        templateUrl: '../views/create.html',
        controller: 'CreateCtrl'
      })
      .when('/room/:id', {
        templateUrl:'../views/room.html',
        controller: 'RoomCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
