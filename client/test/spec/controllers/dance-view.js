'use strict';

describe('Controller: DanceViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DanceViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DanceViewCtrl = $controller('DanceViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DanceViewCtrl.awesomeThings.length).toBe(3);
  });
});
