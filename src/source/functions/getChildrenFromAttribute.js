import 'core-js/stable'
import documentItem from '../objects/documentItem'
import gatherChildItems from './gatherChildItems'
import getChildTest from './getChildTest'

/**
 * A selector function for retrieving existing child domObjects.DomItems from the given parent item.
 * This function will check all the children starting from item, and scan the attributes
 * property for matches. The returned array contains children matching from all levels.
 * WARNING: This calls a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {string} attr - Provide the attribute name to be searched
 * @param {*} value - The attribute value to be compared
 * @param {DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @returns {Array.<DomItem>}
 */
const getChildrenFromAttribute = (attr, value, item = documentItem.body) =>
  gatherChildItems(
    item,
    getChildTest(attr, value)
  )

export default getChildrenFromAttribute
