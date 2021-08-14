import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import elementHasAttribute from './elementHasAttribute'
import generateElement from './generateElement'

/**
 * Given a domObjects.DomItem as config, this function will return the changes to be applied
 * to the stored element property.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having config changes to be applied to its
 * element
 * @returns {DomItem}
 */
const elementChanges = config => (config.element.tagName.toLowerCase() !== config.tagName.toLowerCase())
  // Generate a new element since the tag has changed
  ? generateElement(config)
  // Remove all the similarities
  : functionalHelpers.setValue(
    'attributes',
    functionalHelpers.filterObject(
      config.attributes,
      // For each attribute, check if it becomes true / false based on the comparison results
      (attr1, key1) =>
        functionalHelpers.filterObject(
          // Get attributes as object of truthy and falsy values
          functionalHelpers.mapObject(
            config.attributes,
            (attr2, key2) => (typeof attr2 === 'object' || key2 === 'className')
              // Apply custom logic for class and styles, only keep the updates
              ? functionalHelpers.filterObject(
                elementHasAttribute(config.element, key2, attr2),
                attr3 => attr3 === 1
              )
              // True when the element does not already have the attribute
              : !elementHasAttribute(config.element, key2, attr2)
          ),
          // Remove when the attr4 value is 0 or false, or not empty object
          attr4 => !!attr4
        )[key1]
    ),
    config
  )

export default elementChanges
