import 'core-js/stable'

/**
 * Get the upper parentItem for the provided child. (usually this is a documentItem reference)
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which we want the highest parent item of
 * @returns {DomItemRoot}
 */
const getTopParentItem = item => Object.keys(item.parentItem).length
  ? getTopParentItem(item.parentItem)
  : item

export default getTopParentItem
