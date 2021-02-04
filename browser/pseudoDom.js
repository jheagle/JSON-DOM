(function () { function r (e, n, t) { function o (i, f) { if (!n[i]) { if (!e[i]) { var c = typeof require === 'function' && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = 'MODULE_NOT_FOUND', a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = typeof require === 'function' && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
  1: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.array.reduce.js')

    require('core-js/modules/es.object.assign.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.Linker = void 0

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
  }, { 'core-js/modules/es.array.reduce.js': 87, 'core-js/modules/es.object.assign.js': 91 }],
  2: [function (require, module, exports) {
    'use strict'

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    require('core-js/modules/es.array.map.js')

    require('core-js/modules/es.object.assign.js')

    require('core-js/modules/es.object.get-prototype-of.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.TreeLinker = void 0

    var _Linker2 = require('./Linker')

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
  }, { './Linker': 1, 'core-js/modules/es.array.map.js': 86, 'core-js/modules/es.object.assign.js': 91, 'core-js/modules/es.object.get-prototype-of.js': 92 }],
  3: [function (require, module, exports) {
    'use strict'

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    require('core-js/modules/es.object.assign.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

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
  }, { './class/PseudoElement': 4, './class/PseudoEvent': 5, './class/PseudoEventTarget': 7, './class/PseudoHTMLDocument': 8, './class/PseudoHTMLElement': 9, './class/PseudoNode': 10, 'core-js/modules/es.object.assign.js': 91 }],
  4: [function (require, module, exports) {
    'use strict'

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    require('core-js/modules/es.array.concat.js')

    require('core-js/modules/es.array.find.js')

    require('core-js/modules/es.array.map.js')

    require('core-js/modules/es.function.name.js')

    require('core-js/modules/es.object.get-prototype-of.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PseudoElement = void 0

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

    function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true } catch (e) { return false } }

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
  }, { './PseudoEvent': 5, './PseudoNode': 10, 'core-js/modules/es.array.concat.js': 82, 'core-js/modules/es.array.find.js': 83, 'core-js/modules/es.array.map.js': 86, 'core-js/modules/es.function.name.js': 90, 'core-js/modules/es.object.get-prototype-of.js': 92 }],
  5: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.array.concat.js')

    require('core-js/modules/es.array.map.js')

    require('core-js/modules/es.array.reduce.js')

    require('core-js/modules/es.array.slice.js')

    require('core-js/modules/es.object.assign.js')

    require('core-js/modules/es.object.keys.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PseudoEvent = void 0

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
  }, { 'core-js/modules/es.array.concat.js': 82, 'core-js/modules/es.array.map.js': 86, 'core-js/modules/es.array.reduce.js': 87, 'core-js/modules/es.array.slice.js': 88, 'core-js/modules/es.object.assign.js': 91, 'core-js/modules/es.object.keys.js': 93 }],
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

    require('core-js/modules/es.array.concat.js')

    require('core-js/modules/es.array.for-each.js')

    require('core-js/modules/es.array.reduce.js')

    require('core-js/modules/es.array.splice.js')

    require('core-js/modules/es.object.assign.js')

    require('core-js/modules/es.object.keys.js')

    require('core-js/modules/web.dom-collections.for-each.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PseudoEventTarget = void 0

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
  }, { './PseudoEvent': 5, './PseudoEventListener': 6, 'core-js/modules/es.array.concat.js': 82, 'core-js/modules/es.array.for-each.js': 84, 'core-js/modules/es.array.reduce.js': 87, 'core-js/modules/es.array.splice.js': 89, 'core-js/modules/es.object.assign.js': 91, 'core-js/modules/es.object.keys.js': 93, 'core-js/modules/web.dom-collections.for-each.js': 94 }],
  8: [function (require, module, exports) {
    'use strict'

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    require('core-js/modules/es.object.get-prototype-of.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PseudoHTMLDocument = void 0

    var _PseudoHTMLElement2 = require('./PseudoHTMLElement')

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
  }, { './PseudoHTMLElement': 9, 'core-js/modules/es.object.get-prototype-of.js': 92 }],
  9: [function (require, module, exports) {
    'use strict'

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    require('core-js/modules/es.object.get-prototype-of.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.PseudoHTMLElement = void 0

    var _PseudoElement2 = require('./PseudoElement')

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function') } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass) }

    function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o }; return _setPrototypeOf(o, p) }

    function _createSuper (Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { var Super = _getPrototypeOf(Derived); var result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget) } else { result = Super.apply(this, arguments) } return _possibleConstructorReturn(this, result) } }

    function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call } return _assertThisInitialized(self) }

    function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return self }

    function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true } catch (e) { return false } }

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
  }, { './PseudoElement': 4, 'core-js/modules/es.object.get-prototype-of.js': 92 }],
  10: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.array.index-of.js')

    require('core-js/modules/es.array.reduce.js')

    require('core-js/modules/es.array.splice.js')

    require('core-js/modules/es.function.name.js')

    require('core-js/modules/es.object.assign.js')

    require('core-js/modules/es.object.get-prototype-of.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.generateNode = exports.NodeFactory = exports.PseudoNode = void 0

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

    function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true } catch (e) { return false } }

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
  }, { '../../collections/classes/TreeLinker': 2, './PseudoEventTarget': 7, 'core-js/modules/es.array.index-of.js': 85, 'core-js/modules/es.array.reduce.js': 87, 'core-js/modules/es.array.splice.js': 89, 'core-js/modules/es.function.name.js': 90, 'core-js/modules/es.object.assign.js': 91, 'core-js/modules/es.object.get-prototype-of.js': 92 }],
  11: [function (require, module, exports) {
    (function (global) {
      (function () {
        'use strict'

        require('core-js/modules/es.object.assign.js')

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = void 0

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
  }, { './all': 3, 'core-js/modules/es.object.assign.js': 91 }],
  12: [function (require, module, exports) {
    module.exports = function (it) {
      if (typeof it !== 'function') {
        throw TypeError(String(it) + ' is not a function')
      } return it
    }
  }, {}],
  13: [function (require, module, exports) {
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
  }, { '../internals/object-create': 55, '../internals/object-define-property': 57, '../internals/well-known-symbol': 81 }],
  14: [function (require, module, exports) {
    var isObject = require('../internals/is-object')

    module.exports = function (it) {
      if (!isObject(it)) {
        throw TypeError(String(it) + ' is not an object')
      } return it
    }
  }, { '../internals/is-object': 50 }],
  15: [function (require, module, exports) {
    'use strict'
    var $forEach = require('../internals/array-iteration').forEach
    var arrayMethodIsStrict = require('../internals/array-method-is-strict')
    var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length')

    var STRICT_METHOD = arrayMethodIsStrict('forEach')
    var USES_TO_LENGTH = arrayMethodUsesToLength('forEach')

    // `Array.prototype.forEach` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach (callbackfn /* , thisArg */) {
      return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
    } : [].forEach
  }, { '../internals/array-iteration': 17, '../internals/array-method-is-strict': 19, '../internals/array-method-uses-to-length': 20 }],
  16: [function (require, module, exports) {
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
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el) {
          while (length > index) {
            value = O[index++]
            // eslint-disable-next-line no-self-compare
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
  }, { '../internals/to-absolute-index': 73, '../internals/to-indexed-object': 74, '../internals/to-length': 76 }],
  17: [function (require, module, exports) {
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
  }, { '../internals/array-species-create': 22, '../internals/function-bind-context': 38, '../internals/indexed-object': 45, '../internals/to-length': 76, '../internals/to-object': 77 }],
  18: [function (require, module, exports) {
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
  }, { '../internals/engine-v8-version': 34, '../internals/fails': 37, '../internals/well-known-symbol': 81 }],
  19: [function (require, module, exports) {
    'use strict'
    var fails = require('../internals/fails')

    module.exports = function (METHOD_NAME, argument) {
      var method = [][METHOD_NAME]
      return !!method && fails(function () {
        // eslint-disable-next-line no-useless-call,no-throw-literal
        method.call(null, argument || function () { throw 1 }, 1)
      })
    }
  }, { '../internals/fails': 37 }],
  20: [function (require, module, exports) {
    var DESCRIPTORS = require('../internals/descriptors')
    var fails = require('../internals/fails')
    var has = require('../internals/has')

    var defineProperty = Object.defineProperty
    var cache = {}

    var thrower = function (it) { throw it }

    module.exports = function (METHOD_NAME, options) {
      if (has(cache, METHOD_NAME)) return cache[METHOD_NAME]
      if (!options) options = {}
      var method = [][METHOD_NAME]
      var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false
      var argument0 = has(options, 0) ? options[0] : thrower
      var argument1 = has(options, 1) ? options[1] : undefined

      return cache[METHOD_NAME] = !!method && !fails(function () {
        if (ACCESSORS && !DESCRIPTORS) return true
        var O = { length: -1 }

        if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower })
        else O[1] = 1

        method.call(O, argument0, argument1)
      })
    }
  }, { '../internals/descriptors': 29, '../internals/fails': 37, '../internals/has': 41 }],
  21: [function (require, module, exports) {
    var aFunction = require('../internals/a-function')
    var toObject = require('../internals/to-object')
    var IndexedObject = require('../internals/indexed-object')
    var toLength = require('../internals/to-length')

    // `Array.prototype.{ reduce, reduceRight }` methods implementation
    var createMethod = function (IS_RIGHT) {
      return function (that, callbackfn, argumentsLength, memo) {
        aFunction(callbackfn)
        var O = toObject(that)
        var self = IndexedObject(O)
        var length = toLength(O.length)
        var index = IS_RIGHT ? length - 1 : 0
        var i = IS_RIGHT ? -1 : 1
        if (argumentsLength < 2) {
          while (true) {
            if (index in self) {
              memo = self[index]
              index += i
              break
            }
            index += i
            if (IS_RIGHT ? index < 0 : length <= index) {
              throw TypeError('Reduce of empty array with no initial value')
            }
          }
        }
        for (;IS_RIGHT ? index >= 0 : length > index; index += i) {
          if (index in self) {
            memo = callbackfn(memo, self[index], index, O)
          }
        }
        return memo
      }
    }

    module.exports = {
      // `Array.prototype.reduce` method
      // https://tc39.es/ecma262/#sec-array.prototype.reduce
      left: createMethod(false),
      // `Array.prototype.reduceRight` method
      // https://tc39.es/ecma262/#sec-array.prototype.reduceright
      right: createMethod(true)
    }
  }, { '../internals/a-function': 12, '../internals/indexed-object': 45, '../internals/to-length': 76, '../internals/to-object': 77 }],
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
  }, { '../internals/is-array': 48, '../internals/is-object': 50, '../internals/well-known-symbol': 81 }],
  23: [function (require, module, exports) {
    var toString = {}.toString

    module.exports = function (it) {
      return toString.call(it).slice(8, -1)
    }
  }, {}],
  24: [function (require, module, exports) {
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
  }, { '../internals/has': 41, '../internals/object-define-property': 57, '../internals/object-get-own-property-descriptor': 58, '../internals/own-keys': 65 }],
  25: [function (require, module, exports) {
    var fails = require('../internals/fails')

    module.exports = !fails(function () {
      function F () { /* empty */ }
      F.prototype.constructor = null
      return Object.getPrototypeOf(new F()) !== F.prototype
    })
  }, { '../internals/fails': 37 }],
  26: [function (require, module, exports) {
    var DESCRIPTORS = require('../internals/descriptors')
    var definePropertyModule = require('../internals/object-define-property')
    var createPropertyDescriptor = require('../internals/create-property-descriptor')

    module.exports = DESCRIPTORS ? function (object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value))
    } : function (object, key, value) {
      object[key] = value
      return object
    }
  }, { '../internals/create-property-descriptor': 27, '../internals/descriptors': 29, '../internals/object-define-property': 57 }],
  27: [function (require, module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      }
    }
  }, {}],
  28: [function (require, module, exports) {
    'use strict'
    var toPrimitive = require('../internals/to-primitive')
    var definePropertyModule = require('../internals/object-define-property')
    var createPropertyDescriptor = require('../internals/create-property-descriptor')

    module.exports = function (object, key, value) {
      var propertyKey = toPrimitive(key)
      if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value))
      else object[propertyKey] = value
    }
  }, { '../internals/create-property-descriptor': 27, '../internals/object-define-property': 57, '../internals/to-primitive': 78 }],
  29: [function (require, module, exports) {
    var fails = require('../internals/fails')

    // Detect IE8's incomplete defineProperty implementation
    module.exports = !fails(function () {
      return Object.defineProperty({}, 1, { get: function () { return 7 } })[1] != 7
    })
  }, { '../internals/fails': 37 }],
  30: [function (require, module, exports) {
    var global = require('../internals/global')
    var isObject = require('../internals/is-object')

    var document = global.document
    // typeof document.createElement is 'object' in old IE
    var EXISTS = isObject(document) && isObject(document.createElement)

    module.exports = function (it) {
      return EXISTS ? document.createElement(it) : {}
    }
  }, { '../internals/global': 40, '../internals/is-object': 50 }],
  31: [function (require, module, exports) {
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
  32: [function (require, module, exports) {
    var classof = require('../internals/classof-raw')
    var global = require('../internals/global')

    module.exports = classof(global.process) == 'process'
  }, { '../internals/classof-raw': 23, '../internals/global': 40 }],
  33: [function (require, module, exports) {
    var getBuiltIn = require('../internals/get-built-in')

    module.exports = getBuiltIn('navigator', 'userAgent') || ''
  }, { '../internals/get-built-in': 39 }],
  34: [function (require, module, exports) {
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
  }, { '../internals/engine-user-agent': 33, '../internals/global': 40 }],
  35: [function (require, module, exports) {
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
  36: [function (require, module, exports) {
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
  }, { '../internals/copy-constructor-properties': 24, '../internals/create-non-enumerable-property': 26, '../internals/global': 40, '../internals/is-forced': 49, '../internals/object-get-own-property-descriptor': 58, '../internals/redefine': 67, '../internals/set-global': 69 }],
  37: [function (require, module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec()
      } catch (error) {
        return true
      }
    }
  }, {}],
  38: [function (require, module, exports) {
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
  39: [function (require, module, exports) {
    var path = require('../internals/path')
    var global = require('../internals/global')

    var aFunction = function (variable) {
      return typeof variable === 'function' ? variable : undefined
    }

    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
        : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method]
    }
  }, { '../internals/global': 40, '../internals/path': 66 }],
  40: [function (require, module, exports) {
    (function (global) {
      (function () {
        var check = function (it) {
          return it && it.Math == Math && it
        }

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis === 'object' && globalThis) ||
  check(typeof window === 'object' && window) ||
  check(typeof self === 'object' && self) ||
  check(typeof global === 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this })() || Function('return this')()
      }).call(this)
    }).call(this, typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {})
  }, {}],
  41: [function (require, module, exports) {
    var hasOwnProperty = {}.hasOwnProperty

    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key)
    }
  }, {}],
  42: [function (require, module, exports) {
    module.exports = {}
  }, {}],
  43: [function (require, module, exports) {
    var getBuiltIn = require('../internals/get-built-in')

    module.exports = getBuiltIn('document', 'documentElement')
  }, { '../internals/get-built-in': 39 }],
  44: [function (require, module, exports) {
    var DESCRIPTORS = require('../internals/descriptors')
    var fails = require('../internals/fails')
    var createElement = require('../internals/document-create-element')

    // Thank's IE8 for his funny defineProperty
    module.exports = !DESCRIPTORS && !fails(function () {
      return Object.defineProperty(createElement('div'), 'a', {
        get: function () { return 7 }
      }).a != 7
    })
  }, { '../internals/descriptors': 29, '../internals/document-create-element': 30, '../internals/fails': 37 }],
  45: [function (require, module, exports) {
    var fails = require('../internals/fails')
    var classof = require('../internals/classof-raw')

    var split = ''.split

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    module.exports = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins
      return !Object('z').propertyIsEnumerable(0)
    }) ? function (it) {
        return classof(it) == 'String' ? split.call(it, '') : Object(it)
      } : Object
  }, { '../internals/classof-raw': 23, '../internals/fails': 37 }],
  46: [function (require, module, exports) {
    var store = require('../internals/shared-store')

    var functionToString = Function.toString

    // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
    if (typeof store.inspectSource !== 'function') {
      store.inspectSource = function (it) {
        return functionToString.call(it)
      }
    }

    module.exports = store.inspectSource
  }, { '../internals/shared-store': 71 }],
  47: [function (require, module, exports) {
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
  }, { '../internals/create-non-enumerable-property': 26, '../internals/global': 40, '../internals/has': 41, '../internals/hidden-keys': 42, '../internals/is-object': 50, '../internals/native-weak-map': 53, '../internals/shared-key': 70, '../internals/shared-store': 71 }],
  48: [function (require, module, exports) {
    var classof = require('../internals/classof-raw')

    // `IsArray` abstract operation
    // https://tc39.es/ecma262/#sec-isarray
    module.exports = Array.isArray || function isArray (arg) {
      return classof(arg) == 'Array'
    }
  }, { '../internals/classof-raw': 23 }],
  49: [function (require, module, exports) {
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
  }, { '../internals/fails': 37 }],
  50: [function (require, module, exports) {
    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function'
    }
  }, {}],
  51: [function (require, module, exports) {
    module.exports = false
  }, {}],
  52: [function (require, module, exports) {
    var fails = require('../internals/fails')

    module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
      // Chrome 38 Symbol has incorrect toString conversion
      // eslint-disable-next-line no-undef
      return !String(Symbol())
    })
  }, { '../internals/fails': 37 }],
  53: [function (require, module, exports) {
    var global = require('../internals/global')
    var inspectSource = require('../internals/inspect-source')

    var WeakMap = global.WeakMap

    module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap))
  }, { '../internals/global': 40, '../internals/inspect-source': 46 }],
  54: [function (require, module, exports) {
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
      // eslint-disable-next-line no-undef
      var symbol = Symbol()
      var alphabet = 'abcdefghijklmnopqrst'
      A[symbol] = 7
      alphabet.split('').forEach(function (chr) { B[chr] = chr })
      return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet
    }) ? function assign (target, source) { // eslint-disable-line no-unused-vars
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
  }, { '../internals/descriptors': 29, '../internals/fails': 37, '../internals/indexed-object': 45, '../internals/object-get-own-property-symbols': 60, '../internals/object-keys': 63, '../internals/object-property-is-enumerable': 64, '../internals/to-object': 77 }],
  55: [function (require, module, exports) {
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
        /* global ActiveXObject */
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
  }, { '../internals/an-object': 14, '../internals/document-create-element': 30, '../internals/enum-bug-keys': 35, '../internals/hidden-keys': 42, '../internals/html': 43, '../internals/object-define-properties': 56, '../internals/shared-key': 70 }],
  56: [function (require, module, exports) {
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
  }, { '../internals/an-object': 14, '../internals/descriptors': 29, '../internals/object-define-property': 57, '../internals/object-keys': 63 }],
  57: [function (require, module, exports) {
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
  }, { '../internals/an-object': 14, '../internals/descriptors': 29, '../internals/ie8-dom-define': 44, '../internals/to-primitive': 78 }],
  58: [function (require, module, exports) {
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
  }, { '../internals/create-property-descriptor': 27, '../internals/descriptors': 29, '../internals/has': 41, '../internals/ie8-dom-define': 44, '../internals/object-property-is-enumerable': 64, '../internals/to-indexed-object': 74, '../internals/to-primitive': 78 }],
  59: [function (require, module, exports) {
    var internalObjectKeys = require('../internals/object-keys-internal')
    var enumBugKeys = require('../internals/enum-bug-keys')

    var hiddenKeys = enumBugKeys.concat('length', 'prototype')

    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames (O) {
      return internalObjectKeys(O, hiddenKeys)
    }
  }, { '../internals/enum-bug-keys': 35, '../internals/object-keys-internal': 62 }],
  60: [function (require, module, exports) {
    exports.f = Object.getOwnPropertySymbols
  }, {}],
  61: [function (require, module, exports) {
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
  }, { '../internals/correct-prototype-getter': 25, '../internals/has': 41, '../internals/shared-key': 70, '../internals/to-object': 77 }],
  62: [function (require, module, exports) {
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
  }, { '../internals/array-includes': 16, '../internals/has': 41, '../internals/hidden-keys': 42, '../internals/to-indexed-object': 74 }],
  63: [function (require, module, exports) {
    var internalObjectKeys = require('../internals/object-keys-internal')
    var enumBugKeys = require('../internals/enum-bug-keys')

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    module.exports = Object.keys || function keys (O) {
      return internalObjectKeys(O, enumBugKeys)
    }
  }, { '../internals/enum-bug-keys': 35, '../internals/object-keys-internal': 62 }],
  64: [function (require, module, exports) {
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
  65: [function (require, module, exports) {
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
  }, { '../internals/an-object': 14, '../internals/get-built-in': 39, '../internals/object-get-own-property-names': 59, '../internals/object-get-own-property-symbols': 60 }],
  66: [function (require, module, exports) {
    var global = require('../internals/global')

    module.exports = global
  }, { '../internals/global': 40 }],
  67: [function (require, module, exports) {
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
  }, { '../internals/create-non-enumerable-property': 26, '../internals/global': 40, '../internals/has': 41, '../internals/inspect-source': 46, '../internals/internal-state': 47, '../internals/set-global': 69 }],
  68: [function (require, module, exports) {
    // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on " + it)
      return it
    }
  }, {}],
  69: [function (require, module, exports) {
    var global = require('../internals/global')
    var createNonEnumerableProperty = require('../internals/create-non-enumerable-property')

    module.exports = function (key, value) {
      try {
        createNonEnumerableProperty(global, key, value)
      } catch (error) {
        global[key] = value
      } return value
    }
  }, { '../internals/create-non-enumerable-property': 26, '../internals/global': 40 }],
  70: [function (require, module, exports) {
    var shared = require('../internals/shared')
    var uid = require('../internals/uid')

    var keys = shared('keys')

    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key))
    }
  }, { '../internals/shared': 72, '../internals/uid': 79 }],
  71: [function (require, module, exports) {
    var global = require('../internals/global')
    var setGlobal = require('../internals/set-global')

    var SHARED = '__core-js_shared__'
    var store = global[SHARED] || setGlobal(SHARED, {})

    module.exports = store
  }, { '../internals/global': 40, '../internals/set-global': 69 }],
  72: [function (require, module, exports) {
    var IS_PURE = require('../internals/is-pure')
    var store = require('../internals/shared-store');

    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {})
    })('versions', []).push({
      version: '3.8.3',
      mode: IS_PURE ? 'pure' : 'global',
      copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
    })
  }, { '../internals/is-pure': 51, '../internals/shared-store': 71 }],
  73: [function (require, module, exports) {
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
  }, { '../internals/to-integer': 75 }],
  74: [function (require, module, exports) {
    // toObject with fallback for non-array-like ES3 strings
    var IndexedObject = require('../internals/indexed-object')
    var requireObjectCoercible = require('../internals/require-object-coercible')

    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it))
    }
  }, { '../internals/indexed-object': 45, '../internals/require-object-coercible': 68 }],
  75: [function (require, module, exports) {
    var ceil = Math.ceil
    var floor = Math.floor

    // `ToInteger` abstract operation
    // https://tc39.es/ecma262/#sec-tointeger
    module.exports = function (argument) {
      return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument)
    }
  }, {}],
  76: [function (require, module, exports) {
    var toInteger = require('../internals/to-integer')

    var min = Math.min

    // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength
    module.exports = function (argument) {
      return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0 // 2 ** 53 - 1 == 9007199254740991
    }
  }, { '../internals/to-integer': 75 }],
  77: [function (require, module, exports) {
    var requireObjectCoercible = require('../internals/require-object-coercible')

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    module.exports = function (argument) {
      return Object(requireObjectCoercible(argument))
    }
  }, { '../internals/require-object-coercible': 68 }],
  78: [function (require, module, exports) {
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
  }, { '../internals/is-object': 50 }],
  79: [function (require, module, exports) {
    var id = 0
    var postfix = Math.random()

    module.exports = function (key) {
      return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36)
    }
  }, {}],
  80: [function (require, module, exports) {
    var NATIVE_SYMBOL = require('../internals/native-symbol')

    module.exports = NATIVE_SYMBOL &&
  // eslint-disable-next-line no-undef
  !Symbol.sham &&
  // eslint-disable-next-line no-undef
  typeof Symbol.iterator === 'symbol'
  }, { '../internals/native-symbol': 52 }],
  81: [function (require, module, exports) {
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
      if (!has(WellKnownSymbolsStore, name)) {
        if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name]
        else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name)
      } return WellKnownSymbolsStore[name]
    }
  }, { '../internals/global': 40, '../internals/has': 41, '../internals/native-symbol': 52, '../internals/shared': 72, '../internals/uid': 79, '../internals/use-symbol-as-uid': 80 }],
  82: [function (require, module, exports) {
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
      concat: function concat (arg) { // eslint-disable-line no-unused-vars
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
  }, { '../internals/array-method-has-species-support': 18, '../internals/array-species-create': 22, '../internals/create-property': 28, '../internals/engine-v8-version': 34, '../internals/export': 36, '../internals/fails': 37, '../internals/is-array': 48, '../internals/is-object': 50, '../internals/to-length': 76, '../internals/to-object': 77, '../internals/well-known-symbol': 81 }],
  83: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var $find = require('../internals/array-iteration').find
    var addToUnscopables = require('../internals/add-to-unscopables')
    var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length')

    var FIND = 'find'
    var SKIPS_HOLES = true

    var USES_TO_LENGTH = arrayMethodUsesToLength(FIND)

    // Shouldn't skip holes
    if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false })

    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    $({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
      find: function find (callbackfn /* , that = undefined */) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      }
    })

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables(FIND)
  }, { '../internals/add-to-unscopables': 13, '../internals/array-iteration': 17, '../internals/array-method-uses-to-length': 20, '../internals/export': 36 }],
  84: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var forEach = require('../internals/array-for-each')

    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    $({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
      forEach: forEach
    })
  }, { '../internals/array-for-each': 15, '../internals/export': 36 }],
  85: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var $indexOf = require('../internals/array-includes').indexOf
    var arrayMethodIsStrict = require('../internals/array-method-is-strict')
    var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length')

    var nativeIndexOf = [].indexOf

    var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0
    var STRICT_METHOD = arrayMethodIsStrict('indexOf')
    var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 })

    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    $({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
      indexOf: function indexOf (searchElement /* , fromIndex = 0 */) {
        return NEGATIVE_ZERO
        // convert -0 to +0
          ? nativeIndexOf.apply(this, arguments) || 0
          : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/array-includes': 16, '../internals/array-method-is-strict': 19, '../internals/array-method-uses-to-length': 20, '../internals/export': 36 }],
  86: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var $map = require('../internals/array-iteration').map
    var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support')
    var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length')

    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map')
    // FF49- issue
    var USES_TO_LENGTH = arrayMethodUsesToLength('map')

    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    // with adding support of @@species
    $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
      map: function map (callbackfn /* , thisArg */) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/array-iteration': 17, '../internals/array-method-has-species-support': 18, '../internals/array-method-uses-to-length': 20, '../internals/export': 36 }],
  87: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var $reduce = require('../internals/array-reduce').left
    var arrayMethodIsStrict = require('../internals/array-method-is-strict')
    var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length')
    var CHROME_VERSION = require('../internals/engine-v8-version')
    var IS_NODE = require('../internals/engine-is-node')

    var STRICT_METHOD = arrayMethodIsStrict('reduce')
    var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 })
    // Chrome 80-82 has a critical bug
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
    var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83

    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    $({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
      reduce: function reduce (callbackfn /* , initialValue */) {
        return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/array-method-is-strict': 19, '../internals/array-method-uses-to-length': 20, '../internals/array-reduce': 21, '../internals/engine-is-node': 32, '../internals/engine-v8-version': 34, '../internals/export': 36 }],
  88: [function (require, module, exports) {
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
    var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length')

    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice')
    var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 })

    var SPECIES = wellKnownSymbol('species')
    var nativeSlice = [].slice
    var max = Math.max

    // `Array.prototype.slice` method
    // https://tc39.es/ecma262/#sec-array.prototype.slice
    // fallback for not array-like ES3 strings and DOM objects
    $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
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
  }, { '../internals/array-method-has-species-support': 18, '../internals/array-method-uses-to-length': 20, '../internals/create-property': 28, '../internals/export': 36, '../internals/is-array': 48, '../internals/is-object': 50, '../internals/to-absolute-index': 73, '../internals/to-indexed-object': 74, '../internals/to-length': 76, '../internals/well-known-symbol': 81 }],
  89: [function (require, module, exports) {
    'use strict'
    var $ = require('../internals/export')
    var toAbsoluteIndex = require('../internals/to-absolute-index')
    var toInteger = require('../internals/to-integer')
    var toLength = require('../internals/to-length')
    var toObject = require('../internals/to-object')
    var arraySpeciesCreate = require('../internals/array-species-create')
    var createProperty = require('../internals/create-property')
    var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support')
    var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length')

    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice')
    var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 })

    var max = Math.max
    var min = Math.min
    var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF
    var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'

    // `Array.prototype.splice` method
    // https://tc39.es/ecma262/#sec-array.prototype.splice
    // with adding support of @@species
    $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
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
  }, { '../internals/array-method-has-species-support': 18, '../internals/array-method-uses-to-length': 20, '../internals/array-species-create': 22, '../internals/create-property': 28, '../internals/export': 36, '../internals/to-absolute-index': 73, '../internals/to-integer': 75, '../internals/to-length': 76, '../internals/to-object': 77 }],
  90: [function (require, module, exports) {
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
  }, { '../internals/descriptors': 29, '../internals/object-define-property': 57 }],
  91: [function (require, module, exports) {
    var $ = require('../internals/export')
    var assign = require('../internals/object-assign')

    // `Object.assign` method
    // https://tc39.es/ecma262/#sec-object.assign
    $({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
      assign: assign
    })
  }, { '../internals/export': 36, '../internals/object-assign': 54 }],
  92: [function (require, module, exports) {
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
  }, { '../internals/correct-prototype-getter': 25, '../internals/export': 36, '../internals/fails': 37, '../internals/object-get-prototype-of': 61, '../internals/to-object': 77 }],
  93: [function (require, module, exports) {
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
  }, { '../internals/export': 36, '../internals/fails': 37, '../internals/object-keys': 63, '../internals/to-object': 77 }],
  94: [function (require, module, exports) {
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
  }, { '../internals/array-for-each': 15, '../internals/create-non-enumerable-property': 26, '../internals/dom-iterables': 31, '../internals/global': 40 }]
}, {}, [11])
