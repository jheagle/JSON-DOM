'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.map.js')

require('core-js/modules/web.dom-collections.for-each.js')

require('core-js/modules/es.object.assign.js')

require('core-js/stable')

const _createDomItem = _interopRequireDefault(require('./createDomItem'))

const _initChildren = _interopRequireDefault(require('./initChildren'))

const _initRoot = _interopRequireDefault(require('./initRoot'))

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
const documentDomItem = function documentDomItem () {
  const listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  const rootItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _initRoot.default)((0, _initChildren.default)(), listeners)
  rootItem.children = rootItem.children.map(function (child) {
    return (0, _createDomItem.default)(child)
  })
  rootItem.children.forEach(function (child) {
    return child.parentItem = rootItem
  })
  Object.assign(rootItem.head, rootItem.children[0])
  Object.assign(rootItem.body, rootItem.children[1])
  return (0, _createDomItem.default)(rootItem)
}

const _default = documentDomItem
exports.default = _default
