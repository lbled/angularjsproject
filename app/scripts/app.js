'use strict';

/**
 * @ngdoc overview
 * @name angularjsprojectApp
 * @description
 * # angularjsprojectApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsprojectApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/gameContent/:name', {
        templateUrl: 'views/content.html',
        controller: 'ContentCtrl'
      })
      .when('/gameContent/:name/:id', {
        templateUrl: 'views/contentdetails.html',
        controller: 'ContentdetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
