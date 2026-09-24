'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _siFunciona = _interopRequireDefault(require('si-funciona'))
const _elementChanges = _interopRequireDefault(require('../diff/elementChanges.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} config - The DomItem having config changes to be applied to its
 * element
 * @returns {DomItem}
 */
const updateDomItem = config => {
  if (!config.element) {
    // if element is not a valid element then return the config without changes
    return config
  }
  const changes = (0, _elementChanges.default)(config)
  for (const dotKey in changes.removed) {
    const attributeKey = _siFunciona.default.strAfter(dotKey, '.')
    if (_siFunciona.default.strBefore(attributeKey, '.') === 'className') {
      const classList = config.attributes.className.split(' ')
      classList.splice(_siFunciona.default.strAfterLast(attributeKey, '.'), 1)
      config.attributes.className = classList.join(' ')
      continue
    }
    _siFunciona.default.dotUnset(config, dotKey)
  }
  for (const dotKey in changes.added) {
    const attributeKey = _siFunciona.default.strAfter(dotKey, '.')
    if (_siFunciona.default.strBefore(attributeKey, '.') === 'className') {
      const classList = config.attributes.className.split(' ')
      classList.push(changes.added[dotKey])
      config.attributes.className = classList.join(' ')
      continue
    }
    _siFunciona.default.dotSet(config, dotKey, changes.added[dotKey])
  }
  return config
}
const _default = exports.default = updateDomItem
