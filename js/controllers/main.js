'use strict';

/**
 * @ngdoc function
 * @name spotkeyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spotkeyApp
 */
angular.module('spotkeyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
