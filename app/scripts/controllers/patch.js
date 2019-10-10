'use strict';

/**
 * @ngdoc function
 * @name angularjsprojectApp.controller:PatchCtrl
 * @description
 * # PatchCtrl
 * Controller of the angularjsprojectApp
 */
angular.module('angularjsprojectApp')
    .controller('PatchCtrl', function ($scope, serviceAjax) {
        $scope.loading = true;
        serviceAjax.getPatchs().then(function(res){
            $scope.loading = false;
            $scope.patchs = res.data;
        });
    });
