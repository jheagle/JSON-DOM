"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/stable");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Provide compatibility for using the options parameter of addEventListener
 * @function
 * @memberOf module:domFunctions
 * @param {EventListenerOptions} options - An object or boolean with the listener options
 * @returns {boolean}
 */
var listenerOptions = function listenerOptions(options) {
  if (typeof listenerOptions.supportsOptions === 'undefined') {
    // Check if supportsOptions has been defined. This is a compatibility checking flag.
    listenerOptions.supportsOptions = true;

    try {
      // If it is possible to use OptionsObject, then set our flag to true
      window.addEventListener('test', null, {
        capture: false,
        once: false,
        passive: false
      });
    } catch (err) {
      // When using an OptionsObjects fails, it is only possible to pass the boolean UseCapture as the option
      listenerOptions.supportsOptions = false;
    }
  }

  return _typeof(options) === 'object' && listenerOptions.supportsOptions ? options : false;
};

var _default = listenerOptions;
exports.default = _default;