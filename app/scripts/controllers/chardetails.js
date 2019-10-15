'use strict';

/**
 * @ngdoc function
 * @name angularjsprojectApp.controller:SearchdetailsCtrl
 * @description
 * # SearchdetailsCtrl
 * Controller of the angularjsprojectApp
 */
angular.module('angularjsprojectApp')
    .controller('ChardetailsCtrl', function ($scope, $routeParams, serviceAjax) {
        var id = $routeParams.id;
        $scope.loading = true;
        serviceAjax.getCharacter(id).then(function(res) {
            $scope.loading = false;
            $scope.character = res.data.Character;
            $scope.jobs = res.data.Character.ClassJobs;
        });
    });
