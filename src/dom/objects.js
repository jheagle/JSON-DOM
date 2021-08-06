/**
 * @file Core objects for representing the DOM in JSON.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module domObjects
 */
import 'core-js/stable'
import createDomItem from './objects/createDomItem'
import documentDomItem from './objects/documentDomItem'
import documentItem from './objects/documentItem'
import initChildren from './objects/initChildren'
import initRoot from './objects/initRoot'

export default {
  createDomItem,
  documentDomItem,
  documentItem,
  initChildren,
  initRoot
}
