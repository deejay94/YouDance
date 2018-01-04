'use strict';

describe('Controller: DanceDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DanceDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DanceDeleteCtrl = $controller('DanceDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DanceDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
