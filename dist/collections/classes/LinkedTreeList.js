'use strict'

function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

require('core-js/modules/es.array.from.js')

require('core-js/modules/es.array.index-of.js')

require('core-js/modules/es.object.get-prototype-of.js')

require('core-js/modules/es.string.iterator.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.LinkedTreeList = void 0

var _LinkedList2 = require('./LinkedList')

var _TreeLinker = require('./TreeLinker')

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } }

function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function') } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass) }

function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o }; return _setPrototypeOf(o, p) }

function _createSuper (Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { var Super = _getPrototypeOf(Derived); var result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget) } else { result = Super.apply(this, arguments) } return _possibleConstructorReturn(this, result) } }

function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call } return _assertThisInitialized(self) }

function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return self }

function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true } catch (e) { return false } }

function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o) }; return _getPrototypeOf(o) }

var LinkedTreeList = /* #__PURE__ */(function (_LinkedList) {
  _inherits(LinkedTreeList, _LinkedList)

  var _super = _createSuper(LinkedTreeList)

  function LinkedTreeList () {
    var LinkerClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _TreeLinker.TreeLinker
    var ListClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LinkedTreeList

    _classCallCheck(this, LinkedTreeList)

    return _super.call(this, LinkerClass, ListClass)
  }

  _createClass(LinkedTreeList, [{
    key: 'parent',
    get: function get () {
      return this.first.parent
    },
    set: function set (parent) {
      if (parent === void 0) {
        parent = null
      }

      var current = this.first

      while (current !== null) {
        current.parent = parent
        current = current.next
      }

      if (parent) {
        parent.children = this
      }
    }
  }, {
    key: 'rootParent',
    get: function get () {
      var current = this.first
      var parent = this.first.parent

      while (parent !== null) {
        current = parent
        parent = current.parent
      }

      return current
    }
  }, {
    key: 'setChildren',
    value: function setChildren (item) {
      var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null

      if (Array.from(this).indexOf(item) < 0) {
        console.error('item is not a child of this')
      }

      children.parent = item
    }
  }])

  return LinkedTreeList
}(_LinkedList2.LinkedList))
/**
 *
 * @param values
 * @param LinkerClass
 * @param ListClass
 * @returns {LinkedList}
 */

exports.LinkedTreeList = LinkedTreeList

LinkedTreeList.fromArray = function () {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
  var LinkerClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _TreeLinker.TreeLinker
  var ListClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LinkedTreeList
  var list = new ListClass(LinkerClass)
  list.innerList = list.LinkerClass.fromArray(values, LinkerClass)
  return list
}
