'use strict';

/**
 * @ngdoc function
 * @name angularjsprojectApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the angularjsprojectApp
 */
angular.module('angularjsprojectApp')
    .controller('SearchCtrl', function ($scope, $location, serviceAjax) {
        $scope.server = '';
        var query;
        serviceAjax.getServers().then(function(res) {
            $scope.servers = res.data;
        });

        $scope.searchAction = function() {
            if ($scope.name) {
                buildQuery();
                $location.path('/searchResult' + query);
            }
        };

        var buildQuery = function() {
            query = '?name=' + $scope.name + '&server=' + $scope.server;
        };
    });
