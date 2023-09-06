'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
/**
 * Retrieve the {@link module:domFunctions~testChildItem} function by providing an attribute and value to check.
 * @function
 * @memberOf module:domFunctions
 * @param {string} attr - Provide the attribute name to be searched
 * @param {*} value - The attribute value to be compared
 * @returns {module:domFunctions~testChildItem}
 */
const getChildTest = (attr, value) => (item, gatheredResults) => item.attributes[attr] && item.attributes[attr] === value ? gatheredResults.concat([item]) : gatheredResults
var _default = getChildTest
exports.default = _default
