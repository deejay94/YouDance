'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DanceDeleteCtrl
 * @description
 * # DanceDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DanceDeleteCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.removeDance = function(id){
  		var id = $routeParams._id;
  		$http.delete('http://localhost:3000/dances/'+id).then(function(response){
  			window.location.href='#!/dances';
  		});
  	}
  }]);
