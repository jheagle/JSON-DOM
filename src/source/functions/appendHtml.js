import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import documentItem from '../objects/documentItem.js'
import appendAndReturnChild from './appendAndReturnChild.js'
import bindElement from './bindElement.js'
import retrieveParentItem from './retrieveParentItem.js'

/**
 * Append a new DomItem which has the element generated.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - A new DomItem to append
 * @param {DomItem} parent - The parent to have DomItems appended
 * @returns {DomItem}
 */
const appendHtml = (item, parent = documentItem.body) => appendAndReturnChild(
  bindElement(item),
  functionalHelpers.setValue(
    'children',
    functionalHelpers.addUniqueToArray(item, retrieveParentItem(parent).children),
    retrieveParentItem(parent)
  )
)

export default appendHtml
