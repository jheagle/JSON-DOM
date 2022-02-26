"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/stable");

var _functionalHelpers = _interopRequireDefault(require("functional-helpers"));

var _documentItem = _interopRequireDefault(require("../objects/documentItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Register multiple listeners from an array of functions.
 * @function
 * @memberOf module:domFunctions
 * @param {Array.<listenerFunction|function>} listeners - An array of functions to be
 * used as the registered event listeners.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
 * stores has eventListeners property.
 * @returns {DomItemRoot|Object}
 */
var registerListeners = function registerListeners(listeners) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default;
  return _functionalHelpers.default.setValue('eventListeners', _functionalHelpers.default.mergeObjectsMutable(parent.eventListeners, listeners), parent);
};

var _default = registerListeners;
exports.default = _default;