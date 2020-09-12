'use strict'

require('core-js/modules/es.symbol')

require('core-js/modules/es.symbol.description')

require('core-js/modules/es.symbol.iterator')

require('core-js/modules/es.array.for-each')

require('core-js/modules/es.array.from')

require('core-js/modules/es.array.iterator')

require('core-js/modules/es.array.map')

require('core-js/modules/es.object.to-string')

require('core-js/modules/es.string.iterator')

require('core-js/modules/web.dom-collections.for-each')

require('core-js/modules/web.dom-collections.iterator')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.nodeListFactory = void 0

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } }

function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor }

/**
 * @file Substitute for the NodeList interface.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */
var nodeListFactory = function nodeListFactory (innerList) {
  var PseudoNodeList = /* #__PURE__ */(function () {
    function PseudoNodeList () {
      _classCallCheck(this, PseudoNodeList)
    }

    _createClass(PseudoNodeList, [{
      key: 'item',
      value: function item (index) {
        return innerList.item(index)
      }
    }, {
      key: 'forEach',
      value: function forEach (callback) {
        return Array.from(innerList).map(function (item) {
          return item.data
        }).forEach(callback)
      }
    }, {
      key: Symbol.iterator,
      value: function value () {
        var current = innerList.first
        return {
          next: function next () {
            var result = {
              value: current ? current.data : null,
              done: !current
            }
            current = current ? current.next : null
            return result
          }
        }
      }
    }, {
      key: 'length',
      get: function get () {
        return innerList.length
      }
    }, {
      key: 'entries',
      get: function get () {
        return Array.from(this)
      }
    }, {
      key: 'keys',
      get: function get () {
        return Array.from(innerList).keys
      }
    }, {
      key: 'values',
      get: function get () {
        return Array.from(innerList).map(function (item) {
          return item.data
        }).values
      }
    }])

    return PseudoNodeList
  }())

  return new PseudoNodeList()
}

exports.nodeListFactory = nodeListFactory
