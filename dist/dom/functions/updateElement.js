'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

const _elementChanges = _interopRequireDefault(require('./elementChanges'))

const _setAndReturnAttribute = _interopRequireDefault(require('./setAndReturnAttribute'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} config - The DomItem having config changes to be applied to its
 * element
 * @returns {module:domObjects~DomItem}
 */
const updateElement = function updateElement (config) {
  if (!config.element.style) {
    // if element is not a valid element then return the config without changes
    return config
  }

  const domItem = (0, _elementChanges.default)(config) // Set the the current attributes to contain all the changes

  domItem.attributes = _functionalHelpers.default.mapObject( // Retrieve only the changes to be applied from the attributes
    domItem.attributes, function (attr, key) {
      if (!_functionalHelpers.default.isObject(attr) || _functionalHelpers.default.emptyObject(attr)) {
        return key in config.element ? _functionalHelpers.default.setAndReturnValue(config.element, key, attr) : (0, _setAndReturnAttribute.default)(config, key, attr)
      }

      const cleanedStyles = _functionalHelpers.default.filterObject( // Remove attributes which have a numeric key (these are unwanted styles stored on elements)
        attr, function (param, k) {
          return /^\D+$/.test(k)
        })

      return _functionalHelpers.default.reduceObject(cleanedStyles, function (newStyle, p, i) {
        return _functionalHelpers.default.setValue(i, p, newStyle)
      }, config.element.style)
    })
  return domItem
}

const _default = updateElement
exports.default = _default
