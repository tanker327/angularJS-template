'use strict';

/**
 * @ngdoc function
 * @name angularTemplateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTemplateApp
 */
angular.module('angularTemplateApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
