'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.LinkedList = void 0

require('core-js/modules/es.symbol.iterator.js')

require('core-js/modules/es.object.to-string.js')

require('core-js/modules/es.string.iterator.js')

require('core-js/modules/es.array.iterator.js')

require('core-js/modules/web.dom-collections.iterator.js')

require('core-js/modules/es.symbol.js')

require('core-js/modules/es.symbol.description.js')

var _Linker = require('./Linker')

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } }

function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor }

/**
 *
 */
var LinkedList = /* #__PURE__ */(function () {
  /**
   *
   * @param LinkerClass
   * @param ListClass
   */
  function LinkedList () {
    var LinkerClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _Linker.Linker
    var ListClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LinkedList

    _classCallCheck(this, LinkedList)

    this.LinkerClass = LinkerClass
    this.ListClass = ListClass
    this.innerList = new this.LinkerClass()
  }
  /**
   *
   * @returns {Linker}
   */

  _createClass(LinkedList, [{
    key: 'first',
    get: function get () {
      var head = this.innerList
      var prev = head.prev

      while (prev !== null) {
        head = prev
        prev = head.prev
      }

      return head
    }
    /**
     *
     * @returns {Linker}
     */

  }, {
    key: 'last',
    get: function get () {
      var tail = this.innerList
      var next = tail.next

      while (next !== null) {
        tail = next
        next = tail.next
      }

      return tail
    }
    /**
     *
     * @returns {number}
     */

  }, {
    key: 'length',
    get: function get () {
      var current = this.first
      var length = 0

      while (current !== null) {
        ++length
        current = current.next
      }

      return length
    }
    /**
     *
     * @param node
     */

  }, {
    key: 'append',
    value: function append (node) {
      this.last.after(node)
      return this.first
    }
    /**
     *
     * @param node
     */

  }, {
    key: 'prepend',
    value: function prepend (node) {
      return this.first.before(node)
    }
    /**
     *
     * @param index
     * @returns {null|*}
     */

  }, {
    key: 'item',
    value: function item (index) {
      if (index >= 0) {
        var _current = this.first

        var _currentIndex = -1

        while (++_currentIndex < index && _current !== null) {
          _current = _current.next
        }

        return _currentIndex === index ? _current : null
      }

      var current = this.last
      var currentIndex = this.length
      var calculatedIndex = this.length + index

      if (calculatedIndex < 0) {
        return null
      }

      while (--currentIndex > calculatedIndex && current !== null) {
        current = current.prev
      }

      return currentIndex === calculatedIndex ? current : null
    }
    /**
     *
     * @param callback
     */

  }, {
    key: 'forEach',
    value: function forEach (callback) {
      var current = this.first

      while (current !== null) {
        callback(current)
        current = current.next
      }
    }
    /**
     *
     * @returns {{next: (function(): {value: (*|null), done: boolean})}}
     */

  }, {
    key: Symbol.iterator,
    value: function value () {
      var current = this.first
      return {
        next: function next () {
          var result = {
            value: current,
            done: !current
          }
          current = current ? current.next : null
          return result
        }
      }
    }
  }])

  return LinkedList
}())
/**
 *
 * @param values
 * @param LinkerClass
 * @param ListClass
 * @returns {LinkedList}
 */

exports.LinkedList = LinkedList

LinkedList.fromArray = function () {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
  var LinkerClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Linker.Linker
  var ListClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LinkedList
  var list = new ListClass(LinkerClass)
  list.innerList = list.LinkerClass.fromArray(values, LinkerClass)
  return list
}
