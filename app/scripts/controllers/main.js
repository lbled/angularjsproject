'use strict';

/**
 * @ngdoc function
 * @name angularjsprojectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsprojectApp
 */
angular.module('angularjsprojectApp')
    .controller('MainCtrl', function ($scope, serviceAjax) {
        $scope.loading = true;
        serviceAjax.getContents().then(function(res) {
            $scope.loading = false;
            $scope.contents = res.data;
        });
  });
