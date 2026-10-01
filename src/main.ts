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

// `export =` (not `export default`) so the compiled module.exports IS jsonDom directly, not
// { default: jsonDom } - browserify's standalone UMD wrapper exposes a bundle's module.exports
// as the global/CommonJS/AMD value verbatim, so a default export would otherwise surface as
// window.jsonDom.default instead of window.jsonDom itself.
export = jsonDom
