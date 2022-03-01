/**
 * @file Core objects for representing the DOM in JSON.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jsonDom~objects
 */
import 'core-js/stable'
import createDomItem from './objects/createDomItem.js'
import documentDomItem from './objects/documentDomItem.js'
import documentItem from './objects/documentItem.js'
import initChildren from './objects/initChildren.js'
import initRoot from './objects/initRoot.js'

export default {
  createDomItem,
  documentDomItem,
  documentItem,
  initChildren,
  initRoot
}
