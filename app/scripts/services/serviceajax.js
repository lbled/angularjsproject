'use strict';

/**
 * @ngdoc service
 * @name angularjsprojectApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the angularjsprojectApp.
 */
angular.module('angularjsprojectApp')
  .factory('serviceAjax', function ($http) {
    var serverAdress = 'https://xivapi.com/';
    return {
        getContents: function() {
            return $http.get(serverAdress + 'content');
        },
        getContent: function(name, page) {
            return $http.get(serverAdress +  name + '?Page=' + page);
        },
        getContentDetails: function(name, id) {
            return $http.get(serverAdress + name + '/' + id);
        },
        getServers: function () {
            return $http.get(serverAdress + 'servers');
        }
    };
  });
