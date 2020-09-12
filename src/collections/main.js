/**
 * All of the JSON DOM system functions for creating JSON components.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module collections
 */

import 'core-js/stable'
import * as Linker from './classes/Linker'
import * as LinkedList from './classes/LinkedList'
import * as TreeLinker from './classes/TreeLinker'
import * as LinkedTreeList from './classes/LinkedTreeList'

/**
 * Store a reference to this scope which will be Window if rendered via browser
 */
const root = this || {}

/**
 * Store reference to any pre-existing module of the same name
 * @type {module|*}
 */
const previousCollections = root.collections || {}

/**
 * All methods exported from this module are encapsulated within collections.
 * @typedef {module:collections|module:collections|module:jDom|module:pseudoDom|module:matrix} collections
 */
const collections = {}
root.collections = collections

/**
 * Return a reference to this library while preserving the original same-named library
 * @function
 * @returns {module:collections~collections}
 */
const noConflict = () => {
  root.collections = previousCollections
  return collections
}
collections.noConflict = noConflict

export default Object.assign(
  collections,
  Linker,
  LinkedList,
  TreeLinker,
  LinkedTreeList
)
