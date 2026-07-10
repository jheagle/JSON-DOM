/**
 * @file Core objects for representing the DOM in JSON.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module domObjects
 * @memberOf module:jsonDom
 */
import 'core-js/stable'
import createChangeList from './objects/createChangeList.js'
import createDomItem from './objects/createDomItem.js'
import createEventListener from './objects/createEventListener.js'
import createEventProxy from './objects/createEventProxy.js'
import createEventResponder from './objects/createEventResponder.js'
import documentDomItem from './objects/documentDomItem.js'
import documentItem from './objects/documentItem.js'
import initChildren from './objects/initChildren.js'
import initRoot from './objects/initRoot.js'
import options from './objects/options.js'

export default {
  createChangeList,
  createDomItem,
  createEventListener,
  createEventProxy,
  createEventResponder,
  documentDomItem,
  documentItem,
  initChildren,
  initRoot,
  options,
}
