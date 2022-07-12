import 'core-js/stable'
import createDomItem from '../objects/createDomItem'

/**
 * Generate a DomItem fom the provided HTML Node element.
 * @param {Node|HTMLElement} element
 * @returns {DomItem}
 */
const generateDomItem = element => {
  // TODO: Create DomItem from html element
  return createDomItem(
    {
      nodeName: element.nodeName,
      nodeValue: element.nodeValue,
      element: element,
    }
  )
}

export default generateDomItem
