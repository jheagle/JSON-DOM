import 'core-js/stable'

/**
 * Simplify detecting the parent item which can be appended to, whether root, or just a parent at any part of the tree
 * @function
 * @memberOf module:domFunctions
 * @param {
 * module:domObjects~DomItemRoot|module:domObjects~DomItem
 * } parent - A parent DomItem which may or may not have a body
 * @returns {module:domObjects~DomItemBody|module:domObjects~DomItem}
 */
const retrieveParentItem = parent => parent.body ? parent.body : parent

export default retrieveParentItem
