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

export default Object.assign(
  Linker,
  LinkedList,
  TreeLinker,
  LinkedTreeList
)
