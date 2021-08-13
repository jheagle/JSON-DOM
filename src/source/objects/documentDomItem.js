import 'core-js/stable'
import createDomItem from './createDomItem'
import initChildren from './initChildren'
import initRoot from './initRoot'

/**
 * Return a DomItem reference to the document. The rootItem argument is a system variable and not necessary to
 * implement.
 * @function documentDomItem
 * @memberOf module:domObjects
 * @param {Object.<string, module:domObjects~listenerFunction>} listeners - An object of all event
 * listeners to be registered in the Dom
 * @param {module:domObjects~DomItemRoot|module:domObjects~DomItem} [rootItem] - This is a
 * reference to DomItemRoot which will be defaulted with {@link initRoot}
 * @returns {module:domObjects~DomItemRoot|module:domObjects~DomItem}
 */
const documentDomItem = (listeners = [], rootItem = initRoot(initChildren(), listeners)) => {
  rootItem.children = rootItem.children.map(child => createDomItem(child, { parentItem: rootItem }))
  Object.assign(rootItem.head, rootItem.children[0])
  Object.assign(rootItem.body, rootItem.children[1])
  return createDomItem(rootItem)
}

export default documentDomItem
