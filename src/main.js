/**
 * All of the JSON DOM system functions for creating JSON components.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jsonDom
 */

import 'core-js/stable'
import events from './events/index.js'
import general from './general/index.js'

const jsonDom = Object.assign(
  {},
  events,
  general
)

export default jsonDom

const root = this || (typeof window !== 'undefined') ? window : {}
root.jsonDom = jsonDom
