'use strict';

/**
 * @ngdoc overview
 * @name spotkeyApp
 * @description
 * # spotkeyApp
 *
 * Main module of the application.
 */
var angular;
angular.module('spotkeyApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]);

var express = require('express');
var port = process.env.PORT || 8888;
var app = express();
var myAppModule = angular.module('app.ui-map', ['ui.map']);
app.use(express.static(__dirname + ‘/app’));
app.listen(port);
angular.config(function ($routeProvider) {
  $routeProvider
    .when('index.html'), {
      templateUrl: 'views/index.html',
      controller: 'spotkeyCtrl'
    }
    .when('/dashboard.html', {
      templateUrl: 'views/dashboard.html',
      controller: 'spotkeyCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});