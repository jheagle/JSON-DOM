'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

const _getChildrenFromAttribute = _interopRequireDefault(require('./getChildrenFromAttribute'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Helper for getting all domObjects.DomItems starting at parent and having specified className attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {DomItem[]}
 */
const getChildrenByClass = _functionalHelpers.default.curry(_getChildrenFromAttribute.default)('className')

const _default = getChildrenByClass
exports.default = _default
