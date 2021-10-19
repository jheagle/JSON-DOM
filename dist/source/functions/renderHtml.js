'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.map.js')

require('core-js/stable')

const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

const _documentItem = _interopRequireDefault(require('../objects/documentItem'))

const _bindElement = _interopRequireDefault(require('./bindElement'))

const _retrieveListener = _interopRequireDefault(require('./retrieveListener'))

const _getTopParentItem = _interopRequireDefault(require('./getTopParentItem'))

const _bindListeners = _interopRequireDefault(require('./bindListeners'))

const _appendHtml = _interopRequireDefault(require('./appendHtml'))

const _createDomItem = _interopRequireDefault(require('../objects/createDomItem'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * This is a shortcut for building the specified HTML elements and appending them to the Dom
 * with associated listeners.
 * The final argument is specific for adding event listeners with options.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem that we want to render the element for
 * @param {DomItemRoot} parent - The Base Dom item which is the parent of all the items
 * @returns {DomItem}
 */
const renderHtml = function renderHtml (item) {
  const parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default
  return _functionalHelpers.default.pipe(function (domItem) {
    return _functionalHelpers.default.setValue('element', domItem.element && domItem.element.style ? domItem.element : (0, _bindElement.default)(domItem).element, domItem)
  }, function (domItem) {
    return _functionalHelpers.default.setValue('eventListeners', _functionalHelpers.default.mapObject(domItem.eventListeners, function (prop) {
      return _functionalHelpers.default.mergeObjects(prop, {
        listenerFunc: (0, _retrieveListener.default)(prop.listenerFunc, (0, _getTopParentItem.default)(parent))
      })
    }), domItem)
  }, _functionalHelpers.default.curry(_functionalHelpers.default.setValue)('parentItem', parent.body || parent), function (domItem) {
    return (0, _bindListeners.default)((0, _appendHtml.default)(domItem, parent))
  }, function (domItem) {
    return _functionalHelpers.default.setValue('children', domItem.children.map(function (child) {
      return renderHtml(child, domItem)
    }), domItem)
  })(_functionalHelpers.default.reduceObject((0, _createDomItem.default)(item), function (domItem, prop, name) {
    return _functionalHelpers.default.setValue(name, prop, domItem)
  }, item))
}

const _default = renderHtml
exports.default = _default
