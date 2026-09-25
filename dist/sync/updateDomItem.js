'use strict'

const __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule
    ? mod
    : {
        default: mod
      }
}
Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
const si_funciona_1 = __importDefault(require('si-funciona'))
const elementChanges_1 = __importDefault(require('../diff/elementChanges'))
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
  const changes = (0, elementChanges_1.default)(config)
  for (const dotKey in changes.removed) {
    const attributeKey = si_funciona_1.default.strAfter(dotKey, '.')
    if (si_funciona_1.default.strBefore(attributeKey, '.') === 'className') {
      const classList = config.attributes.className.split(' ')
      classList.splice(si_funciona_1.default.strAfterLast(attributeKey, '.'), 1)
      config.attributes.className = classList.join(' ')
      continue
    }
    si_funciona_1.default.dotUnset(config, dotKey)
  }
  for (const dotKey in changes.added) {
    const attributeKey = si_funciona_1.default.strAfter(dotKey, '.')
    if (si_funciona_1.default.strBefore(attributeKey, '.') === 'className') {
      const classList = config.attributes.className.split(' ')
      classList.push(changes.added[dotKey])
      config.attributes.className = classList.join(' ')
      continue
    }
    si_funciona_1.default.dotSet(config, dotKey, changes.added[dotKey])
  }
  return config
}
exports.default = updateDomItem
