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
        .when('/search', {
          templateUrl: 'views/search.html',
          controller: 'SearchCtrl',
          controllerAs: 'search'
        })
        .when('/searchResult:query', {
          templateUrl: 'views/searchresult.html',
          controller: 'SearchresultCtrl'
        })
        .when('/charDetails/:id', {
          templateUrl: 'views/chardetails.html',
          controller: 'ChardetailsCtrl'
        })
        .otherwise({
            redirectTo: '/patch'
        });
  });
