'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.map.js')

require('core-js/modules/esnext.async-iterator.map.js')

require('core-js/modules/esnext.iterator.map.js')

require('core-js/stable')

var _createDomItem = _interopRequireDefault(require('./createDomItem.js'))

var _initChildren = _interopRequireDefault(require('./initChildren.js'))

var _initRoot = _interopRequireDefault(require('./initRoot.js'))

var _updateDomItems = _interopRequireDefault(require('../functions/updateDomItems'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Return a DomItem reference to the document. The rootItem argument is a system variable and not necessary to
 * implement.
 * @function
 * @memberOf module:domObjects
 * @param {Object.<string, listenerFunction>} listeners - An object of all event
 * listeners to be registered in the Dom
 * @param {DomItemRoot|DomItem} [rootItem] - This is a
 * reference to DomItemRoot which will be defaulted with {@link initRoot}
 * @returns {DomItemRoot|DomItem}
 */
var documentDomItem = function documentDomItem () {
  var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  var rootItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _initRoot.default)((0, _initChildren.default)(), listeners)
  rootItem.children = rootItem.children.map(function (child) {
    return (0, _createDomItem.default)(child)
  })
  rootItem.children.map(function (child) {
    child.parentItem = rootItem
    return child
  })
  rootItem.head = rootItem.children[0]
  rootItem.body = rootItem.children[1]
  return (0, _updateDomItems.default)((0, _createDomItem.default)(rootItem))
}

var _default = documentDomItem
exports.default = _default
