import 'core-js/stable'
import createDomItem from './createDomItem.js'
import initChildren from './initChildren.js'
import initRoot from './initRoot.js'

/**
 * Return a DomItem reference to the document. The rootItem argument is a system variable and not necessary to
 * implement.
 * @function
 * @memberOf module:domObjects
 * @param {Object.<string, listenerFunction>} listeners - An object of all event
 * listeners to be registered in the Dom
 * @param {DomItemRoot|DomItem} [rootItem] - This is a
 * reference to DomItemRoot which will be defaulted with {@link initRoot}
 * @returns {DomItemRoot|DomItem}
 */
const documentDomItem = (listeners = {}, rootItem = initRoot(initChildren(), listeners)) => {
  rootItem.children = rootItem.children.map(child => createDomItem(child))
  rootItem.children.forEach(child => child.parentItem = rootItem)
  Object.assign(rootItem.head, rootItem.children[0])
  Object.assign(rootItem.body, rootItem.children[1])
  return createDomItem(rootItem)
}

export default documentDomItem
