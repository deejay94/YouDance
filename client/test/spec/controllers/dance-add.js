'use strict';

describe('Controller: DanceAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DanceAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DanceAddCtrl = $controller('DanceAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DanceAddCtrl.awesomeThings.length).toBe(3);
  });
});
