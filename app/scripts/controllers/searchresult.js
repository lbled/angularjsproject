'use strict';

/**
 * @ngdoc function
 * @name angularjsprojectApp.controller:SearchresultCtrl
 * @description
 * # SearchresultCtrl
 * Controller of the angularjsprojectApp
 */
angular.module('angularjsprojectApp')
    .controller('SearchresultCtrl', function ($scope, $routeParams, serviceAjax) {
        var query = $routeParams.query;
        $scope.currentPage = 1;
        $scope.totalResults = 0;
        $scope.loading = true;
        var search = function(){
            $scope.loading = true;
            serviceAjax.search(query, $scope.currentPage).then(function(res){
                $scope.loading = false;
                $scope.totalResults = res.data.Pagination.ResultsTotal;
                $scope.totalPerPage = res.data.Pagination.ResultsPerPage;
                $scope.characters = res.data.Results;
            });
        };

        $scope.pageChanged = function() {
            search();
        }

        search();
    });
