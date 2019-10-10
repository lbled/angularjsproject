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
        .when('/patch', {
        templateUrl: 'views/patch.html',
        controller: 'PatchCtrl'
        })
        .when('/gameContent/:name', {
            templateUrl: 'views/content.html',
            controller: 'ContentCtrl'
        })
        .when('/gameContent/:name/:id', {
            templateUrl: 'views/contentdetails.html',
            controller: 'ContentdetailsCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/patch'
        });
  });
