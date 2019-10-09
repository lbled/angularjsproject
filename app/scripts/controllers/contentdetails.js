'use strict';

/**
 * @ngdoc function
 * @name angularjsprojectApp.controller:ContentdetailsCtrl
 * @description
 * # ContentdetailsCtrl
 * Controller of the angularjsprojectApp
 */
angular.module('angularjsprojectApp')
    .controller('ContentdetailsCtrl', function ($scope, $routeParams, serviceAjax) {
        $scope.name = $routeParams.name;
        $scope.id = $routeParams.id;
        $scope.loading = true;
        serviceAjax.getContentDetails($scope.name, $scope.id).then(function(res){
            $scope.loading = false;
            $scope.details = res.data;
        });
    });
