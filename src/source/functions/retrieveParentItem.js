import 'core-js/stable'

/**
 * Simplify detecting the parent item which can be appended to, whether root, or just a parent at any part of the tree
 * @function
 * @memberOf module:domFunctions
 * @param {
 * DomItemRoot|DomItem
 * } parent - A parent DomItem which may or may not have a body
 * @returns {DomItemBody|DomItem}
 */
const retrieveParentItem = parent => parent.body ? parent.body : parent

export default retrieveParentItem
