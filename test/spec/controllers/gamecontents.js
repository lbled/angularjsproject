'use strict';

describe('Controller: GamecontentsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsprojectApp'));

  var GamecontentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GamecontentsCtrl = $controller('GamecontentsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GamecontentsCtrl.awesomeThings.length).toBe(3);
  });
});
