(function () { function r (e, n, t) { function o (i, f) { if (!n[i]) { if (!e[i]) { var c = typeof require === 'function' && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = 'MODULE_NOT_FOUND', a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = typeof require === 'function' && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
  1: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.Linker = void 0

    require('core-js/modules/es.object.assign.js')

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    function _defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } }

    function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor }

    /**
 * @file doubly linked list item.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */

    /**
 *
 */
    var Linker = /* #__PURE__ */(function () {
      /**
   *
   * @param data
   * @param prev
   * @param next
   * @param LinkerClass
   */
      function Linker () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
        var _ref$data = _ref.data
        var data = _ref$data === void 0 ? null : _ref$data
        var _ref$prev = _ref.prev
        var prev = _ref$prev === void 0 ? null : _ref$prev
        var _ref$next = _ref.next
        var next = _ref$next === void 0 ? null : _ref$next

        var LinkerClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Linker

        _classCallCheck(this, Linker)

        this.LinkerClass = LinkerClass
        this.data = data
        this.prev = prev
        this.next = next
      }
      /**
   *
   * @param node
   * @returns {Linker}
   */

      _createClass(Linker, [{
        key: 'after',
        value: function after (node) {
          if (!node.LinkerClass) {
            if (_typeof(node) !== 'object') {
              node = {
                data: node
              }
            }

            node = new this.LinkerClass(node)
          }

          node.next = this.next
          node.prev = this
          this.next = node

          if (node.next) {
            node.next.prev = node
          }

          return node
        }
        /**
     *
     * @param node
     * @returns {Linker}
     */

      }, {
        key: 'before',
        value: function before (node) {
          if (!node.LinkerClass) {
            if (_typeof(node) !== 'object') {
              node = {
                data: node
              }
            }

            node = new this.LinkerClass(node)
          }

          node.prev = this.prev
          node.next = this
          this.prev = node

          if (node.prev) {
            node.prev.next = node
          }

          return node
        }
      }])

      return Linker
    }())
    /**
 *
 * @param values
 * @param LinkerClass
 * @returns {Linker}
 */

    exports.Linker = Linker

    Linker.fromArray = function () {
      var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      var LinkerClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Linker
      return values.reduce(function (list, element) {
        if (list === null) {
          if (_typeof(element) !== 'object') {
            element = {
              data: element
            }
          }

          return new LinkerClass(Object.assign({}, element, {
            prev: list
          }))
        }

        return Linker.prototype.after.apply(list, [element])
      }, null)
    }
  }, { 'core-js/modules/es.array.iterator.js': 110, 'core-js/modules/es.object.assign.js': 115, 'core-js/modules/es.object.to-string.js': 119, 'core-js/modules/es.string.iterator.js': 122, 'core-js/modules/es.symbol.description.js': 123, 'core-js/modules/es.symbol.iterator.js': 124, 'core-js/modules/es.symbol.js': 125, 'core-js/modules/web.dom-collections.iterator.js': 129 }],
  2: [function (require, module, exports) {
    'use strict'

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    require('core-js/modules/es.reflect.construct.js')

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.TreeLinker = void 0

    require('core-js/modules/es.array.map.js')

    require('core-js/modules/es.object.assign.js')

    require('core-js/modules/es.object.get-prototype-of.js')

    var _Linker2 = require('./Linker')

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    function _defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } }

    function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor }

    function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function') } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass) }

    function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o }; return _setPrototypeOf(o, p) }

    function _createSuper (Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { var Super = _getPrototypeOf(Derived); var result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget) } else { result = Super.apply(this, arguments) } return _possibleConstructorReturn(this, result) } }

    function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call } return _assertThisInitialized(self) }

    function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return self }

    function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true } catch (e) { return false } }

    function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o) }; return _getPrototypeOf(o) }

    var TreeLinker = /* #__PURE__ */(function (_Linker) {
      _inherits(TreeLinker, _Linker)

      var _super = _createSuper(TreeLinker)

      /**
   *
   * @param data
   * @param prev
   * @param next
   * @param children
   * @param parent
   * @param LinkerClass
   */
      function TreeLinker () {
        var _this

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
        var _ref$data = _ref.data
        var data = _ref$data === void 0 ? null : _ref$data
        var _ref$prev = _ref.prev
        var prev = _ref$prev === void 0 ? null : _ref$prev
        var _ref$next = _ref.next
        var next = _ref$next === void 0 ? null : _ref$next
        var _ref$children = _ref.children
        var children = _ref$children === void 0 ? null : _ref$children
        var _ref$parent = _ref.parent
        var parent = _ref$parent === void 0 ? null : _ref$parent

        var LinkerClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TreeLinker

        _classCallCheck(this, TreeLinker)

        _this = _super.call(this, {
          data: data,
          prev: prev,
          next: next
        }, LinkerClass)
        _this.parent = parent
        _this.children = _this.childrenFromArray(children, LinkerClass)
        return _this
      }

      _createClass(TreeLinker, [{
        key: 'childrenFromArray',
        value: function childrenFromArray () {
          var _this2 = this

          var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
          var LinkerClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TreeLinker
          return children !== null ? _Linker2.Linker.fromArray.apply(this, [children.map(function (child) {
            return Object.assign({}, child, {
              parent: _this2
            })
          }), LinkerClass]) : null
        }
      }])

      return TreeLinker
    }(_Linker2.Linker))

    exports.TreeLinker = TreeLinker
  }, { './Linker': 1, 'core-js/modules/es.array.iterator.js': 110, 'core-js/modules/es.array.map.js': 111, 'core-js/modules/es.object.assign.js': 115, 'core-js/modules/es.object.get-prototype-of.js': 117, 'core-js/modules/es.object.to-string.js': 119, 'core-js/modules/es.reflect.construct.js': 120, 'core-js/modules/es.string.iterator.js': 122, 'core-js/modules/es.symbol.description.js': 123, 'core-js/modules/es.symbol.iterator.js': 124, 'core-js/modules/es.symbol.js': 125, 'core-js/modules/web.dom-collections.iterator.js': 129 }],
  3: [function (require, module, exports) {
    'use strict'

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    require('core-js/modules/es.weak-map.js')

    require('core-js/modules/esnext.weak-map.delete-all.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/modules/es.object.get-own-property-descriptor.js')

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.symbol.iterator.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.object.assign.js')

    var PseudoEvent = _interopRequireWildcard(require('./class/PseudoEvent'))

    var PseudoEventTarget = _interopRequireWildcard(require('./class/PseudoEventTarget'))

    var PseudoNode = _interopRequireWildcard(require('./class/PseudoNode'))

    var PseudoElement = _interopRequireWildcard(require('./class/PseudoElement'))

    var PseudoHTMLElement = _interopRequireWildcard(require('./class/PseudoHTMLElement'))

    var PseudoHTMLDocument = _interopRequireWildcard(require('./class/PseudoHTMLDocument'))

    function _getRequireWildcardCache () { if (typeof WeakMap !== 'function') return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache () { return cache }; return cache }

    function _interopRequireWildcard (obj) { if (obj && obj.__esModule) { return obj } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj } } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj) } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc) } else { newObj[key] = obj[key] } } } newObj.default = obj; if (cache) { cache.set(obj, newObj) } return newObj }

    /**
 * @file All of the Pseudo Dom Helper Objects functions for simulating parts of the DOM when running scripts in NodeJs.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
*/

    /**
   * All methods exported from this module are encapsulated within pseudoDom.
   * @author Joshua Heagle <joshuaheagle@gmail.com>
   * @typedef {Object} pseudoDom
   * @module pseudoDom/objects
   */
    var pseudoDom = {}
    /**
   * Construct the Pseudo Dom to provide access to Dom objects which are otherwise not available outside of the browser
   * context.
   * @function generate
   * @param {Object} root
   * @param {Object} context
   * @returns {Window|PseudoEventTarget}
   */

    pseudoDom.generate = function (root) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

      /**
     *
     * @type {Window|PseudoEventTarget}
     */
      var newWindow = typeof root.document === 'undefined' ? root : new pseudoDom.PseudoEventTarget()
      /**
     * @type {Node|PseudoNode}
     */

      var Node = root.Node || new pseudoDom.PseudoNode()

      if (typeof newWindow.Node === 'undefined') {
        newWindow.Node = Node
      }
      /**
     *
     * @type {Element|PseudoElement}
     */

      var Element = root.Element || new pseudoDom.PseudoElement()

      if (typeof newWindow.Element === 'undefined') {
        newWindow.Element = Element
      }
      /**
     * Create an instance of HTMLElement if not available
     * @type {HTMLElement|PseudoHTMLElement}
     */

      var HTMLElement = root.HTMLElement || new pseudoDom.PseudoHTMLElement()

      if (typeof newWindow.HTMLElement === 'undefined') {
        newWindow.HTMLElement = HTMLElement
      }
      /**
     * Define document when not available
     * @type {Document|PseudoHTMLDocument}
     */

      var document = root.document || new pseudoDom.PseudoHTMLDocument()

      if (typeof newWindow.document === 'undefined') {
        newWindow.document = document
      }

      return context ? Object.assign(context, pseudoDom, newWindow) : Object.assign(root, newWindow)
    }

    var _default = Object.assign(pseudoDom, PseudoEvent, PseudoEventTarget, PseudoNode, PseudoElement, PseudoHTMLElement, PseudoHTMLDocument)

    exports.default = _default
  }, { './class/PseudoElement': 4, './class/PseudoEvent': 5, './class/PseudoEventTarget': 7, './class/PseudoHTMLDocument': 8, './class/PseudoHTMLElement': 9, './class/PseudoNode': 10, 'core-js/modules/es.array.iterator.js': 110, 'core-js/modules/es.object.assign.js': 115, 'core-js/modules/es.object.get-own-property-descriptor.js': 116, 'core-js/modules/es.object.to-string.js': 119, 'core-js/modules/es.string.iterator.js': 122, 'core-js/modules/es.symbol.description.js': 123, 'core-js/modules/es.symbol.iterator.js': 124, 'core-js/modules/es.symbol.js': 125, 'core-js/modules/es.weak-map.js': 126, 'core-js/modules/esnext.weak-map.delete-all.js': 127, 'core-js/modules/web.dom-collections.iterator.js': 129 }],
  4: [function (require, module, exports) {
    'use strict'

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    require('core-js/modules/es.reflect.construct.js')

    require('core-js/modules/es.reflect.get.js')

    require('core-js/modules/es.object.get-own-property-descriptor.js')

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PseudoElement = void 0

    require('core-js/modules/es.array.concat.js')

    require('core-js/modules/es.array.map.js')

    require('core-js/modules/es.function.name.js')

    require('core-js/modules/es.array.find.js')

    require('core-js/modules/es.object.get-prototype-of.js')

    var _PseudoNode2 = require('./PseudoNode')

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    function _defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } }

    function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor }

    function _get (target, property, receiver) { if (typeof Reflect !== 'undefined' && Reflect.get) { _get = Reflect.get } else { _get = function _get (target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver) } return desc.value } } return _get(target, property, receiver || target) }

    function _superPropBase (object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break } return object }

    function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function') } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass) }

    function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o }; return _setPrototypeOf(o, p) }

    function _createSuper (Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { var Super = _getPrototypeOf(Derived); var result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget) } else { result = Super.apply(this, arguments) } return _possibleConstructorReturn(this, result) } }

    function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call } return _assertThisInitialized(self) }

    function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return self }

    function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true } catch (e) { return false } }

    function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o) }; return _getPrototypeOf(o) }

    /**
 * Simulate the behaviour of the Element Class when there is no DOM available.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @class
 * @augments PseudoNode
 * @property {string} tagName
 * @property {string} className
 * @property {string} id
 * @property {string} innerHtml
 * @property {Array} attributes
 * @property {function} hasAttribute
 * @property {function} setAttribute
 * @property {function} getAttribute
 * @property {function} removeAttribute
 */
    var PseudoElement = /* #__PURE__ */(function (_PseudoNode) {
      _inherits(PseudoElement, _PseudoNode)

      var _super = _createSuper(PseudoElement)

      /**
   * Simulate the Element object when the Dom is not available
   * @param {string} [tagName=''] - The
   * @param {array} [attributes=[]]
   * @param {PseudoNode|Object} [parent={}]
   * @param {Array} [children=[]]
   * @constructor
   */
      function PseudoElement () {
        var _this

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
        var _ref$tagName = _ref.tagName
        var tagName = _ref$tagName === void 0 ? '' : _ref$tagName
        var _ref$attributes = _ref.attributes
        var attributes = _ref$attributes === void 0 ? [] : _ref$attributes
        var _ref$parent = _ref.parent
        var parent = _ref$parent === void 0 ? {} : _ref$parent
        var _ref$children = _ref.children
        var children = _ref$children === void 0 ? [] : _ref$children

        _classCallCheck(this, PseudoElement)

        _this = _super.call(this, {
          parent: parent,
          children: children
        })
        _this.tagName = tagName
        _this.attributes = attributes.concat([{
          name: 'className',
          value: ''
        }, {
          name: 'id',
          value: ''
        }, {
          name: 'innerHTML',
          value: ''
        }])
        /**
     * Map all incoming attributes to the attributes array and attach each as a property of this element
     */

        _this.attributes.map(function (_ref2) {
          var name = _ref2.name
          var value = _ref2.value
          _this[name] = value
          return {
            name: name,
            value: value
          }
        }) // this.classList = new DOMSettableTokenList(this.className)

        _this.classList = _this.className
        return _this
      }
      /**
   *
   * @returns {Function}
   */

      _createClass(PseudoElement, [{
        key: 'applyDefaultEvent',
        value: function applyDefaultEvent () {
          var _this2 = this

          var callback = function callback (event) {
            return undefined
          }

          switch (this.tagName) {
            case 'form':
              this.addEventListener('submit', callback)
              break

            case 'button':
            case 'input':
              if (/^(submit|image)$/i.test(this.type || '')) {
                callback = function callback (event) {
                  var forms = require('./PseudoEvent').getParentNodesFromAttribute('tagName', 'form', _this2)

                  if (forms) {
                    forms[0].submit()
                  }
                }

                _get(_getPrototypeOf(PseudoElement.prototype), 'setDefaultEvent', this).call(this, 'click', callback)
              }
          }

          return callback
        }
        /**
     *
     * @param {PseudoNode|PseudoElement} childElement
     * @returns {PseudoNode}
     */

      }, {
        key: 'appendChild',
        value: function appendChild (childElement) {
          _get(_getPrototypeOf(PseudoElement.prototype), 'appendChild', this).call(this, childElement)

          childElement.applyDefaultEvent()
          return childElement
        }
        /**
     * Check if an attribute is assigned to this element.
     * @param {string} attributeName - The attribute name to check
     * @returns {boolean}
     */

      }, {
        key: 'hasAttribute',
        value: function hasAttribute (attributeName) {
          return this.getAttribute(attributeName) !== 'undefined'
        }
        /**
     * Assign a new attribute or overwrite an assigned attribute with name and value.
     * @param {string} attributeName - The name key of the attribute to append
     * @param {string|Object} attributeValue - The value of the attribute to append
     * @returns {undefined}
     */

      }, {
        key: 'setAttribute',
        value: function setAttribute (attributeName, attributeValue) {
          if (this.hasAttribute(attributeName) || this[attributeName] === 'undefined') {
            this[attributeName] = attributeValue
            this.attributes.push({
              name: attributeName,
              value: attributeValue
            })
          }

          return undefined
        }
        /**
     * Retrieve the value of the specified attribute from the Element
     * @param {string} attributeName - A string representing the name of the attribute to be retrieved
     * @returns {string|Object}
     */

      }, {
        key: 'getAttribute',
        value: function getAttribute (attributeName) {
          return this.attributes.find(function (attribute) {
            return attribute.name === attributeName
          })
        } // noinspection JSUnusedGlobalSymbols

        /**
     * Remove an assigned attribute from the Element
     * @param {string} attributeName - The string name of the attribute to be removed
     * @returns {null}
     */

      }, {
        key: 'removeAttribute',
        value: function removeAttribute (attributeName) {
          if (this.hasAttribute(attributeName)) {
            delete this[attributeName]
            delete this.getAttribute(attributeName)
          }

          return null
        }
      }])

      return PseudoElement
    }(_PseudoNode2.PseudoNode))

    exports.PseudoElement = PseudoElement
  }, { './PseudoEvent': 5, './PseudoNode': 10, 'core-js/modules/es.array.concat.js': 108, 'core-js/modules/es.array.find.js': 109, 'core-js/modules/es.array.iterator.js': 110, 'core-js/modules/es.array.map.js': 111, 'core-js/modules/es.function.name.js': 114, 'core-js/modules/es.object.get-own-property-descriptor.js': 116, 'core-js/modules/es.object.get-prototype-of.js': 117, 'core-js/modules/es.object.to-string.js': 119, 'core-js/modules/es.reflect.construct.js': 120, 'core-js/modules/es.reflect.get.js': 121, 'core-js/modules/es.string.iterator.js': 122, 'core-js/modules/es.symbol.description.js': 123, 'core-js/modules/es.symbol.iterator.js': 124, 'core-js/modules/es.symbol.js': 125, 'core-js/modules/web.dom-collections.iterator.js': 129 }],
  5: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PseudoEvent = void 0

    require('core-js/modules/es.object.assign.js')

    require('core-js/modules/es.array.map.js')

    require('core-js/modules/es.object.keys.js')

    require('core-js/modules/es.array.slice.js')

    require('core-js/modules/es.array.concat.js')

    function _defineProperty (obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }) } else { obj[key] = value } return obj }

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    function _defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } }

    function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor }

    /**
 * @file Substitute for the DOM Event Class.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */

    /**
 * Simulate the behaviour of the Event Class when there is no DOM available.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @class
 * @property {number} NONE
 * @property {number} CAPTURING_PHASE
 * @property {number} AT_TARGET
 * @property {number} BUBBLING_PHASE
 * @property {boolean} bubbles - A Boolean indicating whether the event bubbles up through the Dom or not.
 * @property {boolean} cancelable - A Boolean indicating whether the event is cancelable.
 * @property {boolean} composed - A Boolean value indicating whether or not the event can bubble across the boundary
 * between the shadow Dom and the regular Dom.
 * @property {function|PseudoEventTarget} currentTarget - A reference to the currently registered target for the event. This
 * is the object to which the event is currently slated to be sent; it's possible this has been changed along the way
 * through re-targeting.
 * @property {boolean} defaultPrevented - Indicates whether or not event.preventDefault() has been called on the event.
 * @property {boolean} immediatePropagationStopped - Flag that no further propagation should occur, including on current
 * target.
 * @property {boolean} propagationStopped - Flag that no further propagation should occur.
 * @property {int} eventPhase - Indicates which phase of the event flow is being processed. Uses PseudoEvent constants.
 * @property {EventTarget|PseudoEventTarget} target - A reference to the target to which the event was originally
 * dispatched.
 * @property {int} timeStamp - The time at which the event was created (in milliseconds). By specification, this
 * value is time since epoch, but in reality browsers' definitions vary; in addition, work is underway to change this
 * to be a DomHighResTimeStamp instead.
 * @property {string} type - The name of the event (case-insensitive).
 * @property {boolean} isTrusted - Indicates whether or not the event was initiated by the browser (after a user
 * click for instance) or by a script (using an event creation method, like event.initEvent)
 */
    var PseudoEvent = /* #__PURE__ */(function () {
      /**
   *
   * @param typeArg
   * @param bubbles
   * @param cancelable
   * @param composed
   * @returns {PseudoEvent}
   * @constructor
   */
      function PseudoEvent () {
        var _this = this

        var typeArg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''

        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
        var _ref$bubbles = _ref.bubbles
        var bubbles = _ref$bubbles === void 0 ? true : _ref$bubbles
        var _ref$cancelable = _ref.cancelable
        var cancelable = _ref$cancelable === void 0 ? true : _ref$cancelable
        var _ref$composed = _ref.composed
        var composed = _ref$composed === void 0 ? true : _ref$composed

        _classCallCheck(this, PseudoEvent)

        var properties = {
          bubbles: bubbles,
          cancelable: cancelable,
          composed: composed,
          currentTarget: function currentTarget () {
            return undefined
          },
          defaultPrevented: false,
          immediatePropagationStopped: false,
          propagationStopped: false,
          eventPhase: '',
          target: function target () {
            return undefined
          },
          timeStamp: Math.floor(Date.now() / 1000),
          type: typeArg,
          isTrusted: true
        }

        this.setReadOnlyProperties = function () {
          var updateProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
          properties = Object.assign({}, properties, updateProps)

          _this.getReadOnlyProperties = (function (properties) {
            return function () {
              var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
              return properties[name]
            }
          }(properties))

          return properties
        }

        this.setReadOnlyProperties()
        Object.keys(properties).map(function (propKey) {
          return Object.defineProperty(_this, propKey, {
            enumerable: true,
            get: function get () {
              return _this.getReadOnlyProperties(propKey)
            }
          })
        })
      }
      /**
   * A selector function for retrieving existing parent PseudoNode from the given child item.
   * This function will check all the parents starting from node, and scan the attributes
   * property for matches. The return array contains all matching parent ancestors.
   * WARNING: This is a recursive function.
   * @param {string} attr
   * @param {number|string} value
   * @param {PseudoNode} node
   * @returns {Array.<PseudoNode>}
   */

      _createClass(PseudoEvent, [{
        key: 'composedPath',
        value:
    /**
     * Return an array of targets that will have the event executed open them. The order is based on the eventPhase
     * @method
     * @returns {Array.<PseudoEventTarget>}
     */
    function composedPath () {
      switch (this.eventPhase) {
        case PseudoEvent.CAPTURING_PHASE:
          return PseudoEvent.getParentNodes(this.target)

        case PseudoEvent.BUBBLING_PHASE:
          return PseudoEvent.getParentNodes(this.target).slice().reverse()

        case PseudoEvent.AT_TARGET:
          return [this.target]

        default:
          return []
      }
    }
    /**
     * Cancels the event (if it is cancelable).
     * @method
     * @returns {null}
     */

      }, {
        key: 'preventDefault',
        value: function preventDefault () {
          this.setReadOnlyProperties({
            defaultPrevented: true
          })
          return null
        }
        /**
     * For this particular event, no other listener will be called.
     * Neither those attached on the same element, nor those attached on elements which will be traversed later (in
     * capture phase, for instance)
     * @method
     * @returns {null}
     */

      }, {
        key: 'stopImmediatePropagation',
        value: function stopImmediatePropagation () {
          this.setReadOnlyProperties({
            immediatePropagationStopped: true
          })
          return null
        }
        /**
     * Stops the propagation of events further along in the Dom.
     * @method
     * @returns {null}
     */

      }, {
        key: 'stopPropagation',
        value: function stopPropagation () {
          this.setReadOnlyProperties({
            propagationStopped: true
          })
          return null
        }
      }], [{
        key: 'getParentNodesFromAttribute',
        value: function getParentNodesFromAttribute (attr, value, node) {
          return Object.keys(node.parentNode).length ? (node.parentNode[attr] || false) === value ? PseudoEvent.getParentNodesFromAttribute(attr, value, node.parentNode).concat([node.parentNode]) : PseudoEvent.getParentNodesFromAttribute(attr, value, node.parentNode) : []
        }
        /**
     * A helper selector function for retrieving all parent PseudoNode for the given child node.
     * @param {PseudoNode} node
     * @returns {Array.<PseudoNode>}
     */

      }, {
        key: 'getParentNodes',
        value: function getParentNodes (node) {
          return PseudoEvent.getParentNodesFromAttribute('', false, node)
        }
      }])

      return PseudoEvent
    }()) // Set up the class constants

    exports.PseudoEvent = PseudoEvent;
    ['NONE', 'CAPTURING_PHASE', 'AT_TARGET', 'BUBBLING_PHASE'].reduce(function (phases, phase, key) {
      Object.defineProperty(PseudoEvent, phase, {
        value: key,
        writable: false,
        static: {
          get: function get () {
            return key
          }
        }
      })
      return Object.assign({}, phases, _defineProperty({}, ''.concat(phase), key))
    }, {})
  }, { 'core-js/modules/es.array.concat.js': 108, 'core-js/modules/es.array.map.js': 111, 'core-js/modules/es.array.slice.js': 112, 'core-js/modules/es.object.assign.js': 115, 'core-js/modules/es.object.keys.js': 118 }],
  6: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PseudoEventListener = void 0

    var _PseudoEvent = require('./PseudoEvent')

    /**
 * @file Substitute for the DOM EventEventListener Class.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */

    /**
 * Handle events as they are stored and implemented.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @class
 * @property {string} eventTypes
 * @property {Object} eventOptions
 * @property {boolean} isDefault
 */
    var PseudoEventListener = {
      eventType: '',
      eventOptions: {
        capture: false,
        once: false,
        passive: false
      },
      isDefault: false,

      /**
   * @method
   * @name PseudoEventListener#handleEvent
   * @param {PseudoEvent} event
   * @returns {undefined}
   */
      handleEvent: function handleEvent (event) {
        return undefined
      },

      /**
   * @method
   * @name PseudoEventListener#doCapturePhase
   * @param {PseudoEvent} event
   * @returns {boolean}
   */
      doCapturePhase: function doCapturePhase (event) {
        return event.eventPhase === _PseudoEvent.PseudoEvent.CAPTURING_PHASE && this.eventOptions.capture
      },

      /**
   * @method
   * @name PseudoEventListener#doTargetPhase
   * @param {PseudoEvent} event
   * @returns {boolean}
   */
      doTargetPhase: function doTargetPhase (event) {
        return event.eventPhase === _PseudoEvent.PseudoEvent.AT_TARGET
      },

      /**
   * @method
   * @name PseudoEventListener#doBubblePhase
   * @param {PseudoEvent} event
   * @returns {boolean|*}
   */
      doBubblePhase: function doBubblePhase (event) {
        return event.eventPhase === _PseudoEvent.PseudoEvent.BUBBLING_PHASE && (event.bubbles || !this.eventOptions.capture)
      },

      /**
   * @method
   * @name PseudoEventListener#skipPhase
   * @param {PseudoEvent} event
   * @returns {boolean}
   */
      skipPhase: function skipPhase (event) {
        return !this.doCapturePhase(event) && !this.doTargetPhase(event) && !this.doBubblePhase(event)
      },

      /**
   * @method
   * @name PseudoEventListener#skipDefault
   * @param {PseudoEvent} event
   * @returns {boolean|*}
   */
      skipDefault: function skipDefault (event) {
        return this.isDefault && event.defaultPrevented
      },

      /**
   * @method
   * @name PseudoEventListener#stopPropagation
   * @param {PseudoEvent} event
   * @returns {boolean}
   */
      stopPropagation: function stopPropagation (event) {
        return !this.doTargetPhase(event) && event.propagationStopped
      },

      /**
   * @method
   * @name PseudoEventListener#nonPassiveHalt
   * @param {PseudoEvent} event
   * @returns {boolean|*}
   */
      nonPassiveHalt: function nonPassiveHalt (event) {
        return !this.eventOptions.passive && (this.skipDefault(event) || event.immediatePropagationStopped || this.stopPropagation(event))
      },

      /**
   * @method
   * @name PseudoEventListener#rejectEvent
   * @param {PseudoEvent} event
   * @returns {*|boolean}
   */
      rejectEvent: function rejectEvent (event) {
        return this.nonPassiveHalt(event) || this.skipPhase(event)
      }
    }
    exports.PseudoEventListener = PseudoEventListener
  }, { './PseudoEvent': 5 }],
  7: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PseudoEventTarget = void 0

    require('core-js/modules/es.array.concat.js')

    require('core-js/modules/web.dom-collections.for-each.js')

    require('core-js/modules/es.object.keys.js')

    require('core-js/modules/es.object.assign.js')

    require('core-js/modules/es.array.splice.js')

    var _PseudoEvent = require('./PseudoEvent')

    var _PseudoEventListener = require('./PseudoEventListener')

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    function _defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } }

    function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor }

    /**
 * Simulate the behaviour of the EventTarget Class when there is no DOM available.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @class
 * @property {Object.<string, Array.<PseudoEventListener>>} listeners
 * @property {function} addEventListener
 * @property {function} removeEventListener
 * @property {function} dispatchEvent
 */
    var PseudoEventTarget = /* #__PURE__ */(function () {
      /**
   * @constructor
   */
      function PseudoEventTarget () {
        _classCallCheck(this, PseudoEventTarget)

        this.listeners = []
        this.defaultEvent = []
      }
      /**
   *
   * @param {PseudoEvent} event
   * @returns {boolean}
   */

      _createClass(PseudoEventTarget, [{
        key: 'runEvents',
        value: function runEvents (event) {
          if (!(event.type in this.listeners)) {
            return true
          }
          /**
       *
       * @type {Array<PseudoEventListener>}
       */

          var stack = this.listeners[event.type]
          var eventReturn = null
          this.listeners[event.type] = stack.reduce(
          /**
       *
       * @param {Array<PseudoEventListener>} listeners
       * @param {PseudoEventListener} listener
       * @returns {Array<PseudoEventListener>}
       */
            function (listeners, listener) {
              if (event.immediatePropagationStopped || listener.rejectEvent(event)) {
                return listeners.concat(listener)
              }

              eventReturn = listener.handleEvent(event)

              if (listener.eventOptions.once) {
                event.currentTarget.removeEventListener(event.eventType, event.handleEvent)
                return listeners
              }

              return listeners.concat(listener)
            }, [])
          return eventReturn
        }
        /**
     *
     * @param {string} type
     * @param {Function} callback
     */

      }, {
        key: 'setDefaultEvent',
        value: function setDefaultEvent (type, callback) {
          var _this = this

          if (!(type in this.listeners)) {
            this[type] = function () {
              return _this.startEvents(type)
            }

            this.listeners[type] = []
          }

          this.defaultEvent[type] = callback
        }
        /**
     *
     * @param {PseudoEvent} event
     * @returns {boolean}
     */

      }, {
        key: 'runDefaultEvent',
        value: function runDefaultEvent (event) {
          if (event.defaultPrevented) {
            return false
          }

          this.defaultEvent[event.type](event)
        }
        /**
     *
     * @param {PseudoEvent} eventType
     * @returns {boolean}
     */

      }, {
        key: 'startEvents',
        value: function startEvents (eventType) {
          var _this2 = this

          /**
       * type PseudoEvent
       */
          var event = new _PseudoEvent.PseudoEvent(eventType)
          event.setReadOnlyProperties({
            target: this
          })
          console.log('startEvents', event.type, event.target);
          [_PseudoEvent.PseudoEvent.CAPTURING_PHASE, _PseudoEvent.PseudoEvent.AT_TARGET, _PseudoEvent.PseudoEvent.BUBBLING_PHASE].forEach(function (phase) {
            var continueEvents = null

            if (phase === _PseudoEvent.PseudoEvent.AT_TARGET || !event.propagationStopped) {
              event.setReadOnlyProperties({
                eventPhase: phase
              })
              event.composedPath().forEach(function (target) {
                event.setReadOnlyProperties({
                  currentTarget: target
                })
                continueEvents = event.currentTarget.runEvents(event)
              })
            }

            if (event.eventPhase === _PseudoEvent.PseudoEvent.AT_TARGET && typeof continueEvents !== 'boolean' && _this2.defaultEvent[eventType]) {
              _this2.runDefaultEvent(event)
            }
          })
          return true
        }
        /**
     *
     * @param {string} type
     * @param {function|Object} callback
     * @param {boolean|Object} [useCapture=false]
     */

      }, {
        key: 'addEventListener',
        value: function addEventListener (type, callback) {
          var _this3 = this

          var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false
          var options = {
            capture: false,
            once: false,
            passive: false
          }

          if (_typeof(useCapture) === 'object') {
            options = Object.keys(useCapture).reduce(function (opts, opt) {
              opts[opt] = useCapture[opt]
              return opts
            }, options)
          } else {
            options.capture = useCapture
          }

          if (!(type in this.listeners)) {
            this[type] = function () {
              return _this3.startEvents(type)
            }

            this.listeners[type] = []
          }

          this.listeners[type] = this.listeners[type].concat([Object.assign(Object.create(_PseudoEventListener.PseudoEventListener), _PseudoEventListener.PseudoEventListener, {
            eventType: type,
            eventOptions: Object.assign({}, _PseudoEventListener.PseudoEventListener.eventOptions, options),
            handleEvent: (callback.handleEvent || callback).bind(this)
          })])
          var groupedDefault = this.listeners[type].reduce(function (listeners, listener) {
            return listener.isDefault ? Object.assign({}, listeners, {
              default: listeners.default.concat([listener])
            }) : Object.assign({}, listeners, {
              explicit: listeners.explicit.concat([listener])
            })
          }, {
            explicit: [],
            default: []
          })
          this.listeners[type] = [].concat(groupedDefault.explicit, groupedDefault.default)
        }
        /**
     *
     * @param {string} type
     * @param {function} callback
     */

      }, {
        key: 'removeEventListener',
        value: function removeEventListener (type, callback) {
          if (!(type in this.listeners)) {
            return
          }

          var stack = this.listeners[type]

          for (var i = 0, l = stack.length; i < l; i++) {
            if (stack[i].handleEvent === callback && !stack[i].isDefault) {
              stack.splice(i, 1)
              return
            }
          }
        }
        /**
     *
     * @param {Event|PseudoEvent} event
     * @param {EventTarget|PseudoEventTarget} target
     * @returns {boolean}
     */

      }, {
        key: 'dispatchEvent',
        value: function dispatchEvent (event) {
          var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this
          event.setReadOnlyProperties({
            target: target
          })

          if (!(event.type in this.listeners)) {
            return true
          }

          this.runEvents(event)
          return !event.defaultPrevented
        }
      }])

      return PseudoEventTarget
    }())

    exports.PseudoEventTarget = PseudoEventTarget
  }, { './PseudoEvent': 5, './PseudoEventListener': 6, 'core-js/modules/es.array.concat.js': 108, 'core-js/modules/es.array.iterator.js': 110, 'core-js/modules/es.array.splice.js': 113, 'core-js/modules/es.object.assign.js': 115, 'core-js/modules/es.object.keys.js': 118, 'core-js/modules/es.object.to-string.js': 119, 'core-js/modules/es.string.iterator.js': 122, 'core-js/modules/es.symbol.description.js': 123, 'core-js/modules/es.symbol.iterator.js': 124, 'core-js/modules/es.symbol.js': 125, 'core-js/modules/web.dom-collections.for-each.js': 128, 'core-js/modules/web.dom-collections.iterator.js': 129 }],
  8: [function (require, module, exports) {
    'use strict'

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    require('core-js/modules/es.reflect.construct.js')

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PseudoHTMLDocument = void 0

    require('core-js/modules/es.object.get-prototype-of.js')

    var _PseudoHTMLElement2 = require('./PseudoHTMLElement')

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    function _defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } }

    function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor }

    function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function') } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass) }

    function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o }; return _setPrototypeOf(o, p) }

    function _createSuper (Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { var Super = _getPrototypeOf(Derived); var result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget) } else { result = Super.apply(this, arguments) } return _possibleConstructorReturn(this, result) } }

    function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call } return _assertThisInitialized(self) }

    function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return self }

    function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true } catch (e) { return false } }

    function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o) }; return _getPrototypeOf(o) }

    /**
 * Simulate the behaviour of the HTMLDocument Class when there is no DOM available.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @class
 * @augments PseudoHTMLElement
 * @property {PseudoHTMLElement} head - A reference to the Head child element
 * @property {PseudoHTMLElement} body - A reference to the Body child element
 * @property {function} createElement - Generate a new PseudoHTMLElement with parent of document
 */
    var PseudoHTMLDocument = /* #__PURE__ */(function (_PseudoHTMLElement) {
      _inherits(PseudoHTMLDocument, _PseudoHTMLElement)

      var _super = _createSuper(PseudoHTMLDocument)

      /**
   * The root HTML element is acts as the parent to all HTML elements in the document.
   * @returns {PseudoHTMLDocument}
   * @constructor
   */
      function PseudoHTMLDocument () {
        var _this

        _classCallCheck(this, PseudoHTMLDocument)

        _this = _super.call(this)
        var html = new _PseudoHTMLElement2.PseudoHTMLElement({
          tagName: 'html',
          parent: _assertThisInitialized(_this)
        })
        /**
     * Create document head element
     * @type {PseudoHTMLElement}
     */

        _this.head = new _PseudoHTMLElement2.PseudoHTMLElement({
          tagName: 'head',
          parent: html
        })
        /**
     * Create document body element
     * @type {PseudoHTMLElement}
     */

        _this.body = new _PseudoHTMLElement2.PseudoHTMLElement({
          tagName: 'body',
          parent: html
        })
        html.children = [_this.head, _this.body]
        /**
     * Create document child element
     * @type {PseudoHTMLElement[]}
     */

        _this.children = [html]
        return _this
      }
      /**
   * Create and return a PseudoHTMLElement
   * @param {string} tagName - Tag Name is a string representing the type of Dom element this represents
   * @returns {PseudoHTMLElement}
   */

      _createClass(PseudoHTMLDocument, [{
        key: 'createElement',
        value: function createElement () {
          var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div'
          var returnElement = new _PseudoHTMLElement2.PseudoHTMLElement({
            tagName: tagName
          })
          returnElement.parent = this
          return returnElement
        }
      }])

      return PseudoHTMLDocument
    }(_PseudoHTMLElement2.PseudoHTMLElement))

    exports.PseudoHTMLDocument = PseudoHTMLDocument
  }, { './PseudoHTMLElement': 9, 'core-js/modules/es.array.iterator.js': 110, 'core-js/modules/es.object.get-prototype-of.js': 117, 'core-js/modules/es.object.to-string.js': 119, 'core-js/modules/es.reflect.construct.js': 120, 'core-js/modules/es.string.iterator.js': 122, 'core-js/modules/es.symbol.description.js': 123, 'core-js/modules/es.symbol.iterator.js': 124, 'core-js/modules/es.symbol.js': 125, 'core-js/modules/web.dom-collections.iterator.js': 129 }],
  9: [function (require, module, exports) {
    'use strict'

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    require('core-js/modules/es.reflect.construct.js')

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PseudoHTMLElement = void 0

    require('core-js/modules/es.object.get-prototype-of.js')

    var _PseudoElement2 = require('./PseudoElement')

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function') } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass) }

    function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o }; return _setPrototypeOf(o, p) }

    function _createSuper (Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { var Super = _getPrototypeOf(Derived); var result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget) } else { result = Super.apply(this, arguments) } return _possibleConstructorReturn(this, result) } }

    function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call } return _assertThisInitialized(self) }

    function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return self }

    function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true } catch (e) { return false } }

    function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o) }; return _getPrototypeOf(o) }

    /**
 * Simulate the behaviour of the HTMLElement Class when there is no DOM available.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @class
 * @augments PseudoElement
 * @property {boolean} hidden - State of whether element is visible
 * @property {number} offsetHeight - The height of the element as offset by the parent element
 * @property {number} offsetLeft - The position of the left side of the element based on the parent element
 * @property {PseudoHTMLElement} offsetParent - A reference to the closest positioned parent element
 * @property {number} offsetTop - The position of the top side of the element based on the parent element
 * @property {number} offsetWidth - The width of the element as offset by the parent element
 * @property {Object} style - A container to define all applied inline-styles
 * @property {string} title - The title attribute which affects the text visible on hover
 */
    var PseudoHTMLElement = /* #__PURE__ */(function (_PseudoElement) {
      _inherits(PseudoHTMLElement, _PseudoElement)

      var _super = _createSuper(PseudoHTMLElement)

      /**
   * Simulate the HTMLELement object when the Dom is not available
   * @param {string} [tagName=''] - The
   * @param {PseudoNode|Object} [parent={}]
   * @param {Array} [children=[]]
   * @returns {PseudoHTMLElement}
   * @constructor
   */
      function PseudoHTMLElement () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
        var _ref$tagName = _ref.tagName
        var tagName = _ref$tagName === void 0 ? '' : _ref$tagName
        var _ref$parent = _ref.parent
        var parent = _ref$parent === void 0 ? {} : _ref$parent
        var _ref$children = _ref.children
        var children = _ref$children === void 0 ? [] : _ref$children

        _classCallCheck(this, PseudoHTMLElement)

        return _super.call(this, {
          tagName: tagName,
          attributes: [{
            name: 'hidden',
            value: false
          }, {
            name: 'offsetHeight',
            value: 0
          }, {
            name: 'offsetLeft',
            value: 0
          }, {
            name: 'offsetParent',
            value: null
          }, {
            name: 'offsetTop',
            value: 0
          }, {
            name: 'offsetWidth',
            value: 0
          }, {
            name: 'style',
            value: {}
          }, {
            name: 'title',
            value: ''
          }],
          parent: parent,
          children: children
        })
      }

      return PseudoHTMLElement
    }(_PseudoElement2.PseudoElement))

    exports.PseudoHTMLElement = PseudoHTMLElement
  }, { './PseudoElement': 4, 'core-js/modules/es.array.iterator.js': 110, 'core-js/modules/es.object.get-prototype-of.js': 117, 'core-js/modules/es.object.to-string.js': 119, 'core-js/modules/es.reflect.construct.js': 120, 'core-js/modules/es.string.iterator.js': 122, 'core-js/modules/es.symbol.description.js': 123, 'core-js/modules/es.symbol.iterator.js': 124, 'core-js/modules/es.symbol.js': 125, 'core-js/modules/web.dom-collections.iterator.js': 129 }],
  10: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.reflect.construct.js')

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.generateNode = exports.NodeFactory = exports.PseudoNode = void 0

    require('core-js/modules/es.function.name.js')

    require('core-js/modules/es.array.splice.js')

    require('core-js/modules/es.object.assign.js')

    require('core-js/modules/es.object.get-prototype-of.js')

    var _TreeLinker2 = require('../../collections/classes/TreeLinker')

    var _PseudoEventTarget2 = require('./PseudoEventTarget')

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    function _defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } }

    function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor }

    function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function') } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass) }

    function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o }; return _setPrototypeOf(o, p) }

    function _createSuper (Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { var Super = _getPrototypeOf(Derived); var result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget) } else { result = Super.apply(this, arguments) } return _possibleConstructorReturn(this, result) } }

    function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call } return _assertThisInitialized(self) }

    function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return self }

    function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true } catch (e) { return false } }

    function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o) }; return _getPrototypeOf(o) }

    /**
 * Simulate the behaviour of the Node Class when there is no DOM available.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @class
 * @augments PseudoEventTarget
 * @property {string} name
 * @property {function} appendChild
 * @property {function} removeChild
 */
    var PseudoNode = /* #__PURE__ */(function (_PseudoEventTarget) {
      _inherits(PseudoNode, _PseudoEventTarget)

      var _super = _createSuper(PseudoNode)

      /**
   *
   * @constructor
   */
      function PseudoNode () {
        var _this

        _classCallCheck(this, PseudoNode)

        _this = _super.call(this)
        _this.nodeValue = ''
        _this.textContext = ''
        _this.children = []
        _this.parent = undefined
        return _this
      }

      _createClass(PseudoNode, [{
        key: 'baseURI',
        get: function get () {
          return window.location || '/'
        }
      }, {
        key: 'childNodes',
        get: function get () {
          return this.children
        }
      }, {
        key: 'firstChild',
        get: function get () {
          return this.children[0]
        }
      }, {
        key: 'isConnected',
        get: function get () {
          return !!this.parent
        }
      }, {
        key: 'lastChild',
        get: function get () {
          return this.children[this.children.length - 1]
        }
      }, {
        key: 'nextSibling',
        get: function get () {
          return this.isConnected ? this.parent.children[this.parent.children.indexOf(this) + 1] : null
        }
      }, {
        key: 'nodeName',
        get: function get () {
          return this.name || ''
        }
      }, {
        key: 'nodeType',
        get: function get () {
          var typeName = 'DEFAULT_NODE'
          var nodeTypes = ['DEFAULT_NODE', 'ELEMENT_NODE', 'ATTRIBUTE_NODE', 'TEXT_NODE', 'CDATA_SECTION_NODE', 'ENTITY_REFERENCE_NODE', 'ENTITY_NODE', 'PROCESSING_INSTRUCTION_NODE', 'COMMENT_NODE', 'DOCUMENT_NODE', 'DOCUMENT_TYPE_NODE', 'DOCUMENT_FRAGMENT_NODE', 'NOTATION_NODE']
          return nodeTypes.indexOf(typeName)
        }
      }, {
        key: 'ownerDocument',
        get: function get () {
          return undefined
        }
      }, {
        key: 'parentNode',
        get: function get () {
          return this.parent
        }
      }, {
        key: 'parentElement',
        get: function get () {
          return this.parent.nodeType === 1 ? this.parent : null
        }
      }, {
        key: 'previousSibling',
        get: function get () {
          return this.isConnected ? this.parent.children[this.parent.children.indexOf(this) - 1] : null
        }
        /**
     *
     * @param {PseudoNode} childNode
     * @returns {PseudoNode}
     */

      }, {
        key: 'appendChild',
        value: function appendChild (childNode) {
          this.children.push(childNode)
          return childNode
        }
      }, {
        key: 'cloneNode',
        value: function cloneNode () {}
      }, {
        key: 'compareDocumentPosition',
        value: function compareDocumentPosition () {}
      }, {
        key: 'contains',
        value: function contains () {}
      }, {
        key: 'getRootNode',
        value: function getRootNode () {
          return this.parent.getRootNode() || this.parent
        }
      }, {
        key: 'hasChildNodes',
        value: function hasChildNodes () {
          return this.children.length > 0
        }
      }, {
        key: 'insertBefore',
        value: function insertBefore () {}
      }, {
        key: 'isDefaultNamespace',
        value: function isDefaultNamespace () {}
      }, {
        key: 'isEqualNode',
        value: function isEqualNode () {}
      }, {
        key: 'isSameNode',
        value: function isSameNode () {}
      }, {
        key: 'lookupPrefix',
        value: function lookupPrefix () {}
      }, {
        key: 'lookupNamespaceURI',
        value: function lookupNamespaceURI () {}
      }, {
        key: 'normalize',
        value: function normalize () {}
        /**
     *
     * @param {PseudoNode} childElement
     * @returns {PseudoNode}
     */

      }, {
        key: 'removeChild',
        value: function removeChild (childElement) {
          return this.children.splice(this.children.indexOf(childElement), 1)[0]
        }
      }, {
        key: 'replaceChild',
        value: function replaceChild () {}
      }])

      return PseudoNode
    }(_PseudoEventTarget2.PseudoEventTarget))

    exports.PseudoNode = PseudoNode

    var NodeFactory = /* #__PURE__ */(function (_TreeLinker) {
      _inherits(NodeFactory, _TreeLinker)

      var _super2 = _createSuper(NodeFactory)

      function NodeFactory () {
        _classCallCheck(this, NodeFactory)

        return _super2.apply(this, arguments)
      }

      return NodeFactory
    }(_TreeLinker2.TreeLinker))

    exports.NodeFactory = NodeFactory

    var generateNode = function generateNode () {
      NodeFactory.fromArray = function () {
        var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
        var LinkerClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NodeFactory
        return values.reduce(function (list, element) {
          if (_typeof(element) !== 'object') {
            element = {
              data: element
            }
          }

          var newList = false

          if (list === null) {
            newList = true
            list = new LinkerClass(Object.assign({}, element, {
              prev: list
            }))
          }
          /**
       * Simulate the behaviour of the Node Class when there is no DOM available.
       * @author Joshua Heagle <joshuaheagle@gmail.com>
       * @class
       * @augments PseudoEventTarget
       * @property {string} name
       * @property {function} appendChild
       * @property {function} removeChild
       */

          var PseudoNodeAttached = /* #__PURE__ */(function (_PseudoNode) {
            _inherits(PseudoNodeAttached, _PseudoNode)

            var _super3 = _createSuper(PseudoNodeAttached)

            /**
         *
         * @constructor
         */
            function PseudoNodeAttached () {
              var _this2

              _classCallCheck(this, PseudoNodeAttached)

              _this2 = _super3.call(this)
              _this2.nodeValue = element.data
              _this2.textContext = ''
              return _this2
            }

            _createClass(PseudoNodeAttached, [{
              key: 'baseURI',
              get: function get () {
                return window.location || '/'
              }
            }, {
              key: 'childNodes',
              get: function get () {
                return list.children
              }
            }, {
              key: 'firstChild',
              get: function get () {
                return list.children.first.data
              }
            }, {
              key: 'isConnected',
              get: function get () {
                return list.parent !== null
              }
            }, {
              key: 'lastChild',
              get: function get () {
                return list.children.last.data
              }
            }, {
              key: 'nextSibling',
              get: function get () {
                return list.next.data
              }
            }, {
              key: 'nodeName',
              get: function get () {
                return this.name || ''
              }
            }, {
              key: 'nodeType',
              get: function get () {
                var typeName = 'DEFAULT_NODE'
                var nodeTypes = ['DEFAULT_NODE', 'ELEMENT_NODE', 'ATTRIBUTE_NODE', 'TEXT_NODE', 'CDATA_SECTION_NODE', 'ENTITY_REFERENCE_NODE', 'ENTITY_NODE', 'PROCESSING_INSTRUCTION_NODE', 'COMMENT_NODE', 'DOCUMENT_NODE', 'DOCUMENT_TYPE_NODE', 'DOCUMENT_FRAGMENT_NODE', 'NOTATION_NODE']
                return nodeTypes.indexOf(typeName)
              }
            }, {
              key: 'ownerDocument',
              get: function get () {
                return list.rootParent
              }
            }, {
              key: 'parentNode',
              get: function get () {
                return list.parent
              }
            }, {
              key: 'parentElement',
              get: function get () {
                return list.parent.nodeType === 1 ? list.parent : null
              }
            }, {
              key: 'previousSibling',
              get: function get () {
                return list.prev
              }
              /**
           *
           * @param {PseudoNode} childNode
           * @returns {PseudoNode}
           */

            }, {
              key: 'appendChild',
              value: function appendChild (childNode) {
                list.after(list, [childNode])
                return childNode
              }
            }, {
              key: 'cloneNode',
              value: function cloneNode () {}
            }, {
              key: 'compareDocumentPosition',
              value: function compareDocumentPosition () {}
            }, {
              key: 'contains',
              value: function contains () {}
            }, {
              key: 'getRootNode',
              value: function getRootNode () {
                return list.rootParent
              }
            }, {
              key: 'hasChildNodes',
              value: function hasChildNodes () {}
            }, {
              key: 'insertBefore',
              value: function insertBefore () {}
            }, {
              key: 'isDefaultNamespace',
              value: function isDefaultNamespace () {}
            }, {
              key: 'isEqualNode',
              value: function isEqualNode () {}
            }, {
              key: 'isSameNode',
              value: function isSameNode () {}
            }, {
              key: 'lookupPrefix',
              value: function lookupPrefix () {}
            }, {
              key: 'lookupNamespaceURI',
              value: function lookupNamespaceURI () {}
            }, {
              key: 'normalize',
              value: function normalize () {}
              /**
           *
           * @param {PseudoNode} childElement
           * @returns {PseudoNode}
           */

            }, {
              key: 'removeChild',
              value: function removeChild (childElement) {
                return this.children.splice(this.children.indexOf(childElement), 1)[0]
              }
            }, {
              key: 'replaceChild',
              value: function replaceChild () {}
            }])

            return PseudoNodeAttached
          }(PseudoNode))

          if (newList) {
            list.data = new PseudoNodeAttached()
            return list
          }

          element.data = new PseudoNodeAttached()
          return _TreeLinker2.TreeLinker.prototype.after.apply(list, [element])
        }, null)
      }

      return NodeFactory
    }

    exports.generateNode = generateNode
  }, { '../../collections/classes/TreeLinker': 2, './PseudoEventTarget': 7, 'core-js/modules/es.array.iterator.js': 110, 'core-js/modules/es.array.splice.js': 113, 'core-js/modules/es.function.name.js': 114, 'core-js/modules/es.object.assign.js': 115, 'core-js/modules/es.object.get-prototype-of.js': 117, 'core-js/modules/es.object.to-string.js': 119, 'core-js/modules/es.reflect.construct.js': 120, 'core-js/modules/es.string.iterator.js': 122, 'core-js/modules/es.symbol.description.js': 123, 'core-js/modules/es.symbol.iterator.js': 124, 'core-js/modules/es.symbol.js': 125, 'core-js/modules/web.dom-collections.iterator.js': 129 }],
  11: [function (require, module, exports) {
    (function (global) {
      (function () {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = void 0

        require('core-js/modules/es.object.assign.js')

        var _all = _interopRequireDefault(require('./all'))

        function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

        /**
 * @file All of the Pseudo Dom Helper Objects functions for simulating parts of the DOM when running scripts in NodeJs.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
*/

        /**
   * Store a reference to this scope which will be Window if rendered via browser
   */
        var root = void 0 || window || global || {}
        /**
   * Store reference to any pre-existing module of the same name
   * @type {module|*}
   */

        var previousPseudoDom = root.pseudoDom || {}
        /**
   * All methods exported from this module are encapsulated within pseudoDom.
   * @author Joshua Heagle <joshuaheagle@gmail.com>
   * @typedef {Object} pseudoDom
   * @module pseudoDom/objects
   */

        var pseudoDom = {}
        root.pseudoDom = pseudoDom
        /**
   * Return a reference to this library while preserving the original same-named library
   * @function noConflict
   * @returns {pseudoDom}
   */

        pseudoDom.noConflict = function () {
          root.pseudoDom = previousPseudoDom
          return pseudoDom
        }

        var _default = Object.assign(pseudoDom, _all.default)

        exports.default = _default
      }).call(this)
    }).call(this, typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {})
  }, { './all': 3, 'core-js/modules/es.object.assign.js': 115 }],
  12: [function (require, module, exports) {
    module.exports = function (it) {
      if (typeof it !== 'function') {
        throw TypeError(String(it) + ' is not a function')
      } return it
    }
  }, {}],
  13: [function (require, module, exports) {
    var isObject = require('../internals/is-object')

    module.exports = function (it) {
      if (!isObject(it) && it !== null) {
        throw TypeError("Can't set " + String(it) + ' as a prototype')
      } return it
    }
  }, { '../internals/is-object': 64 }],
  14: [function (require, module, exports) {
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var create = require('../internals/object-create')
    var definePropertyModule = require('../internals/object-define-property')

    var UNSCOPABLES = wellKnownSymbol('unscopables')
    var ArrayPrototype = Array.prototype

    // Array.prototype[@@unscopables]
    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    if (ArrayPrototype[UNSCOPABLES] == undefined) {
      definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: create(null)
      })
    }

    // add a key to Array.prototype[@@unscopables]
    module.exports = function (key) {
      ArrayPrototype[UNSCOPABLES][key] = true
    }
  }, { '../internals/object-create': 73, '../internals/object-define-property': 75, '../internals/well-known-symbol': 107 }],
  15: [function (require, module, exports) {
    module.exports = function (it, Constructor, name) {
      if (!(it instanceof Constructor)) {
        throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation')
      } return it
    }
  }, {}],
  16: [function (require, module, exports) {
    var isObject = require('../internals/is-object')

    module.exports = function (it) {
      if (!isObject(it)) {
        throw TypeError(String(it) + ' is not an object')
      } return it
    }
  }, { '../internals/is-object': 64 }],
  17: [function (require, module, exports) {
    'use strict'
    var $forEach = require('../internals/array-iteration').forEach
    var arrayMethodIsStrict = require('../internals/array-method-is-strict')

    var STRICT_METHOD = arrayMethodIsStrict('forEach')

    // `Array.prototype.forEach` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    module.exports = !STRICT_METHOD ? function forEach (callbackfn /* , thisArg */) {
      return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
    } : [].forEach
  }, { '../internals/array-iteration': 19, '../internals/array-method-is-strict': 21 }],
  18: [function (require, module, exports) {
    var toIndexedObject = require('../internals/to-indexed-object')
    var toLength = require('../internals/to-length')
    var toAbsoluteIndex = require('../internals/to-absolute-index')

    // `Array.prototype.{ indexOf, includes }` methods implementation
    var createMethod = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIndexedObject($this)
        var length = toLength(O.length)
        var index = toAbsoluteIndex(fromIndex, length)
        var value
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) {
          while (length > index) {
            value = O[index++]
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true
          // Array#indexOf ignores holes, Array#includes - not
          }
        } else {
          for (;length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0
          }
        } return !IS_INCLUDES && -1
      }
    }

    module.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    }
  }, { '../internals/to-absolute-index': 97, '../internals/to-indexed-object': 98, '../internals/to-length': 100 }],
  19: [function (require, module, exports) {
    var bind = require('../internals/function-bind-context')
    var IndexedObject = require('../internals/indexed-object')
    var toObject = require('../internals/to-object')
    var toLength = require('../internals/to-length')
    var arraySpeciesCreate = require('../internals/array-species-create')

    var push = [].push

    // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
    var createMethod = function (TYPE) {
      var IS_MAP = TYPE == 1
      var IS_FILTER = TYPE == 2
      var IS_SOME = TYPE == 3
      var IS_EVERY = TYPE == 4
      var IS_FIND_INDEX = TYPE == 6
      var IS_FILTER_OUT = TYPE == 7
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX
      return function ($this, callbackfn, that, specificCreate) {
        var O = toObject($this)
        var self = IndexedObject(O)
        var boundFunction = bind(callbackfn, that, 3)
        var length = toLength(self.length)
        var index = 0
        var create = specificCreate || arraySpeciesCreate
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined
        var value, result
        for (;length > index; index++) {
          if (NO_HOLES || index in self) {
            value = self[index]
            result = boundFunction(value, index, O)
            if (TYPE) {
              if (IS_MAP) target[index] = result // map
              else if (result) {
                switch (TYPE) {
                  case 3: return true // some
                  case 5: return value // find
                  case 6: return index // findIndex
                  case 2: push.call(target, value) // filter
                }
              } else {
                switch (TYPE) {
                  case 4: return false // every
                  case 7: push.call(target, value) // filterOut
                }
              }
            }
          }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target
      }
    }

    module.exports = {
      // `Array.prototype.forEach` method
      // https://tc39.es/ecma262/#sec-array.prototype.foreach
      forEach: createMethod(0),
      // `Array.prototype.map` method
      // https://tc39.es/ecma262/#sec-array.prototype.map
      map: createMethod(1),
      // `Array.prototype.filter` method
      // https://tc39.es/ecma262/#sec-array.prototype.filter
      filter: createMethod(2),
      // `Array.prototype.some` method
      // https://tc39.es/ecma262/#sec-array.prototype.some
      some: createMethod(3),
      // `Array.prototype.every` method
      // https://tc39.es/ecma262/#sec-array.prototype.every
      every: createMethod(4),
      // `Array.prototype.find` method
      // https://tc39.es/ecma262/#sec-array.prototype.find
      find: createMethod(5),
      // `Array.prototype.findIndex` method
      // https://tc39.es/ecma262/#sec-array.prototype.findIndex
      findIndex: createMethod(6),
      // `Array.prototype.filterOut` method
      // https://github.com/tc39/proposal-array-filtering
      filterOut: createMethod(7)
    }
  }, { '../internals/array-species-create': 22, '../internals/function-bind-context': 47, '../internals/indexed-object': 56, '../internals/to-length': 100, '../internals/to-object': 101 }],
  20: [function (require, module, exports) {
    var fails = require('../internals/fails')
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var V8_VERSION = require('../internals/engine-v8-version')

    var SPECIES = wellKnownSymbol('species')

    module.exports = function (METHOD_NAME) {
      // We can't use this feature detection in V8 since it causes
      // deoptimization and serious performance degradation
      // https://github.com/zloirock/core-js/issues/677
      return V8_VERSION >= 51 || !fails(function () {
        var array = []
        var constructor = array.constructor = {}
        constructor[SPECIES] = function () {
          return { foo: 1 }
        }
        return array[METHOD_NAME](Boolean).foo !== 1
      })
    }
  }, { '../internals/engine-v8-version': 42, '../internals/fails': 45, '../internals/well-known-symbol': 107 }],
  21: [function (require, module, exports) {
    'use strict'
    var fails = require('../internals/fails')

    module.exports = function (METHOD_NAME, argument) {
      var method = [][METHOD_NAME]
      return !!method && fails(function () {
        // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
        method.call(null, argument || function () { throw 1 }, 1)
      })
    }
  }, { '../internals/fails': 45 }],
  22: [function (require, module, exports) {
    var isObject = require('../internals/is-object')
    var isArray = require('../internals/is-array')
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var SPECIES = wellKnownSymbol('species')

    // `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    module.exports = function (originalArray, length) {
      var C
      if (isArray(originalArray)) {
        C = originalArray.constructor
        // cross-realm fallback
        if (typeof C === 'function' && (C === Array || isArray(C.prototype))) C = undefined
        else if (isObject(C)) {
          C = C[SPECIES]
          if (C === null) C = undefined
        }
      } return new (C === undefined ? Array : C)(length === 0 ? 0 : length)
    }
  }, { '../internals/is-array': 62, '../internals/is-object': 64, '../internals/well-known-symbol': 107 }],
  23: [function (require, module, exports) {
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var ITERATOR = wellKnownSymbol('iterator')
    var SAFE_CLOSING = false

    try {
      var called = 0
      var iteratorWithReturn = {
        next: function () {
          return { done: !!called++ }
        },
        return: function () {
          SAFE_CLOSING = true
        }
      }
      iteratorWithReturn[ITERATOR] = function () {
        return this
      }
      // eslint-disable-next-line no-throw-literal -- required for testing
      Array.from(iteratorWithReturn, function () { throw 2 })
    } catch (error) { /* empty */ }

    module.exports = function (exec, SKIP_CLOSING) {
      if (!SKIP_CLOSING && !SAFE_CLOSING) return false
      var ITERATION_SUPPORT = false
      try {
        var object = {}
        object[ITERATOR] = function () {
          return {
            next: function () {
              return { done: ITERATION_SUPPORT = true }
            }
          }
        }
        exec(object)
      } catch (error) { /* empty */ }
      return ITERATION_SUPPORT
    }
  }, { '../internals/well-known-symbol': 107 }],
  24: [function (require, module, exports) {
    var toString = {}.toString

    module.exports = function (it) {
      return toString.call(it).slice(8, -1)
    }
  }, {}],
  25: [function (require, module, exports) {
    var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support')
    var classofRaw = require('../internals/classof-raw')
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var TO_STRING_TAG = wellKnownSymbol('toStringTag')
    // ES3 wrong here
    var CORRECT_ARGUMENTS = classofRaw(function () { return arguments }()) == 'Arguments'

    // fallback for IE11 Script Access Denied error
    var tryGet = function (it, key) {
      try {
        return it[key]
      } catch (error) { /* empty */ }
    }

    // getting tag from ES6+ `Object.prototype.toString`
    module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
      var O, tag, result
      return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
        : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) === 'string' ? tag
        // builtinTag case
          : CORRECT_ARGUMENTS ? classofRaw(O)
          // ES3 arguments fallback
            : (result = classofRaw(O)) == 'Object' && typeof O.callee === 'function' ? 'Arguments' : result
    }
  }, { '../internals/classof-raw': 24, '../internals/to-string-tag-support': 103, '../internals/well-known-symbol': 107 }],
  26: [function (require, module, exports) {
    'use strict'
    var anObject = require('../internals/an-object')
    var aFunction = require('../internals/a-function')

    // https://github.com/tc39/collection-methods
    module.exports = function (/* ...elements */) {
      var collection = anObject(this)
      var remover = aFunction(collection.delete)
      var allDeleted = true
      var wasDeleted
      for (var k = 0, len = arguments.length; k < len; k++) {
        wasDeleted = remover.call(collection, arguments[k])
        allDeleted = allDeleted && wasDeleted
      }
      return !!allDeleted
    }
  }, { '../internals/a-function': 12, '../internals/an-object': 16 }],
  27: [function (require, module, exports) {
    'use strict'
    var redefineAll = require('../internals/redefine-all')
    var getWeakData = require('../internals/internal-metadata').getWeakData
    var anObject = require('../internals/an-object')
    var isObject = require('../internals/is-object')
    var anInstance = require('../internals/an-instance')
    var iterate = require('../internals/iterate')
    var ArrayIterationModule = require('../internals/array-iteration')
    var $has = require('../internals/has')
    var InternalStateModule = require('../internals/internal-state')

    var setInternalState = InternalStateModule.set
    var internalStateGetterFor = InternalStateModule.getterFor
    var find = ArrayIterationModule.find
    var findIndex = ArrayIterationModule.findIndex
    var id = 0

    // fallback for uncaught frozen keys
    var uncaughtFrozenStore = function (store) {
      return store.frozen || (store.frozen = new UncaughtFrozenStore())
    }

    var UncaughtFrozenStore = function () {
      this.entries = []
    }

    var findUncaughtFrozen = function (store, key) {
      return find(store.entries, function (it) {
        return it[0] === key
      })
    }

    UncaughtFrozenStore.prototype = {
      get: function (key) {
        var entry = findUncaughtFrozen(this, key)
        if (entry) return entry[1]
      },
      has: function (key) {
        return !!findUncaughtFrozen(this, key)
      },
      set: function (key, value) {
        var entry = findUncaughtFrozen(this, key)
        if (entry) entry[1] = value
        else this.entries.push([key, value])
      },
      delete: function (key) {
        var index = findIndex(this.entries, function (it) {
          return it[0] === key
        })
        if (~index) this.entries.splice(index, 1)
        return !!~index
      }
    }

    module.exports = {
      getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, CONSTRUCTOR_NAME)
          setInternalState(that, {
            type: CONSTRUCTOR_NAME,
            id: id++,
            frozen: undefined
          })
          if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP })
        })

        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME)

        var define = function (that, key, value) {
          var state = getInternalState(that)
          var data = getWeakData(anObject(key), true)
          if (data === true) uncaughtFrozenStore(state).set(key, value)
          else data[state.id] = value
          return that
        }

        redefineAll(C.prototype, {
          // 23.3.3.2 WeakMap.prototype.delete(key)
          // 23.4.3.3 WeakSet.prototype.delete(value)
          delete: function (key) {
            var state = getInternalState(this)
            if (!isObject(key)) return false
            var data = getWeakData(key)
            if (data === true) return uncaughtFrozenStore(state).delete(key)
            return data && $has(data, state.id) && delete data[state.id]
          },
          // 23.3.3.4 WeakMap.prototype.has(key)
          // 23.4.3.4 WeakSet.prototype.has(value)
          has: function has (key) {
            var state = getInternalState(this)
            if (!isObject(key)) return false
            var data = getWeakData(key)
            if (data === true) return uncaughtFrozenStore(state).has(key)
            return data && $has(data, state.id)
          }
        })

        redefineAll(C.prototype, IS_MAP ? {
          // 23.3.3.3 WeakMap.prototype.get(key)
          get: function get (key) {
            var state = getInternalState(this)
            if (isObject(key)) {
              var data = getWeakData(key)
              if (data === true) return uncaughtFrozenStore(state).get(key)
              return data ? data[state.id] : undefined
            }
          },
          // 23.3.3.5 WeakMap.prototype.set(key, value)
          set: function set (key, value) {
            return define(this, key, value)
          }
        } : {
          // 23.4.3.1 WeakSet.prototype.add(value)
          add: function add (value) {
            return define(this, value, true)
          }
        })

        return C
      }
    }
  }, { '../internals/an-instance': 15, '../internals/an-object': 16, '../internals/array-iteration': 19, '../internals/has': 52, '../internals/internal-metadata': 59, '../internals/internal-state': 60, '../internals/is-object': 64, '../internals/iterate': 66, '../internals/redefine-all': 88 }],
  28: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var global = require('../internals/global')
    var isForced = require('../internals/is-forced')
    var redefine = require('../internals/redefine')
    var InternalMetadataModule = require('../internals/internal-metadata')
    var iterate = require('../internals/iterate')
    var anInstance = require('../internals/an-instance')
    var isObject = require('../internals/is-object')
    var fails = require('../internals/fails')
    var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration')
    var setToStringTag = require('../internals/set-to-string-tag')
    var inheritIfRequired = require('../internals/inherit-if-required')

    module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
      var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1
      var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1
      var ADDER = IS_MAP ? 'set' : 'add'
      var NativeConstructor = global[CONSTRUCTOR_NAME]
      var NativePrototype = NativeConstructor && NativeConstructor.prototype
      var Constructor = NativeConstructor
      var exported = {}

      var fixMethod = function (KEY) {
        var nativeMethod = NativePrototype[KEY]
        redefine(NativePrototype, KEY,
          KEY == 'add' ? function add (value) {
            nativeMethod.call(this, value === 0 ? 0 : value)
            return this
          } : KEY == 'delete' ? function (key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key)
          } : KEY == 'get' ? function get (key) {
            return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key)
          } : KEY == 'has' ? function has (key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key)
          } : function set (key, value) {
            nativeMethod.call(this, key === 0 ? 0 : key, value)
            return this
          }
        )
      }

      var REPLACE = isForced(
        CONSTRUCTOR_NAME,
        typeof NativeConstructor !== 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
          new NativeConstructor().entries().next()
        }))
      )

      if (REPLACE) {
        // create collection constructor
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER)
        InternalMetadataModule.REQUIRED = true
      } else if (isForced(CONSTRUCTOR_NAME, true)) {
        var instance = new Constructor()
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
        // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1) })
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        // eslint-disable-next-line no-new -- required for testing
        var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable) })
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new NativeConstructor()
          var index = 5
          while (index--) $instance[ADDER](index, index)
          return !$instance.has(-0)
        })

        if (!ACCEPT_ITERABLES) {
          Constructor = wrapper(function (dummy, iterable) {
            anInstance(dummy, Constructor, CONSTRUCTOR_NAME)
            var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor)
            if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP })
            return that
          })
          Constructor.prototype = NativePrototype
          NativePrototype.constructor = Constructor
        }

        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete')
          fixMethod('has')
          IS_MAP && fixMethod('get')
        }

        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER)

        // weak collections should not contains .clear method
        if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear
      }

      exported[CONSTRUCTOR_NAME] = Constructor
      $({ global: true, forced: Constructor != NativeConstructor }, exported)

      setToStringTag(Constructor, CONSTRUCTOR_NAME)

      if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP)

      return Constructor
    }
  }, { '../internals/an-instance': 15, '../internals/check-correctness-of-iteration': 23, '../internals/export': 44, '../internals/fails': 45, '../internals/global': 51, '../internals/inherit-if-required': 57, '../internals/internal-metadata': 59, '../internals/is-forced': 63, '../internals/is-object': 64, '../internals/iterate': 66, '../internals/redefine': 89, '../internals/set-to-string-tag': 92 }],
  29: [function (require, module, exports) {
    var has = require('../internals/has')
    var ownKeys = require('../internals/own-keys')
    var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')
    var definePropertyModule = require('../internals/object-define-property')

    module.exports = function (target, source) {
      var keys = ownKeys(source)
      var defineProperty = definePropertyModule.f
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i]
        if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key))
      }
    }
  }, { '../internals/has': 52, '../internals/object-define-property': 75, '../internals/object-get-own-property-descriptor': 76, '../internals/own-keys': 86 }],
  30: [function (require, module, exports) {
    var fails = require('../internals/fails')

    module.exports = !fails(function () {
      function F () { /* empty */ }
      F.prototype.constructor = null
      return Object.getPrototypeOf(new F()) !== F.prototype
    })
  }, { '../internals/fails': 45 }],
  31: [function (require, module, exports) {
    'use strict'
    var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype
    var create = require('../internals/object-create')
    var createPropertyDescriptor = require('../internals/create-property-descriptor')
    var setToStringTag = require('../internals/set-to-string-tag')
    var Iterators = require('../internals/iterators')

    var returnThis = function () { return this }

    module.exports = function (IteratorConstructor, NAME, next) {
      var TO_STRING_TAG = NAME + ' Iterator'
      IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) })
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true)
      Iterators[TO_STRING_TAG] = returnThis
      return IteratorConstructor
    }
  }, { '../internals/create-property-descriptor': 33, '../internals/iterators': 69, '../internals/iterators-core': 68, '../internals/object-create': 73, '../internals/set-to-string-tag': 92 }],
  32: [function (require, module, exports) {
    var DESCRIPTORS = require('../internals/descriptors')
    var definePropertyModule = require('../internals/object-define-property')
    var createPropertyDescriptor = require('../internals/create-property-descriptor')

    module.exports = DESCRIPTORS ? function (object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value))
    } : function (object, key, value) {
      object[key] = value
      return object
    }
  }, { '../internals/create-property-descriptor': 33, '../internals/descriptors': 37, '../internals/object-define-property': 75 }],
  33: [function (require, module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      }
    }
  }, {}],
  34: [function (require, module, exports) {
    'use strict'
    var toPrimitive = require('../internals/to-primitive')
    var definePropertyModule = require('../internals/object-define-property')
    var createPropertyDescriptor = require('../internals/create-property-descriptor')

    module.exports = function (object, key, value) {
      var propertyKey = toPrimitive(key)
      if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value))
      else object[propertyKey] = value
    }
  }, { '../internals/create-property-descriptor': 33, '../internals/object-define-property': 75, '../internals/to-primitive': 102 }],
  35: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var createIteratorConstructor = require('../internals/create-iterator-constructor')
    var getPrototypeOf = require('../internals/object-get-prototype-of')
    var setPrototypeOf = require('../internals/object-set-prototype-of')
    var setToStringTag = require('../internals/set-to-string-tag')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    var redefine = require('../internals/redefine')
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var IS_PURE = require('../internals/is-pure')
    var Iterators = require('../internals/iterators')
    var IteratorsCore = require('../internals/iterators-core')

    var IteratorPrototype = IteratorsCore.IteratorPrototype
    var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS
    var ITERATOR = wellKnownSymbol('iterator')
    var KEYS = 'keys'
    var VALUES = 'values'
    var ENTRIES = 'entries'

    var returnThis = function () { return this }

    module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next)

      var getIterationMethod = function (KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND]
        switch (KIND) {
          case KEYS: return function keys () { return new IteratorConstructor(this, KIND) }
          case VALUES: return function values () { return new IteratorConstructor(this, KIND) }
          case ENTRIES: return function entries () { return new IteratorConstructor(this, KIND) }
        } return function () { return new IteratorConstructor(this) }
      }

      var TO_STRING_TAG = NAME + ' Iterator'
      var INCORRECT_VALUES_NAME = false
      var IterablePrototype = Iterable.prototype
      var nativeIterator = IterablePrototype[ITERATOR] ||
    IterablePrototype['@@iterator'] ||
    DEFAULT && IterablePrototype[DEFAULT]
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT)
      var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator
      var CurrentIteratorPrototype, methods, KEY

      // fix native
      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()))
        if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype)
            } else if (typeof CurrentIteratorPrototype[ITERATOR] !== 'function') {
              createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis)
            }
          }
          // Set @@toStringTag to native iterators
          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true)
          if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis
        }
      }

      // fix Array#{values, @@iterator}.name in V8 / FF
      if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        INCORRECT_VALUES_NAME = true
        defaultIterator = function values () { return nativeIterator.call(this) }
      }

      // define iterator
      if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
        createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator)
      }
      Iterators[NAME] = defaultIterator

      // export additional methods
      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        }
        if (FORCED) {
          for (KEY in methods) {
            if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
              redefine(IterablePrototype, KEY, methods[KEY])
            }
          }
        } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods)
      }

      return methods
    }
  }, { '../internals/create-iterator-constructor': 31, '../internals/create-non-enumerable-property': 32, '../internals/export': 44, '../internals/is-pure': 65, '../internals/iterators': 69, '../internals/iterators-core': 68, '../internals/object-get-prototype-of': 80, '../internals/object-set-prototype-of': 84, '../internals/redefine': 89, '../internals/set-to-string-tag': 92, '../internals/well-known-symbol': 107 }],
  36: [function (require, module, exports) {
    var path = require('../internals/path')
    var has = require('../internals/has')
    var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped')
    var defineProperty = require('../internals/object-define-property').f

    module.exports = function (NAME) {
      var Symbol = path.Symbol || (path.Symbol = {})
      if (!has(Symbol, NAME)) {
        defineProperty(Symbol, NAME, {
          value: wrappedWellKnownSymbolModule.f(NAME)
        })
      }
    }
  }, { '../internals/has': 52, '../internals/object-define-property': 75, '../internals/path': 87, '../internals/well-known-symbol-wrapped': 106 }],
  37: [function (require, module, exports) {
    var fails = require('../internals/fails')

    // Detect IE8's incomplete defineProperty implementation
    module.exports = !fails(function () {
      return Object.defineProperty({}, 1, { get: function () { return 7 } })[1] != 7
    })
  }, { '../internals/fails': 45 }],
  38: [function (require, module, exports) {
    var global = require('../internals/global')
    var isObject = require('../internals/is-object')

    var document = global.document
    // typeof document.createElement is 'object' in old IE
    var EXISTS = isObject(document) && isObject(document.createElement)

    module.exports = function (it) {
      return EXISTS ? document.createElement(it) : {}
    }
  }, { '../internals/global': 51, '../internals/is-object': 64 }],
  39: [function (require, module, exports) {
    // iterable DOM collections
    // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
    module.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    }
  }, {}],
  40: [function (require, module, exports) {
    var classof = require('../internals/classof-raw')
    var global = require('../internals/global')

    module.exports = classof(global.process) == 'process'
  }, { '../internals/classof-raw': 24, '../internals/global': 51 }],
  41: [function (require, module, exports) {
    var getBuiltIn = require('../internals/get-built-in')

    module.exports = getBuiltIn('navigator', 'userAgent') || ''
  }, { '../internals/get-built-in': 49 }],
  42: [function (require, module, exports) {
    var global = require('../internals/global')
    var userAgent = require('../internals/engine-user-agent')

    var process = global.process
    var versions = process && process.versions
    var v8 = versions && versions.v8
    var match, version

    if (v8) {
      match = v8.split('.')
      version = match[0] + match[1]
    } else if (userAgent) {
      match = userAgent.match(/Edge\/(\d+)/)
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/)
        if (match) version = match[1]
      }
    }

    module.exports = version && +version
  }, { '../internals/engine-user-agent': 41, '../internals/global': 51 }],
  43: [function (require, module, exports) {
    // IE8- don't enum bug keys
    module.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ]
  }, {}],
  44: [function (require, module, exports) {
    var global = require('../internals/global')
    var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    var redefine = require('../internals/redefine')
    var setGlobal = require('../internals/set-global')
    var copyConstructorProperties = require('../internals/copy-constructor-properties')
    var isForced = require('../internals/is-forced')

    /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
    module.exports = function (options, source) {
      var TARGET = options.target
      var GLOBAL = options.global
      var STATIC = options.stat
      var FORCED, target, key, targetProperty, sourceProperty, descriptor
      if (GLOBAL) {
        target = global
      } else if (STATIC) {
        target = global[TARGET] || setGlobal(TARGET, {})
      } else {
        target = (global[TARGET] || {}).prototype
      }
      if (target) {
        for (key in source) {
          sourceProperty = source[key]
          if (options.noTargetGet) {
            descriptor = getOwnPropertyDescriptor(target, key)
            targetProperty = descriptor && descriptor.value
          } else targetProperty = target[key]
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced)
          // contained in target
          if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty === typeof targetProperty) continue
            copyConstructorProperties(sourceProperty, targetProperty)
          }
          // add a flag to not completely full polyfills
          if (options.sham || (targetProperty && targetProperty.sham)) {
            createNonEnumerableProperty(sourceProperty, 'sham', true)
          }
          // extend global
          redefine(target, key, sourceProperty, options)
        }
      }
    }
  }, { '../internals/copy-constructor-properties': 29, '../internals/create-non-enumerable-property': 32, '../internals/global': 51, '../internals/is-forced': 63, '../internals/object-get-own-property-descriptor': 76, '../internals/redefine': 89, '../internals/set-global': 91 }],
  45: [function (require, module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec()
      } catch (error) {
        return true
      }
    }
  }, {}],
  46: [function (require, module, exports) {
    var fails = require('../internals/fails')

    module.exports = !fails(function () {
      return Object.isExtensible(Object.preventExtensions({}))
    })
  }, { '../internals/fails': 45 }],
  47: [function (require, module, exports) {
    var aFunction = require('../internals/a-function')

    // optional / simple context binding
    module.exports = function (fn, that, length) {
      aFunction(fn)
      if (that === undefined) return fn
      switch (length) {
        case 0: return function () {
          return fn.call(that)
        }
        case 1: return function (a) {
          return fn.call(that, a)
        }
        case 2: return function (a, b) {
          return fn.call(that, a, b)
        }
        case 3: return function (a, b, c) {
          return fn.call(that, a, b, c)
        }
      }
      return function (/* ...args */) {
        return fn.apply(that, arguments)
      }
    }
  }, { '../internals/a-function': 12 }],
  48: [function (require, module, exports) {
    'use strict'
    var aFunction = require('../internals/a-function')
    var isObject = require('../internals/is-object')

    var slice = [].slice
    var factories = {}

    var construct = function (C, argsLength, args) {
      if (!(argsLength in factories)) {
        for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']'
        // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
        factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')')
      } return factories[argsLength](C, args)
    }

    // `Function.prototype.bind` method implementation
    // https://tc39.es/ecma262/#sec-function.prototype.bind
    module.exports = Function.bind || function bind (that /* , ...args */) {
      var fn = aFunction(this)
      var partArgs = slice.call(arguments, 1)
      var boundFunction = function bound (/* args... */) {
        var args = partArgs.concat(slice.call(arguments))
        return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args)
      }
      if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype
      return boundFunction
    }
  }, { '../internals/a-function': 12, '../internals/is-object': 64 }],
  49: [function (require, module, exports) {
    var path = require('../internals/path')
    var global = require('../internals/global')

    var aFunction = function (variable) {
      return typeof variable === 'function' ? variable : undefined
    }

    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
        : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method]
    }
  }, { '../internals/global': 51, '../internals/path': 87 }],
  50: [function (require, module, exports) {
    var classof = require('../internals/classof')
    var Iterators = require('../internals/iterators')
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var ITERATOR = wellKnownSymbol('iterator')

    module.exports = function (it) {
      if (it != undefined) {
        return it[ITERATOR] ||
    it['@@iterator'] ||
    Iterators[classof(it)]
      }
    }
  }, { '../internals/classof': 25, '../internals/iterators': 69, '../internals/well-known-symbol': 107 }],
  51: [function (require, module, exports) {
    (function (global) {
      (function () {
        var check = function (it) {
          return it && it.Math == Math && it
        }

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports =
  /* global globalThis -- safe */
  check(typeof globalThis === 'object' && globalThis) ||
  check(typeof window === 'object' && window) ||
  check(typeof self === 'object' && self) ||
  check(typeof global === 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this })() || Function('return this')()
      }).call(this)
    }).call(this, typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {})
  }, {}],
  52: [function (require, module, exports) {
    var hasOwnProperty = {}.hasOwnProperty

    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key)
    }
  }, {}],
  53: [function (require, module, exports) {
    module.exports = {}
  }, {}],
  54: [function (require, module, exports) {
    var getBuiltIn = require('../internals/get-built-in')

    module.exports = getBuiltIn('document', 'documentElement')
  }, { '../internals/get-built-in': 49 }],
  55: [function (require, module, exports) {
    var DESCRIPTORS = require('../internals/descriptors')
    var fails = require('../internals/fails')
    var createElement = require('../internals/document-create-element')

    // Thank's IE8 for his funny defineProperty
    module.exports = !DESCRIPTORS && !fails(function () {
      return Object.defineProperty(createElement('div'), 'a', {
        get: function () { return 7 }
      }).a != 7
    })
  }, { '../internals/descriptors': 37, '../internals/document-create-element': 38, '../internals/fails': 45 }],
  56: [function (require, module, exports) {
    var fails = require('../internals/fails')
    var classof = require('../internals/classof-raw')

    var split = ''.split

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    module.exports = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins -- safe
      return !Object('z').propertyIsEnumerable(0)
    }) ? function (it) {
        return classof(it) == 'String' ? split.call(it, '') : Object(it)
      } : Object
  }, { '../internals/classof-raw': 24, '../internals/fails': 45 }],
  57: [function (require, module, exports) {
    var isObject = require('../internals/is-object')
    var setPrototypeOf = require('../internals/object-set-prototype-of')

    // makes subclassing work correct for wrapped built-ins
    module.exports = function ($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype
      if (
      // it can work only with native `setPrototypeOf`
        setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) === 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
      ) setPrototypeOf($this, NewTargetPrototype)
      return $this
    }
  }, { '../internals/is-object': 64, '../internals/object-set-prototype-of': 84 }],
  58: [function (require, module, exports) {
    var store = require('../internals/shared-store')

    var functionToString = Function.toString

    // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
    if (typeof store.inspectSource !== 'function') {
      store.inspectSource = function (it) {
        return functionToString.call(it)
      }
    }

    module.exports = store.inspectSource
  }, { '../internals/shared-store': 94 }],
  59: [function (require, module, exports) {
    var hiddenKeys = require('../internals/hidden-keys')
    var isObject = require('../internals/is-object')
    var has = require('../internals/has')
    var defineProperty = require('../internals/object-define-property').f
    var uid = require('../internals/uid')
    var FREEZING = require('../internals/freezing')

    var METADATA = uid('meta')
    var id = 0

    var isExtensible = Object.isExtensible || function () {
      return true
    }

    var setMetadata = function (it) {
      defineProperty(it, METADATA, {
        value: {
          objectID: 'O' + ++id, // object ID
          weakData: {} // weak collections IDs
        }
      })
    }

    var fastKey = function (it, create) {
      // return a primitive with prefix
      if (!isObject(it)) return typeof it === 'symbol' ? it : (typeof it === 'string' ? 'S' : 'P') + it
      if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'
        // not necessary to add metadata
        if (!create) return 'E'
        // add missing metadata
        setMetadata(it)
        // return object ID
      } return it[METADATA].objectID
    }

    var getWeakData = function (it, create) {
      if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true
        // not necessary to add metadata
        if (!create) return false
        // add missing metadata
        setMetadata(it)
        // return the store of weak collections IDs
      } return it[METADATA].weakData
    }

    // add metadata on freeze-family methods calling
    var onFreeze = function (it) {
      if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it)
      return it
    }

    var meta = module.exports = {
      REQUIRED: false,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze
    }

    hiddenKeys[METADATA] = true
  }, { '../internals/freezing': 46, '../internals/has': 52, '../internals/hidden-keys': 53, '../internals/is-object': 64, '../internals/object-define-property': 75, '../internals/uid': 104 }],
  60: [function (require, module, exports) {
    var NATIVE_WEAK_MAP = require('../internals/native-weak-map')
    var global = require('../internals/global')
    var isObject = require('../internals/is-object')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    var objectHas = require('../internals/has')
    var shared = require('../internals/shared-store')
    var sharedKey = require('../internals/shared-key')
    var hiddenKeys = require('../internals/hidden-keys')

    var WeakMap = global.WeakMap
    var set, get, has

    var enforce = function (it) {
      return has(it) ? get(it) : set(it, {})
    }

    var getterFor = function (TYPE) {
      return function (it) {
        var state
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError('Incompatible receiver, ' + TYPE + ' required')
        } return state
      }
    }

    if (NATIVE_WEAK_MAP) {
      var store = shared.state || (shared.state = new WeakMap())
      var wmget = store.get
      var wmhas = store.has
      var wmset = store.set
      set = function (it, metadata) {
        metadata.facade = it
        wmset.call(store, it, metadata)
        return metadata
      }
      get = function (it) {
        return wmget.call(store, it) || {}
      }
      has = function (it) {
        return wmhas.call(store, it)
      }
    } else {
      var STATE = sharedKey('state')
      hiddenKeys[STATE] = true
      set = function (it, metadata) {
        metadata.facade = it
        createNonEnumerableProperty(it, STATE, metadata)
        return metadata
      }
      get = function (it) {
        return objectHas(it, STATE) ? it[STATE] : {}
      }
      has = function (it) {
        return objectHas(it, STATE)
      }
    }

    module.exports = {
      set: set,
      get: get,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    }
  }, { '../internals/create-non-enumerable-property': 32, '../internals/global': 51, '../internals/has': 52, '../internals/hidden-keys': 53, '../internals/is-object': 64, '../internals/native-weak-map': 71, '../internals/shared-key': 93, '../internals/shared-store': 94 }],
  61: [function (require, module, exports) {
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var Iterators = require('../internals/iterators')

    var ITERATOR = wellKnownSymbol('iterator')
    var ArrayPrototype = Array.prototype

    // check on default Array iterator
    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it)
    }
  }, { '../internals/iterators': 69, '../internals/well-known-symbol': 107 }],
  62: [function (require, module, exports) {
    var classof = require('../internals/classof-raw')

    // `IsArray` abstract operation
    // https://tc39.es/ecma262/#sec-isarray
    module.exports = Array.isArray || function isArray (arg) {
      return classof(arg) == 'Array'
    }
  }, { '../internals/classof-raw': 24 }],
  63: [function (require, module, exports) {
    var fails = require('../internals/fails')

    var replacement = /#|\.prototype\./

    var isForced = function (feature, detection) {
      var value = data[normalize(feature)]
      return value == POLYFILL ? true
        : value == NATIVE ? false
          : typeof detection === 'function' ? fails(detection)
            : !!detection
    }

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase()
    }

    var data = isForced.data = {}
    var NATIVE = isForced.NATIVE = 'N'
    var POLYFILL = isForced.POLYFILL = 'P'

    module.exports = isForced
  }, { '../internals/fails': 45 }],
  64: [function (require, module, exports) {
    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function'
    }
  }, {}],
  65: [function (require, module, exports) {
    module.exports = false
  }, {}],
  66: [function (require, module, exports) {
    var anObject = require('../internals/an-object')
    var isArrayIteratorMethod = require('../internals/is-array-iterator-method')
    var toLength = require('../internals/to-length')
    var bind = require('../internals/function-bind-context')
    var getIteratorMethod = require('../internals/get-iterator-method')
    var iteratorClose = require('../internals/iterator-close')

    var Result = function (stopped, result) {
      this.stopped = stopped
      this.result = result
    }

    module.exports = function (iterable, unboundFunction, options) {
      var that = options && options.that
      var AS_ENTRIES = !!(options && options.AS_ENTRIES)
      var IS_ITERATOR = !!(options && options.IS_ITERATOR)
      var INTERRUPTED = !!(options && options.INTERRUPTED)
      var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED)
      var iterator, iterFn, index, length, result, next, step

      var stop = function (condition) {
        if (iterator) iteratorClose(iterator)
        return new Result(true, condition)
      }

      var callFn = function (value) {
        if (AS_ENTRIES) {
          anObject(value)
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1])
        } return INTERRUPTED ? fn(value, stop) : fn(value)
      }

      if (IS_ITERATOR) {
        iterator = iterable
      } else {
        iterFn = getIteratorMethod(iterable)
        if (typeof iterFn !== 'function') throw TypeError('Target is not iterable')
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = toLength(iterable.length); length > index; index++) {
            result = callFn(iterable[index])
            if (result && result instanceof Result) return result
          } return new Result(false)
        }
        iterator = iterFn.call(iterable)
      }

      next = iterator.next
      while (!(step = next.call(iterator)).done) {
        try {
          result = callFn(step.value)
        } catch (error) {
          iteratorClose(iterator)
          throw error
        }
        if (typeof result === 'object' && result && result instanceof Result) return result
      } return new Result(false)
    }
  }, { '../internals/an-object': 16, '../internals/function-bind-context': 47, '../internals/get-iterator-method': 50, '../internals/is-array-iterator-method': 61, '../internals/iterator-close': 67, '../internals/to-length': 100 }],
  67: [function (require, module, exports) {
    var anObject = require('../internals/an-object')

    module.exports = function (iterator) {
      var returnMethod = iterator.return
      if (returnMethod !== undefined) {
        return anObject(returnMethod.call(iterator)).value
      }
    }
  }, { '../internals/an-object': 16 }],
  68: [function (require, module, exports) {
    'use strict'
    var fails = require('../internals/fails')
    var getPrototypeOf = require('../internals/object-get-prototype-of')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    var has = require('../internals/has')
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var IS_PURE = require('../internals/is-pure')

    var ITERATOR = wellKnownSymbol('iterator')
    var BUGGY_SAFARI_ITERATORS = false

    var returnThis = function () { return this }

    // `%IteratorPrototype%` object
    // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
    var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator

    if ([].keys) {
      arrayIterator = [].keys()
      // Safari 8 has buggy iterators w/o `next`
      if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator))
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype
      }
    }

    var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
      var test = {}
      // FF44- legacy iterators case
      return IteratorPrototype[ITERATOR].call(test) !== test
    })

    if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {}

    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
      createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis)
    }

    module.exports = {
      IteratorPrototype: IteratorPrototype,
      BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
    }
  }, { '../internals/create-non-enumerable-property': 32, '../internals/fails': 45, '../internals/has': 52, '../internals/is-pure': 65, '../internals/object-get-prototype-of': 80, '../internals/well-known-symbol': 107 }],
  69: [function (require, module, exports) {
    arguments[4][53][0].apply(exports, arguments)
  }, { dup: 53 }],
  70: [function (require, module, exports) {
    var IS_NODE = require('../internals/engine-is-node')
    var V8_VERSION = require('../internals/engine-v8-version')
    var fails = require('../internals/fails')

    module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
      /* global Symbol -- required for testing */
      return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41)
    })
  }, { '../internals/engine-is-node': 40, '../internals/engine-v8-version': 42, '../internals/fails': 45 }],
  71: [function (require, module, exports) {
    var global = require('../internals/global')
    var inspectSource = require('../internals/inspect-source')

    var WeakMap = global.WeakMap

    module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap))
  }, { '../internals/global': 51, '../internals/inspect-source': 58 }],
  72: [function (require, module, exports) {
    'use strict'
    var DESCRIPTORS = require('../internals/descriptors')
    var fails = require('../internals/fails')
    var objectKeys = require('../internals/object-keys')
    var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols')
    var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable')
    var toObject = require('../internals/to-object')
    var IndexedObject = require('../internals/indexed-object')

    var nativeAssign = Object.assign
    var defineProperty = Object.defineProperty

    // `Object.assign` method
    // https://tc39.es/ecma262/#sec-object.assign
    module.exports = !nativeAssign || fails(function () {
      // should have correct order of operations (Edge bug)
      if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
        enumerable: true,
        get: function () {
          defineProperty(this, 'b', {
            value: 3,
            enumerable: false
          })
        }
      }), { b: 2 })).b !== 1) return true
      // should work with symbols and should have deterministic property order (V8 bug)
      var A = {}
      var B = {}
      /* global Symbol -- required for testing */
      var symbol = Symbol()
      var alphabet = 'abcdefghijklmnopqrst'
      A[symbol] = 7
      alphabet.split('').forEach(function (chr) { B[chr] = chr })
      return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet
    }) ? function assign (target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
        var T = toObject(target)
        var argumentsLength = arguments.length
        var index = 1
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f
        var propertyIsEnumerable = propertyIsEnumerableModule.f
        while (argumentsLength > index) {
          var S = IndexedObject(arguments[index++])
          var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S)
          var length = keys.length
          var j = 0
          var key
          while (length > j) {
            key = keys[j++]
            if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key]
          }
        } return T
      } : nativeAssign
  }, { '../internals/descriptors': 37, '../internals/fails': 45, '../internals/indexed-object': 56, '../internals/object-get-own-property-symbols': 79, '../internals/object-keys': 82, '../internals/object-property-is-enumerable': 83, '../internals/to-object': 101 }],
  73: [function (require, module, exports) {
    var anObject = require('../internals/an-object')
    var defineProperties = require('../internals/object-define-properties')
    var enumBugKeys = require('../internals/enum-bug-keys')
    var hiddenKeys = require('../internals/hidden-keys')
    var html = require('../internals/html')
    var documentCreateElement = require('../internals/document-create-element')
    var sharedKey = require('../internals/shared-key')

    var GT = '>'
    var LT = '<'
    var PROTOTYPE = 'prototype'
    var SCRIPT = 'script'
    var IE_PROTO = sharedKey('IE_PROTO')

    var EmptyConstructor = function () { /* empty */ }

    var scriptTag = function (content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT
    }

    // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
    var NullProtoObjectViaActiveX = function (activeXDocument) {
      activeXDocument.write(scriptTag(''))
      activeXDocument.close()
      var temp = activeXDocument.parentWindow.Object
      activeXDocument = null // avoid memory leak
      return temp
    }

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var NullProtoObjectViaIFrame = function () {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = documentCreateElement('iframe')
      var JS = 'java' + SCRIPT + ':'
      var iframeDocument
      iframe.style.display = 'none'
      html.appendChild(iframe)
      // https://github.com/zloirock/core-js/issues/475
      iframe.src = String(JS)
      iframeDocument = iframe.contentWindow.document
      iframeDocument.open()
      iframeDocument.write(scriptTag('document.F=Object'))
      iframeDocument.close()
      return iframeDocument.F
    }

    // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    // avoid IE GC bug
    var activeXDocument
    var NullProtoObject = function () {
      try {
        /* global ActiveXObject -- old IE */
        activeXDocument = document.domain && new ActiveXObject('htmlfile')
      } catch (error) { /* ignore */ }
      NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame()
      var length = enumBugKeys.length
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]]
      return NullProtoObject()
    }

    hiddenKeys[IE_PROTO] = true

    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    module.exports = Object.create || function create (O, Properties) {
      var result
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O)
        result = new EmptyConstructor()
        EmptyConstructor[PROTOTYPE] = null
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O
      } else result = NullProtoObject()
      return Properties === undefined ? result : defineProperties(result, Properties)
    }
  }, { '../internals/an-object': 16, '../internals/document-create-element': 38, '../internals/enum-bug-keys': 43, '../internals/hidden-keys': 53, '../internals/html': 54, '../internals/object-define-properties': 74, '../internals/shared-key': 93 }],
  74: [function (require, module, exports) {
    var DESCRIPTORS = require('../internals/descriptors')
    var definePropertyModule = require('../internals/object-define-property')
    var anObject = require('../internals/an-object')
    var objectKeys = require('../internals/object-keys')

    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties (O, Properties) {
      anObject(O)
      var keys = objectKeys(Properties)
      var length = keys.length
      var index = 0
      var key
      while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key])
      return O
    }
  }, { '../internals/an-object': 16, '../internals/descriptors': 37, '../internals/object-define-property': 75, '../internals/object-keys': 82 }],
  75: [function (require, module, exports) {
    var DESCRIPTORS = require('../internals/descriptors')
    var IE8_DOM_DEFINE = require('../internals/ie8-dom-define')
    var anObject = require('../internals/an-object')
    var toPrimitive = require('../internals/to-primitive')

    var nativeDefineProperty = Object.defineProperty

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty (O, P, Attributes) {
      anObject(O)
      P = toPrimitive(P, true)
      anObject(Attributes)
      if (IE8_DOM_DEFINE) {
        try {
          return nativeDefineProperty(O, P, Attributes)
        } catch (error) { /* empty */ }
      }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported')
      if ('value' in Attributes) O[P] = Attributes.value
      return O
    }
  }, { '../internals/an-object': 16, '../internals/descriptors': 37, '../internals/ie8-dom-define': 55, '../internals/to-primitive': 102 }],
  76: [function (require, module, exports) {
    var DESCRIPTORS = require('../internals/descriptors')
    var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable')
    var createPropertyDescriptor = require('../internals/create-property-descriptor')
    var toIndexedObject = require('../internals/to-indexed-object')
    var toPrimitive = require('../internals/to-primitive')
    var has = require('../internals/has')
    var IE8_DOM_DEFINE = require('../internals/ie8-dom-define')

    var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
    exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor (O, P) {
      O = toIndexedObject(O)
      P = toPrimitive(P, true)
      if (IE8_DOM_DEFINE) {
        try {
          return nativeGetOwnPropertyDescriptor(O, P)
        } catch (error) { /* empty */ }
      }
      if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P])
    }
  }, { '../internals/create-property-descriptor': 33, '../internals/descriptors': 37, '../internals/has': 52, '../internals/ie8-dom-define': 55, '../internals/object-property-is-enumerable': 83, '../internals/to-indexed-object': 98, '../internals/to-primitive': 102 }],
  77: [function (require, module, exports) {
    var toIndexedObject = require('../internals/to-indexed-object')
    var nativeGetOwnPropertyNames = require('../internals/object-get-own-property-names').f

    var toString = {}.toString

    var windowNames = typeof window === 'object' && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window) : []

    var getWindowNames = function (it) {
      try {
        return nativeGetOwnPropertyNames(it)
      } catch (error) {
        return windowNames.slice()
      }
    }

    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
    module.exports.f = function getOwnPropertyNames (it) {
      return windowNames && toString.call(it) == '[object Window]'
        ? getWindowNames(it)
        : nativeGetOwnPropertyNames(toIndexedObject(it))
    }
  }, { '../internals/object-get-own-property-names': 78, '../internals/to-indexed-object': 98 }],
  78: [function (require, module, exports) {
    var internalObjectKeys = require('../internals/object-keys-internal')
    var enumBugKeys = require('../internals/enum-bug-keys')

    var hiddenKeys = enumBugKeys.concat('length', 'prototype')

    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames (O) {
      return internalObjectKeys(O, hiddenKeys)
    }
  }, { '../internals/enum-bug-keys': 43, '../internals/object-keys-internal': 81 }],
  79: [function (require, module, exports) {
    exports.f = Object.getOwnPropertySymbols
  }, {}],
  80: [function (require, module, exports) {
    var has = require('../internals/has')
    var toObject = require('../internals/to-object')
    var sharedKey = require('../internals/shared-key')
    var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter')

    var IE_PROTO = sharedKey('IE_PROTO')
    var ObjectPrototype = Object.prototype

    // `Object.getPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.getprototypeof
    module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
      O = toObject(O)
      if (has(O, IE_PROTO)) return O[IE_PROTO]
      if (typeof O.constructor === 'function' && O instanceof O.constructor) {
        return O.constructor.prototype
      } return O instanceof Object ? ObjectPrototype : null
    }
  }, { '../internals/correct-prototype-getter': 30, '../internals/has': 52, '../internals/shared-key': 93, '../internals/to-object': 101 }],
  81: [function (require, module, exports) {
    var has = require('../internals/has')
    var toIndexedObject = require('../internals/to-indexed-object')
    var indexOf = require('../internals/array-includes').indexOf
    var hiddenKeys = require('../internals/hidden-keys')

    module.exports = function (object, names) {
      var O = toIndexedObject(object)
      var i = 0
      var result = []
      var key
      for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key)
      // Don't enum bug & hidden keys
      while (names.length > i) {
        if (has(O, key = names[i++])) {
          ~indexOf(result, key) || result.push(key)
        }
      }
      return result
    }
  }, { '../internals/array-includes': 18, '../internals/has': 52, '../internals/hidden-keys': 53, '../internals/to-indexed-object': 98 }],
  82: [function (require, module, exports) {
    var internalObjectKeys = require('../internals/object-keys-internal')
    var enumBugKeys = require('../internals/enum-bug-keys')

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    module.exports = Object.keys || function keys (O) {
      return internalObjectKeys(O, enumBugKeys)
    }
  }, { '../internals/enum-bug-keys': 43, '../internals/object-keys-internal': 81 }],
  83: [function (require, module, exports) {
    'use strict'
    var nativePropertyIsEnumerable = {}.propertyIsEnumerable
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

    // Nashorn ~ JDK8 bug
    var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1)

    // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
    exports.f = NASHORN_BUG ? function propertyIsEnumerable (V) {
      var descriptor = getOwnPropertyDescriptor(this, V)
      return !!descriptor && descriptor.enumerable
    } : nativePropertyIsEnumerable
  }, {}],
  84: [function (require, module, exports) {
    /* eslint-disable no-proto -- safe */
    var anObject = require('../internals/an-object')
    var aPossiblePrototype = require('../internals/a-possible-prototype')

    // `Object.setPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.setprototypeof
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    module.exports = Object.setPrototypeOf || ('__proto__' in {} ? (function () {
      var CORRECT_SETTER = false
      var test = {}
      var setter
      try {
        setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set
        setter.call(test, [])
        CORRECT_SETTER = test instanceof Array
      } catch (error) { /* empty */ }
      return function setPrototypeOf (O, proto) {
        anObject(O)
        aPossiblePrototype(proto)
        if (CORRECT_SETTER) setter.call(O, proto)
        else O.__proto__ = proto
        return O
      }
    }()) : undefined)
  }, { '../internals/a-possible-prototype': 13, '../internals/an-object': 16 }],
  85: [function (require, module, exports) {
    'use strict'
    var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support')
    var classof = require('../internals/classof')

    // `Object.prototype.toString` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString () {
      return '[object ' + classof(this) + ']'
    }
  }, { '../internals/classof': 25, '../internals/to-string-tag-support': 103 }],
  86: [function (require, module, exports) {
    var getBuiltIn = require('../internals/get-built-in')
    var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names')
    var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols')
    var anObject = require('../internals/an-object')

    // all object keys, includes non-enumerable and symbols
    module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys (it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it))
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f
      return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys
    }
  }, { '../internals/an-object': 16, '../internals/get-built-in': 49, '../internals/object-get-own-property-names': 78, '../internals/object-get-own-property-symbols': 79 }],
  87: [function (require, module, exports) {
    var global = require('../internals/global')

    module.exports = global
  }, { '../internals/global': 51 }],
  88: [function (require, module, exports) {
    var redefine = require('../internals/redefine')

    module.exports = function (target, src, options) {
      for (var key in src) redefine(target, key, src[key], options)
      return target
    }
  }, { '../internals/redefine': 89 }],
  89: [function (require, module, exports) {
    var global = require('../internals/global')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    var has = require('../internals/has')
    var setGlobal = require('../internals/set-global')
    var inspectSource = require('../internals/inspect-source')
    var InternalStateModule = require('../internals/internal-state')

    var getInternalState = InternalStateModule.get
    var enforceInternalState = InternalStateModule.enforce
    var TEMPLATE = String(String).split('String');

    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false
      var simple = options ? !!options.enumerable : false
      var noTargetGet = options ? !!options.noTargetGet : false
      var state
      if (typeof value === 'function') {
        if (typeof key === 'string' && !has(value, 'name')) {
          createNonEnumerableProperty(value, 'name', key)
        }
        state = enforceInternalState(value)
        if (!state.source) {
          state.source = TEMPLATE.join(typeof key === 'string' ? key : '')
        }
      }
      if (O === global) {
        if (simple) O[key] = value
        else setGlobal(key, value)
        return
      } else if (!unsafe) {
        delete O[key]
      } else if (!noTargetGet && O[key]) {
        simple = true
      }
      if (simple) O[key] = value
      else createNonEnumerableProperty(O, key, value)
      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString () {
      return typeof this === 'function' && getInternalState(this).source || inspectSource(this)
    })
  }, { '../internals/create-non-enumerable-property': 32, '../internals/global': 51, '../internals/has': 52, '../internals/inspect-source': 58, '../internals/internal-state': 60, '../internals/set-global': 91 }],
  90: [function (require, module, exports) {
    // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on " + it)
      return it
    }
  }, {}],
  91: [function (require, module, exports) {
    var global = require('../internals/global')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')

    module.exports = function (key, value) {
      try {
        createNonEnumerableProperty(global, key, value)
      } catch (error) {
        global[key] = value
      } return value
    }
  }, { '../internals/create-non-enumerable-property': 32, '../internals/global': 51 }],
  92: [function (require, module, exports) {
    var defineProperty = require('../internals/object-define-property').f
    var has = require('../internals/has')
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var TO_STRING_TAG = wellKnownSymbol('toStringTag')

    module.exports = function (it, TAG, STATIC) {
      if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
        defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG })
      }
    }
  }, { '../internals/has': 52, '../internals/object-define-property': 75, '../internals/well-known-symbol': 107 }],
  93: [function (require, module, exports) {
    var shared = require('../internals/shared')
    var uid = require('../internals/uid')

    var keys = shared('keys')

    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key))
    }
  }, { '../internals/shared': 95, '../internals/uid': 104 }],
  94: [function (require, module, exports) {
    var global = require('../internals/global')
    var setGlobal = require('../internals/set-global')

    var SHARED = '__core-js_shared__'
    var store = global[SHARED] || setGlobal(SHARED, {})

    module.exports = store
  }, { '../internals/global': 51, '../internals/set-global': 91 }],
  95: [function (require, module, exports) {
    var IS_PURE = require('../internals/is-pure')
    var store = require('../internals/shared-store');

    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {})
    })('versions', []).push({
      version: '3.9.1',
      mode: IS_PURE ? 'pure' : 'global',
      copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
    })
  }, { '../internals/is-pure': 65, '../internals/shared-store': 94 }],
  96: [function (require, module, exports) {
    var toInteger = require('../internals/to-integer')
    var requireObjectCoercible = require('../internals/require-object-coercible')

    // `String.prototype.{ codePointAt, at }` methods implementation
    var createMethod = function (CONVERT_TO_STRING) {
      return function ($this, pos) {
        var S = String(requireObjectCoercible($this))
        var position = toInteger(pos)
        var size = S.length
        var first, second
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined
        first = S.charCodeAt(position)
        return first < 0xD800 || first > 0xDBFF || position + 1 === size ||
      (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING ? S.charAt(position) : first
          : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000
      }
    }

    module.exports = {
      // `String.prototype.codePointAt` method
      // https://tc39.es/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod(true)
    }
  }, { '../internals/require-object-coercible': 90, '../internals/to-integer': 99 }],
  97: [function (require, module, exports) {
    var toInteger = require('../internals/to-integer')

    var max = Math.max
    var min = Math.min

    // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
    module.exports = function (index, length) {
      var integer = toInteger(index)
      return integer < 0 ? max(integer + length, 0) : min(integer, length)
    }
  }, { '../internals/to-integer': 99 }],
  98: [function (require, module, exports) {
    // toObject with fallback for non-array-like ES3 strings
    var IndexedObject = require('../internals/indexed-object')
    var requireObjectCoercible = require('../internals/require-object-coercible')

    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it))
    }
  }, { '../internals/indexed-object': 56, '../internals/require-object-coercible': 90 }],
  99: [function (require, module, exports) {
    var ceil = Math.ceil
    var floor = Math.floor

    // `ToInteger` abstract operation
    // https://tc39.es/ecma262/#sec-tointeger
    module.exports = function (argument) {
      return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument)
    }
  }, {}],
  100: [function (require, module, exports) {
    var toInteger = require('../internals/to-integer')

    var min = Math.min

    // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength
    module.exports = function (argument) {
      return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0 // 2 ** 53 - 1 == 9007199254740991
    }
  }, { '../internals/to-integer': 99 }],
  101: [function (require, module, exports) {
    var requireObjectCoercible = require('../internals/require-object-coercible')

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    module.exports = function (argument) {
      return Object(requireObjectCoercible(argument))
    }
  }, { '../internals/require-object-coercible': 90 }],
  102: [function (require, module, exports) {
    var isObject = require('../internals/is-object')

    // `ToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-toprimitive
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    module.exports = function (input, PREFERRED_STRING) {
      if (!isObject(input)) return input
      var fn, val
      if (PREFERRED_STRING && typeof (fn = input.toString) === 'function' && !isObject(val = fn.call(input))) return val
      if (typeof (fn = input.valueOf) === 'function' && !isObject(val = fn.call(input))) return val
      if (!PREFERRED_STRING && typeof (fn = input.toString) === 'function' && !isObject(val = fn.call(input))) return val
      throw TypeError("Can't convert object to primitive value")
    }
  }, { '../internals/is-object': 64 }],
  103: [function (require, module, exports) {
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var TO_STRING_TAG = wellKnownSymbol('toStringTag')
    var test = {}

    test[TO_STRING_TAG] = 'z'

    module.exports = String(test) === '[object z]'
  }, { '../internals/well-known-symbol': 107 }],
  104: [function (require, module, exports) {
    var id = 0
    var postfix = Math.random()

    module.exports = function (key) {
      return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36)
    }
  }, {}],
  105: [function (require, module, exports) {
    var NATIVE_SYMBOL = require('../internals/native-symbol')

    module.exports = NATIVE_SYMBOL &&
  /* global Symbol -- safe */
  !Symbol.sham &&
  typeof Symbol.iterator === 'symbol'
  }, { '../internals/native-symbol': 70 }],
  106: [function (require, module, exports) {
    var wellKnownSymbol = require('../internals/well-known-symbol')

    exports.f = wellKnownSymbol
  }, { '../internals/well-known-symbol': 107 }],
  107: [function (require, module, exports) {
    var global = require('../internals/global')
    var shared = require('../internals/shared')
    var has = require('../internals/has')
    var uid = require('../internals/uid')
    var NATIVE_SYMBOL = require('../internals/native-symbol')
    var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid')

    var WellKnownSymbolsStore = shared('wks')
    var Symbol = global.Symbol
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid

    module.exports = function (name) {
      if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] === 'string')) {
        if (NATIVE_SYMBOL && has(Symbol, name)) {
          WellKnownSymbolsStore[name] = Symbol[name]
        } else {
          WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name)
        }
      } return WellKnownSymbolsStore[name]
    }
  }, { '../internals/global': 51, '../internals/has': 52, '../internals/native-symbol': 70, '../internals/shared': 95, '../internals/uid': 104, '../internals/use-symbol-as-uid': 105 }],
  108: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var fails = require('../internals/fails')
    var isArray = require('../internals/is-array')
    var isObject = require('../internals/is-object')
    var toObject = require('../internals/to-object')
    var toLength = require('../internals/to-length')
    var createProperty = require('../internals/create-property')
    var arraySpeciesCreate = require('../internals/array-species-create')
    var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support')
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var V8_VERSION = require('../internals/engine-v8-version')

    var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable')
    var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF
    var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'

    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/679
    var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
      var array = []
      array[IS_CONCAT_SPREADABLE] = false
      return array.concat()[0] !== array
    })

    var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat')

    var isConcatSpreadable = function (O) {
      if (!isObject(O)) return false
      var spreadable = O[IS_CONCAT_SPREADABLE]
      return spreadable !== undefined ? !!spreadable : isArray(O)
    }

    var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT

    // `Array.prototype.concat` method
    // https://tc39.es/ecma262/#sec-array.prototype.concat
    // with adding support of @@isConcatSpreadable and @@species
    $({ target: 'Array', proto: true, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      concat: function concat (arg) {
        var O = toObject(this)
        var A = arraySpeciesCreate(O, 0)
        var n = 0
        var i, k, length, len, E
        for (i = -1, length = arguments.length; i < length; i++) {
          E = i === -1 ? O : arguments[i]
          if (isConcatSpreadable(E)) {
            len = toLength(E.length)
            if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED)
            for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k])
          } else {
            if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED)
            createProperty(A, n++, E)
          }
        }
        A.length = n
        return A
      }
    })
  }, { '../internals/array-method-has-species-support': 20, '../internals/array-species-create': 22, '../internals/create-property': 34, '../internals/engine-v8-version': 42, '../internals/export': 44, '../internals/fails': 45, '../internals/is-array': 62, '../internals/is-object': 64, '../internals/to-length': 100, '../internals/to-object': 101, '../internals/well-known-symbol': 107 }],
  109: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var $find = require('../internals/array-iteration').find
    var addToUnscopables = require('../internals/add-to-unscopables')

    var FIND = 'find'
    var SKIPS_HOLES = true

    // Shouldn't skip holes
    if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false })

    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    $({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
      find: function find (callbackfn /* , that = undefined */) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      }
    })

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables(FIND)
  }, { '../internals/add-to-unscopables': 14, '../internals/array-iteration': 19, '../internals/export': 44 }],
  110: [function (require, module, exports) {
    'use strict'
    var toIndexedObject = require('../internals/to-indexed-object')
    var addToUnscopables = require('../internals/add-to-unscopables')
    var Iterators = require('../internals/iterators')
    var InternalStateModule = require('../internals/internal-state')
    var defineIterator = require('../internals/define-iterator')

    var ARRAY_ITERATOR = 'Array Iterator'
    var setInternalState = InternalStateModule.set
    var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR)

    // `Array.prototype.entries` method
    // https://tc39.es/ecma262/#sec-array.prototype.entries
    // `Array.prototype.keys` method
    // https://tc39.es/ecma262/#sec-array.prototype.keys
    // `Array.prototype.values` method
    // https://tc39.es/ecma262/#sec-array.prototype.values
    // `Array.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
    // `CreateArrayIterator` internal method
    // https://tc39.es/ecma262/#sec-createarrayiterator
    module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
      setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated), // target
        index: 0, // next index
        kind: kind // kind
      })
      // `%ArrayIteratorPrototype%.next` method
      // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
    }, function () {
      var state = getInternalState(this)
      var target = state.target
      var kind = state.kind
      var index = state.index++
      if (!target || index >= target.length) {
        state.target = undefined
        return { value: undefined, done: true }
      }
      if (kind == 'keys') return { value: index, done: false }
      if (kind == 'values') return { value: target[index], done: false }
      return { value: [index, target[index]], done: false }
    }, 'values')

    // argumentsList[@@iterator] is %ArrayProto_values%
    // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
    // https://tc39.es/ecma262/#sec-createmappedargumentsobject
    Iterators.Arguments = Iterators.Array

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('keys')
    addToUnscopables('values')
    addToUnscopables('entries')
  }, { '../internals/add-to-unscopables': 14, '../internals/define-iterator': 35, '../internals/internal-state': 60, '../internals/iterators': 69, '../internals/to-indexed-object': 98 }],
  111: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var $map = require('../internals/array-iteration').map
    var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support')

    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map')

    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    // with adding support of @@species
    $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      map: function map (callbackfn /* , thisArg */) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/array-iteration': 19, '../internals/array-method-has-species-support': 20, '../internals/export': 44 }],
  112: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var isObject = require('../internals/is-object')
    var isArray = require('../internals/is-array')
    var toAbsoluteIndex = require('../internals/to-absolute-index')
    var toLength = require('../internals/to-length')
    var toIndexedObject = require('../internals/to-indexed-object')
    var createProperty = require('../internals/create-property')
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support')

    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice')

    var SPECIES = wellKnownSymbol('species')
    var nativeSlice = [].slice
    var max = Math.max

    // `Array.prototype.slice` method
    // https://tc39.es/ecma262/#sec-array.prototype.slice
    // fallback for not array-like ES3 strings and DOM objects
    $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      slice: function slice (start, end) {
        var O = toIndexedObject(this)
        var length = toLength(O.length)
        var k = toAbsoluteIndex(start, length)
        var fin = toAbsoluteIndex(end === undefined ? length : end, length)
        // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
        var Constructor, result, n
        if (isArray(O)) {
          Constructor = O.constructor
          // cross-realm fallback
          if (typeof Constructor === 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
            Constructor = undefined
          } else if (isObject(Constructor)) {
            Constructor = Constructor[SPECIES]
            if (Constructor === null) Constructor = undefined
          }
          if (Constructor === Array || Constructor === undefined) {
            return nativeSlice.call(O, k, fin)
          }
        }
        result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0))
        for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k])
        result.length = n
        return result
      }
    })
  }, { '../internals/array-method-has-species-support': 20, '../internals/create-property': 34, '../internals/export': 44, '../internals/is-array': 62, '../internals/is-object': 64, '../internals/to-absolute-index': 97, '../internals/to-indexed-object': 98, '../internals/to-length': 100, '../internals/well-known-symbol': 107 }],
  113: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var toAbsoluteIndex = require('../internals/to-absolute-index')
    var toInteger = require('../internals/to-integer')
    var toLength = require('../internals/to-length')
    var toObject = require('../internals/to-object')
    var arraySpeciesCreate = require('../internals/array-species-create')
    var createProperty = require('../internals/create-property')
    var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support')

    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice')

    var max = Math.max
    var min = Math.min
    var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF
    var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'

    // `Array.prototype.splice` method
    // https://tc39.es/ecma262/#sec-array.prototype.splice
    // with adding support of @@species
    $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      splice: function splice (start, deleteCount /* , ...items */) {
        var O = toObject(this)
        var len = toLength(O.length)
        var actualStart = toAbsoluteIndex(start, len)
        var argumentsLength = arguments.length
        var insertCount, actualDeleteCount, A, k, from, to
        if (argumentsLength === 0) {
          insertCount = actualDeleteCount = 0
        } else if (argumentsLength === 1) {
          insertCount = 0
          actualDeleteCount = len - actualStart
        } else {
          insertCount = argumentsLength - 2
          actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart)
        }
        if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
          throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED)
        }
        A = arraySpeciesCreate(O, actualDeleteCount)
        for (k = 0; k < actualDeleteCount; k++) {
          from = actualStart + k
          if (from in O) createProperty(A, k, O[from])
        }
        A.length = actualDeleteCount
        if (insertCount < actualDeleteCount) {
          for (k = actualStart; k < len - actualDeleteCount; k++) {
            from = k + actualDeleteCount
            to = k + insertCount
            if (from in O) O[to] = O[from]
            else delete O[to]
          }
          for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1]
        } else if (insertCount > actualDeleteCount) {
          for (k = len - actualDeleteCount; k > actualStart; k--) {
            from = k + actualDeleteCount - 1
            to = k + insertCount - 1
            if (from in O) O[to] = O[from]
            else delete O[to]
          }
        }
        for (k = 0; k < insertCount; k++) {
          O[k + actualStart] = arguments[k + 2]
        }
        O.length = len - actualDeleteCount + insertCount
        return A
      }
    })
  }, { '../internals/array-method-has-species-support': 20, '../internals/array-species-create': 22, '../internals/create-property': 34, '../internals/export': 44, '../internals/to-absolute-index': 97, '../internals/to-integer': 99, '../internals/to-length': 100, '../internals/to-object': 101 }],
  114: [function (require, module, exports) {
    var DESCRIPTORS = require('../internals/descriptors')
    var defineProperty = require('../internals/object-define-property').f

    var FunctionPrototype = Function.prototype
    var FunctionPrototypeToString = FunctionPrototype.toString
    var nameRE = /^\s*function ([^ (]*)/
    var NAME = 'name'

    // Function instances `.name` property
    // https://tc39.es/ecma262/#sec-function-instances-name
    if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
      defineProperty(FunctionPrototype, NAME, {
        configurable: true,
        get: function () {
          try {
            return FunctionPrototypeToString.call(this).match(nameRE)[1]
          } catch (error) {
            return ''
          }
        }
      })
    }
  }, { '../internals/descriptors': 37, '../internals/object-define-property': 75 }],
  115: [function (require, module, exports) {
    var $ = require('../internals/export')
    var assign = require('../internals/object-assign')

    // `Object.assign` method
    // https://tc39.es/ecma262/#sec-object.assign
    $({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
      assign: assign
    })
  }, { '../internals/export': 44, '../internals/object-assign': 72 }],
  116: [function (require, module, exports) {
    var $ = require('../internals/export')
    var fails = require('../internals/fails')
    var toIndexedObject = require('../internals/to-indexed-object')
    var nativeGetOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f
    var DESCRIPTORS = require('../internals/descriptors')

    var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1) })
    var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES

    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
    $({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor (it, key) {
        return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key)
      }
    })
  }, { '../internals/descriptors': 37, '../internals/export': 44, '../internals/fails': 45, '../internals/object-get-own-property-descriptor': 76, '../internals/to-indexed-object': 98 }],
  117: [function (require, module, exports) {
    var $ = require('../internals/export')
    var fails = require('../internals/fails')
    var toObject = require('../internals/to-object')
    var nativeGetPrototypeOf = require('../internals/object-get-prototype-of')
    var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter')

    var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1) })

    // `Object.getPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.getprototypeof
    $({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
      getPrototypeOf: function getPrototypeOf (it) {
        return nativeGetPrototypeOf(toObject(it))
      }
    })
  }, { '../internals/correct-prototype-getter': 30, '../internals/export': 44, '../internals/fails': 45, '../internals/object-get-prototype-of': 80, '../internals/to-object': 101 }],
  118: [function (require, module, exports) {
    var $ = require('../internals/export')
    var toObject = require('../internals/to-object')
    var nativeKeys = require('../internals/object-keys')
    var fails = require('../internals/fails')

    var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1) })

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    $({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
      keys: function keys (it) {
        return nativeKeys(toObject(it))
      }
    })
  }, { '../internals/export': 44, '../internals/fails': 45, '../internals/object-keys': 82, '../internals/to-object': 101 }],
  119: [function (require, module, exports) {
    var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support')
    var redefine = require('../internals/redefine')
    var toString = require('../internals/object-to-string')

    // `Object.prototype.toString` method
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    if (!TO_STRING_TAG_SUPPORT) {
      redefine(Object.prototype, 'toString', toString, { unsafe: true })
    }
  }, { '../internals/object-to-string': 85, '../internals/redefine': 89, '../internals/to-string-tag-support': 103 }],
  120: [function (require, module, exports) {
    var $ = require('../internals/export')
    var getBuiltIn = require('../internals/get-built-in')
    var aFunction = require('../internals/a-function')
    var anObject = require('../internals/an-object')
    var isObject = require('../internals/is-object')
    var create = require('../internals/object-create')
    var bind = require('../internals/function-bind')
    var fails = require('../internals/fails')

    var nativeConstruct = getBuiltIn('Reflect', 'construct')

    // `Reflect.construct` method
    // https://tc39.es/ecma262/#sec-reflect.construct
    // MS Edge supports only 2 arguments and argumentsList argument is optional
    // FF Nightly sets third argument as `new.target`, but does not create `this` from it
    var NEW_TARGET_BUG = fails(function () {
      function F () { /* empty */ }
      return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F)
    })
    var ARGS_BUG = !fails(function () {
      nativeConstruct(function () { /* empty */ })
    })
    var FORCED = NEW_TARGET_BUG || ARGS_BUG

    $({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
      construct: function construct (Target, args /* , newTarget */) {
        aFunction(Target)
        anObject(args)
        var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2])
        if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget)
        if (Target == newTarget) {
          // w/o altered newTarget, optimization for 0-4 arguments
          switch (args.length) {
            case 0: return new Target()
            case 1: return new Target(args[0])
            case 2: return new Target(args[0], args[1])
            case 3: return new Target(args[0], args[1], args[2])
            case 4: return new Target(args[0], args[1], args[2], args[3])
          }
          // w/o altered newTarget, lot of arguments case
          var $args = [null]
          $args.push.apply($args, args)
          return new (bind.apply(Target, $args))()
        }
        // with altered newTarget, not support built-in constructors
        var proto = newTarget.prototype
        var instance = create(isObject(proto) ? proto : Object.prototype)
        var result = Function.apply.call(Target, instance, args)
        return isObject(result) ? result : instance
      }
    })
  }, { '../internals/a-function': 12, '../internals/an-object': 16, '../internals/export': 44, '../internals/fails': 45, '../internals/function-bind': 48, '../internals/get-built-in': 49, '../internals/is-object': 64, '../internals/object-create': 73 }],
  121: [function (require, module, exports) {
    var $ = require('../internals/export')
    var isObject = require('../internals/is-object')
    var anObject = require('../internals/an-object')
    var has = require('../internals/has')
    var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')
    var getPrototypeOf = require('../internals/object-get-prototype-of')

    // `Reflect.get` method
    // https://tc39.es/ecma262/#sec-reflect.get
    function get (target, propertyKey /* , receiver */) {
      var receiver = arguments.length < 3 ? target : arguments[2]
      var descriptor, prototype
      if (anObject(target) === receiver) return target[propertyKey]
      if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) {
        return has(descriptor, 'value')
          ? descriptor.value
          : descriptor.get === undefined
            ? undefined
            : descriptor.get.call(receiver)
      }
      if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver)
    }

    $({ target: 'Reflect', stat: true }, {
      get: get
    })
  }, { '../internals/an-object': 16, '../internals/export': 44, '../internals/has': 52, '../internals/is-object': 64, '../internals/object-get-own-property-descriptor': 76, '../internals/object-get-prototype-of': 80 }],
  122: [function (require, module, exports) {
    'use strict'
    var charAt = require('../internals/string-multibyte').charAt
    var InternalStateModule = require('../internals/internal-state')
    var defineIterator = require('../internals/define-iterator')

    var STRING_ITERATOR = 'String Iterator'
    var setInternalState = InternalStateModule.set
    var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR)

    // `String.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
    defineIterator(String, 'String', function (iterated) {
      setInternalState(this, {
        type: STRING_ITERATOR,
        string: String(iterated),
        index: 0
      })
      // `%StringIteratorPrototype%.next` method
      // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
    }, function next () {
      var state = getInternalState(this)
      var string = state.string
      var index = state.index
      var point
      if (index >= string.length) return { value: undefined, done: true }
      point = charAt(string, index)
      state.index += point.length
      return { value: point, done: false }
    })
  }, { '../internals/define-iterator': 35, '../internals/internal-state': 60, '../internals/string-multibyte': 96 }],
  123: [function (require, module, exports) {
    // `Symbol.prototype.description` getter
    // https://tc39.es/ecma262/#sec-symbol.prototype.description
    'use strict'
    var $ = require('../internals/export')
    var DESCRIPTORS = require('../internals/descriptors')
    var global = require('../internals/global')
    var has = require('../internals/has')
    var isObject = require('../internals/is-object')
    var defineProperty = require('../internals/object-define-property').f
    var copyConstructorProperties = require('../internals/copy-constructor-properties')

    var NativeSymbol = global.Symbol

    if (DESCRIPTORS && typeof NativeSymbol === 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
    )) {
      var EmptyStringDescriptionStore = {}
      // wrap Symbol constructor for correct work with undefined description
      var SymbolWrapper = function Symbol () {
        var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0])
        var result = this instanceof SymbolWrapper
          ? new NativeSymbol(description)
        // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
          : description === undefined ? NativeSymbol() : NativeSymbol(description)
        if (description === '') EmptyStringDescriptionStore[result] = true
        return result
      }
      copyConstructorProperties(SymbolWrapper, NativeSymbol)
      var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype
      symbolPrototype.constructor = SymbolWrapper

      var symbolToString = symbolPrototype.toString
      var native = String(NativeSymbol('test')) == 'Symbol(test)'
      var regexp = /^Symbol\((.*)\)[^)]+$/
      defineProperty(symbolPrototype, 'description', {
        configurable: true,
        get: function description () {
          var symbol = isObject(this) ? this.valueOf() : this
          var string = symbolToString.call(symbol)
          if (has(EmptyStringDescriptionStore, symbol)) return ''
          var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1')
          return desc === '' ? undefined : desc
        }
      })

      $({ global: true, forced: true }, {
        Symbol: SymbolWrapper
      })
    }
  }, { '../internals/copy-constructor-properties': 29, '../internals/descriptors': 37, '../internals/export': 44, '../internals/global': 51, '../internals/has': 52, '../internals/is-object': 64, '../internals/object-define-property': 75 }],
  124: [function (require, module, exports) {
    var defineWellKnownSymbol = require('../internals/define-well-known-symbol')

    // `Symbol.iterator` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.iterator
    defineWellKnownSymbol('iterator')
  }, { '../internals/define-well-known-symbol': 36 }],
  125: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var global = require('../internals/global')
    var getBuiltIn = require('../internals/get-built-in')
    var IS_PURE = require('../internals/is-pure')
    var DESCRIPTORS = require('../internals/descriptors')
    var NATIVE_SYMBOL = require('../internals/native-symbol')
    var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid')
    var fails = require('../internals/fails')
    var has = require('../internals/has')
    var isArray = require('../internals/is-array')
    var isObject = require('../internals/is-object')
    var anObject = require('../internals/an-object')
    var toObject = require('../internals/to-object')
    var toIndexedObject = require('../internals/to-indexed-object')
    var toPrimitive = require('../internals/to-primitive')
    var createPropertyDescriptor = require('../internals/create-property-descriptor')
    var nativeObjectCreate = require('../internals/object-create')
    var objectKeys = require('../internals/object-keys')
    var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names')
    var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external')
    var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols')
    var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')
    var definePropertyModule = require('../internals/object-define-property')
    var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    var redefine = require('../internals/redefine')
    var shared = require('../internals/shared')
    var sharedKey = require('../internals/shared-key')
    var hiddenKeys = require('../internals/hidden-keys')
    var uid = require('../internals/uid')
    var wellKnownSymbol = require('../internals/well-known-symbol')
    var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped')
    var defineWellKnownSymbol = require('../internals/define-well-known-symbol')
    var setToStringTag = require('../internals/set-to-string-tag')
    var InternalStateModule = require('../internals/internal-state')
    var $forEach = require('../internals/array-iteration').forEach

    var HIDDEN = sharedKey('hidden')
    var SYMBOL = 'Symbol'
    var PROTOTYPE = 'prototype'
    var TO_PRIMITIVE = wellKnownSymbol('toPrimitive')
    var setInternalState = InternalStateModule.set
    var getInternalState = InternalStateModule.getterFor(SYMBOL)
    var ObjectPrototype = Object[PROTOTYPE]
    var $Symbol = global.Symbol
    var $stringify = getBuiltIn('JSON', 'stringify')
    var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
    var nativeDefineProperty = definePropertyModule.f
    var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f
    var nativePropertyIsEnumerable = propertyIsEnumerableModule.f
    var AllSymbols = shared('symbols')
    var ObjectPrototypeSymbols = shared('op-symbols')
    var StringToSymbolRegistry = shared('string-to-symbol-registry')
    var SymbolToStringRegistry = shared('symbol-to-string-registry')
    var WellKnownSymbolsStore = shared('wks')
    var QObject = global.QObject
    // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild

    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    var setSymbolDescriptor = DESCRIPTORS && fails(function () {
      return nativeObjectCreate(nativeDefineProperty({}, 'a', {
        get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a }
      })).a != 7
    }) ? function (O, P, Attributes) {
        var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P)
        if (ObjectPrototypeDescriptor) delete ObjectPrototype[P]
        nativeDefineProperty(O, P, Attributes)
        if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
          nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor)
        }
      } : nativeDefineProperty

    var wrap = function (tag, description) {
      var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE])
      setInternalState(symbol, {
        type: SYMBOL,
        tag: tag,
        description: description
      })
      if (!DESCRIPTORS) symbol.description = description
      return symbol
    }

    var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
      return typeof it === 'symbol'
    } : function (it) {
      return Object(it) instanceof $Symbol
    }

    var $defineProperty = function defineProperty (O, P, Attributes) {
      if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes)
      anObject(O)
      var key = toPrimitive(P, true)
      anObject(Attributes)
      if (has(AllSymbols, key)) {
        if (!Attributes.enumerable) {
          if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}))
          O[HIDDEN][key] = true
        } else {
          if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false
          Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) })
        } return setSymbolDescriptor(O, key, Attributes)
      } return nativeDefineProperty(O, key, Attributes)
    }

    var $defineProperties = function defineProperties (O, Properties) {
      anObject(O)
      var properties = toIndexedObject(Properties)
      var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties))
      $forEach(keys, function (key) {
        if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key])
      })
      return O
    }

    var $create = function create (O, Properties) {
      return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties)
    }

    var $propertyIsEnumerable = function propertyIsEnumerable (V) {
      var P = toPrimitive(V, true)
      var enumerable = nativePropertyIsEnumerable.call(this, P)
      if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false
      return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true
    }

    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor (O, P) {
      var it = toIndexedObject(O)
      var key = toPrimitive(P, true)
      if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return
      var descriptor = nativeGetOwnPropertyDescriptor(it, key)
      if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
        descriptor.enumerable = true
      }
      return descriptor
    }

    var $getOwnPropertyNames = function getOwnPropertyNames (O) {
      var names = nativeGetOwnPropertyNames(toIndexedObject(O))
      var result = []
      $forEach(names, function (key) {
        if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key)
      })
      return result
    }

    var $getOwnPropertySymbols = function getOwnPropertySymbols (O) {
      var IS_OBJECT_PROTOTYPE = O === ObjectPrototype
      var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O))
      var result = []
      $forEach(names, function (key) {
        if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
          result.push(AllSymbols[key])
        }
      })
      return result
    }

    // `Symbol` constructor
    // https://tc39.es/ecma262/#sec-symbol-constructor
    if (!NATIVE_SYMBOL) {
      $Symbol = function Symbol () {
        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor')
        var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0])
        var tag = uid(description)
        var setter = function (value) {
          if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value)
          if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false
          setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value))
        }
        if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter })
        return wrap(tag, description)
      }

      redefine($Symbol[PROTOTYPE], 'toString', function toString () {
        return getInternalState(this).tag
      })

      redefine($Symbol, 'withoutSetter', function (description) {
        return wrap(uid(description), description)
      })

      propertyIsEnumerableModule.f = $propertyIsEnumerable
      definePropertyModule.f = $defineProperty
      getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor
      getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames
      getOwnPropertySymbolsModule.f = $getOwnPropertySymbols

      wrappedWellKnownSymbolModule.f = function (name) {
        return wrap(wellKnownSymbol(name), name)
      }

      if (DESCRIPTORS) {
        // https://github.com/tc39/proposal-Symbol-description
        nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
          configurable: true,
          get: function description () {
            return getInternalState(this).description
          }
        })
        if (!IS_PURE) {
          redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true })
        }
      }
    }

    $({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
      Symbol: $Symbol
    })

    $forEach(objectKeys(WellKnownSymbolsStore), function (name) {
      defineWellKnownSymbol(name)
    })

    $({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
      // `Symbol.for` method
      // https://tc39.es/ecma262/#sec-symbol.for
      for: function (key) {
        var string = String(key)
        if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string]
        var symbol = $Symbol(string)
        StringToSymbolRegistry[string] = symbol
        SymbolToStringRegistry[symbol] = string
        return symbol
      },
      // `Symbol.keyFor` method
      // https://tc39.es/ecma262/#sec-symbol.keyfor
      keyFor: function keyFor (sym) {
        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol')
        if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym]
      },
      useSetter: function () { USE_SETTER = true },
      useSimple: function () { USE_SETTER = false }
    })

    $({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
      // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create
      create: $create,
      // `Object.defineProperty` method
      // https://tc39.es/ecma262/#sec-object.defineproperty
      defineProperty: $defineProperty,
      // `Object.defineProperties` method
      // https://tc39.es/ecma262/#sec-object.defineproperties
      defineProperties: $defineProperties,
      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor
    })

    $({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
      // `Object.getOwnPropertyNames` method
      // https://tc39.es/ecma262/#sec-object.getownpropertynames
      getOwnPropertyNames: $getOwnPropertyNames,
      // `Object.getOwnPropertySymbols` method
      // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
      getOwnPropertySymbols: $getOwnPropertySymbols
    })

    // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
    // https://bugs.chromium.org/p/v8/issues/detail?id=3443
    $({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1) }) }, {
      getOwnPropertySymbols: function getOwnPropertySymbols (it) {
        return getOwnPropertySymbolsModule.f(toObject(it))
      }
    })

    // `JSON.stringify` method behavior with symbols
    // https://tc39.es/ecma262/#sec-json.stringify
    if ($stringify) {
      var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
        var symbol = $Symbol()
        // MS Edge converts symbol values to JSON as {}
        return $stringify([symbol]) != '[null]' ||
      // WebKit converts symbol values to JSON as null
      $stringify({ a: symbol }) != '{}' ||
      // V8 throws on boxed symbols
      $stringify(Object(symbol)) != '{}'
      })

      $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        stringify: function stringify (it, replacer, space) {
          var args = [it]
          var index = 1
          var $replacer
          while (arguments.length > index) args.push(arguments[index++])
          $replacer = replacer
          if (!isObject(replacer) && it === undefined || isSymbol(it)) return // IE8 returns string on undefined
          if (!isArray(replacer)) {
            replacer = function (key, value) {
              if (typeof $replacer === 'function') value = $replacer.call(this, key, value)
              if (!isSymbol(value)) return value
            }
          }
          args[1] = replacer
          return $stringify.apply(null, args)
        }
      })
    }

    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
      createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf)
    }
    // `Symbol.prototype[@@toStringTag]` property
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
    setToStringTag($Symbol, SYMBOL)

    hiddenKeys[HIDDEN] = true
  }, { '../internals/an-object': 16, '../internals/array-iteration': 19, '../internals/create-non-enumerable-property': 32, '../internals/create-property-descriptor': 33, '../internals/define-well-known-symbol': 36, '../internals/descriptors': 37, '../internals/export': 44, '../internals/fails': 45, '../internals/get-built-in': 49, '../internals/global': 51, '../internals/has': 52, '../internals/hidden-keys': 53, '../internals/internal-state': 60, '../internals/is-array': 62, '../internals/is-object': 64, '../internals/is-pure': 65, '../internals/native-symbol': 70, '../internals/object-create': 73, '../internals/object-define-property': 75, '../internals/object-get-own-property-descriptor': 76, '../internals/object-get-own-property-names': 78, '../internals/object-get-own-property-names-external': 77, '../internals/object-get-own-property-symbols': 79, '../internals/object-keys': 82, '../internals/object-property-is-enumerable': 83, '../internals/redefine': 89, '../internals/set-to-string-tag': 92, '../internals/shared': 95, '../internals/shared-key': 93, '../internals/to-indexed-object': 98, '../internals/to-object': 101, '../internals/to-primitive': 102, '../internals/uid': 104, '../internals/use-symbol-as-uid': 105, '../internals/well-known-symbol': 107, '../internals/well-known-symbol-wrapped': 106 }],
  126: [function (require, module, exports) {
    'use strict'
    var global = require('../internals/global')
    var redefineAll = require('../internals/redefine-all')
    var InternalMetadataModule = require('../internals/internal-metadata')
    var collection = require('../internals/collection')
    var collectionWeak = require('../internals/collection-weak')
    var isObject = require('../internals/is-object')
    var enforceIternalState = require('../internals/internal-state').enforce
    var NATIVE_WEAK_MAP = require('../internals/native-weak-map')

    var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global
    var isExtensible = Object.isExtensible
    var InternalWeakMap

    var wrapper = function (init) {
      return function WeakMap () {
        return init(this, arguments.length ? arguments[0] : undefined)
      }
    }

    // `WeakMap` constructor
    // https://tc39.es/ecma262/#sec-weakmap-constructor
    var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak)

    // IE11 WeakMap frozen keys fix
    // We can't use feature detection because it crash some old IE builds
    // https://github.com/zloirock/core-js/issues/485
    if (NATIVE_WEAK_MAP && IS_IE11) {
      InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true)
      InternalMetadataModule.REQUIRED = true
      var WeakMapPrototype = $WeakMap.prototype
      var nativeDelete = WeakMapPrototype.delete
      var nativeHas = WeakMapPrototype.has
      var nativeGet = WeakMapPrototype.get
      var nativeSet = WeakMapPrototype.set
      redefineAll(WeakMapPrototype, {
        delete: function (key) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceIternalState(this)
            if (!state.frozen) state.frozen = new InternalWeakMap()
            return nativeDelete.call(this, key) || state.frozen.delete(key)
          } return nativeDelete.call(this, key)
        },
        has: function has (key) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceIternalState(this)
            if (!state.frozen) state.frozen = new InternalWeakMap()
            return nativeHas.call(this, key) || state.frozen.has(key)
          } return nativeHas.call(this, key)
        },
        get: function get (key) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceIternalState(this)
            if (!state.frozen) state.frozen = new InternalWeakMap()
            return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key)
          } return nativeGet.call(this, key)
        },
        set: function set (key, value) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceIternalState(this)
            if (!state.frozen) state.frozen = new InternalWeakMap()
            nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value)
          } else nativeSet.call(this, key, value)
          return this
        }
      })
    }
  }, { '../internals/collection': 28, '../internals/collection-weak': 27, '../internals/global': 51, '../internals/internal-metadata': 59, '../internals/internal-state': 60, '../internals/is-object': 64, '../internals/native-weak-map': 71, '../internals/redefine-all': 88 }],
  127: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var IS_PURE = require('../internals/is-pure')
    var collectionDeleteAll = require('../internals/collection-delete-all')

    // `WeakMap.prototype.deleteAll` method
    // https://github.com/tc39/proposal-collection-methods
    $({ target: 'WeakMap', proto: true, real: true, forced: IS_PURE }, {
      deleteAll: function deleteAll (/* ...elements */) {
        return collectionDeleteAll.apply(this, arguments)
      }
    })
  }, { '../internals/collection-delete-all': 26, '../internals/export': 44, '../internals/is-pure': 65 }],
  128: [function (require, module, exports) {
    var global = require('../internals/global')
    var DOMIterables = require('../internals/dom-iterables')
    var forEach = require('../internals/array-for-each')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')

    for (var COLLECTION_NAME in DOMIterables) {
      var Collection = global[COLLECTION_NAME]
      var CollectionPrototype = Collection && Collection.prototype
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype && CollectionPrototype.forEach !== forEach) {
        try {
          createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach)
        } catch (error) {
          CollectionPrototype.forEach = forEach
        }
      }
    }
  }, { '../internals/array-for-each': 17, '../internals/create-non-enumerable-property': 32, '../internals/dom-iterables': 39, '../internals/global': 51 }],
  129: [function (require, module, exports) {
    var global = require('../internals/global')
    var DOMIterables = require('../internals/dom-iterables')
    var ArrayIteratorMethods = require('../modules/es.array.iterator')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    var wellKnownSymbol = require('../internals/well-known-symbol')

    var ITERATOR = wellKnownSymbol('iterator')
    var TO_STRING_TAG = wellKnownSymbol('toStringTag')
    var ArrayValues = ArrayIteratorMethods.values

    for (var COLLECTION_NAME in DOMIterables) {
      var Collection = global[COLLECTION_NAME]
      var CollectionPrototype = Collection && Collection.prototype
      if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[ITERATOR] !== ArrayValues) {
          try {
            createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues)
          } catch (error) {
            CollectionPrototype[ITERATOR] = ArrayValues
          }
        }
        if (!CollectionPrototype[TO_STRING_TAG]) {
          createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME)
        }
        if (DOMIterables[COLLECTION_NAME]) {
          for (var METHOD_NAME in ArrayIteratorMethods) {
          // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) {
              try {
                createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME])
              } catch (error) {
                CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME]
              }
            }
          }
        }
      }
    }
  }, { '../internals/create-non-enumerable-property': 32, '../internals/dom-iterables': 39, '../internals/global': 51, '../internals/well-known-symbol': 107, '../modules/es.array.iterator': 110 }]
}, {}, [11])
