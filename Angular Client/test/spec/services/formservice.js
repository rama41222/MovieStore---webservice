'use strict';

describe('Service: formservice', function () {

  // load the service's module
  beforeEach(module('angularJwtnodeAuthApp'));

  // instantiate service
  var formservice;
  beforeEach(inject(function (_formservice_) {
    formservice = _formservice_;
  }));

  it('should do something', function () {
    expect(!!formservice).toBe(true);
  });

});
