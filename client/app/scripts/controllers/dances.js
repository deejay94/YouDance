'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DancesCtrl
 * @description
 * # DancesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DancesCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {

	console.log('DancesController loaded...');

	$scope.getDances = function(){
		$http.get('http://localhost:3000/dances').then(function(response){
			$scope.dances = response.data;
      console.log(response.data);
		});
	}
  //
	// $scope.addDance = function(){
	// 	console.log($scope.dance);
	// 	$http.post('/api/dances/', $scope.dance).then(function(response){
	// 		window.location.href='#/dances';
	// 	});
	// }
  //
	// $scope.updateDance = function(){
	// 	var id = $routeParams.id;
	// 	$http.put('/api/dances/'+id, $scope.dance).then(function(response){
	// 		window.location.href='#!/dances';
	// 	});
	// }
  //
	// $scope.removeDance = function(id){
	// 	// var id = $routeParams.id;
	// 	$http.delete('/api/dances/'+id).then(function(response){
	// 		window.location.href='#!/dances';
	// 	});
	// }
}]);
