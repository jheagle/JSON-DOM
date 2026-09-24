import 'core-js/stable'

/**
 * Reverse of appendHtml, remove a DomItem and have the associated element removed.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} parent - The parent of the items
 * @param {DomItem} child - The DomItem with HTMLElement to be removed
 * @returns {Array.<DomItem>}
 */
const removeChild = (parent, child) => {
  parent.element.removeChild(child.element)
  return parent.children.splice(parent.children.indexOf(child), 1)
}

export default removeChild
