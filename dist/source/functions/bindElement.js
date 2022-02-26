"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/stable");

var _functionalHelpers = _interopRequireDefault(require("functional-helpers"));

var _generateElement = _interopRequireDefault(require("./generateElement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generate HTML element data for a provided DomItem
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem needing element to be generated
 * @return {DomItem}
 */
var bindElement = function bindElement(item) {
  return _functionalHelpers.default.setValue('element', !item.element || !item.element.style ? (0, _generateElement.default)(item).element : item.element, item);
};

var _default = bindElement;
exports.default = _default;