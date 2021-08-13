'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

const _documentItem = _interopRequireDefault(require('../objects/documentItem'))

const _appendAndReturnChild = _interopRequireDefault(require('./appendAndReturnChild'))

const _bindElement = _interopRequireDefault(require('./bindElement'))

const _retrieveParentItem = _interopRequireDefault(require('./retrieveParentItem'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Append a new DomItem which has the element generated.
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} item - A new DomItem to append
 * @param {module:domObjects~DomItem} parent - The parent to have DomItems appended
 * @returns {module:domObjects~DomItem}
 */
const appendHtml = function appendHtml (item) {
  const parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default.body
  return (0, _appendAndReturnChild.default)((0, _bindElement.default)(item), _functionalHelpers.default.setValue('children', _functionalHelpers.default.addUniqueToArray(item, (0, _retrieveParentItem.default)(parent).children), (0, _retrieveParentItem.default)(parent)))
}

const _default = appendHtml
exports.default = _default
