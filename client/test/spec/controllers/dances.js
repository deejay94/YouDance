'use strict';

describe('Controller: DancesCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DancesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DancesCtrl = $controller('DancesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DancesCtrl.awesomeThings.length).toBe(3);
  });
});
