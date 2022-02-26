import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import domItemChanges from './domItemChanges.js'
import setAndReturnAttribute from './setAndReturnAttribute.js'

/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - The DomItem having domItem changes to be applied to its
 * element
 * @returns {DomItem}
 */
const updateElement = domItem => {
  if (!domItem.element.style) {
    // if element is not a valid element then return the domItem without changes
    return domItem
  }
  domItem = domItemChanges(domItem)
  // Set the the current attributes to contain all the changes
  domItem.attributes = functionalHelpers.mapObject(
    // Retrieve only the changes to be applied from the attributes
    domItem.attributes,
    (attr, key) => {
      if (!functionalHelpers.isObject(attr) || functionalHelpers.emptyObject(attr)) {
        return (key in domItem.element)
          ? functionalHelpers.setAndReturnValue(domItem.element, key, attr)
          : setAndReturnAttribute(domItem, key, attr)
      }
      const cleanedStyles = functionalHelpers.filterObject(
        // Remove attributes which have a numeric key (these are unwanted styles stored on elements)
        attr,
        (param, k) => /^\D+$/.test(k)
      )
      return functionalHelpers.reduceObject(
        cleanedStyles,
        (newStyle, p, i) => functionalHelpers.setValue(i, p, newStyle),
        domItem.element.style
      )
    }
  )
  return domItem
}

export default updateElement
