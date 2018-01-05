'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DanceAddCtrl
 * @description
 * # DanceAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DanceAddCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.addDance = function(){
  		$http.post('http://localhost:3000/dances', $scope.dance)
      .then(function(response){
  			window.location.href='#!/dances';
        $('#message').text('Successfully Added a dance')
  		})
      .catch(function() {
        $('#message').text('Please fill in all necessary fields')
      })
  	}

  }]);
