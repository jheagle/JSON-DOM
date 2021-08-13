'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

/**
 * Set an attribute on the element within a DomItem, then return the config data.
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} config - The DomItem having config changes to be applied to its
 * element
 * @param {string} name - The attribute name to be updated
 * @param {string} value - The new value to be applied to the attribute
 * @returns {module:domObjects~DomItem}
 */
const setAttribute = function setAttribute (config, name, value) {
  config.element.setAttribute(name, value)
  return config
}

const _default = setAttribute
exports.default = _default
