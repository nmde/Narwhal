'use strict';

module.exports = function(target, prop, callback) {
  Object.defineProperty(target, prop, {
    set(value) {
      callback(target[prop], value);
    }
  });
};
