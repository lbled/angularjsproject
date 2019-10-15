'use strict';

/**
 * @ngdoc filter
 * @name angularjsprojectApp.filter:jobname
 * @function
 * @description
 * # jobname
 * Filter in the angularjsprojectApp.
 */
angular.module('angularjsprojectApp')
    .filter('jobname', function () {
        return function (input) {
            if (input) {
                var job = input.split(' / ')[1];
                var jobName = job.split(' ');
                for (var i = 0; i < jobName.length; i++) {
                    jobName[i] = jobName[i].charAt(0).toUpperCase() + jobName[i].slice(1);
                }
                return jobName.join(' ');
            }
            return input;
        };
    });
