'use strict';

describe('Directive: confirmEquals', function () {

  // load the directive's module
  beforeEach(module('angularJwtnodeAuthApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<confirm-equals></confirm-equals>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the confirmEquals directive');
  }));
});
