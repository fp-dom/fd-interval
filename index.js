"use strict";

var curry2 = require("fj-curry").curry2;



var interval = function (duration, func) {
  return window.setInterval(func, duration);
};

module.exports = curry2(interval);