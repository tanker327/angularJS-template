'use strict';

/**
 * @ngdoc function
 * @name angularTemplateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTemplateApp
 */
angular.module('angularTemplateApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
