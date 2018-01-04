'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/dances', {
        templateUrl: 'views/dances.html',
        controller: 'DancesCtrl'
      })
      .when('/create/dance', {
        templateUrl: 'views/dance-add.html',
        controller: 'DanceAddCtrl',
      })
      .when('/dances/:_id', {
        templateUrl: 'views/dance-view.html',
        controller: 'DanceViewCtrl',
      })
      .when('/dance/:id/delete', {
        templateUrl: 'views/dance-delete.html',
        controller: 'DanceDeleteCtrl',
      })
      .when('/dance/:id/edit', {
        templateUrl: 'views/dance-edit.html',
        controller: 'DanceEditCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
