'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/web.dom-collections.iterator.js')
require('core-js/modules/esnext.async-iterator.for-each.js')
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/stable')
var _updateChildNodes = _interopRequireDefault(require('./updateChildNodes.js'))
var _updateElement = _interopRequireDefault(require('./updateElement.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having child DomItems with config changes to be
 * applied
 * @returns {DomItem}
 */
const updateElements = config => {
  if (config.nodeName === '#document') {
    for (const child of config.children) {
      updateElements(child)
    }
    return config
  }
  const domItem = (0, _updateChildNodes.default)((0, _updateElement.default)(config))
  domItem.children.forEach(updateElements)
  return domItem
}
var _default = updateElements
exports.default = _default
