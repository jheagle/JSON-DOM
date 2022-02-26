import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import documentItem from '../objects/documentItem.js'
import bindElement from './bindElement.js'
import retrieveListener from './retrieveListener.js'
import getTopParentItem from './getTopParentItem.js'
import bindListeners from './bindListeners.js'
import appendHtml from './appendHtml.js'
import createDomItem from '../objects/createDomItem.js'

/**
 * This is a shortcut for building the specified HTML elements and appending them to the Dom
 * with associated listeners.
 * The final argument is specific for adding event listeners with options.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem that we want to render the element for
 * @param {DomItemRoot} parent - The Base Dom item which is the parent of all the items
 * @returns {DomItem}
 */
const renderHtml = (item, parent = documentItem) => functionalHelpers.pipe(
  domItem => functionalHelpers.setValue(
    'element',
    (domItem.element && domItem.element.style) ? domItem.element : bindElement(domItem).element,
    domItem
  ),
  domItem => functionalHelpers.setValue(
    'eventListeners',
    functionalHelpers.mapObject(
      domItem.eventListeners,
      prop => functionalHelpers.mergeObjects(
        prop,
        { listenerFunc: retrieveListener(prop.listenerFunc, getTopParentItem(parent)) }
      )
    ),
    domItem
  ),
  functionalHelpers.curry(functionalHelpers.setValue)('parentItem', parent.body || parent),
  domItem => bindListeners(appendHtml(domItem, parent)),
  domItem => functionalHelpers.setValue('children', domItem.children.map(child => renderHtml(child, domItem)), domItem)
)(
  functionalHelpers.reduceObject(
    createDomItem(item),
    (domItem, prop, name) => functionalHelpers.setValue(name, prop, domItem),
    item
  )
)

export default renderHtml
