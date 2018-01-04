'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DanceEditCtrl
 * @description
 * # DanceEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DanceEditCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.updateDance = function(){
  		var id = $routeParams._id;
  		$http.put('http://localhost:3000/dances/'+id, $scope.dance).then(function(response){
  			window.location.href='#!/dances';
  		});
  	}
  }]);
