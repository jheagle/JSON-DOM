import 'core-js/stable'
import documentDomItem from './documentDomItem.js'

/**
 * Create reference for storing document changes
 * @member documentItem
 * @memberOf module:domObjects
 * @type {DomItemRoot}
 */
const documentItem = documentDomItem()

export default documentItem
