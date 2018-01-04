'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DanceViewCtrl
 * @description
 * # DanceViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DanceViewCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {

    	console.log('DanceView loaded...');
      console.log($routeParams._id);
    	$scope.getDance = function(){
    		const id = $routeParams._id;
        console.log(id);
    		$http.get('http://localhost:3000/dances/' +id).then(function(response){
    			$scope.dance = response.data;
    		});
      }
  }]);
