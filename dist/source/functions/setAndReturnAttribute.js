"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/stable");

/**
 * Set an attribute on the element within a DomItem, then return the attribute.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having config changes to be applied to its
 * element
 * @param {string} name - The attribute name to be updated
 * @param {string} value - The new value to be applied to the attribute
 * @returns {string}
 */
var setAndReturnAttribute = function setAndReturnAttribute(config, name, value) {
  config.element.setAttribute(name, value);
  return value;
};

var _default = setAndReturnAttribute;
exports.default = _default;