"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/stable");

var _functionalHelpers = _interopRequireDefault(require("functional-helpers"));

var _updateElement = _interopRequireDefault(require("./updateElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create an HTML element based on the provided attributes and return the element as an Object.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem requiring matching HTML element property
 * @return {DomItem}
 */
var generateElement = function generateElement(config) {
  return (0, _updateElement.default)(_functionalHelpers.default.setValue('element', document.createElement(config.tagName), config));
};

var _default = generateElement;
exports.default = _default;