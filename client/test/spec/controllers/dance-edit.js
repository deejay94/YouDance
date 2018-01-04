'use strict';

describe('Controller: DanceEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DanceEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DanceEditCtrl = $controller('DanceEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DanceEditCtrl.awesomeThings.length).toBe(3);
  });
});
