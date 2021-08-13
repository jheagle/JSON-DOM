import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import documentItem from '../objects/documentItem'
import appendAndReturnChild from './appendAndReturnChild'
import bindElement from './bindElement'
import retrieveParentItem from './retrieveParentItem'

/**
 * Append a new DomItem which has the element generated.
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} item - A new DomItem to append
 * @param {module:domObjects~DomItem} parent - The parent to have DomItems appended
 * @returns {module:domObjects~DomItem}
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
