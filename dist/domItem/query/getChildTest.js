'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
/**
 * Retrieve the {@link module:domGeneral~testChildItem} function by providing an attribute and value to check.
 * @param attr - Provide the attribute name to be searched
 * @param value - The attribute value to be compared
 */
const getChildTest = (attr, value) => (item, gatheredResults) => item.attributes[attr] && item.attributes[attr] === value ? gatheredResults.concat([item]) : gatheredResults
exports.default = getChildTest
