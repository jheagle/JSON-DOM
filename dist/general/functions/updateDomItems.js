'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/modules/web.dom-collections.iterator.js')
require('core-js/stable')
var _updateChildren = _interopRequireDefault(require('./updateChildren.js'))
var _updateDomItem = _interopRequireDefault(require('./updateDomItem.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} config - The DomItem having child DomItems with config changes to be
 * applied
 * @returns {DomItem}
 */
const updateDomItems = config => {
  if (config.nodeName === '#document') {
    for (const child of config.children) {
      updateDomItems(child)
    }
    return config
  }
  const domItem = (0, _updateChildren.default)((0, _updateDomItem.default)(config))
  domItem.children.forEach(updateDomItems)
  return domItem
}
var _default = exports.default = updateDomItems
