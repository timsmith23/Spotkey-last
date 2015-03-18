'use strict';

/**
 * @ngdoc function
 * @name spotkeyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spotkeyApp
 */
angular.module('spotkeyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
