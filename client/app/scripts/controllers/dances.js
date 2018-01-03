'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DancesCtrl
 * @description
 * # DancesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DancesCtrl', function ($scope) {
    $scope.dances = [
      {
          name: 'whip/nae nae',
          genre: 'hip-hop',
          url: 'https://www.youtube.com/watch?v=vjW8wmF5VWc'
        },
        {
            name: 'milly rock',
            genre: 'hip-hop',
            url: 'https://www.youtube.com/watch?v=PMzDoFuVgRg'
          },
          {
              name: 'billy bounce',
              genre: 'hip-hop',
              url: 'https://www.youtube.com/watch?v=zRW8LJ2_984'
          },
          {
              name: 'Do it like me',
              genre: 'hip-hop',
              url: 'https://www.youtube.com/watch?v=7hl0aTooA90'
          }
    ];
  });
