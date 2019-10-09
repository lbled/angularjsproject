'use strict';

/**
 * @ngdoc function
 * @name angularjsprojectApp.controller:ContentCtrl
 * @description
 * # ContentCtrl
 * Controller of the angularjsprojectApp
 */
angular.module('angularjsprojectApp')
    .controller('ContentCtrl', function ($scope, $routeParams, serviceAjax) {
        $scope.currentPage = 1;
        $scope.totalResults = 0;
        $scope.name = $routeParams.name;
        $scope.loading = true;

        var getContent = function() {
            $scope.loading = true;
            serviceAjax.getContent($scope.name, $scope.currentPage).then(function(res){
                $scope.loading = false;
                $scope.totalResults = res.data.Pagination.ResultsTotal;
                $scope.contents = res.data.Results;
            });
        };

        $scope.pageChanged = function() {
            getContent();
        };

        getContent();
    });
