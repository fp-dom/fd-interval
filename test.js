"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var sinon = _interopRequire(require("sinon"));

var interval = _interopRequire(require("./"));




it("fd-interval", function () {
  assert.equal(typeof interval, "function");
  assert.equal(typeof interval(2), "function");

  var spy = sinon.spy();
  var clock = sinon.useFakeTimers();

  interval(2000)(spy);

  clock.tick(1999);
  assert(spy.notCalled);
  assert.equal(spy.callCount, 0);

  clock.tick(2000);
  assert.equal(spy.callCount, 1);

  clock.tick(2000);
  assert.equal(spy.callCount, 2);
});