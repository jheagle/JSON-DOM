/**
 * All of the JSON DOM system functions for creating JSON components.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jDom
 */

import 'core-js/stable'
import * as jDomCore from './source/functions'
import * as jDomObjects from './source/objects'

export default Object.assign(
  jDomCore,
  jDomObjects
)
