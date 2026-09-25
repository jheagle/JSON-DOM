/**
 * All of the JSON DOM system functions for building and syncing a Virtual DOM (DomItem tree) to the real HTML DOM.
 */

import 'core-js/stable'
import events from './events/index'
import domItem from './domItem/index'
import inflate from './inflate/index'
import deflate from './deflate/index'
import render from './render/index'
import sync from './sync/index'
import diff from './diff/index'

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

const root = (this || (typeof window !== 'undefined') ? window : {}) as Record<string, unknown>
root.jsonDom = jsonDom
