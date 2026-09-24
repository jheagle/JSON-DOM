/**
 * All of the JSON DOM system functions for building and syncing a Virtual DOM (DomItem tree) to the real HTML DOM.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jsonDom
 */

import 'core-js/stable'
import events from './events/index.js'
import domItem from './domItem/index.js'
import inflate from './inflate/index.js'
import deflate from './deflate/index.js'
import render from './render/index.js'
import sync from './sync/index.js'
import diff from './diff/index.js'

const jsonDom = Object.assign(
  {},
  events,
  domItem,
  inflate,
  deflate,
  render,
  sync,
  diff
)

export default jsonDom

const root = this || (typeof window !== 'undefined') ? window : {}
root.jsonDom = jsonDom
