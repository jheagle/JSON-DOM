import 'core-js/stable'

/**
 * Set an attribute on the element within a DomItem, then return the attribute.
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} config - The DomItem having config changes to be applied to its
 * element
 * @param {string} name - The attribute name to be updated
 * @param {string} value - The new value to be applied to the attribute
 * @returns {string}
 */
const setAndReturnAttribute = (config, name, value) => {
  config.element.setAttribute(name, value)
  return value
}

export default setAndReturnAttribute
