(function () { function r (e, n, t) { function o (i, f) { if (!n[i]) { if (!e[i]) { const c = typeof require === 'function' && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); const a = new Error("Cannot find module '" + i + "'"); throw a.code = 'MODULE_NOT_FOUND', a } const p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { const n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = typeof require === 'function' && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
  1: [function (require, module, exports) {
    (function (global) {
      (function () {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = void 0

        require('core-js/modules/es.object.assign.js')

        require('core-js/stable')

        const _functions = _interopRequireDefault(require('./source/functions'))

        const _objects = _interopRequireDefault(require('./source/objects'))

        function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

        /**
 * All of the JSON DOM system functions for creating JSON components.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jsonDom
 */

        /**
 * Store a reference to this scope which will be Window if rendered via browser
 */
        const root = void 0 || window || global || {}
        /**
 * Store reference to any pre-existing module of the same name
 * @type {module|*}
 */

        const previousJsonDom = root.jsonDom || {}
        /**
 * All methods exported from this module are encapsulated within jsonDom.
 * @typedef {module:jsonDom|module:domFunctions|module:domObjects} jsonDom
 */

        const jsonDom = {}
        root.jsonDom = jsonDom
        /**
 * Return a reference to this library while preserving the original same-named library
 * @function
 * @returns {module:jsonDom~jsonDom|module:domFunctions|module:domObjects}
 */

        const noConflict = function noConflict () {
          root.jsonDom = previousJsonDom
          return jsonDom
        }

        jsonDom.noConflict = noConflict

        const _default = root.jsonDom = Object.assign(jsonDom, _functions.default, _objects.default)

        exports.default = _default
      }).call(this)
    }).call(this, typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {})
  }, { './source/functions': 2, './source/objects': 36, 'core-js/modules/es.object.assign.js': 308, 'core-js/stable': 457 }],
  2: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _appendAndReturnChild = _interopRequireDefault(require('./functions/appendAndReturnChild'))

    const _appendHtml = _interopRequireDefault(require('./functions/appendHtml'))

    const _appendListeners = _interopRequireDefault(require('./functions/appendListeners'))

    const _assignListener = _interopRequireDefault(require('./functions/assignListener'))

    const _bindAllListeners = _interopRequireDefault(require('./functions/bindAllListeners'))

    const _bindElement = _interopRequireDefault(require('./functions/bindElement'))

    const _bindElementListeners = _interopRequireDefault(require('./functions/bindElementListeners'))

    const _bindListeners = _interopRequireDefault(require('./functions/bindListeners'))

    const _elementChanges = _interopRequireDefault(require('./functions/elementChanges'))

    const _elementCompareClassList = _interopRequireDefault(require('./functions/elementCompareClassList'))

    const _elementHasAttribute = _interopRequireDefault(require('./functions/elementHasAttribute'))

    const _gatherChildItems = _interopRequireDefault(require('./functions/gatherChildItems'))

    const _generateElement = _interopRequireDefault(require('./functions/generateElement'))

    const _getChildTest = _interopRequireDefault(require('./functions/getChildTest'))

    const _getChildrenByClass = _interopRequireDefault(require('./functions/getChildrenByClass'))

    const _getChildrenByName = _interopRequireDefault(require('./functions/getChildrenByName'))

    const _getChildrenFromAttribute = _interopRequireDefault(require('./functions/getChildrenFromAttribute'))

    const _getParentsByClass = _interopRequireDefault(require('./functions/getParentsByClass'))

    const _getParentsByName = _interopRequireDefault(require('./functions/getParentsByName'))

    const _getParentsByTagName = _interopRequireDefault(require('./functions/getParentsByTagName'))

    const _getParentsFromAttribute = _interopRequireDefault(require('./functions/getParentsFromAttribute'))

    const _getTopParentItem = _interopRequireDefault(require('./functions/getTopParentItem'))

    const _listenerOptions = _interopRequireDefault(require('./functions/listenerOptions'))

    const _registerListener = _interopRequireDefault(require('./functions/registerListener'))

    const _registerListeners = _interopRequireDefault(require('./functions/registerListeners'))

    const _removeChild = _interopRequireDefault(require('./functions/removeChild'))

    const _renderHtml = _interopRequireDefault(require('./functions/renderHtml'))

    const _retrieveListener = _interopRequireDefault(require('./functions/retrieveListener'))

    const _retrieveParentItem = _interopRequireDefault(require('./functions/retrieveParentItem'))

    const _setAndReturnAttribute = _interopRequireDefault(require('./functions/setAndReturnAttribute'))

    const _setAttribute = _interopRequireDefault(require('./functions/setAttribute'))

    const _updateElement = _interopRequireDefault(require('./functions/updateElement'))

    const _updateElements = _interopRequireDefault(require('./functions/updateElements'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * @file Core Dom management functions
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module domFunctions
 */
    const _default = {
      appendAndReturnChild: _appendAndReturnChild.default,
      appendHtml: _appendHtml.default,
      appendListeners: _appendListeners.default,
      assignListener: _assignListener.default,
      bindAllListeners: _bindAllListeners.default,
      bindElement: _bindElement.default,
      bindElementListeners: _bindElementListeners.default,
      bindListeners: _bindListeners.default,
      elementChanges: _elementChanges.default,
      elementCompareClassList: _elementCompareClassList.default,
      elementHasAttribute: _elementHasAttribute.default,
      gatherChildItems: _gatherChildItems.default,
      generateElement: _generateElement.default,
      getChildTest: _getChildTest.default,
      getChildrenByClass: _getChildrenByClass.default,
      getChildrenByName: _getChildrenByName.default,
      getChildrenFromAttribute: _getChildrenFromAttribute.default,
      getParentsByClass: _getParentsByClass.default,
      getParentsByName: _getParentsByName.default,
      getParentsByTagName: _getParentsByTagName.default,
      getParentsFromAttribute: _getParentsFromAttribute.default,
      getTopParentItem: _getTopParentItem.default,
      listenerOptions: _listenerOptions.default,
      registerListener: _registerListener.default,
      registerListeners: _registerListeners.default,
      removeChild: _removeChild.default,
      renderHtml: _renderHtml.default,
      retrieveListener: _retrieveListener.default,
      retrieveParentItem: _retrieveParentItem.default,
      setAndReturnAttribute: _setAndReturnAttribute.default,
      setAttribute: _setAttribute.default,
      updateElement: _updateElement.default,
      updateElements: _updateElements.default
    }
    exports.default = _default
  }, { './functions/appendAndReturnChild': 3, './functions/appendHtml': 4, './functions/appendListeners': 5, './functions/assignListener': 6, './functions/bindAllListeners': 7, './functions/bindElement': 8, './functions/bindElementListeners': 9, './functions/bindListeners': 10, './functions/elementChanges': 11, './functions/elementCompareClassList': 12, './functions/elementHasAttribute': 13, './functions/gatherChildItems': 14, './functions/generateElement': 15, './functions/getChildTest': 16, './functions/getChildrenByClass': 17, './functions/getChildrenByName': 18, './functions/getChildrenFromAttribute': 19, './functions/getParentsByClass': 20, './functions/getParentsByName': 21, './functions/getParentsByTagName': 22, './functions/getParentsFromAttribute': 23, './functions/getTopParentItem': 24, './functions/listenerOptions': 25, './functions/registerListener': 26, './functions/registerListeners': 27, './functions/removeChild': 28, './functions/renderHtml': 29, './functions/retrieveListener': 30, './functions/retrieveParentItem': 31, './functions/setAndReturnAttribute': 32, './functions/setAttribute': 33, './functions/updateElement': 34, './functions/updateElements': 35, 'core-js/stable': 457 }],
  3: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _documentItem = _interopRequireDefault(require('../objects/documentItem'))

    const _retrieveParentItem = _interopRequireDefault(require('./retrieveParentItem'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Provide a DomItem to be appended to a parent item, return the DomItem.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} child - A DomItem to be appended
 * @param {DomItem} parent - A parent item to have a new child appended
 * @returns {DomItem}
 */
    const appendAndReturnChild = function appendAndReturnChild (child) {
      const parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default.body;
      (0, _retrieveParentItem.default)(parent).element.appendChild(child.element)
      return child
    }

    const _default = appendAndReturnChild
    exports.default = _default
  }, { '../objects/documentItem': 39, './retrieveParentItem': 31, 'core-js/stable': 457 }],
  4: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    const _documentItem = _interopRequireDefault(require('../objects/documentItem'))

    const _appendAndReturnChild = _interopRequireDefault(require('./appendAndReturnChild'))

    const _bindElement = _interopRequireDefault(require('./bindElement'))

    const _retrieveParentItem = _interopRequireDefault(require('./retrieveParentItem'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Append a new DomItem which has the element generated.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - A new DomItem to append
 * @param {DomItem} parent - The parent to have DomItems appended
 * @returns {DomItem}
 */
    const appendHtml = function appendHtml (item) {
      const parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default.body
      return (0, _appendAndReturnChild.default)((0, _bindElement.default)(item), _functionalHelpers.default.setValue('children', _functionalHelpers.default.addUniqueToArray(item, (0, _retrieveParentItem.default)(parent).children), (0, _retrieveParentItem.default)(parent)))
    }

    const _default = appendHtml
    exports.default = _default
  }, { '../objects/documentItem': 39, './appendAndReturnChild': 3, './bindElement': 8, './retrieveParentItem': 31, 'core-js/stable': 457, 'functional-helpers': 509 }],
  5: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * When there may be extra data needed for the event listener function call, this function may be used as a helper
 * to pass the additional data. Also, if it is desirable to add event listeners during run-time, this function can be
 * used to achieve this.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which will have its eventListeners updated.
 * @param {string} event - The string name of the event trigger type to be added.
 * @param {string} listener - The name of the function to be called once the event is triggered.
 * @param {Object} args - Additional arguments to be used in the listener function.
 * @param {EventListenerOptions} options - The strategy used when the event is triggered.
 * @returns {DomItem}
 */
    const appendListeners = function appendListeners (item, event, listener) {
      const args = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}
      const options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false
      return _functionalHelpers.default.setValue('children', _functionalHelpers.default.mapObject(item.children, function (i) {
        return appendListeners(i, event, listener, args, options)
      }), _functionalHelpers.default.setValue('eventListeners', _functionalHelpers.default.setValue(event, {
        listenerFunc: listener,
        listenerArgs: args,
        listenerOptions: options
      }, item.eventListeners), item))
    }

    const _default = appendListeners
    exports.default = _default
  }, { 'core-js/stable': 457, 'functional-helpers': 509 }],
  6: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _listenerOptions = _interopRequireDefault(require('./listenerOptions'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Provide compatibility for assigning listeners.
 * @function
 * @memberOf module:domFunctions
 * @param {HTMLElementEventMap} trigger - The name of the event which will trigger the listenerFunction on the element.
 * @param {HTMLElement} elem - An element to append the listener onto
 * @param {listenerFunction|function} fn - The function which will be invoked when the
 * event is triggered
 * @param {EventListenerOptions} options - Additional options to how the event will be
 * fired
 * @returns {listenerFunction|function}
 */
    const assignListener = function assignListener (trigger, elem, fn, options) {
      // Attaching a listener may be done differently based on the browser support
      if (elem.addEventListener) {
        // Latest support is provided fro addEventListener with the options parameter varying slightly
        elem.addEventListener(trigger, fn, (0, _listenerOptions.default)(options))
      } else if (elem.attachEvent) {
        // Older browsers, especially Internet Explorer
        elem.attachEvent('on'.concat(trigger), fn)
      } else {
        // General support for adding a new function onto the element which can be called to trigger the function
        elem['on'.concat(trigger)] = fn
      }

      return fn
    }

    const _default = assignListener
    exports.default = _default
  }, { './listenerOptions': 25, 'core-js/stable': 457 }],
  7: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    const _bindListeners = _interopRequireDefault(require('./bindListeners'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Based on the eventListeners property of the provided item, bind the listeners to the associated element property
 * for each item in the domObjects.DomItem structure.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem with an associated HTMLElement to have a listener
 * assigned
 * @returns {DomItem}
 */
    const bindAllListeners = function bindAllListeners (item) {
      return _functionalHelpers.default.setValue('children', _functionalHelpers.default.mapObject(item.children, function (i) {
        return bindAllListeners(i)
      }), (0, _bindListeners.default)(item))
    }

    const _default = bindAllListeners
    exports.default = _default
  }, { './bindListeners': 10, 'core-js/stable': 457, 'functional-helpers': 509 }],
  8: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    const _generateElement = _interopRequireDefault(require('./generateElement'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Generate HTML element data for a provided DomItem
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem needing element to be generated
 * @return {DomItem}
 */
    const bindElement = function bindElement (item) {
      return _functionalHelpers.default.setValue('element', !item.element || !item.element.style ? (0, _generateElement.default)(item).element : item.element, item)
    }

    const _default = bindElement
    exports.default = _default
  }, { './generateElement': 15, 'core-js/stable': 457, 'functional-helpers': 509 }],
  9: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which has eventListeners to apply to its element
 * @returns {DomItem}
 */
    const bindElementListeners = function bindElementListeners (item) {
      return _functionalHelpers.default.setValue('eventListeners', _functionalHelpers.default.mapObject(item.eventListeners, function (attr, event) {
        return assignListener(event, item.element, function (e) {
          return attr.listenerFunc(e, item, attr.listenerArgs)
        }, attr.listenerOptions)
      }), item)
    }

    const _default = bindElementListeners
    exports.default = _default
  }, { 'core-js/stable': 457, 'functional-helpers': 509 }],
  10: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.object.keys.js')

    require('core-js/stable')

    const _bindElementListeners = _interopRequireDefault(require('./bindElementListeners'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Based on the eventListeners property of the provided item, bind the
 * listeners to the associated element property for the provided domObjects.DomItem.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which may have eventListeners to apply to its
 * element
 * @returns {DomItem}
 */
    const bindListeners = function bindListeners (item) {
      return item.eventListeners && Object.keys(item.eventListeners).length && item.element.style ? (0, _bindElementListeners.default)(item) : item
    }

    const _default = bindListeners
    exports.default = _default
  }, { './bindElementListeners': 9, 'core-js/modules/es.object.keys.js': 326, 'core-js/stable': 457 }],
  11: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    const _elementHasAttribute = _interopRequireDefault(require('./elementHasAttribute'))

    const _generateElement = _interopRequireDefault(require('./generateElement'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    /**
 * Given a domObjects.DomItem as config, this function will return the changes to be applied
 * to the stored element property.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having config changes to be applied to its
 * element
 * @returns {DomItem}
 */
    const elementChanges = function elementChanges (config) {
      return config.element.tagName.toLowerCase() !== config.tagName.toLowerCase() // Generate a new element since the tag has changed
        ? (0, _generateElement.default)(config) // Remove all the similarities
        : _functionalHelpers.default.setValue('attributes', _functionalHelpers.default.filterObject(config.attributes, // For each attribute, check if it becomes true / false based on the comparison results
          function (attr1, key1) {
            return _functionalHelpers.default.filterObject( // Get attributes as object of truthy and falsy values
              _functionalHelpers.default.mapObject(config.attributes, function (attr2, key2) {
                return _typeof(attr2) === 'object' || key2 === 'className' // Apply custom logic for class and styles, only keep the updates
                  ? _functionalHelpers.default.filterObject((0, _elementHasAttribute.default)(config.element, key2, attr2), function (attr3) {
                    return attr3 === 1
                  }) // True when the element does not already have the attribute
                  : !(0, _elementHasAttribute.default)(config.element, key2, attr2)
              }), // Remove when the attr4 value is 0 or false, or not empty object
              function (attr4) {
                return !!attr4
              })[key1]
          }), config)
    }

    const _default = elementChanges
    exports.default = _default
  }, { './elementHasAttribute': 13, './generateElement': 15, 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/es.string.iterator.js': 375, 'core-js/modules/es.symbol.description.js': 397, 'core-js/modules/es.symbol.iterator.js': 400, 'core-js/modules/es.symbol.js': 401, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457, 'functional-helpers': 509 }],
  12: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.regexp.exec.js')

    require('core-js/modules/es.string.split.js')

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Check if a class exists on the element, return object with keys for each class and a -1, 0, 1 difference indicator.
 * @function
 * @memberOf module:domFunctions
 * @param {HTMLElement} element - Provide an element to check classes
 * on.
 * @param {string} classes - A string of classes (like the content of the 'class' attribute) to be compared
 * @returns {Object<string, number>|*}
 */
    const elementCompareClassList = function elementCompareClassList (element, classes) {
      return _functionalHelpers.default.compareArrays(classes.split(' '), [].from(element.classList))
    }

    const _default = elementCompareClassList
    exports.default = _default
  }, { 'core-js/modules/es.regexp.exec.js': 356, 'core-js/modules/es.string.split.js': 387, 'core-js/stable': 457, 'functional-helpers': 509 }],
  13: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.regexp.exec.js')

    require('core-js/modules/es.string.split.js')

    require('core-js/modules/es.object.keys.js')

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Check if the provided Element has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @function
 * @memberOf module:domFunctions
 * @param {HTMLElement} element - Receive the element to be assessed
 * @param {string} key - The attribute name to search for
 * @param {string|Object} attr - The expected value of the attribute to compare against
 * @returns {boolean|Object.<string, number>}
 */
    const elementHasAttribute = function elementHasAttribute (element, key, attr) {
      if (!element.style) {
        return false
      }

      if (/^(style|className)$/.test(key)) {
        // For attributes which are objects or multi-part strings
        // -1 = remove attribute, 0 = no change, 1 = add attribute
        return _functionalHelpers.default.compareArrays(typeof attr === 'string' ? attr.split(' ') : Object.keys(attr), typeof attr === 'string' ? element[key].split(' ') : Object.keys(element[key]))
      }

      return element.hasAttribute(key) && element.getAttribute(key) === attr
    }

    const _default = elementHasAttribute
    exports.default = _default
  }, { 'core-js/modules/es.object.keys.js': 326, 'core-js/modules/es.regexp.exec.js': 356, 'core-js/modules/es.string.split.js': 387, 'core-js/stable': 457, 'functional-helpers': 509 }],
  14: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.concat.js')

    require('core-js/stable')

    /**
 * To be used with gatherChildItems which will start at item and recurse over all child items, this test
 * will then choose which child items will be returned as the result of the test.
 * @callback module:domFunctions~testChildItem
 * @memberOf module:domFunctions
 * @param {DomItem|Object} item - The DomItem is the child being tested
 * @param {Array.<DomItem>} gatheredResults - All of the child items gathered based on
 * the test
 * @returns {Array.<DomItem>}
 */

    /**
 * A selector function for retrieving existing child domObjects.DomItems from the given parent item.
 * This function will check all the children starting from and including item, and run the test function on each
 * child encountered. The return array contains children returned from the test from all levels.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @param {module:domFunctions~testChildItem} test - Assess each child, and return the ones which qualify
 * @returns {Array.<DomItem>}
 */
    const gatherChildItems = function gatherChildItems (item, test) {
      return test(item, item.children.reduce(function (a, b) {
        return a.concat(gatherChildItems(b, test))
      }, []))
    }

    const _default = gatherChildItems
    exports.default = _default
  }, { 'core-js/modules/es.array.concat.js': 232, 'core-js/stable': 457 }],
  15: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    const _updateElement = _interopRequireDefault(require('./updateElement'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Create an HTML element based on the provided attributes and return the element as an Object.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem requiring matching HTML element property
 * @return {DomItem}
 */
    const generateElement = function generateElement (config) {
      return (0, _updateElement.default)(_functionalHelpers.default.setValue('element', document.createElement(config.tagName), config))
    }

    const _default = generateElement
    exports.default = _default
  }, { './updateElement': 34, 'core-js/stable': 457, 'functional-helpers': 509 }],
  16: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.concat.js')

    require('core-js/stable')

    /**
 * Retrieve the {@link module:domFunctions~testChildItem} function by providing an attribute and value to check.
 * @function
 * @memberOf module:domFunctions
 * @param {string} attr - Provide the attribute name to be searched
 * @param {*} value - The attribute value to be compared
 * @returns {module:domFunctions~testChildItem}
 */
    const getChildTest = function getChildTest (attr, value) {
      return function (item, gatheredResults) {
        return item.attributes[attr] && item.attributes[attr] === value ? gatheredResults.concat([item]) : gatheredResults
      }
    }

    const _default = getChildTest
    exports.default = _default
  }, { 'core-js/modules/es.array.concat.js': 232, 'core-js/stable': 457 }],
  17: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    const _getChildrenFromAttribute = _interopRequireDefault(require('./getChildrenFromAttribute'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Helper for getting all domObjects.DomItems starting at parent and having specified className attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {DomItem[]}
 */
    const getChildrenByClass = _functionalHelpers.default.curry(_getChildrenFromAttribute.default)('className')

    const _default = getChildrenByClass
    exports.default = _default
  }, { './getChildrenFromAttribute': 19, 'core-js/stable': 457, 'functional-helpers': 509 }],
  18: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    const _getChildrenFromAttribute = _interopRequireDefault(require('./getChildrenFromAttribute'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Helper for getting all domObjects.DomItems starting at parent and having specified name attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {DomItem[]}
 */
    const getChildrenByName = _functionalHelpers.default.curry(_getChildrenFromAttribute.default)('name')

    const _default = getChildrenByName
    exports.default = _default
  }, { './getChildrenFromAttribute': 19, 'core-js/stable': 457, 'functional-helpers': 509 }],
  19: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _documentItem = _interopRequireDefault(require('../objects/documentItem'))

    const _gatherChildItems = _interopRequireDefault(require('./gatherChildItems'))

    const _getChildTest = _interopRequireDefault(require('./getChildTest'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * A selector function for retrieving existing child domObjects.DomItems from the given parent item.
 * This function will check all the children starting from item, and scan the attributes
 * property for matches. The returned array contains children matching from all levels.
 * WARNING: This calls a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {string} attr - Provide the attribute name to be searched
 * @param {*} value - The attribute value to be compared
 * @param {DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @returns {Array.<DomItem>}
 */
    const getChildrenFromAttribute = function getChildrenFromAttribute (attr, value) {
      const item = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _documentItem.default.body
      return (0, _gatherChildItems.default)(item, (0, _getChildTest.default)(attr, value))
    }

    const _default = getChildrenFromAttribute
    exports.default = _default
  }, { '../objects/documentItem': 39, './gatherChildItems': 14, './getChildTest': 16, 'core-js/stable': 457 }],
  20: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    const _getParentsFromAttribute = _interopRequireDefault(require('./getParentsFromAttribute'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Helper for getting all domObjects.DomItems starting at child and having specified className attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {Array}
 */
    const getParentsByClass = _functionalHelpers.default.curry(_getParentsFromAttribute.default)('className')

    const _default = getParentsByClass
    exports.default = _default
  }, { './getParentsFromAttribute': 23, 'core-js/stable': 457, 'functional-helpers': 509 }],
  21: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    const _getParentsFromAttribute = _interopRequireDefault(require('./getParentsFromAttribute'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Helper for getting all domObjects.DomItems starting at child and having specified name attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {Array}
 */
    const getParentsByName = _functionalHelpers.default.curry(_getParentsFromAttribute.default)('name')

    const _default = getParentsByName
    exports.default = _default
  }, { './getParentsFromAttribute': 23, 'core-js/stable': 457, 'functional-helpers': 509 }],
  22: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    const _getParentsFromAttribute = _interopRequireDefault(require('./getParentsFromAttribute'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Helper for getting all domObjects.DomItems starting at child and having specified tagName
 * @function
 * @memberOf module:domFunctions
 * @returns {Array}
 */
    const getParentsByTagName = _functionalHelpers.default.curry(_getParentsFromAttribute.default)('tagName')

    const _default = getParentsByTagName
    exports.default = _default
  }, { './getParentsFromAttribute': 23, 'core-js/stable': 457, 'functional-helpers': 509 }],
  23: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.object.keys.js')

    require('core-js/modules/es.array.concat.js')

    require('core-js/stable')

    const _documentItem = _interopRequireDefault(require('../objects/documentItem'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * A selector function for retrieving existing child domObjects.DomItems from the given parent item.
 * This function will check all the children starting from item, and scan the attributes
 * property for matches. The return array contains children matching from all levels.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {string} attr - Provide the attribute name to be searched
 * @param {*} value - The attribute value to be compared
 * @param {DomItem} item - The DomItem which may have parent items matching the
 * attribute criteria
 * @returns {Array}
 */
    const getParentsFromAttribute = function getParentsFromAttribute (attr, value) {
      const item = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _documentItem.default.body
      return Object.keys(item.parentItem).length ? (item.parentItem.attributes[attr] || item[attr] || false) === value ? getParentsFromAttribute(attr, value, item.parentItem).concat([item.parentItem]) : getParentsFromAttribute(attr, value, item.parentItem) : []
    }

    const _default = getParentsFromAttribute
    exports.default = _default
  }, { '../objects/documentItem': 39, 'core-js/modules/es.array.concat.js': 232, 'core-js/modules/es.object.keys.js': 326, 'core-js/stable': 457 }],
  24: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.object.keys.js')

    require('core-js/stable')

    /**
 * Get the upper parentItem for the provided child. (usually this is a documentItem reference)
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which we want the highest parent item of
 * @returns {DomItemRoot}
 */
    const getTopParentItem = function getTopParentItem (item) {
      return Object.keys(item.parentItem).length ? getTopParentItem(item.parentItem) : item
    }

    const _default = getTopParentItem
    exports.default = _default
  }, { 'core-js/modules/es.object.keys.js': 326, 'core-js/stable': 457 }],
  25: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/stable')

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    /**
 * Provide compatibility for using the options parameter of addEventListener
 * @function
 * @memberOf module:domFunctions
 * @param {EventListenerOptions} options - An object or boolean with the listener options
 * @returns {boolean}
 */
    const listenerOptions = function listenerOptions (options) {
      if (typeof listenerOptions.supportsOptions === 'undefined') {
        // Check if supportsOptions has been defined. This is a compatibility checking flag.
        listenerOptions.supportsOptions = true

        try {
          // If it is possible to use OptionsObject, then set our flag to true
          window.addEventListener('test', null, {
            capture: false,
            once: false,
            passive: false
          })
        } catch (err) {
          // When using an OptionsObjects fails, it is only possible to pass the boolean UseCapture as the option
          listenerOptions.supportsOptions = false
        }
      }

      return _typeof(options) === 'object' && listenerOptions.supportsOptions ? options : false
    }

    const _default = listenerOptions
    exports.default = _default
  }, { 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/es.string.iterator.js': 375, 'core-js/modules/es.symbol.description.js': 397, 'core-js/modules/es.symbol.iterator.js': 400, 'core-js/modules/es.symbol.js': 401, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457 }],
  26: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.function.name.js')

    require('core-js/modules/es.object.assign.js')

    require('core-js/stable')

    const _documentItem = _interopRequireDefault(require('../objects/documentItem'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    function _defineProperty (obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }) } else { obj[key] = value } return obj }

    /**
 * Register a single listener function as part of the root domObjects.DomItem.
 * @function
 * @memberOf module:domFunctions
 * @param {listenerFunction|function} listener - Provide a function which will be called
 * when a Dom event is triggered.
 * @param {string} [name] - The name of the listener to be used.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
 * stores has eventListeners property.
 * @returns {Object.<string, listenerFunction>}
 */
    const registerListener = function registerListener (listener) {
      const name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : listener.name
      const parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _documentItem.default
      return Object.assign(parent.eventListeners, _defineProperty({}, name, listener))
    }

    const _default = registerListener
    exports.default = _default
  }, { '../objects/documentItem': 39, 'core-js/modules/es.function.name.js': 273, 'core-js/modules/es.object.assign.js': 308, 'core-js/stable': 457 }],
  27: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    const _documentItem = _interopRequireDefault(require('../objects/documentItem'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Register multiple listeners from an array of functions.
 * @function
 * @memberOf module:domFunctions
 * @param {Array.<listenerFunction|function>} listeners - An array of functions to be
 * used as the registered event listeners.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
 * stores has eventListeners property.
 * @returns {DomItemRoot|Object}
 */
    const registerListeners = function registerListeners (listeners) {
      const parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default
      return _functionalHelpers.default.setValue('eventListeners', _functionalHelpers.default.mergeObjectsMutable(parent.eventListeners, listeners), parent)
    }

    const _default = registerListeners
    exports.default = _default
  }, { '../objects/documentItem': 39, 'core-js/stable': 457, 'functional-helpers': 509 }],
  28: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.splice.js')

    require('core-js/stable')

    const _documentItem = _interopRequireDefault(require('../objects/documentItem'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Reverse of appendHtml, remove a DomItem and have the associated element removed.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem with HTMLElement to be removed
 * @param {DomItem} parent - The parent of the items
 * @returns {Array.<DomItem>}
 */
    const removeChild = function removeChild (item) {
      const parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default.body
      parent.element.removeChild(item.element)
      return parent.children.splice(parent.children.indexOf(item), 1)
    }

    const _default = removeChild
    exports.default = _default
  }, { '../objects/documentItem': 39, 'core-js/modules/es.array.splice.js': 258, 'core-js/stable': 457 }],
  29: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.map.js')

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    const _documentItem = _interopRequireDefault(require('../objects/documentItem'))

    const _bindElement = _interopRequireDefault(require('./bindElement'))

    const _retrieveListener = _interopRequireDefault(require('./retrieveListener'))

    const _getTopParentItem = _interopRequireDefault(require('./getTopParentItem'))

    const _bindListeners = _interopRequireDefault(require('./bindListeners'))

    const _appendHtml = _interopRequireDefault(require('./appendHtml'))

    const _createDomItem = _interopRequireDefault(require('../objects/createDomItem'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * This is a shortcut for building the specified HTML elements and appending them to the Dom
 * with associated listeners.
 * The final argument is specific for adding event listeners with options.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem that we want to render the element for
 * @param {DomItemRoot} parent - The Base Dom item which is the parent of all the items
 * @returns {DomItem}
 */
    const renderHtml = function renderHtml (item) {
      const parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default
      return _functionalHelpers.default.pipe(function (domItem) {
        return _functionalHelpers.default.setValue('element', domItem.element && domItem.element.style ? domItem.element : (0, _bindElement.default)(domItem).element, domItem)
      }, function (domItem) {
        return _functionalHelpers.default.setValue('eventListeners', _functionalHelpers.default.mapObject(domItem.eventListeners, function (prop) {
          return _functionalHelpers.default.mergeObjects(prop, {
            listenerFunc: (0, _retrieveListener.default)(prop.listenerFunc, (0, _getTopParentItem.default)(parent))
          })
        }), domItem)
      }, _functionalHelpers.default.curry(_functionalHelpers.default.setValue)('parentItem', parent.body || parent), function (domItem) {
        return (0, _bindListeners.default)((0, _appendHtml.default)(domItem, parent))
      }, function (domItem) {
        return _functionalHelpers.default.setValue('children', domItem.children.map(function (child) {
          return renderHtml(child, domItem)
        }), domItem)
      })(_functionalHelpers.default.reduceObject((0, _createDomItem.default)(item), function (domItem, prop, name) {
        return _functionalHelpers.default.setValue(name, prop, domItem)
      }, item))
    }

    const _default = renderHtml
    exports.default = _default
  }, { '../objects/createDomItem': 37, '../objects/documentItem': 39, './appendHtml': 4, './bindElement': 8, './bindListeners': 10, './getTopParentItem': 24, './retrieveListener': 30, 'core-js/modules/es.array.map.js': 249, 'core-js/stable': 457, 'functional-helpers': 509 }],
  30: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.includes.js')

    require('core-js/modules/es.string.includes.js')

    require('core-js/modules/es.object.keys.js')

    require('core-js/stable')

    const _documentItem = _interopRequireDefault(require('../objects/documentItem'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Based on the provided function / listener name, retrieve the associated function from the root domObjects.DomItem
 * @function
 * @memberOf module:domFunctions
 * @param {string} listenerName - The name of one of the registered listener functions.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
 * stores has eventListeners property.
 * @returns {listenerFunction|function|Object}
 */
    const retrieveListener = function retrieveListener (listenerName) {
      const parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default
      return Object.keys(parent.eventListeners).includes(listenerName) ? parent.eventListeners[listenerName] : {}
    }

    const _default = retrieveListener
    exports.default = _default
  }, { '../objects/documentItem': 39, 'core-js/modules/es.array.includes.js': 243, 'core-js/modules/es.object.keys.js': 326, 'core-js/modules/es.string.includes.js': 373, 'core-js/stable': 457 }],
  31: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    /**
 * Simplify detecting the parent item which can be appended to, whether root, or just a parent at any part of the tree
 * @function
 * @memberOf module:domFunctions
 * @param {
 * DomItemRoot|DomItem
 * } parent - A parent DomItem which may or may not have a body
 * @returns {DomItemBody|DomItem}
 */
    const retrieveParentItem = function retrieveParentItem (parent) {
      return parent.body ? parent.body : parent
    }

    const _default = retrieveParentItem
    exports.default = _default
  }, { 'core-js/stable': 457 }],
  32: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    /**
 * Set an attribute on the element within a DomItem, then return the attribute.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having config changes to be applied to its
 * element
 * @param {string} name - The attribute name to be updated
 * @param {string} value - The new value to be applied to the attribute
 * @returns {string}
 */
    const setAndReturnAttribute = function setAndReturnAttribute (config, name, value) {
      config.element.setAttribute(name, value)
      return value
    }

    const _default = setAndReturnAttribute
    exports.default = _default
  }, { 'core-js/stable': 457 }],
  33: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    /**
 * Set an attribute on the element within a DomItem, then return the config data.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having config changes to be applied to its
 * element
 * @param {string} name - The attribute name to be updated
 * @param {string} value - The new value to be applied to the attribute
 * @returns {DomItem}
 */
    const setAttribute = function setAttribute (config, name, value) {
      config.element.setAttribute(name, value)
      return config
    }

    const _default = setAttribute
    exports.default = _default
  }, { 'core-js/stable': 457 }],
  34: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    const _elementChanges = _interopRequireDefault(require('./elementChanges'))

    const _setAndReturnAttribute = _interopRequireDefault(require('./setAndReturnAttribute'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having config changes to be applied to its
 * element
 * @returns {DomItem}
 */
    const updateElement = function updateElement (config) {
      if (!config.element.style) {
        // if element is not a valid element then return the config without changes
        return config
      }

      const domItem = (0, _elementChanges.default)(config) // Set the the current attributes to contain all the changes

      domItem.attributes = _functionalHelpers.default.mapObject( // Retrieve only the changes to be applied from the attributes
        domItem.attributes, function (attr, key) {
          if (!_functionalHelpers.default.isObject(attr) || _functionalHelpers.default.emptyObject(attr)) {
            return key in config.element ? _functionalHelpers.default.setAndReturnValue(config.element, key, attr) : (0, _setAndReturnAttribute.default)(config, key, attr)
          }

          const cleanedStyles = _functionalHelpers.default.filterObject( // Remove attributes which have a numeric key (these are unwanted styles stored on elements)
            attr, function (param, k) {
              return /^\D+$/.test(k)
            })

          return _functionalHelpers.default.reduceObject(cleanedStyles, function (newStyle, p, i) {
            return _functionalHelpers.default.setValue(i, p, newStyle)
          }, config.element.style)
        })
      return domItem
    }

    const _default = updateElement
    exports.default = _default
  }, { './elementChanges': 11, './setAndReturnAttribute': 32, 'core-js/stable': 457, 'functional-helpers': 509 }],
  35: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    const _updateElement = _interopRequireDefault(require('./updateElement'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having child DomItems with config changes to be
 * applied
 * @returns {DomItem}
 */
    const updateElements = function updateElements (config) {
      const domItem = (0, _updateElement.default)(config)
      return _functionalHelpers.default.setValue('children', _functionalHelpers.default.mapObject(domItem.children, function (child) {
        return updateElements(child)
      }), domItem)
    }

    const _default = updateElements
    exports.default = _default
  }, { './updateElement': 34, 'core-js/stable': 457, 'functional-helpers': 509 }],
  36: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _createDomItem = _interopRequireDefault(require('./objects/createDomItem'))

    const _documentDomItem = _interopRequireDefault(require('./objects/documentDomItem'))

    const _documentItem = _interopRequireDefault(require('./objects/documentItem'))

    const _initChildren = _interopRequireDefault(require('./objects/initChildren'))

    const _initRoot = _interopRequireDefault(require('./objects/initRoot'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * @file Core objects for representing the DOM in JSON.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module domObjects
 */
    const _default = {
      createDomItem: _createDomItem.default,
      documentDomItem: _documentDomItem.default,
      documentItem: _documentItem.default,
      initChildren: _initChildren.default,
      initRoot: _initRoot.default
    }
    exports.default = _default
  }, { './objects/createDomItem': 37, './objects/documentDomItem': 38, './objects/documentItem': 39, './objects/initChildren': 40, './objects/initRoot': 41, 'core-js/stable': 457 }],
  37: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * This is the standard definition of a listenerFunction to be used
 * @callback listenerFunction
 * @memberOf module:domObjects
 * @param {Event} e - The event object passed to the listener
 * @param {DomItem} target - The element which triggered the event
 * @param {...*} [args] - Optional args as required by the listener
 */

    /**
 * A Boolean indicating whether events of this type will be dispatched to the registered listerFunction before being
 * dispatched to any EventTarget beneath it in the Dom tree.
 * @typedef {boolean} UseCapture
 * @memberOf module:domObjects
 */

    /**
 * OptionsObject defines the structure for the options to be passed to addEventListener
 * @typedef {Object} OptionsObject
 * @memberOf module:domObjects
 * @property {boolean} capture - Indicate that events of this type will be dispatched to the registered
 * listenerFunction before being dispatched to any EventTarget beneath it in the Dom tree.
 * @property {boolean} once - Indicate that the listenerFunction should be invoked at most once after being added. If
 * 'true', the listenerFunction would be automatically removed when invoked.
 * @property {boolean} passive - Indicate that, if 'true', indicates that the listenerFunction will never call
 * preventDefault(). If preventDefault() is called, the user agent will do nothing with it.
 */

    /**
 * EventListenerOptions is either a boolean as UseCapture or an Object as OptionsObject
 * @typedef {OptionsObject|UseCapture} EventListenerOptions
 * @memberOf module:domObjects
 */

    /**
 * An EventListener Object to be appended to the element within the DomItem
 * @typedef {Object} EventListener
 * @memberOf module:domObjects
 * @property {string} listenerFunc - A string function name matching an existing
 * {@link listenerFunction}.
 * @property {Object} listenerArgs - Additional args required for the listener function
 * @property {EventListenerOptions} listenerOptions - Provides support for options
 * parameter of addEventListener, or false for default
 */

    /**
 * DomItem defines the structure for a single element in the Dom
 * @typedef {Object} DomItem
 * @memberOf module:domObjects
 * @property {string} tagName - This is any valid HTMLElement tagName
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * (including the defaulted style object)
 * @property {(Object|HTMLElement)} element - A reference to an existing HTML element will be stored here (default
 * empty object)
 * @property {Object.<Event, EventListener>} eventListeners - An object holding all
 * events to be registered for the associated element
 * @property {DomItem} parentItem - A reference to the parent of this object
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 */

    /**
 * This is the basic Object for representing the Dom in a virtual perspective. All incoming attributes will be merged
 * to the specified format.
 * @function
 * @memberOf module:domObjects
 * @param {Object} [item={}] - DomItem-like object to be formatted as DomItem
 * @returns {DomItem}
 */
    const createDomItem = function createDomItem () {
      const item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
      return _functionalHelpers.default.reduceObject({
        tagName: 'div',
        attributes: {
          style: {}
        },
        element: {},
        eventListeners: {},
        parentItem: {},
        children: []
      }, function (domItem, defaultValue, prop) {
        if (!(prop in domItem)) {
          domItem[prop] = defaultValue
          return domItem
        }

        if (prop === 'attributes' && !('style' in domItem[prop])) {
          domItem[prop].style = defaultValue.style
        }

        return domItem
      }, item)
    }

    const _default = createDomItem
    exports.default = _default
  }, { 'core-js/stable': 457, 'functional-helpers': 509 }],
  38: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.map.js')

    require('core-js/modules/web.dom-collections.for-each.js')

    require('core-js/modules/es.object.assign.js')

    require('core-js/stable')

    const _createDomItem = _interopRequireDefault(require('./createDomItem'))

    const _initChildren = _interopRequireDefault(require('./initChildren'))

    const _initRoot = _interopRequireDefault(require('./initRoot'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Return a DomItem reference to the document. The rootItem argument is a system variable and not necessary to
 * implement.
 * @function
 * @memberOf module:domObjects
 * @param {Object.<string, listenerFunction>} listeners - An object of all event
 * listeners to be registered in the Dom
 * @param {DomItemRoot|DomItem} [rootItem] - This is a
 * reference to DomItemRoot which will be defaulted with {@link initRoot}
 * @returns {DomItemRoot|DomItem}
 */
    const documentDomItem = function documentDomItem () {
      const listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
      const rootItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _initRoot.default)((0, _initChildren.default)(), listeners)
      rootItem.children = rootItem.children.map(function (child) {
        return (0, _createDomItem.default)(child)
      })
      rootItem.children.forEach(function (child) {
        return child.parentItem = rootItem
      })
      Object.assign(rootItem.head, rootItem.children[0])
      Object.assign(rootItem.body, rootItem.children[1])
      return (0, _createDomItem.default)(rootItem)
    }

    const _default = documentDomItem
    exports.default = _default
  }, { './createDomItem': 37, './initChildren': 40, './initRoot': 41, 'core-js/modules/es.array.map.js': 249, 'core-js/modules/es.object.assign.js': 308, 'core-js/modules/web.dom-collections.for-each.js': 449, 'core-js/stable': 457 }],
  39: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _documentDomItem = _interopRequireDefault(require('./documentDomItem'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Create reference for storing document changes
 * @member documentItem
 * @memberOf module:domObjects
 * @type {DomItemRoot}
 */
    const documentItem = (0, _documentDomItem.default)()
    const _default = documentItem
    exports.default = _default
  }, { './documentDomItem': 38, 'core-js/stable': 457 }],
  40: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _createDomItem = _interopRequireDefault(require('./createDomItem'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * DomItemHead defines the structure for a single element in the Dom
 * @typedef {DomItem} DomItemHead
 * @property {string} [tagName=head] - This is set to the string head referring to the HTML element of the same name
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * @property {HTMLHeadElement} element - A reference to the HTML head element
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 */

    /**
 * DomItemBody defines the structure for a single element in the Dom
 * @typedef {DomItem} DomItemBody
 * @property {string} [tagName=body] - This is set to the string body referring to the HTML element of the same name
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * @property {HTMLBodyElement} element - A reference to the HTML body element
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 */

    /**
 * Initiate the children of Root / DocumentItem. This is a helper for {@link documentDomItem}.
 * @function
 * @memberOf module:domObjects
 * @returns {Array.<DomItemHead|DomItemBody>}
 */
    const initChildren = function initChildren () {
      const head = document.head
      const body = document.body
      const children = [(0, _createDomItem.default)({
        tagName: 'head',
        attributes: {},
        element: head,
        children: []
      }), (0, _createDomItem.default)({
        tagName: 'body',
        attributes: {},
        element: body,
        children: []
      })]

      if (!head || !body) {
        var observer = new MutationObserver(function () {
          if (children[1].element !== null) {
            observer.disconnect()
            return
          }

          if (document.body) {
            children[0].element = document.head
            children[1].element = document.body
            observer.disconnect()
          }
        })
        observer.observe(document.documentElement, {
          childList: true
        })
      }

      return children
    }

    const _default = initChildren
    exports.default = _default
  }, { './createDomItem': 37, 'core-js/stable': 457 }],
  41: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _createDomItem = _interopRequireDefault(require('./createDomItem'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * DomItemRoot defines the structure for a single element in the Dom
 * @typedef {DomItem} DomItemRoot
 * @memberOf module:domObjects
 * @property {string} [tagName=html] - This is set to the string html referring to the HTML element of the same name
 * @property {Object} attributes - Empty object as attributes placeholder
 * @property {HTMLDocument} element - A reference to the entire Document
 * @property {Object.<string, listenerFunction>} eventListeners - all registered
 * listeners stored as listener name and function pairs
 * @property {
 * Array.<DomItemHead|DomItemBody>
 *   } children - Two references: for head and body
 * @property {DomItemHead} head - A specific reference to head item
 * @property {DomItemBody} body - A specific reference to body item
 */

    /**
 * Initiate the Root for DocumentItem. This is primary a helper for {@link documentDomItem}.
 * @function
 * @memberOf module:domObjects
 * @param {
 * Array.<DomItemHead|DomItemBody>
 *   } children - Provide an array of Head and Body (usually via {@link initChildren})
 * @param {Object.<string, listenerFunction>} listeners - An object of all event
 * listeners to be registered in the Dom
 * @returns {DomItemRoot|DomItem}
 */
    const initRoot = function initRoot (children) {
      const listeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
      return (0, _createDomItem.default)({
        tagName: 'html',
        attributes: {},
        element: document,
        eventListeners: listeners,
        children: children,
        head: children[0],
        body: children[1]
      })
    }

    const _default = initRoot
    exports.default = _default
  }, { './createDomItem': 37, 'core-js/stable': 457 }],
  42: [function (require, module, exports) {
    const isCallable = require('../internals/is-callable')
    const tryToString = require('../internals/try-to-string')

    // `Assert: IsCallable(argument) is true`
    module.exports = function (argument) {
      if (isCallable(argument)) return argument
      throw TypeError(tryToString(argument) + ' is not a function')
    }
  }, { '../internals/is-callable': 128, '../internals/try-to-string': 216 }],
  43: [function (require, module, exports) {
    const isConstructor = require('../internals/is-constructor')
    const tryToString = require('../internals/try-to-string')

    // `Assert: IsConstructor(argument) is true`
    module.exports = function (argument) {
      if (isConstructor(argument)) return argument
      throw TypeError(tryToString(argument) + ' is not a constructor')
    }
  }, { '../internals/is-constructor': 129, '../internals/try-to-string': 216 }],
  44: [function (require, module, exports) {
    const isCallable = require('../internals/is-callable')

    module.exports = function (argument) {
      if (typeof argument === 'object' || isCallable(argument)) return argument
      throw TypeError("Can't set " + String(argument) + ' as a prototype')
    }
  }, { '../internals/is-callable': 128 }],
  45: [function (require, module, exports) {
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const create = require('../internals/object-create')
    const definePropertyModule = require('../internals/object-define-property')

    const UNSCOPABLES = wellKnownSymbol('unscopables')
    const ArrayPrototype = Array.prototype

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
  }, { '../internals/object-create': 157, '../internals/object-define-property': 159, '../internals/well-known-symbol': 225 }],
  46: [function (require, module, exports) {
    'use strict'
    const charAt = require('../internals/string-multibyte').charAt

    // `AdvanceStringIndex` abstract operation
    // https://tc39.es/ecma262/#sec-advancestringindex
    module.exports = function (S, index, unicode) {
      return index + (unicode ? charAt(S, index).length : 1)
    }
  }, { '../internals/string-multibyte': 195 }],
  47: [function (require, module, exports) {
    module.exports = function (it, Constructor, name) {
      if (it instanceof Constructor) return it
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation')
    }
  }, {}],
  48: [function (require, module, exports) {
    const isObject = require('../internals/is-object')

    // `Assert: Type(argument) is Object`
    module.exports = function (argument) {
      if (isObject(argument)) return argument
      throw TypeError(String(argument) + ' is not an object')
    }
  }, { '../internals/is-object': 133 }],
  49: [function (require, module, exports) {
    // eslint-disable-next-line es/no-typed-arrays -- safe
    module.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined'
  }, {}],
  50: [function (require, module, exports) {
    'use strict'
    const NATIVE_ARRAY_BUFFER = require('../internals/array-buffer-native')
    const DESCRIPTORS = require('../internals/descriptors')
    const global = require('../internals/global')
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')
    const hasOwn = require('../internals/has-own-property')
    const classof = require('../internals/classof')
    const tryToString = require('../internals/try-to-string')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const redefine = require('../internals/redefine')
    const defineProperty = require('../internals/object-define-property').f
    const getPrototypeOf = require('../internals/object-get-prototype-of')
    const setPrototypeOf = require('../internals/object-set-prototype-of')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const uid = require('../internals/uid')

    const Int8Array = global.Int8Array
    const Int8ArrayPrototype = Int8Array && Int8Array.prototype
    const Uint8ClampedArray = global.Uint8ClampedArray
    const Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype
    let TypedArray = Int8Array && getPrototypeOf(Int8Array)
    let TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype)
    const ObjectPrototype = Object.prototype
    const isPrototypeOf = ObjectPrototype.isPrototypeOf

    const TO_STRING_TAG = wellKnownSymbol('toStringTag')
    const TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG')
    const TYPED_ARRAY_CONSTRUCTOR = uid('TYPED_ARRAY_CONSTRUCTOR')
    // Fixing native typed arrays in Opera Presto crashes the browser, see #595
    let NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera'
    let TYPED_ARRAY_TAG_REQIRED = false
    let NAME, Constructor, Prototype

    const TypedArrayConstructorsList = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8
    }

    const BigIntArrayConstructorsList = {
      BigInt64Array: 8,
      BigUint64Array: 8
    }

    const isView = function isView (it) {
      if (!isObject(it)) return false
      const klass = classof(it)
      return klass === 'DataView' ||
    hasOwn(TypedArrayConstructorsList, klass) ||
    hasOwn(BigIntArrayConstructorsList, klass)
    }

    const isTypedArray = function (it) {
      if (!isObject(it)) return false
      const klass = classof(it)
      return hasOwn(TypedArrayConstructorsList, klass) ||
    hasOwn(BigIntArrayConstructorsList, klass)
    }

    const aTypedArray = function (it) {
      if (isTypedArray(it)) return it
      throw TypeError('Target is not a typed array')
    }

    const aTypedArrayConstructor = function (C) {
      if (isCallable(C) && (!setPrototypeOf || isPrototypeOf.call(TypedArray, C))) return C
      throw TypeError(tryToString(C) + ' is not a typed array constructor')
    }

    const exportTypedArrayMethod = function (KEY, property, forced) {
      if (!DESCRIPTORS) return
      if (forced) {
        for (const ARRAY in TypedArrayConstructorsList) {
          const TypedArrayConstructor = global[ARRAY]
          if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) {
            try {
              delete TypedArrayConstructor.prototype[KEY]
            } catch (error) { /* empty */ }
          }
        }
      }
      if (!TypedArrayPrototype[KEY] || forced) {
        redefine(TypedArrayPrototype, KEY, forced
          ? property
          : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property)
      }
    }

    const exportTypedArrayStaticMethod = function (KEY, property, forced) {
      let ARRAY, TypedArrayConstructor
      if (!DESCRIPTORS) return
      if (setPrototypeOf) {
        if (forced) {
          for (ARRAY in TypedArrayConstructorsList) {
            TypedArrayConstructor = global[ARRAY]
            if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) {
              try {
                delete TypedArrayConstructor[KEY]
              } catch (error) { /* empty */ }
            }
          }
        }
        if (!TypedArray[KEY] || forced) {
          // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
          try {
            return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property)
          } catch (error) { /* empty */ }
        } else return
      }
      for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global[ARRAY]
        if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
          redefine(TypedArrayConstructor, KEY, property)
        }
      }
    }

    for (NAME in TypedArrayConstructorsList) {
      Constructor = global[NAME]
      Prototype = Constructor && Constructor.prototype
      if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor)
      else NATIVE_ARRAY_BUFFER_VIEWS = false
    }

    for (NAME in BigIntArrayConstructorsList) {
      Constructor = global[NAME]
      Prototype = Constructor && Constructor.prototype
      if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR, Constructor)
    }

    // WebKit bug - typed arrays constructors prototype is Object.prototype
    if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
      // eslint-disable-next-line no-shadow -- safe
      TypedArray = function TypedArray () {
        throw TypeError('Incorrect invocation')
      }
      if (NATIVE_ARRAY_BUFFER_VIEWS) {
        for (NAME in TypedArrayConstructorsList) {
          if (global[NAME]) setPrototypeOf(global[NAME], TypedArray)
        }
      }
    }

    if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
      TypedArrayPrototype = TypedArray.prototype
      if (NATIVE_ARRAY_BUFFER_VIEWS) {
        for (NAME in TypedArrayConstructorsList) {
          if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype)
        }
      }
    }

    // WebKit bug - one more object in Uint8ClampedArray prototype chain
    if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
      setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype)
    }

    if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
      TYPED_ARRAY_TAG_REQIRED = true
      defineProperty(TypedArrayPrototype, TO_STRING_TAG, {
        get: function () {
          return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined
        }
      })
      for (NAME in TypedArrayConstructorsList) {
        if (global[NAME]) {
          createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME)
        }
      }
    }

    module.exports = {
      NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
      TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR,
      TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
      aTypedArray: aTypedArray,
      aTypedArrayConstructor: aTypedArrayConstructor,
      exportTypedArrayMethod: exportTypedArrayMethod,
      exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
      isView: isView,
      isTypedArray: isTypedArray,
      TypedArray: TypedArray,
      TypedArrayPrototype: TypedArrayPrototype
    }
  }, { '../internals/array-buffer-native': 49, '../internals/classof': 69, '../internals/create-non-enumerable-property': 78, '../internals/descriptors': 85, '../internals/global': 113, '../internals/has-own-property': 114, '../internals/is-callable': 128, '../internals/is-object': 133, '../internals/object-define-property': 159, '../internals/object-get-prototype-of': 164, '../internals/object-set-prototype-of': 169, '../internals/redefine': 178, '../internals/try-to-string': 216, '../internals/uid': 222, '../internals/well-known-symbol': 225 }],
  51: [function (require, module, exports) {
    'use strict'
    const global = require('../internals/global')
    const DESCRIPTORS = require('../internals/descriptors')
    const NATIVE_ARRAY_BUFFER = require('../internals/array-buffer-native')
    const FunctionName = require('../internals/function-name')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const redefineAll = require('../internals/redefine-all')
    const fails = require('../internals/fails')
    const anInstance = require('../internals/an-instance')
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    const toLength = require('../internals/to-length')
    const toIndex = require('../internals/to-index')
    const IEEE754 = require('../internals/ieee754')
    const getPrototypeOf = require('../internals/object-get-prototype-of')
    const setPrototypeOf = require('../internals/object-set-prototype-of')
    const getOwnPropertyNames = require('../internals/object-get-own-property-names').f
    const defineProperty = require('../internals/object-define-property').f
    const arrayFill = require('../internals/array-fill')
    const setToStringTag = require('../internals/set-to-string-tag')
    const InternalStateModule = require('../internals/internal-state')

    const PROPER_FUNCTION_NAME = FunctionName.PROPER
    const CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE
    const getInternalState = InternalStateModule.get
    const setInternalState = InternalStateModule.set
    const ARRAY_BUFFER = 'ArrayBuffer'
    const DATA_VIEW = 'DataView'
    const PROTOTYPE = 'prototype'
    const WRONG_LENGTH = 'Wrong length'
    const WRONG_INDEX = 'Wrong index'
    const NativeArrayBuffer = global[ARRAY_BUFFER]
    let $ArrayBuffer = NativeArrayBuffer
    let $DataView = global[DATA_VIEW]
    const $DataViewPrototype = $DataView && $DataView[PROTOTYPE]
    const ObjectPrototype = Object.prototype
    const RangeError = global.RangeError

    const packIEEE754 = IEEE754.pack
    const unpackIEEE754 = IEEE754.unpack

    const packInt8 = function (number) {
      return [number & 0xFF]
    }

    const packInt16 = function (number) {
      return [number & 0xFF, number >> 8 & 0xFF]
    }

    const packInt32 = function (number) {
      return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF]
    }

    const unpackInt32 = function (buffer) {
      return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0]
    }

    const packFloat32 = function (number) {
      return packIEEE754(number, 23, 4)
    }

    const packFloat64 = function (number) {
      return packIEEE754(number, 52, 8)
    }

    const addGetter = function (Constructor, key) {
      defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key] } })
    }

    const get = function (view, count, index, isLittleEndian) {
      const intIndex = toIndex(index)
      const store = getInternalState(view)
      if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX)
      const bytes = getInternalState(store.buffer).bytes
      const start = intIndex + store.byteOffset
      const pack = bytes.slice(start, start + count)
      return isLittleEndian ? pack : pack.reverse()
    }

    const set = function (view, count, index, conversion, value, isLittleEndian) {
      const intIndex = toIndex(index)
      const store = getInternalState(view)
      if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX)
      const bytes = getInternalState(store.buffer).bytes
      const start = intIndex + store.byteOffset
      const pack = conversion(+value)
      for (let i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1]
    }

    if (!NATIVE_ARRAY_BUFFER) {
      $ArrayBuffer = function ArrayBuffer (length) {
        anInstance(this, $ArrayBuffer, ARRAY_BUFFER)
        const byteLength = toIndex(length)
        setInternalState(this, {
          bytes: arrayFill.call(new Array(byteLength), 0),
          byteLength: byteLength
        })
        if (!DESCRIPTORS) this.byteLength = byteLength
      }

      $DataView = function DataView (buffer, byteOffset, byteLength) {
        anInstance(this, $DataView, DATA_VIEW)
        anInstance(buffer, $ArrayBuffer, DATA_VIEW)
        const bufferLength = getInternalState(buffer).byteLength
        const offset = toIntegerOrInfinity(byteOffset)
        if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset')
        byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength)
        if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH)
        setInternalState(this, {
          buffer: buffer,
          byteLength: byteLength,
          byteOffset: offset
        })
        if (!DESCRIPTORS) {
          this.buffer = buffer
          this.byteLength = byteLength
          this.byteOffset = offset
        }
      }

      if (DESCRIPTORS) {
        addGetter($ArrayBuffer, 'byteLength')
        addGetter($DataView, 'buffer')
        addGetter($DataView, 'byteLength')
        addGetter($DataView, 'byteOffset')
      }

      redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8 (byteOffset) {
          return get(this, 1, byteOffset)[0] << 24 >> 24
        },
        getUint8: function getUint8 (byteOffset) {
          return get(this, 1, byteOffset)[0]
        },
        getInt16: function getInt16 (byteOffset /* , littleEndian */) {
          const bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined)
          return (bytes[1] << 8 | bytes[0]) << 16 >> 16
        },
        getUint16: function getUint16 (byteOffset /* , littleEndian */) {
          const bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined)
          return bytes[1] << 8 | bytes[0]
        },
        getInt32: function getInt32 (byteOffset /* , littleEndian */) {
          return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined))
        },
        getUint32: function getUint32 (byteOffset /* , littleEndian */) {
          return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0
        },
        getFloat32: function getFloat32 (byteOffset /* , littleEndian */) {
          return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23)
        },
        getFloat64: function getFloat64 (byteOffset /* , littleEndian */) {
          return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52)
        },
        setInt8: function setInt8 (byteOffset, value) {
          set(this, 1, byteOffset, packInt8, value)
        },
        setUint8: function setUint8 (byteOffset, value) {
          set(this, 1, byteOffset, packInt8, value)
        },
        setInt16: function setInt16 (byteOffset, value /* , littleEndian */) {
          set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined)
        },
        setUint16: function setUint16 (byteOffset, value /* , littleEndian */) {
          set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined)
        },
        setInt32: function setInt32 (byteOffset, value /* , littleEndian */) {
          set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined)
        },
        setUint32: function setUint32 (byteOffset, value /* , littleEndian */) {
          set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined)
        },
        setFloat32: function setFloat32 (byteOffset, value /* , littleEndian */) {
          set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined)
        },
        setFloat64: function setFloat64 (byteOffset, value /* , littleEndian */) {
          set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined)
        }
      })
    } else {
      const INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER
      /* eslint-disable no-new -- required for testing */
      if (!fails(function () {
        NativeArrayBuffer(1)
      }) || !fails(function () {
        new NativeArrayBuffer(-1)
      }) || fails(function () {
        new NativeArrayBuffer()
        new NativeArrayBuffer(1.5)
        new NativeArrayBuffer(NaN)
        return INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME
      })) {
      /* eslint-enable no-new -- required for testing */
        $ArrayBuffer = function ArrayBuffer (length) {
          anInstance(this, $ArrayBuffer)
          return new NativeArrayBuffer(toIndex(length))
        }
        const ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE]
        for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
          if (!((key = keys[j++]) in $ArrayBuffer)) {
            createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key])
          }
        }
        ArrayBufferPrototype.constructor = $ArrayBuffer
      } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty(NativeArrayBuffer, 'name', ARRAY_BUFFER)
      }

      // WebKit bug - the same parent prototype for typed arrays and data view
      if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
        setPrototypeOf($DataViewPrototype, ObjectPrototype)
      }

      // iOS Safari 7.x bug
      const testView = new $DataView(new $ArrayBuffer(2))
      const $setInt8 = $DataViewPrototype.setInt8
      testView.setInt8(0, 2147483648)
      testView.setInt8(1, 2147483649)
      if (testView.getInt8(0) || !testView.getInt8(1)) {
        redefineAll($DataViewPrototype, {
          setInt8: function setInt8 (byteOffset, value) {
            $setInt8.call(this, byteOffset, value << 24 >> 24)
          },
          setUint8: function setUint8 (byteOffset, value) {
            $setInt8.call(this, byteOffset, value << 24 >> 24)
          }
        }, { unsafe: true })
      }
    }

    setToStringTag($ArrayBuffer, ARRAY_BUFFER)
    setToStringTag($DataView, DATA_VIEW)

    module.exports = {
      ArrayBuffer: $ArrayBuffer,
      DataView: $DataView
    }
  }, { '../internals/an-instance': 47, '../internals/array-buffer-native': 49, '../internals/array-fill': 53, '../internals/create-non-enumerable-property': 78, '../internals/descriptors': 85, '../internals/fails': 101, '../internals/function-name': 107, '../internals/global': 113, '../internals/ieee754': 119, '../internals/internal-state': 125, '../internals/object-define-property': 159, '../internals/object-get-own-property-names': 162, '../internals/object-get-prototype-of': 164, '../internals/object-set-prototype-of': 169, '../internals/redefine-all': 177, '../internals/set-to-string-tag': 189, '../internals/to-index': 205, '../internals/to-integer-or-infinity': 207, '../internals/to-length': 208 }],
  52: [function (require, module, exports) {
    'use strict'
    const toObject = require('../internals/to-object')
    const toAbsoluteIndex = require('../internals/to-absolute-index')
    const lengthOfArrayLike = require('../internals/length-of-array-like')

    const min = Math.min

    // `Array.prototype.copyWithin` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.copywithin
    // eslint-disable-next-line es/no-array-prototype-copywithin -- safe
    module.exports = [].copyWithin || function copyWithin (target /* = 0 */, start /* = 0, end = @length */) {
      const O = toObject(this)
      const len = lengthOfArrayLike(O)
      let to = toAbsoluteIndex(target, len)
      let from = toAbsoluteIndex(start, len)
      const end = arguments.length > 2 ? arguments[2] : undefined
      let count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to)
      let inc = 1
      if (from < to && to < from + count) {
        inc = -1
        from += count - 1
        to += count - 1
      }
      while (count-- > 0) {
        if (from in O) O[to] = O[from]
        else delete O[to]
        to += inc
        from += inc
      } return O
    }
  }, { '../internals/length-of-array-like': 141, '../internals/to-absolute-index': 204, '../internals/to-object': 209 }],
  53: [function (require, module, exports) {
    'use strict'
    const toObject = require('../internals/to-object')
    const toAbsoluteIndex = require('../internals/to-absolute-index')
    const lengthOfArrayLike = require('../internals/length-of-array-like')

    // `Array.prototype.fill` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.fill
    module.exports = function fill (value /* , start = 0, end = @length */) {
      const O = toObject(this)
      const length = lengthOfArrayLike(O)
      const argumentsLength = arguments.length
      let index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length)
      const end = argumentsLength > 2 ? arguments[2] : undefined
      const endPos = end === undefined ? length : toAbsoluteIndex(end, length)
      while (endPos > index) O[index++] = value
      return O
    }
  }, { '../internals/length-of-array-like': 141, '../internals/to-absolute-index': 204, '../internals/to-object': 209 }],
  54: [function (require, module, exports) {
    'use strict'
    const $forEach = require('../internals/array-iteration').forEach
    const arrayMethodIsStrict = require('../internals/array-method-is-strict')

    const STRICT_METHOD = arrayMethodIsStrict('forEach')

    // `Array.prototype.forEach` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    module.exports = !STRICT_METHOD ? function forEach (callbackfn /* , thisArg */) {
      return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      // eslint-disable-next-line es/no-array-prototype-foreach -- safe
    } : [].forEach
  }, { '../internals/array-iteration': 58, '../internals/array-method-is-strict': 61 }],
  55: [function (require, module, exports) {
    module.exports = function (Constructor, list) {
      let index = 0
      const length = list.length
      const result = new Constructor(length)
      while (length > index) result[index] = list[index++]
      return result
    }
  }, {}],
  56: [function (require, module, exports) {
    'use strict'
    const bind = require('../internals/function-bind-context')
    const toObject = require('../internals/to-object')
    const callWithSafeIterationClosing = require('../internals/call-with-safe-iteration-closing')
    const isArrayIteratorMethod = require('../internals/is-array-iterator-method')
    const isConstructor = require('../internals/is-constructor')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const createProperty = require('../internals/create-property')
    const getIterator = require('../internals/get-iterator')
    const getIteratorMethod = require('../internals/get-iterator-method')

    // `Array.from` method implementation
    // https://tc39.es/ecma262/#sec-array.from
    module.exports = function from (arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      const O = toObject(arrayLike)
      const IS_CONSTRUCTOR = isConstructor(this)
      const argumentsLength = arguments.length
      let mapfn = argumentsLength > 1 ? arguments[1] : undefined
      const mapping = mapfn !== undefined
      if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2)
      const iteratorMethod = getIteratorMethod(O)
      let index = 0
      let length, result, step, iterator, next, value
      // if the target is not iterable or it's an array with the default iterator - use a simple case
      if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
        iterator = getIterator(O, iteratorMethod)
        next = iterator.next
        result = IS_CONSTRUCTOR ? new this() : []
        for (;!(step = next.call(iterator)).done; index++) {
          value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value
          createProperty(result, index, value)
        }
      } else {
        length = lengthOfArrayLike(O)
        result = IS_CONSTRUCTOR ? new this(length) : Array(length)
        for (;length > index; index++) {
          value = mapping ? mapfn(O[index], index) : O[index]
          createProperty(result, index, value)
        }
      }
      result.length = index
      return result
    }
  }, { '../internals/call-with-safe-iteration-closing': 66, '../internals/create-property': 80, '../internals/function-bind-context': 105, '../internals/get-iterator': 110, '../internals/get-iterator-method': 109, '../internals/is-array-iterator-method': 126, '../internals/is-constructor': 129, '../internals/length-of-array-like': 141, '../internals/to-object': 209 }],
  57: [function (require, module, exports) {
    const toIndexedObject = require('../internals/to-indexed-object')
    const toAbsoluteIndex = require('../internals/to-absolute-index')
    const lengthOfArrayLike = require('../internals/length-of-array-like')

    // `Array.prototype.{ indexOf, includes }` methods implementation
    const createMethod = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        const O = toIndexedObject($this)
        const length = lengthOfArrayLike(O)
        let index = toAbsoluteIndex(fromIndex, length)
        let value
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
  }, { '../internals/length-of-array-like': 141, '../internals/to-absolute-index': 204, '../internals/to-indexed-object': 206 }],
  58: [function (require, module, exports) {
    const bind = require('../internals/function-bind-context')
    const IndexedObject = require('../internals/indexed-object')
    const toObject = require('../internals/to-object')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const arraySpeciesCreate = require('../internals/array-species-create')

    const push = [].push

    // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
    const createMethod = function (TYPE) {
      const IS_MAP = TYPE == 1
      const IS_FILTER = TYPE == 2
      const IS_SOME = TYPE == 3
      const IS_EVERY = TYPE == 4
      const IS_FIND_INDEX = TYPE == 6
      const IS_FILTER_REJECT = TYPE == 7
      const NO_HOLES = TYPE == 5 || IS_FIND_INDEX
      return function ($this, callbackfn, that, specificCreate) {
        const O = toObject($this)
        const self = IndexedObject(O)
        const boundFunction = bind(callbackfn, that, 3)
        const length = lengthOfArrayLike(self)
        let index = 0
        const create = specificCreate || arraySpeciesCreate
        const target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined
        let value, result
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
                  case 7: push.call(target, value) // filterReject
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
      // `Array.prototype.filterReject` method
      // https://github.com/tc39/proposal-array-filtering
      filterReject: createMethod(7)
    }
  }, { '../internals/array-species-create': 65, '../internals/function-bind-context': 105, '../internals/indexed-object': 120, '../internals/length-of-array-like': 141, '../internals/to-object': 209 }],
  59: [function (require, module, exports) {
    'use strict'
    /* eslint-disable es/no-array-prototype-lastindexof -- safe */
    const toIndexedObject = require('../internals/to-indexed-object')
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const arrayMethodIsStrict = require('../internals/array-method-is-strict')

    const min = Math.min
    const $lastIndexOf = [].lastIndexOf
    const NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0
    const STRICT_METHOD = arrayMethodIsStrict('lastIndexOf')
    const FORCED = NEGATIVE_ZERO || !STRICT_METHOD

    // `Array.prototype.lastIndexOf` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
    module.exports = FORCED ? function lastIndexOf (searchElement /* , fromIndex = @[*-1] */) {
      // convert -0 to +0
      if (NEGATIVE_ZERO) return $lastIndexOf.apply(this, arguments) || 0
      const O = toIndexedObject(this)
      const length = lengthOfArrayLike(O)
      let index = length - 1
      if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]))
      if (index < 0) index = length + index
      for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0
      return -1
    } : $lastIndexOf
  }, { '../internals/array-method-is-strict': 61, '../internals/length-of-array-like': 141, '../internals/to-indexed-object': 206, '../internals/to-integer-or-infinity': 207 }],
  60: [function (require, module, exports) {
    const fails = require('../internals/fails')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const V8_VERSION = require('../internals/engine-v8-version')

    const SPECIES = wellKnownSymbol('species')

    module.exports = function (METHOD_NAME) {
      // We can't use this feature detection in V8 since it causes
      // deoptimization and serious performance degradation
      // https://github.com/zloirock/core-js/issues/677
      return V8_VERSION >= 51 || !fails(function () {
        const array = []
        const constructor = array.constructor = {}
        constructor[SPECIES] = function () {
          return { foo: 1 }
        }
        return array[METHOD_NAME](Boolean).foo !== 1
      })
    }
  }, { '../internals/engine-v8-version': 97, '../internals/fails': 101, '../internals/well-known-symbol': 225 }],
  61: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    module.exports = function (METHOD_NAME, argument) {
      const method = [][METHOD_NAME]
      return !!method && fails(function () {
        // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
        method.call(null, argument || function () { throw 1 }, 1)
      })
    }
  }, { '../internals/fails': 101 }],
  62: [function (require, module, exports) {
    const aCallable = require('../internals/a-callable')
    const toObject = require('../internals/to-object')
    const IndexedObject = require('../internals/indexed-object')
    const lengthOfArrayLike = require('../internals/length-of-array-like')

    // `Array.prototype.{ reduce, reduceRight }` methods implementation
    const createMethod = function (IS_RIGHT) {
      return function (that, callbackfn, argumentsLength, memo) {
        aCallable(callbackfn)
        const O = toObject(that)
        const self = IndexedObject(O)
        const length = lengthOfArrayLike(O)
        let index = IS_RIGHT ? length - 1 : 0
        const i = IS_RIGHT ? -1 : 1
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
  }, { '../internals/a-callable': 42, '../internals/indexed-object': 120, '../internals/length-of-array-like': 141, '../internals/to-object': 209 }],
  63: [function (require, module, exports) {
    // TODO: use something more complex like timsort?
    const floor = Math.floor

    var mergeSort = function (array, comparefn) {
      const length = array.length
      const middle = floor(length / 2)
      return length < 8
        ? insertionSort(array, comparefn)
        : merge(
          mergeSort(array.slice(0, middle), comparefn),
          mergeSort(array.slice(middle), comparefn),
          comparefn
        )
    }

    var insertionSort = function (array, comparefn) {
      const length = array.length
      let i = 1
      let element, j

      while (i < length) {
        j = i
        element = array[i]
        while (j && comparefn(array[j - 1], element) > 0) {
          array[j] = array[--j]
        }
        if (j !== i++) array[j] = element
      } return array
    }

    var merge = function (left, right, comparefn) {
      const llength = left.length
      const rlength = right.length
      let lindex = 0
      let rindex = 0
      const result = []

      while (lindex < llength || rindex < rlength) {
        if (lindex < llength && rindex < rlength) {
          result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++])
        } else {
          result.push(lindex < llength ? left[lindex++] : right[rindex++])
        }
      } return result
    }

    module.exports = mergeSort
  }, {}],
  64: [function (require, module, exports) {
    const isArray = require('../internals/is-array')
    const isConstructor = require('../internals/is-constructor')
    const isObject = require('../internals/is-object')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const SPECIES = wellKnownSymbol('species')

    // a part of `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    module.exports = function (originalArray) {
      let C
      if (isArray(originalArray)) {
        C = originalArray.constructor
        // cross-realm fallback
        if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined
        else if (isObject(C)) {
          C = C[SPECIES]
          if (C === null) C = undefined
        }
      } return C === undefined ? Array : C
    }
  }, { '../internals/is-array': 127, '../internals/is-constructor': 129, '../internals/is-object': 133, '../internals/well-known-symbol': 225 }],
  65: [function (require, module, exports) {
    const arraySpeciesConstructor = require('../internals/array-species-constructor')

    // `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    module.exports = function (originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length)
    }
  }, { '../internals/array-species-constructor': 64 }],
  66: [function (require, module, exports) {
    const anObject = require('../internals/an-object')
    const iteratorClose = require('../internals/iterator-close')

    // call something on iterator step with safe closing on error
    module.exports = function (iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value)
      } catch (error) {
        iteratorClose(iterator, 'throw', error)
      }
    }
  }, { '../internals/an-object': 48, '../internals/iterator-close': 138 }],
  67: [function (require, module, exports) {
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const ITERATOR = wellKnownSymbol('iterator')
    let SAFE_CLOSING = false

    try {
      let called = 0
      const iteratorWithReturn = {
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
      // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
      Array.from(iteratorWithReturn, function () { throw 2 })
    } catch (error) { /* empty */ }

    module.exports = function (exec, SKIP_CLOSING) {
      if (!SKIP_CLOSING && !SAFE_CLOSING) return false
      let ITERATION_SUPPORT = false
      try {
        const object = {}
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
  }, { '../internals/well-known-symbol': 225 }],
  68: [function (require, module, exports) {
    const toString = {}.toString

    module.exports = function (it) {
      return toString.call(it).slice(8, -1)
    }
  }, {}],
  69: [function (require, module, exports) {
    const TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support')
    const isCallable = require('../internals/is-callable')
    const classofRaw = require('../internals/classof-raw')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const TO_STRING_TAG = wellKnownSymbol('toStringTag')
    // ES3 wrong here
    const CORRECT_ARGUMENTS = classofRaw(function () { return arguments }()) == 'Arguments'

    // fallback for IE11 Script Access Denied error
    const tryGet = function (it, key) {
      try {
        return it[key]
      } catch (error) { /* empty */ }
    }

    // getting tag from ES6+ `Object.prototype.toString`
    module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
      let O, tag, result
      return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
        : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) === 'string' ? tag
        // builtinTag case
          : CORRECT_ARGUMENTS ? classofRaw(O)
          // ES3 arguments fallback
            : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result
    }
  }, { '../internals/classof-raw': 68, '../internals/is-callable': 128, '../internals/to-string-tag-support': 214, '../internals/well-known-symbol': 225 }],
  70: [function (require, module, exports) {
    'use strict'
    const defineProperty = require('../internals/object-define-property').f
    const create = require('../internals/object-create')
    const redefineAll = require('../internals/redefine-all')
    const bind = require('../internals/function-bind-context')
    const anInstance = require('../internals/an-instance')
    const iterate = require('../internals/iterate')
    const defineIterator = require('../internals/define-iterator')
    const setSpecies = require('../internals/set-species')
    const DESCRIPTORS = require('../internals/descriptors')
    const fastKey = require('../internals/internal-metadata').fastKey
    const InternalStateModule = require('../internals/internal-state')

    const setInternalState = InternalStateModule.set
    const internalStateGetterFor = InternalStateModule.getterFor

    module.exports = {
      getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, CONSTRUCTOR_NAME)
          setInternalState(that, {
            type: CONSTRUCTOR_NAME,
            index: create(null),
            first: undefined,
            last: undefined,
            size: 0
          })
          if (!DESCRIPTORS) that.size = 0
          if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP })
        })

        const getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME)

        const define = function (that, key, value) {
          const state = getInternalState(that)
          let entry = getEntry(that, key)
          let previous, index
          // change existing entry
          if (entry) {
            entry.value = value
            // create new entry
          } else {
            state.last = entry = {
              index: index = fastKey(key, true),
              key: key,
              value: value,
              previous: previous = state.last,
              next: undefined,
              removed: false
            }
            if (!state.first) state.first = entry
            if (previous) previous.next = entry
            if (DESCRIPTORS) state.size++
            else that.size++
            // add to index
            if (index !== 'F') state.index[index] = entry
          } return that
        }

        var getEntry = function (that, key) {
          const state = getInternalState(that)
          // fast case
          const index = fastKey(key)
          let entry
          if (index !== 'F') return state.index[index]
          // frozen object case
          for (entry = state.first; entry; entry = entry.next) {
            if (entry.key == key) return entry
          }
        }

        redefineAll(C.prototype, {
          // `{ Map, Set }.prototype.clear()` methods
          // https://tc39.es/ecma262/#sec-map.prototype.clear
          // https://tc39.es/ecma262/#sec-set.prototype.clear
          clear: function clear () {
            const that = this
            const state = getInternalState(that)
            const data = state.index
            let entry = state.first
            while (entry) {
              entry.removed = true
              if (entry.previous) entry.previous = entry.previous.next = undefined
              delete data[entry.index]
              entry = entry.next
            }
            state.first = state.last = undefined
            if (DESCRIPTORS) state.size = 0
            else that.size = 0
          },
          // `{ Map, Set }.prototype.delete(key)` methods
          // https://tc39.es/ecma262/#sec-map.prototype.delete
          // https://tc39.es/ecma262/#sec-set.prototype.delete
          delete: function (key) {
            const that = this
            const state = getInternalState(that)
            const entry = getEntry(that, key)
            if (entry) {
              const next = entry.next
              const prev = entry.previous
              delete state.index[entry.index]
              entry.removed = true
              if (prev) prev.next = next
              if (next) next.previous = prev
              if (state.first == entry) state.first = next
              if (state.last == entry) state.last = prev
              if (DESCRIPTORS) state.size--
              else that.size--
            } return !!entry
          },
          // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
          // https://tc39.es/ecma262/#sec-map.prototype.foreach
          // https://tc39.es/ecma262/#sec-set.prototype.foreach
          forEach: function forEach (callbackfn /* , that = undefined */) {
            const state = getInternalState(this)
            const boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
            let entry
            while (entry = entry ? entry.next : state.first) {
              boundFunction(entry.value, entry.key, this)
              // revert to the last existing entry
              while (entry && entry.removed) entry = entry.previous
            }
          },
          // `{ Map, Set}.prototype.has(key)` methods
          // https://tc39.es/ecma262/#sec-map.prototype.has
          // https://tc39.es/ecma262/#sec-set.prototype.has
          has: function has (key) {
            return !!getEntry(this, key)
          }
        })

        redefineAll(C.prototype, IS_MAP ? {
          // `Map.prototype.get(key)` method
          // https://tc39.es/ecma262/#sec-map.prototype.get
          get: function get (key) {
            const entry = getEntry(this, key)
            return entry && entry.value
          },
          // `Map.prototype.set(key, value)` method
          // https://tc39.es/ecma262/#sec-map.prototype.set
          set: function set (key, value) {
            return define(this, key === 0 ? 0 : key, value)
          }
        } : {
          // `Set.prototype.add(value)` method
          // https://tc39.es/ecma262/#sec-set.prototype.add
          add: function add (value) {
            return define(this, value = value === 0 ? 0 : value, value)
          }
        })
        if (DESCRIPTORS) {
          defineProperty(C.prototype, 'size', {
            get: function () {
              return getInternalState(this).size
            }
          })
        }
        return C
      },
      setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
        const ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator'
        const getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME)
        const getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME)
        // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.entries
        // https://tc39.es/ecma262/#sec-map.prototype.keys
        // https://tc39.es/ecma262/#sec-map.prototype.values
        // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
        // https://tc39.es/ecma262/#sec-set.prototype.entries
        // https://tc39.es/ecma262/#sec-set.prototype.keys
        // https://tc39.es/ecma262/#sec-set.prototype.values
        // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
        defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
          setInternalState(this, {
            type: ITERATOR_NAME,
            target: iterated,
            state: getInternalCollectionState(iterated),
            kind: kind,
            last: undefined
          })
        }, function () {
          const state = getInternalIteratorState(this)
          const kind = state.kind
          let entry = state.last
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous
          // get next entry
          if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
            // or finish the iteration
            state.target = undefined
            return { value: undefined, done: true }
          }
          // return step by kind
          if (kind == 'keys') return { value: entry.key, done: false }
          if (kind == 'values') return { value: entry.value, done: false }
          return { value: [entry.key, entry.value], done: false }
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true)

        // `{ Map, Set }.prototype[@@species]` accessors
        // https://tc39.es/ecma262/#sec-get-map-@@species
        // https://tc39.es/ecma262/#sec-get-set-@@species
        setSpecies(CONSTRUCTOR_NAME)
      }
    }
  }, { '../internals/an-instance': 47, '../internals/define-iterator': 83, '../internals/descriptors': 85, '../internals/function-bind-context': 105, '../internals/internal-metadata': 124, '../internals/internal-state': 125, '../internals/iterate': 137, '../internals/object-create': 157, '../internals/object-define-property': 159, '../internals/redefine-all': 177, '../internals/set-species': 188 }],
  71: [function (require, module, exports) {
    'use strict'
    const redefineAll = require('../internals/redefine-all')
    const getWeakData = require('../internals/internal-metadata').getWeakData
    const anObject = require('../internals/an-object')
    const isObject = require('../internals/is-object')
    const anInstance = require('../internals/an-instance')
    const iterate = require('../internals/iterate')
    const ArrayIterationModule = require('../internals/array-iteration')
    const hasOwn = require('../internals/has-own-property')
    const InternalStateModule = require('../internals/internal-state')

    const setInternalState = InternalStateModule.set
    const internalStateGetterFor = InternalStateModule.getterFor
    const find = ArrayIterationModule.find
    const findIndex = ArrayIterationModule.findIndex
    let id = 0

    // fallback for uncaught frozen keys
    const uncaughtFrozenStore = function (store) {
      return store.frozen || (store.frozen = new UncaughtFrozenStore())
    }

    var UncaughtFrozenStore = function () {
      this.entries = []
    }

    const findUncaughtFrozen = function (store, key) {
      return find(store.entries, function (it) {
        return it[0] === key
      })
    }

    UncaughtFrozenStore.prototype = {
      get: function (key) {
        const entry = findUncaughtFrozen(this, key)
        if (entry) return entry[1]
      },
      has: function (key) {
        return !!findUncaughtFrozen(this, key)
      },
      set: function (key, value) {
        const entry = findUncaughtFrozen(this, key)
        if (entry) entry[1] = value
        else this.entries.push([key, value])
      },
      delete: function (key) {
        const index = findIndex(this.entries, function (it) {
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

        const getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME)

        const define = function (that, key, value) {
          const state = getInternalState(that)
          const data = getWeakData(anObject(key), true)
          if (data === true) uncaughtFrozenStore(state).set(key, value)
          else data[state.id] = value
          return that
        }

        redefineAll(C.prototype, {
          // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
          // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
          // https://tc39.es/ecma262/#sec-weakset.prototype.delete
          delete: function (key) {
            const state = getInternalState(this)
            if (!isObject(key)) return false
            const data = getWeakData(key)
            if (data === true) return uncaughtFrozenStore(state).delete(key)
            return data && hasOwn(data, state.id) && delete data[state.id]
          },
          // `{ WeakMap, WeakSet }.prototype.has(key)` methods
          // https://tc39.es/ecma262/#sec-weakmap.prototype.has
          // https://tc39.es/ecma262/#sec-weakset.prototype.has
          has: function has (key) {
            const state = getInternalState(this)
            if (!isObject(key)) return false
            const data = getWeakData(key)
            if (data === true) return uncaughtFrozenStore(state).has(key)
            return data && hasOwn(data, state.id)
          }
        })

        redefineAll(C.prototype, IS_MAP ? {
          // `WeakMap.prototype.get(key)` method
          // https://tc39.es/ecma262/#sec-weakmap.prototype.get
          get: function get (key) {
            const state = getInternalState(this)
            if (isObject(key)) {
              const data = getWeakData(key)
              if (data === true) return uncaughtFrozenStore(state).get(key)
              return data ? data[state.id] : undefined
            }
          },
          // `WeakMap.prototype.set(key, value)` method
          // https://tc39.es/ecma262/#sec-weakmap.prototype.set
          set: function set (key, value) {
            return define(this, key, value)
          }
        } : {
          // `WeakSet.prototype.add(value)` method
          // https://tc39.es/ecma262/#sec-weakset.prototype.add
          add: function add (value) {
            return define(this, value, true)
          }
        })

        return C
      }
    }
  }, { '../internals/an-instance': 47, '../internals/an-object': 48, '../internals/array-iteration': 58, '../internals/has-own-property': 114, '../internals/internal-metadata': 124, '../internals/internal-state': 125, '../internals/is-object': 133, '../internals/iterate': 137, '../internals/redefine-all': 177 }],
  72: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const global = require('../internals/global')
    const isForced = require('../internals/is-forced')
    const redefine = require('../internals/redefine')
    const InternalMetadataModule = require('../internals/internal-metadata')
    const iterate = require('../internals/iterate')
    const anInstance = require('../internals/an-instance')
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')
    const fails = require('../internals/fails')
    const checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration')
    const setToStringTag = require('../internals/set-to-string-tag')
    const inheritIfRequired = require('../internals/inherit-if-required')

    module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
      const IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1
      const IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1
      const ADDER = IS_MAP ? 'set' : 'add'
      const NativeConstructor = global[CONSTRUCTOR_NAME]
      const NativePrototype = NativeConstructor && NativeConstructor.prototype
      let Constructor = NativeConstructor
      const exported = {}

      const fixMethod = function (KEY) {
        const nativeMethod = NativePrototype[KEY]
        redefine(NativePrototype, KEY,
          KEY == 'add'
            ? function add (value) {
              nativeMethod.call(this, value === 0 ? 0 : value)
              return this
            }
            : KEY == 'delete'
              ? function (key) {
                return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key)
              }
              : KEY == 'get'
                ? function get (key) {
                  return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key)
                }
                : KEY == 'has'
                  ? function has (key) {
                    return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key)
                  }
                  : function set (key, value) {
                    nativeMethod.call(this, key === 0 ? 0 : key, value)
                    return this
                  }
        )
      }

      const REPLACE = isForced(
        CONSTRUCTOR_NAME,
        !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
          new NativeConstructor().entries().next()
        }))
      )

      if (REPLACE) {
        // create collection constructor
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER)
        InternalMetadataModule.enable()
      } else if (isForced(CONSTRUCTOR_NAME, true)) {
        const instance = new Constructor()
        // early implementations not supports chaining
        const HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
        // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
        const THROWS_ON_PRIMITIVES = fails(function () { instance.has(1) })
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        // eslint-disable-next-line no-new -- required for testing
        const ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable) })
        // for early implementations -0 and +0 not the same
        const BUGGY_ZERO = !IS_WEAK && fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          const $instance = new NativeConstructor()
          let index = 5
          while (index--) $instance[ADDER](index, index)
          return !$instance.has(-0)
        })

        if (!ACCEPT_ITERABLES) {
          Constructor = wrapper(function (dummy, iterable) {
            anInstance(dummy, Constructor, CONSTRUCTOR_NAME)
            const that = inheritIfRequired(new NativeConstructor(), dummy, Constructor)
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
  }, { '../internals/an-instance': 47, '../internals/check-correctness-of-iteration': 67, '../internals/export': 100, '../internals/fails': 101, '../internals/global': 113, '../internals/inherit-if-required': 121, '../internals/internal-metadata': 124, '../internals/is-callable': 128, '../internals/is-forced': 131, '../internals/is-object': 133, '../internals/iterate': 137, '../internals/redefine': 178, '../internals/set-to-string-tag': 189 }],
  73: [function (require, module, exports) {
    const hasOwn = require('../internals/has-own-property')
    const ownKeys = require('../internals/own-keys')
    const getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')
    const definePropertyModule = require('../internals/object-define-property')

    module.exports = function (target, source) {
      const keys = ownKeys(source)
      const defineProperty = definePropertyModule.f
      const getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key))
      }
    }
  }, { '../internals/has-own-property': 114, '../internals/object-define-property': 159, '../internals/object-get-own-property-descriptor': 160, '../internals/own-keys': 173 }],
  74: [function (require, module, exports) {
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const MATCH = wellKnownSymbol('match')

    module.exports = function (METHOD_NAME) {
      const regexp = /./
      try {
        '/./'[METHOD_NAME](regexp)
      } catch (error1) {
        try {
          regexp[MATCH] = false
          return '/./'[METHOD_NAME](regexp)
        } catch (error2) { /* empty */ }
      } return false
    }
  }, { '../internals/well-known-symbol': 225 }],
  75: [function (require, module, exports) {
    const fails = require('../internals/fails')

    module.exports = !fails(function () {
      function F () { /* empty */ }
      F.prototype.constructor = null
      // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
      return Object.getPrototypeOf(new F()) !== F.prototype
    })
  }, { '../internals/fails': 101 }],
  76: [function (require, module, exports) {
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const toString = require('../internals/to-string')

    const quot = /"/g

    // `CreateHTML` abstract operation
    // https://tc39.es/ecma262/#sec-createhtml
    module.exports = function (string, tag, attribute, value) {
      const S = toString(requireObjectCoercible(string))
      let p1 = '<' + tag
      if (attribute !== '') p1 += ' ' + attribute + '="' + toString(value).replace(quot, '&quot;') + '"'
      return p1 + '>' + S + '</' + tag + '>'
    }
  }, { '../internals/require-object-coercible': 185, '../internals/to-string': 215 }],
  77: [function (require, module, exports) {
    'use strict'
    const IteratorPrototype = require('../internals/iterators-core').IteratorPrototype
    const create = require('../internals/object-create')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')
    const setToStringTag = require('../internals/set-to-string-tag')
    const Iterators = require('../internals/iterators')

    const returnThis = function () { return this }

    module.exports = function (IteratorConstructor, NAME, next) {
      const TO_STRING_TAG = NAME + ' Iterator'
      IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) })
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true)
      Iterators[TO_STRING_TAG] = returnThis
      return IteratorConstructor
    }
  }, { '../internals/create-property-descriptor': 79, '../internals/iterators': 140, '../internals/iterators-core': 139, '../internals/object-create': 157, '../internals/set-to-string-tag': 189 }],
  78: [function (require, module, exports) {
    const DESCRIPTORS = require('../internals/descriptors')
    const definePropertyModule = require('../internals/object-define-property')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')

    module.exports = DESCRIPTORS
      ? function (object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value))
      }
      : function (object, key, value) {
        object[key] = value
        return object
      }
  }, { '../internals/create-property-descriptor': 79, '../internals/descriptors': 85, '../internals/object-define-property': 159 }],
  79: [function (require, module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      }
    }
  }, {}],
  80: [function (require, module, exports) {
    'use strict'
    const toPropertyKey = require('../internals/to-property-key')
    const definePropertyModule = require('../internals/object-define-property')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')

    module.exports = function (object, key, value) {
      const propertyKey = toPropertyKey(key)
      if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value))
      else object[propertyKey] = value
    }
  }, { '../internals/create-property-descriptor': 79, '../internals/object-define-property': 159, '../internals/to-property-key': 213 }],
  81: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')
    const padStart = require('../internals/string-pad').start

    const abs = Math.abs
    const DatePrototype = Date.prototype
    const getTime = DatePrototype.getTime
    const nativeDateToISOString = DatePrototype.toISOString

    // `Date.prototype.toISOString` method implementation
    // https://tc39.es/ecma262/#sec-date.prototype.toisostring
    // PhantomJS / old WebKit fails here:
    module.exports = (fails(function () {
      return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z'
    }) || !fails(function () {
      nativeDateToISOString.call(new Date(NaN))
    }))
      ? function toISOString () {
        if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value')
        const date = this
        const year = date.getUTCFullYear()
        const milliseconds = date.getUTCMilliseconds()
        const sign = year < 0 ? '-' : year > 9999 ? '+' : ''
        return sign + padStart(abs(year), sign ? 6 : 4, 0) +
    '-' + padStart(date.getUTCMonth() + 1, 2, 0) +
    '-' + padStart(date.getUTCDate(), 2, 0) +
    'T' + padStart(date.getUTCHours(), 2, 0) +
    ':' + padStart(date.getUTCMinutes(), 2, 0) +
    ':' + padStart(date.getUTCSeconds(), 2, 0) +
    '.' + padStart(milliseconds, 3, 0) +
    'Z'
      }
      : nativeDateToISOString
  }, { '../internals/fails': 101, '../internals/string-pad': 197 }],
  82: [function (require, module, exports) {
    'use strict'
    const anObject = require('../internals/an-object')
    const ordinaryToPrimitive = require('../internals/ordinary-to-primitive')

    // `Date.prototype[@@toPrimitive](hint)` method implementation
    // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
    module.exports = function (hint) {
      anObject(this)
      if (hint === 'string' || hint === 'default') hint = 'string'
      else if (hint !== 'number') throw TypeError('Incorrect hint')
      return ordinaryToPrimitive(this, hint)
    }
  }, { '../internals/an-object': 48, '../internals/ordinary-to-primitive': 172 }],
  83: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const IS_PURE = require('../internals/is-pure')
    const FunctionName = require('../internals/function-name')
    const isCallable = require('../internals/is-callable')
    const createIteratorConstructor = require('../internals/create-iterator-constructor')
    const getPrototypeOf = require('../internals/object-get-prototype-of')
    const setPrototypeOf = require('../internals/object-set-prototype-of')
    const setToStringTag = require('../internals/set-to-string-tag')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const redefine = require('../internals/redefine')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const Iterators = require('../internals/iterators')
    const IteratorsCore = require('../internals/iterators-core')

    const PROPER_FUNCTION_NAME = FunctionName.PROPER
    const CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE
    const IteratorPrototype = IteratorsCore.IteratorPrototype
    const BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS
    const ITERATOR = wellKnownSymbol('iterator')
    const KEYS = 'keys'
    const VALUES = 'values'
    const ENTRIES = 'entries'

    const returnThis = function () { return this }

    module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next)

      const getIterationMethod = function (KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND]
        switch (KIND) {
          case KEYS: return function keys () { return new IteratorConstructor(this, KIND) }
          case VALUES: return function values () { return new IteratorConstructor(this, KIND) }
          case ENTRIES: return function entries () { return new IteratorConstructor(this, KIND) }
        } return function () { return new IteratorConstructor(this) }
      }

      const TO_STRING_TAG = NAME + ' Iterator'
      let INCORRECT_VALUES_NAME = false
      var IterablePrototype = Iterable.prototype
      const nativeIterator = IterablePrototype[ITERATOR] ||
    IterablePrototype['@@iterator'] ||
    DEFAULT && IterablePrototype[DEFAULT]
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT)
      const anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator
      let CurrentIteratorPrototype, methods, KEY

      // fix native
      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()))
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype)
            } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
              redefine(CurrentIteratorPrototype, ITERATOR, returnThis)
            }
          }
          // Set @@toStringTag to native iterators
          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true)
          if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis
        }
      }

      // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
      if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
          createNonEnumerableProperty(IterablePrototype, 'name', VALUES)
        } else {
          INCORRECT_VALUES_NAME = true
          defaultIterator = function values () { return nativeIterator.call(this) }
        }
      }

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

      // define iterator
      if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
        redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT })
      }
      Iterators[NAME] = defaultIterator

      return methods
    }
  }, { '../internals/create-iterator-constructor': 77, '../internals/create-non-enumerable-property': 78, '../internals/export': 100, '../internals/function-name': 107, '../internals/is-callable': 128, '../internals/is-pure': 134, '../internals/iterators': 140, '../internals/iterators-core': 139, '../internals/object-get-prototype-of': 164, '../internals/object-set-prototype-of': 169, '../internals/redefine': 178, '../internals/set-to-string-tag': 189, '../internals/well-known-symbol': 225 }],
  84: [function (require, module, exports) {
    const path = require('../internals/path')
    const hasOwn = require('../internals/has-own-property')
    const wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped')
    const defineProperty = require('../internals/object-define-property').f

    module.exports = function (NAME) {
      const Symbol = path.Symbol || (path.Symbol = {})
      if (!hasOwn(Symbol, NAME)) {
        defineProperty(Symbol, NAME, {
          value: wrappedWellKnownSymbolModule.f(NAME)
        })
      }
    }
  }, { '../internals/has-own-property': 114, '../internals/object-define-property': 159, '../internals/path': 174, '../internals/well-known-symbol-wrapped': 224 }],
  85: [function (require, module, exports) {
    const fails = require('../internals/fails')

    // Detect IE8's incomplete defineProperty implementation
    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty({}, 1, { get: function () { return 7 } })[1] != 7
    })
  }, { '../internals/fails': 101 }],
  86: [function (require, module, exports) {
    const global = require('../internals/global')
    const isObject = require('../internals/is-object')

    const document = global.document
    // typeof document.createElement is 'object' in old IE
    const EXISTS = isObject(document) && isObject(document.createElement)

    module.exports = function (it) {
      return EXISTS ? document.createElement(it) : {}
    }
  }, { '../internals/global': 113, '../internals/is-object': 133 }],
  87: [function (require, module, exports) {
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
  88: [function (require, module, exports) {
    // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
    const documentCreateElement = require('../internals/document-create-element')

    const classList = documentCreateElement('span').classList
    const DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype

    module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype
  }, { '../internals/document-create-element': 86 }],
  89: [function (require, module, exports) {
    const userAgent = require('../internals/engine-user-agent')

    const firefox = userAgent.match(/firefox\/(\d+)/i)

    module.exports = !!firefox && +firefox[1]
  }, { '../internals/engine-user-agent': 96 }],
  90: [function (require, module, exports) {
    module.exports = typeof window === 'object'
  }, {}],
  91: [function (require, module, exports) {
    const UA = require('../internals/engine-user-agent')

    module.exports = /MSIE|Trident/.test(UA)
  }, { '../internals/engine-user-agent': 96 }],
  92: [function (require, module, exports) {
    const userAgent = require('../internals/engine-user-agent')
    const global = require('../internals/global')

    module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined
  }, { '../internals/engine-user-agent': 96, '../internals/global': 113 }],
  93: [function (require, module, exports) {
    const userAgent = require('../internals/engine-user-agent')

    module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent)
  }, { '../internals/engine-user-agent': 96 }],
  94: [function (require, module, exports) {
    const classof = require('../internals/classof-raw')
    const global = require('../internals/global')

    module.exports = classof(global.process) == 'process'
  }, { '../internals/classof-raw': 68, '../internals/global': 113 }],
  95: [function (require, module, exports) {
    const userAgent = require('../internals/engine-user-agent')

    module.exports = /web0s(?!.*chrome)/i.test(userAgent)
  }, { '../internals/engine-user-agent': 96 }],
  96: [function (require, module, exports) {
    const getBuiltIn = require('../internals/get-built-in')

    module.exports = getBuiltIn('navigator', 'userAgent') || ''
  }, { '../internals/get-built-in': 108 }],
  97: [function (require, module, exports) {
    const global = require('../internals/global')
    const userAgent = require('../internals/engine-user-agent')

    const process = global.process
    const Deno = global.Deno
    const versions = process && process.versions || Deno && Deno.version
    const v8 = versions && versions.v8
    let match, version

    if (v8) {
      match = v8.split('.')
      version = match[0] < 4 ? 1 : match[0] + match[1]
    } else if (userAgent) {
      match = userAgent.match(/Edge\/(\d+)/)
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/)
        if (match) version = match[1]
      }
    }

    module.exports = version && +version
  }, { '../internals/engine-user-agent': 96, '../internals/global': 113 }],
  98: [function (require, module, exports) {
    const userAgent = require('../internals/engine-user-agent')

    const webkit = userAgent.match(/AppleWebKit\/(\d+)\./)

    module.exports = !!webkit && +webkit[1]
  }, { '../internals/engine-user-agent': 96 }],
  99: [function (require, module, exports) {
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
  100: [function (require, module, exports) {
    const global = require('../internals/global')
    const getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const redefine = require('../internals/redefine')
    const setGlobal = require('../internals/set-global')
    const copyConstructorProperties = require('../internals/copy-constructor-properties')
    const isForced = require('../internals/is-forced')

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
  options.name        - the .name of the function if it does not match the key
*/
    module.exports = function (options, source) {
      const TARGET = options.target
      const GLOBAL = options.global
      const STATIC = options.stat
      let FORCED, target, key, targetProperty, sourceProperty, descriptor
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
  }, { '../internals/copy-constructor-properties': 73, '../internals/create-non-enumerable-property': 78, '../internals/global': 113, '../internals/is-forced': 131, '../internals/object-get-own-property-descriptor': 160, '../internals/redefine': 178, '../internals/set-global': 187 }],
  101: [function (require, module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec()
      } catch (error) {
        return true
      }
    }
  }, {}],
  102: [function (require, module, exports) {
    'use strict'
    // TODO: Remove from `core-js@4` since it's moved to entry points
    require('../modules/es.regexp.exec')
    const redefine = require('../internals/redefine')
    const regexpExec = require('../internals/regexp-exec')
    const fails = require('../internals/fails')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')

    const SPECIES = wellKnownSymbol('species')
    const RegExpPrototype = RegExp.prototype

    module.exports = function (KEY, exec, FORCED, SHAM) {
      const SYMBOL = wellKnownSymbol(KEY)

      const DELEGATES_TO_SYMBOL = !fails(function () {
        // String methods call symbol-named RegEp methods
        const O = {}
        O[SYMBOL] = function () { return 7 }
        return ''[KEY](O) != 7
      })

      const DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
        // Symbol-named RegExp methods call .exec
        let execCalled = false
        let re = /a/

        if (KEY === 'split') {
          // We can't use real regex here since it causes deoptimization
          // and serious performance degradation in V8
          // https://github.com/zloirock/core-js/issues/306
          re = {}
          // RegExp[@@split] doesn't call the regex's exec method, but first creates
          // a new one. We need to return the patched regex when creating the new one.
          re.constructor = {}
          re.constructor[SPECIES] = function () { return re }
          re.flags = ''
          re[SYMBOL] = /./[SYMBOL]
        }

        re.exec = function () { execCalled = true; return null }

        re[SYMBOL]('')
        return !execCalled
      })

      if (
        !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
      ) {
        const nativeRegExpMethod = /./[SYMBOL]
        const methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
          const $exec = regexp.exec
          if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              // The native String method already delegates to @@method (this
              // polyfilled function), leasing to infinite recursion.
              // We avoid it by directly calling the native @@method method.
              return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) }
            }
            return { done: true, value: nativeMethod.call(str, regexp, arg2) }
          }
          return { done: false }
        })

        redefine(String.prototype, KEY, methods[0])
        redefine(RegExpPrototype, SYMBOL, methods[1])
      }

      if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true)
    }
  }, { '../internals/create-non-enumerable-property': 78, '../internals/fails': 101, '../internals/redefine': 178, '../internals/regexp-exec': 180, '../internals/well-known-symbol': 225, '../modules/es.regexp.exec': 356 }],
  103: [function (require, module, exports) {
    'use strict'
    const isArray = require('../internals/is-array')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const bind = require('../internals/function-bind-context')

    // `FlattenIntoArray` abstract operation
    // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
    var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
      let targetIndex = start
      let sourceIndex = 0
      const mapFn = mapper ? bind(mapper, thisArg, 3) : false
      let element, elementLen

      while (sourceIndex < sourceLen) {
        if (sourceIndex in source) {
          element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex]

          if (depth > 0 && isArray(element)) {
            elementLen = lengthOfArrayLike(element)
            targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1
          } else {
            if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length')
            target[targetIndex] = element
          }

          targetIndex++
        }
        sourceIndex++
      }
      return targetIndex
    }

    module.exports = flattenIntoArray
  }, { '../internals/function-bind-context': 105, '../internals/is-array': 127, '../internals/length-of-array-like': 141 }],
  104: [function (require, module, exports) {
    const fails = require('../internals/fails')

    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
      return Object.isExtensible(Object.preventExtensions({}))
    })
  }, { '../internals/fails': 101 }],
  105: [function (require, module, exports) {
    const aCallable = require('../internals/a-callable')

    // optional / simple context binding
    module.exports = function (fn, that, length) {
      aCallable(fn)
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
  }, { '../internals/a-callable': 42 }],
  106: [function (require, module, exports) {
    'use strict'
    const aCallable = require('../internals/a-callable')
    const isObject = require('../internals/is-object')

    const slice = [].slice
    const factories = {}

    const construct = function (C, argsLength, args) {
      if (!(argsLength in factories)) {
        for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']'
        // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
        factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')')
      } return factories[argsLength](C, args)
    }

    // `Function.prototype.bind` method implementation
    // https://tc39.es/ecma262/#sec-function.prototype.bind
    module.exports = Function.bind || function bind (that /* , ...args */) {
      const fn = aCallable(this)
      const partArgs = slice.call(arguments, 1)
      var boundFunction = function bound (/* args... */) {
        const args = partArgs.concat(slice.call(arguments))
        return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args)
      }
      if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype
      return boundFunction
    }
  }, { '../internals/a-callable': 42, '../internals/is-object': 133 }],
  107: [function (require, module, exports) {
    const DESCRIPTORS = require('../internals/descriptors')
    const hasOwn = require('../internals/has-own-property')

    const FunctionPrototype = Function.prototype
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor

    const EXISTS = hasOwn(FunctionPrototype, 'name')
    // additional protection from minified / mangled / dropped function names
    const PROPER = EXISTS && function something () { /* empty */ }.name === 'something'
    const CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable))

    module.exports = {
      EXISTS: EXISTS,
      PROPER: PROPER,
      CONFIGURABLE: CONFIGURABLE
    }
  }, { '../internals/descriptors': 85, '../internals/has-own-property': 114 }],
  108: [function (require, module, exports) {
    const global = require('../internals/global')
    const isCallable = require('../internals/is-callable')

    const aFunction = function (argument) {
      return isCallable(argument) ? argument : undefined
    }

    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method]
    }
  }, { '../internals/global': 113, '../internals/is-callable': 128 }],
  109: [function (require, module, exports) {
    const classof = require('../internals/classof')
    const getMethod = require('../internals/get-method')
    const Iterators = require('../internals/iterators')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const ITERATOR = wellKnownSymbol('iterator')

    module.exports = function (it) {
      if (it != undefined) {
        return getMethod(it, ITERATOR) ||
    getMethod(it, '@@iterator') ||
    Iterators[classof(it)]
      }
    }
  }, { '../internals/classof': 69, '../internals/get-method': 111, '../internals/iterators': 140, '../internals/well-known-symbol': 225 }],
  110: [function (require, module, exports) {
    const aCallable = require('../internals/a-callable')
    const anObject = require('../internals/an-object')
    const getIteratorMethod = require('../internals/get-iterator-method')

    module.exports = function (argument, usingIterator) {
      const iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator
      if (aCallable(iteratorMethod)) return anObject(iteratorMethod.call(argument))
      throw TypeError(String(argument) + ' is not iterable')
    }
  }, { '../internals/a-callable': 42, '../internals/an-object': 48, '../internals/get-iterator-method': 109 }],
  111: [function (require, module, exports) {
    const aCallable = require('../internals/a-callable')

    // `GetMethod` abstract operation
    // https://tc39.es/ecma262/#sec-getmethod
    module.exports = function (V, P) {
      const func = V[P]
      return func == null ? undefined : aCallable(func)
    }
  }, { '../internals/a-callable': 42 }],
  112: [function (require, module, exports) {
    const toObject = require('../internals/to-object')

    const floor = Math.floor
    const replace = ''.replace
    const SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g
    const SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g

    // `GetSubstitution` abstract operation
    // https://tc39.es/ecma262/#sec-getsubstitution
    module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
      const tailPos = position + matched.length
      const m = captures.length
      let symbols = SUBSTITUTION_SYMBOLS_NO_NAMED
      if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures)
        symbols = SUBSTITUTION_SYMBOLS
      }
      return replace.call(replacement, symbols, function (match, ch) {
        let capture
        switch (ch.charAt(0)) {
          case '$': return '$'
          case '&': return matched
          case '`': return str.slice(0, position)
          case "'": return str.slice(tailPos)
          case '<':
            capture = namedCaptures[ch.slice(1, -1)]
            break
          default: // \d\d?
            var n = +ch
            if (n === 0) return match
            if (n > m) {
              const f = floor(n / 10)
              if (f === 0) return match
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1)
              return match
            }
            capture = captures[n - 1]
        }
        return capture === undefined ? '' : capture
      })
    }
  }, { '../internals/to-object': 209 }],
  113: [function (require, module, exports) {
    (function (global) {
      (function () {
        const check = function (it) {
          return it && it.Math == Math && it
        }

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis === 'object' && globalThis) ||
  check(typeof window === 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self === 'object' && self) ||
  check(typeof global === 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this })() || Function('return this')()
      }).call(this)
    }).call(this, typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {})
  }, {}],
  114: [function (require, module, exports) {
    const toObject = require('../internals/to-object')

    const hasOwnProperty = {}.hasOwnProperty

    // `HasOwnProperty` abstract operation
    // https://tc39.es/ecma262/#sec-hasownproperty
    module.exports = Object.hasOwn || function hasOwn (it, key) {
      return hasOwnProperty.call(toObject(it), key)
    }
  }, { '../internals/to-object': 209 }],
  115: [function (require, module, exports) {
    module.exports = {}
  }, {}],
  116: [function (require, module, exports) {
    const global = require('../internals/global')

    module.exports = function (a, b) {
      const console = global.console
      if (console && console.error) {
        arguments.length === 1 ? console.error(a) : console.error(a, b)
      }
    }
  }, { '../internals/global': 113 }],
  117: [function (require, module, exports) {
    const getBuiltIn = require('../internals/get-built-in')

    module.exports = getBuiltIn('document', 'documentElement')
  }, { '../internals/get-built-in': 108 }],
  118: [function (require, module, exports) {
    const DESCRIPTORS = require('../internals/descriptors')
    const fails = require('../internals/fails')
    const createElement = require('../internals/document-create-element')

    // Thank's IE8 for his funny defineProperty
    module.exports = !DESCRIPTORS && !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
      return Object.defineProperty(createElement('div'), 'a', {
        get: function () { return 7 }
      }).a != 7
    })
  }, { '../internals/descriptors': 85, '../internals/document-create-element': 86, '../internals/fails': 101 }],
  119: [function (require, module, exports) {
    // IEEE754 conversions based on https://github.com/feross/ieee754
    const abs = Math.abs
    const pow = Math.pow
    const floor = Math.floor
    const log = Math.log
    const LN2 = Math.LN2

    const pack = function (number, mantissaLength, bytes) {
      const buffer = new Array(bytes)
      let exponentLength = bytes * 8 - mantissaLength - 1
      const eMax = (1 << exponentLength) - 1
      const eBias = eMax >> 1
      const rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0
      const sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0
      let index = 0
      let exponent, mantissa, c
      number = abs(number)
      // eslint-disable-next-line no-self-compare -- NaN check
      if (number != number || number === Infinity) {
        // eslint-disable-next-line no-self-compare -- NaN check
        mantissa = number != number ? 1 : 0
        exponent = eMax
      } else {
        exponent = floor(log(number) / LN2)
        if (number * (c = pow(2, -exponent)) < 1) {
          exponent--
          c *= 2
        }
        if (exponent + eBias >= 1) {
          number += rt / c
        } else {
          number += rt * pow(2, 1 - eBias)
        }
        if (number * c >= 2) {
          exponent++
          c /= 2
        }
        if (exponent + eBias >= eMax) {
          mantissa = 0
          exponent = eMax
        } else if (exponent + eBias >= 1) {
          mantissa = (number * c - 1) * pow(2, mantissaLength)
          exponent = exponent + eBias
        } else {
          mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength)
          exponent = 0
        }
      }
      for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
      exponent = exponent << mantissaLength | mantissa
      exponentLength += mantissaLength
      for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
      buffer[--index] |= sign * 128
      return buffer
    }

    const unpack = function (buffer, mantissaLength) {
      const bytes = buffer.length
      const exponentLength = bytes * 8 - mantissaLength - 1
      const eMax = (1 << exponentLength) - 1
      const eBias = eMax >> 1
      let nBits = exponentLength - 7
      let index = bytes - 1
      let sign = buffer[index--]
      let exponent = sign & 127
      let mantissa
      sign >>= 7
      for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
      mantissa = exponent & (1 << -nBits) - 1
      exponent >>= -nBits
      nBits += mantissaLength
      for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
      if (exponent === 0) {
        exponent = 1 - eBias
      } else if (exponent === eMax) {
        return mantissa ? NaN : sign ? -Infinity : Infinity
      } else {
        mantissa = mantissa + pow(2, mantissaLength)
        exponent = exponent - eBias
      } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength)
    }

    module.exports = {
      pack: pack,
      unpack: unpack
    }
  }, {}],
  120: [function (require, module, exports) {
    const fails = require('../internals/fails')
    const classof = require('../internals/classof-raw')

    const split = ''.split

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    module.exports = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins -- safe
      return !Object('z').propertyIsEnumerable(0)
    }) ? function (it) {
        return classof(it) == 'String' ? split.call(it, '') : Object(it)
      } : Object
  }, { '../internals/classof-raw': 68, '../internals/fails': 101 }],
  121: [function (require, module, exports) {
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')
    const setPrototypeOf = require('../internals/object-set-prototype-of')

    // makes subclassing work correct for wrapped built-ins
    module.exports = function ($this, dummy, Wrapper) {
      let NewTarget, NewTargetPrototype
      if (
      // it can work only with native `setPrototypeOf`
        setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
      ) setPrototypeOf($this, NewTargetPrototype)
      return $this
    }
  }, { '../internals/is-callable': 128, '../internals/is-object': 133, '../internals/object-set-prototype-of': 169 }],
  122: [function (require, module, exports) {
    const isCallable = require('../internals/is-callable')
    const store = require('../internals/shared-store')

    const functionToString = Function.toString

    // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function (it) {
        return functionToString.call(it)
      }
    }

    module.exports = store.inspectSource
  }, { '../internals/is-callable': 128, '../internals/shared-store': 191 }],
  123: [function (require, module, exports) {
    const isObject = require('../internals/is-object')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')

    // `InstallErrorCause` abstract operation
    // https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
    module.exports = function (O, options) {
      if (isObject(options) && 'cause' in options) {
        createNonEnumerableProperty(O, 'cause', options.cause)
      }
    }
  }, { '../internals/create-non-enumerable-property': 78, '../internals/is-object': 133 }],
  124: [function (require, module, exports) {
    const $ = require('../internals/export')
    const hiddenKeys = require('../internals/hidden-keys')
    const isObject = require('../internals/is-object')
    const hasOwn = require('../internals/has-own-property')
    const defineProperty = require('../internals/object-define-property').f
    const getOwnPropertyNamesModule = require('../internals/object-get-own-property-names')
    const getOwnPropertyNamesExternalModule = require('../internals/object-get-own-property-names-external')
    const uid = require('../internals/uid')
    const FREEZING = require('../internals/freezing')

    let REQUIRED = false
    const METADATA = uid('meta')
    let id = 0

    // eslint-disable-next-line es/no-object-isextensible -- safe
    const isExtensible = Object.isExtensible || function () {
      return true
    }

    const setMetadata = function (it) {
      defineProperty(it, METADATA, {
        value: {
          objectID: 'O' + id++, // object ID
          weakData: {} // weak collections IDs
        }
      })
    }

    const fastKey = function (it, create) {
      // return a primitive with prefix
      if (!isObject(it)) return typeof it === 'symbol' ? it : (typeof it === 'string' ? 'S' : 'P') + it
      if (!hasOwn(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'
        // not necessary to add metadata
        if (!create) return 'E'
        // add missing metadata
        setMetadata(it)
        // return object ID
      } return it[METADATA].objectID
    }

    const getWeakData = function (it, create) {
      if (!hasOwn(it, METADATA)) {
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
    const onFreeze = function (it) {
      if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it)
      return it
    }

    const enable = function () {
      meta.enable = function () { /* empty */ }
      REQUIRED = true
      const getOwnPropertyNames = getOwnPropertyNamesModule.f
      const splice = [].splice
      const test = {}
      test[METADATA] = 1

      // prevent exposing of metadata key
      if (getOwnPropertyNames(test).length) {
        getOwnPropertyNamesModule.f = function (it) {
          const result = getOwnPropertyNames(it)
          for (let i = 0, length = result.length; i < length; i++) {
            if (result[i] === METADATA) {
              splice.call(result, i, 1)
              break
            }
          } return result
        }

        $({ target: 'Object', stat: true, forced: true }, {
          getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
        })
      }
    }

    var meta = module.exports = {
      enable: enable,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze
    }

    hiddenKeys[METADATA] = true
  }, { '../internals/export': 100, '../internals/freezing': 104, '../internals/has-own-property': 114, '../internals/hidden-keys': 115, '../internals/is-object': 133, '../internals/object-define-property': 159, '../internals/object-get-own-property-names': 162, '../internals/object-get-own-property-names-external': 161, '../internals/uid': 222 }],
  125: [function (require, module, exports) {
    const NATIVE_WEAK_MAP = require('../internals/native-weak-map')
    const global = require('../internals/global')
    const isObject = require('../internals/is-object')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const hasOwn = require('../internals/has-own-property')
    const shared = require('../internals/shared-store')
    const sharedKey = require('../internals/shared-key')
    const hiddenKeys = require('../internals/hidden-keys')

    const OBJECT_ALREADY_INITIALIZED = 'Object already initialized'
    const WeakMap = global.WeakMap
    let set, get, has

    const enforce = function (it) {
      return has(it) ? get(it) : set(it, {})
    }

    const getterFor = function (TYPE) {
      return function (it) {
        let state
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError('Incompatible receiver, ' + TYPE + ' required')
        } return state
      }
    }

    if (NATIVE_WEAK_MAP || shared.state) {
      const store = shared.state || (shared.state = new WeakMap())
      const wmget = store.get
      const wmhas = store.has
      const wmset = store.set
      set = function (it, metadata) {
        if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED)
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
      const STATE = sharedKey('state')
      hiddenKeys[STATE] = true
      set = function (it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED)
        metadata.facade = it
        createNonEnumerableProperty(it, STATE, metadata)
        return metadata
      }
      get = function (it) {
        return hasOwn(it, STATE) ? it[STATE] : {}
      }
      has = function (it) {
        return hasOwn(it, STATE)
      }
    }

    module.exports = {
      set: set,
      get: get,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    }
  }, { '../internals/create-non-enumerable-property': 78, '../internals/global': 113, '../internals/has-own-property': 114, '../internals/hidden-keys': 115, '../internals/is-object': 133, '../internals/native-weak-map': 150, '../internals/shared-key': 190, '../internals/shared-store': 191 }],
  126: [function (require, module, exports) {
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const Iterators = require('../internals/iterators')

    const ITERATOR = wellKnownSymbol('iterator')
    const ArrayPrototype = Array.prototype

    // check on default Array iterator
    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it)
    }
  }, { '../internals/iterators': 140, '../internals/well-known-symbol': 225 }],
  127: [function (require, module, exports) {
    const classof = require('../internals/classof-raw')

    // `IsArray` abstract operation
    // https://tc39.es/ecma262/#sec-isarray
    // eslint-disable-next-line es/no-array-isarray -- safe
    module.exports = Array.isArray || function isArray (argument) {
      return classof(argument) == 'Array'
    }
  }, { '../internals/classof-raw': 68 }],
  128: [function (require, module, exports) {
    // `IsCallable` abstract operation
    // https://tc39.es/ecma262/#sec-iscallable
    module.exports = function (argument) {
      return typeof argument === 'function'
    }
  }, {}],
  129: [function (require, module, exports) {
    const fails = require('../internals/fails')
    const isCallable = require('../internals/is-callable')
    const classof = require('../internals/classof')
    const getBuiltIn = require('../internals/get-built-in')
    const inspectSource = require('../internals/inspect-source')

    const empty = []
    const construct = getBuiltIn('Reflect', 'construct')
    const constructorRegExp = /^\s*(?:class|function)\b/
    const exec = constructorRegExp.exec
    const INCORRECT_TO_STRING = !constructorRegExp.exec(function () { /* empty */ })

    const isConstructorModern = function (argument) {
      if (!isCallable(argument)) return false
      try {
        construct(Object, empty, argument)
        return true
      } catch (error) {
        return false
      }
    }

    const isConstructorLegacy = function (argument) {
      if (!isCallable(argument)) return false
      switch (classof(argument)) {
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction': return false
    // we can't check .prototype since constructors produced by .bind haven't it
      } return INCORRECT_TO_STRING || !!exec.call(constructorRegExp, inspectSource(argument))
    }

    // `IsConstructor` abstract operation
    // https://tc39.es/ecma262/#sec-isconstructor
    module.exports = !construct || fails(function () {
      let called
      return isConstructorModern(isConstructorModern.call) ||
    !isConstructorModern(Object) ||
    !isConstructorModern(function () { called = true }) ||
    called
    })
      ? isConstructorLegacy
      : isConstructorModern
  }, { '../internals/classof': 69, '../internals/fails': 101, '../internals/get-built-in': 108, '../internals/inspect-source': 122, '../internals/is-callable': 128 }],
  130: [function (require, module, exports) {
    const hasOwn = require('../internals/has-own-property')

    module.exports = function (descriptor) {
      return descriptor !== undefined && (hasOwn(descriptor, 'value') || hasOwn(descriptor, 'writable'))
    }
  }, { '../internals/has-own-property': 114 }],
  131: [function (require, module, exports) {
    const fails = require('../internals/fails')
    const isCallable = require('../internals/is-callable')

    const replacement = /#|\.prototype\./

    const isForced = function (feature, detection) {
      const value = data[normalize(feature)]
      return value == POLYFILL
        ? true
        : value == NATIVE
          ? false
          : isCallable(detection)
            ? fails(detection)
            : !!detection
    }

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase()
    }

    var data = isForced.data = {}
    var NATIVE = isForced.NATIVE = 'N'
    var POLYFILL = isForced.POLYFILL = 'P'

    module.exports = isForced
  }, { '../internals/fails': 101, '../internals/is-callable': 128 }],
  132: [function (require, module, exports) {
    const isObject = require('../internals/is-object')

    const floor = Math.floor

    // `IsIntegralNumber` abstract operation
    // https://tc39.es/ecma262/#sec-isintegralnumber
    // eslint-disable-next-line es/no-number-isinteger -- safe
    module.exports = Number.isInteger || function isInteger (it) {
      return !isObject(it) && isFinite(it) && floor(it) === it
    }
  }, { '../internals/is-object': 133 }],
  133: [function (require, module, exports) {
    const isCallable = require('../internals/is-callable')

    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : isCallable(it)
    }
  }, { '../internals/is-callable': 128 }],
  134: [function (require, module, exports) {
    module.exports = false
  }, {}],
  135: [function (require, module, exports) {
    const isObject = require('../internals/is-object')
    const classof = require('../internals/classof-raw')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const MATCH = wellKnownSymbol('match')

    // `IsRegExp` abstract operation
    // https://tc39.es/ecma262/#sec-isregexp
    module.exports = function (it) {
      let isRegExp
      return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp')
    }
  }, { '../internals/classof-raw': 68, '../internals/is-object': 133, '../internals/well-known-symbol': 225 }],
  136: [function (require, module, exports) {
    const isCallable = require('../internals/is-callable')
    const getBuiltIn = require('../internals/get-built-in')
    const USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid')

    module.exports = USE_SYMBOL_AS_UID
      ? function (it) {
        return typeof it === 'symbol'
      }
      : function (it) {
        const $Symbol = getBuiltIn('Symbol')
        return isCallable($Symbol) && Object(it) instanceof $Symbol
      }
  }, { '../internals/get-built-in': 108, '../internals/is-callable': 128, '../internals/use-symbol-as-uid': 223 }],
  137: [function (require, module, exports) {
    const anObject = require('../internals/an-object')
    const isArrayIteratorMethod = require('../internals/is-array-iterator-method')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const bind = require('../internals/function-bind-context')
    const getIterator = require('../internals/get-iterator')
    const getIteratorMethod = require('../internals/get-iterator-method')
    const iteratorClose = require('../internals/iterator-close')

    const Result = function (stopped, result) {
      this.stopped = stopped
      this.result = result
    }

    module.exports = function (iterable, unboundFunction, options) {
      const that = options && options.that
      const AS_ENTRIES = !!(options && options.AS_ENTRIES)
      const IS_ITERATOR = !!(options && options.IS_ITERATOR)
      const INTERRUPTED = !!(options && options.INTERRUPTED)
      const fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED)
      let iterator, iterFn, index, length, result, next, step

      const stop = function (condition) {
        if (iterator) iteratorClose(iterator, 'normal', condition)
        return new Result(true, condition)
      }

      const callFn = function (value) {
        if (AS_ENTRIES) {
          anObject(value)
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1])
        } return INTERRUPTED ? fn(value, stop) : fn(value)
      }

      if (IS_ITERATOR) {
        iterator = iterable
      } else {
        iterFn = getIteratorMethod(iterable)
        if (!iterFn) throw TypeError(String(iterable) + ' is not iterable')
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
            result = callFn(iterable[index])
            if (result && result instanceof Result) return result
          } return new Result(false)
        }
        iterator = getIterator(iterable, iterFn)
      }

      next = iterator.next
      while (!(step = next.call(iterator)).done) {
        try {
          result = callFn(step.value)
        } catch (error) {
          iteratorClose(iterator, 'throw', error)
        }
        if (typeof result === 'object' && result && result instanceof Result) return result
      } return new Result(false)
    }
  }, { '../internals/an-object': 48, '../internals/function-bind-context': 105, '../internals/get-iterator': 110, '../internals/get-iterator-method': 109, '../internals/is-array-iterator-method': 126, '../internals/iterator-close': 138, '../internals/length-of-array-like': 141 }],
  138: [function (require, module, exports) {
    const anObject = require('../internals/an-object')
    const getMethod = require('../internals/get-method')

    module.exports = function (iterator, kind, value) {
      let innerResult, innerError
      anObject(iterator)
      try {
        innerResult = getMethod(iterator, 'return')
        if (!innerResult) {
          if (kind === 'throw') throw value
          return value
        }
        innerResult = innerResult.call(iterator)
      } catch (error) {
        innerError = true
        innerResult = error
      }
      if (kind === 'throw') throw value
      if (innerError) throw innerResult
      anObject(innerResult)
      return value
    }
  }, { '../internals/an-object': 48, '../internals/get-method': 111 }],
  139: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')
    const isCallable = require('../internals/is-callable')
    const create = require('../internals/object-create')
    const getPrototypeOf = require('../internals/object-get-prototype-of')
    const redefine = require('../internals/redefine')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const IS_PURE = require('../internals/is-pure')

    const ITERATOR = wellKnownSymbol('iterator')
    let BUGGY_SAFARI_ITERATORS = false

    // `%IteratorPrototype%` object
    // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
    let IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator

    /* eslint-disable es/no-array-prototype-keys -- safe */
    if ([].keys) {
      arrayIterator = [].keys()
      // Safari 8 has buggy iterators w/o `next`
      if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator))
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype
      }
    }

    const NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
      const test = {}
      // FF44- legacy iterators case
      return IteratorPrototype[ITERATOR].call(test) !== test
    })

    if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {}
    else if (IS_PURE) IteratorPrototype = create(IteratorPrototype)

    // `%IteratorPrototype%[@@iterator]()` method
    // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
    if (!isCallable(IteratorPrototype[ITERATOR])) {
      redefine(IteratorPrototype, ITERATOR, function () {
        return this
      })
    }

    module.exports = {
      IteratorPrototype: IteratorPrototype,
      BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
    }
  }, { '../internals/fails': 101, '../internals/is-callable': 128, '../internals/is-pure': 134, '../internals/object-create': 157, '../internals/object-get-prototype-of': 164, '../internals/redefine': 178, '../internals/well-known-symbol': 225 }],
  140: [function (require, module, exports) {
    arguments[4][115][0].apply(exports, arguments)
  }, { dup: 115 }],
  141: [function (require, module, exports) {
    const toLength = require('../internals/to-length')

    // `LengthOfArrayLike` abstract operation
    // https://tc39.es/ecma262/#sec-lengthofarraylike
    module.exports = function (obj) {
      return toLength(obj.length)
    }
  }, { '../internals/to-length': 208 }],
  142: [function (require, module, exports) {
    // eslint-disable-next-line es/no-math-expm1 -- safe
    const $expm1 = Math.expm1
    const exp = Math.exp

    // `Math.expm1` method implementation
    // https://tc39.es/ecma262/#sec-math.expm1
    module.exports = (!$expm1 ||
  // Old FF bug
  $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 ||
  // Tor Browser bug
  $expm1(-2e-17) != -2e-17
    ) ? function expm1 (x) {
        return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1
      } : $expm1
  }, {}],
  143: [function (require, module, exports) {
    const sign = require('../internals/math-sign')

    const abs = Math.abs
    const pow = Math.pow
    const EPSILON = pow(2, -52)
    const EPSILON32 = pow(2, -23)
    const MAX32 = pow(2, 127) * (2 - EPSILON32)
    const MIN32 = pow(2, -126)

    const roundTiesToEven = function (n) {
      return n + 1 / EPSILON - 1 / EPSILON
    }

    // `Math.fround` method implementation
    // https://tc39.es/ecma262/#sec-math.fround
    // eslint-disable-next-line es/no-math-fround -- safe
    module.exports = Math.fround || function fround (x) {
      const $abs = abs(x)
      const $sign = sign(x)
      let a, result
      if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32
      a = (1 + EPSILON32 / EPSILON) * $abs
      result = a - (a - $abs)
      // eslint-disable-next-line no-self-compare -- NaN check
      if (result > MAX32 || result != result) return $sign * Infinity
      return $sign * result
    }
  }, { '../internals/math-sign': 145 }],
  144: [function (require, module, exports) {
    const log = Math.log

    // `Math.log1p` method implementation
    // https://tc39.es/ecma262/#sec-math.log1p
    // eslint-disable-next-line es/no-math-log1p -- safe
    module.exports = Math.log1p || function log1p (x) {
      return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x)
    }
  }, {}],
  145: [function (require, module, exports) {
    // `Math.sign` method implementation
    // https://tc39.es/ecma262/#sec-math.sign
    // eslint-disable-next-line es/no-math-sign -- safe
    module.exports = Math.sign || function sign (x) {
      // eslint-disable-next-line no-self-compare -- NaN check
      return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1
    }
  }, {}],
  146: [function (require, module, exports) {
    const global = require('../internals/global')
    const getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f
    const macrotask = require('../internals/task').set
    const IS_IOS = require('../internals/engine-is-ios')
    const IS_IOS_PEBBLE = require('../internals/engine-is-ios-pebble')
    const IS_WEBOS_WEBKIT = require('../internals/engine-is-webos-webkit')
    const IS_NODE = require('../internals/engine-is-node')

    const MutationObserver = global.MutationObserver || global.WebKitMutationObserver
    const document = global.document
    const process = global.process
    const Promise = global.Promise
    // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
    const queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask')
    const queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value

    let flush, head, last, notify, toggle, node, promise, then

    // modern engines have queueMicrotask method
    if (!queueMicrotask) {
      flush = function () {
        let parent, fn
        if (IS_NODE && (parent = process.domain)) parent.exit()
        while (head) {
          fn = head.fn
          head = head.next
          try {
            fn()
          } catch (error) {
            if (head) notify()
            else last = undefined
            throw error
          }
        } last = undefined
        if (parent) parent.enter()
      }

      // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
      // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
      if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
        toggle = true
        node = document.createTextNode('')
        new MutationObserver(flush).observe(node, { characterData: true })
        notify = function () {
          node.data = toggle = !toggle
        }
      // environments with maybe non-completely correct, but existent Promise
      } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        promise = Promise.resolve(undefined)
        // workaround of WebKit ~ iOS Safari 10.1 bug
        promise.constructor = Promise
        then = promise.then
        notify = function () {
          then.call(promise, flush)
        }
      // Node.js without promises
      } else if (IS_NODE) {
        notify = function () {
          process.nextTick(flush)
        }
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout
      } else {
        notify = function () {
          // strange IE + webpack dev server bug - use .call(global)
          macrotask.call(global, flush)
        }
      }
    }

    module.exports = queueMicrotask || function (fn) {
      const task = { fn: fn, next: undefined }
      if (last) last.next = task
      if (!head) {
        head = task
        notify()
      } last = task
    }
  }, { '../internals/engine-is-ios': 93, '../internals/engine-is-ios-pebble': 92, '../internals/engine-is-node': 94, '../internals/engine-is-webos-webkit': 95, '../internals/global': 113, '../internals/object-get-own-property-descriptor': 160, '../internals/task': 202 }],
  147: [function (require, module, exports) {
    const global = require('../internals/global')

    module.exports = global.Promise
  }, { '../internals/global': 113 }],
  148: [function (require, module, exports) {
    /* eslint-disable es/no-symbol -- required for testing */
    const V8_VERSION = require('../internals/engine-v8-version')
    const fails = require('../internals/fails')

    // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
    module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
      const symbol = Symbol()
      // Chrome 38 Symbol has incorrect toString conversion
      // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
      return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41
    })
  }, { '../internals/engine-v8-version': 97, '../internals/fails': 101 }],
  149: [function (require, module, exports) {
    const fails = require('../internals/fails')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const IS_PURE = require('../internals/is-pure')

    const ITERATOR = wellKnownSymbol('iterator')

    module.exports = !fails(function () {
      const url = new URL('b?a=1&b=2&c=3', 'http://a')
      const searchParams = url.searchParams
      let result = ''
      url.pathname = 'c%20d'
      searchParams.forEach(function (value, key) {
        searchParams.delete('b')
        result += key + value
      })
      return (IS_PURE && !url.toJSON) ||
    !searchParams.sort ||
    url.href !== 'http://a/c%20d?a=1&c=3' ||
    searchParams.get('c') !== '3' ||
    String(new URLSearchParams('?a=1')) !== 'a=1' ||
    !searchParams[ITERATOR] ||
    // throws in Edge
    new URL('https://a@b').username !== 'a' ||
    new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' ||
    // not punycoded in Edge
    new URL('http://тест').host !== 'xn--e1aybc' ||
    // not escaped in Chrome 62-
    new URL('http://a#б').hash !== '#%D0%B1' ||
    // fails in Chrome 66-
    result !== 'a1c3' ||
    // throws in Safari
    new URL('http://x', undefined).host !== 'x'
    })
  }, { '../internals/fails': 101, '../internals/is-pure': 134, '../internals/well-known-symbol': 225 }],
  150: [function (require, module, exports) {
    const global = require('../internals/global')
    const isCallable = require('../internals/is-callable')
    const inspectSource = require('../internals/inspect-source')

    const WeakMap = global.WeakMap

    module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap))
  }, { '../internals/global': 113, '../internals/inspect-source': 122, '../internals/is-callable': 128 }],
  151: [function (require, module, exports) {
    'use strict'
    const aCallable = require('../internals/a-callable')

    const PromiseCapability = function (C) {
      let resolve, reject
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor')
        resolve = $$resolve
        reject = $$reject
      })
      this.resolve = aCallable(resolve)
      this.reject = aCallable(reject)
    }

    // `NewPromiseCapability` abstract operation
    // https://tc39.es/ecma262/#sec-newpromisecapability
    module.exports.f = function (C) {
      return new PromiseCapability(C)
    }
  }, { '../internals/a-callable': 42 }],
  152: [function (require, module, exports) {
    const isRegExp = require('../internals/is-regexp')

    module.exports = function (it) {
      if (isRegExp(it)) {
        throw TypeError("The method doesn't accept regular expressions")
      } return it
    }
  }, { '../internals/is-regexp': 135 }],
  153: [function (require, module, exports) {
    const global = require('../internals/global')

    const globalIsFinite = global.isFinite

    // `Number.isFinite` method
    // https://tc39.es/ecma262/#sec-number.isfinite
    // eslint-disable-next-line es/no-number-isfinite -- safe
    module.exports = Number.isFinite || function isFinite (it) {
      return typeof it === 'number' && globalIsFinite(it)
    }
  }, { '../internals/global': 113 }],
  154: [function (require, module, exports) {
    const global = require('../internals/global')
    const fails = require('../internals/fails')
    const toString = require('../internals/to-string')
    const trim = require('../internals/string-trim').trim
    const whitespaces = require('../internals/whitespaces')

    const $parseFloat = global.parseFloat
    const Symbol = global.Symbol
    const ITERATOR = Symbol && Symbol.iterator
    const FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity ||
  // MS Edge 18- broken with boxed symbols
  (ITERATOR && !fails(function () { $parseFloat(Object(ITERATOR)) }))

    // `parseFloat` method
    // https://tc39.es/ecma262/#sec-parsefloat-string
    module.exports = FORCED
      ? function parseFloat (string) {
        const trimmedString = trim(toString(string))
        const result = $parseFloat(trimmedString)
        return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result
      }
      : $parseFloat
  }, { '../internals/fails': 101, '../internals/global': 113, '../internals/string-trim': 201, '../internals/to-string': 215, '../internals/whitespaces': 226 }],
  155: [function (require, module, exports) {
    const global = require('../internals/global')
    const fails = require('../internals/fails')
    const toString = require('../internals/to-string')
    const trim = require('../internals/string-trim').trim
    const whitespaces = require('../internals/whitespaces')

    const $parseInt = global.parseInt
    const Symbol = global.Symbol
    const ITERATOR = Symbol && Symbol.iterator
    const hex = /^[+-]?0x/i
    const FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22 ||
  // MS Edge 18- broken with boxed symbols
  (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)) }))

    // `parseInt` method
    // https://tc39.es/ecma262/#sec-parseint-string-radix
    module.exports = FORCED
      ? function parseInt (string, radix) {
        const S = trim(toString(string))
        return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10))
      }
      : $parseInt
  }, { '../internals/fails': 101, '../internals/global': 113, '../internals/string-trim': 201, '../internals/to-string': 215, '../internals/whitespaces': 226 }],
  156: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const fails = require('../internals/fails')
    const objectKeys = require('../internals/object-keys')
    const getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols')
    const propertyIsEnumerableModule = require('../internals/object-property-is-enumerable')
    const toObject = require('../internals/to-object')
    const IndexedObject = require('../internals/indexed-object')

    // eslint-disable-next-line es/no-object-assign -- safe
    const $assign = Object.assign
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    const defineProperty = Object.defineProperty

    // `Object.assign` method
    // https://tc39.es/ecma262/#sec-object.assign
    module.exports = !$assign || fails(function () {
      // should have correct order of operations (Edge bug)
      if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
        enumerable: true,
        get: function () {
          defineProperty(this, 'b', {
            value: 3,
            enumerable: false
          })
        }
      }), { b: 2 })).b !== 1) return true
      // should work with symbols and should have deterministic property order (V8 bug)
      const A = {}
      const B = {}
      // eslint-disable-next-line es/no-symbol -- safe
      const symbol = Symbol()
      const alphabet = 'abcdefghijklmnopqrst'
      A[symbol] = 7
      alphabet.split('').forEach(function (chr) { B[chr] = chr })
      return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet
    }) ? function assign (target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
        const T = toObject(target)
        const argumentsLength = arguments.length
        let index = 1
        const getOwnPropertySymbols = getOwnPropertySymbolsModule.f
        const propertyIsEnumerable = propertyIsEnumerableModule.f
        while (argumentsLength > index) {
          const S = IndexedObject(arguments[index++])
          const keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S)
          const length = keys.length
          let j = 0
          var key
          while (length > j) {
            key = keys[j++]
            if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key]
          }
        } return T
      } : $assign
  }, { '../internals/descriptors': 85, '../internals/fails': 101, '../internals/indexed-object': 120, '../internals/object-get-own-property-symbols': 163, '../internals/object-keys': 166, '../internals/object-property-is-enumerable': 167, '../internals/to-object': 209 }],
  157: [function (require, module, exports) {
    /* global ActiveXObject -- old IE, WSH */
    const anObject = require('../internals/an-object')
    const defineProperties = require('../internals/object-define-properties')
    const enumBugKeys = require('../internals/enum-bug-keys')
    const hiddenKeys = require('../internals/hidden-keys')
    const html = require('../internals/html')
    const documentCreateElement = require('../internals/document-create-element')
    const sharedKey = require('../internals/shared-key')

    const GT = '>'
    const LT = '<'
    const PROTOTYPE = 'prototype'
    const SCRIPT = 'script'
    const IE_PROTO = sharedKey('IE_PROTO')

    const EmptyConstructor = function () { /* empty */ }

    const scriptTag = function (content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT
    }

    // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
    const NullProtoObjectViaActiveX = function (activeXDocument) {
      activeXDocument.write(scriptTag(''))
      activeXDocument.close()
      const temp = activeXDocument.parentWindow.Object
      activeXDocument = null // avoid memory leak
      return temp
    }

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    const NullProtoObjectViaIFrame = function () {
      // Thrash, waste and sodomy: IE GC bug
      const iframe = documentCreateElement('iframe')
      const JS = 'java' + SCRIPT + ':'
      let iframeDocument
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
    let activeXDocument
    var NullProtoObject = function () {
      try {
        activeXDocument = new ActiveXObject('htmlfile')
      } catch (error) { /* ignore */ }
      NullProtoObject = typeof document !== 'undefined'
        ? document.domain && activeXDocument
          ? NullProtoObjectViaActiveX(activeXDocument) // old IE
          : NullProtoObjectViaIFrame()
        : NullProtoObjectViaActiveX(activeXDocument) // WSH
      let length = enumBugKeys.length
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]]
      return NullProtoObject()
    }

    hiddenKeys[IE_PROTO] = true

    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    module.exports = Object.create || function create (O, Properties) {
      let result
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O)
        result = new EmptyConstructor()
        EmptyConstructor[PROTOTYPE] = null
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O
      } else result = NullProtoObject()
      return Properties === undefined ? result : defineProperties(result, Properties)
    }
  }, { '../internals/an-object': 48, '../internals/document-create-element': 86, '../internals/enum-bug-keys': 99, '../internals/hidden-keys': 115, '../internals/html': 117, '../internals/object-define-properties': 158, '../internals/shared-key': 190 }],
  158: [function (require, module, exports) {
    const DESCRIPTORS = require('../internals/descriptors')
    const definePropertyModule = require('../internals/object-define-property')
    const anObject = require('../internals/an-object')
    const objectKeys = require('../internals/object-keys')

    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    // eslint-disable-next-line es/no-object-defineproperties -- safe
    module.exports = DESCRIPTORS
      ? Object.defineProperties
      : function defineProperties (O, Properties) {
        anObject(O)
        const keys = objectKeys(Properties)
        const length = keys.length
        let index = 0
        let key
        while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key])
        return O
      }
  }, { '../internals/an-object': 48, '../internals/descriptors': 85, '../internals/object-define-property': 159, '../internals/object-keys': 166 }],
  159: [function (require, module, exports) {
    const DESCRIPTORS = require('../internals/descriptors')
    const IE8_DOM_DEFINE = require('../internals/ie8-dom-define')
    const anObject = require('../internals/an-object')
    const toPropertyKey = require('../internals/to-property-key')

    // eslint-disable-next-line es/no-object-defineproperty -- safe
    const $defineProperty = Object.defineProperty

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    exports.f = DESCRIPTORS ? $defineProperty : function defineProperty (O, P, Attributes) {
      anObject(O)
      P = toPropertyKey(P)
      anObject(Attributes)
      if (IE8_DOM_DEFINE) {
        try {
          return $defineProperty(O, P, Attributes)
        } catch (error) { /* empty */ }
      }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported')
      if ('value' in Attributes) O[P] = Attributes.value
      return O
    }
  }, { '../internals/an-object': 48, '../internals/descriptors': 85, '../internals/ie8-dom-define': 118, '../internals/to-property-key': 213 }],
  160: [function (require, module, exports) {
    const DESCRIPTORS = require('../internals/descriptors')
    const propertyIsEnumerableModule = require('../internals/object-property-is-enumerable')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')
    const toIndexedObject = require('../internals/to-indexed-object')
    const toPropertyKey = require('../internals/to-property-key')
    const hasOwn = require('../internals/has-own-property')
    const IE8_DOM_DEFINE = require('../internals/ie8-dom-define')

    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor (O, P) {
      O = toIndexedObject(O)
      P = toPropertyKey(P)
      if (IE8_DOM_DEFINE) {
        try {
          return $getOwnPropertyDescriptor(O, P)
        } catch (error) { /* empty */ }
      }
      if (hasOwn(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P])
    }
  }, { '../internals/create-property-descriptor': 79, '../internals/descriptors': 85, '../internals/has-own-property': 114, '../internals/ie8-dom-define': 118, '../internals/object-property-is-enumerable': 167, '../internals/to-indexed-object': 206, '../internals/to-property-key': 213 }],
  161: [function (require, module, exports) {
    /* eslint-disable es/no-object-getownpropertynames -- safe */
    const toIndexedObject = require('../internals/to-indexed-object')
    const $getOwnPropertyNames = require('../internals/object-get-own-property-names').f

    const toString = {}.toString

    const windowNames = typeof window === 'object' && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : []

    const getWindowNames = function (it) {
      try {
        return $getOwnPropertyNames(it)
      } catch (error) {
        return windowNames.slice()
      }
    }

    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
    module.exports.f = function getOwnPropertyNames (it) {
      return windowNames && toString.call(it) == '[object Window]'
        ? getWindowNames(it)
        : $getOwnPropertyNames(toIndexedObject(it))
    }
  }, { '../internals/object-get-own-property-names': 162, '../internals/to-indexed-object': 206 }],
  162: [function (require, module, exports) {
    const internalObjectKeys = require('../internals/object-keys-internal')
    const enumBugKeys = require('../internals/enum-bug-keys')

    const hiddenKeys = enumBugKeys.concat('length', 'prototype')

    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    // eslint-disable-next-line es/no-object-getownpropertynames -- safe
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames (O) {
      return internalObjectKeys(O, hiddenKeys)
    }
  }, { '../internals/enum-bug-keys': 99, '../internals/object-keys-internal': 165 }],
  163: [function (require, module, exports) {
    // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
    exports.f = Object.getOwnPropertySymbols
  }, {}],
  164: [function (require, module, exports) {
    const hasOwn = require('../internals/has-own-property')
    const isCallable = require('../internals/is-callable')
    const toObject = require('../internals/to-object')
    const sharedKey = require('../internals/shared-key')
    const CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter')

    const IE_PROTO = sharedKey('IE_PROTO')
    const ObjectPrototype = Object.prototype

    // `Object.getPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.getprototypeof
    // eslint-disable-next-line es/no-object-getprototypeof -- safe
    module.exports = CORRECT_PROTOTYPE_GETTER
      ? Object.getPrototypeOf
      : function (O) {
        const object = toObject(O)
        if (hasOwn(object, IE_PROTO)) return object[IE_PROTO]
        const constructor = object.constructor
        if (isCallable(constructor) && object instanceof constructor) {
          return constructor.prototype
        } return object instanceof Object ? ObjectPrototype : null
      }
  }, { '../internals/correct-prototype-getter': 75, '../internals/has-own-property': 114, '../internals/is-callable': 128, '../internals/shared-key': 190, '../internals/to-object': 209 }],
  165: [function (require, module, exports) {
    const hasOwn = require('../internals/has-own-property')
    const toIndexedObject = require('../internals/to-indexed-object')
    const indexOf = require('../internals/array-includes').indexOf
    const hiddenKeys = require('../internals/hidden-keys')

    module.exports = function (object, names) {
      const O = toIndexedObject(object)
      let i = 0
      const result = []
      let key
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && result.push(key)
      // Don't enum bug & hidden keys
      while (names.length > i) {
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || result.push(key)
        }
      }
      return result
    }
  }, { '../internals/array-includes': 57, '../internals/has-own-property': 114, '../internals/hidden-keys': 115, '../internals/to-indexed-object': 206 }],
  166: [function (require, module, exports) {
    const internalObjectKeys = require('../internals/object-keys-internal')
    const enumBugKeys = require('../internals/enum-bug-keys')

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    // eslint-disable-next-line es/no-object-keys -- safe
    module.exports = Object.keys || function keys (O) {
      return internalObjectKeys(O, enumBugKeys)
    }
  }, { '../internals/enum-bug-keys': 99, '../internals/object-keys-internal': 165 }],
  167: [function (require, module, exports) {
    'use strict'
    const $propertyIsEnumerable = {}.propertyIsEnumerable
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

    // Nashorn ~ JDK8 bug
    const NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1)

    // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
    exports.f = NASHORN_BUG
      ? function propertyIsEnumerable (V) {
        const descriptor = getOwnPropertyDescriptor(this, V)
        return !!descriptor && descriptor.enumerable
      }
      : $propertyIsEnumerable
  }, {}],
  168: [function (require, module, exports) {
    'use strict'
    const IS_PURE = require('../internals/is-pure')
    const global = require('../internals/global')
    const fails = require('../internals/fails')
    const WEBKIT = require('../internals/engine-webkit-version')

    // Forced replacement object prototype accessors methods
    module.exports = IS_PURE || !fails(function () {
      // This feature detection crashes old WebKit
      // https://github.com/zloirock/core-js/issues/232
      if (WEBKIT && WEBKIT < 535) return
      const key = Math.random()
      // In FF throws only define methods
      // eslint-disable-next-line no-undef, no-useless-call -- required for testing
      __defineSetter__.call(null, key, function () { /* empty */ })
      delete global[key]
    })
  }, { '../internals/engine-webkit-version': 98, '../internals/fails': 101, '../internals/global': 113, '../internals/is-pure': 134 }],
  169: [function (require, module, exports) {
    /* eslint-disable no-proto -- safe */
    const anObject = require('../internals/an-object')
    const aPossiblePrototype = require('../internals/a-possible-prototype')

    // `Object.setPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.setprototypeof
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    // eslint-disable-next-line es/no-object-setprototypeof -- safe
    module.exports = Object.setPrototypeOf || ('__proto__' in {} ? (function () {
      let CORRECT_SETTER = false
      const test = {}
      let setter
      try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
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
  }, { '../internals/a-possible-prototype': 44, '../internals/an-object': 48 }],
  170: [function (require, module, exports) {
    const DESCRIPTORS = require('../internals/descriptors')
    const objectKeys = require('../internals/object-keys')
    const toIndexedObject = require('../internals/to-indexed-object')
    const propertyIsEnumerable = require('../internals/object-property-is-enumerable').f

    // `Object.{ entries, values }` methods implementation
    const createMethod = function (TO_ENTRIES) {
      return function (it) {
        const O = toIndexedObject(it)
        const keys = objectKeys(O)
        const length = keys.length
        let i = 0
        const result = []
        let key
        while (length > i) {
          key = keys[i++]
          if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
            result.push(TO_ENTRIES ? [key, O[key]] : O[key])
          }
        }
        return result
      }
    }

    module.exports = {
      // `Object.entries` method
      // https://tc39.es/ecma262/#sec-object.entries
      entries: createMethod(true),
      // `Object.values` method
      // https://tc39.es/ecma262/#sec-object.values
      values: createMethod(false)
    }
  }, { '../internals/descriptors': 85, '../internals/object-keys': 166, '../internals/object-property-is-enumerable': 167, '../internals/to-indexed-object': 206 }],
  171: [function (require, module, exports) {
    'use strict'
    const TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support')
    const classof = require('../internals/classof')

    // `Object.prototype.toString` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    module.exports = TO_STRING_TAG_SUPPORT
      ? {}.toString
      : function toString () {
        return '[object ' + classof(this) + ']'
      }
  }, { '../internals/classof': 69, '../internals/to-string-tag-support': 214 }],
  172: [function (require, module, exports) {
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')

    // `OrdinaryToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-ordinarytoprimitive
    module.exports = function (input, pref) {
      let fn, val
      if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val
      if (isCallable(fn = input.valueOf) && !isObject(val = fn.call(input))) return val
      if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val
      throw TypeError("Can't convert object to primitive value")
    }
  }, { '../internals/is-callable': 128, '../internals/is-object': 133 }],
  173: [function (require, module, exports) {
    const getBuiltIn = require('../internals/get-built-in')
    const getOwnPropertyNamesModule = require('../internals/object-get-own-property-names')
    const getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols')
    const anObject = require('../internals/an-object')

    // all object keys, includes non-enumerable and symbols
    module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys (it) {
      const keys = getOwnPropertyNamesModule.f(anObject(it))
      const getOwnPropertySymbols = getOwnPropertySymbolsModule.f
      return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys
    }
  }, { '../internals/an-object': 48, '../internals/get-built-in': 108, '../internals/object-get-own-property-names': 162, '../internals/object-get-own-property-symbols': 163 }],
  174: [function (require, module, exports) {
    const global = require('../internals/global')

    module.exports = global
  }, { '../internals/global': 113 }],
  175: [function (require, module, exports) {
    module.exports = function (exec) {
      try {
        return { error: false, value: exec() }
      } catch (error) {
        return { error: true, value: error }
      }
    }
  }, {}],
  176: [function (require, module, exports) {
    const anObject = require('../internals/an-object')
    const isObject = require('../internals/is-object')
    const newPromiseCapability = require('../internals/new-promise-capability')

    module.exports = function (C, x) {
      anObject(C)
      if (isObject(x) && x.constructor === C) return x
      const promiseCapability = newPromiseCapability.f(C)
      const resolve = promiseCapability.resolve
      resolve(x)
      return promiseCapability.promise
    }
  }, { '../internals/an-object': 48, '../internals/is-object': 133, '../internals/new-promise-capability': 151 }],
  177: [function (require, module, exports) {
    const redefine = require('../internals/redefine')

    module.exports = function (target, src, options) {
      for (const key in src) redefine(target, key, src[key], options)
      return target
    }
  }, { '../internals/redefine': 178 }],
  178: [function (require, module, exports) {
    const global = require('../internals/global')
    const isCallable = require('../internals/is-callable')
    const hasOwn = require('../internals/has-own-property')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const setGlobal = require('../internals/set-global')
    const inspectSource = require('../internals/inspect-source')
    const InternalStateModule = require('../internals/internal-state')
    const CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE

    const getInternalState = InternalStateModule.get
    const enforceInternalState = InternalStateModule.enforce
    const TEMPLATE = String(String).split('String');

    (module.exports = function (O, key, value, options) {
      const unsafe = options ? !!options.unsafe : false
      let simple = options ? !!options.enumerable : false
      const noTargetGet = options ? !!options.noTargetGet : false
      let name = options && options.name !== undefined ? options.name : key
      let state
      if (isCallable(value)) {
        if (String(name).slice(0, 7) === 'Symbol(') {
          name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'
        }
        if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
          createNonEnumerableProperty(value, 'name', name)
        }
        state = enforceInternalState(value)
        if (!state.source) {
          state.source = TEMPLATE.join(typeof name === 'string' ? name : '')
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
      return isCallable(this) && getInternalState(this).source || inspectSource(this)
    })
  }, { '../internals/create-non-enumerable-property': 78, '../internals/function-name': 107, '../internals/global': 113, '../internals/has-own-property': 114, '../internals/inspect-source': 122, '../internals/internal-state': 125, '../internals/is-callable': 128, '../internals/set-global': 187 }],
  179: [function (require, module, exports) {
    const anObject = require('../internals/an-object')
    const isCallable = require('../internals/is-callable')
    const classof = require('../internals/classof-raw')
    const regexpExec = require('../internals/regexp-exec')

    // `RegExpExec` abstract operation
    // https://tc39.es/ecma262/#sec-regexpexec
    module.exports = function (R, S) {
      const exec = R.exec
      if (isCallable(exec)) {
        const result = exec.call(R, S)
        if (result !== null) anObject(result)
        return result
      }
      if (classof(R) === 'RegExp') return regexpExec.call(R, S)
      throw TypeError('RegExp#exec called on incompatible receiver')
    }
  }, { '../internals/an-object': 48, '../internals/classof-raw': 68, '../internals/is-callable': 128, '../internals/regexp-exec': 180 }],
  180: [function (require, module, exports) {
    'use strict'
    /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
    /* eslint-disable regexp/no-useless-quantifier -- testing */
    const toString = require('../internals/to-string')
    const regexpFlags = require('../internals/regexp-flags')
    const stickyHelpers = require('../internals/regexp-sticky-helpers')
    const shared = require('../internals/shared')
    const create = require('../internals/object-create')
    const getInternalState = require('../internals/internal-state').get
    const UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all')
    const UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg')

    const nativeExec = RegExp.prototype.exec
    const nativeReplace = shared('native-string-replace', String.prototype.replace)

    let patchedExec = nativeExec

    const UPDATES_LAST_INDEX_WRONG = (function () {
      const re1 = /a/
      const re2 = /b*/g
      nativeExec.call(re1, 'a')
      nativeExec.call(re2, 'a')
      return re1.lastIndex !== 0 || re2.lastIndex !== 0
    })()

    const UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET

    // nonparticipating capturing group, copied from es5-shim's String#split patch.
    const NPCG_INCLUDED = /()??/.exec('')[1] !== undefined

    const PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG

    if (PATCH) {
      // eslint-disable-next-line max-statements -- TODO
      patchedExec = function exec (string) {
        const re = this
        const state = getInternalState(re)
        const str = toString(string)
        const raw = state.raw
        let result, reCopy, lastIndex, match, i, object, group

        if (raw) {
          raw.lastIndex = re.lastIndex
          result = patchedExec.call(raw, str)
          re.lastIndex = raw.lastIndex
          return result
        }

        const groups = state.groups
        const sticky = UNSUPPORTED_Y && re.sticky
        let flags = regexpFlags.call(re)
        let source = re.source
        let charsAdded = 0
        let strCopy = str

        if (sticky) {
          flags = flags.replace('y', '')
          if (flags.indexOf('g') === -1) {
            flags += 'g'
          }

          strCopy = str.slice(re.lastIndex)
          // Support anchored sticky behavior.
          if (re.lastIndex > 0 && (!re.multiline || re.multiline && str.charAt(re.lastIndex - 1) !== '\n')) {
            source = '(?: ' + source + ')'
            strCopy = ' ' + strCopy
            charsAdded++
          }
          // ^(? + rx + ) is needed, in combination with some str slicing, to
          // simulate the 'y' flag.
          reCopy = new RegExp('^(?:' + source + ')', flags)
        }

        if (NPCG_INCLUDED) {
          reCopy = new RegExp('^' + source + '$(?!\\s)', flags)
        }
        if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex

        match = nativeExec.call(sticky ? reCopy : re, strCopy)

        if (sticky) {
          if (match) {
            match.input = match.input.slice(charsAdded)
            match[0] = match[0].slice(charsAdded)
            match.index = re.lastIndex
            re.lastIndex += match[0].length
          } else re.lastIndex = 0
        } else if (UPDATES_LAST_INDEX_WRONG && match) {
          re.lastIndex = re.global ? match.index + match[0].length : lastIndex
        }
        if (NPCG_INCLUDED && match && match.length > 1) {
          // Fix browsers whose `exec` methods don't consistently return `undefined`
          // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
          nativeReplace.call(match[0], reCopy, function () {
            for (i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undefined) match[i] = undefined
            }
          })
        }

        if (match && groups) {
          match.groups = object = create(null)
          for (i = 0; i < groups.length; i++) {
            group = groups[i]
            object[group[0]] = match[group[1]]
          }
        }

        return match
      }
    }

    module.exports = patchedExec
  }, { '../internals/internal-state': 125, '../internals/object-create': 157, '../internals/regexp-flags': 181, '../internals/regexp-sticky-helpers': 182, '../internals/regexp-unsupported-dot-all': 183, '../internals/regexp-unsupported-ncg': 184, '../internals/shared': 192, '../internals/to-string': 215 }],
  181: [function (require, module, exports) {
    'use strict'
    const anObject = require('../internals/an-object')

    // `RegExp.prototype.flags` getter implementation
    // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
    module.exports = function () {
      const that = anObject(this)
      let result = ''
      if (that.global) result += 'g'
      if (that.ignoreCase) result += 'i'
      if (that.multiline) result += 'm'
      if (that.dotAll) result += 's'
      if (that.unicode) result += 'u'
      if (that.sticky) result += 'y'
      return result
    }
  }, { '../internals/an-object': 48 }],
  182: [function (require, module, exports) {
    const fails = require('../internals/fails')
    const global = require('../internals/global')

    // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    const $RegExp = global.RegExp

    exports.UNSUPPORTED_Y = fails(function () {
      const re = $RegExp('a', 'y')
      re.lastIndex = 2
      return re.exec('abcd') != null
    })

    exports.BROKEN_CARET = fails(function () {
      // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
      const re = $RegExp('^r', 'gy')
      re.lastIndex = 2
      return re.exec('str') != null
    })
  }, { '../internals/fails': 101, '../internals/global': 113 }],
  183: [function (require, module, exports) {
    const fails = require('../internals/fails')
    const global = require('../internals/global')

    // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
    const $RegExp = global.RegExp

    module.exports = fails(function () {
      const re = $RegExp('.', 's')
      return !(re.dotAll && re.exec('\n') && re.flags === 's')
    })
  }, { '../internals/fails': 101, '../internals/global': 113 }],
  184: [function (require, module, exports) {
    const fails = require('../internals/fails')
    const global = require('../internals/global')

    // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
    const $RegExp = global.RegExp

    module.exports = fails(function () {
      const re = $RegExp('(?<a>b)', 'g')
      return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc'
    })
  }, { '../internals/fails': 101, '../internals/global': 113 }],
  185: [function (require, module, exports) {
    // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on " + it)
      return it
    }
  }, {}],
  186: [function (require, module, exports) {
    // `SameValue` abstract operation
    // https://tc39.es/ecma262/#sec-samevalue
    // eslint-disable-next-line es/no-object-is -- safe
    module.exports = Object.is || function is (x, y) {
      // eslint-disable-next-line no-self-compare -- NaN check
      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y
    }
  }, {}],
  187: [function (require, module, exports) {
    const global = require('../internals/global')

    module.exports = function (key, value) {
      try {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty(global, key, { value: value, configurable: true, writable: true })
      } catch (error) {
        global[key] = value
      } return value
    }
  }, { '../internals/global': 113 }],
  188: [function (require, module, exports) {
    'use strict'
    const getBuiltIn = require('../internals/get-built-in')
    const definePropertyModule = require('../internals/object-define-property')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const DESCRIPTORS = require('../internals/descriptors')

    const SPECIES = wellKnownSymbol('species')

    module.exports = function (CONSTRUCTOR_NAME) {
      const Constructor = getBuiltIn(CONSTRUCTOR_NAME)
      const defineProperty = definePropertyModule.f

      if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
        defineProperty(Constructor, SPECIES, {
          configurable: true,
          get: function () { return this }
        })
      }
    }
  }, { '../internals/descriptors': 85, '../internals/get-built-in': 108, '../internals/object-define-property': 159, '../internals/well-known-symbol': 225 }],
  189: [function (require, module, exports) {
    const defineProperty = require('../internals/object-define-property').f
    const hasOwn = require('../internals/has-own-property')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const TO_STRING_TAG = wellKnownSymbol('toStringTag')

    module.exports = function (it, TAG, STATIC) {
      if (it && !hasOwn(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
        defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG })
      }
    }
  }, { '../internals/has-own-property': 114, '../internals/object-define-property': 159, '../internals/well-known-symbol': 225 }],
  190: [function (require, module, exports) {
    const shared = require('../internals/shared')
    const uid = require('../internals/uid')

    const keys = shared('keys')

    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key))
    }
  }, { '../internals/shared': 192, '../internals/uid': 222 }],
  191: [function (require, module, exports) {
    const global = require('../internals/global')
    const setGlobal = require('../internals/set-global')

    const SHARED = '__core-js_shared__'
    const store = global[SHARED] || setGlobal(SHARED, {})

    module.exports = store
  }, { '../internals/global': 113, '../internals/set-global': 187 }],
  192: [function (require, module, exports) {
    const IS_PURE = require('../internals/is-pure')
    const store = require('../internals/shared-store');

    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {})
    })('versions', []).push({
      version: '3.18.3',
      mode: IS_PURE ? 'pure' : 'global',
      copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
    })
  }, { '../internals/is-pure': 134, '../internals/shared-store': 191 }],
  193: [function (require, module, exports) {
    const anObject = require('../internals/an-object')
    const aConstructor = require('../internals/a-constructor')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const SPECIES = wellKnownSymbol('species')

    // `SpeciesConstructor` abstract operation
    // https://tc39.es/ecma262/#sec-speciesconstructor
    module.exports = function (O, defaultConstructor) {
      const C = anObject(O).constructor
      let S
      return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S)
    }
  }, { '../internals/a-constructor': 43, '../internals/an-object': 48, '../internals/well-known-symbol': 225 }],
  194: [function (require, module, exports) {
    const fails = require('../internals/fails')

    // check the existence of a method, lowercase
    // of a tag and escaping quotes in arguments
    module.exports = function (METHOD_NAME) {
      return fails(function () {
        const test = ''[METHOD_NAME]('"')
        return test !== test.toLowerCase() || test.split('"').length > 3
      })
    }
  }, { '../internals/fails': 101 }],
  195: [function (require, module, exports) {
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    const toString = require('../internals/to-string')
    const requireObjectCoercible = require('../internals/require-object-coercible')

    const createMethod = function (CONVERT_TO_STRING) {
      return function ($this, pos) {
        const S = toString(requireObjectCoercible($this))
        const position = toIntegerOrInfinity(pos)
        const size = S.length
        let first, second
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
  }, { '../internals/require-object-coercible': 185, '../internals/to-integer-or-infinity': 207, '../internals/to-string': 215 }],
  196: [function (require, module, exports) {
    // https://github.com/zloirock/core-js/issues/280
    const userAgent = require('../internals/engine-user-agent')

    module.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent)
  }, { '../internals/engine-user-agent': 96 }],
  197: [function (require, module, exports) {
    // https://github.com/tc39/proposal-string-pad-start-end
    const toLength = require('../internals/to-length')
    const toString = require('../internals/to-string')
    const repeat = require('../internals/string-repeat')
    const requireObjectCoercible = require('../internals/require-object-coercible')

    const ceil = Math.ceil

    // `String.prototype.{ padStart, padEnd }` methods implementation
    const createMethod = function (IS_END) {
      return function ($this, maxLength, fillString) {
        const S = toString(requireObjectCoercible($this))
        const intMaxLength = toLength(maxLength)
        const stringLength = S.length
        const fillStr = fillString === undefined ? ' ' : toString(fillString)
        let fillLen, stringFiller
        if (intMaxLength <= stringLength || fillStr == '') return S
        fillLen = intMaxLength - stringLength
        stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length))
        if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen)
        return IS_END ? S + stringFiller : stringFiller + S
      }
    }

    module.exports = {
      // `String.prototype.padStart` method
      // https://tc39.es/ecma262/#sec-string.prototype.padstart
      start: createMethod(false),
      // `String.prototype.padEnd` method
      // https://tc39.es/ecma262/#sec-string.prototype.padend
      end: createMethod(true)
    }
  }, { '../internals/require-object-coercible': 185, '../internals/string-repeat': 199, '../internals/to-length': 208, '../internals/to-string': 215 }],
  198: [function (require, module, exports) {
    'use strict'
    // based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
    const maxInt = 2147483647 // aka. 0x7FFFFFFF or 2^31-1
    const base = 36
    const tMin = 1
    const tMax = 26
    const skew = 38
    const damp = 700
    const initialBias = 72
    const initialN = 128 // 0x80
    const delimiter = '-' // '\x2D'
    const regexNonASCII = /[^\0-\u007E]/ // non-ASCII chars
    const regexSeparators = /[.\u3002\uFF0E\uFF61]/g // RFC 3490 separators
    const OVERFLOW_ERROR = 'Overflow: input needs wider integers to process'
    const baseMinusTMin = base - tMin
    const floor = Math.floor
    const stringFromCharCode = String.fromCharCode

    /**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
    const ucs2decode = function (string) {
      const output = []
      let counter = 0
      const length = string.length
      while (counter < length) {
        const value = string.charCodeAt(counter++)
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
          // It's a high surrogate, and there is a next character.
          const extra = string.charCodeAt(counter++)
          if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
            output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000)
          } else {
            // It's an unmatched surrogate; only append this code unit, in case the
            // next code unit is the high surrogate of a surrogate pair.
            output.push(value)
            counter--
          }
        } else {
          output.push(value)
        }
      }
      return output
    }

    /**
 * Converts a digit/integer into a basic code point.
 */
    const digitToBasic = function (digit) {
      //  0..25 map to ASCII a..z or A..Z
      // 26..35 map to ASCII 0..9
      return digit + 22 + 75 * (digit < 26)
    }

    /**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
    const adapt = function (delta, numPoints, firstTime) {
      let k = 0
      delta = firstTime ? floor(delta / damp) : delta >> 1
      delta += floor(delta / numPoints)
      for (; delta > baseMinusTMin * tMax >> 1; k += base) {
        delta = floor(delta / baseMinusTMin)
      }
      return floor(k + (baseMinusTMin + 1) * delta / (delta + skew))
    }

    /**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
    // eslint-disable-next-line max-statements -- TODO
    const encode = function (input) {
      const output = []

      // Convert the input in UCS-2 to an array of Unicode code points.
      input = ucs2decode(input)

      // Cache the length.
      const inputLength = input.length

      // Initialize the state.
      let n = initialN
      let delta = 0
      let bias = initialBias
      let i, currentValue

      // Handle the basic code points.
      for (i = 0; i < input.length; i++) {
        currentValue = input[i]
        if (currentValue < 0x80) {
          output.push(stringFromCharCode(currentValue))
        }
      }

      const basicLength = output.length // number of basic code points.
      let handledCPCount = basicLength // number of code points that have been handled;

      // Finish the basic string with a delimiter unless it's empty.
      if (basicLength) {
        output.push(delimiter)
      }

      // Main encoding loop:
      while (handledCPCount < inputLength) {
        // All non-basic code points < n have been handled already. Find the next larger one:
        let m = maxInt
        for (i = 0; i < input.length; i++) {
          currentValue = input[i]
          if (currentValue >= n && currentValue < m) {
            m = currentValue
          }
        }

        // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
        const handledCPCountPlusOne = handledCPCount + 1
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
          throw RangeError(OVERFLOW_ERROR)
        }

        delta += (m - n) * handledCPCountPlusOne
        n = m

        for (i = 0; i < input.length; i++) {
          currentValue = input[i]
          if (currentValue < n && ++delta > maxInt) {
            throw RangeError(OVERFLOW_ERROR)
          }
          if (currentValue == n) {
            // Represent delta as a generalized variable-length integer.
            let q = delta
            for (let k = base; /* no condition */; k += base) {
              const t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias)
              if (q < t) break
              const qMinusT = q - t
              const baseMinusT = base - t
              output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)))
              q = floor(qMinusT / baseMinusT)
            }

            output.push(stringFromCharCode(digitToBasic(q)))
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength)
            delta = 0
            ++handledCPCount
          }
        }

        ++delta
        ++n
      }
      return output.join('')
    }

    module.exports = function (input) {
      const encoded = []
      const labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.')
      let i, label
      for (i = 0; i < labels.length; i++) {
        label = labels[i]
        encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label)
      }
      return encoded.join('.')
    }
  }, {}],
  199: [function (require, module, exports) {
    'use strict'
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    const toString = require('../internals/to-string')
    const requireObjectCoercible = require('../internals/require-object-coercible')

    // `String.prototype.repeat` method implementation
    // https://tc39.es/ecma262/#sec-string.prototype.repeat
    module.exports = function repeat (count) {
      let str = toString(requireObjectCoercible(this))
      let result = ''
      let n = toIntegerOrInfinity(count)
      if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions')
      for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str
      return result
    }
  }, { '../internals/require-object-coercible': 185, '../internals/to-integer-or-infinity': 207, '../internals/to-string': 215 }],
  200: [function (require, module, exports) {
    const PROPER_FUNCTION_NAME = require('../internals/function-name').PROPER
    const fails = require('../internals/fails')
    const whitespaces = require('../internals/whitespaces')

    const non = '\u200B\u0085\u180E'

    // check that a method works with the correct list
    // of whitespaces and has a correct name
    module.exports = function (METHOD_NAME) {
      return fails(function () {
        return !!whitespaces[METHOD_NAME]() ||
      non[METHOD_NAME]() !== non ||
      (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME)
      })
    }
  }, { '../internals/fails': 101, '../internals/function-name': 107, '../internals/whitespaces': 226 }],
  201: [function (require, module, exports) {
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const toString = require('../internals/to-string')
    const whitespaces = require('../internals/whitespaces')

    const whitespace = '[' + whitespaces + ']'
    const ltrim = RegExp('^' + whitespace + whitespace + '*')
    const rtrim = RegExp(whitespace + whitespace + '*$')

    // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
    const createMethod = function (TYPE) {
      return function ($this) {
        let string = toString(requireObjectCoercible($this))
        if (TYPE & 1) string = string.replace(ltrim, '')
        if (TYPE & 2) string = string.replace(rtrim, '')
        return string
      }
    }

    module.exports = {
      // `String.prototype.{ trimLeft, trimStart }` methods
      // https://tc39.es/ecma262/#sec-string.prototype.trimstart
      start: createMethod(1),
      // `String.prototype.{ trimRight, trimEnd }` methods
      // https://tc39.es/ecma262/#sec-string.prototype.trimend
      end: createMethod(2),
      // `String.prototype.trim` method
      // https://tc39.es/ecma262/#sec-string.prototype.trim
      trim: createMethod(3)
    }
  }, { '../internals/require-object-coercible': 185, '../internals/to-string': 215, '../internals/whitespaces': 226 }],
  202: [function (require, module, exports) {
    const global = require('../internals/global')
    const isCallable = require('../internals/is-callable')
    const fails = require('../internals/fails')
    const bind = require('../internals/function-bind-context')
    const html = require('../internals/html')
    const createElement = require('../internals/document-create-element')
    const IS_IOS = require('../internals/engine-is-ios')
    const IS_NODE = require('../internals/engine-is-node')

    let set = global.setImmediate
    let clear = global.clearImmediate
    const process = global.process
    const MessageChannel = global.MessageChannel
    const Dispatch = global.Dispatch
    let counter = 0
    const queue = {}
    const ONREADYSTATECHANGE = 'onreadystatechange'
    let location, defer, channel, port

    try {
      // Deno throws a ReferenceError on `location` access without `--location` flag
      location = global.location
    } catch (error) { /* empty */ }

    const run = function (id) {
      // eslint-disable-next-line no-prototype-builtins -- safe
      if (queue.hasOwnProperty(id)) {
        const fn = queue[id]
        delete queue[id]
        fn()
      }
    }

    const runner = function (id) {
      return function () {
        run(id)
      }
    }

    const listener = function (event) {
      run(event.data)
    }

    const post = function (id) {
      // old engines have not location.origin
      global.postMessage(String(id), location.protocol + '//' + location.host)
    }

    // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    if (!set || !clear) {
      set = function setImmediate (fn) {
        const args = []
        const argumentsLength = arguments.length
        let i = 1
        while (argumentsLength > i) args.push(arguments[i++])
        queue[++counter] = function () {
          // eslint-disable-next-line no-new-func -- spec requirement
          (isCallable(fn) ? fn : Function(fn)).apply(undefined, args)
        }
        defer(counter)
        return counter
      }
      clear = function clearImmediate (id) {
        delete queue[id]
      }
      // Node.js 0.8-
      if (IS_NODE) {
        defer = function (id) {
          process.nextTick(runner(id))
        }
      // Sphere (JS game engine) Dispatch API
      } else if (Dispatch && Dispatch.now) {
        defer = function (id) {
          Dispatch.now(runner(id))
        }
      // Browsers with MessageChannel, includes WebWorkers
      // except iOS - https://github.com/zloirock/core-js/issues/624
      } else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel()
        port = channel.port2
        channel.port1.onmessage = listener
        defer = bind(port.postMessage, port, 1)
        // Browsers with postMessage, skip WebWorkers
        // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
      } else if (
        global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
      ) {
        defer = post
        global.addEventListener('message', listener, false)
        // IE8-
      } else if (ONREADYSTATECHANGE in createElement('script')) {
        defer = function (id) {
          html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
            html.removeChild(this)
            run(id)
          }
        }
      // Rest old browsers
      } else {
        defer = function (id) {
          setTimeout(runner(id), 0)
        }
      }
    }

    module.exports = {
      set: set,
      clear: clear
    }
  }, { '../internals/document-create-element': 86, '../internals/engine-is-ios': 93, '../internals/engine-is-node': 94, '../internals/fails': 101, '../internals/function-bind-context': 105, '../internals/global': 113, '../internals/html': 117, '../internals/is-callable': 128 }],
  203: [function (require, module, exports) {
    const valueOf = 1.0.valueOf

    // `thisNumberValue` abstract operation
    // https://tc39.es/ecma262/#sec-thisnumbervalue
    module.exports = function (value) {
      return valueOf.call(value)
    }
  }, {}],
  204: [function (require, module, exports) {
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')

    const max = Math.max
    const min = Math.min

    // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
    module.exports = function (index, length) {
      const integer = toIntegerOrInfinity(index)
      return integer < 0 ? max(integer + length, 0) : min(integer, length)
    }
  }, { '../internals/to-integer-or-infinity': 207 }],
  205: [function (require, module, exports) {
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    const toLength = require('../internals/to-length')

    // `ToIndex` abstract operation
    // https://tc39.es/ecma262/#sec-toindex
    module.exports = function (it) {
      if (it === undefined) return 0
      const number = toIntegerOrInfinity(it)
      const length = toLength(number)
      if (number !== length) throw RangeError('Wrong length or index')
      return length
    }
  }, { '../internals/to-integer-or-infinity': 207, '../internals/to-length': 208 }],
  206: [function (require, module, exports) {
    // toObject with fallback for non-array-like ES3 strings
    const IndexedObject = require('../internals/indexed-object')
    const requireObjectCoercible = require('../internals/require-object-coercible')

    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it))
    }
  }, { '../internals/indexed-object': 120, '../internals/require-object-coercible': 185 }],
  207: [function (require, module, exports) {
    const ceil = Math.ceil
    const floor = Math.floor

    // `ToIntegerOrInfinity` abstract operation
    // https://tc39.es/ecma262/#sec-tointegerorinfinity
    module.exports = function (argument) {
      const number = +argument
      // eslint-disable-next-line no-self-compare -- safe
      return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number)
    }
  }, {}],
  208: [function (require, module, exports) {
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')

    const min = Math.min

    // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength
    module.exports = function (argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0 // 2 ** 53 - 1 == 9007199254740991
    }
  }, { '../internals/to-integer-or-infinity': 207 }],
  209: [function (require, module, exports) {
    const requireObjectCoercible = require('../internals/require-object-coercible')

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    module.exports = function (argument) {
      return Object(requireObjectCoercible(argument))
    }
  }, { '../internals/require-object-coercible': 185 }],
  210: [function (require, module, exports) {
    const toPositiveInteger = require('../internals/to-positive-integer')

    module.exports = function (it, BYTES) {
      const offset = toPositiveInteger(it)
      if (offset % BYTES) throw RangeError('Wrong offset')
      return offset
    }
  }, { '../internals/to-positive-integer': 211 }],
  211: [function (require, module, exports) {
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')

    module.exports = function (it) {
      const result = toIntegerOrInfinity(it)
      if (result < 0) throw RangeError("The argument can't be less than 0")
      return result
    }
  }, { '../internals/to-integer-or-infinity': 207 }],
  212: [function (require, module, exports) {
    const isObject = require('../internals/is-object')
    const isSymbol = require('../internals/is-symbol')
    const getMethod = require('../internals/get-method')
    const ordinaryToPrimitive = require('../internals/ordinary-to-primitive')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const TO_PRIMITIVE = wellKnownSymbol('toPrimitive')

    // `ToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-toprimitive
    module.exports = function (input, pref) {
      if (!isObject(input) || isSymbol(input)) return input
      const exoticToPrim = getMethod(input, TO_PRIMITIVE)
      let result
      if (exoticToPrim) {
        if (pref === undefined) pref = 'default'
        result = exoticToPrim.call(input, pref)
        if (!isObject(result) || isSymbol(result)) return result
        throw TypeError("Can't convert object to primitive value")
      }
      if (pref === undefined) pref = 'number'
      return ordinaryToPrimitive(input, pref)
    }
  }, { '../internals/get-method': 111, '../internals/is-object': 133, '../internals/is-symbol': 136, '../internals/ordinary-to-primitive': 172, '../internals/well-known-symbol': 225 }],
  213: [function (require, module, exports) {
    const toPrimitive = require('../internals/to-primitive')
    const isSymbol = require('../internals/is-symbol')

    // `ToPropertyKey` abstract operation
    // https://tc39.es/ecma262/#sec-topropertykey
    module.exports = function (argument) {
      const key = toPrimitive(argument, 'string')
      return isSymbol(key) ? key : String(key)
    }
  }, { '../internals/is-symbol': 136, '../internals/to-primitive': 212 }],
  214: [function (require, module, exports) {
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const TO_STRING_TAG = wellKnownSymbol('toStringTag')
    const test = {}

    test[TO_STRING_TAG] = 'z'

    module.exports = String(test) === '[object z]'
  }, { '../internals/well-known-symbol': 225 }],
  215: [function (require, module, exports) {
    const classof = require('../internals/classof')

    module.exports = function (argument) {
      if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string')
      return String(argument)
    }
  }, { '../internals/classof': 69 }],
  216: [function (require, module, exports) {
    module.exports = function (argument) {
      try {
        return String(argument)
      } catch (error) {
        return 'Object'
      }
    }
  }, {}],
  217: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const global = require('../internals/global')
    const DESCRIPTORS = require('../internals/descriptors')
    const TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = require('../internals/typed-array-constructors-require-wrappers')
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const ArrayBufferModule = require('../internals/array-buffer')
    const anInstance = require('../internals/an-instance')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const isIntegralNumber = require('../internals/is-integral-number')
    const toLength = require('../internals/to-length')
    const toIndex = require('../internals/to-index')
    const toOffset = require('../internals/to-offset')
    const toPropertyKey = require('../internals/to-property-key')
    const hasOwn = require('../internals/has-own-property')
    const classof = require('../internals/classof')
    const isObject = require('../internals/is-object')
    const isSymbol = require('../internals/is-symbol')
    const create = require('../internals/object-create')
    const setPrototypeOf = require('../internals/object-set-prototype-of')
    const getOwnPropertyNames = require('../internals/object-get-own-property-names').f
    const typedArrayFrom = require('../internals/typed-array-from')
    const forEach = require('../internals/array-iteration').forEach
    const setSpecies = require('../internals/set-species')
    const definePropertyModule = require('../internals/object-define-property')
    const getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')
    const InternalStateModule = require('../internals/internal-state')
    const inheritIfRequired = require('../internals/inherit-if-required')

    const getInternalState = InternalStateModule.get
    const setInternalState = InternalStateModule.set
    const nativeDefineProperty = definePropertyModule.f
    const nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
    const round = Math.round
    const RangeError = global.RangeError
    const ArrayBuffer = ArrayBufferModule.ArrayBuffer
    const DataView = ArrayBufferModule.DataView
    const NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS
    const TYPED_ARRAY_CONSTRUCTOR = ArrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR
    const TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG
    const TypedArray = ArrayBufferViewCore.TypedArray
    const TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype
    const aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor
    const isTypedArray = ArrayBufferViewCore.isTypedArray
    const BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT'
    const WRONG_LENGTH = 'Wrong length'

    const fromList = function (C, list) {
      let index = 0
      const length = list.length
      const result = new (aTypedArrayConstructor(C))(length)
      while (length > index) result[index] = list[index++]
      return result
    }

    const addGetter = function (it, key) {
      nativeDefineProperty(it, key, {
        get: function () {
          return getInternalState(this)[key]
        }
      })
    }

    const isArrayBuffer = function (it) {
      let klass
      return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer'
    }

    const isTypedArrayIndex = function (target, key) {
      return isTypedArray(target) &&
    !isSymbol(key) &&
    key in target &&
    isIntegralNumber(+key) &&
    key >= 0
    }

    const wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor (target, key) {
      key = toPropertyKey(key)
      return isTypedArrayIndex(target, key)
        ? createPropertyDescriptor(2, target[key])
        : nativeGetOwnPropertyDescriptor(target, key)
    }

    const wrappedDefineProperty = function defineProperty (target, key, descriptor) {
      key = toPropertyKey(key)
      if (isTypedArrayIndex(target, key) &&
    isObject(descriptor) &&
    hasOwn(descriptor, 'value') &&
    !hasOwn(descriptor, 'get') &&
    !hasOwn(descriptor, 'set') &&
    // TODO: add validation descriptor w/o calling accessors
    !descriptor.configurable &&
    (!hasOwn(descriptor, 'writable') || descriptor.writable) &&
    (!hasOwn(descriptor, 'enumerable') || descriptor.enumerable)
      ) {
        target[key] = descriptor.value
        return target
      } return nativeDefineProperty(target, key, descriptor)
    }

    if (DESCRIPTORS) {
      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor
        definePropertyModule.f = wrappedDefineProperty
        addGetter(TypedArrayPrototype, 'buffer')
        addGetter(TypedArrayPrototype, 'byteOffset')
        addGetter(TypedArrayPrototype, 'byteLength')
        addGetter(TypedArrayPrototype, 'length')
      }

      $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
        getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
        defineProperty: wrappedDefineProperty
      })

      module.exports = function (TYPE, wrapper, CLAMPED) {
        const BYTES = TYPE.match(/\d+$/)[0] / 8
        const CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array'
        const GETTER = 'get' + TYPE
        const SETTER = 'set' + TYPE
        const NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME]
        let TypedArrayConstructor = NativeTypedArrayConstructor
        let TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype
        const exported = {}

        const getter = function (that, index) {
          const data = getInternalState(that)
          return data.view[GETTER](index * BYTES + data.byteOffset, true)
        }

        const setter = function (that, index, value) {
          const data = getInternalState(that)
          if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF
          data.view[SETTER](index * BYTES + data.byteOffset, value, true)
        }

        const addElement = function (that, index) {
          nativeDefineProperty(that, index, {
            get: function () {
              return getter(this, index)
            },
            set: function (value) {
              return setter(this, index, value)
            },
            enumerable: true
          })
        }

        if (!NATIVE_ARRAY_BUFFER_VIEWS) {
          TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
            anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME)
            let index = 0
            let byteOffset = 0
            let buffer, byteLength, length
            if (!isObject(data)) {
              length = toIndex(data)
              byteLength = length * BYTES
              buffer = new ArrayBuffer(byteLength)
            } else if (isArrayBuffer(data)) {
              buffer = data
              byteOffset = toOffset(offset, BYTES)
              const $len = data.byteLength
              if ($length === undefined) {
                if ($len % BYTES) throw RangeError(WRONG_LENGTH)
                byteLength = $len - byteOffset
                if (byteLength < 0) throw RangeError(WRONG_LENGTH)
              } else {
                byteLength = toLength($length) * BYTES
                if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH)
              }
              length = byteLength / BYTES
            } else if (isTypedArray(data)) {
              return fromList(TypedArrayConstructor, data)
            } else {
              return typedArrayFrom.call(TypedArrayConstructor, data)
            }
            setInternalState(that, {
              buffer: buffer,
              byteOffset: byteOffset,
              byteLength: byteLength,
              length: length,
              view: new DataView(buffer)
            })
            while (index < length) addElement(that, index++)
          })

          if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray)
          TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype)
        } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
          TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
            anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME)
            return inheritIfRequired((function () {
              if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data))
              if (isArrayBuffer(data)) {
                return $length !== undefined
                  ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
                  : typedArrayOffset !== undefined
                    ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
                    : new NativeTypedArrayConstructor(data)
              }
              if (isTypedArray(data)) return fromList(TypedArrayConstructor, data)
              return typedArrayFrom.call(TypedArrayConstructor, data)
            }()), dummy, TypedArrayConstructor)
          })

          if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray)
          forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
            if (!(key in TypedArrayConstructor)) {
              createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key])
            }
          })
          TypedArrayConstructor.prototype = TypedArrayConstructorPrototype
        }

        if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
          createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor)
        }

        createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_CONSTRUCTOR, TypedArrayConstructor)

        if (TYPED_ARRAY_TAG) {
          createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME)
        }

        exported[CONSTRUCTOR_NAME] = TypedArrayConstructor

        $({
          global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
        }, exported)

        if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES)
        }

        if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
          createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES)
        }

        setSpecies(CONSTRUCTOR_NAME)
      }
    } else module.exports = function () { /* empty */ }
  }, { '../internals/an-instance': 47, '../internals/array-buffer': 51, '../internals/array-buffer-view-core': 50, '../internals/array-iteration': 58, '../internals/classof': 69, '../internals/create-non-enumerable-property': 78, '../internals/create-property-descriptor': 79, '../internals/descriptors': 85, '../internals/export': 100, '../internals/global': 113, '../internals/has-own-property': 114, '../internals/inherit-if-required': 121, '../internals/internal-state': 125, '../internals/is-integral-number': 132, '../internals/is-object': 133, '../internals/is-symbol': 136, '../internals/object-create': 157, '../internals/object-define-property': 159, '../internals/object-get-own-property-descriptor': 160, '../internals/object-get-own-property-names': 162, '../internals/object-set-prototype-of': 169, '../internals/set-species': 188, '../internals/to-index': 205, '../internals/to-length': 208, '../internals/to-offset': 210, '../internals/to-property-key': 213, '../internals/typed-array-constructors-require-wrappers': 218, '../internals/typed-array-from': 220 }],
  218: [function (require, module, exports) {
    /* eslint-disable no-new -- required for testing */
    const global = require('../internals/global')
    const fails = require('../internals/fails')
    const checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration')
    const NATIVE_ARRAY_BUFFER_VIEWS = require('../internals/array-buffer-view-core').NATIVE_ARRAY_BUFFER_VIEWS

    const ArrayBuffer = global.ArrayBuffer
    const Int8Array = global.Int8Array

    module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
      Int8Array(1)
    }) || !fails(function () {
      new Int8Array(-1)
    }) || !checkCorrectnessOfIteration(function (iterable) {
      new Int8Array()
      new Int8Array(null)
      new Int8Array(1.5)
      new Int8Array(iterable)
    }, true) || fails(function () {
      // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
      return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/check-correctness-of-iteration': 67, '../internals/fails': 101, '../internals/global': 113 }],
  219: [function (require, module, exports) {
    const arrayFromConstructorAndList = require('../internals/array-from-constructor-and-list')
    const typedArraySpeciesConstructor = require('../internals/typed-array-species-constructor')

    module.exports = function (instance, list) {
      return arrayFromConstructorAndList(typedArraySpeciesConstructor(instance), list)
    }
  }, { '../internals/array-from-constructor-and-list': 55, '../internals/typed-array-species-constructor': 221 }],
  220: [function (require, module, exports) {
    const aConstructor = require('../internals/a-constructor')
    const toObject = require('../internals/to-object')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const getIterator = require('../internals/get-iterator')
    const getIteratorMethod = require('../internals/get-iterator-method')
    const isArrayIteratorMethod = require('../internals/is-array-iterator-method')
    const bind = require('../internals/function-bind-context')
    const aTypedArrayConstructor = require('../internals/array-buffer-view-core').aTypedArrayConstructor

    module.exports = function from (source /* , mapfn, thisArg */) {
      const C = aConstructor(this)
      let O = toObject(source)
      const argumentsLength = arguments.length
      let mapfn = argumentsLength > 1 ? arguments[1] : undefined
      const mapping = mapfn !== undefined
      const iteratorMethod = getIteratorMethod(O)
      let i, length, result, step, iterator, next
      if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
        iterator = getIterator(O, iteratorMethod)
        next = iterator.next
        O = []
        while (!(step = next.call(iterator)).done) {
          O.push(step.value)
        }
      }
      if (mapping && argumentsLength > 2) {
        mapfn = bind(mapfn, arguments[2], 2)
      }
      length = lengthOfArrayLike(O)
      result = new (aTypedArrayConstructor(C))(length)
      for (i = 0; length > i; i++) {
        result[i] = mapping ? mapfn(O[i], i) : O[i]
      }
      return result
    }
  }, { '../internals/a-constructor': 43, '../internals/array-buffer-view-core': 50, '../internals/function-bind-context': 105, '../internals/get-iterator': 110, '../internals/get-iterator-method': 109, '../internals/is-array-iterator-method': 126, '../internals/length-of-array-like': 141, '../internals/to-object': 209 }],
  221: [function (require, module, exports) {
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const speciesConstructor = require('../internals/species-constructor')

    const TYPED_ARRAY_CONSTRUCTOR = ArrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR
    const aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor

    // a part of `TypedArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#typedarray-species-create
    module.exports = function (originalArray) {
      return aTypedArrayConstructor(speciesConstructor(originalArray, originalArray[TYPED_ARRAY_CONSTRUCTOR]))
    }
  }, { '../internals/array-buffer-view-core': 50, '../internals/species-constructor': 193 }],
  222: [function (require, module, exports) {
    let id = 0
    const postfix = Math.random()

    module.exports = function (key) {
      return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36)
    }
  }, {}],
  223: [function (require, module, exports) {
    /* eslint-disable es/no-symbol -- required for testing */
    const NATIVE_SYMBOL = require('../internals/native-symbol')

    module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator === 'symbol'
  }, { '../internals/native-symbol': 148 }],
  224: [function (require, module, exports) {
    const wellKnownSymbol = require('../internals/well-known-symbol')

    exports.f = wellKnownSymbol
  }, { '../internals/well-known-symbol': 225 }],
  225: [function (require, module, exports) {
    const global = require('../internals/global')
    const shared = require('../internals/shared')
    const hasOwn = require('../internals/has-own-property')
    const uid = require('../internals/uid')
    const NATIVE_SYMBOL = require('../internals/native-symbol')
    const USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid')

    const WellKnownSymbolsStore = shared('wks')
    const Symbol = global.Symbol
    const createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid

    module.exports = function (name) {
      if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] === 'string')) {
        if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
          WellKnownSymbolsStore[name] = Symbol[name]
        } else {
          WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name)
        }
      } return WellKnownSymbolsStore[name]
    }
  }, { '../internals/global': 113, '../internals/has-own-property': 114, '../internals/native-symbol': 148, '../internals/shared': 192, '../internals/uid': 222, '../internals/use-symbol-as-uid': 223 }],
  226: [function (require, module, exports) {
    // a string of all valid unicode whitespaces
    module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
  }, {}],
  227: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const getPrototypeOf = require('../internals/object-get-prototype-of')
    const setPrototypeOf = require('../internals/object-set-prototype-of')
    const copyConstructorProperties = require('../internals/copy-constructor-properties')
    const create = require('../internals/object-create')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')
    const installErrorCause = require('../internals/install-error-cause')
    const iterate = require('../internals/iterate')
    const toString = require('../internals/to-string')

    var $AggregateError = function AggregateError (errors, message /* , options */) {
      let that = this
      const options = arguments.length > 2 ? arguments[2] : undefined
      if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message, options)
      if (setPrototypeOf) {
        // eslint-disable-next-line unicorn/error-message -- expected
        that = setPrototypeOf(new Error(undefined), getPrototypeOf(that))
      }
      if (message !== undefined) createNonEnumerableProperty(that, 'message', toString(message))
      installErrorCause(that, options)
      const errorsArray = []
      iterate(errors, errorsArray.push, { that: errorsArray })
      createNonEnumerableProperty(that, 'errors', errorsArray)
      return that
    }

    if (setPrototypeOf) setPrototypeOf($AggregateError, Error)
    else copyConstructorProperties($AggregateError, Error)

    $AggregateError.prototype = create(Error.prototype, {
      constructor: createPropertyDescriptor(1, $AggregateError),
      message: createPropertyDescriptor(1, ''),
      name: createPropertyDescriptor(1, 'AggregateError')
    })

    // `AggregateError` constructor
    // https://tc39.es/ecma262/#sec-aggregate-error-constructor
    $({ global: true }, {
      AggregateError: $AggregateError
    })
  }, { '../internals/copy-constructor-properties': 73, '../internals/create-non-enumerable-property': 78, '../internals/create-property-descriptor': 79, '../internals/export': 100, '../internals/install-error-cause': 123, '../internals/iterate': 137, '../internals/object-create': 157, '../internals/object-get-prototype-of': 164, '../internals/object-set-prototype-of': 169, '../internals/to-string': 215 }],
  228: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const global = require('../internals/global')
    const arrayBufferModule = require('../internals/array-buffer')
    const setSpecies = require('../internals/set-species')

    const ARRAY_BUFFER = 'ArrayBuffer'
    const ArrayBuffer = arrayBufferModule[ARRAY_BUFFER]
    const NativeArrayBuffer = global[ARRAY_BUFFER]

    // `ArrayBuffer` constructor
    // https://tc39.es/ecma262/#sec-arraybuffer-constructor
    $({ global: true, forced: NativeArrayBuffer !== ArrayBuffer }, {
      ArrayBuffer: ArrayBuffer
    })

    setSpecies(ARRAY_BUFFER)
  }, { '../internals/array-buffer': 51, '../internals/export': 100, '../internals/global': 113, '../internals/set-species': 188 }],
  229: [function (require, module, exports) {
    const $ = require('../internals/export')
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')

    const NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS

    // `ArrayBuffer.isView` method
    // https://tc39.es/ecma262/#sec-arraybuffer.isview
    $({ target: 'ArrayBuffer', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
      isView: ArrayBufferViewCore.isView
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/export': 100 }],
  230: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const fails = require('../internals/fails')
    const ArrayBufferModule = require('../internals/array-buffer')
    const anObject = require('../internals/an-object')
    const toAbsoluteIndex = require('../internals/to-absolute-index')
    const toLength = require('../internals/to-length')
    const speciesConstructor = require('../internals/species-constructor')

    const ArrayBuffer = ArrayBufferModule.ArrayBuffer
    const DataView = ArrayBufferModule.DataView
    const nativeArrayBufferSlice = ArrayBuffer.prototype.slice

    const INCORRECT_SLICE = fails(function () {
      return !new ArrayBuffer(2).slice(1, undefined).byteLength
    })

    // `ArrayBuffer.prototype.slice` method
    // https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
    $({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
      slice: function slice (start, end) {
        if (nativeArrayBufferSlice !== undefined && end === undefined) {
          return nativeArrayBufferSlice.call(anObject(this), start) // FF fix
        }
        const length = anObject(this).byteLength
        let first = toAbsoluteIndex(start, length)
        const fin = toAbsoluteIndex(end === undefined ? length : end, length)
        const result = new (speciesConstructor(this, ArrayBuffer))(toLength(fin - first))
        const viewSource = new DataView(this)
        const viewTarget = new DataView(result)
        let index = 0
        while (first < fin) {
          viewTarget.setUint8(index++, viewSource.getUint8(first++))
        } return result
      }
    })
  }, { '../internals/an-object': 48, '../internals/array-buffer': 51, '../internals/export': 100, '../internals/fails': 101, '../internals/species-constructor': 193, '../internals/to-absolute-index': 204, '../internals/to-length': 208 }],
  231: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const toObject = require('../internals/to-object')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    const addToUnscopables = require('../internals/add-to-unscopables')

    // `Array.prototype.at` method
    // https://github.com/tc39/proposal-relative-indexing-method
    $({ target: 'Array', proto: true }, {
      at: function at (index) {
        const O = toObject(this)
        const len = lengthOfArrayLike(O)
        const relativeIndex = toIntegerOrInfinity(index)
        const k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex
        return (k < 0 || k >= len) ? undefined : O[k]
      }
    })

    addToUnscopables('at')
  }, { '../internals/add-to-unscopables': 45, '../internals/export': 100, '../internals/length-of-array-like': 141, '../internals/to-integer-or-infinity': 207, '../internals/to-object': 209 }],
  232: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const fails = require('../internals/fails')
    const isArray = require('../internals/is-array')
    const isObject = require('../internals/is-object')
    const toObject = require('../internals/to-object')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const createProperty = require('../internals/create-property')
    const arraySpeciesCreate = require('../internals/array-species-create')
    const arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const V8_VERSION = require('../internals/engine-v8-version')

    const IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable')
    const MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF
    const MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'

    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/679
    const IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
      const array = []
      array[IS_CONCAT_SPREADABLE] = false
      return array.concat()[0] !== array
    })

    const SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat')

    const isConcatSpreadable = function (O) {
      if (!isObject(O)) return false
      const spreadable = O[IS_CONCAT_SPREADABLE]
      return spreadable !== undefined ? !!spreadable : isArray(O)
    }

    const FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT

    // `Array.prototype.concat` method
    // https://tc39.es/ecma262/#sec-array.prototype.concat
    // with adding support of @@isConcatSpreadable and @@species
    $({ target: 'Array', proto: true, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      concat: function concat (arg) {
        const O = toObject(this)
        const A = arraySpeciesCreate(O, 0)
        let n = 0
        let i, k, length, len, E
        for (i = -1, length = arguments.length; i < length; i++) {
          E = i === -1 ? O : arguments[i]
          if (isConcatSpreadable(E)) {
            len = lengthOfArrayLike(E)
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
  }, { '../internals/array-method-has-species-support': 60, '../internals/array-species-create': 65, '../internals/create-property': 80, '../internals/engine-v8-version': 97, '../internals/export': 100, '../internals/fails': 101, '../internals/is-array': 127, '../internals/is-object': 133, '../internals/length-of-array-like': 141, '../internals/to-object': 209, '../internals/well-known-symbol': 225 }],
  233: [function (require, module, exports) {
    const $ = require('../internals/export')
    const copyWithin = require('../internals/array-copy-within')
    const addToUnscopables = require('../internals/add-to-unscopables')

    // `Array.prototype.copyWithin` method
    // https://tc39.es/ecma262/#sec-array.prototype.copywithin
    $({ target: 'Array', proto: true }, {
      copyWithin: copyWithin
    })

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('copyWithin')
  }, { '../internals/add-to-unscopables': 45, '../internals/array-copy-within': 52, '../internals/export': 100 }],
  234: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $every = require('../internals/array-iteration').every
    const arrayMethodIsStrict = require('../internals/array-method-is-strict')

    const STRICT_METHOD = arrayMethodIsStrict('every')

    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    $({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
      every: function every (callbackfn /* , thisArg */) {
        return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/array-iteration': 58, '../internals/array-method-is-strict': 61, '../internals/export': 100 }],
  235: [function (require, module, exports) {
    const $ = require('../internals/export')
    const fill = require('../internals/array-fill')
    const addToUnscopables = require('../internals/add-to-unscopables')

    // `Array.prototype.fill` method
    // https://tc39.es/ecma262/#sec-array.prototype.fill
    $({ target: 'Array', proto: true }, {
      fill: fill
    })

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('fill')
  }, { '../internals/add-to-unscopables': 45, '../internals/array-fill': 53, '../internals/export': 100 }],
  236: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $filter = require('../internals/array-iteration').filter
    const arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support')

    const HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter')

    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    // with adding support of @@species
    $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      filter: function filter (callbackfn /* , thisArg */) {
        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/array-iteration': 58, '../internals/array-method-has-species-support': 60, '../internals/export': 100 }],
  237: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $findIndex = require('../internals/array-iteration').findIndex
    const addToUnscopables = require('../internals/add-to-unscopables')

    const FIND_INDEX = 'findIndex'
    let SKIPS_HOLES = true

    // Shouldn't skip holes
    if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false })

    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findindex
    $({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
      findIndex: function findIndex (callbackfn /* , that = undefined */) {
        return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      }
    })

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables(FIND_INDEX)
  }, { '../internals/add-to-unscopables': 45, '../internals/array-iteration': 58, '../internals/export': 100 }],
  238: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $find = require('../internals/array-iteration').find
    const addToUnscopables = require('../internals/add-to-unscopables')

    const FIND = 'find'
    let SKIPS_HOLES = true

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
  }, { '../internals/add-to-unscopables': 45, '../internals/array-iteration': 58, '../internals/export': 100 }],
  239: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const flattenIntoArray = require('../internals/flatten-into-array')
    const aCallable = require('../internals/a-callable')
    const toObject = require('../internals/to-object')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const arraySpeciesCreate = require('../internals/array-species-create')

    // `Array.prototype.flatMap` method
    // https://tc39.es/ecma262/#sec-array.prototype.flatmap
    $({ target: 'Array', proto: true }, {
      flatMap: function flatMap (callbackfn /* , thisArg */) {
        const O = toObject(this)
        const sourceLen = lengthOfArrayLike(O)
        let A
        aCallable(callbackfn)
        A = arraySpeciesCreate(O, 0)
        A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
        return A
      }
    })
  }, { '../internals/a-callable': 42, '../internals/array-species-create': 65, '../internals/export': 100, '../internals/flatten-into-array': 103, '../internals/length-of-array-like': 141, '../internals/to-object': 209 }],
  240: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const flattenIntoArray = require('../internals/flatten-into-array')
    const toObject = require('../internals/to-object')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    const arraySpeciesCreate = require('../internals/array-species-create')

    // `Array.prototype.flat` method
    // https://tc39.es/ecma262/#sec-array.prototype.flat
    $({ target: 'Array', proto: true }, {
      flat: function flat (/* depthArg = 1 */) {
        const depthArg = arguments.length ? arguments[0] : undefined
        const O = toObject(this)
        const sourceLen = lengthOfArrayLike(O)
        const A = arraySpeciesCreate(O, 0)
        A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg))
        return A
      }
    })
  }, { '../internals/array-species-create': 65, '../internals/export': 100, '../internals/flatten-into-array': 103, '../internals/length-of-array-like': 141, '../internals/to-integer-or-infinity': 207, '../internals/to-object': 209 }],
  241: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const forEach = require('../internals/array-for-each')

    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    // eslint-disable-next-line es/no-array-prototype-foreach -- safe
    $({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
      forEach: forEach
    })
  }, { '../internals/array-for-each': 54, '../internals/export': 100 }],
  242: [function (require, module, exports) {
    const $ = require('../internals/export')
    const from = require('../internals/array-from')
    const checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration')

    const INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
      // eslint-disable-next-line es/no-array-from -- required for testing
      Array.from(iterable)
    })

    // `Array.from` method
    // https://tc39.es/ecma262/#sec-array.from
    $({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
      from: from
    })
  }, { '../internals/array-from': 56, '../internals/check-correctness-of-iteration': 67, '../internals/export': 100 }],
  243: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $includes = require('../internals/array-includes').includes
    const addToUnscopables = require('../internals/add-to-unscopables')

    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    $({ target: 'Array', proto: true }, {
      includes: function includes (el /* , fromIndex = 0 */) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined)
      }
    })

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('includes')
  }, { '../internals/add-to-unscopables': 45, '../internals/array-includes': 57, '../internals/export': 100 }],
  244: [function (require, module, exports) {
    'use strict'
    /* eslint-disable es/no-array-prototype-indexof -- required for testing */
    const $ = require('../internals/export')
    const $indexOf = require('../internals/array-includes').indexOf
    const arrayMethodIsStrict = require('../internals/array-method-is-strict')

    const nativeIndexOf = [].indexOf

    const NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0
    const STRICT_METHOD = arrayMethodIsStrict('indexOf')

    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    $({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
      indexOf: function indexOf (searchElement /* , fromIndex = 0 */) {
        return NEGATIVE_ZERO
        // convert -0 to +0
          ? nativeIndexOf.apply(this, arguments) || 0
          : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/array-includes': 57, '../internals/array-method-is-strict': 61, '../internals/export': 100 }],
  245: [function (require, module, exports) {
    const $ = require('../internals/export')
    const isArray = require('../internals/is-array')

    // `Array.isArray` method
    // https://tc39.es/ecma262/#sec-array.isarray
    $({ target: 'Array', stat: true }, {
      isArray: isArray
    })
  }, { '../internals/export': 100, '../internals/is-array': 127 }],
  246: [function (require, module, exports) {
    'use strict'
    const toIndexedObject = require('../internals/to-indexed-object')
    const addToUnscopables = require('../internals/add-to-unscopables')
    const Iterators = require('../internals/iterators')
    const InternalStateModule = require('../internals/internal-state')
    const defineIterator = require('../internals/define-iterator')

    const ARRAY_ITERATOR = 'Array Iterator'
    const setInternalState = InternalStateModule.set
    const getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR)

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
      const state = getInternalState(this)
      const target = state.target
      const kind = state.kind
      const index = state.index++
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
  }, { '../internals/add-to-unscopables': 45, '../internals/define-iterator': 83, '../internals/internal-state': 125, '../internals/iterators': 140, '../internals/to-indexed-object': 206 }],
  247: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const IndexedObject = require('../internals/indexed-object')
    const toIndexedObject = require('../internals/to-indexed-object')
    const arrayMethodIsStrict = require('../internals/array-method-is-strict')

    const nativeJoin = [].join

    const ES3_STRINGS = IndexedObject != Object
    const STRICT_METHOD = arrayMethodIsStrict('join', ',')

    // `Array.prototype.join` method
    // https://tc39.es/ecma262/#sec-array.prototype.join
    $({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
      join: function join (separator) {
        return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator)
      }
    })
  }, { '../internals/array-method-is-strict': 61, '../internals/export': 100, '../internals/indexed-object': 120, '../internals/to-indexed-object': 206 }],
  248: [function (require, module, exports) {
    const $ = require('../internals/export')
    const lastIndexOf = require('../internals/array-last-index-of')

    // `Array.prototype.lastIndexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
    // eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
    $({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
      lastIndexOf: lastIndexOf
    })
  }, { '../internals/array-last-index-of': 59, '../internals/export': 100 }],
  249: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $map = require('../internals/array-iteration').map
    const arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support')

    const HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map')

    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    // with adding support of @@species
    $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      map: function map (callbackfn /* , thisArg */) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/array-iteration': 58, '../internals/array-method-has-species-support': 60, '../internals/export': 100 }],
  250: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const fails = require('../internals/fails')
    const isConstructor = require('../internals/is-constructor')
    const createProperty = require('../internals/create-property')

    const ISNT_GENERIC = fails(function () {
      function F () { /* empty */ }
      // eslint-disable-next-line es/no-array-of -- required for testing
      return !(Array.of.call(F) instanceof F)
    })

    // `Array.of` method
    // https://tc39.es/ecma262/#sec-array.of
    // WebKit Array.of isn't generic
    $({ target: 'Array', stat: true, forced: ISNT_GENERIC }, {
      of: function of (/* ...args */) {
        let index = 0
        const argumentsLength = arguments.length
        const result = new (isConstructor(this) ? this : Array)(argumentsLength)
        while (argumentsLength > index) createProperty(result, index, arguments[index++])
        result.length = argumentsLength
        return result
      }
    })
  }, { '../internals/create-property': 80, '../internals/export': 100, '../internals/fails': 101, '../internals/is-constructor': 129 }],
  251: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $reduceRight = require('../internals/array-reduce').right
    const arrayMethodIsStrict = require('../internals/array-method-is-strict')
    const CHROME_VERSION = require('../internals/engine-v8-version')
    const IS_NODE = require('../internals/engine-is-node')

    const STRICT_METHOD = arrayMethodIsStrict('reduceRight')
    // Chrome 80-82 has a critical bug
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
    const CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83

    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    $({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
      reduceRight: function reduceRight (callbackfn /* , initialValue */) {
        return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/array-method-is-strict': 61, '../internals/array-reduce': 62, '../internals/engine-is-node': 94, '../internals/engine-v8-version': 97, '../internals/export': 100 }],
  252: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $reduce = require('../internals/array-reduce').left
    const arrayMethodIsStrict = require('../internals/array-method-is-strict')
    const CHROME_VERSION = require('../internals/engine-v8-version')
    const IS_NODE = require('../internals/engine-is-node')

    const STRICT_METHOD = arrayMethodIsStrict('reduce')
    // Chrome 80-82 has a critical bug
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
    const CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83

    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    $({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
      reduce: function reduce (callbackfn /* , initialValue */) {
        return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/array-method-is-strict': 61, '../internals/array-reduce': 62, '../internals/engine-is-node': 94, '../internals/engine-v8-version': 97, '../internals/export': 100 }],
  253: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const isArray = require('../internals/is-array')

    const nativeReverse = [].reverse
    const test = [1, 2]

    // `Array.prototype.reverse` method
    // https://tc39.es/ecma262/#sec-array.prototype.reverse
    // fix for Safari 12.0 bug
    // https://bugs.webkit.org/show_bug.cgi?id=188794
    $({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
      reverse: function reverse () {
        // eslint-disable-next-line no-self-assign -- dirty hack
        if (isArray(this)) this.length = this.length
        return nativeReverse.call(this)
      }
    })
  }, { '../internals/export': 100, '../internals/is-array': 127 }],
  254: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const isArray = require('../internals/is-array')
    const isConstructor = require('../internals/is-constructor')
    const isObject = require('../internals/is-object')
    const toAbsoluteIndex = require('../internals/to-absolute-index')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const toIndexedObject = require('../internals/to-indexed-object')
    const createProperty = require('../internals/create-property')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support')

    const HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice')

    const SPECIES = wellKnownSymbol('species')
    const nativeSlice = [].slice
    const max = Math.max

    // `Array.prototype.slice` method
    // https://tc39.es/ecma262/#sec-array.prototype.slice
    // fallback for not array-like ES3 strings and DOM objects
    $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      slice: function slice (start, end) {
        const O = toIndexedObject(this)
        const length = lengthOfArrayLike(O)
        let k = toAbsoluteIndex(start, length)
        const fin = toAbsoluteIndex(end === undefined ? length : end, length)
        // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
        let Constructor, result, n
        if (isArray(O)) {
          Constructor = O.constructor
          // cross-realm fallback
          if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
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
  }, { '../internals/array-method-has-species-support': 60, '../internals/create-property': 80, '../internals/export': 100, '../internals/is-array': 127, '../internals/is-constructor': 129, '../internals/is-object': 133, '../internals/length-of-array-like': 141, '../internals/to-absolute-index': 204, '../internals/to-indexed-object': 206, '../internals/well-known-symbol': 225 }],
  255: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $some = require('../internals/array-iteration').some
    const arrayMethodIsStrict = require('../internals/array-method-is-strict')

    const STRICT_METHOD = arrayMethodIsStrict('some')

    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    $({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
      some: function some (callbackfn /* , thisArg */) {
        return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/array-iteration': 58, '../internals/array-method-is-strict': 61, '../internals/export': 100 }],
  256: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const aCallable = require('../internals/a-callable')
    const toObject = require('../internals/to-object')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const toString = require('../internals/to-string')
    const fails = require('../internals/fails')
    const internalSort = require('../internals/array-sort')
    const arrayMethodIsStrict = require('../internals/array-method-is-strict')
    const FF = require('../internals/engine-ff-version')
    const IE_OR_EDGE = require('../internals/engine-is-ie-or-edge')
    const V8 = require('../internals/engine-v8-version')
    const WEBKIT = require('../internals/engine-webkit-version')

    const test = []
    const nativeSort = test.sort

    // IE8-
    const FAILS_ON_UNDEFINED = fails(function () {
      test.sort(undefined)
    })
    // V8 bug
    const FAILS_ON_NULL = fails(function () {
      test.sort(null)
    })
    // Old WebKit
    const STRICT_METHOD = arrayMethodIsStrict('sort')

    const STABLE_SORT = !fails(function () {
      // feature detection can be too slow, so check engines versions
      if (V8) return V8 < 70
      if (FF && FF > 3) return
      if (IE_OR_EDGE) return true
      if (WEBKIT) return WEBKIT < 603

      let result = ''
      let code, chr, value, index

      // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
      for (code = 65; code < 76; code++) {
        chr = String.fromCharCode(code)

        switch (code) {
          case 66: case 69: case 70: case 72: value = 3; break
          case 68: case 71: value = 4; break
          default: value = 2
        }

        for (index = 0; index < 47; index++) {
          test.push({ k: chr + index, v: value })
        }
      }

      test.sort(function (a, b) { return b.v - a.v })

      for (index = 0; index < test.length; index++) {
        chr = test[index].k.charAt(0)
        if (result.charAt(result.length - 1) !== chr) result += chr
      }

      return result !== 'DGBEFHACIJK'
    })

    const FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT

    const getSortCompare = function (comparefn) {
      return function (x, y) {
        if (y === undefined) return -1
        if (x === undefined) return 1
        if (comparefn !== undefined) return +comparefn(x, y) || 0
        return toString(x) > toString(y) ? 1 : -1
      }
    }

    // `Array.prototype.sort` method
    // https://tc39.es/ecma262/#sec-array.prototype.sort
    $({ target: 'Array', proto: true, forced: FORCED }, {
      sort: function sort (comparefn) {
        if (comparefn !== undefined) aCallable(comparefn)

        const array = toObject(this)

        if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn)

        let items = []
        const arrayLength = lengthOfArrayLike(array)
        let itemsLength, index

        for (index = 0; index < arrayLength; index++) {
          if (index in array) items.push(array[index])
        }

        items = internalSort(items, getSortCompare(comparefn))
        itemsLength = items.length
        index = 0

        while (index < itemsLength) array[index] = items[index++]
        while (index < arrayLength) delete array[index++]

        return array
      }
    })
  }, { '../internals/a-callable': 42, '../internals/array-method-is-strict': 61, '../internals/array-sort': 63, '../internals/engine-ff-version': 89, '../internals/engine-is-ie-or-edge': 91, '../internals/engine-v8-version': 97, '../internals/engine-webkit-version': 98, '../internals/export': 100, '../internals/fails': 101, '../internals/length-of-array-like': 141, '../internals/to-object': 209, '../internals/to-string': 215 }],
  257: [function (require, module, exports) {
    const setSpecies = require('../internals/set-species')

    // `Array[@@species]` getter
    // https://tc39.es/ecma262/#sec-get-array-@@species
    setSpecies('Array')
  }, { '../internals/set-species': 188 }],
  258: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const toAbsoluteIndex = require('../internals/to-absolute-index')
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const toObject = require('../internals/to-object')
    const arraySpeciesCreate = require('../internals/array-species-create')
    const createProperty = require('../internals/create-property')
    const arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support')

    const HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice')

    const max = Math.max
    const min = Math.min
    const MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF
    const MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'

    // `Array.prototype.splice` method
    // https://tc39.es/ecma262/#sec-array.prototype.splice
    // with adding support of @@species
    $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      splice: function splice (start, deleteCount /* , ...items */) {
        const O = toObject(this)
        const len = lengthOfArrayLike(O)
        const actualStart = toAbsoluteIndex(start, len)
        const argumentsLength = arguments.length
        let insertCount, actualDeleteCount, A, k, from, to
        if (argumentsLength === 0) {
          insertCount = actualDeleteCount = 0
        } else if (argumentsLength === 1) {
          insertCount = 0
          actualDeleteCount = len - actualStart
        } else {
          insertCount = argumentsLength - 2
          actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart)
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
  }, { '../internals/array-method-has-species-support': 60, '../internals/array-species-create': 65, '../internals/create-property': 80, '../internals/export': 100, '../internals/length-of-array-like': 141, '../internals/to-absolute-index': 204, '../internals/to-integer-or-infinity': 207, '../internals/to-object': 209 }],
  259: [function (require, module, exports) {
    // this method was added to unscopables after implementation
    // in popular engines, so it's moved to a separate module
    const addToUnscopables = require('../internals/add-to-unscopables')

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('flatMap')
  }, { '../internals/add-to-unscopables': 45 }],
  260: [function (require, module, exports) {
    // this method was added to unscopables after implementation
    // in popular engines, so it's moved to a separate module
    const addToUnscopables = require('../internals/add-to-unscopables')

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('flat')
  }, { '../internals/add-to-unscopables': 45 }],
  261: [function (require, module, exports) {
    const $ = require('../internals/export')
    const ArrayBufferModule = require('../internals/array-buffer')
    const NATIVE_ARRAY_BUFFER = require('../internals/array-buffer-native')

    // `DataView` constructor
    // https://tc39.es/ecma262/#sec-dataview-constructor
    $({ global: true, forced: !NATIVE_ARRAY_BUFFER }, {
      DataView: ArrayBufferModule.DataView
    })
  }, { '../internals/array-buffer': 51, '../internals/array-buffer-native': 49, '../internals/export': 100 }],
  262: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const fails = require('../internals/fails')

    const FORCED = fails(function () {
      return new Date(16e11).getYear() !== 120
    })

    const getFullYear = Date.prototype.getFullYear

    // `Date.prototype.getYear` method
    // https://tc39.es/ecma262/#sec-date.prototype.getyear
    $({ target: 'Date', proto: true, forced: FORCED }, {
      getYear: function getYear () {
        return getFullYear.call(this) - 1900
      }
    })
  }, { '../internals/export': 100, '../internals/fails': 101 }],
  263: [function (require, module, exports) {
    const $ = require('../internals/export')

    // `Date.now` method
    // https://tc39.es/ecma262/#sec-date.now
    $({ target: 'Date', stat: true }, {
      now: function now () {
        return new Date().getTime()
      }
    })
  }, { '../internals/export': 100 }],
  264: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')

    const getTime = Date.prototype.getTime
    const setFullYear = Date.prototype.setFullYear

    // `Date.prototype.setYear` method
    // https://tc39.es/ecma262/#sec-date.prototype.setyear
    $({ target: 'Date', proto: true }, {
      setYear: function setYear (year) {
        // validate
        getTime.call(this)
        const yi = toIntegerOrInfinity(year)
        const yyyy = yi >= 0 && yi <= 99 ? yi + 1900 : yi
        return setFullYear.call(this, yyyy)
      }
    })
  }, { '../internals/export': 100, '../internals/to-integer-or-infinity': 207 }],
  265: [function (require, module, exports) {
    const $ = require('../internals/export')

    // `Date.prototype.toGMTString` method
    // https://tc39.es/ecma262/#sec-date.prototype.togmtstring
    $({ target: 'Date', proto: true }, {
      toGMTString: Date.prototype.toUTCString
    })
  }, { '../internals/export': 100 }],
  266: [function (require, module, exports) {
    const $ = require('../internals/export')
    const toISOString = require('../internals/date-to-iso-string')

    // `Date.prototype.toISOString` method
    // https://tc39.es/ecma262/#sec-date.prototype.toisostring
    // PhantomJS / old WebKit has a broken implementations
    $({ target: 'Date', proto: true, forced: Date.prototype.toISOString !== toISOString }, {
      toISOString: toISOString
    })
  }, { '../internals/date-to-iso-string': 81, '../internals/export': 100 }],
  267: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const fails = require('../internals/fails')
    const toObject = require('../internals/to-object')
    const toPrimitive = require('../internals/to-primitive')

    const FORCED = fails(function () {
      return new Date(NaN).toJSON() !== null ||
    Date.prototype.toJSON.call({ toISOString: function () { return 1 } }) !== 1
    })

    // `Date.prototype.toJSON` method
    // https://tc39.es/ecma262/#sec-date.prototype.tojson
    $({ target: 'Date', proto: true, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      toJSON: function toJSON (key) {
        const O = toObject(this)
        const pv = toPrimitive(O, 'number')
        return typeof pv === 'number' && !isFinite(pv) ? null : O.toISOString()
      }
    })
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/to-object': 209, '../internals/to-primitive': 212 }],
  268: [function (require, module, exports) {
    const redefine = require('../internals/redefine')
    const dateToPrimitive = require('../internals/date-to-primitive')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const TO_PRIMITIVE = wellKnownSymbol('toPrimitive')
    const DatePrototype = Date.prototype

    // `Date.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
    if (!(TO_PRIMITIVE in DatePrototype)) {
      redefine(DatePrototype, TO_PRIMITIVE, dateToPrimitive)
    }
  }, { '../internals/date-to-primitive': 82, '../internals/redefine': 178, '../internals/well-known-symbol': 225 }],
  269: [function (require, module, exports) {
    const redefine = require('../internals/redefine')

    const DatePrototype = Date.prototype
    const INVALID_DATE = 'Invalid Date'
    const TO_STRING = 'toString'
    const nativeDateToString = DatePrototype[TO_STRING]
    const getTime = DatePrototype.getTime

    // `Date.prototype.toString` method
    // https://tc39.es/ecma262/#sec-date.prototype.tostring
    if (String(new Date(NaN)) != INVALID_DATE) {
      redefine(DatePrototype, TO_STRING, function toString () {
        const value = getTime.call(this)
        // eslint-disable-next-line no-self-compare -- NaN check
        return value === value ? nativeDateToString.call(this) : INVALID_DATE
      })
    }
  }, { '../internals/redefine': 178 }],
  270: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const toString = require('../internals/to-string')

    const raw = /[\w*+\-./@]/

    const hex = function (code, length) {
      let result = code.toString(16)
      while (result.length < length) result = '0' + result
      return result
    }

    // `escape` method
    // https://tc39.es/ecma262/#sec-escape-string
    $({ global: true }, {
      escape: function escape (string) {
        const str = toString(string)
        let result = ''
        const length = str.length
        let index = 0
        let chr, code
        while (index < length) {
          chr = str.charAt(index++)
          if (raw.test(chr)) {
            result += chr
          } else {
            code = chr.charCodeAt(0)
            if (code < 256) {
              result += '%' + hex(code, 2)
            } else {
              result += '%u' + hex(code, 4).toUpperCase()
            }
          }
        } return result
      }
    })
  }, { '../internals/export': 100, '../internals/to-string': 215 }],
  271: [function (require, module, exports) {
    const $ = require('../internals/export')
    const bind = require('../internals/function-bind')

    // `Function.prototype.bind` method
    // https://tc39.es/ecma262/#sec-function.prototype.bind
    $({ target: 'Function', proto: true }, {
      bind: bind
    })
  }, { '../internals/export': 100, '../internals/function-bind': 106 }],
  272: [function (require, module, exports) {
    'use strict'
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')
    const definePropertyModule = require('../internals/object-define-property')
    const getPrototypeOf = require('../internals/object-get-prototype-of')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const HAS_INSTANCE = wellKnownSymbol('hasInstance')
    const FunctionPrototype = Function.prototype

    // `Function.prototype[@@hasInstance]` method
    // https://tc39.es/ecma262/#sec-function.prototype-@@hasinstance
    if (!(HAS_INSTANCE in FunctionPrototype)) {
      definePropertyModule.f(FunctionPrototype, HAS_INSTANCE, {
        value: function (O) {
          if (!isCallable(this) || !isObject(O)) return false
          if (!isObject(this.prototype)) return O instanceof this
          // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
          while (O = getPrototypeOf(O)) if (this.prototype === O) return true
          return false
        }
      })
    }
  }, { '../internals/is-callable': 128, '../internals/is-object': 133, '../internals/object-define-property': 159, '../internals/object-get-prototype-of': 164, '../internals/well-known-symbol': 225 }],
  273: [function (require, module, exports) {
    const DESCRIPTORS = require('../internals/descriptors')
    const FUNCTION_NAME_EXISTS = require('../internals/function-name').EXISTS
    const defineProperty = require('../internals/object-define-property').f

    const FunctionPrototype = Function.prototype
    const FunctionPrototypeToString = FunctionPrototype.toString
    const nameRE = /^\s*function ([^ (]*)/
    const NAME = 'name'

    // Function instances `.name` property
    // https://tc39.es/ecma262/#sec-function-instances-name
    if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
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
  }, { '../internals/descriptors': 85, '../internals/function-name': 107, '../internals/object-define-property': 159 }],
  274: [function (require, module, exports) {
    const $ = require('../internals/export')
    const global = require('../internals/global')

    // `globalThis` object
    // https://tc39.es/ecma262/#sec-globalthis
    $({ global: true }, {
      globalThis: global
    })
  }, { '../internals/export': 100, '../internals/global': 113 }],
  275: [function (require, module, exports) {
    const $ = require('../internals/export')
    const getBuiltIn = require('../internals/get-built-in')
    const fails = require('../internals/fails')

    const $stringify = getBuiltIn('JSON', 'stringify')
    const re = /[\uD800-\uDFFF]/g
    const low = /^[\uD800-\uDBFF]$/
    const hi = /^[\uDC00-\uDFFF]$/

    const fix = function (match, offset, string) {
      const prev = string.charAt(offset - 1)
      const next = string.charAt(offset + 1)
      if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
        return '\\u' + match.charCodeAt(0).toString(16)
      } return match
    }

    const FORCED = fails(function () {
      return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' ||
    $stringify('\uDEAD') !== '"\\udead"'
    })

    if ($stringify) {
      // `JSON.stringify` method
      // https://tc39.es/ecma262/#sec-json.stringify
      // https://github.com/tc39/proposal-well-formed-stringify
      $({ target: 'JSON', stat: true, forced: FORCED }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        stringify: function stringify (it, replacer, space) {
          const result = $stringify.apply(null, arguments)
          return typeof result === 'string' ? result.replace(re, fix) : result
        }
      })
    }
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/get-built-in': 108 }],
  276: [function (require, module, exports) {
    const global = require('../internals/global')
    const setToStringTag = require('../internals/set-to-string-tag')

    // JSON[@@toStringTag] property
    // https://tc39.es/ecma262/#sec-json-@@tostringtag
    setToStringTag(global.JSON, 'JSON', true)
  }, { '../internals/global': 113, '../internals/set-to-string-tag': 189 }],
  277: [function (require, module, exports) {
    'use strict'
    const collection = require('../internals/collection')
    const collectionStrong = require('../internals/collection-strong')

    // `Map` constructor
    // https://tc39.es/ecma262/#sec-map-objects
    module.exports = collection('Map', function (init) {
      return function Map () { return init(this, arguments.length ? arguments[0] : undefined) }
    }, collectionStrong)
  }, { '../internals/collection': 72, '../internals/collection-strong': 70 }],
  278: [function (require, module, exports) {
    const $ = require('../internals/export')
    const log1p = require('../internals/math-log1p')

    // eslint-disable-next-line es/no-math-acosh -- required for testing
    const $acosh = Math.acosh
    const log = Math.log
    const sqrt = Math.sqrt
    const LN2 = Math.LN2

    const FORCED = !$acosh ||
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  Math.floor($acosh(Number.MAX_VALUE)) != 710 ||
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  $acosh(Infinity) != Infinity

    // `Math.acosh` method
    // https://tc39.es/ecma262/#sec-math.acosh
    $({ target: 'Math', stat: true, forced: FORCED }, {
      acosh: function acosh (x) {
        return (x = +x) < 1
          ? NaN
          : x > 94906265.62425156
            ? log(x) + LN2
            : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1))
      }
    })
  }, { '../internals/export': 100, '../internals/math-log1p': 144 }],
  279: [function (require, module, exports) {
    const $ = require('../internals/export')

    // eslint-disable-next-line es/no-math-asinh -- required for testing
    const $asinh = Math.asinh
    const log = Math.log
    const sqrt = Math.sqrt

    function asinh (x) {
      return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1))
    }

    // `Math.asinh` method
    // https://tc39.es/ecma262/#sec-math.asinh
    // Tor Browser bug: Math.asinh(0) -> -0
    $({ target: 'Math', stat: true, forced: !($asinh && 1 / $asinh(0) > 0) }, {
      asinh: asinh
    })
  }, { '../internals/export': 100 }],
  280: [function (require, module, exports) {
    const $ = require('../internals/export')

    // eslint-disable-next-line es/no-math-atanh -- required for testing
    const $atanh = Math.atanh
    const log = Math.log

    // `Math.atanh` method
    // https://tc39.es/ecma262/#sec-math.atanh
    // Tor Browser bug: Math.atanh(-0) -> 0
    $({ target: 'Math', stat: true, forced: !($atanh && 1 / $atanh(-0) < 0) }, {
      atanh: function atanh (x) {
        return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2
      }
    })
  }, { '../internals/export': 100 }],
  281: [function (require, module, exports) {
    const $ = require('../internals/export')
    const sign = require('../internals/math-sign')

    const abs = Math.abs
    const pow = Math.pow

    // `Math.cbrt` method
    // https://tc39.es/ecma262/#sec-math.cbrt
    $({ target: 'Math', stat: true }, {
      cbrt: function cbrt (x) {
        return sign(x = +x) * pow(abs(x), 1 / 3)
      }
    })
  }, { '../internals/export': 100, '../internals/math-sign': 145 }],
  282: [function (require, module, exports) {
    const $ = require('../internals/export')

    const floor = Math.floor
    const log = Math.log
    const LOG2E = Math.LOG2E

    // `Math.clz32` method
    // https://tc39.es/ecma262/#sec-math.clz32
    $({ target: 'Math', stat: true }, {
      clz32: function clz32 (x) {
        return (x >>>= 0) ? 31 - floor(log(x + 0.5) * LOG2E) : 32
      }
    })
  }, { '../internals/export': 100 }],
  283: [function (require, module, exports) {
    const $ = require('../internals/export')
    const expm1 = require('../internals/math-expm1')

    // eslint-disable-next-line es/no-math-cosh -- required for testing
    const $cosh = Math.cosh
    const abs = Math.abs
    const E = Math.E

    // `Math.cosh` method
    // https://tc39.es/ecma262/#sec-math.cosh
    $({ target: 'Math', stat: true, forced: !$cosh || $cosh(710) === Infinity }, {
      cosh: function cosh (x) {
        const t = expm1(abs(x) - 1) + 1
        return (t + 1 / (t * E * E)) * (E / 2)
      }
    })
  }, { '../internals/export': 100, '../internals/math-expm1': 142 }],
  284: [function (require, module, exports) {
    const $ = require('../internals/export')
    const expm1 = require('../internals/math-expm1')

    // `Math.expm1` method
    // https://tc39.es/ecma262/#sec-math.expm1
    // eslint-disable-next-line es/no-math-expm1 -- required for testing
    $({ target: 'Math', stat: true, forced: expm1 != Math.expm1 }, { expm1: expm1 })
  }, { '../internals/export': 100, '../internals/math-expm1': 142 }],
  285: [function (require, module, exports) {
    const $ = require('../internals/export')
    const fround = require('../internals/math-fround')

    // `Math.fround` method
    // https://tc39.es/ecma262/#sec-math.fround
    $({ target: 'Math', stat: true }, { fround: fround })
  }, { '../internals/export': 100, '../internals/math-fround': 143 }],
  286: [function (require, module, exports) {
    const $ = require('../internals/export')

    // eslint-disable-next-line es/no-math-hypot -- required for testing
    const $hypot = Math.hypot
    const abs = Math.abs
    const sqrt = Math.sqrt

    // Chrome 77 bug
    // https://bugs.chromium.org/p/v8/issues/detail?id=9546
    const BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity

    // `Math.hypot` method
    // https://tc39.es/ecma262/#sec-math.hypot
    $({ target: 'Math', stat: true, forced: BUGGY }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      hypot: function hypot (value1, value2) {
        let sum = 0
        let i = 0
        const aLen = arguments.length
        let larg = 0
        let arg, div
        while (i < aLen) {
          arg = abs(arguments[i++])
          if (larg < arg) {
            div = larg / arg
            sum = sum * div * div + 1
            larg = arg
          } else if (arg > 0) {
            div = arg / larg
            sum += div * div
          } else sum += arg
        }
        return larg === Infinity ? Infinity : larg * sqrt(sum)
      }
    })
  }, { '../internals/export': 100 }],
  287: [function (require, module, exports) {
    const $ = require('../internals/export')
    const fails = require('../internals/fails')

    // eslint-disable-next-line es/no-math-imul -- required for testing
    const $imul = Math.imul

    const FORCED = fails(function () {
      return $imul(0xFFFFFFFF, 5) != -5 || $imul.length != 2
    })

    // `Math.imul` method
    // https://tc39.es/ecma262/#sec-math.imul
    // some WebKit versions fails with big numbers, some has wrong arity
    $({ target: 'Math', stat: true, forced: FORCED }, {
      imul: function imul (x, y) {
        const UINT16 = 0xFFFF
        const xn = +x
        const yn = +y
        const xl = UINT16 & xn
        const yl = UINT16 & yn
        return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0)
      }
    })
  }, { '../internals/export': 100, '../internals/fails': 101 }],
  288: [function (require, module, exports) {
    const $ = require('../internals/export')

    const log = Math.log
    const LOG10E = Math.LOG10E

    // `Math.log10` method
    // https://tc39.es/ecma262/#sec-math.log10
    $({ target: 'Math', stat: true }, {
      log10: function log10 (x) {
        return log(x) * LOG10E
      }
    })
  }, { '../internals/export': 100 }],
  289: [function (require, module, exports) {
    const $ = require('../internals/export')
    const log1p = require('../internals/math-log1p')

    // `Math.log1p` method
    // https://tc39.es/ecma262/#sec-math.log1p
    $({ target: 'Math', stat: true }, { log1p: log1p })
  }, { '../internals/export': 100, '../internals/math-log1p': 144 }],
  290: [function (require, module, exports) {
    const $ = require('../internals/export')

    const log = Math.log
    const LN2 = Math.LN2

    // `Math.log2` method
    // https://tc39.es/ecma262/#sec-math.log2
    $({ target: 'Math', stat: true }, {
      log2: function log2 (x) {
        return log(x) / LN2
      }
    })
  }, { '../internals/export': 100 }],
  291: [function (require, module, exports) {
    const $ = require('../internals/export')
    const sign = require('../internals/math-sign')

    // `Math.sign` method
    // https://tc39.es/ecma262/#sec-math.sign
    $({ target: 'Math', stat: true }, {
      sign: sign
    })
  }, { '../internals/export': 100, '../internals/math-sign': 145 }],
  292: [function (require, module, exports) {
    const $ = require('../internals/export')
    const fails = require('../internals/fails')
    const expm1 = require('../internals/math-expm1')

    const abs = Math.abs
    const exp = Math.exp
    const E = Math.E

    const FORCED = fails(function () {
      // eslint-disable-next-line es/no-math-sinh -- required for testing
      return Math.sinh(-2e-17) != -2e-17
    })

    // `Math.sinh` method
    // https://tc39.es/ecma262/#sec-math.sinh
    // V8 near Chromium 38 has a problem with very small numbers
    $({ target: 'Math', stat: true, forced: FORCED }, {
      sinh: function sinh (x) {
        return abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2)
      }
    })
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/math-expm1': 142 }],
  293: [function (require, module, exports) {
    const $ = require('../internals/export')
    const expm1 = require('../internals/math-expm1')

    const exp = Math.exp

    // `Math.tanh` method
    // https://tc39.es/ecma262/#sec-math.tanh
    $({ target: 'Math', stat: true }, {
      tanh: function tanh (x) {
        const a = expm1(x = +x)
        const b = expm1(-x)
        return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x))
      }
    })
  }, { '../internals/export': 100, '../internals/math-expm1': 142 }],
  294: [function (require, module, exports) {
    const setToStringTag = require('../internals/set-to-string-tag')

    // Math[@@toStringTag] property
    // https://tc39.es/ecma262/#sec-math-@@tostringtag
    setToStringTag(Math, 'Math', true)
  }, { '../internals/set-to-string-tag': 189 }],
  295: [function (require, module, exports) {
    const $ = require('../internals/export')

    const ceil = Math.ceil
    const floor = Math.floor

    // `Math.trunc` method
    // https://tc39.es/ecma262/#sec-math.trunc
    $({ target: 'Math', stat: true }, {
      trunc: function trunc (it) {
        return (it > 0 ? floor : ceil)(it)
      }
    })
  }, { '../internals/export': 100 }],
  296: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const global = require('../internals/global')
    const isForced = require('../internals/is-forced')
    const redefine = require('../internals/redefine')
    const hasOwn = require('../internals/has-own-property')
    const inheritIfRequired = require('../internals/inherit-if-required')
    const isSymbol = require('../internals/is-symbol')
    const toPrimitive = require('../internals/to-primitive')
    const fails = require('../internals/fails')
    const getOwnPropertyNames = require('../internals/object-get-own-property-names').f
    const getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f
    const defineProperty = require('../internals/object-define-property').f
    const thisNumberValue = require('../internals/this-number-value')
    const trim = require('../internals/string-trim').trim

    const NUMBER = 'Number'
    const NativeNumber = global[NUMBER]
    const NumberPrototype = NativeNumber.prototype

    // `ToNumeric` abstract operation
    // https://tc39.es/ecma262/#sec-tonumeric
    const toNumeric = function (value) {
      const primValue = toPrimitive(value, 'number')
      return typeof primValue === 'bigint' ? primValue : toNumber(primValue)
    }

    // `ToNumber` abstract operation
    // https://tc39.es/ecma262/#sec-tonumber
    var toNumber = function (argument) {
      let it = toPrimitive(argument, 'number')
      let first, third, radix, maxCode, digits, length, index, code
      if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number')
      if (typeof it === 'string' && it.length > 2) {
        it = trim(it)
        first = it.charCodeAt(0)
        if (first === 43 || first === 45) {
          third = it.charCodeAt(2)
          if (third === 88 || third === 120) return NaN // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
          switch (it.charCodeAt(1)) {
            case 66: case 98: radix = 2; maxCode = 49; break // fast equal of /^0b[01]+$/i
            case 79: case 111: radix = 8; maxCode = 55; break // fast equal of /^0o[0-7]+$/i
            default: return +it
          }
          digits = it.slice(2)
          length = digits.length
          for (index = 0; index < length; index++) {
            code = digits.charCodeAt(index)
            // parseInt parses a string to a first unavailable symbol
            // but ToNumber should return NaN if a string contains unavailable symbols
            if (code < 48 || code > maxCode) return NaN
          } return parseInt(digits, radix)
        }
      } return +it
    }

    // `Number` constructor
    // https://tc39.es/ecma262/#sec-number-constructor
    if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
      var NumberWrapper = function Number (value) {
        const n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value))
        const dummy = this
        // check on 1..constructor(foo) case
        return dummy instanceof NumberWrapper && fails(function () { thisNumberValue(dummy) })
          ? inheritIfRequired(Object(n), dummy, NumberWrapper)
          : n
      }
      for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
        // ES3:
          'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
        ).split(','), j = 0, key; keys.length > j; j++) {
        if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
          defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key))
        }
      }
      NumberWrapper.prototype = NumberPrototype
      NumberPrototype.constructor = NumberWrapper
      redefine(global, NUMBER, NumberWrapper)
    }
  }, { '../internals/descriptors': 85, '../internals/fails': 101, '../internals/global': 113, '../internals/has-own-property': 114, '../internals/inherit-if-required': 121, '../internals/is-forced': 131, '../internals/is-symbol': 136, '../internals/object-define-property': 159, '../internals/object-get-own-property-descriptor': 160, '../internals/object-get-own-property-names': 162, '../internals/redefine': 178, '../internals/string-trim': 201, '../internals/this-number-value': 203, '../internals/to-primitive': 212 }],
  297: [function (require, module, exports) {
    const $ = require('../internals/export')

    // `Number.EPSILON` constant
    // https://tc39.es/ecma262/#sec-number.epsilon
    $({ target: 'Number', stat: true }, {
      EPSILON: Math.pow(2, -52)
    })
  }, { '../internals/export': 100 }],
  298: [function (require, module, exports) {
    const $ = require('../internals/export')
    const numberIsFinite = require('../internals/number-is-finite')

    // `Number.isFinite` method
    // https://tc39.es/ecma262/#sec-number.isfinite
    $({ target: 'Number', stat: true }, { isFinite: numberIsFinite })
  }, { '../internals/export': 100, '../internals/number-is-finite': 153 }],
  299: [function (require, module, exports) {
    const $ = require('../internals/export')
    const isIntegralNumber = require('../internals/is-integral-number')

    // `Number.isInteger` method
    // https://tc39.es/ecma262/#sec-number.isinteger
    $({ target: 'Number', stat: true }, {
      isInteger: isIntegralNumber
    })
  }, { '../internals/export': 100, '../internals/is-integral-number': 132 }],
  300: [function (require, module, exports) {
    const $ = require('../internals/export')

    // `Number.isNaN` method
    // https://tc39.es/ecma262/#sec-number.isnan
    $({ target: 'Number', stat: true }, {
      isNaN: function isNaN (number) {
        // eslint-disable-next-line no-self-compare -- NaN check
        return number != number
      }
    })
  }, { '../internals/export': 100 }],
  301: [function (require, module, exports) {
    const $ = require('../internals/export')
    const isIntegralNumber = require('../internals/is-integral-number')

    const abs = Math.abs

    // `Number.isSafeInteger` method
    // https://tc39.es/ecma262/#sec-number.issafeinteger
    $({ target: 'Number', stat: true }, {
      isSafeInteger: function isSafeInteger (number) {
        return isIntegralNumber(number) && abs(number) <= 0x1FFFFFFFFFFFFF
      }
    })
  }, { '../internals/export': 100, '../internals/is-integral-number': 132 }],
  302: [function (require, module, exports) {
    const $ = require('../internals/export')

    // `Number.MAX_SAFE_INTEGER` constant
    // https://tc39.es/ecma262/#sec-number.max_safe_integer
    $({ target: 'Number', stat: true }, {
      MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
    })
  }, { '../internals/export': 100 }],
  303: [function (require, module, exports) {
    const $ = require('../internals/export')

    // `Number.MIN_SAFE_INTEGER` constant
    // https://tc39.es/ecma262/#sec-number.min_safe_integer
    $({ target: 'Number', stat: true }, {
      MIN_SAFE_INTEGER: -0x1FFFFFFFFFFFFF
    })
  }, { '../internals/export': 100 }],
  304: [function (require, module, exports) {
    const $ = require('../internals/export')
    const parseFloat = require('../internals/number-parse-float')

    // `Number.parseFloat` method
    // https://tc39.es/ecma262/#sec-number.parseFloat
    // eslint-disable-next-line es/no-number-parsefloat -- required for testing
    $({ target: 'Number', stat: true, forced: Number.parseFloat != parseFloat }, {
      parseFloat: parseFloat
    })
  }, { '../internals/export': 100, '../internals/number-parse-float': 154 }],
  305: [function (require, module, exports) {
    const $ = require('../internals/export')
    const parseInt = require('../internals/number-parse-int')

    // `Number.parseInt` method
    // https://tc39.es/ecma262/#sec-number.parseint
    // eslint-disable-next-line es/no-number-parseint -- required for testing
    $({ target: 'Number', stat: true, forced: Number.parseInt != parseInt }, {
      parseInt: parseInt
    })
  }, { '../internals/export': 100, '../internals/number-parse-int': 155 }],
  306: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    const thisNumberValue = require('../internals/this-number-value')
    const repeat = require('../internals/string-repeat')
    const fails = require('../internals/fails')

    const nativeToFixed = 1.0.toFixed
    const floor = Math.floor

    var pow = function (x, n, acc) {
      return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)
    }

    const log = function (x) {
      let n = 0
      let x2 = x
      while (x2 >= 4096) {
        n += 12
        x2 /= 4096
      }
      while (x2 >= 2) {
        n += 1
        x2 /= 2
      } return n
    }

    const multiply = function (data, n, c) {
      let index = -1
      let c2 = c
      while (++index < 6) {
        c2 += n * data[index]
        data[index] = c2 % 1e7
        c2 = floor(c2 / 1e7)
      }
    }

    const divide = function (data, n) {
      let index = 6
      let c = 0
      while (--index >= 0) {
        c += data[index]
        data[index] = floor(c / n)
        c = (c % n) * 1e7
      }
    }

    const dataToString = function (data) {
      let index = 6
      let s = ''
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          const t = String(data[index])
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t
        }
      } return s
    }

    const FORCED = nativeToFixed && (
      0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
    ) || !fails(function () {
      // V8 ~ Android 4.3-
      nativeToFixed.call({})
    })

    // `Number.prototype.toFixed` method
    // https://tc39.es/ecma262/#sec-number.prototype.tofixed
    $({ target: 'Number', proto: true, forced: FORCED }, {
      toFixed: function toFixed (fractionDigits) {
        let number = thisNumberValue(this)
        const fractDigits = toIntegerOrInfinity(fractionDigits)
        const data = [0, 0, 0, 0, 0, 0]
        let sign = ''
        let result = '0'
        let e, z, j, k

        if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits')
        // eslint-disable-next-line no-self-compare -- NaN check
        if (number != number) return 'NaN'
        if (number <= -1e21 || number >= 1e21) return String(number)
        if (number < 0) {
          sign = '-'
          number = -number
        }
        if (number > 1e-21) {
          e = log(number * pow(2, 69, 1)) - 69
          z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1)
          z *= 0x10000000000000
          e = 52 - e
          if (e > 0) {
            multiply(data, 0, z)
            j = fractDigits
            while (j >= 7) {
              multiply(data, 1e7, 0)
              j -= 7
            }
            multiply(data, pow(10, j, 1), 0)
            j = e - 1
            while (j >= 23) {
              divide(data, 1 << 23)
              j -= 23
            }
            divide(data, 1 << j)
            multiply(data, 1, 1)
            divide(data, 2)
            result = dataToString(data)
          } else {
            multiply(data, 0, z)
            multiply(data, 1 << -e, 0)
            result = dataToString(data) + repeat.call('0', fractDigits)
          }
        }
        if (fractDigits > 0) {
          k = result.length
          result = sign + (k <= fractDigits
            ? '0.' + repeat.call('0', fractDigits - k) + result
            : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits))
        } else {
          result = sign + result
        } return result
      }
    })
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/string-repeat': 199, '../internals/this-number-value': 203, '../internals/to-integer-or-infinity': 207 }],
  307: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const fails = require('../internals/fails')
    const thisNumberValue = require('../internals/this-number-value')

    const nativeToPrecision = 1.0.toPrecision

    const FORCED = fails(function () {
      // IE7-
      return nativeToPrecision.call(1, undefined) !== '1'
    }) || !fails(function () {
      // V8 ~ Android 4.3-
      nativeToPrecision.call({})
    })

    // `Number.prototype.toPrecision` method
    // https://tc39.es/ecma262/#sec-number.prototype.toprecision
    $({ target: 'Number', proto: true, forced: FORCED }, {
      toPrecision: function toPrecision (precision) {
        return precision === undefined
          ? nativeToPrecision.call(thisNumberValue(this))
          : nativeToPrecision.call(thisNumberValue(this), precision)
      }
    })
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/this-number-value': 203 }],
  308: [function (require, module, exports) {
    const $ = require('../internals/export')
    const assign = require('../internals/object-assign')

    // `Object.assign` method
    // https://tc39.es/ecma262/#sec-object.assign
    // eslint-disable-next-line es/no-object-assign -- required for testing
    $({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
      assign: assign
    })
  }, { '../internals/export': 100, '../internals/object-assign': 156 }],
  309: [function (require, module, exports) {
    const $ = require('../internals/export')
    const DESCRIPTORS = require('../internals/descriptors')
    const create = require('../internals/object-create')

    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    $({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
      create: create
    })
  }, { '../internals/descriptors': 85, '../internals/export': 100, '../internals/object-create': 157 }],
  310: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const DESCRIPTORS = require('../internals/descriptors')
    const FORCED = require('../internals/object-prototype-accessors-forced')
    const aCallable = require('../internals/a-callable')
    const toObject = require('../internals/to-object')
    const definePropertyModule = require('../internals/object-define-property')

    // `Object.prototype.__defineGetter__` method
    // https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__
    if (DESCRIPTORS) {
      $({ target: 'Object', proto: true, forced: FORCED }, {
        __defineGetter__: function __defineGetter__ (P, getter) {
          definePropertyModule.f(toObject(this), P, { get: aCallable(getter), enumerable: true, configurable: true })
        }
      })
    }
  }, { '../internals/a-callable': 42, '../internals/descriptors': 85, '../internals/export': 100, '../internals/object-define-property': 159, '../internals/object-prototype-accessors-forced': 168, '../internals/to-object': 209 }],
  311: [function (require, module, exports) {
    const $ = require('../internals/export')
    const DESCRIPTORS = require('../internals/descriptors')
    const defineProperties = require('../internals/object-define-properties')

    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    $({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
      defineProperties: defineProperties
    })
  }, { '../internals/descriptors': 85, '../internals/export': 100, '../internals/object-define-properties': 158 }],
  312: [function (require, module, exports) {
    const $ = require('../internals/export')
    const DESCRIPTORS = require('../internals/descriptors')
    const objectDefinePropertyModile = require('../internals/object-define-property')

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    $({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
      defineProperty: objectDefinePropertyModile.f
    })
  }, { '../internals/descriptors': 85, '../internals/export': 100, '../internals/object-define-property': 159 }],
  313: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const DESCRIPTORS = require('../internals/descriptors')
    const FORCED = require('../internals/object-prototype-accessors-forced')
    const aCallable = require('../internals/a-callable')
    const toObject = require('../internals/to-object')
    const definePropertyModule = require('../internals/object-define-property')

    // `Object.prototype.__defineSetter__` method
    // https://tc39.es/ecma262/#sec-object.prototype.__defineSetter__
    if (DESCRIPTORS) {
      $({ target: 'Object', proto: true, forced: FORCED }, {
        __defineSetter__: function __defineSetter__ (P, setter) {
          definePropertyModule.f(toObject(this), P, { set: aCallable(setter), enumerable: true, configurable: true })
        }
      })
    }
  }, { '../internals/a-callable': 42, '../internals/descriptors': 85, '../internals/export': 100, '../internals/object-define-property': 159, '../internals/object-prototype-accessors-forced': 168, '../internals/to-object': 209 }],
  314: [function (require, module, exports) {
    const $ = require('../internals/export')
    const $entries = require('../internals/object-to-array').entries

    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    $({ target: 'Object', stat: true }, {
      entries: function entries (O) {
        return $entries(O)
      }
    })
  }, { '../internals/export': 100, '../internals/object-to-array': 170 }],
  315: [function (require, module, exports) {
    const $ = require('../internals/export')
    const FREEZING = require('../internals/freezing')
    const fails = require('../internals/fails')
    const isObject = require('../internals/is-object')
    const onFreeze = require('../internals/internal-metadata').onFreeze

    // eslint-disable-next-line es/no-object-freeze -- safe
    const $freeze = Object.freeze
    const FAILS_ON_PRIMITIVES = fails(function () { $freeze(1) })

    // `Object.freeze` method
    // https://tc39.es/ecma262/#sec-object.freeze
    $({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
      freeze: function freeze (it) {
        return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it
      }
    })
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/freezing': 104, '../internals/internal-metadata': 124, '../internals/is-object': 133 }],
  316: [function (require, module, exports) {
    const $ = require('../internals/export')
    const iterate = require('../internals/iterate')
    const createProperty = require('../internals/create-property')

    // `Object.fromEntries` method
    // https://github.com/tc39/proposal-object-from-entries
    $({ target: 'Object', stat: true }, {
      fromEntries: function fromEntries (iterable) {
        const obj = {}
        iterate(iterable, function (k, v) {
          createProperty(obj, k, v)
        }, { AS_ENTRIES: true })
        return obj
      }
    })
  }, { '../internals/create-property': 80, '../internals/export': 100, '../internals/iterate': 137 }],
  317: [function (require, module, exports) {
    const $ = require('../internals/export')
    const fails = require('../internals/fails')
    const toIndexedObject = require('../internals/to-indexed-object')
    const nativeGetOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f
    const DESCRIPTORS = require('../internals/descriptors')

    const FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1) })
    const FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES

    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
    $({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor (it, key) {
        return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key)
      }
    })
  }, { '../internals/descriptors': 85, '../internals/export': 100, '../internals/fails': 101, '../internals/object-get-own-property-descriptor': 160, '../internals/to-indexed-object': 206 }],
  318: [function (require, module, exports) {
    const $ = require('../internals/export')
    const DESCRIPTORS = require('../internals/descriptors')
    const ownKeys = require('../internals/own-keys')
    const toIndexedObject = require('../internals/to-indexed-object')
    const getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')
    const createProperty = require('../internals/create-property')

    // `Object.getOwnPropertyDescriptors` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    $({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors (object) {
        const O = toIndexedObject(object)
        const getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
        const keys = ownKeys(O)
        const result = {}
        let index = 0
        let key, descriptor
        while (keys.length > index) {
          descriptor = getOwnPropertyDescriptor(O, key = keys[index++])
          if (descriptor !== undefined) createProperty(result, key, descriptor)
        }
        return result
      }
    })
  }, { '../internals/create-property': 80, '../internals/descriptors': 85, '../internals/export': 100, '../internals/object-get-own-property-descriptor': 160, '../internals/own-keys': 173, '../internals/to-indexed-object': 206 }],
  319: [function (require, module, exports) {
    const $ = require('../internals/export')
    const fails = require('../internals/fails')
    const getOwnPropertyNames = require('../internals/object-get-own-property-names-external').f

    // eslint-disable-next-line es/no-object-getownpropertynames -- required for testing
    const FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1) })

    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    $({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
      getOwnPropertyNames: getOwnPropertyNames
    })
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/object-get-own-property-names-external': 161 }],
  320: [function (require, module, exports) {
    const $ = require('../internals/export')
    const fails = require('../internals/fails')
    const toObject = require('../internals/to-object')
    const nativeGetPrototypeOf = require('../internals/object-get-prototype-of')
    const CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter')

    const FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1) })

    // `Object.getPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.getprototypeof
    $({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
      getPrototypeOf: function getPrototypeOf (it) {
        return nativeGetPrototypeOf(toObject(it))
      }
    })
  }, { '../internals/correct-prototype-getter': 75, '../internals/export': 100, '../internals/fails': 101, '../internals/object-get-prototype-of': 164, '../internals/to-object': 209 }],
  321: [function (require, module, exports) {
    const $ = require('../internals/export')
    const hasOwn = require('../internals/has-own-property')

    // `Object.hasOwn` method
    // https://github.com/tc39/proposal-accessible-object-hasownproperty
    $({ target: 'Object', stat: true }, {
      hasOwn: hasOwn
    })
  }, { '../internals/export': 100, '../internals/has-own-property': 114 }],
  322: [function (require, module, exports) {
    const $ = require('../internals/export')
    const fails = require('../internals/fails')
    const isObject = require('../internals/is-object')

    // eslint-disable-next-line es/no-object-isextensible -- safe
    const $isExtensible = Object.isExtensible
    const FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1) })

    // `Object.isExtensible` method
    // https://tc39.es/ecma262/#sec-object.isextensible
    $({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
      isExtensible: function isExtensible (it) {
        return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false
      }
    })
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/is-object': 133 }],
  323: [function (require, module, exports) {
    const $ = require('../internals/export')
    const fails = require('../internals/fails')
    const isObject = require('../internals/is-object')

    // eslint-disable-next-line es/no-object-isfrozen -- safe
    const $isFrozen = Object.isFrozen
    const FAILS_ON_PRIMITIVES = fails(function () { $isFrozen(1) })

    // `Object.isFrozen` method
    // https://tc39.es/ecma262/#sec-object.isfrozen
    $({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
      isFrozen: function isFrozen (it) {
        return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true
      }
    })
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/is-object': 133 }],
  324: [function (require, module, exports) {
    const $ = require('../internals/export')
    const fails = require('../internals/fails')
    const isObject = require('../internals/is-object')

    // eslint-disable-next-line es/no-object-issealed -- safe
    const $isSealed = Object.isSealed
    const FAILS_ON_PRIMITIVES = fails(function () { $isSealed(1) })

    // `Object.isSealed` method
    // https://tc39.es/ecma262/#sec-object.issealed
    $({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
      isSealed: function isSealed (it) {
        return isObject(it) ? $isSealed ? $isSealed(it) : false : true
      }
    })
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/is-object': 133 }],
  325: [function (require, module, exports) {
    const $ = require('../internals/export')
    const is = require('../internals/same-value')

    // `Object.is` method
    // https://tc39.es/ecma262/#sec-object.is
    $({ target: 'Object', stat: true }, {
      is: is
    })
  }, { '../internals/export': 100, '../internals/same-value': 186 }],
  326: [function (require, module, exports) {
    const $ = require('../internals/export')
    const toObject = require('../internals/to-object')
    const nativeKeys = require('../internals/object-keys')
    const fails = require('../internals/fails')

    const FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1) })

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    $({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
      keys: function keys (it) {
        return nativeKeys(toObject(it))
      }
    })
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/object-keys': 166, '../internals/to-object': 209 }],
  327: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const DESCRIPTORS = require('../internals/descriptors')
    const FORCED = require('../internals/object-prototype-accessors-forced')
    const toObject = require('../internals/to-object')
    const toPropertyKey = require('../internals/to-property-key')
    const getPrototypeOf = require('../internals/object-get-prototype-of')
    const getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f

    // `Object.prototype.__lookupGetter__` method
    // https://tc39.es/ecma262/#sec-object.prototype.__lookupGetter__
    if (DESCRIPTORS) {
      $({ target: 'Object', proto: true, forced: FORCED }, {
        __lookupGetter__: function __lookupGetter__ (P) {
          let O = toObject(this)
          const key = toPropertyKey(P)
          let desc
          do {
            if (desc = getOwnPropertyDescriptor(O, key)) return desc.get
          } while (O = getPrototypeOf(O))
        }
      })
    }
  }, { '../internals/descriptors': 85, '../internals/export': 100, '../internals/object-get-own-property-descriptor': 160, '../internals/object-get-prototype-of': 164, '../internals/object-prototype-accessors-forced': 168, '../internals/to-object': 209, '../internals/to-property-key': 213 }],
  328: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const DESCRIPTORS = require('../internals/descriptors')
    const FORCED = require('../internals/object-prototype-accessors-forced')
    const toObject = require('../internals/to-object')
    const toPropertyKey = require('../internals/to-property-key')
    const getPrototypeOf = require('../internals/object-get-prototype-of')
    const getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f

    // `Object.prototype.__lookupSetter__` method
    // https://tc39.es/ecma262/#sec-object.prototype.__lookupSetter__
    if (DESCRIPTORS) {
      $({ target: 'Object', proto: true, forced: FORCED }, {
        __lookupSetter__: function __lookupSetter__ (P) {
          let O = toObject(this)
          const key = toPropertyKey(P)
          let desc
          do {
            if (desc = getOwnPropertyDescriptor(O, key)) return desc.set
          } while (O = getPrototypeOf(O))
        }
      })
    }
  }, { '../internals/descriptors': 85, '../internals/export': 100, '../internals/object-get-own-property-descriptor': 160, '../internals/object-get-prototype-of': 164, '../internals/object-prototype-accessors-forced': 168, '../internals/to-object': 209, '../internals/to-property-key': 213 }],
  329: [function (require, module, exports) {
    const $ = require('../internals/export')
    const isObject = require('../internals/is-object')
    const onFreeze = require('../internals/internal-metadata').onFreeze
    const FREEZING = require('../internals/freezing')
    const fails = require('../internals/fails')

    // eslint-disable-next-line es/no-object-preventextensions -- safe
    const $preventExtensions = Object.preventExtensions
    const FAILS_ON_PRIMITIVES = fails(function () { $preventExtensions(1) })

    // `Object.preventExtensions` method
    // https://tc39.es/ecma262/#sec-object.preventextensions
    $({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
      preventExtensions: function preventExtensions (it) {
        return $preventExtensions && isObject(it) ? $preventExtensions(onFreeze(it)) : it
      }
    })
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/freezing': 104, '../internals/internal-metadata': 124, '../internals/is-object': 133 }],
  330: [function (require, module, exports) {
    const $ = require('../internals/export')
    const isObject = require('../internals/is-object')
    const onFreeze = require('../internals/internal-metadata').onFreeze
    const FREEZING = require('../internals/freezing')
    const fails = require('../internals/fails')

    // eslint-disable-next-line es/no-object-seal -- safe
    const $seal = Object.seal
    const FAILS_ON_PRIMITIVES = fails(function () { $seal(1) })

    // `Object.seal` method
    // https://tc39.es/ecma262/#sec-object.seal
    $({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
      seal: function seal (it) {
        return $seal && isObject(it) ? $seal(onFreeze(it)) : it
      }
    })
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/freezing': 104, '../internals/internal-metadata': 124, '../internals/is-object': 133 }],
  331: [function (require, module, exports) {
    const $ = require('../internals/export')
    const setPrototypeOf = require('../internals/object-set-prototype-of')

    // `Object.setPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.setprototypeof
    $({ target: 'Object', stat: true }, {
      setPrototypeOf: setPrototypeOf
    })
  }, { '../internals/export': 100, '../internals/object-set-prototype-of': 169 }],
  332: [function (require, module, exports) {
    const TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support')
    const redefine = require('../internals/redefine')
    const toString = require('../internals/object-to-string')

    // `Object.prototype.toString` method
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    if (!TO_STRING_TAG_SUPPORT) {
      redefine(Object.prototype, 'toString', toString, { unsafe: true })
    }
  }, { '../internals/object-to-string': 171, '../internals/redefine': 178, '../internals/to-string-tag-support': 214 }],
  333: [function (require, module, exports) {
    const $ = require('../internals/export')
    const $values = require('../internals/object-to-array').values

    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    $({ target: 'Object', stat: true }, {
      values: function values (O) {
        return $values(O)
      }
    })
  }, { '../internals/export': 100, '../internals/object-to-array': 170 }],
  334: [function (require, module, exports) {
    const $ = require('../internals/export')
    const $parseFloat = require('../internals/number-parse-float')

    // `parseFloat` method
    // https://tc39.es/ecma262/#sec-parsefloat-string
    $({ global: true, forced: parseFloat != $parseFloat }, {
      parseFloat: $parseFloat
    })
  }, { '../internals/export': 100, '../internals/number-parse-float': 154 }],
  335: [function (require, module, exports) {
    const $ = require('../internals/export')
    const $parseInt = require('../internals/number-parse-int')

    // `parseInt` method
    // https://tc39.es/ecma262/#sec-parseint-string-radix
    $({ global: true, forced: parseInt != $parseInt }, {
      parseInt: $parseInt
    })
  }, { '../internals/export': 100, '../internals/number-parse-int': 155 }],
  336: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const aCallable = require('../internals/a-callable')
    const newPromiseCapabilityModule = require('../internals/new-promise-capability')
    const perform = require('../internals/perform')
    const iterate = require('../internals/iterate')

    // `Promise.allSettled` method
    // https://tc39.es/ecma262/#sec-promise.allsettled
    $({ target: 'Promise', stat: true }, {
      allSettled: function allSettled (iterable) {
        const C = this
        const capability = newPromiseCapabilityModule.f(C)
        const resolve = capability.resolve
        const reject = capability.reject
        const result = perform(function () {
          const promiseResolve = aCallable(C.resolve)
          const values = []
          let counter = 0
          let remaining = 1
          iterate(iterable, function (promise) {
            const index = counter++
            let alreadyCalled = false
            values.push(undefined)
            remaining++
            promiseResolve.call(C, promise).then(function (value) {
              if (alreadyCalled) return
              alreadyCalled = true
              values[index] = { status: 'fulfilled', value: value }
              --remaining || resolve(values)
            }, function (error) {
              if (alreadyCalled) return
              alreadyCalled = true
              values[index] = { status: 'rejected', reason: error }
              --remaining || resolve(values)
            })
          })
          --remaining || resolve(values)
        })
        if (result.error) reject(result.value)
        return capability.promise
      }
    })
  }, { '../internals/a-callable': 42, '../internals/export': 100, '../internals/iterate': 137, '../internals/new-promise-capability': 151, '../internals/perform': 175 }],
  337: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const aCallable = require('../internals/a-callable')
    const getBuiltIn = require('../internals/get-built-in')
    const newPromiseCapabilityModule = require('../internals/new-promise-capability')
    const perform = require('../internals/perform')
    const iterate = require('../internals/iterate')

    const PROMISE_ANY_ERROR = 'No one promise resolved'

    // `Promise.any` method
    // https://tc39.es/ecma262/#sec-promise.any
    $({ target: 'Promise', stat: true }, {
      any: function any (iterable) {
        const C = this
        const capability = newPromiseCapabilityModule.f(C)
        const resolve = capability.resolve
        const reject = capability.reject
        const result = perform(function () {
          const promiseResolve = aCallable(C.resolve)
          const errors = []
          let counter = 0
          let remaining = 1
          let alreadyResolved = false
          iterate(iterable, function (promise) {
            const index = counter++
            let alreadyRejected = false
            errors.push(undefined)
            remaining++
            promiseResolve.call(C, promise).then(function (value) {
              if (alreadyRejected || alreadyResolved) return
              alreadyResolved = true
              resolve(value)
            }, function (error) {
              if (alreadyRejected || alreadyResolved) return
              alreadyRejected = true
              errors[index] = error
              --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR))
            })
          })
          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR))
        })
        if (result.error) reject(result.value)
        return capability.promise
      }
    })
  }, { '../internals/a-callable': 42, '../internals/export': 100, '../internals/get-built-in': 108, '../internals/iterate': 137, '../internals/new-promise-capability': 151, '../internals/perform': 175 }],
  338: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const IS_PURE = require('../internals/is-pure')
    const NativePromise = require('../internals/native-promise-constructor')
    const fails = require('../internals/fails')
    const getBuiltIn = require('../internals/get-built-in')
    const isCallable = require('../internals/is-callable')
    const speciesConstructor = require('../internals/species-constructor')
    const promiseResolve = require('../internals/promise-resolve')
    const redefine = require('../internals/redefine')

    // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
    const NON_GENERIC = !!NativePromise && fails(function () {
      NativePromise.prototype.finally.call({ then: function () { /* empty */ } }, function () { /* empty */ })
    })

    // `Promise.prototype.finally` method
    // https://tc39.es/ecma262/#sec-promise.prototype.finally
    $({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
      finally: function (onFinally) {
        const C = speciesConstructor(this, getBuiltIn('Promise'))
        const isFunction = isCallable(onFinally)
        return this.then(
          isFunction
            ? function (x) {
              return promiseResolve(C, onFinally()).then(function () { return x })
            }
            : onFinally,
          isFunction
            ? function (e) {
              return promiseResolve(C, onFinally()).then(function () { throw e })
            }
            : onFinally
        )
      }
    })

    // makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
    if (!IS_PURE && isCallable(NativePromise)) {
      const method = getBuiltIn('Promise').prototype.finally
      if (NativePromise.prototype.finally !== method) {
        redefine(NativePromise.prototype, 'finally', method, { unsafe: true })
      }
    }
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/get-built-in': 108, '../internals/is-callable': 128, '../internals/is-pure': 134, '../internals/native-promise-constructor': 147, '../internals/promise-resolve': 176, '../internals/redefine': 178, '../internals/species-constructor': 193 }],
  339: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const IS_PURE = require('../internals/is-pure')
    const global = require('../internals/global')
    const getBuiltIn = require('../internals/get-built-in')
    const NativePromise = require('../internals/native-promise-constructor')
    const redefine = require('../internals/redefine')
    const redefineAll = require('../internals/redefine-all')
    const setPrototypeOf = require('../internals/object-set-prototype-of')
    const setToStringTag = require('../internals/set-to-string-tag')
    const setSpecies = require('../internals/set-species')
    const aCallable = require('../internals/a-callable')
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')
    const anInstance = require('../internals/an-instance')
    const inspectSource = require('../internals/inspect-source')
    const iterate = require('../internals/iterate')
    const checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration')
    const speciesConstructor = require('../internals/species-constructor')
    const task = require('../internals/task').set
    const microtask = require('../internals/microtask')
    const promiseResolve = require('../internals/promise-resolve')
    const hostReportErrors = require('../internals/host-report-errors')
    const newPromiseCapabilityModule = require('../internals/new-promise-capability')
    const perform = require('../internals/perform')
    const InternalStateModule = require('../internals/internal-state')
    const isForced = require('../internals/is-forced')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const IS_BROWSER = require('../internals/engine-is-browser')
    const IS_NODE = require('../internals/engine-is-node')
    const V8_VERSION = require('../internals/engine-v8-version')

    const SPECIES = wellKnownSymbol('species')
    const PROMISE = 'Promise'
    const getInternalState = InternalStateModule.get
    const setInternalState = InternalStateModule.set
    const getInternalPromiseState = InternalStateModule.getterFor(PROMISE)
    const NativePromisePrototype = NativePromise && NativePromise.prototype
    let PromiseConstructor = NativePromise
    let PromiseConstructorPrototype = NativePromisePrototype
    const TypeError = global.TypeError
    const document = global.document
    const process = global.process
    let newPromiseCapability = newPromiseCapabilityModule.f
    const newGenericPromiseCapability = newPromiseCapability
    const DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent)
    const NATIVE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent)
    const UNHANDLED_REJECTION = 'unhandledrejection'
    const REJECTION_HANDLED = 'rejectionhandled'
    const PENDING = 0
    const FULFILLED = 1
    const REJECTED = 2
    const HANDLED = 1
    const UNHANDLED = 2
    let SUBCLASSING = false
    let Internal, OwnPromiseCapability, PromiseWrapper, nativeThen

    const FORCED = isForced(PROMISE, function () {
      const PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor)
      const GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor)
      // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // We can't detect it synchronously, so just check versions
      if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true
      // We need Promise#finally in the pure version for preventing prototype pollution
      if (IS_PURE && !PromiseConstructorPrototype.finally) return true
      // We can't use @@species feature detection in V8 since it causes
      // deoptimization and performance degradation
      // https://github.com/zloirock/core-js/issues/679
      if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false
      // Detect correctness of subclassing with @@species support
      const promise = new PromiseConstructor(function (resolve) { resolve(1) })
      const FakePromise = function (exec) {
        exec(function () { /* empty */ }, function () { /* empty */ })
      }
      const constructor = promise.constructor = {}
      constructor[SPECIES] = FakePromise
      SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise
      if (!SUBCLASSING) return true
      // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT
    })

    const INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
      PromiseConstructor.all(iterable).catch(function () { /* empty */ })
    })

    // helpers
    const isThenable = function (it) {
      let then
      return isObject(it) && isCallable(then = it.then) ? then : false
    }

    const notify = function (state, isReject) {
      if (state.notified) return
      state.notified = true
      const chain = state.reactions
      microtask(function () {
        const value = state.value
        const ok = state.state == FULFILLED
        let index = 0
        // variable length - can't use forEach
        while (chain.length > index) {
          const reaction = chain[index++]
          const handler = ok ? reaction.ok : reaction.fail
          const resolve = reaction.resolve
          const reject = reaction.reject
          const domain = reaction.domain
          var result, then, exited
          try {
            if (handler) {
              if (!ok) {
                if (state.rejection === UNHANDLED) onHandleUnhandled(state)
                state.rejection = HANDLED
              }
              if (handler === true) result = value
              else {
                if (domain) domain.enter()
                result = handler(value) // can throw
                if (domain) {
                  domain.exit()
                  exited = true
                }
              }
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'))
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject)
              } else resolve(result)
            } else reject(value)
          } catch (error) {
            if (domain && !exited) domain.exit()
            reject(error)
          }
        }
        state.reactions = []
        state.notified = false
        if (isReject && !state.rejection) onUnhandled(state)
      })
    }

    const dispatchEvent = function (name, promise, reason) {
      let event, handler
      if (DISPATCH_EVENT) {
        event = document.createEvent('Event')
        event.promise = promise
        event.reason = reason
        event.initEvent(name, false, true)
        global.dispatchEvent(event)
      } else event = { promise: promise, reason: reason }
      if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event)
      else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason)
    }

    var onUnhandled = function (state) {
      task.call(global, function () {
        const promise = state.facade
        const value = state.value
        const IS_UNHANDLED = isUnhandled(state)
        let result
        if (IS_UNHANDLED) {
          result = perform(function () {
            if (IS_NODE) {
              process.emit('unhandledRejection', value, promise)
            } else dispatchEvent(UNHANDLED_REJECTION, promise, value)
          })
          // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
          state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED
          if (result.error) throw result.value
        }
      })
    }

    var isUnhandled = function (state) {
      return state.rejection !== HANDLED && !state.parent
    }

    var onHandleUnhandled = function (state) {
      task.call(global, function () {
        const promise = state.facade
        if (IS_NODE) {
          process.emit('rejectionHandled', promise)
        } else dispatchEvent(REJECTION_HANDLED, promise, state.value)
      })
    }

    const bind = function (fn, state, unwrap) {
      return function (value) {
        fn(state, value, unwrap)
      }
    }

    const internalReject = function (state, value, unwrap) {
      if (state.done) return
      state.done = true
      if (unwrap) state = unwrap
      state.value = value
      state.state = REJECTED
      notify(state, true)
    }

    var internalResolve = function (state, value, unwrap) {
      if (state.done) return
      state.done = true
      if (unwrap) state = unwrap
      try {
        if (state.facade === value) throw TypeError("Promise can't be resolved itself")
        const then = isThenable(value)
        if (then) {
          microtask(function () {
            const wrapper = { done: false }
            try {
              then.call(value,
                bind(internalResolve, wrapper, state),
                bind(internalReject, wrapper, state)
              )
            } catch (error) {
              internalReject(wrapper, error, state)
            }
          })
        } else {
          state.value = value
          state.state = FULFILLED
          notify(state, false)
        }
      } catch (error) {
        internalReject({ done: false }, error, state)
      }
    }

    // constructor polyfill
    if (FORCED) {
      // 25.4.3.1 Promise(executor)
      PromiseConstructor = function Promise (executor) {
        anInstance(this, PromiseConstructor, PROMISE)
        aCallable(executor)
        Internal.call(this)
        const state = getInternalState(this)
        try {
          executor(bind(internalResolve, state), bind(internalReject, state))
        } catch (error) {
          internalReject(state, error)
        }
      }
      PromiseConstructorPrototype = PromiseConstructor.prototype
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      Internal = function Promise (executor) {
        setInternalState(this, {
          type: PROMISE,
          done: false,
          notified: false,
          parent: false,
          reactions: [],
          rejection: false,
          state: PENDING,
          value: undefined
        })
      }
      Internal.prototype = redefineAll(PromiseConstructorPrototype, {
        // `Promise.prototype.then` method
        // https://tc39.es/ecma262/#sec-promise.prototype.then
        then: function then (onFulfilled, onRejected) {
          const state = getInternalPromiseState(this)
          const reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor))
          reaction.ok = isCallable(onFulfilled) ? onFulfilled : true
          reaction.fail = isCallable(onRejected) && onRejected
          reaction.domain = IS_NODE ? process.domain : undefined
          state.parent = true
          state.reactions.push(reaction)
          if (state.state != PENDING) notify(state, false)
          return reaction.promise
        },
        // `Promise.prototype.catch` method
        // https://tc39.es/ecma262/#sec-promise.prototype.catch
        catch: function (onRejected) {
          return this.then(undefined, onRejected)
        }
      })
      OwnPromiseCapability = function () {
        const promise = new Internal()
        const state = getInternalState(promise)
        this.promise = promise
        this.resolve = bind(internalResolve, state)
        this.reject = bind(internalReject, state)
      }
      newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
        return C === PromiseConstructor || C === PromiseWrapper
          ? new OwnPromiseCapability(C)
          : newGenericPromiseCapability(C)
      }

      if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
        nativeThen = NativePromisePrototype.then

        if (!SUBCLASSING) {
          // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
          redefine(NativePromisePrototype, 'then', function then (onFulfilled, onRejected) {
            const that = this
            return new PromiseConstructor(function (resolve, reject) {
              nativeThen.call(that, resolve, reject)
            }).then(onFulfilled, onRejected)
            // https://github.com/zloirock/core-js/issues/640
          }, { unsafe: true })

          // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
          redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype.catch, { unsafe: true })
        }

        // make `.constructor === Promise` work for native promise-based APIs
        try {
          delete NativePromisePrototype.constructor
        } catch (error) { /* empty */ }

        // make `instanceof Promise` work for native promise-based APIs
        if (setPrototypeOf) {
          setPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype)
        }
      }
    }

    $({ global: true, wrap: true, forced: FORCED }, {
      Promise: PromiseConstructor
    })

    setToStringTag(PromiseConstructor, PROMISE, false, true)
    setSpecies(PROMISE)

    PromiseWrapper = getBuiltIn(PROMISE)

    // statics
    $({ target: PROMISE, stat: true, forced: FORCED }, {
      // `Promise.reject` method
      // https://tc39.es/ecma262/#sec-promise.reject
      reject: function reject (r) {
        const capability = newPromiseCapability(this)
        capability.reject.call(undefined, r)
        return capability.promise
      }
    })

    $({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
      // `Promise.resolve` method
      // https://tc39.es/ecma262/#sec-promise.resolve
      resolve: function resolve (x) {
        return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x)
      }
    })

    $({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
      // `Promise.all` method
      // https://tc39.es/ecma262/#sec-promise.all
      all: function all (iterable) {
        const C = this
        const capability = newPromiseCapability(C)
        const resolve = capability.resolve
        const reject = capability.reject
        const result = perform(function () {
          const $promiseResolve = aCallable(C.resolve)
          const values = []
          let counter = 0
          let remaining = 1
          iterate(iterable, function (promise) {
            const index = counter++
            let alreadyCalled = false
            values.push(undefined)
            remaining++
            $promiseResolve.call(C, promise).then(function (value) {
              if (alreadyCalled) return
              alreadyCalled = true
              values[index] = value
              --remaining || resolve(values)
            }, reject)
          })
          --remaining || resolve(values)
        })
        if (result.error) reject(result.value)
        return capability.promise
      },
      // `Promise.race` method
      // https://tc39.es/ecma262/#sec-promise.race
      race: function race (iterable) {
        const C = this
        const capability = newPromiseCapability(C)
        const reject = capability.reject
        const result = perform(function () {
          const $promiseResolve = aCallable(C.resolve)
          iterate(iterable, function (promise) {
            $promiseResolve.call(C, promise).then(capability.resolve, reject)
          })
        })
        if (result.error) reject(result.value)
        return capability.promise
      }
    })
  }, { '../internals/a-callable': 42, '../internals/an-instance': 47, '../internals/check-correctness-of-iteration': 67, '../internals/engine-is-browser': 90, '../internals/engine-is-node': 94, '../internals/engine-v8-version': 97, '../internals/export': 100, '../internals/get-built-in': 108, '../internals/global': 113, '../internals/host-report-errors': 116, '../internals/inspect-source': 122, '../internals/internal-state': 125, '../internals/is-callable': 128, '../internals/is-forced': 131, '../internals/is-object': 133, '../internals/is-pure': 134, '../internals/iterate': 137, '../internals/microtask': 146, '../internals/native-promise-constructor': 147, '../internals/new-promise-capability': 151, '../internals/object-set-prototype-of': 169, '../internals/perform': 175, '../internals/promise-resolve': 176, '../internals/redefine': 178, '../internals/redefine-all': 177, '../internals/set-species': 188, '../internals/set-to-string-tag': 189, '../internals/species-constructor': 193, '../internals/task': 202, '../internals/well-known-symbol': 225 }],
  340: [function (require, module, exports) {
    const $ = require('../internals/export')
    const getBuiltIn = require('../internals/get-built-in')
    const aCallable = require('../internals/a-callable')
    const anObject = require('../internals/an-object')
    const fails = require('../internals/fails')

    const nativeApply = getBuiltIn('Reflect', 'apply')
    const functionApply = Function.apply

    // MS Edge argumentsList argument is optional
    const OPTIONAL_ARGUMENTS_LIST = !fails(function () {
      nativeApply(function () { /* empty */ })
    })

    // `Reflect.apply` method
    // https://tc39.es/ecma262/#sec-reflect.apply
    $({ target: 'Reflect', stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {
      apply: function apply (target, thisArgument, argumentsList) {
        aCallable(target)
        anObject(argumentsList)
        return nativeApply
          ? nativeApply(target, thisArgument, argumentsList)
          : functionApply.call(target, thisArgument, argumentsList)
      }
    })
  }, { '../internals/a-callable': 42, '../internals/an-object': 48, '../internals/export': 100, '../internals/fails': 101, '../internals/get-built-in': 108 }],
  341: [function (require, module, exports) {
    const $ = require('../internals/export')
    const getBuiltIn = require('../internals/get-built-in')
    const aConstructor = require('../internals/a-constructor')
    const anObject = require('../internals/an-object')
    const isObject = require('../internals/is-object')
    const create = require('../internals/object-create')
    const bind = require('../internals/function-bind')
    const fails = require('../internals/fails')

    const nativeConstruct = getBuiltIn('Reflect', 'construct')

    // `Reflect.construct` method
    // https://tc39.es/ecma262/#sec-reflect.construct
    // MS Edge supports only 2 arguments and argumentsList argument is optional
    // FF Nightly sets third argument as `new.target`, but does not create `this` from it
    const NEW_TARGET_BUG = fails(function () {
      function F () { /* empty */ }
      return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F)
    })
    const ARGS_BUG = !fails(function () {
      nativeConstruct(function () { /* empty */ })
    })
    const FORCED = NEW_TARGET_BUG || ARGS_BUG

    $({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
      construct: function construct (Target, args /* , newTarget */) {
        aConstructor(Target)
        anObject(args)
        const newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2])
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
          const $args = [null]
          $args.push.apply($args, args)
          return new (bind.apply(Target, $args))()
        }
        // with altered newTarget, not support built-in constructors
        const proto = newTarget.prototype
        const instance = create(isObject(proto) ? proto : Object.prototype)
        const result = Function.apply.call(Target, instance, args)
        return isObject(result) ? result : instance
      }
    })
  }, { '../internals/a-constructor': 43, '../internals/an-object': 48, '../internals/export': 100, '../internals/fails': 101, '../internals/function-bind': 106, '../internals/get-built-in': 108, '../internals/is-object': 133, '../internals/object-create': 157 }],
  342: [function (require, module, exports) {
    const $ = require('../internals/export')
    const DESCRIPTORS = require('../internals/descriptors')
    const anObject = require('../internals/an-object')
    const toPropertyKey = require('../internals/to-property-key')
    const definePropertyModule = require('../internals/object-define-property')
    const fails = require('../internals/fails')

    // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
    const ERROR_INSTEAD_OF_FALSE = fails(function () {
      // eslint-disable-next-line es/no-reflect -- required for testing
      Reflect.defineProperty(definePropertyModule.f({}, 1, { value: 1 }), 1, { value: 2 })
    })

    // `Reflect.defineProperty` method
    // https://tc39.es/ecma262/#sec-reflect.defineproperty
    $({ target: 'Reflect', stat: true, forced: ERROR_INSTEAD_OF_FALSE, sham: !DESCRIPTORS }, {
      defineProperty: function defineProperty (target, propertyKey, attributes) {
        anObject(target)
        const key = toPropertyKey(propertyKey)
        anObject(attributes)
        try {
          definePropertyModule.f(target, key, attributes)
          return true
        } catch (error) {
          return false
        }
      }
    })
  }, { '../internals/an-object': 48, '../internals/descriptors': 85, '../internals/export': 100, '../internals/fails': 101, '../internals/object-define-property': 159, '../internals/to-property-key': 213 }],
  343: [function (require, module, exports) {
    const $ = require('../internals/export')
    const anObject = require('../internals/an-object')
    const getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f

    // `Reflect.deleteProperty` method
    // https://tc39.es/ecma262/#sec-reflect.deleteproperty
    $({ target: 'Reflect', stat: true }, {
      deleteProperty: function deleteProperty (target, propertyKey) {
        const descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey)
        return descriptor && !descriptor.configurable ? false : delete target[propertyKey]
      }
    })
  }, { '../internals/an-object': 48, '../internals/export': 100, '../internals/object-get-own-property-descriptor': 160 }],
  344: [function (require, module, exports) {
    const $ = require('../internals/export')
    const DESCRIPTORS = require('../internals/descriptors')
    const anObject = require('../internals/an-object')
    const getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')

    // `Reflect.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
    $({ target: 'Reflect', stat: true, sham: !DESCRIPTORS }, {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor (target, propertyKey) {
        return getOwnPropertyDescriptorModule.f(anObject(target), propertyKey)
      }
    })
  }, { '../internals/an-object': 48, '../internals/descriptors': 85, '../internals/export': 100, '../internals/object-get-own-property-descriptor': 160 }],
  345: [function (require, module, exports) {
    const $ = require('../internals/export')
    const anObject = require('../internals/an-object')
    const objectGetPrototypeOf = require('../internals/object-get-prototype-of')
    const CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter')

    // `Reflect.getPrototypeOf` method
    // https://tc39.es/ecma262/#sec-reflect.getprototypeof
    $({ target: 'Reflect', stat: true, sham: !CORRECT_PROTOTYPE_GETTER }, {
      getPrototypeOf: function getPrototypeOf (target) {
        return objectGetPrototypeOf(anObject(target))
      }
    })
  }, { '../internals/an-object': 48, '../internals/correct-prototype-getter': 75, '../internals/export': 100, '../internals/object-get-prototype-of': 164 }],
  346: [function (require, module, exports) {
    const $ = require('../internals/export')
    const isObject = require('../internals/is-object')
    const anObject = require('../internals/an-object')
    const isDataDescriptor = require('../internals/is-data-descriptor')
    const getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')
    const getPrototypeOf = require('../internals/object-get-prototype-of')

    // `Reflect.get` method
    // https://tc39.es/ecma262/#sec-reflect.get
    function get (target, propertyKey /* , receiver */) {
      const receiver = arguments.length < 3 ? target : arguments[2]
      let descriptor, prototype
      if (anObject(target) === receiver) return target[propertyKey]
      descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)
      if (descriptor) {
        return isDataDescriptor(descriptor)
          ? descriptor.value
          : descriptor.get === undefined ? undefined : descriptor.get.call(receiver)
      }
      if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver)
    }

    $({ target: 'Reflect', stat: true }, {
      get: get
    })
  }, { '../internals/an-object': 48, '../internals/export': 100, '../internals/is-data-descriptor': 130, '../internals/is-object': 133, '../internals/object-get-own-property-descriptor': 160, '../internals/object-get-prototype-of': 164 }],
  347: [function (require, module, exports) {
    const $ = require('../internals/export')

    // `Reflect.has` method
    // https://tc39.es/ecma262/#sec-reflect.has
    $({ target: 'Reflect', stat: true }, {
      has: function has (target, propertyKey) {
        return propertyKey in target
      }
    })
  }, { '../internals/export': 100 }],
  348: [function (require, module, exports) {
    const $ = require('../internals/export')
    const anObject = require('../internals/an-object')

    // eslint-disable-next-line es/no-object-isextensible -- safe
    const objectIsExtensible = Object.isExtensible

    // `Reflect.isExtensible` method
    // https://tc39.es/ecma262/#sec-reflect.isextensible
    $({ target: 'Reflect', stat: true }, {
      isExtensible: function isExtensible (target) {
        anObject(target)
        return objectIsExtensible ? objectIsExtensible(target) : true
      }
    })
  }, { '../internals/an-object': 48, '../internals/export': 100 }],
  349: [function (require, module, exports) {
    const $ = require('../internals/export')
    const ownKeys = require('../internals/own-keys')

    // `Reflect.ownKeys` method
    // https://tc39.es/ecma262/#sec-reflect.ownkeys
    $({ target: 'Reflect', stat: true }, {
      ownKeys: ownKeys
    })
  }, { '../internals/export': 100, '../internals/own-keys': 173 }],
  350: [function (require, module, exports) {
    const $ = require('../internals/export')
    const getBuiltIn = require('../internals/get-built-in')
    const anObject = require('../internals/an-object')
    const FREEZING = require('../internals/freezing')

    // `Reflect.preventExtensions` method
    // https://tc39.es/ecma262/#sec-reflect.preventextensions
    $({ target: 'Reflect', stat: true, sham: !FREEZING }, {
      preventExtensions: function preventExtensions (target) {
        anObject(target)
        try {
          const objectPreventExtensions = getBuiltIn('Object', 'preventExtensions')
          if (objectPreventExtensions) objectPreventExtensions(target)
          return true
        } catch (error) {
          return false
        }
      }
    })
  }, { '../internals/an-object': 48, '../internals/export': 100, '../internals/freezing': 104, '../internals/get-built-in': 108 }],
  351: [function (require, module, exports) {
    const $ = require('../internals/export')
    const anObject = require('../internals/an-object')
    const aPossiblePrototype = require('../internals/a-possible-prototype')
    const objectSetPrototypeOf = require('../internals/object-set-prototype-of')

    // `Reflect.setPrototypeOf` method
    // https://tc39.es/ecma262/#sec-reflect.setprototypeof
    if (objectSetPrototypeOf) {
      $({ target: 'Reflect', stat: true }, {
        setPrototypeOf: function setPrototypeOf (target, proto) {
          anObject(target)
          aPossiblePrototype(proto)
          try {
            objectSetPrototypeOf(target, proto)
            return true
          } catch (error) {
            return false
          }
        }
      })
    }
  }, { '../internals/a-possible-prototype': 44, '../internals/an-object': 48, '../internals/export': 100, '../internals/object-set-prototype-of': 169 }],
  352: [function (require, module, exports) {
    const $ = require('../internals/export')
    const anObject = require('../internals/an-object')
    const isObject = require('../internals/is-object')
    const isDataDescriptor = require('../internals/is-data-descriptor')
    const fails = require('../internals/fails')
    const definePropertyModule = require('../internals/object-define-property')
    const getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')
    const getPrototypeOf = require('../internals/object-get-prototype-of')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')

    // `Reflect.set` method
    // https://tc39.es/ecma262/#sec-reflect.set
    function set (target, propertyKey, V /* , receiver */) {
      const receiver = arguments.length < 4 ? target : arguments[3]
      let ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey)
      let existingDescriptor, prototype, setter
      if (!ownDescriptor) {
        if (isObject(prototype = getPrototypeOf(target))) {
          return set(prototype, propertyKey, V, receiver)
        }
        ownDescriptor = createPropertyDescriptor(0)
      }
      if (isDataDescriptor(ownDescriptor)) {
        if (ownDescriptor.writable === false || !isObject(receiver)) return false
        if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
          if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false
          existingDescriptor.value = V
          definePropertyModule.f(receiver, propertyKey, existingDescriptor)
        } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V))
      } else {
        setter = ownDescriptor.set
        if (setter === undefined) return false
        setter.call(receiver, V)
      } return true
    }

    // MS Edge 17-18 Reflect.set allows setting the property to object
    // with non-writable property on the prototype
    const MS_EDGE_BUG = fails(function () {
      const Constructor = function () { /* empty */ }
      const object = definePropertyModule.f(new Constructor(), 'a', { configurable: true })
      // eslint-disable-next-line es/no-reflect -- required for testing
      return Reflect.set(Constructor.prototype, 'a', 1, object) !== false
    })

    $({ target: 'Reflect', stat: true, forced: MS_EDGE_BUG }, {
      set: set
    })
  }, { '../internals/an-object': 48, '../internals/create-property-descriptor': 79, '../internals/export': 100, '../internals/fails': 101, '../internals/is-data-descriptor': 130, '../internals/is-object': 133, '../internals/object-define-property': 159, '../internals/object-get-own-property-descriptor': 160, '../internals/object-get-prototype-of': 164 }],
  353: [function (require, module, exports) {
    const $ = require('../internals/export')
    const global = require('../internals/global')
    const setToStringTag = require('../internals/set-to-string-tag')

    $({ global: true }, { Reflect: {} })

    // Reflect[@@toStringTag] property
    // https://tc39.es/ecma262/#sec-reflect-@@tostringtag
    setToStringTag(global.Reflect, 'Reflect', true)
  }, { '../internals/export': 100, '../internals/global': 113, '../internals/set-to-string-tag': 189 }],
  354: [function (require, module, exports) {
    const DESCRIPTORS = require('../internals/descriptors')
    const global = require('../internals/global')
    const isForced = require('../internals/is-forced')
    const inheritIfRequired = require('../internals/inherit-if-required')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const defineProperty = require('../internals/object-define-property').f
    const getOwnPropertyNames = require('../internals/object-get-own-property-names').f
    const isRegExp = require('../internals/is-regexp')
    const toString = require('../internals/to-string')
    const getFlags = require('../internals/regexp-flags')
    const stickyHelpers = require('../internals/regexp-sticky-helpers')
    const redefine = require('../internals/redefine')
    const fails = require('../internals/fails')
    const hasOwn = require('../internals/has-own-property')
    const enforceInternalState = require('../internals/internal-state').enforce
    const setSpecies = require('../internals/set-species')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all')
    const UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg')

    const MATCH = wellKnownSymbol('match')
    const NativeRegExp = global.RegExp
    const RegExpPrototype = NativeRegExp.prototype
    // TODO: Use only propper RegExpIdentifierName
    const IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/
    const re1 = /a/g
    const re2 = /a/g

    // "new" should create a new object, old webkit bug
    const CORRECT_NEW = new NativeRegExp(re1) !== re1

    const UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y

    const BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i'
  }))

    const handleDotAll = function (string) {
      const length = string.length
      let index = 0
      let result = ''
      let brackets = false
      let chr
      for (; index <= length; index++) {
        chr = string.charAt(index)
        if (chr === '\\') {
          result += chr + string.charAt(++index)
          continue
        }
        if (!brackets && chr === '.') {
          result += '[\\s\\S]'
        } else {
          if (chr === '[') {
            brackets = true
          } else if (chr === ']') {
            brackets = false
          } result += chr
        }
      } return result
    }

    const handleNCG = function (string) {
      const length = string.length
      let index = 0
      let result = ''
      const named = []
      const names = {}
      let brackets = false
      let ncg = false
      let groupid = 0
      let groupname = ''
      let chr
      for (; index <= length; index++) {
        chr = string.charAt(index)
        if (chr === '\\') {
          chr = chr + string.charAt(++index)
        } else if (chr === ']') {
          brackets = false
        } else if (!brackets) {
          switch (true) {
            case chr === '[':
              brackets = true
              break
            case chr === '(':
              if (IS_NCG.test(string.slice(index + 1))) {
                index += 2
                ncg = true
              }
              result += chr
              groupid++
              continue
            case chr === '>' && ncg:
              if (groupname === '' || hasOwn(names, groupname)) {
                throw new SyntaxError('Invalid capture group name')
              }
              names[groupname] = true
              named.push([groupname, groupid])
              ncg = false
              groupname = ''
              continue
          }
        }
        if (ncg) groupname += chr
        else result += chr
      } return [result, named]
    }

    // `RegExp` constructor
    // https://tc39.es/ecma262/#sec-regexp-constructor
    if (isForced('RegExp', BASE_FORCED)) {
      var RegExpWrapper = function RegExp (pattern, flags) {
        const thisIsRegExp = this instanceof RegExpWrapper
        const patternIsRegExp = isRegExp(pattern)
        const flagsAreUndefined = flags === undefined
        let groups = []
        let rawPattern = pattern
        let rawFlags, dotAll, sticky, handled, result, state

        if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
          return pattern
        }

        if (patternIsRegExp || pattern instanceof RegExpWrapper) {
          pattern = pattern.source
          if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags.call(rawPattern)
        }

        pattern = pattern === undefined ? '' : toString(pattern)
        flags = flags === undefined ? '' : toString(flags)
        rawPattern = pattern

        if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
          dotAll = !!flags && flags.indexOf('s') > -1
          if (dotAll) flags = flags.replace(/s/g, '')
        }

        rawFlags = flags

        if (UNSUPPORTED_Y && 'sticky' in re1) {
          sticky = !!flags && flags.indexOf('y') > -1
          if (sticky) flags = flags.replace(/y/g, '')
        }

        if (UNSUPPORTED_NCG) {
          handled = handleNCG(pattern)
          pattern = handled[0]
          groups = handled[1]
        }

        result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper)

        if (dotAll || sticky || groups.length) {
          state = enforceInternalState(result)
          if (dotAll) {
            state.dotAll = true
            state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags)
          }
          if (sticky) state.sticky = true
          if (groups.length) state.groups = groups
        }

        if (pattern !== rawPattern) {
          try {
          // fails in old engines, but we have no alternatives for unsupported regex syntax
            createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern)
          } catch (error) { /* empty */ }
        }

        return result
      }

      const proxy = function (key) {
        key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
          configurable: true,
          get: function () { return NativeRegExp[key] },
          set: function (it) { NativeRegExp[key] = it }
        })
      }

      for (let keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
        proxy(keys[index++])
      }

      RegExpPrototype.constructor = RegExpWrapper
      RegExpWrapper.prototype = RegExpPrototype
      redefine(global, 'RegExp', RegExpWrapper)
    }

    // https://tc39.es/ecma262/#sec-get-regexp-@@species
    setSpecies('RegExp')
  }, { '../internals/create-non-enumerable-property': 78, '../internals/descriptors': 85, '../internals/fails': 101, '../internals/global': 113, '../internals/has-own-property': 114, '../internals/inherit-if-required': 121, '../internals/internal-state': 125, '../internals/is-forced': 131, '../internals/is-regexp': 135, '../internals/object-define-property': 159, '../internals/object-get-own-property-names': 162, '../internals/redefine': 178, '../internals/regexp-flags': 181, '../internals/regexp-sticky-helpers': 182, '../internals/regexp-unsupported-dot-all': 183, '../internals/regexp-unsupported-ncg': 184, '../internals/set-species': 188, '../internals/to-string': 215, '../internals/well-known-symbol': 225 }],
  355: [function (require, module, exports) {
    const DESCRIPTORS = require('../internals/descriptors')
    const UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all')
    const defineProperty = require('../internals/object-define-property').f
    const getInternalState = require('../internals/internal-state').get
    const RegExpPrototype = RegExp.prototype

    // `RegExp.prototype.dotAll` getter
    // https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
    if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {
      defineProperty(RegExpPrototype, 'dotAll', {
        configurable: true,
        get: function () {
          if (this === RegExpPrototype) return undefined
          // We can't use InternalStateModule.getterFor because
          // we don't add metadata for regexps created by a literal.
          if (this instanceof RegExp) {
            return !!getInternalState(this).dotAll
          }
          throw TypeError('Incompatible receiver, RegExp required')
        }
      })
    }
  }, { '../internals/descriptors': 85, '../internals/internal-state': 125, '../internals/object-define-property': 159, '../internals/regexp-unsupported-dot-all': 183 }],
  356: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const exec = require('../internals/regexp-exec')

    // `RegExp.prototype.exec` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.exec
    $({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
      exec: exec
    })
  }, { '../internals/export': 100, '../internals/regexp-exec': 180 }],
  357: [function (require, module, exports) {
    const DESCRIPTORS = require('../internals/descriptors')
    const objectDefinePropertyModule = require('../internals/object-define-property')
    const regExpFlags = require('../internals/regexp-flags')
    const fails = require('../internals/fails')

    const FORCED = DESCRIPTORS && fails(function () {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call({ dotAll: true, sticky: true }) !== 'sy'
    })

    // `RegExp.prototype.flags` getter
    // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
    if (FORCED) {
      objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
        configurable: true,
        get: regExpFlags
      })
    }
  }, { '../internals/descriptors': 85, '../internals/fails': 101, '../internals/object-define-property': 159, '../internals/regexp-flags': 181 }],
  358: [function (require, module, exports) {
    const DESCRIPTORS = require('../internals/descriptors')
    const UNSUPPORTED_Y = require('../internals/regexp-sticky-helpers').UNSUPPORTED_Y
    const defineProperty = require('../internals/object-define-property').f
    const getInternalState = require('../internals/internal-state').get
    const RegExpPrototype = RegExp.prototype

    // `RegExp.prototype.sticky` getter
    // https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
    if (DESCRIPTORS && UNSUPPORTED_Y) {
      defineProperty(RegExpPrototype, 'sticky', {
        configurable: true,
        get: function () {
          if (this === RegExpPrototype) return undefined
          // We can't use InternalStateModule.getterFor because
          // we don't add metadata for regexps created by a literal.
          if (this instanceof RegExp) {
            return !!getInternalState(this).sticky
          }
          throw TypeError('Incompatible receiver, RegExp required')
        }
      })
    }
  }, { '../internals/descriptors': 85, '../internals/internal-state': 125, '../internals/object-define-property': 159, '../internals/regexp-sticky-helpers': 182 }],
  359: [function (require, module, exports) {
    'use strict'
    // TODO: Remove from `core-js@4` since it's moved to entry points
    require('../modules/es.regexp.exec')
    const $ = require('../internals/export')
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')

    const DELEGATES_TO_EXEC = (function () {
      let execCalled = false
      const re = /[ac]/
      re.exec = function () {
        execCalled = true
        return /./.exec.apply(this, arguments)
      }
      return re.test('abc') === true && execCalled
    }())

    const nativeTest = /./.test

    // `RegExp.prototype.test` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.test
    $({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
      test: function (str) {
        const exec = this.exec
        if (!isCallable(exec)) return nativeTest.call(this, str)
        const result = exec.call(this, str)
        if (result !== null && !isObject(result)) {
          throw new Error('RegExp exec method returned something other than an Object or null')
        }
        return !!result
      }
    })
  }, { '../internals/export': 100, '../internals/is-callable': 128, '../internals/is-object': 133, '../modules/es.regexp.exec': 356 }],
  360: [function (require, module, exports) {
    'use strict'
    const PROPER_FUNCTION_NAME = require('../internals/function-name').PROPER
    const redefine = require('../internals/redefine')
    const anObject = require('../internals/an-object')
    const $toString = require('../internals/to-string')
    const fails = require('../internals/fails')
    const flags = require('../internals/regexp-flags')

    const TO_STRING = 'toString'
    const RegExpPrototype = RegExp.prototype
    const nativeToString = RegExpPrototype[TO_STRING]

    const NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b' })
    // FF44- RegExp#toString has a wrong name
    const INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING

    // `RegExp.prototype.toString` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
    if (NOT_GENERIC || INCORRECT_NAME) {
      redefine(RegExp.prototype, TO_STRING, function toString () {
        const R = anObject(this)
        const p = $toString(R.source)
        const rf = R.flags
        const f = $toString(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf)
        return '/' + p + '/' + f
      }, { unsafe: true })
    }
  }, { '../internals/an-object': 48, '../internals/fails': 101, '../internals/function-name': 107, '../internals/redefine': 178, '../internals/regexp-flags': 181, '../internals/to-string': 215 }],
  361: [function (require, module, exports) {
    'use strict'
    const collection = require('../internals/collection')
    const collectionStrong = require('../internals/collection-strong')

    // `Set` constructor
    // https://tc39.es/ecma262/#sec-set-objects
    module.exports = collection('Set', function (init) {
      return function Set () { return init(this, arguments.length ? arguments[0] : undefined) }
    }, collectionStrong)
  }, { '../internals/collection': 72, '../internals/collection-strong': 70 }],
  362: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.anchor` method
    // https://tc39.es/ecma262/#sec-string.prototype.anchor
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('anchor') }, {
      anchor: function anchor (name) {
        return createHTML(this, 'a', 'name', name)
      }
    })
  }, { '../internals/create-html': 76, '../internals/export': 100, '../internals/string-html-forced': 194 }],
  363: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    const toString = require('../internals/to-string')
    const fails = require('../internals/fails')

    const FORCED = fails(function () {
      return '𠮷'.at(0) !== '\uD842'
    })

    // `String.prototype.at` method
    // https://github.com/tc39/proposal-relative-indexing-method
    $({ target: 'String', proto: true, forced: FORCED }, {
      at: function at (index) {
        const S = toString(requireObjectCoercible(this))
        const len = S.length
        const relativeIndex = toIntegerOrInfinity(index)
        const k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex
        return (k < 0 || k >= len) ? undefined : S.charAt(k)
      }
    })
  }, { '../internals/export': 100, '../internals/fails': 101, '../internals/require-object-coercible': 185, '../internals/to-integer-or-infinity': 207, '../internals/to-string': 215 }],
  364: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.big` method
    // https://tc39.es/ecma262/#sec-string.prototype.big
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('big') }, {
      big: function big () {
        return createHTML(this, 'big', '', '')
      }
    })
  }, { '../internals/create-html': 76, '../internals/export': 100, '../internals/string-html-forced': 194 }],
  365: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.blink` method
    // https://tc39.es/ecma262/#sec-string.prototype.blink
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('blink') }, {
      blink: function blink () {
        return createHTML(this, 'blink', '', '')
      }
    })
  }, { '../internals/create-html': 76, '../internals/export': 100, '../internals/string-html-forced': 194 }],
  366: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.bold` method
    // https://tc39.es/ecma262/#sec-string.prototype.bold
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('bold') }, {
      bold: function bold () {
        return createHTML(this, 'b', '', '')
      }
    })
  }, { '../internals/create-html': 76, '../internals/export': 100, '../internals/string-html-forced': 194 }],
  367: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const codeAt = require('../internals/string-multibyte').codeAt

    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    $({ target: 'String', proto: true }, {
      codePointAt: function codePointAt (pos) {
        return codeAt(this, pos)
      }
    })
  }, { '../internals/export': 100, '../internals/string-multibyte': 195 }],
  368: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f
    const toLength = require('../internals/to-length')
    const toString = require('../internals/to-string')
    const notARegExp = require('../internals/not-a-regexp')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const correctIsRegExpLogic = require('../internals/correct-is-regexp-logic')
    const IS_PURE = require('../internals/is-pure')

    // eslint-disable-next-line es/no-string-prototype-endswith -- safe
    const $endsWith = ''.endsWith
    const min = Math.min

    const CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith')
    // https://github.com/zloirock/core-js/pull/702
    const MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!(function () {
      const descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith')
      return descriptor && !descriptor.writable
    }())

    // `String.prototype.endsWith` method
    // https://tc39.es/ecma262/#sec-string.prototype.endswith
    $({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
      endsWith: function endsWith (searchString /* , endPosition = @length */) {
        const that = toString(requireObjectCoercible(this))
        notARegExp(searchString)
        const endPosition = arguments.length > 1 ? arguments[1] : undefined
        const len = that.length
        const end = endPosition === undefined ? len : min(toLength(endPosition), len)
        const search = toString(searchString)
        return $endsWith
          ? $endsWith.call(that, search, end)
          : that.slice(end - search.length, end) === search
      }
    })
  }, { '../internals/correct-is-regexp-logic': 74, '../internals/export': 100, '../internals/is-pure': 134, '../internals/not-a-regexp': 152, '../internals/object-get-own-property-descriptor': 160, '../internals/require-object-coercible': 185, '../internals/to-length': 208, '../internals/to-string': 215 }],
  369: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.fixed` method
    // https://tc39.es/ecma262/#sec-string.prototype.fixed
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {
      fixed: function fixed () {
        return createHTML(this, 'tt', '', '')
      }
    })
  }, { '../internals/create-html': 76, '../internals/export': 100, '../internals/string-html-forced': 194 }],
  370: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.fontcolor` method
    // https://tc39.es/ecma262/#sec-string.prototype.fontcolor
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fontcolor') }, {
      fontcolor: function fontcolor (color) {
        return createHTML(this, 'font', 'color', color)
      }
    })
  }, { '../internals/create-html': 76, '../internals/export': 100, '../internals/string-html-forced': 194 }],
  371: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.fontsize` method
    // https://tc39.es/ecma262/#sec-string.prototype.fontsize
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fontsize') }, {
      fontsize: function fontsize (size) {
        return createHTML(this, 'font', 'size', size)
      }
    })
  }, { '../internals/create-html': 76, '../internals/export': 100, '../internals/string-html-forced': 194 }],
  372: [function (require, module, exports) {
    const $ = require('../internals/export')
    const toAbsoluteIndex = require('../internals/to-absolute-index')

    const fromCharCode = String.fromCharCode
    // eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
    const $fromCodePoint = String.fromCodePoint

    // length should be 1, old FF problem
    const INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1

    // `String.fromCodePoint` method
    // https://tc39.es/ecma262/#sec-string.fromcodepoint
    $({ target: 'String', stat: true, forced: INCORRECT_LENGTH }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      fromCodePoint: function fromCodePoint (x) {
        const elements = []
        const length = arguments.length
        let i = 0
        let code
        while (length > i) {
          code = +arguments[i++]
          if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw RangeError(code + ' is not a valid code point')
          elements.push(code < 0x10000
            ? fromCharCode(code)
            : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00)
          )
        } return elements.join('')
      }
    })
  }, { '../internals/export': 100, '../internals/to-absolute-index': 204 }],
  373: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const notARegExp = require('../internals/not-a-regexp')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const toString = require('../internals/to-string')
    const correctIsRegExpLogic = require('../internals/correct-is-regexp-logic')

    // `String.prototype.includes` method
    // https://tc39.es/ecma262/#sec-string.prototype.includes
    $({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
      includes: function includes (searchString /* , position = 0 */) {
        return !!~toString(requireObjectCoercible(this))
          .indexOf(toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/correct-is-regexp-logic': 74, '../internals/export': 100, '../internals/not-a-regexp': 152, '../internals/require-object-coercible': 185, '../internals/to-string': 215 }],
  374: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.italics` method
    // https://tc39.es/ecma262/#sec-string.prototype.italics
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('italics') }, {
      italics: function italics () {
        return createHTML(this, 'i', '', '')
      }
    })
  }, { '../internals/create-html': 76, '../internals/export': 100, '../internals/string-html-forced': 194 }],
  375: [function (require, module, exports) {
    'use strict'
    const charAt = require('../internals/string-multibyte').charAt
    const toString = require('../internals/to-string')
    const InternalStateModule = require('../internals/internal-state')
    const defineIterator = require('../internals/define-iterator')

    const STRING_ITERATOR = 'String Iterator'
    const setInternalState = InternalStateModule.set
    const getInternalState = InternalStateModule.getterFor(STRING_ITERATOR)

    // `String.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
    defineIterator(String, 'String', function (iterated) {
      setInternalState(this, {
        type: STRING_ITERATOR,
        string: toString(iterated),
        index: 0
      })
      // `%StringIteratorPrototype%.next` method
      // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
    }, function next () {
      const state = getInternalState(this)
      const string = state.string
      const index = state.index
      let point
      if (index >= string.length) return { value: undefined, done: true }
      point = charAt(string, index)
      state.index += point.length
      return { value: point, done: false }
    })
  }, { '../internals/define-iterator': 83, '../internals/internal-state': 125, '../internals/string-multibyte': 195, '../internals/to-string': 215 }],
  376: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.link` method
    // https://tc39.es/ecma262/#sec-string.prototype.link
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
      link: function link (url) {
        return createHTML(this, 'a', 'href', url)
      }
    })
  }, { '../internals/create-html': 76, '../internals/export': 100, '../internals/string-html-forced': 194 }],
  377: [function (require, module, exports) {
    'use strict'
    /* eslint-disable es/no-string-prototype-matchall -- safe */
    const $ = require('../internals/export')
    const createIteratorConstructor = require('../internals/create-iterator-constructor')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const toLength = require('../internals/to-length')
    const toString = require('../internals/to-string')
    const anObject = require('../internals/an-object')
    const classof = require('../internals/classof-raw')
    const isRegExp = require('../internals/is-regexp')
    const getRegExpFlags = require('../internals/regexp-flags')
    const getMethod = require('../internals/get-method')
    const redefine = require('../internals/redefine')
    const fails = require('../internals/fails')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const speciesConstructor = require('../internals/species-constructor')
    const advanceStringIndex = require('../internals/advance-string-index')
    const regExpExec = require('../internals/regexp-exec-abstract')
    const InternalStateModule = require('../internals/internal-state')
    const IS_PURE = require('../internals/is-pure')

    const MATCH_ALL = wellKnownSymbol('matchAll')
    const REGEXP_STRING = 'RegExp String'
    const REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator'
    const setInternalState = InternalStateModule.set
    const getInternalState = InternalStateModule.getterFor(REGEXP_STRING_ITERATOR)
    const RegExpPrototype = RegExp.prototype
    const nativeMatchAll = ''.matchAll

    const WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails(function () {
      'a'.matchAll(/./)
    })

    // eslint-disable-next-line max-len -- ignore
    const $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator (regexp, string, global, fullUnicode) {
      setInternalState(this, {
        type: REGEXP_STRING_ITERATOR,
        regexp: regexp,
        string: string,
        global: global,
        unicode: fullUnicode,
        done: false
      })
    }, REGEXP_STRING, function next () {
      const state = getInternalState(this)
      if (state.done) return { value: undefined, done: true }
      const R = state.regexp
      const S = state.string
      const match = regExpExec(R, S)
      if (match === null) return { value: undefined, done: state.done = true }
      if (state.global) {
        if (toString(match[0]) === '') R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode)
        return { value: match, done: false }
      }
      state.done = true
      return { value: match, done: false }
    })

    const $matchAll = function (string) {
      const R = anObject(this)
      const S = toString(string)
      let C, flagsValue, flags, matcher, global, fullUnicode
      C = speciesConstructor(R, RegExp)
      flagsValue = R.flags
      if (flagsValue === undefined && R instanceof RegExp && !('flags' in RegExpPrototype)) {
        flagsValue = getRegExpFlags.call(R)
      }
      flags = flagsValue === undefined ? '' : toString(flagsValue)
      matcher = new C(C === RegExp ? R.source : R, flags)
      global = !!~flags.indexOf('g')
      fullUnicode = !!~flags.indexOf('u')
      matcher.lastIndex = toLength(R.lastIndex)
      return new $RegExpStringIterator(matcher, S, global, fullUnicode)
    }

    // `String.prototype.matchAll` method
    // https://tc39.es/ecma262/#sec-string.prototype.matchall
    $({ target: 'String', proto: true, forced: WORKS_WITH_NON_GLOBAL_REGEX }, {
      matchAll: function matchAll (regexp) {
        const O = requireObjectCoercible(this)
        let flags, S, matcher, rx
        if (regexp != null) {
          if (isRegExp(regexp)) {
            flags = toString(requireObjectCoercible('flags' in RegExpPrototype
              ? regexp.flags
              : getRegExpFlags.call(regexp)
            ))
            if (!~flags.indexOf('g')) throw TypeError('`.matchAll` does not allow non-global regexes')
          }
          if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments)
          matcher = getMethod(regexp, MATCH_ALL)
          if (matcher === undefined && IS_PURE && classof(regexp) == 'RegExp') matcher = $matchAll
          if (matcher) return matcher.call(regexp, O)
        } else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments)
        S = toString(O)
        rx = new RegExp(regexp, 'g')
        return IS_PURE ? $matchAll.call(rx, S) : rx[MATCH_ALL](S)
      }
    })

    IS_PURE || MATCH_ALL in RegExpPrototype || redefine(RegExpPrototype, MATCH_ALL, $matchAll)
  }, { '../internals/advance-string-index': 46, '../internals/an-object': 48, '../internals/classof-raw': 68, '../internals/create-iterator-constructor': 77, '../internals/export': 100, '../internals/fails': 101, '../internals/get-method': 111, '../internals/internal-state': 125, '../internals/is-pure': 134, '../internals/is-regexp': 135, '../internals/redefine': 178, '../internals/regexp-exec-abstract': 179, '../internals/regexp-flags': 181, '../internals/require-object-coercible': 185, '../internals/species-constructor': 193, '../internals/to-length': 208, '../internals/to-string': 215, '../internals/well-known-symbol': 225 }],
  378: [function (require, module, exports) {
    'use strict'
    const fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic')
    const anObject = require('../internals/an-object')
    const toLength = require('../internals/to-length')
    const toString = require('../internals/to-string')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const getMethod = require('../internals/get-method')
    const advanceStringIndex = require('../internals/advance-string-index')
    const regExpExec = require('../internals/regexp-exec-abstract')

    // @@match logic
    fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
      return [
        // `String.prototype.match` method
        // https://tc39.es/ecma262/#sec-string.prototype.match
        function match (regexp) {
          const O = requireObjectCoercible(this)
          const matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH)
          return matcher ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](toString(O))
        },
        // `RegExp.prototype[@@match]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
        function (string) {
          const rx = anObject(this)
          const S = toString(string)
          const res = maybeCallNative(nativeMatch, rx, S)

          if (res.done) return res.value

          if (!rx.global) return regExpExec(rx, S)

          const fullUnicode = rx.unicode
          rx.lastIndex = 0
          const A = []
          let n = 0
          let result
          while ((result = regExpExec(rx, S)) !== null) {
            const matchStr = toString(result[0])
            A[n] = matchStr
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode)
            n++
          }
          return n === 0 ? null : A
        }
      ]
    })
  }, { '../internals/advance-string-index': 46, '../internals/an-object': 48, '../internals/fix-regexp-well-known-symbol-logic': 102, '../internals/get-method': 111, '../internals/regexp-exec-abstract': 179, '../internals/require-object-coercible': 185, '../internals/to-length': 208, '../internals/to-string': 215 }],
  379: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $padEnd = require('../internals/string-pad').end
    const WEBKIT_BUG = require('../internals/string-pad-webkit-bug')

    // `String.prototype.padEnd` method
    // https://tc39.es/ecma262/#sec-string.prototype.padend
    $({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
      padEnd: function padEnd (maxLength /* , fillString = ' ' */) {
        return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/export': 100, '../internals/string-pad': 197, '../internals/string-pad-webkit-bug': 196 }],
  380: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $padStart = require('../internals/string-pad').start
    const WEBKIT_BUG = require('../internals/string-pad-webkit-bug')

    // `String.prototype.padStart` method
    // https://tc39.es/ecma262/#sec-string.prototype.padstart
    $({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
      padStart: function padStart (maxLength /* , fillString = ' ' */) {
        return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/export': 100, '../internals/string-pad': 197, '../internals/string-pad-webkit-bug': 196 }],
  381: [function (require, module, exports) {
    const $ = require('../internals/export')
    const toIndexedObject = require('../internals/to-indexed-object')
    const toObject = require('../internals/to-object')
    const toString = require('../internals/to-string')
    const lengthOfArrayLike = require('../internals/length-of-array-like')

    const ArrayPrototype = Array.prototype
    const push = ArrayPrototype.push
    const join = ArrayPrototype.join

    // `String.raw` method
    // https://tc39.es/ecma262/#sec-string.raw
    $({ target: 'String', stat: true }, {
      raw: function raw (template) {
        const rawTemplate = toIndexedObject(toObject(template).raw)
        const literalSegments = lengthOfArrayLike(rawTemplate)
        const argumentsLength = arguments.length
        const elements = []
        let i = 0
        while (literalSegments > i) {
          push.call(elements, toString(rawTemplate[i++]))
          if (i === literalSegments) return join.call(elements, '')
          if (i < argumentsLength) push.call(elements, toString(arguments[i]))
        }
      }
    })
  }, { '../internals/export': 100, '../internals/length-of-array-like': 141, '../internals/to-indexed-object': 206, '../internals/to-object': 209, '../internals/to-string': 215 }],
  382: [function (require, module, exports) {
    const $ = require('../internals/export')
    const repeat = require('../internals/string-repeat')

    // `String.prototype.repeat` method
    // https://tc39.es/ecma262/#sec-string.prototype.repeat
    $({ target: 'String', proto: true }, {
      repeat: repeat
    })
  }, { '../internals/export': 100, '../internals/string-repeat': 199 }],
  383: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const isCallable = require('../internals/is-callable')
    const isRegExp = require('../internals/is-regexp')
    const toString = require('../internals/to-string')
    const getMethod = require('../internals/get-method')
    const getRegExpFlags = require('../internals/regexp-flags')
    const getSubstitution = require('../internals/get-substitution')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const IS_PURE = require('../internals/is-pure')

    const REPLACE = wellKnownSymbol('replace')
    const RegExpPrototype = RegExp.prototype
    const max = Math.max

    const stringIndexOf = function (string, searchValue, fromIndex) {
      if (fromIndex > string.length) return -1
      if (searchValue === '') return fromIndex
      return string.indexOf(searchValue, fromIndex)
    }

    // `String.prototype.replaceAll` method
    // https://tc39.es/ecma262/#sec-string.prototype.replaceall
    $({ target: 'String', proto: true }, {
      replaceAll: function replaceAll (searchValue, replaceValue) {
        const O = requireObjectCoercible(this)
        let IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement
        let position = 0
        let endOfLastMatch = 0
        let result = ''
        if (searchValue != null) {
          IS_REG_EXP = isRegExp(searchValue)
          if (IS_REG_EXP) {
            flags = toString(requireObjectCoercible('flags' in RegExpPrototype
              ? searchValue.flags
              : getRegExpFlags.call(searchValue)
            ))
            if (!~flags.indexOf('g')) throw TypeError('`.replaceAll` does not allow non-global regexes')
          }
          replacer = getMethod(searchValue, REPLACE)
          if (replacer) {
            return replacer.call(searchValue, O, replaceValue)
          } else if (IS_PURE && IS_REG_EXP) {
            return toString(O).replace(searchValue, replaceValue)
          }
        }
        string = toString(O)
        searchString = toString(searchValue)
        functionalReplace = isCallable(replaceValue)
        if (!functionalReplace) replaceValue = toString(replaceValue)
        searchLength = searchString.length
        advanceBy = max(1, searchLength)
        position = stringIndexOf(string, searchString, 0)
        while (position !== -1) {
          if (functionalReplace) {
            replacement = toString(replaceValue(searchString, position, string))
          } else {
            replacement = getSubstitution(searchString, string, position, [], undefined, replaceValue)
          }
          result += string.slice(endOfLastMatch, position) + replacement
          endOfLastMatch = position + searchLength
          position = stringIndexOf(string, searchString, position + advanceBy)
        }
        if (endOfLastMatch < string.length) {
          result += string.slice(endOfLastMatch)
        }
        return result
      }
    })
  }, { '../internals/export': 100, '../internals/get-method': 111, '../internals/get-substitution': 112, '../internals/is-callable': 128, '../internals/is-pure': 134, '../internals/is-regexp': 135, '../internals/regexp-flags': 181, '../internals/require-object-coercible': 185, '../internals/to-string': 215, '../internals/well-known-symbol': 225 }],
  384: [function (require, module, exports) {
    'use strict'
    const fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic')
    const fails = require('../internals/fails')
    const anObject = require('../internals/an-object')
    const isCallable = require('../internals/is-callable')
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    const toLength = require('../internals/to-length')
    const toString = require('../internals/to-string')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const advanceStringIndex = require('../internals/advance-string-index')
    const getMethod = require('../internals/get-method')
    const getSubstitution = require('../internals/get-substitution')
    const regExpExec = require('../internals/regexp-exec-abstract')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const REPLACE = wellKnownSymbol('replace')
    const max = Math.max
    const min = Math.min

    const maybeToString = function (it) {
      return it === undefined ? it : String(it)
    }

    // IE <= 11 replaces $0 with the whole match, as if it was $&
    // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
    const REPLACE_KEEPS_$0 = (function () {
      // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
      return 'a'.replace(/./, '$0') === '$0'
    })()

    // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
    const REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
      if (/./[REPLACE]) {
        return /./[REPLACE]('a', '$0') === ''
      }
      return false
    })()

    const REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
      const re = /./
      re.exec = function () {
        const result = []
        result.groups = { a: '7' }
        return result
      }
      // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
      return ''.replace(re, '$<a>') !== '7'
    })

    // @@replace logic
    fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
      const UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0'

      return [
        // `String.prototype.replace` method
        // https://tc39.es/ecma262/#sec-string.prototype.replace
        function replace (searchValue, replaceValue) {
          const O = requireObjectCoercible(this)
          const replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE)
          return replacer
            ? replacer.call(searchValue, O, replaceValue)
            : nativeReplace.call(toString(O), searchValue, replaceValue)
        },
        // `RegExp.prototype[@@replace]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
        function (string, replaceValue) {
          const rx = anObject(this)
          const S = toString(string)

          if (
            typeof replaceValue === 'string' &&
        replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
        replaceValue.indexOf('$<') === -1
          ) {
            const res = maybeCallNative(nativeReplace, rx, S, replaceValue)
            if (res.done) return res.value
          }

          const functionalReplace = isCallable(replaceValue)
          if (!functionalReplace) replaceValue = toString(replaceValue)

          const global = rx.global
          if (global) {
            var fullUnicode = rx.unicode
            rx.lastIndex = 0
          }
          const results = []
          while (true) {
            var result = regExpExec(rx, S)
            if (result === null) break

            results.push(result)
            if (!global) break

            const matchStr = toString(result[0])
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode)
          }

          let accumulatedResult = ''
          let nextSourcePosition = 0
          for (let i = 0; i < results.length; i++) {
            result = results[i]

            const matched = toString(result[0])
            const position = max(min(toIntegerOrInfinity(result.index), S.length), 0)
            const captures = []
            // NOTE: This is equivalent to
            //   captures = result.slice(1).map(maybeToString)
            // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
            // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
            // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
            for (let j = 1; j < result.length; j++) captures.push(maybeToString(result[j]))
            const namedCaptures = result.groups
            if (functionalReplace) {
              const replacerArgs = [matched].concat(captures, position, S)
              if (namedCaptures !== undefined) replacerArgs.push(namedCaptures)
              var replacement = toString(replaceValue.apply(undefined, replacerArgs))
            } else {
              replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue)
            }
            if (position >= nextSourcePosition) {
              accumulatedResult += S.slice(nextSourcePosition, position) + replacement
              nextSourcePosition = position + matched.length
            }
          }
          return accumulatedResult + S.slice(nextSourcePosition)
        }
      ]
    }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE)
  }, { '../internals/advance-string-index': 46, '../internals/an-object': 48, '../internals/fails': 101, '../internals/fix-regexp-well-known-symbol-logic': 102, '../internals/get-method': 111, '../internals/get-substitution': 112, '../internals/is-callable': 128, '../internals/regexp-exec-abstract': 179, '../internals/require-object-coercible': 185, '../internals/to-integer-or-infinity': 207, '../internals/to-length': 208, '../internals/to-string': 215, '../internals/well-known-symbol': 225 }],
  385: [function (require, module, exports) {
    'use strict'
    const fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic')
    const anObject = require('../internals/an-object')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const sameValue = require('../internals/same-value')
    const toString = require('../internals/to-string')
    const getMethod = require('../internals/get-method')
    const regExpExec = require('../internals/regexp-exec-abstract')

    // @@search logic
    fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
      return [
        // `String.prototype.search` method
        // https://tc39.es/ecma262/#sec-string.prototype.search
        function search (regexp) {
          const O = requireObjectCoercible(this)
          const searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH)
          return searcher ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](toString(O))
        },
        // `RegExp.prototype[@@search]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
        function (string) {
          const rx = anObject(this)
          const S = toString(string)
          const res = maybeCallNative(nativeSearch, rx, S)

          if (res.done) return res.value

          const previousLastIndex = rx.lastIndex
          if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0
          const result = regExpExec(rx, S)
          if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex
          return result === null ? -1 : result.index
        }
      ]
    })
  }, { '../internals/an-object': 48, '../internals/fix-regexp-well-known-symbol-logic': 102, '../internals/get-method': 111, '../internals/regexp-exec-abstract': 179, '../internals/require-object-coercible': 185, '../internals/same-value': 186, '../internals/to-string': 215 }],
  386: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.small` method
    // https://tc39.es/ecma262/#sec-string.prototype.small
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('small') }, {
      small: function small () {
        return createHTML(this, 'small', '', '')
      }
    })
  }, { '../internals/create-html': 76, '../internals/export': 100, '../internals/string-html-forced': 194 }],
  387: [function (require, module, exports) {
    'use strict'
    const fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic')
    const isRegExp = require('../internals/is-regexp')
    const anObject = require('../internals/an-object')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const speciesConstructor = require('../internals/species-constructor')
    const advanceStringIndex = require('../internals/advance-string-index')
    const toLength = require('../internals/to-length')
    const toString = require('../internals/to-string')
    const getMethod = require('../internals/get-method')
    const callRegExpExec = require('../internals/regexp-exec-abstract')
    const regexpExec = require('../internals/regexp-exec')
    const stickyHelpers = require('../internals/regexp-sticky-helpers')
    const fails = require('../internals/fails')

    const UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y
    const arrayPush = [].push
    const min = Math.min
    const MAX_UINT32 = 0xFFFFFFFF

    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    // Weex JS has frozen built-in prototypes, so use try / catch wrapper
    const SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
      // eslint-disable-next-line regexp/no-empty-group -- required for testing
      const re = /(?:)/
      const originalExec = re.exec
      re.exec = function () { return originalExec.apply(this, arguments) }
      const result = 'ab'.split(re)
      return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b'
    })

    // @@split logic
    fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
      let internalSplit
      if (
        'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
      ) {
        // based on es5-shim implementation, need to rework it
        internalSplit = function (separator, limit) {
          const string = toString(requireObjectCoercible(this))
          const lim = limit === undefined ? MAX_UINT32 : limit >>> 0
          if (lim === 0) return []
          if (separator === undefined) return [string]
          // If `separator` is not a regex, use native split
          if (!isRegExp(separator)) {
            return nativeSplit.call(string, separator, lim)
          }
          const output = []
          const flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '')
          let lastLastIndex = 0
          // Make `global` and avoid `lastIndex` issues by working with a copy
          const separatorCopy = new RegExp(separator.source, flags + 'g')
          let match, lastIndex, lastLength
          while (match = regexpExec.call(separatorCopy, string)) {
            lastIndex = separatorCopy.lastIndex
            if (lastIndex > lastLastIndex) {
              output.push(string.slice(lastLastIndex, match.index))
              if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1))
              lastLength = match[0].length
              lastLastIndex = lastIndex
              if (output.length >= lim) break
            }
            if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++ // Avoid an infinite loop
          }
          if (lastLastIndex === string.length) {
            if (lastLength || !separatorCopy.test('')) output.push('')
          } else output.push(string.slice(lastLastIndex))
          return output.length > lim ? output.slice(0, lim) : output
        }
      // Chakra, V8
      } else if ('0'.split(undefined, 0).length) {
        internalSplit = function (separator, limit) {
          return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit)
        }
      } else internalSplit = nativeSplit

      return [
        // `String.prototype.split` method
        // https://tc39.es/ecma262/#sec-string.prototype.split
        function split (separator, limit) {
          const O = requireObjectCoercible(this)
          const splitter = separator == undefined ? undefined : getMethod(separator, SPLIT)
          return splitter
            ? splitter.call(separator, O, limit)
            : internalSplit.call(toString(O), separator, limit)
        },
        // `RegExp.prototype[@@split]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function (string, limit) {
          const rx = anObject(this)
          const S = toString(string)
          const res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit)

          if (res.done) return res.value

          const C = speciesConstructor(rx, RegExp)

          const unicodeMatching = rx.unicode
          const flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y')

          // ^(? + rx + ) is needed, in combination with some S slicing, to
          // simulate the 'y' flag.
          const splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags)
          const lim = limit === undefined ? MAX_UINT32 : limit >>> 0
          if (lim === 0) return []
          if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : []
          let p = 0
          let q = 0
          const A = []
          while (q < S.length) {
            splitter.lastIndex = UNSUPPORTED_Y ? 0 : q
            const z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S)
            var e
            if (
              z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
            ) {
              q = advanceStringIndex(S, q, unicodeMatching)
            } else {
              A.push(S.slice(p, q))
              if (A.length === lim) return A
              for (let i = 1; i <= z.length - 1; i++) {
                A.push(z[i])
                if (A.length === lim) return A
              }
              q = p = e
            }
          }
          A.push(S.slice(p))
          return A
        }
      ]
    }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y)
  }, { '../internals/advance-string-index': 46, '../internals/an-object': 48, '../internals/fails': 101, '../internals/fix-regexp-well-known-symbol-logic': 102, '../internals/get-method': 111, '../internals/is-regexp': 135, '../internals/regexp-exec': 180, '../internals/regexp-exec-abstract': 179, '../internals/regexp-sticky-helpers': 182, '../internals/require-object-coercible': 185, '../internals/species-constructor': 193, '../internals/to-length': 208, '../internals/to-string': 215 }],
  388: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f
    const toLength = require('../internals/to-length')
    const toString = require('../internals/to-string')
    const notARegExp = require('../internals/not-a-regexp')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const correctIsRegExpLogic = require('../internals/correct-is-regexp-logic')
    const IS_PURE = require('../internals/is-pure')

    // eslint-disable-next-line es/no-string-prototype-startswith -- safe
    const $startsWith = ''.startsWith
    const min = Math.min

    const CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith')
    // https://github.com/zloirock/core-js/pull/702
    const MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!(function () {
      const descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith')
      return descriptor && !descriptor.writable
    }())

    // `String.prototype.startsWith` method
    // https://tc39.es/ecma262/#sec-string.prototype.startswith
    $({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
      startsWith: function startsWith (searchString /* , position = 0 */) {
        const that = toString(requireObjectCoercible(this))
        notARegExp(searchString)
        const index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length))
        const search = toString(searchString)
        return $startsWith
          ? $startsWith.call(that, search, index)
          : that.slice(index, index + search.length) === search
      }
    })
  }, { '../internals/correct-is-regexp-logic': 74, '../internals/export': 100, '../internals/is-pure': 134, '../internals/not-a-regexp': 152, '../internals/object-get-own-property-descriptor': 160, '../internals/require-object-coercible': 185, '../internals/to-length': 208, '../internals/to-string': 215 }],
  389: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.strike` method
    // https://tc39.es/ecma262/#sec-string.prototype.strike
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('strike') }, {
      strike: function strike () {
        return createHTML(this, 'strike', '', '')
      }
    })
  }, { '../internals/create-html': 76, '../internals/export': 100, '../internals/string-html-forced': 194 }],
  390: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.sub` method
    // https://tc39.es/ecma262/#sec-string.prototype.sub
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('sub') }, {
      sub: function sub () {
        return createHTML(this, 'sub', '', '')
      }
    })
  }, { '../internals/create-html': 76, '../internals/export': 100, '../internals/string-html-forced': 194 }],
  391: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    const toString = require('../internals/to-string')

    const slice = ''.slice
    const max = Math.max
    const min = Math.min

    // eslint-disable-next-line unicorn/prefer-string-slice -- required for testing
    const FORCED = !''.substr || 'ab'.substr(-1) !== 'b'

    // `String.prototype.substr` method
    // https://tc39.es/ecma262/#sec-string.prototype.substr
    $({ target: 'String', proto: true, forced: FORCED }, {
      substr: function substr (start, length) {
        const that = toString(requireObjectCoercible(this))
        const size = that.length
        let intStart = toIntegerOrInfinity(start)
        let intLength, intEnd
        if (intStart === Infinity) intStart = 0
        if (intStart < 0) intStart = max(size + intStart, 0)
        intLength = length === undefined ? size : toIntegerOrInfinity(length)
        if (intLength <= 0 || intLength === Infinity) return ''
        intEnd = min(intStart + intLength, size)
        return intStart >= intEnd ? '' : slice.call(that, intStart, intEnd)
      }
    })
  }, { '../internals/export': 100, '../internals/require-object-coercible': 185, '../internals/to-integer-or-infinity': 207, '../internals/to-string': 215 }],
  392: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.sup` method
    // https://tc39.es/ecma262/#sec-string.prototype.sup
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('sup') }, {
      sup: function sup () {
        return createHTML(this, 'sup', '', '')
      }
    })
  }, { '../internals/create-html': 76, '../internals/export': 100, '../internals/string-html-forced': 194 }],
  393: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $trimEnd = require('../internals/string-trim').end
    const forcedStringTrimMethod = require('../internals/string-trim-forced')

    const FORCED = forcedStringTrimMethod('trimEnd')

    const trimEnd = FORCED ? function trimEnd () {
      return $trimEnd(this)
      // eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
    } : ''.trimEnd

    // `String.prototype.{ trimEnd, trimRight }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    // https://tc39.es/ecma262/#String.prototype.trimright
    $({ target: 'String', proto: true, name: 'trimEnd', forced: FORCED }, {
      trimEnd: trimEnd,
      trimRight: trimEnd
    })
  }, { '../internals/export': 100, '../internals/string-trim': 201, '../internals/string-trim-forced': 200 }],
  394: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $trimStart = require('../internals/string-trim').start
    const forcedStringTrimMethod = require('../internals/string-trim-forced')

    const FORCED = forcedStringTrimMethod('trimStart')

    const trimStart = FORCED ? function trimStart () {
      return $trimStart(this)
      // eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
    } : ''.trimStart

    // `String.prototype.{ trimStart, trimLeft }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    // https://tc39.es/ecma262/#String.prototype.trimleft
    $({ target: 'String', proto: true, name: 'trimStart', forced: FORCED }, {
      trimStart: trimStart,
      trimLeft: trimStart
    })
  }, { '../internals/export': 100, '../internals/string-trim': 201, '../internals/string-trim-forced': 200 }],
  395: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $trim = require('../internals/string-trim').trim
    const forcedStringTrimMethod = require('../internals/string-trim-forced')

    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    $({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
      trim: function trim () {
        return $trim(this)
      }
    })
  }, { '../internals/export': 100, '../internals/string-trim': 201, '../internals/string-trim-forced': 200 }],
  396: [function (require, module, exports) {
    const defineWellKnownSymbol = require('../internals/define-well-known-symbol')

    // `Symbol.asyncIterator` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.asynciterator
    defineWellKnownSymbol('asyncIterator')
  }, { '../internals/define-well-known-symbol': 84 }],
  397: [function (require, module, exports) {
    // `Symbol.prototype.description` getter
    // https://tc39.es/ecma262/#sec-symbol.prototype.description
    'use strict'
    const $ = require('../internals/export')
    const DESCRIPTORS = require('../internals/descriptors')
    const global = require('../internals/global')
    const hasOwn = require('../internals/has-own-property')
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')
    const defineProperty = require('../internals/object-define-property').f
    const copyConstructorProperties = require('../internals/copy-constructor-properties')

    const NativeSymbol = global.Symbol

    if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
    )) {
      const EmptyStringDescriptionStore = {}
      // wrap Symbol constructor for correct work with undefined description
      var SymbolWrapper = function Symbol () {
        const description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0])
        const result = this instanceof SymbolWrapper
          ? new NativeSymbol(description)
        // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
          : description === undefined ? NativeSymbol() : NativeSymbol(description)
        if (description === '') EmptyStringDescriptionStore[result] = true
        return result
      }
      copyConstructorProperties(SymbolWrapper, NativeSymbol)
      const symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype
      symbolPrototype.constructor = SymbolWrapper

      const symbolToString = symbolPrototype.toString
      const nativeSymbol = String(NativeSymbol('test')) == 'Symbol(test)'
      const regexp = /^Symbol\((.*)\)[^)]+$/
      defineProperty(symbolPrototype, 'description', {
        configurable: true,
        get: function description () {
          const symbol = isObject(this) ? this.valueOf() : this
          const string = symbolToString.call(symbol)
          if (hasOwn(EmptyStringDescriptionStore, symbol)) return ''
          const desc = nativeSymbol ? string.slice(7, -1) : string.replace(regexp, '$1')
          return desc === '' ? undefined : desc
        }
      })

      $({ global: true, forced: true }, {
        Symbol: SymbolWrapper
      })
    }
  }, { '../internals/copy-constructor-properties': 73, '../internals/descriptors': 85, '../internals/export': 100, '../internals/global': 113, '../internals/has-own-property': 114, '../internals/is-callable': 128, '../internals/is-object': 133, '../internals/object-define-property': 159 }],
  398: [function (require, module, exports) {
    const defineWellKnownSymbol = require('../internals/define-well-known-symbol')

    // `Symbol.hasInstance` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.hasinstance
    defineWellKnownSymbol('hasInstance')
  }, { '../internals/define-well-known-symbol': 84 }],
  399: [function (require, module, exports) {
    const defineWellKnownSymbol = require('../internals/define-well-known-symbol')

    // `Symbol.isConcatSpreadable` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
    defineWellKnownSymbol('isConcatSpreadable')
  }, { '../internals/define-well-known-symbol': 84 }],
  400: [function (require, module, exports) {
    const defineWellKnownSymbol = require('../internals/define-well-known-symbol')

    // `Symbol.iterator` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.iterator
    defineWellKnownSymbol('iterator')
  }, { '../internals/define-well-known-symbol': 84 }],
  401: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const global = require('../internals/global')
    const getBuiltIn = require('../internals/get-built-in')
    const IS_PURE = require('../internals/is-pure')
    const DESCRIPTORS = require('../internals/descriptors')
    const NATIVE_SYMBOL = require('../internals/native-symbol')
    const fails = require('../internals/fails')
    const hasOwn = require('../internals/has-own-property')
    const isArray = require('../internals/is-array')
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')
    const isSymbol = require('../internals/is-symbol')
    const anObject = require('../internals/an-object')
    const toObject = require('../internals/to-object')
    const toIndexedObject = require('../internals/to-indexed-object')
    const toPropertyKey = require('../internals/to-property-key')
    const $toString = require('../internals/to-string')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')
    const nativeObjectCreate = require('../internals/object-create')
    const objectKeys = require('../internals/object-keys')
    const getOwnPropertyNamesModule = require('../internals/object-get-own-property-names')
    const getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external')
    const getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols')
    const getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')
    const definePropertyModule = require('../internals/object-define-property')
    const propertyIsEnumerableModule = require('../internals/object-property-is-enumerable')
    const redefine = require('../internals/redefine')
    const shared = require('../internals/shared')
    const sharedKey = require('../internals/shared-key')
    const hiddenKeys = require('../internals/hidden-keys')
    const uid = require('../internals/uid')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped')
    const defineWellKnownSymbol = require('../internals/define-well-known-symbol')
    const setToStringTag = require('../internals/set-to-string-tag')
    const InternalStateModule = require('../internals/internal-state')
    const $forEach = require('../internals/array-iteration').forEach

    const HIDDEN = sharedKey('hidden')
    const SYMBOL = 'Symbol'
    const PROTOTYPE = 'prototype'
    const TO_PRIMITIVE = wellKnownSymbol('toPrimitive')
    const setInternalState = InternalStateModule.set
    const getInternalState = InternalStateModule.getterFor(SYMBOL)
    const ObjectPrototype = Object[PROTOTYPE]
    let $Symbol = global.Symbol
    const $stringify = getBuiltIn('JSON', 'stringify')
    const nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
    const nativeDefineProperty = definePropertyModule.f
    const nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f
    const nativePropertyIsEnumerable = propertyIsEnumerableModule.f
    const AllSymbols = shared('symbols')
    const ObjectPrototypeSymbols = shared('op-symbols')
    const StringToSymbolRegistry = shared('string-to-symbol-registry')
    const SymbolToStringRegistry = shared('symbol-to-string-registry')
    const WellKnownSymbolsStore = shared('wks')
    const QObject = global.QObject
    // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    let USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild

    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    const setSymbolDescriptor = DESCRIPTORS && fails(function () {
      return nativeObjectCreate(nativeDefineProperty({}, 'a', {
        get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a }
      })).a != 7
    })
      ? function (O, P, Attributes) {
        const ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P)
        if (ObjectPrototypeDescriptor) delete ObjectPrototype[P]
        nativeDefineProperty(O, P, Attributes)
        if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
          nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor)
        }
      }
      : nativeDefineProperty

    const wrap = function (tag, description) {
      const symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE])
      setInternalState(symbol, {
        type: SYMBOL,
        tag: tag,
        description: description
      })
      if (!DESCRIPTORS) symbol.description = description
      return symbol
    }

    var $defineProperty = function defineProperty (O, P, Attributes) {
      if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes)
      anObject(O)
      const key = toPropertyKey(P)
      anObject(Attributes)
      if (hasOwn(AllSymbols, key)) {
        if (!Attributes.enumerable) {
          if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}))
          O[HIDDEN][key] = true
        } else {
          if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false
          Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) })
        } return setSymbolDescriptor(O, key, Attributes)
      } return nativeDefineProperty(O, key, Attributes)
    }

    const $defineProperties = function defineProperties (O, Properties) {
      anObject(O)
      const properties = toIndexedObject(Properties)
      const keys = objectKeys(properties).concat($getOwnPropertySymbols(properties))
      $forEach(keys, function (key) {
        if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key])
      })
      return O
    }

    const $create = function create (O, Properties) {
      return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties)
    }

    var $propertyIsEnumerable = function propertyIsEnumerable (V) {
      const P = toPropertyKey(V)
      const enumerable = nativePropertyIsEnumerable.call(this, P)
      if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false
      return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
        ? enumerable
        : true
    }

    const $getOwnPropertyDescriptor = function getOwnPropertyDescriptor (O, P) {
      const it = toIndexedObject(O)
      const key = toPropertyKey(P)
      if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return
      const descriptor = nativeGetOwnPropertyDescriptor(it, key)
      if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
        descriptor.enumerable = true
      }
      return descriptor
    }

    const $getOwnPropertyNames = function getOwnPropertyNames (O) {
      const names = nativeGetOwnPropertyNames(toIndexedObject(O))
      const result = []
      $forEach(names, function (key) {
        if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) result.push(key)
      })
      return result
    }

    var $getOwnPropertySymbols = function getOwnPropertySymbols (O) {
      const IS_OBJECT_PROTOTYPE = O === ObjectPrototype
      const names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O))
      const result = []
      $forEach(names, function (key) {
        if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
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
        const description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0])
        const tag = uid(description)
        var setter = function (value) {
          if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value)
          if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false
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
        const string = $toString(key)
        if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string]
        const symbol = $Symbol(string)
        StringToSymbolRegistry[string] = symbol
        SymbolToStringRegistry[symbol] = string
        return symbol
      },
      // `Symbol.keyFor` method
      // https://tc39.es/ecma262/#sec-symbol.keyfor
      keyFor: function keyFor (sym) {
        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol')
        if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym]
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
      const FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
        const symbol = $Symbol()
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
          const args = [it]
          let index = 1
          let $replacer
          while (arguments.length > index) args.push(arguments[index++])
          $replacer = replacer
          if (!isObject(replacer) && it === undefined || isSymbol(it)) return // IE8 returns string on undefined
          if (!isArray(replacer)) {
            replacer = function (key, value) {
              if (isCallable($replacer)) value = $replacer.call(this, key, value)
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
      const valueOf = $Symbol[PROTOTYPE].valueOf
      redefine($Symbol[PROTOTYPE], TO_PRIMITIVE, function () {
        return valueOf.apply(this, arguments)
      })
    }
    // `Symbol.prototype[@@toStringTag]` property
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
    setToStringTag($Symbol, SYMBOL)

    hiddenKeys[HIDDEN] = true
  }, { '../internals/an-object': 48, '../internals/array-iteration': 58, '../internals/create-property-descriptor': 79, '../internals/define-well-known-symbol': 84, '../internals/descriptors': 85, '../internals/export': 100, '../internals/fails': 101, '../internals/get-built-in': 108, '../internals/global': 113, '../internals/has-own-property': 114, '../internals/hidden-keys': 115, '../internals/internal-state': 125, '../internals/is-array': 127, '../internals/is-callable': 128, '../internals/is-object': 133, '../internals/is-pure': 134, '../internals/is-symbol': 136, '../internals/native-symbol': 148, '../internals/object-create': 157, '../internals/object-define-property': 159, '../internals/object-get-own-property-descriptor': 160, '../internals/object-get-own-property-names': 162, '../internals/object-get-own-property-names-external': 161, '../internals/object-get-own-property-symbols': 163, '../internals/object-keys': 166, '../internals/object-property-is-enumerable': 167, '../internals/redefine': 178, '../internals/set-to-string-tag': 189, '../internals/shared': 192, '../internals/shared-key': 190, '../internals/to-indexed-object': 206, '../internals/to-object': 209, '../internals/to-property-key': 213, '../internals/to-string': 215, '../internals/uid': 222, '../internals/well-known-symbol': 225, '../internals/well-known-symbol-wrapped': 224 }],
  402: [function (require, module, exports) {
    const defineWellKnownSymbol = require('../internals/define-well-known-symbol')

    // `Symbol.matchAll` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.matchall
    defineWellKnownSymbol('matchAll')
  }, { '../internals/define-well-known-symbol': 84 }],
  403: [function (require, module, exports) {
    const defineWellKnownSymbol = require('../internals/define-well-known-symbol')

    // `Symbol.match` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.match
    defineWellKnownSymbol('match')
  }, { '../internals/define-well-known-symbol': 84 }],
  404: [function (require, module, exports) {
    const defineWellKnownSymbol = require('../internals/define-well-known-symbol')

    // `Symbol.replace` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.replace
    defineWellKnownSymbol('replace')
  }, { '../internals/define-well-known-symbol': 84 }],
  405: [function (require, module, exports) {
    const defineWellKnownSymbol = require('../internals/define-well-known-symbol')

    // `Symbol.search` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.search
    defineWellKnownSymbol('search')
  }, { '../internals/define-well-known-symbol': 84 }],
  406: [function (require, module, exports) {
    const defineWellKnownSymbol = require('../internals/define-well-known-symbol')

    // `Symbol.species` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.species
    defineWellKnownSymbol('species')
  }, { '../internals/define-well-known-symbol': 84 }],
  407: [function (require, module, exports) {
    const defineWellKnownSymbol = require('../internals/define-well-known-symbol')

    // `Symbol.split` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.split
    defineWellKnownSymbol('split')
  }, { '../internals/define-well-known-symbol': 84 }],
  408: [function (require, module, exports) {
    const defineWellKnownSymbol = require('../internals/define-well-known-symbol')

    // `Symbol.toPrimitive` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.toprimitive
    defineWellKnownSymbol('toPrimitive')
  }, { '../internals/define-well-known-symbol': 84 }],
  409: [function (require, module, exports) {
    const defineWellKnownSymbol = require('../internals/define-well-known-symbol')

    // `Symbol.toStringTag` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.tostringtag
    defineWellKnownSymbol('toStringTag')
  }, { '../internals/define-well-known-symbol': 84 }],
  410: [function (require, module, exports) {
    const defineWellKnownSymbol = require('../internals/define-well-known-symbol')

    // `Symbol.unscopables` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.unscopables
    defineWellKnownSymbol('unscopables')
  }, { '../internals/define-well-known-symbol': 84 }],
  411: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.at` method
    // https://github.com/tc39/proposal-relative-indexing-method
    exportTypedArrayMethod('at', function at (index) {
      const O = aTypedArray(this)
      const len = lengthOfArrayLike(O)
      const relativeIndex = toIntegerOrInfinity(index)
      const k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex
      return (k < 0 || k >= len) ? undefined : O[k]
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/length-of-array-like': 141, '../internals/to-integer-or-infinity': 207 }],
  412: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const $copyWithin = require('../internals/array-copy-within')

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.copyWithin` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
    exportTypedArrayMethod('copyWithin', function copyWithin (target, start /* , end */) {
      return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined)
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/array-copy-within': 52 }],
  413: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const $every = require('../internals/array-iteration').every

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.every` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
    exportTypedArrayMethod('every', function every (callbackfn /* , thisArg */) {
      return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined)
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/array-iteration': 58 }],
  414: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const $fill = require('../internals/array-fill')

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.fill` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    exportTypedArrayMethod('fill', function fill (value /* , start, end */) {
      return $fill.apply(aTypedArray(this), arguments)
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/array-fill': 53 }],
  415: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const $filter = require('../internals/array-iteration').filter
    const fromSpeciesAndList = require('../internals/typed-array-from-species-and-list')

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.filter` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
    exportTypedArrayMethod('filter', function filter (callbackfn /* , thisArg */) {
      const list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      return fromSpeciesAndList(this, list)
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/array-iteration': 58, '../internals/typed-array-from-species-and-list': 219 }],
  416: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const $findIndex = require('../internals/array-iteration').findIndex

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
    exportTypedArrayMethod('findIndex', function findIndex (predicate /* , thisArg */) {
      return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined)
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/array-iteration': 58 }],
  417: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const $find = require('../internals/array-iteration').find

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.find` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
    exportTypedArrayMethod('find', function find (predicate /* , thisArg */) {
      return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined)
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/array-iteration': 58 }],
  418: [function (require, module, exports) {
    const createTypedArrayConstructor = require('../internals/typed-array-constructor')

    // `Float32Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    createTypedArrayConstructor('Float32', function (init) {
      return function Float32Array (data, byteOffset, length) {
        return init(this, data, byteOffset, length)
      }
    })
  }, { '../internals/typed-array-constructor': 217 }],
  419: [function (require, module, exports) {
    const createTypedArrayConstructor = require('../internals/typed-array-constructor')

    // `Float64Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    createTypedArrayConstructor('Float64', function (init) {
      return function Float64Array (data, byteOffset, length) {
        return init(this, data, byteOffset, length)
      }
    })
  }, { '../internals/typed-array-constructor': 217 }],
  420: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const $forEach = require('../internals/array-iteration').forEach

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
    exportTypedArrayMethod('forEach', function forEach (callbackfn /* , thisArg */) {
      $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined)
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/array-iteration': 58 }],
  421: [function (require, module, exports) {
    'use strict'
    const TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = require('../internals/typed-array-constructors-require-wrappers')
    const exportTypedArrayStaticMethod = require('../internals/array-buffer-view-core').exportTypedArrayStaticMethod
    const typedArrayFrom = require('../internals/typed-array-from')

    // `%TypedArray%.from` method
    // https://tc39.es/ecma262/#sec-%typedarray%.from
    exportTypedArrayStaticMethod('from', typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS)
  }, { '../internals/array-buffer-view-core': 50, '../internals/typed-array-constructors-require-wrappers': 218, '../internals/typed-array-from': 220 }],
  422: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const $includes = require('../internals/array-includes').includes

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.includes` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
    exportTypedArrayMethod('includes', function includes (searchElement /* , fromIndex */) {
      return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined)
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/array-includes': 57 }],
  423: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const $indexOf = require('../internals/array-includes').indexOf

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
    exportTypedArrayMethod('indexOf', function indexOf (searchElement /* , fromIndex */) {
      return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined)
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/array-includes': 57 }],
  424: [function (require, module, exports) {
    const createTypedArrayConstructor = require('../internals/typed-array-constructor')

    // `Int16Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    createTypedArrayConstructor('Int16', function (init) {
      return function Int16Array (data, byteOffset, length) {
        return init(this, data, byteOffset, length)
      }
    })
  }, { '../internals/typed-array-constructor': 217 }],
  425: [function (require, module, exports) {
    const createTypedArrayConstructor = require('../internals/typed-array-constructor')

    // `Int32Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    createTypedArrayConstructor('Int32', function (init) {
      return function Int32Array (data, byteOffset, length) {
        return init(this, data, byteOffset, length)
      }
    })
  }, { '../internals/typed-array-constructor': 217 }],
  426: [function (require, module, exports) {
    const createTypedArrayConstructor = require('../internals/typed-array-constructor')

    // `Int8Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    createTypedArrayConstructor('Int8', function (init) {
      return function Int8Array (data, byteOffset, length) {
        return init(this, data, byteOffset, length)
      }
    })
  }, { '../internals/typed-array-constructor': 217 }],
  427: [function (require, module, exports) {
    'use strict'
    const global = require('../internals/global')
    const PROPER_FUNCTION_NAME = require('../internals/function-name').PROPER
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const ArrayIterators = require('../modules/es.array.iterator')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const ITERATOR = wellKnownSymbol('iterator')
    const Uint8Array = global.Uint8Array
    const arrayValues = ArrayIterators.values
    const arrayKeys = ArrayIterators.keys
    const arrayEntries = ArrayIterators.entries
    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod
    const nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR]

    const PROPER_ARRAY_VALUES_NAME = !!nativeTypedArrayIterator && nativeTypedArrayIterator.name === 'values'

    const typedArrayValues = function values () {
      return arrayValues.call(aTypedArray(this))
    }

    // `%TypedArray%.prototype.entries` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
    exportTypedArrayMethod('entries', function entries () {
      return arrayEntries.call(aTypedArray(this))
    })
    // `%TypedArray%.prototype.keys` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
    exportTypedArrayMethod('keys', function keys () {
      return arrayKeys.call(aTypedArray(this))
    })
    // `%TypedArray%.prototype.values` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
    exportTypedArrayMethod('values', typedArrayValues, PROPER_FUNCTION_NAME && !PROPER_ARRAY_VALUES_NAME)
    // `%TypedArray%.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
    exportTypedArrayMethod(ITERATOR, typedArrayValues, PROPER_FUNCTION_NAME && !PROPER_ARRAY_VALUES_NAME)
  }, { '../internals/array-buffer-view-core': 50, '../internals/function-name': 107, '../internals/global': 113, '../internals/well-known-symbol': 225, '../modules/es.array.iterator': 246 }],
  428: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod
    const $join = [].join

    // `%TypedArray%.prototype.join` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    exportTypedArrayMethod('join', function join (separator) {
      return $join.apply(aTypedArray(this), arguments)
    })
  }, { '../internals/array-buffer-view-core': 50 }],
  429: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const $lastIndexOf = require('../internals/array-last-index-of')

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.lastIndexOf` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    exportTypedArrayMethod('lastIndexOf', function lastIndexOf (searchElement /* , fromIndex */) {
      return $lastIndexOf.apply(aTypedArray(this), arguments)
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/array-last-index-of': 59 }],
  430: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const $map = require('../internals/array-iteration').map
    const typedArraySpeciesConstructor = require('../internals/typed-array-species-constructor')

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.map` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
    exportTypedArrayMethod('map', function map (mapfn /* , thisArg */) {
      return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
        return new (typedArraySpeciesConstructor(O))(length)
      })
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/array-iteration': 58, '../internals/typed-array-species-constructor': 221 }],
  431: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = require('../internals/typed-array-constructors-require-wrappers')

    const aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor
    const exportTypedArrayStaticMethod = ArrayBufferViewCore.exportTypedArrayStaticMethod

    // `%TypedArray%.of` method
    // https://tc39.es/ecma262/#sec-%typedarray%.of
    exportTypedArrayStaticMethod('of', function of (/* ...items */) {
      let index = 0
      const length = arguments.length
      const result = new (aTypedArrayConstructor(this))(length)
      while (length > index) result[index] = arguments[index++]
      return result
    }, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS)
  }, { '../internals/array-buffer-view-core': 50, '../internals/typed-array-constructors-require-wrappers': 218 }],
  432: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const $reduceRight = require('../internals/array-reduce').right

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.reduceRicht` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
    exportTypedArrayMethod('reduceRight', function reduceRight (callbackfn /* , initialValue */) {
      return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/array-reduce': 62 }],
  433: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const $reduce = require('../internals/array-reduce').left

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
    exportTypedArrayMethod('reduce', function reduce (callbackfn /* , initialValue */) {
      return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined)
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/array-reduce': 62 }],
  434: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod
    const floor = Math.floor

    // `%TypedArray%.prototype.reverse` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
    exportTypedArrayMethod('reverse', function reverse () {
      const that = this
      let length = aTypedArray(that).length
      const middle = floor(length / 2)
      let index = 0
      let value
      while (index < middle) {
        value = that[index]
        that[index++] = that[--length]
        that[length] = value
      } return that
    })
  }, { '../internals/array-buffer-view-core': 50 }],
  435: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const toOffset = require('../internals/to-offset')
    const toObject = require('../internals/to-object')
    const fails = require('../internals/fails')

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    const FORCED = fails(function () {
      // eslint-disable-next-line es/no-typed-arrays -- required for testing
      new Int8Array(1).set({})
    })

    // `%TypedArray%.prototype.set` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
    exportTypedArrayMethod('set', function set (arrayLike /* , offset */) {
      aTypedArray(this)
      const offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1)
      const length = this.length
      const src = toObject(arrayLike)
      const len = lengthOfArrayLike(src)
      let index = 0
      if (len + offset > length) throw RangeError('Wrong length')
      while (index < len) this[offset + index] = src[index++]
    }, FORCED)
  }, { '../internals/array-buffer-view-core': 50, '../internals/fails': 101, '../internals/length-of-array-like': 141, '../internals/to-object': 209, '../internals/to-offset': 210 }],
  436: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const typedArraySpeciesConstructor = require('../internals/typed-array-species-constructor')
    const fails = require('../internals/fails')

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod
    const $slice = [].slice

    const FORCED = fails(function () {
      // eslint-disable-next-line es/no-typed-arrays -- required for testing
      new Int8Array(1).slice()
    })

    // `%TypedArray%.prototype.slice` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
    exportTypedArrayMethod('slice', function slice (start, end) {
      const list = $slice.call(aTypedArray(this), start, end)
      const C = typedArraySpeciesConstructor(this)
      let index = 0
      const length = list.length
      const result = new C(length)
      while (length > index) result[index] = list[index++]
      return result
    }, FORCED)
  }, { '../internals/array-buffer-view-core': 50, '../internals/fails': 101, '../internals/typed-array-species-constructor': 221 }],
  437: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const $some = require('../internals/array-iteration').some

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.some` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
    exportTypedArrayMethod('some', function some (callbackfn /* , thisArg */) {
      return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined)
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/array-iteration': 58 }],
  438: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const global = require('../internals/global')
    const fails = require('../internals/fails')
    const aCallable = require('../internals/a-callable')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const internalSort = require('../internals/array-sort')
    const FF = require('../internals/engine-ff-version')
    const IE_OR_EDGE = require('../internals/engine-is-ie-or-edge')
    const V8 = require('../internals/engine-v8-version')
    const WEBKIT = require('../internals/engine-webkit-version')

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod
    const Uint16Array = global.Uint16Array
    const nativeSort = Uint16Array && Uint16Array.prototype.sort

    // WebKit
    const ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !fails(function () {
      const array = new Uint16Array(2)
      array.sort(null)
      array.sort({})
    })

    const STABLE_SORT = !!nativeSort && !fails(function () {
      // feature detection can be too slow, so check engines versions
      if (V8) return V8 < 74
      if (FF) return FF < 67
      if (IE_OR_EDGE) return true
      if (WEBKIT) return WEBKIT < 602

      const array = new Uint16Array(516)
      const expected = Array(516)
      let index, mod

      for (index = 0; index < 516; index++) {
        mod = index % 4
        array[index] = 515 - index
        expected[index] = index - 2 * mod + 3
      }

      array.sort(function (a, b) {
        return (a / 4 | 0) - (b / 4 | 0)
      })

      for (index = 0; index < 516; index++) {
        if (array[index] !== expected[index]) return true
      }
    })

    const getSortCompare = function (comparefn) {
      return function (x, y) {
        if (comparefn !== undefined) return +comparefn(x, y) || 0
        // eslint-disable-next-line no-self-compare -- NaN check
        if (y !== y) return -1
        // eslint-disable-next-line no-self-compare -- NaN check
        if (x !== x) return 1
        if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1
        return x > y
      }
    }

    // `%TypedArray%.prototype.sort` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
    exportTypedArrayMethod('sort', function sort (comparefn) {
      const array = this
      if (comparefn !== undefined) aCallable(comparefn)
      if (STABLE_SORT) return nativeSort.call(array, comparefn)

      aTypedArray(array)
      const arrayLength = lengthOfArrayLike(array)
      let items = Array(arrayLength)
      let index

      for (index = 0; index < arrayLength; index++) {
        items[index] = array[index]
      }

      items = internalSort(array, getSortCompare(comparefn))

      for (index = 0; index < arrayLength; index++) {
        array[index] = items[index]
      }

      return array
    }, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS)
  }, { '../internals/a-callable': 42, '../internals/array-buffer-view-core': 50, '../internals/array-sort': 63, '../internals/engine-ff-version': 89, '../internals/engine-is-ie-or-edge': 91, '../internals/engine-v8-version': 97, '../internals/engine-webkit-version': 98, '../internals/fails': 101, '../internals/global': 113, '../internals/length-of-array-like': 141 }],
  439: [function (require, module, exports) {
    'use strict'
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const toLength = require('../internals/to-length')
    const toAbsoluteIndex = require('../internals/to-absolute-index')
    const typedArraySpeciesConstructor = require('../internals/typed-array-species-constructor')

    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod

    // `%TypedArray%.prototype.subarray` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
    exportTypedArrayMethod('subarray', function subarray (begin, end) {
      const O = aTypedArray(this)
      const length = O.length
      const beginIndex = toAbsoluteIndex(begin, length)
      const C = typedArraySpeciesConstructor(O)
      return new C(
        O.buffer,
        O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
      )
    })
  }, { '../internals/array-buffer-view-core': 50, '../internals/to-absolute-index': 204, '../internals/to-length': 208, '../internals/typed-array-species-constructor': 221 }],
  440: [function (require, module, exports) {
    'use strict'
    const global = require('../internals/global')
    const ArrayBufferViewCore = require('../internals/array-buffer-view-core')
    const fails = require('../internals/fails')

    const Int8Array = global.Int8Array
    const aTypedArray = ArrayBufferViewCore.aTypedArray
    const exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod
    const $toLocaleString = [].toLocaleString
    const $slice = [].slice

    // iOS Safari 6.x fails here
    const TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
      $toLocaleString.call(new Int8Array(1))
    })

    const FORCED = fails(function () {
      return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString()
    }) || !fails(function () {
      Int8Array.prototype.toLocaleString.call([1, 2])
    })

    // `%TypedArray%.prototype.toLocaleString` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
    exportTypedArrayMethod('toLocaleString', function toLocaleString () {
      return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments)
    }, FORCED)
  }, { '../internals/array-buffer-view-core': 50, '../internals/fails': 101, '../internals/global': 113 }],
  441: [function (require, module, exports) {
    'use strict'
    const exportTypedArrayMethod = require('../internals/array-buffer-view-core').exportTypedArrayMethod
    const fails = require('../internals/fails')
    const global = require('../internals/global')

    const Uint8Array = global.Uint8Array
    const Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {}
    let arrayToString = [].toString
    const arrayJoin = [].join

    if (fails(function () { arrayToString.call({}) })) {
      arrayToString = function toString () {
        return arrayJoin.call(this)
      }
    }

    const IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString

    // `%TypedArray%.prototype.toString` method
    // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
    exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD)
  }, { '../internals/array-buffer-view-core': 50, '../internals/fails': 101, '../internals/global': 113 }],
  442: [function (require, module, exports) {
    const createTypedArrayConstructor = require('../internals/typed-array-constructor')

    // `Uint16Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    createTypedArrayConstructor('Uint16', function (init) {
      return function Uint16Array (data, byteOffset, length) {
        return init(this, data, byteOffset, length)
      }
    })
  }, { '../internals/typed-array-constructor': 217 }],
  443: [function (require, module, exports) {
    const createTypedArrayConstructor = require('../internals/typed-array-constructor')

    // `Uint32Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    createTypedArrayConstructor('Uint32', function (init) {
      return function Uint32Array (data, byteOffset, length) {
        return init(this, data, byteOffset, length)
      }
    })
  }, { '../internals/typed-array-constructor': 217 }],
  444: [function (require, module, exports) {
    const createTypedArrayConstructor = require('../internals/typed-array-constructor')

    // `Uint8Array` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    createTypedArrayConstructor('Uint8', function (init) {
      return function Uint8Array (data, byteOffset, length) {
        return init(this, data, byteOffset, length)
      }
    })
  }, { '../internals/typed-array-constructor': 217 }],
  445: [function (require, module, exports) {
    const createTypedArrayConstructor = require('../internals/typed-array-constructor')

    // `Uint8ClampedArray` constructor
    // https://tc39.es/ecma262/#sec-typedarray-objects
    createTypedArrayConstructor('Uint8', function (init) {
      return function Uint8ClampedArray (data, byteOffset, length) {
        return init(this, data, byteOffset, length)
      }
    }, true)
  }, { '../internals/typed-array-constructor': 217 }],
  446: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const toString = require('../internals/to-string')

    const fromCharCode = String.fromCharCode
    const hex2 = /^[\da-f]{2}$/i
    const hex4 = /^[\da-f]{4}$/i

    // `unescape` method
    // https://tc39.es/ecma262/#sec-unescape-string
    $({ global: true }, {
      unescape: function unescape (string) {
        const str = toString(string)
        let result = ''
        const length = str.length
        let index = 0
        let chr, slice
        while (index < length) {
          chr = str.charAt(index++)
          if (chr === '%') {
            if (str.charAt(index) === 'u') {
              slice = str.slice(index + 1, index + 5)
              if (hex4.test(slice)) {
                result += fromCharCode(parseInt(slice, 16))
                index += 5
                continue
              }
            } else {
              slice = str.slice(index, index + 2)
              if (hex2.test(slice)) {
                result += fromCharCode(parseInt(slice, 16))
                index += 2
                continue
              }
            }
          }
          result += chr
        } return result
      }
    })
  }, { '../internals/export': 100, '../internals/to-string': 215 }],
  447: [function (require, module, exports) {
    'use strict'
    const global = require('../internals/global')
    const redefineAll = require('../internals/redefine-all')
    const InternalMetadataModule = require('../internals/internal-metadata')
    const collection = require('../internals/collection')
    const collectionWeak = require('../internals/collection-weak')
    const isObject = require('../internals/is-object')
    const enforceIternalState = require('../internals/internal-state').enforce
    const NATIVE_WEAK_MAP = require('../internals/native-weak-map')

    const IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global
    // eslint-disable-next-line es/no-object-isextensible -- safe
    const isExtensible = Object.isExtensible
    let InternalWeakMap

    const wrapper = function (init) {
      return function WeakMap () {
        return init(this, arguments.length ? arguments[0] : undefined)
      }
    }

    // `WeakMap` constructor
    // https://tc39.es/ecma262/#sec-weakmap-constructor
    const $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak)

    // IE11 WeakMap frozen keys fix
    // We can't use feature detection because it crash some old IE builds
    // https://github.com/zloirock/core-js/issues/485
    if (NATIVE_WEAK_MAP && IS_IE11) {
      InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true)
      InternalMetadataModule.enable()
      const WeakMapPrototype = $WeakMap.prototype
      const nativeDelete = WeakMapPrototype.delete
      const nativeHas = WeakMapPrototype.has
      const nativeGet = WeakMapPrototype.get
      const nativeSet = WeakMapPrototype.set
      redefineAll(WeakMapPrototype, {
        delete: function (key) {
          if (isObject(key) && !isExtensible(key)) {
            const state = enforceIternalState(this)
            if (!state.frozen) state.frozen = new InternalWeakMap()
            return nativeDelete.call(this, key) || state.frozen.delete(key)
          } return nativeDelete.call(this, key)
        },
        has: function has (key) {
          if (isObject(key) && !isExtensible(key)) {
            const state = enforceIternalState(this)
            if (!state.frozen) state.frozen = new InternalWeakMap()
            return nativeHas.call(this, key) || state.frozen.has(key)
          } return nativeHas.call(this, key)
        },
        get: function get (key) {
          if (isObject(key) && !isExtensible(key)) {
            const state = enforceIternalState(this)
            if (!state.frozen) state.frozen = new InternalWeakMap()
            return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key)
          } return nativeGet.call(this, key)
        },
        set: function set (key, value) {
          if (isObject(key) && !isExtensible(key)) {
            const state = enforceIternalState(this)
            if (!state.frozen) state.frozen = new InternalWeakMap()
            nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value)
          } else nativeSet.call(this, key, value)
          return this
        }
      })
    }
  }, { '../internals/collection': 72, '../internals/collection-weak': 71, '../internals/global': 113, '../internals/internal-metadata': 124, '../internals/internal-state': 125, '../internals/is-object': 133, '../internals/native-weak-map': 150, '../internals/redefine-all': 177 }],
  448: [function (require, module, exports) {
    'use strict'
    const collection = require('../internals/collection')
    const collectionWeak = require('../internals/collection-weak')

    // `WeakSet` constructor
    // https://tc39.es/ecma262/#sec-weakset-constructor
    collection('WeakSet', function (init) {
      return function WeakSet () { return init(this, arguments.length ? arguments[0] : undefined) }
    }, collectionWeak)
  }, { '../internals/collection': 72, '../internals/collection-weak': 71 }],
  449: [function (require, module, exports) {
    const global = require('../internals/global')
    const DOMIterables = require('../internals/dom-iterables')
    const DOMTokenListPrototype = require('../internals/dom-token-list-prototype')
    const forEach = require('../internals/array-for-each')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')

    const handlePrototype = function (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype && CollectionPrototype.forEach !== forEach) {
        try {
          createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach)
        } catch (error) {
          CollectionPrototype.forEach = forEach
        }
      }
    }

    for (const COLLECTION_NAME in DOMIterables) {
      if (DOMIterables[COLLECTION_NAME]) {
        handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype)
      }
    }

    handlePrototype(DOMTokenListPrototype)
  }, { '../internals/array-for-each': 54, '../internals/create-non-enumerable-property': 78, '../internals/dom-iterables': 87, '../internals/dom-token-list-prototype': 88, '../internals/global': 113 }],
  450: [function (require, module, exports) {
    const global = require('../internals/global')
    const DOMIterables = require('../internals/dom-iterables')
    const DOMTokenListPrototype = require('../internals/dom-token-list-prototype')
    const ArrayIteratorMethods = require('../modules/es.array.iterator')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const ITERATOR = wellKnownSymbol('iterator')
    const TO_STRING_TAG = wellKnownSymbol('toStringTag')
    const ArrayValues = ArrayIteratorMethods.values

    const handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
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
          for (const METHOD_NAME in ArrayIteratorMethods) {
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

    for (const COLLECTION_NAME in DOMIterables) {
      handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME)
    }

    handlePrototype(DOMTokenListPrototype, 'DOMTokenList')
  }, { '../internals/create-non-enumerable-property': 78, '../internals/dom-iterables': 87, '../internals/dom-token-list-prototype': 88, '../internals/global': 113, '../internals/well-known-symbol': 225, '../modules/es.array.iterator': 246 }],
  451: [function (require, module, exports) {
    const $ = require('../internals/export')
    const global = require('../internals/global')
    const task = require('../internals/task')

    const FORCED = !global.setImmediate || !global.clearImmediate

    // http://w3c.github.io/setImmediate/
    $({ global: true, bind: true, enumerable: true, forced: FORCED }, {
      // `setImmediate` method
      // http://w3c.github.io/setImmediate/#si-setImmediate
      setImmediate: task.set,
      // `clearImmediate` method
      // http://w3c.github.io/setImmediate/#si-clearImmediate
      clearImmediate: task.clear
    })
  }, { '../internals/export': 100, '../internals/global': 113, '../internals/task': 202 }],
  452: [function (require, module, exports) {
    const $ = require('../internals/export')
    const global = require('../internals/global')
    const microtask = require('../internals/microtask')
    const IS_NODE = require('../internals/engine-is-node')

    const process = global.process

    // `queueMicrotask` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
    $({ global: true, enumerable: true, noTargetGet: true }, {
      queueMicrotask: function queueMicrotask (fn) {
        const domain = IS_NODE && process.domain
        microtask(domain ? domain.bind(fn) : fn)
      }
    })
  }, { '../internals/engine-is-node': 94, '../internals/export': 100, '../internals/global': 113, '../internals/microtask': 146 }],
  453: [function (require, module, exports) {
    const $ = require('../internals/export')
    const global = require('../internals/global')
    const isCallable = require('../internals/is-callable')
    const userAgent = require('../internals/engine-user-agent')

    const slice = [].slice
    const MSIE = /MSIE .\./.test(userAgent) // <- dirty ie9- check

    const wrap = function (scheduler) {
      return function (handler, timeout /* , ...arguments */) {
        const boundArgs = arguments.length > 2
        const args = boundArgs ? slice.call(arguments, 2) : undefined
        return scheduler(boundArgs ? function () {
          // eslint-disable-next-line no-new-func -- spec requirement
          (isCallable(handler) ? handler : Function(handler)).apply(this, args)
        } : handler, timeout)
      }
    }

    // ie9- setTimeout & setInterval additional parameters fix
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
    $({ global: true, bind: true, forced: MSIE }, {
      // `setTimeout` method
      // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
      setTimeout: wrap(global.setTimeout),
      // `setInterval` method
      // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
      setInterval: wrap(global.setInterval)
    })
  }, { '../internals/engine-user-agent': 96, '../internals/export': 100, '../internals/global': 113, '../internals/is-callable': 128 }],
  454: [function (require, module, exports) {
    'use strict'
    // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
    require('../modules/es.array.iterator')
    const $ = require('../internals/export')
    const getBuiltIn = require('../internals/get-built-in')
    const USE_NATIVE_URL = require('../internals/native-url')
    const redefine = require('../internals/redefine')
    const redefineAll = require('../internals/redefine-all')
    const setToStringTag = require('../internals/set-to-string-tag')
    const createIteratorConstructor = require('../internals/create-iterator-constructor')
    const InternalStateModule = require('../internals/internal-state')
    const anInstance = require('../internals/an-instance')
    const isCallable = require('../internals/is-callable')
    const hasOwn = require('../internals/has-own-property')
    const bind = require('../internals/function-bind-context')
    const classof = require('../internals/classof')
    const anObject = require('../internals/an-object')
    const isObject = require('../internals/is-object')
    const $toString = require('../internals/to-string')
    const create = require('../internals/object-create')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')
    const getIterator = require('../internals/get-iterator')
    const getIteratorMethod = require('../internals/get-iterator-method')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const nativeFetch = getBuiltIn('fetch')
    const NativeRequest = getBuiltIn('Request')
    const RequestPrototype = NativeRequest && NativeRequest.prototype
    const Headers = getBuiltIn('Headers')
    const ITERATOR = wellKnownSymbol('iterator')
    const URL_SEARCH_PARAMS = 'URLSearchParams'
    const URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator'
    const setInternalState = InternalStateModule.set
    const getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS)
    const getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR)

    const plus = /\+/g
    const sequences = Array(4)

    const percentSequence = function (bytes) {
      return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'))
    }

    const percentDecode = function (sequence) {
      try {
        return decodeURIComponent(sequence)
      } catch (error) {
        return sequence
      }
    }

    const deserialize = function (it) {
      let result = it.replace(plus, ' ')
      let bytes = 4
      try {
        return decodeURIComponent(result)
      } catch (error) {
        while (bytes) {
          result = result.replace(percentSequence(bytes--), percentDecode)
        }
        return result
      }
    }

    const find = /[!'()~]|%20/g

    const replace = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+'
    }

    const replacer = function (match) {
      return replace[match]
    }

    const serialize = function (it) {
      return encodeURIComponent(it).replace(find, replacer)
    }

    const parseSearchParams = function (result, query) {
      if (query) {
        const attributes = query.split('&')
        let index = 0
        let attribute, entry
        while (index < attributes.length) {
          attribute = attributes[index++]
          if (attribute.length) {
            entry = attribute.split('=')
            result.push({
              key: deserialize(entry.shift()),
              value: deserialize(entry.join('='))
            })
          }
        }
      }
    }

    const updateSearchParams = function (query) {
      this.entries.length = 0
      parseSearchParams(this.entries, query)
    }

    const validateArgumentsLength = function (passed, required) {
      if (passed < required) throw TypeError('Not enough arguments')
    }

    const URLSearchParamsIterator = createIteratorConstructor(function Iterator (params, kind) {
      setInternalState(this, {
        type: URL_SEARCH_PARAMS_ITERATOR,
        iterator: getIterator(getInternalParamsState(params).entries),
        kind: kind
      })
    }, 'Iterator', function next () {
      const state = getInternalIteratorState(this)
      const kind = state.kind
      const step = state.iterator.next()
      const entry = step.value
      if (!step.done) {
        step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value]
      } return step
    })

    // `URLSearchParams` constructor
    // https://url.spec.whatwg.org/#interface-urlsearchparams
    var URLSearchParamsConstructor = function URLSearchParams (/* init */) {
      anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS)
      const init = arguments.length > 0 ? arguments[0] : undefined
      const that = this
      const entries = []
      let iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key

      setInternalState(that, {
        type: URL_SEARCH_PARAMS,
        entries: entries,
        updateURL: function () { /* empty */ },
        updateSearchParams: updateSearchParams
      })

      if (init !== undefined) {
        if (isObject(init)) {
          iteratorMethod = getIteratorMethod(init)
          if (iteratorMethod) {
            iterator = getIterator(init, iteratorMethod)
            next = iterator.next
            while (!(step = next.call(iterator)).done) {
              entryIterator = getIterator(anObject(step.value))
              entryNext = entryIterator.next
              if (
                (first = entryNext.call(entryIterator)).done ||
            (second = entryNext.call(entryIterator)).done ||
            !entryNext.call(entryIterator).done
              ) throw TypeError('Expected sequence with length 2')
              entries.push({ key: $toString(first.value), value: $toString(second.value) })
            }
          } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: $toString(init[key]) })
        } else {
          parseSearchParams(
            entries,
            typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : $toString(init)
          )
        }
      }
    }

    const URLSearchParamsPrototype = URLSearchParamsConstructor.prototype

    redefineAll(URLSearchParamsPrototype, {
      // `URLSearchParams.prototype.append` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-append
      append: function append (name, value) {
        validateArgumentsLength(arguments.length, 2)
        const state = getInternalParamsState(this)
        state.entries.push({ key: $toString(name), value: $toString(value) })
        state.updateURL()
      },
      // `URLSearchParams.prototype.delete` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
      delete: function (name) {
        validateArgumentsLength(arguments.length, 1)
        const state = getInternalParamsState(this)
        const entries = state.entries
        const key = $toString(name)
        let index = 0
        while (index < entries.length) {
          if (entries[index].key === key) entries.splice(index, 1)
          else index++
        }
        state.updateURL()
      },
      // `URLSearchParams.prototype.get` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-get
      get: function get (name) {
        validateArgumentsLength(arguments.length, 1)
        const entries = getInternalParamsState(this).entries
        const key = $toString(name)
        let index = 0
        for (; index < entries.length; index++) {
          if (entries[index].key === key) return entries[index].value
        }
        return null
      },
      // `URLSearchParams.prototype.getAll` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
      getAll: function getAll (name) {
        validateArgumentsLength(arguments.length, 1)
        const entries = getInternalParamsState(this).entries
        const key = $toString(name)
        const result = []
        let index = 0
        for (; index < entries.length; index++) {
          if (entries[index].key === key) result.push(entries[index].value)
        }
        return result
      },
      // `URLSearchParams.prototype.has` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-has
      has: function has (name) {
        validateArgumentsLength(arguments.length, 1)
        const entries = getInternalParamsState(this).entries
        const key = $toString(name)
        let index = 0
        while (index < entries.length) {
          if (entries[index++].key === key) return true
        }
        return false
      },
      // `URLSearchParams.prototype.set` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-set
      set: function set (name, value) {
        validateArgumentsLength(arguments.length, 1)
        const state = getInternalParamsState(this)
        const entries = state.entries
        let found = false
        const key = $toString(name)
        const val = $toString(value)
        let index = 0
        let entry
        for (; index < entries.length; index++) {
          entry = entries[index]
          if (entry.key === key) {
            if (found) entries.splice(index--, 1)
            else {
              found = true
              entry.value = val
            }
          }
        }
        if (!found) entries.push({ key: key, value: val })
        state.updateURL()
      },
      // `URLSearchParams.prototype.sort` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
      sort: function sort () {
        const state = getInternalParamsState(this)
        const entries = state.entries
        // Array#sort is not stable in some engines
        const slice = entries.slice()
        let entry, entriesIndex, sliceIndex
        entries.length = 0
        for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
          entry = slice[sliceIndex]
          for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
            if (entries[entriesIndex].key > entry.key) {
              entries.splice(entriesIndex, 0, entry)
              break
            }
          }
          if (entriesIndex === sliceIndex) entries.push(entry)
        }
        state.updateURL()
      },
      // `URLSearchParams.prototype.forEach` method
      forEach: function forEach (callback /* , thisArg */) {
        const entries = getInternalParamsState(this).entries
        const boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3)
        let index = 0
        let entry
        while (index < entries.length) {
          entry = entries[index++]
          boundFunction(entry.value, entry.key, this)
        }
      },
      // `URLSearchParams.prototype.keys` method
      keys: function keys () {
        return new URLSearchParamsIterator(this, 'keys')
      },
      // `URLSearchParams.prototype.values` method
      values: function values () {
        return new URLSearchParamsIterator(this, 'values')
      },
      // `URLSearchParams.prototype.entries` method
      entries: function entries () {
        return new URLSearchParamsIterator(this, 'entries')
      }
    }, { enumerable: true })

    // `URLSearchParams.prototype[@@iterator]` method
    redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' })

    // `URLSearchParams.prototype.toString` method
    // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
    redefine(URLSearchParamsPrototype, 'toString', function toString () {
      const entries = getInternalParamsState(this).entries
      const result = []
      let index = 0
      let entry
      while (index < entries.length) {
        entry = entries[index++]
        result.push(serialize(entry.key) + '=' + serialize(entry.value))
      } return result.join('&')
    }, { enumerable: true })

    setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS)

    $({ global: true, forced: !USE_NATIVE_URL }, {
      URLSearchParams: URLSearchParamsConstructor
    })

    // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
    if (!USE_NATIVE_URL && isCallable(Headers)) {
      const wrapRequestOptions = function (init) {
        if (isObject(init)) {
          const body = init.body
          let headers
          if (classof(body) === URL_SEARCH_PARAMS) {
            headers = init.headers ? new Headers(init.headers) : new Headers()
            if (!headers.has('content-type')) {
              headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
            }
            return create(init, {
              body: createPropertyDescriptor(0, String(body)),
              headers: createPropertyDescriptor(0, headers)
            })
          }
        } return init
      }

      if (isCallable(nativeFetch)) {
        $({ global: true, enumerable: true, forced: true }, {
          fetch: function fetch (input /* , init */) {
            return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {})
          }
        })
      }

      if (isCallable(NativeRequest)) {
        var RequestConstructor = function Request (input /* , init */) {
          anInstance(this, RequestConstructor, 'Request')
          return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {})
        }

        RequestPrototype.constructor = RequestConstructor
        RequestConstructor.prototype = RequestPrototype

        $({ global: true, forced: true }, {
          Request: RequestConstructor
        })
      }
    }

    module.exports = {
      URLSearchParams: URLSearchParamsConstructor,
      getState: getInternalParamsState
    }
  }, { '../internals/an-instance': 47, '../internals/an-object': 48, '../internals/classof': 69, '../internals/create-iterator-constructor': 77, '../internals/create-property-descriptor': 79, '../internals/export': 100, '../internals/function-bind-context': 105, '../internals/get-built-in': 108, '../internals/get-iterator': 110, '../internals/get-iterator-method': 109, '../internals/has-own-property': 114, '../internals/internal-state': 125, '../internals/is-callable': 128, '../internals/is-object': 133, '../internals/native-url': 149, '../internals/object-create': 157, '../internals/redefine': 178, '../internals/redefine-all': 177, '../internals/set-to-string-tag': 189, '../internals/to-string': 215, '../internals/well-known-symbol': 225, '../modules/es.array.iterator': 246 }],
  455: [function (require, module, exports) {
    'use strict'
    // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
    require('../modules/es.string.iterator')
    const $ = require('../internals/export')
    const DESCRIPTORS = require('../internals/descriptors')
    const USE_NATIVE_URL = require('../internals/native-url')
    const global = require('../internals/global')
    const defineProperties = require('../internals/object-define-properties')
    const redefine = require('../internals/redefine')
    const anInstance = require('../internals/an-instance')
    const hasOwn = require('../internals/has-own-property')
    const assign = require('../internals/object-assign')
    const arrayFrom = require('../internals/array-from')
    const codeAt = require('../internals/string-multibyte').codeAt
    const toASCII = require('../internals/string-punycode-to-ascii')
    const $toString = require('../internals/to-string')
    const setToStringTag = require('../internals/set-to-string-tag')
    const URLSearchParamsModule = require('../modules/web.url-search-params')
    const InternalStateModule = require('../internals/internal-state')

    const NativeURL = global.URL
    const URLSearchParams = URLSearchParamsModule.URLSearchParams
    const getInternalSearchParamsState = URLSearchParamsModule.getState
    const setInternalState = InternalStateModule.set
    const getInternalURLState = InternalStateModule.getterFor('URL')
    const floor = Math.floor
    const pow = Math.pow

    const INVALID_AUTHORITY = 'Invalid authority'
    const INVALID_SCHEME = 'Invalid scheme'
    const INVALID_HOST = 'Invalid host'
    const INVALID_PORT = 'Invalid port'

    const ALPHA = /[a-z]/i
    // eslint-disable-next-line regexp/no-obscure-range -- safe
    const ALPHANUMERIC = /[\d+-.a-z]/i
    const DIGIT = /\d/
    const HEX_START = /^0x/i
    const OCT = /^[0-7]+$/
    const DEC = /^\d+$/
    const HEX = /^[\da-f]+$/i
    /* eslint-disable regexp/no-control-character -- safe */
    const FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/
    const FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/
    const LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g
    const TAB_AND_NEW_LINE = /[\t\n\r]/g
    /* eslint-enable regexp/no-control-character -- safe */
    let EOF

    const parseHost = function (url, input) {
      let result, codePoints, index
      if (input.charAt(0) == '[') {
        if (input.charAt(input.length - 1) != ']') return INVALID_HOST
        result = parseIPv6(input.slice(1, -1))
        if (!result) return INVALID_HOST
        url.host = result
        // opaque host
      } else if (!isSpecial(url)) {
        if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST
        result = ''
        codePoints = arrayFrom(input)
        for (index = 0; index < codePoints.length; index++) {
          result += percentEncode(codePoints[index], C0ControlPercentEncodeSet)
        }
        url.host = result
      } else {
        input = toASCII(input)
        if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST
        result = parseIPv4(input)
        if (result === null) return INVALID_HOST
        url.host = result
      }
    }

    var parseIPv4 = function (input) {
      const parts = input.split('.')
      let partsLength, numbers, index, part, radix, number, ipv4
      if (parts.length && parts[parts.length - 1] == '') {
        parts.pop()
      }
      partsLength = parts.length
      if (partsLength > 4) return input
      numbers = []
      for (index = 0; index < partsLength; index++) {
        part = parts[index]
        if (part == '') return input
        radix = 10
        if (part.length > 1 && part.charAt(0) == '0') {
          radix = HEX_START.test(part) ? 16 : 8
          part = part.slice(radix == 8 ? 1 : 2)
        }
        if (part === '') {
          number = 0
        } else {
          if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input
          number = parseInt(part, radix)
        }
        numbers.push(number)
      }
      for (index = 0; index < partsLength; index++) {
        number = numbers[index]
        if (index == partsLength - 1) {
          if (number >= pow(256, 5 - partsLength)) return null
        } else if (number > 255) return null
      }
      ipv4 = numbers.pop()
      for (index = 0; index < numbers.length; index++) {
        ipv4 += numbers[index] * pow(256, 3 - index)
      }
      return ipv4
    }

    // eslint-disable-next-line max-statements -- TODO
    var parseIPv6 = function (input) {
      const address = [0, 0, 0, 0, 0, 0, 0, 0]
      let pieceIndex = 0
      let compress = null
      let pointer = 0
      let value, length, numbersSeen, ipv4Piece, number, swaps, swap

      const chr = function () {
        return input.charAt(pointer)
      }

      if (chr() == ':') {
        if (input.charAt(1) != ':') return
        pointer += 2
        pieceIndex++
        compress = pieceIndex
      }
      while (chr()) {
        if (pieceIndex == 8) return
        if (chr() == ':') {
          if (compress !== null) return
          pointer++
          pieceIndex++
          compress = pieceIndex
          continue
        }
        value = length = 0
        while (length < 4 && HEX.test(chr())) {
          value = value * 16 + parseInt(chr(), 16)
          pointer++
          length++
        }
        if (chr() == '.') {
          if (length == 0) return
          pointer -= length
          if (pieceIndex > 6) return
          numbersSeen = 0
          while (chr()) {
            ipv4Piece = null
            if (numbersSeen > 0) {
              if (chr() == '.' && numbersSeen < 4) pointer++
              else return
            }
            if (!DIGIT.test(chr())) return
            while (DIGIT.test(chr())) {
              number = parseInt(chr(), 10)
              if (ipv4Piece === null) ipv4Piece = number
              else if (ipv4Piece == 0) return
              else ipv4Piece = ipv4Piece * 10 + number
              if (ipv4Piece > 255) return
              pointer++
            }
            address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece
            numbersSeen++
            if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++
          }
          if (numbersSeen != 4) return
          break
        } else if (chr() == ':') {
          pointer++
          if (!chr()) return
        } else if (chr()) return
        address[pieceIndex++] = value
      }
      if (compress !== null) {
        swaps = pieceIndex - compress
        pieceIndex = 7
        while (pieceIndex != 0 && swaps > 0) {
          swap = address[pieceIndex]
          address[pieceIndex--] = address[compress + swaps - 1]
          address[compress + --swaps] = swap
        }
      } else if (pieceIndex != 8) return
      return address
    }

    const findLongestZeroSequence = function (ipv6) {
      let maxIndex = null
      let maxLength = 1
      let currStart = null
      let currLength = 0
      let index = 0
      for (; index < 8; index++) {
        if (ipv6[index] !== 0) {
          if (currLength > maxLength) {
            maxIndex = currStart
            maxLength = currLength
          }
          currStart = null
          currLength = 0
        } else {
          if (currStart === null) currStart = index
          ++currLength
        }
      }
      if (currLength > maxLength) {
        maxIndex = currStart
        maxLength = currLength
      }
      return maxIndex
    }

    const serializeHost = function (host) {
      let result, index, compress, ignore0
      // ipv4
      if (typeof host === 'number') {
        result = []
        for (index = 0; index < 4; index++) {
          result.unshift(host % 256)
          host = floor(host / 256)
        } return result.join('.')
        // ipv6
      } else if (typeof host === 'object') {
        result = ''
        compress = findLongestZeroSequence(host)
        for (index = 0; index < 8; index++) {
          if (ignore0 && host[index] === 0) continue
          if (ignore0) ignore0 = false
          if (compress === index) {
            result += index ? ':' : '::'
            ignore0 = true
          } else {
            result += host[index].toString(16)
            if (index < 7) result += ':'
          }
        }
        return '[' + result + ']'
      } return host
    }

    var C0ControlPercentEncodeSet = {}
    const fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
      ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
    })
    const pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
      '#': 1, '?': 1, '{': 1, '}': 1
    })
    const userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
      '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
    })

    var percentEncode = function (chr, set) {
      const code = codeAt(chr, 0)
      return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr)
    }

    const specialSchemes = {
      ftp: 21,
      file: null,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    }

    var isSpecial = function (url) {
      return hasOwn(specialSchemes, url.scheme)
    }

    const includesCredentials = function (url) {
      return url.username != '' || url.password != ''
    }

    const cannotHaveUsernamePasswordPort = function (url) {
      return !url.host || url.cannotBeABaseURL || url.scheme == 'file'
    }

    const isWindowsDriveLetter = function (string, normalized) {
      let second
      return string.length == 2 && ALPHA.test(string.charAt(0)) &&
    ((second = string.charAt(1)) == ':' || (!normalized && second == '|'))
    }

    const startsWithWindowsDriveLetter = function (string) {
      let third
      return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
        string.length == 2 ||
    ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
      )
    }

    const shortenURLsPath = function (url) {
      const path = url.path
      const pathSize = path.length
      if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
        path.pop()
      }
    }

    const isSingleDot = function (segment) {
      return segment === '.' || segment.toLowerCase() === '%2e'
    }

    const isDoubleDot = function (segment) {
      segment = segment.toLowerCase()
      return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e'
    }

    // States:
    const SCHEME_START = {}
    const SCHEME = {}
    const NO_SCHEME = {}
    const SPECIAL_RELATIVE_OR_AUTHORITY = {}
    const PATH_OR_AUTHORITY = {}
    const RELATIVE = {}
    const RELATIVE_SLASH = {}
    const SPECIAL_AUTHORITY_SLASHES = {}
    const SPECIAL_AUTHORITY_IGNORE_SLASHES = {}
    const AUTHORITY = {}
    const HOST = {}
    const HOSTNAME = {}
    const PORT = {}
    const FILE = {}
    const FILE_SLASH = {}
    const FILE_HOST = {}
    const PATH_START = {}
    const PATH = {}
    const CANNOT_BE_A_BASE_URL_PATH = {}
    const QUERY = {}
    const FRAGMENT = {}

    // eslint-disable-next-line max-statements -- TODO
    const parseURL = function (url, input, stateOverride, base) {
      let state = stateOverride || SCHEME_START
      let pointer = 0
      let buffer = ''
      let seenAt = false
      let seenBracket = false
      let seenPasswordToken = false
      let codePoints, chr, bufferCodePoints, failure

      if (!stateOverride) {
        url.scheme = ''
        url.username = ''
        url.password = ''
        url.host = null
        url.port = null
        url.path = []
        url.query = null
        url.fragment = null
        url.cannotBeABaseURL = false
        input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '')
      }

      input = input.replace(TAB_AND_NEW_LINE, '')

      codePoints = arrayFrom(input)

      while (pointer <= codePoints.length) {
        chr = codePoints[pointer]
        switch (state) {
          case SCHEME_START:
            if (chr && ALPHA.test(chr)) {
              buffer += chr.toLowerCase()
              state = SCHEME
            } else if (!stateOverride) {
              state = NO_SCHEME
              continue
            } else return INVALID_SCHEME
            break

          case SCHEME:
            if (chr && (ALPHANUMERIC.test(chr) || chr == '+' || chr == '-' || chr == '.')) {
              buffer += chr.toLowerCase()
            } else if (chr == ':') {
              if (stateOverride && (
                (isSpecial(url) != hasOwn(specialSchemes, buffer)) ||
            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
            (url.scheme == 'file' && !url.host)
              )) return
              url.scheme = buffer
              if (stateOverride) {
                if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null
                return
              }
              buffer = ''
              if (url.scheme == 'file') {
                state = FILE
              } else if (isSpecial(url) && base && base.scheme == url.scheme) {
                state = SPECIAL_RELATIVE_OR_AUTHORITY
              } else if (isSpecial(url)) {
                state = SPECIAL_AUTHORITY_SLASHES
              } else if (codePoints[pointer + 1] == '/') {
                state = PATH_OR_AUTHORITY
                pointer++
              } else {
                url.cannotBeABaseURL = true
                url.path.push('')
                state = CANNOT_BE_A_BASE_URL_PATH
              }
            } else if (!stateOverride) {
              buffer = ''
              state = NO_SCHEME
              pointer = 0
              continue
            } else return INVALID_SCHEME
            break

          case NO_SCHEME:
            if (!base || (base.cannotBeABaseURL && chr != '#')) return INVALID_SCHEME
            if (base.cannotBeABaseURL && chr == '#') {
              url.scheme = base.scheme
              url.path = base.path.slice()
              url.query = base.query
              url.fragment = ''
              url.cannotBeABaseURL = true
              state = FRAGMENT
              break
            }
            state = base.scheme == 'file' ? FILE : RELATIVE
            continue

          case SPECIAL_RELATIVE_OR_AUTHORITY:
            if (chr == '/' && codePoints[pointer + 1] == '/') {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES
              pointer++
            } else {
              state = RELATIVE
              continue
            } break

          case PATH_OR_AUTHORITY:
            if (chr == '/') {
              state = AUTHORITY
              break
            } else {
              state = PATH
              continue
            }

          case RELATIVE:
            url.scheme = base.scheme
            if (chr == EOF) {
              url.username = base.username
              url.password = base.password
              url.host = base.host
              url.port = base.port
              url.path = base.path.slice()
              url.query = base.query
            } else if (chr == '/' || (chr == '\\' && isSpecial(url))) {
              state = RELATIVE_SLASH
            } else if (chr == '?') {
              url.username = base.username
              url.password = base.password
              url.host = base.host
              url.port = base.port
              url.path = base.path.slice()
              url.query = ''
              state = QUERY
            } else if (chr == '#') {
              url.username = base.username
              url.password = base.password
              url.host = base.host
              url.port = base.port
              url.path = base.path.slice()
              url.query = base.query
              url.fragment = ''
              state = FRAGMENT
            } else {
              url.username = base.username
              url.password = base.password
              url.host = base.host
              url.port = base.port
              url.path = base.path.slice()
              url.path.pop()
              state = PATH
              continue
            } break

          case RELATIVE_SLASH:
            if (isSpecial(url) && (chr == '/' || chr == '\\')) {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES
            } else if (chr == '/') {
              state = AUTHORITY
            } else {
              url.username = base.username
              url.password = base.password
              url.host = base.host
              url.port = base.port
              state = PATH
              continue
            } break

          case SPECIAL_AUTHORITY_SLASHES:
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES
            if (chr != '/' || buffer.charAt(pointer + 1) != '/') continue
            pointer++
            break

          case SPECIAL_AUTHORITY_IGNORE_SLASHES:
            if (chr != '/' && chr != '\\') {
              state = AUTHORITY
              continue
            } break

          case AUTHORITY:
            if (chr == '@') {
              if (seenAt) buffer = '%40' + buffer
              seenAt = true
              bufferCodePoints = arrayFrom(buffer)
              for (let i = 0; i < bufferCodePoints.length; i++) {
                const codePoint = bufferCodePoints[i]
                if (codePoint == ':' && !seenPasswordToken) {
                  seenPasswordToken = true
                  continue
                }
                const encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet)
                if (seenPasswordToken) url.password += encodedCodePoints
                else url.username += encodedCodePoints
              }
              buffer = ''
            } else if (
              chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
          (chr == '\\' && isSpecial(url))
            ) {
              if (seenAt && buffer == '') return INVALID_AUTHORITY
              pointer -= arrayFrom(buffer).length + 1
              buffer = ''
              state = HOST
            } else buffer += chr
            break

          case HOST:
          case HOSTNAME:
            if (stateOverride && url.scheme == 'file') {
              state = FILE_HOST
              continue
            } else if (chr == ':' && !seenBracket) {
              if (buffer == '') return INVALID_HOST
              failure = parseHost(url, buffer)
              if (failure) return failure
              buffer = ''
              state = PORT
              if (stateOverride == HOSTNAME) return
            } else if (
              chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
          (chr == '\\' && isSpecial(url))
            ) {
              if (isSpecial(url) && buffer == '') return INVALID_HOST
              if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return
              failure = parseHost(url, buffer)
              if (failure) return failure
              buffer = ''
              state = PATH_START
              if (stateOverride) return
              continue
            } else {
              if (chr == '[') seenBracket = true
              else if (chr == ']') seenBracket = false
              buffer += chr
            } break

          case PORT:
            if (DIGIT.test(chr)) {
              buffer += chr
            } else if (
              chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
          (chr == '\\' && isSpecial(url)) ||
          stateOverride
            ) {
              if (buffer != '') {
                const port = parseInt(buffer, 10)
                if (port > 0xFFFF) return INVALID_PORT
                url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port
                buffer = ''
              }
              if (stateOverride) return
              state = PATH_START
              continue
            } else return INVALID_PORT
            break

          case FILE:
            url.scheme = 'file'
            if (chr == '/' || chr == '\\') state = FILE_SLASH
            else if (base && base.scheme == 'file') {
              if (chr == EOF) {
                url.host = base.host
                url.path = base.path.slice()
                url.query = base.query
              } else if (chr == '?') {
                url.host = base.host
                url.path = base.path.slice()
                url.query = ''
                state = QUERY
              } else if (chr == '#') {
                url.host = base.host
                url.path = base.path.slice()
                url.query = base.query
                url.fragment = ''
                state = FRAGMENT
              } else {
                if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                  url.host = base.host
                  url.path = base.path.slice()
                  shortenURLsPath(url)
                }
                state = PATH
                continue
              }
            } else {
              state = PATH
              continue
            } break

          case FILE_SLASH:
            if (chr == '/' || chr == '\\') {
              state = FILE_HOST
              break
            }
            if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
              if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0])
              else url.host = base.host
            }
            state = PATH
            continue

          case FILE_HOST:
            if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
              if (!stateOverride && isWindowsDriveLetter(buffer)) {
                state = PATH
              } else if (buffer == '') {
                url.host = ''
                if (stateOverride) return
                state = PATH_START
              } else {
                failure = parseHost(url, buffer)
                if (failure) return failure
                if (url.host == 'localhost') url.host = ''
                if (stateOverride) return
                buffer = ''
                state = PATH_START
              } continue
            } else buffer += chr
            break

          case PATH_START:
            if (isSpecial(url)) {
              state = PATH
              if (chr != '/' && chr != '\\') continue
            } else if (!stateOverride && chr == '?') {
              url.query = ''
              state = QUERY
            } else if (!stateOverride && chr == '#') {
              url.fragment = ''
              state = FRAGMENT
            } else if (chr != EOF) {
              state = PATH
              if (chr != '/') continue
            } break

          case PATH:
            if (
              chr == EOF || chr == '/' ||
          (chr == '\\' && isSpecial(url)) ||
          (!stateOverride && (chr == '?' || chr == '#'))
            ) {
              if (isDoubleDot(buffer)) {
                shortenURLsPath(url)
                if (chr != '/' && !(chr == '\\' && isSpecial(url))) {
                  url.path.push('')
                }
              } else if (isSingleDot(buffer)) {
                if (chr != '/' && !(chr == '\\' && isSpecial(url))) {
                  url.path.push('')
                }
              } else {
                if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                  if (url.host) url.host = ''
                  buffer = buffer.charAt(0) + ':' // normalize windows drive letter
                }
                url.path.push(buffer)
              }
              buffer = ''
              if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
                while (url.path.length > 1 && url.path[0] === '') {
                  url.path.shift()
                }
              }
              if (chr == '?') {
                url.query = ''
                state = QUERY
              } else if (chr == '#') {
                url.fragment = ''
                state = FRAGMENT
              }
            } else {
              buffer += percentEncode(chr, pathPercentEncodeSet)
            } break

          case CANNOT_BE_A_BASE_URL_PATH:
            if (chr == '?') {
              url.query = ''
              state = QUERY
            } else if (chr == '#') {
              url.fragment = ''
              state = FRAGMENT
            } else if (chr != EOF) {
              url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet)
            } break

          case QUERY:
            if (!stateOverride && chr == '#') {
              url.fragment = ''
              state = FRAGMENT
            } else if (chr != EOF) {
              if (chr == "'" && isSpecial(url)) url.query += '%27'
              else if (chr == '#') url.query += '%23'
              else url.query += percentEncode(chr, C0ControlPercentEncodeSet)
            } break

          case FRAGMENT:
            if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet)
            break
        }

        pointer++
      }
    }

    // `URL` constructor
    // https://url.spec.whatwg.org/#url-class
    var URLConstructor = function URL (url /* , base */) {
      const that = anInstance(this, URLConstructor, 'URL')
      const base = arguments.length > 1 ? arguments[1] : undefined
      const urlString = $toString(url)
      const state = setInternalState(that, { type: 'URL' })
      let baseState, failure
      if (base !== undefined) {
        if (base instanceof URLConstructor) baseState = getInternalURLState(base)
        else {
          failure = parseURL(baseState = {}, $toString(base))
          if (failure) throw TypeError(failure)
        }
      }
      failure = parseURL(state, urlString, null, baseState)
      if (failure) throw TypeError(failure)
      const searchParams = state.searchParams = new URLSearchParams()
      const searchParamsState = getInternalSearchParamsState(searchParams)
      searchParamsState.updateSearchParams(state.query)
      searchParamsState.updateURL = function () {
        state.query = String(searchParams) || null
      }
      if (!DESCRIPTORS) {
        that.href = serializeURL.call(that)
        that.origin = getOrigin.call(that)
        that.protocol = getProtocol.call(that)
        that.username = getUsername.call(that)
        that.password = getPassword.call(that)
        that.host = getHost.call(that)
        that.hostname = getHostname.call(that)
        that.port = getPort.call(that)
        that.pathname = getPathname.call(that)
        that.search = getSearch.call(that)
        that.searchParams = getSearchParams.call(that)
        that.hash = getHash.call(that)
      }
    }

    const URLPrototype = URLConstructor.prototype

    var serializeURL = function () {
      const url = getInternalURLState(this)
      const scheme = url.scheme
      const username = url.username
      const password = url.password
      const host = url.host
      const port = url.port
      const path = url.path
      const query = url.query
      const fragment = url.fragment
      let output = scheme + ':'
      if (host !== null) {
        output += '//'
        if (includesCredentials(url)) {
          output += username + (password ? ':' + password : '') + '@'
        }
        output += serializeHost(host)
        if (port !== null) output += ':' + port
      } else if (scheme == 'file') output += '//'
      output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : ''
      if (query !== null) output += '?' + query
      if (fragment !== null) output += '#' + fragment
      return output
    }

    var getOrigin = function () {
      const url = getInternalURLState(this)
      const scheme = url.scheme
      const port = url.port
      if (scheme == 'blob') {
        try {
          return new URLConstructor(scheme.path[0]).origin
        } catch (error) {
          return 'null'
        }
      }
      if (scheme == 'file' || !isSpecial(url)) return 'null'
      return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '')
    }

    var getProtocol = function () {
      return getInternalURLState(this).scheme + ':'
    }

    var getUsername = function () {
      return getInternalURLState(this).username
    }

    var getPassword = function () {
      return getInternalURLState(this).password
    }

    var getHost = function () {
      const url = getInternalURLState(this)
      const host = url.host
      const port = url.port
      return host === null
        ? ''
        : port === null
          ? serializeHost(host)
          : serializeHost(host) + ':' + port
    }

    var getHostname = function () {
      const host = getInternalURLState(this).host
      return host === null ? '' : serializeHost(host)
    }

    var getPort = function () {
      const port = getInternalURLState(this).port
      return port === null ? '' : String(port)
    }

    var getPathname = function () {
      const url = getInternalURLState(this)
      const path = url.path
      return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : ''
    }

    var getSearch = function () {
      const query = getInternalURLState(this).query
      return query ? '?' + query : ''
    }

    var getSearchParams = function () {
      return getInternalURLState(this).searchParams
    }

    var getHash = function () {
      const fragment = getInternalURLState(this).fragment
      return fragment ? '#' + fragment : ''
    }

    const accessorDescriptor = function (getter, setter) {
      return { get: getter, set: setter, configurable: true, enumerable: true }
    }

    if (DESCRIPTORS) {
      defineProperties(URLPrototype, {
        // `URL.prototype.href` accessors pair
        // https://url.spec.whatwg.org/#dom-url-href
        href: accessorDescriptor(serializeURL, function (href) {
          const url = getInternalURLState(this)
          const urlString = $toString(href)
          const failure = parseURL(url, urlString)
          if (failure) throw TypeError(failure)
          getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query)
        }),
        // `URL.prototype.origin` getter
        // https://url.spec.whatwg.org/#dom-url-origin
        origin: accessorDescriptor(getOrigin),
        // `URL.prototype.protocol` accessors pair
        // https://url.spec.whatwg.org/#dom-url-protocol
        protocol: accessorDescriptor(getProtocol, function (protocol) {
          const url = getInternalURLState(this)
          parseURL(url, $toString(protocol) + ':', SCHEME_START)
        }),
        // `URL.prototype.username` accessors pair
        // https://url.spec.whatwg.org/#dom-url-username
        username: accessorDescriptor(getUsername, function (username) {
          const url = getInternalURLState(this)
          const codePoints = arrayFrom($toString(username))
          if (cannotHaveUsernamePasswordPort(url)) return
          url.username = ''
          for (let i = 0; i < codePoints.length; i++) {
            url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet)
          }
        }),
        // `URL.prototype.password` accessors pair
        // https://url.spec.whatwg.org/#dom-url-password
        password: accessorDescriptor(getPassword, function (password) {
          const url = getInternalURLState(this)
          const codePoints = arrayFrom($toString(password))
          if (cannotHaveUsernamePasswordPort(url)) return
          url.password = ''
          for (let i = 0; i < codePoints.length; i++) {
            url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet)
          }
        }),
        // `URL.prototype.host` accessors pair
        // https://url.spec.whatwg.org/#dom-url-host
        host: accessorDescriptor(getHost, function (host) {
          const url = getInternalURLState(this)
          if (url.cannotBeABaseURL) return
          parseURL(url, $toString(host), HOST)
        }),
        // `URL.prototype.hostname` accessors pair
        // https://url.spec.whatwg.org/#dom-url-hostname
        hostname: accessorDescriptor(getHostname, function (hostname) {
          const url = getInternalURLState(this)
          if (url.cannotBeABaseURL) return
          parseURL(url, $toString(hostname), HOSTNAME)
        }),
        // `URL.prototype.port` accessors pair
        // https://url.spec.whatwg.org/#dom-url-port
        port: accessorDescriptor(getPort, function (port) {
          const url = getInternalURLState(this)
          if (cannotHaveUsernamePasswordPort(url)) return
          port = $toString(port)
          if (port == '') url.port = null
          else parseURL(url, port, PORT)
        }),
        // `URL.prototype.pathname` accessors pair
        // https://url.spec.whatwg.org/#dom-url-pathname
        pathname: accessorDescriptor(getPathname, function (pathname) {
          const url = getInternalURLState(this)
          if (url.cannotBeABaseURL) return
          url.path = []
          parseURL(url, $toString(pathname), PATH_START)
        }),
        // `URL.prototype.search` accessors pair
        // https://url.spec.whatwg.org/#dom-url-search
        search: accessorDescriptor(getSearch, function (search) {
          const url = getInternalURLState(this)
          search = $toString(search)
          if (search == '') {
            url.query = null
          } else {
            if (search.charAt(0) == '?') search = search.slice(1)
            url.query = ''
            parseURL(url, search, QUERY)
          }
          getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query)
        }),
        // `URL.prototype.searchParams` getter
        // https://url.spec.whatwg.org/#dom-url-searchparams
        searchParams: accessorDescriptor(getSearchParams),
        // `URL.prototype.hash` accessors pair
        // https://url.spec.whatwg.org/#dom-url-hash
        hash: accessorDescriptor(getHash, function (hash) {
          const url = getInternalURLState(this)
          hash = $toString(hash)
          if (hash == '') {
            url.fragment = null
            return
          }
          if (hash.charAt(0) == '#') hash = hash.slice(1)
          url.fragment = ''
          parseURL(url, hash, FRAGMENT)
        })
      })
    }

    // `URL.prototype.toJSON` method
    // https://url.spec.whatwg.org/#dom-url-tojson
    redefine(URLPrototype, 'toJSON', function toJSON () {
      return serializeURL.call(this)
    }, { enumerable: true })

    // `URL.prototype.toString` method
    // https://url.spec.whatwg.org/#URL-stringification-behavior
    redefine(URLPrototype, 'toString', function toString () {
      return serializeURL.call(this)
    }, { enumerable: true })

    if (NativeURL) {
      const nativeCreateObjectURL = NativeURL.createObjectURL
      const nativeRevokeObjectURL = NativeURL.revokeObjectURL
      // `URL.createObjectURL` method
      // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      if (nativeCreateObjectURL) {
        redefine(URLConstructor, 'createObjectURL', function createObjectURL (blob) {
          return nativeCreateObjectURL.apply(NativeURL, arguments)
        })
      }
      // `URL.revokeObjectURL` method
      // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      if (nativeRevokeObjectURL) {
        redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL (url) {
          return nativeRevokeObjectURL.apply(NativeURL, arguments)
        })
      }
    }

    setToStringTag(URLConstructor, 'URL')

    $({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
      URL: URLConstructor
    })
  }, { '../internals/an-instance': 47, '../internals/array-from': 56, '../internals/descriptors': 85, '../internals/export': 100, '../internals/global': 113, '../internals/has-own-property': 114, '../internals/internal-state': 125, '../internals/native-url': 149, '../internals/object-assign': 156, '../internals/object-define-properties': 158, '../internals/redefine': 178, '../internals/set-to-string-tag': 189, '../internals/string-multibyte': 195, '../internals/string-punycode-to-ascii': 198, '../internals/to-string': 215, '../modules/es.string.iterator': 375, '../modules/web.url-search-params': 454 }],
  456: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')

    // `URL.prototype.toJSON` method
    // https://url.spec.whatwg.org/#dom-url-tojson
    $({ target: 'URL', proto: true, enumerable: true }, {
      toJSON: function toJSON () {
        return URL.prototype.toString.call(this)
      }
    })
  }, { '../internals/export': 100 }],
  457: [function (require, module, exports) {
    require('../modules/es.symbol')
    require('../modules/es.symbol.description')
    require('../modules/es.symbol.async-iterator')
    require('../modules/es.symbol.has-instance')
    require('../modules/es.symbol.is-concat-spreadable')
    require('../modules/es.symbol.iterator')
    require('../modules/es.symbol.match')
    require('../modules/es.symbol.match-all')
    require('../modules/es.symbol.replace')
    require('../modules/es.symbol.search')
    require('../modules/es.symbol.species')
    require('../modules/es.symbol.split')
    require('../modules/es.symbol.to-primitive')
    require('../modules/es.symbol.to-string-tag')
    require('../modules/es.symbol.unscopables')
    require('../modules/es.aggregate-error')
    require('../modules/es.array.at')
    require('../modules/es.array.concat')
    require('../modules/es.array.copy-within')
    require('../modules/es.array.every')
    require('../modules/es.array.fill')
    require('../modules/es.array.filter')
    require('../modules/es.array.find')
    require('../modules/es.array.find-index')
    require('../modules/es.array.flat')
    require('../modules/es.array.flat-map')
    require('../modules/es.array.for-each')
    require('../modules/es.array.from')
    require('../modules/es.array.includes')
    require('../modules/es.array.index-of')
    require('../modules/es.array.is-array')
    require('../modules/es.array.iterator')
    require('../modules/es.array.join')
    require('../modules/es.array.last-index-of')
    require('../modules/es.array.map')
    require('../modules/es.array.of')
    require('../modules/es.array.reduce')
    require('../modules/es.array.reduce-right')
    require('../modules/es.array.reverse')
    require('../modules/es.array.slice')
    require('../modules/es.array.some')
    require('../modules/es.array.sort')
    require('../modules/es.array.species')
    require('../modules/es.array.splice')
    require('../modules/es.array.unscopables.flat')
    require('../modules/es.array.unscopables.flat-map')
    require('../modules/es.array-buffer.constructor')
    require('../modules/es.array-buffer.is-view')
    require('../modules/es.array-buffer.slice')
    require('../modules/es.data-view')
    require('../modules/es.date.get-year')
    require('../modules/es.date.now')
    require('../modules/es.date.set-year')
    require('../modules/es.date.to-gmt-string')
    require('../modules/es.date.to-iso-string')
    require('../modules/es.date.to-json')
    require('../modules/es.date.to-primitive')
    require('../modules/es.date.to-string')
    require('../modules/es.escape')
    require('../modules/es.function.bind')
    require('../modules/es.function.has-instance')
    require('../modules/es.function.name')
    require('../modules/es.global-this')
    require('../modules/es.json.stringify')
    require('../modules/es.json.to-string-tag')
    require('../modules/es.map')
    require('../modules/es.math.acosh')
    require('../modules/es.math.asinh')
    require('../modules/es.math.atanh')
    require('../modules/es.math.cbrt')
    require('../modules/es.math.clz32')
    require('../modules/es.math.cosh')
    require('../modules/es.math.expm1')
    require('../modules/es.math.fround')
    require('../modules/es.math.hypot')
    require('../modules/es.math.imul')
    require('../modules/es.math.log10')
    require('../modules/es.math.log1p')
    require('../modules/es.math.log2')
    require('../modules/es.math.sign')
    require('../modules/es.math.sinh')
    require('../modules/es.math.tanh')
    require('../modules/es.math.to-string-tag')
    require('../modules/es.math.trunc')
    require('../modules/es.number.constructor')
    require('../modules/es.number.epsilon')
    require('../modules/es.number.is-finite')
    require('../modules/es.number.is-integer')
    require('../modules/es.number.is-nan')
    require('../modules/es.number.is-safe-integer')
    require('../modules/es.number.max-safe-integer')
    require('../modules/es.number.min-safe-integer')
    require('../modules/es.number.parse-float')
    require('../modules/es.number.parse-int')
    require('../modules/es.number.to-fixed')
    require('../modules/es.number.to-precision')
    require('../modules/es.object.assign')
    require('../modules/es.object.create')
    require('../modules/es.object.define-getter')
    require('../modules/es.object.define-properties')
    require('../modules/es.object.define-property')
    require('../modules/es.object.define-setter')
    require('../modules/es.object.entries')
    require('../modules/es.object.freeze')
    require('../modules/es.object.from-entries')
    require('../modules/es.object.get-own-property-descriptor')
    require('../modules/es.object.get-own-property-descriptors')
    require('../modules/es.object.get-own-property-names')
    require('../modules/es.object.get-prototype-of')
    require('../modules/es.object.has-own')
    require('../modules/es.object.is')
    require('../modules/es.object.is-extensible')
    require('../modules/es.object.is-frozen')
    require('../modules/es.object.is-sealed')
    require('../modules/es.object.keys')
    require('../modules/es.object.lookup-getter')
    require('../modules/es.object.lookup-setter')
    require('../modules/es.object.prevent-extensions')
    require('../modules/es.object.seal')
    require('../modules/es.object.set-prototype-of')
    require('../modules/es.object.to-string')
    require('../modules/es.object.values')
    require('../modules/es.parse-float')
    require('../modules/es.parse-int')
    require('../modules/es.promise')
    require('../modules/es.promise.all-settled')
    require('../modules/es.promise.any')
    require('../modules/es.promise.finally')
    require('../modules/es.reflect.apply')
    require('../modules/es.reflect.construct')
    require('../modules/es.reflect.define-property')
    require('../modules/es.reflect.delete-property')
    require('../modules/es.reflect.get')
    require('../modules/es.reflect.get-own-property-descriptor')
    require('../modules/es.reflect.get-prototype-of')
    require('../modules/es.reflect.has')
    require('../modules/es.reflect.is-extensible')
    require('../modules/es.reflect.own-keys')
    require('../modules/es.reflect.prevent-extensions')
    require('../modules/es.reflect.set')
    require('../modules/es.reflect.set-prototype-of')
    require('../modules/es.reflect.to-string-tag')
    require('../modules/es.regexp.constructor')
    require('../modules/es.regexp.dot-all')
    require('../modules/es.regexp.exec')
    require('../modules/es.regexp.flags')
    require('../modules/es.regexp.sticky')
    require('../modules/es.regexp.test')
    require('../modules/es.regexp.to-string')
    require('../modules/es.set')
    require('../modules/es.string.at-alternative')
    require('../modules/es.string.code-point-at')
    require('../modules/es.string.ends-with')
    require('../modules/es.string.from-code-point')
    require('../modules/es.string.includes')
    require('../modules/es.string.iterator')
    require('../modules/es.string.match')
    require('../modules/es.string.match-all')
    require('../modules/es.string.pad-end')
    require('../modules/es.string.pad-start')
    require('../modules/es.string.raw')
    require('../modules/es.string.repeat')
    require('../modules/es.string.replace')
    require('../modules/es.string.replace-all')
    require('../modules/es.string.search')
    require('../modules/es.string.split')
    require('../modules/es.string.starts-with')
    require('../modules/es.string.substr')
    require('../modules/es.string.trim')
    require('../modules/es.string.trim-end')
    require('../modules/es.string.trim-start')
    require('../modules/es.string.anchor')
    require('../modules/es.string.big')
    require('../modules/es.string.blink')
    require('../modules/es.string.bold')
    require('../modules/es.string.fixed')
    require('../modules/es.string.fontcolor')
    require('../modules/es.string.fontsize')
    require('../modules/es.string.italics')
    require('../modules/es.string.link')
    require('../modules/es.string.small')
    require('../modules/es.string.strike')
    require('../modules/es.string.sub')
    require('../modules/es.string.sup')
    require('../modules/es.typed-array.float32-array')
    require('../modules/es.typed-array.float64-array')
    require('../modules/es.typed-array.int8-array')
    require('../modules/es.typed-array.int16-array')
    require('../modules/es.typed-array.int32-array')
    require('../modules/es.typed-array.uint8-array')
    require('../modules/es.typed-array.uint8-clamped-array')
    require('../modules/es.typed-array.uint16-array')
    require('../modules/es.typed-array.uint32-array')
    require('../modules/es.typed-array.at')
    require('../modules/es.typed-array.copy-within')
    require('../modules/es.typed-array.every')
    require('../modules/es.typed-array.fill')
    require('../modules/es.typed-array.filter')
    require('../modules/es.typed-array.find')
    require('../modules/es.typed-array.find-index')
    require('../modules/es.typed-array.for-each')
    require('../modules/es.typed-array.from')
    require('../modules/es.typed-array.includes')
    require('../modules/es.typed-array.index-of')
    require('../modules/es.typed-array.iterator')
    require('../modules/es.typed-array.join')
    require('../modules/es.typed-array.last-index-of')
    require('../modules/es.typed-array.map')
    require('../modules/es.typed-array.of')
    require('../modules/es.typed-array.reduce')
    require('../modules/es.typed-array.reduce-right')
    require('../modules/es.typed-array.reverse')
    require('../modules/es.typed-array.set')
    require('../modules/es.typed-array.slice')
    require('../modules/es.typed-array.some')
    require('../modules/es.typed-array.sort')
    require('../modules/es.typed-array.subarray')
    require('../modules/es.typed-array.to-locale-string')
    require('../modules/es.typed-array.to-string')
    require('../modules/es.unescape')
    require('../modules/es.weak-map')
    require('../modules/es.weak-set')
    require('../modules/web.dom-collections.for-each')
    require('../modules/web.dom-collections.iterator')
    require('../modules/web.immediate')
    require('../modules/web.queue-microtask')
    require('../modules/web.timers')
    require('../modules/web.url')
    require('../modules/web.url.to-json')
    require('../modules/web.url-search-params')

    module.exports = require('../internals/path')
  }, { '../internals/path': 174, '../modules/es.aggregate-error': 227, '../modules/es.array-buffer.constructor': 228, '../modules/es.array-buffer.is-view': 229, '../modules/es.array-buffer.slice': 230, '../modules/es.array.at': 231, '../modules/es.array.concat': 232, '../modules/es.array.copy-within': 233, '../modules/es.array.every': 234, '../modules/es.array.fill': 235, '../modules/es.array.filter': 236, '../modules/es.array.find': 238, '../modules/es.array.find-index': 237, '../modules/es.array.flat': 240, '../modules/es.array.flat-map': 239, '../modules/es.array.for-each': 241, '../modules/es.array.from': 242, '../modules/es.array.includes': 243, '../modules/es.array.index-of': 244, '../modules/es.array.is-array': 245, '../modules/es.array.iterator': 246, '../modules/es.array.join': 247, '../modules/es.array.last-index-of': 248, '../modules/es.array.map': 249, '../modules/es.array.of': 250, '../modules/es.array.reduce': 252, '../modules/es.array.reduce-right': 251, '../modules/es.array.reverse': 253, '../modules/es.array.slice': 254, '../modules/es.array.some': 255, '../modules/es.array.sort': 256, '../modules/es.array.species': 257, '../modules/es.array.splice': 258, '../modules/es.array.unscopables.flat': 260, '../modules/es.array.unscopables.flat-map': 259, '../modules/es.data-view': 261, '../modules/es.date.get-year': 262, '../modules/es.date.now': 263, '../modules/es.date.set-year': 264, '../modules/es.date.to-gmt-string': 265, '../modules/es.date.to-iso-string': 266, '../modules/es.date.to-json': 267, '../modules/es.date.to-primitive': 268, '../modules/es.date.to-string': 269, '../modules/es.escape': 270, '../modules/es.function.bind': 271, '../modules/es.function.has-instance': 272, '../modules/es.function.name': 273, '../modules/es.global-this': 274, '../modules/es.json.stringify': 275, '../modules/es.json.to-string-tag': 276, '../modules/es.map': 277, '../modules/es.math.acosh': 278, '../modules/es.math.asinh': 279, '../modules/es.math.atanh': 280, '../modules/es.math.cbrt': 281, '../modules/es.math.clz32': 282, '../modules/es.math.cosh': 283, '../modules/es.math.expm1': 284, '../modules/es.math.fround': 285, '../modules/es.math.hypot': 286, '../modules/es.math.imul': 287, '../modules/es.math.log10': 288, '../modules/es.math.log1p': 289, '../modules/es.math.log2': 290, '../modules/es.math.sign': 291, '../modules/es.math.sinh': 292, '../modules/es.math.tanh': 293, '../modules/es.math.to-string-tag': 294, '../modules/es.math.trunc': 295, '../modules/es.number.constructor': 296, '../modules/es.number.epsilon': 297, '../modules/es.number.is-finite': 298, '../modules/es.number.is-integer': 299, '../modules/es.number.is-nan': 300, '../modules/es.number.is-safe-integer': 301, '../modules/es.number.max-safe-integer': 302, '../modules/es.number.min-safe-integer': 303, '../modules/es.number.parse-float': 304, '../modules/es.number.parse-int': 305, '../modules/es.number.to-fixed': 306, '../modules/es.number.to-precision': 307, '../modules/es.object.assign': 308, '../modules/es.object.create': 309, '../modules/es.object.define-getter': 310, '../modules/es.object.define-properties': 311, '../modules/es.object.define-property': 312, '../modules/es.object.define-setter': 313, '../modules/es.object.entries': 314, '../modules/es.object.freeze': 315, '../modules/es.object.from-entries': 316, '../modules/es.object.get-own-property-descriptor': 317, '../modules/es.object.get-own-property-descriptors': 318, '../modules/es.object.get-own-property-names': 319, '../modules/es.object.get-prototype-of': 320, '../modules/es.object.has-own': 321, '../modules/es.object.is': 325, '../modules/es.object.is-extensible': 322, '../modules/es.object.is-frozen': 323, '../modules/es.object.is-sealed': 324, '../modules/es.object.keys': 326, '../modules/es.object.lookup-getter': 327, '../modules/es.object.lookup-setter': 328, '../modules/es.object.prevent-extensions': 329, '../modules/es.object.seal': 330, '../modules/es.object.set-prototype-of': 331, '../modules/es.object.to-string': 332, '../modules/es.object.values': 333, '../modules/es.parse-float': 334, '../modules/es.parse-int': 335, '../modules/es.promise': 339, '../modules/es.promise.all-settled': 336, '../modules/es.promise.any': 337, '../modules/es.promise.finally': 338, '../modules/es.reflect.apply': 340, '../modules/es.reflect.construct': 341, '../modules/es.reflect.define-property': 342, '../modules/es.reflect.delete-property': 343, '../modules/es.reflect.get': 346, '../modules/es.reflect.get-own-property-descriptor': 344, '../modules/es.reflect.get-prototype-of': 345, '../modules/es.reflect.has': 347, '../modules/es.reflect.is-extensible': 348, '../modules/es.reflect.own-keys': 349, '../modules/es.reflect.prevent-extensions': 350, '../modules/es.reflect.set': 352, '../modules/es.reflect.set-prototype-of': 351, '../modules/es.reflect.to-string-tag': 353, '../modules/es.regexp.constructor': 354, '../modules/es.regexp.dot-all': 355, '../modules/es.regexp.exec': 356, '../modules/es.regexp.flags': 357, '../modules/es.regexp.sticky': 358, '../modules/es.regexp.test': 359, '../modules/es.regexp.to-string': 360, '../modules/es.set': 361, '../modules/es.string.anchor': 362, '../modules/es.string.at-alternative': 363, '../modules/es.string.big': 364, '../modules/es.string.blink': 365, '../modules/es.string.bold': 366, '../modules/es.string.code-point-at': 367, '../modules/es.string.ends-with': 368, '../modules/es.string.fixed': 369, '../modules/es.string.fontcolor': 370, '../modules/es.string.fontsize': 371, '../modules/es.string.from-code-point': 372, '../modules/es.string.includes': 373, '../modules/es.string.italics': 374, '../modules/es.string.iterator': 375, '../modules/es.string.link': 376, '../modules/es.string.match': 378, '../modules/es.string.match-all': 377, '../modules/es.string.pad-end': 379, '../modules/es.string.pad-start': 380, '../modules/es.string.raw': 381, '../modules/es.string.repeat': 382, '../modules/es.string.replace': 384, '../modules/es.string.replace-all': 383, '../modules/es.string.search': 385, '../modules/es.string.small': 386, '../modules/es.string.split': 387, '../modules/es.string.starts-with': 388, '../modules/es.string.strike': 389, '../modules/es.string.sub': 390, '../modules/es.string.substr': 391, '../modules/es.string.sup': 392, '../modules/es.string.trim': 395, '../modules/es.string.trim-end': 393, '../modules/es.string.trim-start': 394, '../modules/es.symbol': 401, '../modules/es.symbol.async-iterator': 396, '../modules/es.symbol.description': 397, '../modules/es.symbol.has-instance': 398, '../modules/es.symbol.is-concat-spreadable': 399, '../modules/es.symbol.iterator': 400, '../modules/es.symbol.match': 403, '../modules/es.symbol.match-all': 402, '../modules/es.symbol.replace': 404, '../modules/es.symbol.search': 405, '../modules/es.symbol.species': 406, '../modules/es.symbol.split': 407, '../modules/es.symbol.to-primitive': 408, '../modules/es.symbol.to-string-tag': 409, '../modules/es.symbol.unscopables': 410, '../modules/es.typed-array.at': 411, '../modules/es.typed-array.copy-within': 412, '../modules/es.typed-array.every': 413, '../modules/es.typed-array.fill': 414, '../modules/es.typed-array.filter': 415, '../modules/es.typed-array.find': 417, '../modules/es.typed-array.find-index': 416, '../modules/es.typed-array.float32-array': 418, '../modules/es.typed-array.float64-array': 419, '../modules/es.typed-array.for-each': 420, '../modules/es.typed-array.from': 421, '../modules/es.typed-array.includes': 422, '../modules/es.typed-array.index-of': 423, '../modules/es.typed-array.int16-array': 424, '../modules/es.typed-array.int32-array': 425, '../modules/es.typed-array.int8-array': 426, '../modules/es.typed-array.iterator': 427, '../modules/es.typed-array.join': 428, '../modules/es.typed-array.last-index-of': 429, '../modules/es.typed-array.map': 430, '../modules/es.typed-array.of': 431, '../modules/es.typed-array.reduce': 433, '../modules/es.typed-array.reduce-right': 432, '../modules/es.typed-array.reverse': 434, '../modules/es.typed-array.set': 435, '../modules/es.typed-array.slice': 436, '../modules/es.typed-array.some': 437, '../modules/es.typed-array.sort': 438, '../modules/es.typed-array.subarray': 439, '../modules/es.typed-array.to-locale-string': 440, '../modules/es.typed-array.to-string': 441, '../modules/es.typed-array.uint16-array': 442, '../modules/es.typed-array.uint32-array': 443, '../modules/es.typed-array.uint8-array': 444, '../modules/es.typed-array.uint8-clamped-array': 445, '../modules/es.unescape': 446, '../modules/es.weak-map': 447, '../modules/es.weak-set': 448, '../modules/web.dom-collections.for-each': 449, '../modules/web.dom-collections.iterator': 450, '../modules/web.immediate': 451, '../modules/web.queue-microtask': 452, '../modules/web.timers': 453, '../modules/web.url': 455, '../modules/web.url-search-params': 454, '../modules/web.url.to-json': 456 }],
  458: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _addUniqueToArray = _interopRequireDefault(require('./arrays/addUniqueToArray'))

    const _buildArray = _interopRequireDefault(require('./arrays/buildArray'))

    const _buildArrayOfReferences = _interopRequireDefault(require('./arrays/buildArrayOfReferences'))

    const _compareArrays = _interopRequireDefault(require('./arrays/compareArrays'))

    const _mergeArrays = _interopRequireDefault(require('./arrays/mergeArrays'))

    const _uniqueArray = _interopRequireDefault(require('./arrays/uniqueArray'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Some simple utility functions for generating arrays or performing work on arrays.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module arrayHelpers
 * @memberOf module:functionalHelpers
 */
    const _default = {
      addUniqueToArray: _addUniqueToArray.default,
      buildArray: _buildArray.default,
      buildArrayOfReferences: _buildArrayOfReferences.default,
      compareArrays: _compareArrays.default,
      mergeArrays: _mergeArrays.default,
      uniqueArray: _uniqueArray.default
    }
    exports.default = _default
  }, { './arrays/addUniqueToArray': 459, './arrays/buildArray': 460, './arrays/buildArrayOfReferences': 461, './arrays/compareArrays': 462, './arrays/mergeArrays': 463, './arrays/uniqueArray': 464, 'core-js/stable': 457 }],
  459: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.includes.js')

    require('core-js/modules/es.string.includes.js')

    require('core-js/modules/es.array.concat.js')

    require('core-js/stable')

    /**
 * Having an array and a potential new array element, check if the element is in the array, if not append to array.
 * @function
 * @memberOf module:arrayHelpers
 * @param {*} item - An potential array element, possibly a DomItem
 * @param {Array} array - An array where an element may be appended.
 * @returns {Array|Buffer|*|string}
 */
    const addUniqueToArray = function addUniqueToArray (item, array) {
      return !array.includes(item) ? array.concat([item]) : array
    }

    const _default = addUniqueToArray
    exports.default = _default
  }, { 'core-js/modules/es.array.concat.js': 232, 'core-js/modules/es.array.includes.js': 243, 'core-js/modules/es.string.includes.js': 373, 'core-js/stable': 457 }],
  460: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _cloneObject = _interopRequireDefault(require('../objects/cloneObject'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Leverage buildArrayBase to generate an array filled with a copy of the provided item.
 * The length defines how long the array should be.
 * @function
 * @memberOf module:arrayHelpers
 * @param {*} item - The item to be used for each array element
 * @param {number} length - The desired length of the array
 * @returns {Array.<*>}
 */
    const buildArray = function buildArray (item, length) {
      const arr = []

      while (arr.length < length) {
        const cloned = (0, _cloneObject.default)(item)
        arr.push(cloned)
      }

      return arr
    }

    const _default = buildArray
    exports.default = _default
  }, { '../objects/cloneObject': 494, 'core-js/stable': 457 }],
  461: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    /**
 * Leverage buildArrayBase to generate an array filled with references to the provided item.
 * The length defines how long the array should be.
 * @function
 * @memberOf module:arrayHelpers
 * @param {*} item - The item to be used for each array element
 * @param {number} length - The desired length of the array
 * @returns {Array.<*>}
 */
    const buildArrayOfReferences = function buildArrayOfReferences (item, length) {
      const arr = []

      while (arr.length < length) {
        arr.push(item)
      }

      return arr
    }

    const _default = buildArrayOfReferences
    exports.default = _default
  }, { 'core-js/stable': 457 }],
  462: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/modules/es.array.from.js')

    require('core-js/modules/es.array.slice.js')

    require('core-js/modules/es.function.name.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.reduce.js')

    require('core-js/modules/es.array.map.js')

    require('core-js/modules/es.array.concat.js')

    require('core-js/stable')

    const _isObject = _interopRequireDefault(require('../objects/isObject'))

    const _mergeArrays = _interopRequireDefault(require('./mergeArrays'))

    const _objectKeys = _interopRequireDefault(require('../objects/objectKeys'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    function _toConsumableArray (arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread() }

    function _nonIterableSpread () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }

    function _unsupportedIterableToArray (o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen) }

    function _iterableToArray (iter) { if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null) return Array.from(iter) }

    function _arrayWithoutHoles (arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr) }

    function _arrayLikeToArray (arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i] } return arr2 }

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    /**
 * Store the comparison result for an element that may exist in either of compared arrays.
 * - value stores the element value from the arrays being compared
 * - results has the comparison results where first index (0) is result for first compared array
 *   and the second index (1) will be the result for the second compared array
 * @example
 * // example of input and resulting output
 *
 * const arr1 = ['match1', 'firstMismatch1', 'match2', 'firstMismatch2', 'badMatch1']
 * const arr2 = ['match1', 'match2', 'secondMismatch1', 'badMatch1', 'badMatch1']
 *
 * // Taking the first element in both, then the value: 'match1' exists in both arrays
 * // compareArrayResult will be { value: 'match1', result: [0, 0] }
 * // First index of 0 indicates this value in the first array exists in the second array
 * // Second index of 0 indicates this value in the second array exists in the first array
 *
 * // Taking the second element in the first array, then the value: 'firstMismatch1' exists in only the first array
 * // compareArrayResult will be { value: 'firstMismatch1', result: [1, -1] }
 * // First index of 1 indicates this value in the first array might need to be added to the second array
 * // Second index of -1 indicates this value only exists in the first array
 *
 * // Taking the third element in the second array, then the value: 'secondMismatch1' exists in only the second array
 * // compareArrayResult will be { value: 'secondMismatch1', result: [-1, 1] }
 * // First index of -1 indicates this value only exists in the second array
 * // Second index of 1 indicates this value in the second array might need to be added to the first array
 * @typedef {Object.<string, string|Array.<number>>} module:arrayHelpers~compareArrayResult
 * @memberOf module:arrayHelpers
 * @property {string} value - The element value being compared
 * @property {Array.<Array.<string|number>>} keys - Keys in arrays associated with this value
 * @property {Array.<number>} result - The results in the order of the compared arrays
 */

    /**
 * Compare two Arrays and return the Object where the value for each property is as follows:
 * -1 to indicate val1 is less than val2
 * 0 to indicate both values are the equal
 * 1 to indicate val1 is greater than val2
 * The returned Object uses the element values as the property names
 * This functions works by first creating a concatenated array of all unique values. Then for each unique values,
 * convert to a string and use it as a new property name. Array filter each array checking if it has the unique value.
 * Use the lengths of these filtered arrays to compare. So if the first array has the value and the second one doesn't
 * the first length will be one or more and the second will be zero, if the both have the value then both will be one
 * or more.
 * @example
 * // example of input and resulting output
 * compareArrays(
 *   ['match1', 'firstMismatch1', 'match2', 'firstMismatch2', 'badMatch1'],
 *   ['match1', 'match2', 'secondMismatch1', 'badMatch1', 'badMatch1']
 * )
 * // unique array
 * ['match1', 'firstMismatch1', 'match2', 'firstMismatch2', 'badMatch1', 'secondMismatch1']
 * // result object
 * [
 *   {
 *     value: 'match1',
 *     keys: [[0], [0]],
 *     result: [0, 0]
 *   },
 *   {
 *     value: 'firstMismatch1',
 *     keys: [[1], []],
 *     result: [1, -1]
 *   },
 *   {
 *     value: 'match2',
 *     keys: [[2], [1]],
 *     result: [0, 0]
 *   },
 *   {
 *     value: 'firstMismatch2',
 *     keys: [[3], []],
 *     result: [1, -1]
 *   },
 *   {
 *     value: 'badMatch1',
 *     keys: [[4], [3, 4]],
 *     result: [0, 0]
 *   },
 *   {
 *     value: 'secondMismatch1',
 *     keys: [[], [2]],
 *     result: [-1, 1]
 *   }
 * ]
 *
 * @function
 * @memberOf module:arrayHelpers
 * @param {...Array} arrays - The arrays to compare
 * @returns {Array.<module:arrayHelpers~compareArrayResult>}
 */
    const compareArrays = function compareArrays () {
      for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
        arrays[_key] = arguments[_key]
      }

      return _mergeArrays.default.apply(void 0, arrays).reduce(function (results, attr) {
        const attrType = _typeof(attr)

        const useArray = Array.isArray(attr)
        const keys = arrays.map(function (array) {
          return array.reduce(function (results, current, key) {
            const currentType = _typeof(current)

            if (attrType !== currentType) {
              return results
            }

            if (!(0, _isObject.default)(attr)) {
              return current === attr ? [].concat(_toConsumableArray(results), [key]) : results
            }

            if (useArray !== Array.isArray(current)) {
              return results
            }

            const compareKeys = useArray ? compareArrays(attr, current) : compareArrays((0, _objectKeys.default)(attr), (0, _objectKeys.default)(current))
            return compareKeys.every(function (compare) {
              return compare.result.every(function (result) {
                return result === 0
              })
            })
              ? [].concat(_toConsumableArray(results), [key])
              : results
          }, [])
        })
        const arrayResults = keys.map(function (array) {
          return array.length ? 1 : -1
        })
        return [].concat(_toConsumableArray(results), [{
          value: attr,
          keys: keys,
          result: arrayResults.every(function (result) {
            return result === 1
          })
            ? arrayResults.map(function (result) {
              return 0
            })
            : arrayResults
        }])
      }, [])
    }

    const _default = compareArrays
    exports.default = _default
  }, { '../objects/isObject': 499, '../objects/objectKeys': 504, './mergeArrays': 463, 'core-js/modules/es.array.concat.js': 232, 'core-js/modules/es.array.from.js': 242, 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.array.map.js': 249, 'core-js/modules/es.array.reduce.js': 252, 'core-js/modules/es.array.slice.js': 254, 'core-js/modules/es.function.name.js': 273, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/es.string.iterator.js': 375, 'core-js/modules/es.symbol.description.js': 397, 'core-js/modules/es.symbol.iterator.js': 400, 'core-js/modules/es.symbol.js': 401, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457 }],
  463: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/modules/es.array.from.js')

    require('core-js/modules/es.array.slice.js')

    require('core-js/modules/es.function.name.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.reduce.js')

    require('core-js/modules/es.array.map.js')

    require('core-js/modules/es.array.concat.js')

    require('core-js/modules/es.array.filter.js')

    require('core-js/modules/es.array.includes.js')

    require('core-js/modules/es.string.includes.js')

    require('core-js/stable')

    const _uniqueArray = _interopRequireDefault(require('./uniqueArray'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    function _toConsumableArray (arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread() }

    function _nonIterableSpread () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }

    function _unsupportedIterableToArray (o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen) }

    function _iterableToArray (iter) { if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null) return Array.from(iter) }

    function _arrayWithoutHoles (arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr) }

    function _arrayLikeToArray (arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i] } return arr2 }

    /**
 * Take multiple arrays and then filter all these into one unique array.
 * @function
 * @memberOf module:arrayHelpers
 * @param {...Array} arrays - Provide multiple arrays to create one unique array
 * @returns {Array}
 */
    const mergeArrays = function mergeArrays () {
      for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
        arrays[_key] = arguments[_key]
      }

      return arrays.map(_uniqueArray.default).reduce(function (merged, arr) {
        return [].concat(_toConsumableArray(merged), _toConsumableArray(arr.filter(function (attr) {
          return !merged.includes(attr)
        })))
      }, [])
    }

    const _default = mergeArrays
    exports.default = _default
  }, { './uniqueArray': 464, 'core-js/modules/es.array.concat.js': 232, 'core-js/modules/es.array.filter.js': 236, 'core-js/modules/es.array.from.js': 242, 'core-js/modules/es.array.includes.js': 243, 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.array.map.js': 249, 'core-js/modules/es.array.reduce.js': 252, 'core-js/modules/es.array.slice.js': 254, 'core-js/modules/es.function.name.js': 273, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/es.string.includes.js': 373, 'core-js/modules/es.string.iterator.js': 375, 'core-js/modules/es.symbol.description.js': 397, 'core-js/modules/es.symbol.iterator.js': 400, 'core-js/modules/es.symbol.js': 401, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457 }],
  464: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.filter.js')

    require('core-js/modules/es.array.index-of.js')

    require('core-js/stable')

    /**
 * Remove duplicate values from an array.
 * @function uniqueArray
 * @memberOf module:arrayHelpers
 * @param {Array} array - The array to make unique
 * @returns {Array}
 */
    const uniqueArray = function uniqueArray (array) {
      return array.filter(function (item, index) {
        return array.indexOf(item) === index
      })
    }

    const _default = uniqueArray
    exports.default = _default
  }, { 'core-js/modules/es.array.filter.js': 236, 'core-js/modules/es.array.index-of.js': 244, 'core-js/stable': 457 }],
  465: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _assignDescriptor = _interopRequireDefault(require('./descriptors/assignDescriptor'))

    const _assignDescriptorDetail = _interopRequireDefault(require('./descriptors/assignDescriptorDetail'))

    const _checkClearValues = _interopRequireDefault(require('./descriptors/checkClearValues'))

    const _checkDescriptorComplete = _interopRequireDefault(require('./descriptors/checkDescriptorComplete'))

    const _cloneDescriptor = _interopRequireDefault(require('./descriptors/cloneDescriptor'))

    const _cloneDescriptorDetail = _interopRequireDefault(require('./descriptors/cloneDescriptorDetail'))

    const _compareDescriptor = _interopRequireDefault(require('./descriptors/compareDescriptor'))

    const _describeObject = _interopRequireDefault(require('./descriptors/describeObject'))

    const _describeObjectMap = _interopRequireDefault(require('./descriptors/describeObjectMap'))

    const _describeObjectDetail = _interopRequireDefault(require('./descriptors/describeObjectDetail'))

    const _nextReference = _interopRequireDefault(require('./descriptors/nextReference'))

    const _sameDescriptor = _interopRequireDefault(require('./descriptors/sameDescriptor'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Create a format to standardize every object into a specific template.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module objectDescriptors
 * @memberOf module:functionalHelpers
 */
    const _default = {
      assignDescriptor: _assignDescriptor.default,
      assignDescriptorDetail: _assignDescriptorDetail.default,
      checkClearValues: _checkClearValues.default,
      checkDescriptorComplete: _checkDescriptorComplete.default,
      cloneDescriptor: _cloneDescriptor.default,
      cloneDescriptorDetail: _cloneDescriptorDetail.default,
      compareDescriptor: _compareDescriptor.default,
      describeObject: _describeObject.default,
      describeObjectMap: _describeObjectMap.default,
      describeObjectDetail: _describeObjectDetail.default,
      nextReference: _nextReference.default,
      sameDescriptor: _sameDescriptor.default
    }
    exports.default = _default
  }, { './descriptors/assignDescriptor': 466, './descriptors/assignDescriptorDetail': 467, './descriptors/checkClearValues': 468, './descriptors/checkDescriptorComplete': 469, './descriptors/cloneDescriptor': 470, './descriptors/cloneDescriptorDetail': 471, './descriptors/compareDescriptor': 472, './descriptors/describeObject': 473, './descriptors/describeObjectDetail': 474, './descriptors/describeObjectMap': 475, './descriptors/nextReference': 476, './descriptors/sameDescriptor': 477, 'core-js/stable': 457 }],
  466: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.reduce.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/modules/web.dom-collections.for-each.js')

    require('core-js/modules/es.array.find.js')

    require('core-js/modules/es.object.assign.js')

    require('core-js/modules/es.array.map.js')

    require('core-js/modules/es.array.filter.js')

    require('core-js/stable')

    const _assignDescriptorDetail = _interopRequireDefault(require('./assignDescriptorDetail'))

    const _cloneDescriptor = _interopRequireDefault(require('./cloneDescriptor'))

    const _compareArrays = _interopRequireDefault(require('../arrays/compareArrays'))

    const _uniqueArray = _interopRequireDefault(require('../arrays/uniqueArray'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Apply one or more descriptors to an existing descriptor so that they represent a merged version of the descriptors.
 * @function
 * @memberOf module:objectDescriptors
 * @param {module:objectDescriptors~descriptor} originalMap
 * @param  {...module:objectDescriptors~descriptor} descriptors
 * @returns {module:objectDescriptors~descriptor}
 */
    const assignDescriptor = function assignDescriptor (originalMap) {
      for (var _len = arguments.length, descriptors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        descriptors[_key - 1] = arguments[_key]
      }

      return descriptors.reduce(function (assignedDescriptor, descriptor) {
        const detailsDiff = (0, _compareArrays.default)(assignedDescriptor.keys, descriptor.keys)
        detailsDiff.forEach(function (diff) {
          const existingDetail = assignedDescriptor.details.find(function (detail) {
            return detail.key === diff.value
          })
          const newDetail = descriptor.details.find(function (detail) {
            return detail.key === diff.value
          })

          if (diff.result.every(function (result) {
            return result === 0
          })) {
            assignedDescriptor.details[existingDetail.index] = (0, _assignDescriptorDetail.default)(existingDetail, newDetail)
            return assignedDescriptor
          }

          const useDetail = diff[0] > 0 ? existingDetail : newDetail

          if (!useDetail) {
            assignedDescriptor.details[existingDetail.index].optional = true
            return assignedDescriptor
          }

          const useIndex = diff[0] > 0 ? useDetail.index : assignedDescriptor.length
          assignedDescriptor.details[useIndex] = Object.assign({}, useDetail, {
            index: useIndex,
            optional: true
          })
          assignedDescriptor.length = assignedDescriptor.length < assignedDescriptor.details.length ? assignedDescriptor.details.length : assignedDescriptor.length
          return assignedDescriptor
        })
        assignedDescriptor.keys = (0, _uniqueArray.default)(assignedDescriptor.details.map(function (detail) {
          return detail.key
        }))
        assignedDescriptor.references = (0, _uniqueArray.default)(assignedDescriptor.details.filter(function (detail) {
          return detail.isReference
        }).map(function (detail) {
          return detail.index
        }))
        assignedDescriptor.isArray = assignedDescriptor.length
          ? assignedDescriptor.details.every(function (detail) {
            return typeof detail.key === 'number'
          })
          : assignedDescriptor.isArray
        assignedDescriptor.complete = !assignedDescriptor.references.length || assignedDescriptor.complete || descriptor.complete
        return assignedDescriptor
      }, (0, _cloneDescriptor.default)(originalMap))
    }

    const _default = assignDescriptor
    exports.default = _default
  }, { '../arrays/compareArrays': 462, '../arrays/uniqueArray': 464, './assignDescriptorDetail': 467, './cloneDescriptor': 470, 'core-js/modules/es.array.filter.js': 236, 'core-js/modules/es.array.find.js': 238, 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.array.map.js': 249, 'core-js/modules/es.array.reduce.js': 252, 'core-js/modules/es.object.assign.js': 308, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/web.dom-collections.for-each.js': 449, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457 }],
  467: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/modules/es.array.from.js')

    require('core-js/modules/es.array.slice.js')

    require('core-js/modules/es.function.name.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.reduce.js')

    require('core-js/modules/es.array.concat.js')

    require('core-js/modules/es.array.find.js')

    require('core-js/stable')

    const _cloneDescriptorDetail = _interopRequireDefault(require('./cloneDescriptorDetail'))

    const _uniqueArray = _interopRequireDefault(require('../arrays/uniqueArray'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    function _toConsumableArray (arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread() }

    function _nonIterableSpread () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }

    function _unsupportedIterableToArray (o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen) }

    function _iterableToArray (iter) { if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null) return Array.from(iter) }

    function _arrayWithoutHoles (arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr) }

    function _arrayLikeToArray (arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i] } return arr2 }

    /**
 * Assign properties from other details onto an existing detail.
 * @function
 * @memberOf module:objectDescriptors
 * @param {module:objectDescriptors~descriptorDetail} originalDetail
 * @param  {...module:objectDescriptors~descriptorDetail} details
 * @returns {module:objectDescriptors~descriptorDetail}
 */
    const assignDescriptorDetail = function assignDescriptorDetail (originalDetail) {
      for (var _len = arguments.length, details = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        details[_key - 1] = arguments[_key]
      }

      return details.reduce(function (existingDetail, newDetail) {
        existingDetail.type = (0, _uniqueArray.default)([].concat(_toConsumableArray(existingDetail.type), _toConsumableArray(newDetail.type)))
        existingDetail.value = (0, _uniqueArray.default)([].concat(_toConsumableArray(existingDetail.value), _toConsumableArray(newDetail.value)))
        existingDetail.nullable = existingDetail.nullable || newDetail.nullable
        existingDetail.optional = existingDetail.optional || newDetail.optional
        existingDetail.circular = existingDetail.circular || newDetail.circular
        existingDetail.isReference = existingDetail.isReference || newDetail.isReference
        existingDetail.isInstance = existingDetail.isInstance || newDetail.isInstance
        existingDetail.arrayReference = [existingDetail.arrayReference, newDetail.arrayReference].find(function (ref) {
          return typeof ref === 'number'
        })
        existingDetail.objectReference = [existingDetail.objectReference, newDetail.objectReference].find(function (ref) {
          return typeof ref === 'number'
        })
        existingDetail.arrayReference = typeof existingDetail.arrayReference === 'undefined' ? null : existingDetail.arrayReference
        existingDetail.objectReference = typeof existingDetail.objectReference === 'undefined' ? null : existingDetail.objectReference
        return existingDetail
      }, (0, _cloneDescriptorDetail.default)(originalDetail))
    }

    const _default = assignDescriptorDetail
    exports.default = _default
  }, { '../arrays/uniqueArray': 464, './cloneDescriptorDetail': 471, 'core-js/modules/es.array.concat.js': 232, 'core-js/modules/es.array.find.js': 238, 'core-js/modules/es.array.from.js': 242, 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.array.reduce.js': 252, 'core-js/modules/es.array.slice.js': 254, 'core-js/modules/es.function.name.js': 273, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/es.string.iterator.js': 375, 'core-js/modules/es.symbol.description.js': 397, 'core-js/modules/es.symbol.iterator.js': 400, 'core-js/modules/es.symbol.js': 401, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457 }],
  468: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.map.js')

    require('core-js/stable')

    const _setValue = _interopRequireDefault(require('../objects/setValue'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Check if we should clear the values on this descriptor
 * @function
 * @memberOf module:objectDescriptors
 * @param {module:objectDescriptors~descriptor} descriptor
 * @param {boolean} [keepValues=false]
 * @returns {module:objectDescriptors~descriptor}
 */
    const checkClearValues = function checkClearValues (descriptor) {
      const keepValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false
      return (0, _setValue.default)('details', descriptor.complete && !keepValues
        ? descriptor.details.map(function (detail) {
          return (0, _setValue.default)('value', [], detail)
        })
        : descriptor.details, descriptor)
    }

    const _default = checkClearValues
    exports.default = _default
  }, { '../objects/setValue': 508, 'core-js/modules/es.array.map.js': 249, 'core-js/stable': 457 }],
  469: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _setValue = _interopRequireDefault(require('../objects/setValue'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Check if the descriptors references have all been built and set complete to true if they have.
 * @function
 * @memberOf module:objectDescriptors
 * @param {module:objectDescriptors~descriptor} descriptor
 * @returns {module:objectDescriptors~descriptor}
 */
    const checkDescriptorComplete = function checkDescriptorComplete (descriptor) {
      return (0, _setValue.default)('complete', descriptor.references.every(function (refId) {
        return [descriptor.details[refId].arrayReference, descriptor.details[refId].objectReference].some(function (ref) {
          return typeof ref === 'number'
        })
      }), descriptor)
    }

    const _default = checkDescriptorComplete
    exports.default = _default
  }, { '../objects/setValue': 508, 'core-js/stable': 457 }],
  470: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.map.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/stable')

    const _cloneDescriptorDetail = _interopRequireDefault(require('./cloneDescriptorDetail'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Make a copy of an object descriptor so that the original will not be mutated.
 * @function
 * @memberOf module:objectDescriptors
 * @param {module:objectDescriptors~descriptor} originalMap
 * @returns {module:objectDescriptors~descriptor}
 */
    const cloneDescriptor = function cloneDescriptor (originalMap) {
      const copyMap = {}
      copyMap.index = originalMap.index || 0
      copyMap.details = originalMap.details.map(_cloneDescriptorDetail.default)
      copyMap.length = originalMap.length
      copyMap.keys = originalMap.keys.map(function (key) {
        return key
      })
      copyMap.references = originalMap.references.map(function (reference) {
        return reference
      })
      copyMap.isArray = originalMap.isArray
      copyMap.complete = originalMap.complete
      return copyMap
    }

    const _default = cloneDescriptor
    exports.default = _default
  }, { './cloneDescriptorDetail': 471, 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.array.map.js': 249, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457 }],
  471: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/web.dom-collections.for-each.js')

    require('core-js/modules/es.array.map.js')

    require('core-js/stable')

    const _objectKeys = _interopRequireDefault(require('../objects/objectKeys'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Get a new copy of an existing Descriptor Detail
 * @function
 * @memberOf module:objectDescriptors
 * @param {module:objectDescriptors~descriptorDetail} originalDetail
 * @returns {module:objectDescriptors~descriptorDetail}
 */
    const cloneDescriptorDetail = function cloneDescriptorDetail (originalDetail) {
      const copyDetail = {};
      (0, _objectKeys.default)(originalDetail).forEach(function (key) {
        copyDetail[key] = Array.isArray(originalDetail[key])
          ? originalDetail[key].map(function (value) {
            return value
          })
          : originalDetail[key]
      })
      return copyDetail
    }

    const _default = cloneDescriptorDetail
    exports.default = _default
  }, { '../objects/objectKeys': 504, 'core-js/modules/es.array.map.js': 249, 'core-js/modules/web.dom-collections.for-each.js': 449, 'core-js/stable': 457 }],
  472: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/modules/es.array.includes.js')

    require('core-js/modules/es.string.includes.js')

    require('core-js/modules/es.array.find.js')

    require('core-js/stable')

    /**
 * Check if two descriptors are the same or similar in that they have similar keys and the associated types are the same.
 * @function
 * @memberOf module:objectDescriptors
 * @param {module:objectDescriptors~descriptor} descriptor1
 * @param {module:objectDescriptors~descriptor} descriptor2
 * @returns {boolean}
 */
    const compareDescriptor = function compareDescriptor (descriptor1, descriptor2) {
      if (descriptor1.isArray !== descriptor2.isArray) {
        return false
      }

      if (descriptor1.length === 0 || descriptor2.length === 0) {
        return descriptor1.length === descriptor2.length
      }

      const smallerDescriptor = descriptor1.length <= descriptor2.length ? descriptor1 : descriptor2
      const largerDescriptor = descriptor2.length >= descriptor1.length ? descriptor2 : descriptor1
      return smallerDescriptor.keys.every(function (key) {
        return largerDescriptor.keys.includes(key)
      })
        ? smallerDescriptor.details.every(function (detail) {
          return detail.type.some(function (type) {
            return largerDescriptor.details.find(function (foundDetail) {
              return foundDetail.key === detail.key
            }).type.includes(type)
          })
        })
        : false
    }

    const _default = compareDescriptor
    exports.default = _default
  }, { 'core-js/modules/es.array.find.js': 238, 'core-js/modules/es.array.includes.js': 243, 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/es.string.includes.js': 373, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457 }],
  473: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.object.to-string.js')

    require('core-js/stable')

    const _assignDescriptorDetail = _interopRequireDefault(require('./assignDescriptorDetail'))

    const _describeObjectDetail = _interopRequireDefault(require('./describeObjectDetail'))

    const _objectKeys = _interopRequireDefault(require('../objects/objectKeys'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Trace an object and return the descriptor which defines the object's structure and attributes.
 * @function
 * @memberOf module:objectDescriptors
 * @param {Object} object
 * @returns {module:objectDescriptors~descriptor}
 */
    const describeObject = function describeObject (object) {
      const descriptor = {
        index: 0,
        details: [],
        length: 0,
        keys: [],
        references: [],
        isArray: false,
        complete: false
      }
      const keys = (0, _objectKeys.default)(object)

      for (let i = 0; i < keys.length; ++i) {
        const key = keys[i]
        const newDetail = (0, _describeObjectDetail.default)(object[key], key, descriptor.length++)

        if (typeof key === 'number' && descriptor.details.length) {
          descriptor.details[0] = (0, _assignDescriptorDetail.default)(descriptor.details[0], newDetail)
          descriptor.keys = [0]

          if (newDetail.isReference) {
            descriptor.references = [0]
          }

          continue
        }

        descriptor.details.push(newDetail)
        descriptor.keys.push(newDetail.key)

        if (newDetail.isReference) {
          descriptor.references.push(newDetail.index)
        }
      }

      descriptor.isArray = Array.isArray(object)
      descriptor.complete = !descriptor.references.length
      return descriptor
    }

    const _default = describeObject
    exports.default = _default
  }, { '../objects/objectKeys': 504, './assignDescriptorDetail': 467, './describeObjectDetail': 474, 'core-js/modules/es.object.to-string.js': 332, 'core-js/stable': 457 }],
  474: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/stable')

    const _emptyObject = _interopRequireDefault(require('../objects/emptyObject'))

    const _isCloneable = _interopRequireDefault(require('../objects/isCloneable'))

    const _isInstanceObject = _interopRequireDefault(require('../objects/isInstanceObject'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    /**
 * Trace an object's attribute and provide details about it.
 * @function
 * @memberOf module:objectDescriptors
 * @param {*} value
 * @param {string|number} [key=0]
 * @param {number} [index=0]
 * @returns {module:objectDescriptors~descriptorDetail}
 */
    const describeObjectDetail = function describeObjectDetail (value) {
      const key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
      const index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0

      const type = _typeof(value)

      return {
        index: index,
        key: key,
        type: [type],
        value: [value],
        nullable: value === null,
        optional: false,
        circular: false,
        isReference: (0, _isCloneable.default)(value) && !(0, _emptyObject.default)(value),
        isInstance: (0, _isInstanceObject.default)(value),
        arrayReference: null,
        objectReference: null
      }
    }

    const _default = describeObjectDetail
    exports.default = _default
  }, { '../objects/emptyObject': 495, '../objects/isCloneable': 497, '../objects/isInstanceObject': 498, 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/es.string.iterator.js': 375, 'core-js/modules/es.symbol.description.js': 397, 'core-js/modules/es.symbol.iterator.js': 400, 'core-js/modules/es.symbol.js': 401, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457 }],
  475: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/web.dom-collections.for-each.js')

    require('core-js/modules/es.array.find-index.js')

    require('core-js/modules/es.array.find.js')

    require('core-js/stable')

    const _assignDescriptor = _interopRequireDefault(require('./assignDescriptor'))

    const _checkClearValues = _interopRequireDefault(require('./checkClearValues'))

    const _checkDescriptorComplete = _interopRequireDefault(require('./checkDescriptorComplete'))

    const _compareDescriptor = _interopRequireDefault(require('./compareDescriptor'))

    const _describeObject = _interopRequireDefault(require('./describeObject'))

    const _nextReference = _interopRequireDefault(require('./nextReference'))

    const _sameDescriptor = _interopRequireDefault(require('./sameDescriptor'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Trace out the entire object including nested objects.
 * @function
 * @memberOf module:objectDescriptors
 * @param {Object|Array} object
 * @param {Object} [options={}]
 * @param {number} [options.mapLimit=1000000000]
 * @param {number} [options.depthLimit=-1]
 * @param {boolean} [options.keepValues=false]
 * @returns {module:objectDescriptors~descriptorMap}
 */
    const describeObjectMap = function describeObjectMap (object) {
      const _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
      const _ref$mapLimit = _ref.mapLimit
      const mapLimit = _ref$mapLimit === void 0 ? 1000000000 : _ref$mapLimit
      const _ref$depthLimit = _ref.depthLimit
      const depthLimit = _ref$depthLimit === void 0 ? -1 : _ref$depthLimit
      const _ref$keepValues = _ref.keepValues
      const keepValues = _ref$keepValues === void 0 ? false : _ref$keepValues

      const descriptorMap = [(0, _describeObject.default)(object)]
      descriptorMap[0].index = 0

      const describeReferences = function describeReferences (descriptor, currentDetail) {
        let limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1
        const returnCallback = arguments.length > 3 && arguments[3] !== undefined
          ? arguments[3]
          : function (returnMap) {
            return returnMap
          }
        let index = descriptorMap.length
        const nextRef = currentDetail ? (0, _nextReference.default)(descriptor, currentDetail.index) : undefined
        const nextDetail = typeof nextRef !== 'undefined' ? descriptor.details[nextRef] : null

        if (currentDetail) {
          const vals = descriptor.isArray ? currentDetail.value : [currentDetail.value[currentDetail.value.length - 1]]
          vals.forEach(function (val) {
            const tempDescriptor = (0, _describeObject.default)(val)
            const existingDescriptorIndex = descriptorMap.findIndex(function (existingDescriptor) {
              return (0, _compareDescriptor.default)(tempDescriptor, existingDescriptor)
            })

            if (existingDescriptorIndex >= 0) {
              index = existingDescriptorIndex

              if (tempDescriptor.length && (0, _sameDescriptor.default)(tempDescriptor, descriptorMap[existingDescriptorIndex])) {
                currentDetail.circular = true
                descriptor.details[currentDetail.index] = currentDetail
              }
            }

            if (index >= mapLimit) {
              return descriptorMap
            }

            if (limit === 0) {
              return descriptorMap
            }

            if (tempDescriptor.isArray) {
              let _currentDetail$arrayR

              index = (_currentDetail$arrayR = currentDetail.arrayReference) !== null && _currentDetail$arrayR !== void 0 ? _currentDetail$arrayR : index
              descriptor.details[currentDetail.index].arrayReference = index
            } else {
              let _currentDetail$object

              index = (_currentDetail$object = currentDetail.objectReference) !== null && _currentDetail$object !== void 0 ? _currentDetail$object : index
              descriptor.details[currentDetail.index].objectReference = index
            }

            tempDescriptor.index = index

            if (existingDescriptorIndex < 0) {
              descriptorMap[index] = descriptorMap[index] ? (0, _assignDescriptor.default)(descriptorMap[index], tempDescriptor) : tempDescriptor
            }

            descriptorMap[descriptor.index] = (0, _assignDescriptor.default)(descriptorMap[descriptor.index], descriptor)
            currentDetail = descriptorMap[descriptor.index].details.find(function (detail) {
              return detail.key === currentDetail.key
            })

            if (!currentDetail.circular) {
              const newReference = (0, _nextReference.default)(tempDescriptor, -1)
              const newDetail = typeof newReference !== 'undefined' ? tempDescriptor.details[newReference] : null
              return describeReferences(tempDescriptor, newDetail, --limit, function (returnMap) {
                return describeReferences(descriptor, nextDetail, --limit)
              })
            }
          })
        }

        descriptorMap[descriptor.index] = (0, _assignDescriptor.default)(descriptorMap[descriptor.index], (0, _checkDescriptorComplete.default)(descriptor))
        descriptorMap[descriptor.index] = (0, _checkClearValues.default)(descriptorMap[descriptor.index], keepValues)
        return nextDetail ? describeReferences(descriptor, nextDetail, --limit) : returnCallback(descriptorMap)
      }

      const descriptor = descriptorMap[0]
      const currentReference = (0, _nextReference.default)(descriptor, -1)

      if (typeof currentReference === 'undefined') {
        descriptorMap[0] = (0, _assignDescriptor.default)(descriptorMap[0], (0, _checkDescriptorComplete.default)(descriptor))
        descriptorMap[0] = (0, _checkClearValues.default)(descriptorMap[0], keepValues)
        return descriptorMap
      }

      return describeReferences(descriptor, descriptor.details[currentReference], depthLimit)
    }

    const _default = describeObjectMap
    exports.default = _default
  }, { './assignDescriptor': 466, './checkClearValues': 468, './checkDescriptorComplete': 469, './compareDescriptor': 472, './describeObject': 473, './nextReference': 476, './sameDescriptor': 477, 'core-js/modules/es.array.find-index.js': 237, 'core-js/modules/es.array.find.js': 238, 'core-js/modules/web.dom-collections.for-each.js': 449, 'core-js/stable': 457 }],
  476: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.find.js')

    require('core-js/stable')

    const _objectKeys = _interopRequireDefault(require('../objects/objectKeys'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    /**
 * Find the index of the next module:objectDescriptors.descriptorDetail to build a resource for.
 * @function
 * @memberOf module:objectDescriptors
 * @param {module:objectDescriptors~descriptor} descriptor
 * @param {number} currentReference
 * @returns {number|undefined}
 */
    const nextReference = function nextReference (descriptor, currentReference) {
      return descriptor.references.find(function (nextRef) {
        if (nextRef <= currentReference) {
          return false
        }

        const val = descriptor.details[nextRef].value[descriptor.details[nextRef].value.length - 1]

        if (_typeof(val) !== 'object' || val === null || typeof val === 'undefined' || descriptor.details[nextRef].circular || descriptor.details[nextRef].isInstance) {
          return false
        }

        return !!(0, _objectKeys.default)(val).length
      })
    }

    const _default = nextReference
    exports.default = _default
  }, { '../objects/objectKeys': 504, 'core-js/modules/es.array.find.js': 238, 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/es.string.iterator.js': 375, 'core-js/modules/es.symbol.description.js': 397, 'core-js/modules/es.symbol.iterator.js': 400, 'core-js/modules/es.symbol.js': 401, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457 }],
  477: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.includes.js')

    require('core-js/modules/es.string.includes.js')

    require('core-js/stable')

    /**
 * Check if the two descriptors are the same.
 * @function
 * @memberOf module:objectDescriptors
 * @param {module:objectDescriptors~descriptor} descriptor1
 * @param {module:objectDescriptors~descriptor} descriptor2
 * @returns {boolean}
 */
    const sameDescriptor = function sameDescriptor (descriptor1, descriptor2) {
      return descriptor1.details.every(function (detail, index) {
        return detail.value.some(function (dVal) {
          return descriptor2.details[index].value.includes(dVal)
        })
      })
    }

    const _default = sameDescriptor
    exports.default = _default
  }, { 'core-js/modules/es.array.includes.js': 243, 'core-js/modules/es.string.includes.js': 373, 'core-js/stable': 457 }],
  478: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _callWithParams = _interopRequireDefault(require('./functions/callWithParams'))

    const _curry = _interopRequireDefault(require('./functions/curry'))

    const _delay = _interopRequireDefault(require('./functions/delay'))

    const _pipe = _interopRequireDefault(require('./functions/pipe'))

    const _preloadParams = _interopRequireDefault(require('./functions/preloadParams'))

    const _queueManager = _interopRequireDefault(require('./functions/queueManager'))

    const _queueTimeout = _interopRequireDefault(require('./functions/queueTimeout'))

    const _trace = _interopRequireDefault(require('./functions/trace'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Manage how functions are called with these utilities.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module functionHelpers
 * @memberOf module:functionalHelpers
 */
    const _default = {
      callWithParams: _callWithParams.default,
      curry: _curry.default,
      delay: _delay.default,
      pipe: _pipe.default,
      preloadParams: _preloadParams.default,
      queueManager: _queueManager.default,
      queueTimeout: _queueTimeout.default,
      trace: _trace.default
    }
    exports.default = _default
  }, { './functions/callWithParams': 479, './functions/curry': 480, './functions/delay': 481, './functions/pipe': 482, './functions/preloadParams': 483, './functions/queueManager': 484, './functions/queueTimeout': 485, './functions/trace': 486, 'core-js/stable': 457 }],
  479: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/modules/es.array.from.js')

    require('core-js/modules/es.function.name.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.slice.js')

    require('core-js/stable')

    function _toConsumableArray (arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread() }

    function _nonIterableSpread () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }

    function _unsupportedIterableToArray (o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen) }

    function _iterableToArray (iter) { if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null) return Array.from(iter) }

    function _arrayWithoutHoles (arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr) }

    function _arrayLikeToArray (arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i] } return arr2 }

    /**
 * Given a function, call with the correct number of paramters from an array of possible parameters.
 * @function
 * @memberOf module:functionHelpers
 * @param {Function} fn - The function to be called
 * @param {Array} params - Array of possible function parameters
 * @param {number} [minimum=2] - Minimumn number of parameters to use in the function
 * @returns {*}
 */
    const callWithParams = function callWithParams (fn) {
      const params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
      const minimum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2
      return fn.apply(void 0, _toConsumableArray(params.slice(0, fn.length || minimum)))
    }

    const _default = callWithParams
    exports.default = _default
  }, { 'core-js/modules/es.array.from.js': 242, 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.array.slice.js': 254, 'core-js/modules/es.function.name.js': 273, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/es.string.iterator.js': 375, 'core-js/modules/es.symbol.description.js': 397, 'core-js/modules/es.symbol.iterator.js': 400, 'core-js/modules/es.symbol.js': 401, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457 }],
  480: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.concat.js')

    require('core-js/stable')

    /**
 * Return a curried version of the passed function.
 * The returned function expects the same number of arguments minus the ones provided.
 * fn is the name of the function being curried.
 * @function
 * @memberOf module:functionHelpers
 * @param {Function} fn - Receives a function to be curried
 * @returns {Function|*}
 */
    const curry = function curry (fn) {
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key]
        }

        return args.length >= fn.length
          ? fn.apply(void 0, args)
          : function () {
            for (var _len2 = arguments.length, a = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              a[_key2] = arguments[_key2]
            }

            return curry(fn).apply(void 0, [].concat(args, a))
          }
      }
    }

    const _default = curry
    exports.default = _default
  }, { 'core-js/modules/es.array.concat.js': 232, 'core-js/stable': 457 }],
  481: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.promise.js')

    require('core-js/stable')

    require('regenerator-runtime/runtime')

    /**
 * Provide a way to cancel a request or attach a resolve event.
 * @typedef {Object} module:functionHelpers~delayHandler
 * @memberOf module:functionHelpers
 * @property {Promise} resolver
 * @property {Function} cancel
 */

    /**
 * Provide a timeout which returns a promise.
 * @function
 * @memberOf module:functionHelpers
 * @param {number} time - Delay in milliseconds
 * @returns {module:functionHelpers~delayHandler}
 */
    const delay = function delay () {
      const time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0

      let cancel = function cancel () {
        return undefined
      }

      return {
        resolver: new Promise(function (resolve, reject) {
          if (isNaN(time)) {
            reject(new Error('Invalid delay: '.concat(time)))
          } else {
            const timeoutId = setTimeout(resolve, time, 'Delayed for: '.concat(time))

            cancel = function cancel () {
              clearTimeout(timeoutId)
              reject(new Error('Cancelled delay: '.concat(time)))
            }
          }
        }),
        cancel: cancel
      }
    }

    const _default = delay
    exports.default = _default
  }, { 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/es.promise.js': 339, 'core-js/stable': 457, 'regenerator-runtime/runtime': 510 }],
  482: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.reduce.js')

    require('core-js/stable')

    /**
 * Take one or more function with a single parameter and return value.
 * Pass a parameter and the value will be transformed by each function then returned.
 * @function
 * @memberOf module:functionHelpers
 * @param {...Function} fns - Takes a series of functions having the same parameter
 * @returns {*}
 */
    const pipe = function pipe () {
      for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key]
      }

      return function (x) {
        return fns.reduce(function (y, f) {
          return f(y)
        }, x)
      }
    }

    const _default = pipe
    exports.default = _default
  }, { 'core-js/modules/es.array.reduce.js': 252, 'core-js/stable': 457 }],
  483: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/modules/es.array.from.js')

    require('core-js/modules/es.array.slice.js')

    require('core-js/modules/es.function.name.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.splice.js')

    require('core-js/stable')

    function _toConsumableArray (arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread() }

    function _nonIterableSpread () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }

    function _unsupportedIterableToArray (o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen) }

    function _iterableToArray (iter) { if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null) return Array.from(iter) }

    function _arrayWithoutHoles (arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr) }

    function _arrayLikeToArray (arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i] } return arr2 }

    /**
 * The return function which takes the missing parameter in order to call the preloaded function.
 * @typedef {Function} module:functionHelpers~callWithMissing
 * @memberOf module:functionHelpers
 * @param {*} missing - The missing parameter to be applied
 * @returns {*}
 */

    /**
 * Provide an array of parameters to be used with a function, allow the function to be called later
 * with the missing parameter.
 * @function
 * @memberOf module:functionHelpers
 * @param {Function} fn - The function to be called
 * @param {Array} params - The parameters to preload
 * @param {number} [unassignedParam=0] - Position of missing parameter (zero indexed)
 * @returns {module:functionHelpers~callWithMissing}
 */
    const preloadParams = function preloadParams (fn) {
      const params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
      const unassignedParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0
      return function (missing) {
        params.splice(unassignedParam, 0, missing)
        return fn.apply(void 0, _toConsumableArray(params))
      }
    }

    const _default = preloadParams
    exports.default = _default
  }, { 'core-js/modules/es.array.from.js': 242, 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.array.slice.js': 254, 'core-js/modules/es.array.splice.js': 258, 'core-js/modules/es.function.name.js': 273, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/es.string.iterator.js': 375, 'core-js/modules/es.symbol.description.js': 397, 'core-js/modules/es.symbol.iterator.js': 400, 'core-js/modules/es.symbol.js': 401, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457 }],
  484: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/modules/es.array.from.js')

    require('core-js/modules/es.array.slice.js')

    require('core-js/modules/es.function.name.js')

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('regenerator-runtime/runtime.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.promise.js')

    require('core-js/stable')

    require('regenerator-runtime/runtime')

    function _toConsumableArray (arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread() }

    function _nonIterableSpread () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }

    function _unsupportedIterableToArray (o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen) }

    function _iterableToArray (iter) { if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null) return Array.from(iter) }

    function _arrayWithoutHoles (arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr) }

    function _arrayLikeToArray (arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i] } return arr2 }

    /**
 * Each time queue handle is called the passed function is added to the queue to be called when ready.
 * @typedef {Function} module:functionHelpers~queueManagerHandle
 * @memberOf module:functionHelpers
 * @param {Function} fn - A function to enqueue
 * @param  {...*} args - Arguments to be passed to the function once it is ready
 * @returns {Promise}
 */

    /**
 * Manage functions to run sequentially.
 * @function
 * @memberOf module:functionHelpers
 * @param {Iterable|array} [queue=[]] - The iterable that can be used to store queued functions
 * @returns {module:functionHelpers~queueManagerHandle}
 */
    const queueManager = function queueManager () {
      const queue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      let isRunning = false
      return function (fn) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key]
        }

        const runNextItem = function runNextItem () {
          if (queue.length && !isRunning) {
            isRunning = true
            const toRun = queue.shift()
            toRun.generator.next(toRun.item)
          }

          return queue
        }

        return new Promise(function (resolve, reject) {
          const generator = /* #__PURE__ */regeneratorRuntime.mark(function _callee () {
            let item
            return regeneratorRuntime.wrap(function _callee$ (_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2
                    return

                  case 2:
                    item = _context.sent
                    return _context.abrupt('return', typeof item.fn === 'function' ? resolve(item.fn.apply(item, _toConsumableArray(item.args))) : reject(item))

                  case 4:
                  case 'end':
                    return _context.stop()
                }
              }
            }, _callee)
          })()
          generator.next()
          queue.push({
            item: {
              fn: fn,
              args: args
            },
            generator: generator
          })
          runNextItem()
        }).then(function (resolvedResult) {
          isRunning = false
          runNextItem()
          return resolvedResult
        })
      }
    }

    const _default = queueManager
    exports.default = _default
  }, { 'core-js/modules/es.array.from.js': 242, 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.array.slice.js': 254, 'core-js/modules/es.function.name.js': 273, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/es.promise.js': 339, 'core-js/modules/es.string.iterator.js': 375, 'core-js/modules/es.symbol.description.js': 397, 'core-js/modules/es.symbol.iterator.js': 400, 'core-js/modules/es.symbol.js': 401, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457, 'regenerator-runtime/runtime': 510, 'regenerator-runtime/runtime.js': 510 }],
  485: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    require('regenerator-runtime/runtime')

    const _delay = _interopRequireDefault(require('./delay'))

    const _queueManager = _interopRequireDefault(require('./queueManager'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Run Timeout functions one after the otherin queue.
 * @typedef {Function} module:functionHelpers~queueTimeoutHandle
 * @memberOf module:functionHelpers
 * @param {Function} fn - A callback function to be performed at some time in the future.
 * @param {number} time - The time in milliseconds to delay.
 * @param {...*} args - Arguments to be passed to the callback once it is implemented.
 * @returns {Promise}
 */

    /**
 * Manage functions to run sequentially with delays.
 * @function
 * @memberOf module:functionHelpers
 * @param {module:functionHelpers~queueManagerHandle} [queueManagerHandle=null]
 * @returns {module:functionHelpers~queueTimeoutHandle}
 */
    const queueTimeout = function queueTimeout () {
      const queueManagerHandle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
      const manager = queueManagerHandle || (0, _queueManager.default)()
      return function (fn) {
        const time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0

        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key]
        }

        return manager(function () {
          return (0, _delay.default)(time).resolver.then(function () {
            return fn.apply(void 0, args)
          })
        })
      }
    }

    const _default = queueTimeout
    exports.default = _default
  }, { './delay': 481, './queueManager': 484, 'core-js/stable': 457, 'regenerator-runtime/runtime': 510 }],
  486: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    require('regenerator-runtime/runtime')

    const _cloneObject = _interopRequireDefault(require('../objects/cloneObject'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Output the a value with label to the console and return the value to not interrupt the code.
 * @function
 * @memberOf module:functionHelpers
 * @param {string} label - Pass an identifying label of the value being output.
 * @param useClone - Determines if the logged data should be a clone of the original to preserve state.
 * @returns {function(*=)}
 */
    const trace = function trace (label) {
      const useClone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true
      return function (value) {
        // noinspection JSForgottenDebugStatementInspection
        console.info(''.concat(label, ': '), useClone ? (0, _cloneObject.default)(value) : value)
        return value
      }
    }

    const _default = trace
    exports.default = _default
  }, { '../objects/cloneObject': 494, 'core-js/stable': 457, 'regenerator-runtime/runtime': 510 }],
  487: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _absoluteMax = _interopRequireDefault(require('./numbers/absoluteMax'))

    const _absoluteMin = _interopRequireDefault(require('./numbers/absoluteMin'))

    const _compare = _interopRequireDefault(require('./numbers/compare'))

    const _randomInteger = _interopRequireDefault(require('./numbers/randomInteger'))

    const _randomNumber = _interopRequireDefault(require('./numbers/randomNumber'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Some number comparators and random number generators.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module numberHelpers
 * @memberOf module:functionalHelpers
 */
    const _default = {
      absoluteMax: _absoluteMax.default,
      absoluteMin: _absoluteMin.default,
      compare: _compare.default,
      randomInteger: _randomInteger.default,
      randomNumber: _randomNumber.default
    }
    exports.default = _default
  }, { './numbers/absoluteMax': 488, './numbers/absoluteMin': 489, './numbers/compare': 490, './numbers/randomInteger': 491, './numbers/randomNumber': 492, 'core-js/stable': 457 }],
  488: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    /**
 * Helper for returning the absolute max value
 * @function
 * @memberOf module:numberHelpers
 * @param {number} num1 - A number to compare
 * @param {number} num2 - Another number to be compared against
 * @returns {number}
 */
    const absoluteMax = function absoluteMax (num1, num2) {
      return Math.abs(num1) > Math.abs(num2) ? num1 : num2
    }

    const _default = absoluteMax
    exports.default = _default
  }, { 'core-js/stable': 457 }],
  489: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    /**
 * Helper for returning the absolute min value
 * @function
 * @memberOf module:numberHelpers
 * @param {number} num1 - A number to compare
 * @param {number} num2 - Another number to be compared against
 * @returns {number}
 */
    const absoluteMin = function absoluteMin (num1, num2) {
      return Math.abs(num1) < Math.abs(num2) ? num1 : num2
    }

    const _default = absoluteMin
    exports.default = _default
  }, { 'core-js/stable': 457 }],
  490: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    /**
 * Compare two numbers and return:
 * -1 to indicate val1 is less than val2
 * 0 to indicate both values are the equal
 * 1 to indicate val1 is greater than val2
 * @function
 * @memberOf module:numberHelpers
 * @param {number} val1 - The first number to compare
 * @param {number} val2 - The second number to compare
 * @returns {number}
 */
    const compare = function compare (val1, val2) {
      return val1 === val2 ? 0 : val1 > val2 ? 1 : -1
    }

    const _default = compare
    exports.default = _default
  }, { 'core-js/stable': 457 }],
  491: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    /**
 * Create a single random integer within provide range. And with optional offset,
 * The distance between the result numbers can be adjusted with interval.
 * @function
 * @memberOf module:numberHelpers
 * @param {number} range - Choose the breadth of the random number (0-100 would be 100 for range)
 * @param {number} [offset=0] - Choose the starting number (1-10 would be 1 for offset, 9 for range)
 * @param {number} [interval=1] - Choose the distance between numbers (5, 10, 15 would be 5 for interval, 1 for
 * offset, 2 for range)
 * @returns {number}
 */
    const randomInteger = function randomInteger (range) {
      const offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
      const interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1
      return (Math.floor(Math.random() * range) + offset) * interval
    }

    const _default = randomInteger
    exports.default = _default
  }, { 'core-js/stable': 457 }],
  492: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    /**
 * Create a single random number within provided range. And with optional offset,
 * The distance between the result numbers can be adjusted with interval.
 * @function
 * @memberOf module:numberHelpers
 * @param {number} range - Choose the breadth of the random number (0-100 would be 100 for range)
 * @param {number} [offset=0] - Choose the starting number (1-10 would be 1 for offset, 9 for range)
 * @param {number} [interval=1] - Choose the distance between numbers (~5, ~10, ~15 would be 5 for interval, 1 for
 * offset, 2 for range)
 * @returns {number}
 */
    const randomNumber = function randomNumber (range) {
      const offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
      const interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1
      return (Math.random() * range + offset) * interval
    }

    const _default = randomNumber
    exports.default = _default
  }, { 'core-js/stable': 457 }],
  493: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _cloneObject = _interopRequireDefault(require('./objects/cloneObject'))

    const _emptyObject = _interopRequireDefault(require('./objects/emptyObject'))

    const _filterObject = _interopRequireDefault(require('./objects/filterObject'))

    const _isCloneable = _interopRequireDefault(require('./objects/isCloneable'))

    const _isInstanceObject = _interopRequireDefault(require('./objects/isInstanceObject'))

    const _isObject = _interopRequireDefault(require('./objects/isObject'))

    const _mapObject = _interopRequireDefault(require('./objects/mapObject'))

    const _mergeObjects = _interopRequireDefault(require('./objects/mergeObjects'))

    const _mergeObjectsBase = _interopRequireDefault(require('./objects/mergeObjectsBase'))

    const _mergeObjectsMutable = _interopRequireDefault(require('./objects/mergeObjectsMutable'))

    const _objectKeys = _interopRequireDefault(require('./objects/objectKeys'))

    const _objectValues = _interopRequireDefault(require('./objects/objectValues'))

    const _reduceObject = _interopRequireDefault(require('./objects/reduceObject'))

    const _setAndReturnValue = _interopRequireDefault(require('./objects/setAndReturnValue'))

    const _setValue = _interopRequireDefault(require('./objects/setValue'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Simplify working with object by providing array-like parsing. Also, provides cloning and merging along with accessors that always have a return value for optimal nesting.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module objectHelpers
 * @memberOf module:functionalHelpers
 */
    const _default = {
      cloneObject: _cloneObject.default,
      emptyObject: _emptyObject.default,
      filterObject: _filterObject.default,
      isCloneable: _isCloneable.default,
      isInstanceObject: _isInstanceObject.default,
      isObject: _isObject.default,
      mapObject: _mapObject.default,
      mergeObjects: _mergeObjects.default,
      mergeObjectsBase: _mergeObjectsBase.default,
      mergeObjectsMutable: _mergeObjectsMutable.default,
      objectKeys: _objectKeys.default,
      objectValues: _objectValues.default,
      reduceObject: _reduceObject.default,
      setAndReturnValue: _setAndReturnValue.default,
      setValue: _setValue.default
    }
    exports.default = _default
  }, { './objects/cloneObject': 494, './objects/emptyObject': 495, './objects/filterObject': 496, './objects/isCloneable': 497, './objects/isInstanceObject': 498, './objects/isObject': 499, './objects/mapObject': 500, './objects/mergeObjects': 501, './objects/mergeObjectsBase': 502, './objects/mergeObjectsMutable': 503, './objects/objectKeys': 504, './objects/objectValues': 505, './objects/reduceObject': 506, './objects/setAndReturnValue': 507, './objects/setValue': 508, 'core-js/stable': 457 }],
  494: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.map.js')

    require('core-js/stable')

    const _mergeObjectsBase = _interopRequireDefault(require('./mergeObjectsBase'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Clone objects for manipulation without data corruption, returns a copy of the provided object.
 * @function
 * @memberOf module:objectHelpers
 * @param {Object} object - The original object that is being cloned
 * @param {Object} [options={}]
 * @param {number} [options.mapLimit=1000]
 * @param {number} [options.depthLimit=-1]
 * @param {number} [options.relevancyRange=100]
 * @param {Iterable} [options.map=[]]
 * @returns {Object}
 */
    const cloneObject = function cloneObject (object) {
      const _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
      const _ref$mapLimit = _ref.mapLimit
      const mapLimit = _ref$mapLimit === void 0 ? 100 : _ref$mapLimit
      const _ref$depthLimit = _ref.depthLimit
      const depthLimit = _ref$depthLimit === void 0 ? -1 : _ref$depthLimit
      const _ref$relevancyRange = _ref.relevancyRange
      const relevancyRange = _ref$relevancyRange === void 0 ? 100 : _ref$relevancyRange
      const _ref$map = _ref.map
      const map = _ref$map === void 0 ? [] : _ref$map

      return (0, _mergeObjectsBase.default)({
        mapLimit: mapLimit,
        depthLimit: depthLimit,
        relevancyRange: relevancyRange,
        map: map,
        useClone: true
      })(object)
    }

    const _default = cloneObject
    exports.default = _default
  }, { './mergeObjectsBase': 502, 'core-js/modules/es.array.map.js': 249, 'core-js/stable': 457 }],
  495: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _isObject = _interopRequireDefault(require('./isObject'))

    const _objectKeys = _interopRequireDefault(require('./objectKeys'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Helper function for testing if the item is an Object or Array that does not have any properties
 * @function
 * @memberOf module:objectHelpers
 * @param {Object|Array} item - Object or Array to test
 * @returns {boolean}
 */
    const emptyObject = function emptyObject (item) {
      return (typeof item === 'function' || (0, _isObject.default)(item)) && !(0, _objectKeys.default)(item).length
    }

    const _default = emptyObject
    exports.default = _default
  }, { './isObject': 499, './objectKeys': 504, 'core-js/stable': 457 }],
  496: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.filter.js')

    require('core-js/modules/es.array.reduce.js')

    require('core-js/stable')

    const _callWithParams = _interopRequireDefault(require('../functions/callWithParams'))

    const _objectKeys = _interopRequireDefault(require('./objectKeys'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Function is a predicate, to test each property value of the object. Return true to keep the element, false
 * otherwise, taking three arguments
 * @callback module:objectHelpers~filterCallback
 * @memberOf module:objectHelpers
 * @param {*} currentProperty - The current property being processed in the object.
 * @param {string} [currentIndex] - The property name of the current property being processed in the object.
 * @param {Object|Array} [object] - The object filter was called upon.
 * @returns {boolean}
 */

    /**
 * This function is intended to replicate behaviour of the Array.filter() function but for Objects.
 * If an array is passed in instead then it will perform standard filter(). It is recommended to
 * always use the standard filter() function when it is known that the object is actually an array.
 * @function
 * @memberOf module:objectHelpers
 * @param {Object|Array} obj - The Object (or Array) to be filtered
 * @param {module:objectHelpers~filterCallback|Function} fn - The function to be processed for each filtered property
 * @param {Object|Array} [thisArg] - Optional. Value to use as this when executing callback.
 * @returns {Object|Array}
 */
    const filterObject = function filterObject (obj, fn) {
      const thisArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined
      return Array.isArray(obj)
        ? obj.filter(fn, thisArg)
        : (0, _objectKeys.default)(obj, true).reduce(function (newObj, curr) {
            if ((0, _callWithParams.default)(fn.bind(thisArg), [obj[curr], curr, obj], 2)) {
              newObj[curr] = obj[curr]
            } else {
              delete newObj[curr]
            }

            return newObj
          }, {})
    }

    const _default = filterObject
    exports.default = _default
  }, { '../functions/callWithParams': 479, './objectKeys': 504, 'core-js/modules/es.array.filter.js': 236, 'core-js/modules/es.array.reduce.js': 252, 'core-js/stable': 457 }],
  497: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/stable')

    const _isInstanceObject = _interopRequireDefault(require('./isInstanceObject'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    /**
 * Determine if the value is a reference instance
 * @function
 * @memberOf module:objectHelpers
 * @param {Array|Object|*} value
 * @returns {boolean}
 */
    const isCloneable = function isCloneable (value) {
      return _typeof(value) === 'object' && value !== null && !(0, _isInstanceObject.default)(value)
    }

    const _default = isCloneable
    exports.default = _default
  }, { './isInstanceObject': 498, 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/es.string.iterator.js': 375, 'core-js/modules/es.symbol.description.js': 397, 'core-js/modules/es.symbol.iterator.js': 400, 'core-js/modules/es.symbol.js': 401, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457 }],
  498: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.includes.js')

    require('core-js/modules/es.function.name.js')

    require('core-js/stable')

    const _isObject = _interopRequireDefault(require('./isObject'))

    const _objectKeys = _interopRequireDefault(require('./objectKeys'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Check if the current object has inherited properties.
 * @function
 * @memberOf module:objectHelpers
 * @param {Object|Array} object
 * @returns {boolean}
 */
    const isInstanceObject = function isInstanceObject (object) {
      if (typeof object !== 'function' && !(0, _isObject.default)(object)) {
        return false
      }

      if (!['Array', 'Function', 'Object'].includes(object.constructor.name)) {
        return true
      }

      return object.constructor.name !== 'Array' && (0, _objectKeys.default)(object, true).length > (0, _objectKeys.default)(object).length
    }

    const _default = isInstanceObject
    exports.default = _default
  }, { './isObject': 499, './objectKeys': 504, 'core-js/modules/es.array.includes.js': 243, 'core-js/modules/es.function.name.js': 273, 'core-js/stable': 457 }],
  499: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.symbol.js')

    require('core-js/modules/es.symbol.description.js')

    require('core-js/modules/es.object.to-string.js')

    require('core-js/modules/es.symbol.iterator.js')

    require('core-js/modules/es.array.iterator.js')

    require('core-js/modules/es.string.iterator.js')

    require('core-js/modules/web.dom-collections.iterator.js')

    require('core-js/stable')

    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    /**
 * Check if the provided thing is an object.
 * @function
 * @memberOf module:objectHelpers
 * @param {*} object
 * @returns {boolean}
 */
    const isObject = function isObject (object) {
      return _typeof(object) === 'object' && object !== null
    }

    const _default = isObject
    exports.default = _default
  }, { 'core-js/modules/es.array.iterator.js': 246, 'core-js/modules/es.object.to-string.js': 332, 'core-js/modules/es.string.iterator.js': 375, 'core-js/modules/es.symbol.description.js': 397, 'core-js/modules/es.symbol.iterator.js': 400, 'core-js/modules/es.symbol.js': 401, 'core-js/modules/web.dom-collections.iterator.js': 450, 'core-js/stable': 457 }],
  500: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.map.js')

    require('core-js/modules/es.array.reduce.js')

    require('core-js/stable')

    const _callWithParams = _interopRequireDefault(require('../functions/callWithParams'))

    const _objectKeys = _interopRequireDefault(require('./objectKeys'))

    const _setValue = _interopRequireDefault(require('./setValue'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Function that produces a property of the new Object, taking three arguments
 * @callback module:objectHelpers~mapCallback
 * @memberOf module:objectHelpers
 * @param {*} currentProperty - The current property being processed in the object.
 * @param {string} [currentIndex] - The property name of the current property being processed in the object.
 * @param {Object|Array} [object] - The object map was called upon.
 * @returns {*}
 */

    /**
 * This function is intended to replicate behaviour of the Array.map() function but for Objects.
 * If an array is passed in instead then it will perform standard map(). It is recommended to
 * always use the standard map() function when it is known that the object is actually an array.
 * @function
 * @memberOf module:objectHelpers
 * @param {Object|Array} obj - The Object (or Array) to be mapped
 * @param {module:objectHelpers~mapCallback|Function} fn - The function to be processed for each mapped property
 * @param {Object|Array} [thisArg] - Optional. Value to use as this when executing callback.
 * @returns {Object|Array}
 */
    const mapObject = function mapObject (obj, fn) {
      const thisArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined
      return Array.isArray(obj)
        ? obj.map(fn, thisArg)
        : (0, _objectKeys.default)(obj, true).reduce(function (newObj, curr) {
            return (0, _setValue.default)(curr, (0, _callWithParams.default)(fn.bind(thisArg), [obj[curr], curr, obj], 2), newObj)
          }, {})
    }

    const _default = mapObject
    exports.default = _default
  }, { '../functions/callWithParams': 479, './objectKeys': 504, './setValue': 508, 'core-js/modules/es.array.map.js': 249, 'core-js/modules/es.array.reduce.js': 252, 'core-js/stable': 457 }],
  501: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _mergeObjectsBase = _interopRequireDefault(require('./mergeObjectsBase'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Uses mergeObjectsBase deep merge objects and arrays, merge by value.
 * @function
 * @memberOf module:objectHelpers
 * @see {@link module:objectHelpers~mergeObjectsCallback}
 * @param {...Object} objects - Provide a list of objects which will be merged starting from the end up into the first
 * @returns {*}
 */
    const mergeObjects = (0, _mergeObjectsBase.default)({
      useClone: true
    })
    const _default = mergeObjects
    exports.default = _default
  }, { './mergeObjectsBase': 502, 'core-js/stable': 457 }],
  502: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.map.js')

    require('core-js/modules/es.array.filter.js')

    require('core-js/modules/es.array.reduce.js')

    require('core-js/modules/es.array.find.js')

    require('core-js/stable')

    const _isCloneable = _interopRequireDefault(require('./isCloneable'))

    const _reduceObject = _interopRequireDefault(require('./reduceObject'))

    const _setValue = _interopRequireDefault(require('./setValue'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Function that takes one or more objects and combines them into one.
 * @typedef {Function} module:objectHelpers~mergeObjectsCallback
 * @memberOf module:objectHelpers
 * @param {...Object} objects - Provide a list of objects which will be merged starting from the end up into the first
 * @returns {*}
 */

    /**
 * Perform a deep merge of objects. This will return a function that will combine all objects and sub-objects.
 * Objects having the same attributes will overwrite from last object to first.
 * @function
 * @memberOf module:objectHelpers
 * @param {Object} [options={}]
 * @param {number} [options.mapLimit=1000]
 * @param {number} [options.depthLimit=-1]
 * @param {number} [options.relevancyRange=100]
 * @param {Iterable|array} [options.map=[]]
 * @param {boolean} [options.useClone=false]
 * @returns {module:objectHelpers~mergeObjectsCallback}
 */
    const mergeObjectsBase = function mergeObjectsBase () {
      const _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
      const _ref$mapLimit = _ref.mapLimit
      const mapLimit = _ref$mapLimit === void 0 ? 1000 : _ref$mapLimit
      const _ref$depthLimit = _ref.depthLimit
      const depthLimit = _ref$depthLimit === void 0 ? -1 : _ref$depthLimit
      const _ref$relevancyRange = _ref.relevancyRange
      const relevancyRange = _ref$relevancyRange === void 0 ? 100 : _ref$relevancyRange
      const _ref$map = _ref.map
      let map = _ref$map === void 0 ? [] : _ref$map
      const _ref$useClone = _ref.useClone
      const useClone = _ref$useClone === void 0 ? false : _ref$useClone

      /**
   * Remove elements out of relevance range and update the max relevance.
   * @param {array} map
   * @returns {array}
   */
      const updateMap = function updateMap (map) {
        const minRelevance = map.length - relevancyRange
        return map.filter(function (reference) {
          return reference.relevance > minRelevance
        }).map(function (reference) {
          return (0, _setValue.default)('relevance', reference.relevance > map.length ? map.length : reference.relevance, reference)
        })
      }

      return function () {
        for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
          objects[_key] = arguments[_key]
        }

        const firstObject = useClone ? Array.isArray(objects[0]) ? [] : {} : objects.shift()

        if (objects.length < 1) {
          return firstObject
        }

        if (depthLimit === 0) {
          return firstObject
        }

        return objects.reduce(function (newObj, arg) {
          if (!arg) {
            return newObj
          }

          map.push({
            source: arg,
            object: newObj,
            relevance: map.length
          })

          if (map.length > mapLimit) {
            map = updateMap(map)
          }

          return (0, _reduceObject.default)(arg, function (returnObj, value, key) {
            if ((0, _isCloneable.default)(value)) {
              let objectValue = newObj[key]
              const exists = map.find(function (existing) {
                return existing.source === value
              })

              if (exists) {
                exists.relevance = map.length + 1
                return (0, _setValue.default)(key, exists.object, returnObj)
              }

              if (!(0, _isCloneable.default)(objectValue) || !objectValue) {
                objectValue = useClone ? Array.isArray(value) ? [] : {} : value
              }

              if ((0, _isCloneable.default)(objectValue)) {
                return (0, _setValue.default)(key, mergeObjectsBase({
                  mapLimit: mapLimit,
                  depthLimit: depthLimit - 1,
                  relevancyRange: relevancyRange,
                  map: map,
                  useClone: useClone
                })(objectValue, value), returnObj)
              }

              map.push({
                source: value,
                object: objectValue,
                relevance: map.length
              })

              if (map.length > mapLimit) {
                map = updateMap(map)
              }
            }

            return (0, _setValue.default)(key, value, returnObj)
          }, newObj)
        }, firstObject || {})
      }
    }

    const _default = mergeObjectsBase
    exports.default = _default
  }, { './isCloneable': 497, './reduceObject': 506, './setValue': 508, 'core-js/modules/es.array.filter.js': 236, 'core-js/modules/es.array.find.js': 238, 'core-js/modules/es.array.map.js': 249, 'core-js/modules/es.array.reduce.js': 252, 'core-js/stable': 457 }],
  503: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    const _mergeObjectsBase = _interopRequireDefault(require('./mergeObjectsBase'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Uses mergeObjectsBase deep merge objects and arrays, merge by reference.
 * @function
 * @memberOf module:objectHelpers
 * @see {@link module:objectHelpers~mergeObjectsCallback}
 * @param {...Object} objects - Provide a list of objects which will be merged starting from the end up into the first
 * @returns {*}
 */
    const mergeObjectsMutable = (0, _mergeObjectsBase.default)()
    const _default = mergeObjectsMutable
    exports.default = _default
  }, { './mergeObjectsBase': 502, 'core-js/stable': 457 }],
  504: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.object.get-own-property-names.js')

    require('core-js/modules/es.parse-int.js')

    require('core-js/stable')

    const _isObject = _interopRequireDefault(require('./isObject'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Get an array of keys from any object or array. Will return empty array when invalid or there are no keys.
 * Optional flag will include the inherited keys from prototype chain when set.
 * @function
 * @memberOf module:objectHelpers
 * @param {Object|Array} object
 * @param {boolean} [includeInherited=false]
 * @returns {Array.<string|number>}
 */
    const objectKeys = function objectKeys (object) {
      const includeInherited = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false

      if (typeof object !== 'function' && !(0, _isObject.default)(object)) {
        return []
      }

      if (includeInherited) {
        const propNames = Object.getOwnPropertyNames(object)

        if (propNames.length) {
          return propNames
        }
      }

      const keys = []

      for (const key in object) {
        if (includeInherited || Object.prototype.hasOwnProperty.call(object, key)) {
          if (Array.isArray(object)) {
            keys.push(parseInt(key))
            continue
          }

          keys.push(key)
        }
      }

      return keys
    }

    const _default = objectKeys
    exports.default = _default
  }, { './isObject': 499, 'core-js/modules/es.object.get-own-property-names.js': 319, 'core-js/modules/es.parse-int.js': 335, 'core-js/stable': 457 }],
  505: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.map.js')

    require('core-js/stable')

    const _objectKeys = _interopRequireDefault(require('./objectKeys'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Get an array of values from any object or array. Will return empty array when invalid or there are no values.
 * Optional flag will include the inherited values from prototype chain when set.
 * @function
 * @memberOf module:objectHelpers
 * @param {Object|Array} object
 * @param {boolean} [includeInherited=false]
 * @returns {Array}
 */
    const objectValues = function objectValues (object) {
      const includeInherited = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false
      return (0, _objectKeys.default)(object, includeInherited).map(function (key) {
        return object[key]
      })
    }

    const _default = objectValues
    exports.default = _default
  }, { './objectKeys': 504, 'core-js/modules/es.array.map.js': 249, 'core-js/stable': 457 }],
  506: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/modules/es.array.reduce.js')

    require('core-js/stable')

    const _callWithParams = _interopRequireDefault(require('../functions/callWithParams'))

    const _objectKeys = _interopRequireDefault(require('./objectKeys'))

    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

    /**
 * Function to execute on each property in the object, taking four arguments
 * @callback module:objectHelpers~reduceCallback
 * @memberOf module:objectHelpers
 * @param {*} [accumulator={}] - The accumulator accumulates the callback's return values; it is the accumulated
 * value previously returned in the last invocation of the callback, or initialValue, if supplied (see below).
 * @param {*} [currentProperty={}] - The current property being processed in the object.
 * @param {string} [currentIndex=0] - The index of the current element being processed in the array. Starts at index
 * 0, if an initialValue is provided, and at index 1 otherwise.
 * @param {Object|Array} [object={}] - The object reduce was called upon.
 * @returns {*}
 */

    /**
 * This function is intended to replicate behaviour of the Array.reduce() function but for Objects.
 * If an array is passed in instead then it will perform standard reduce(). It is recommended to
 * always use the standard reduce() function when it is known that the object is actually an array.
 * @function
 * @memberOf module:objectHelpers
 * @param {Object|Array} obj - The Object (or Array) to be filtered
 * @param {module:objectHelpers~reduceCallback|Function} fn - The function to be processed for each filtered property
 * @param {Object|Array} [initialValue] - Optional. Value to use as the first argument to the first call of the
 * callback. If no initial value is supplied, the first element in the array will be used. Calling reduce on an empty
 * array without an initial value is an error.
 * @returns {Object|Array}
 */
    const reduceObject = function reduceObject (obj, fn) {
      const initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : obj[(0, _objectKeys.default)(obj)[0]] || obj[0]
      return Array.isArray(obj)
        ? obj.reduce(fn, initialValue)
        : (0, _objectKeys.default)(obj, true).reduce(function (newObj, curr) {
            return (0, _callWithParams.default)(fn, [newObj, obj[curr], curr, obj], 2)
          }, initialValue)
    }

    const _default = reduceObject
    exports.default = _default
  }, { '../functions/callWithParams': 479, './objectKeys': 504, 'core-js/modules/es.array.reduce.js': 252, 'core-js/stable': 457 }],
  507: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    /**
 * Set a value on an item, then return the value
 * @function
 * @memberOf module:objectHelpers
 * @param {Object|Array} item - An object or array to be updated
 * @param {string|number} key - The key on the item which will have its value set
 * @param {*} value - Any value to be applied to the key
 * @returns {*}
 */
    const setAndReturnValue = function setAndReturnValue (item, key, value) {
      item[key] = value
      return value
    }

    const _default = setAndReturnValue
    exports.default = _default
  }, { 'core-js/stable': 457 }],
  508: [function (require, module, exports) {
    'use strict'

    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.default = void 0

    require('core-js/stable')

    /**
 * Set a value on an item, then return the item.
 * NOTE: Argument order designed for usage with pipe
 * @function
 * @memberOf module:objectHelpers
 * @param {string|number} key - The key on the item which will have its value set
 * @param {*} value - Any value to be applied to the key
 * @param {Object|Array} item - An object or array to be updated
 * @returns {Object|Array}
 */
    const setValue = function setValue (key, value, item) {
      item[key] = value
      return item
    }

    const _default = setValue
    exports.default = _default
  }, { 'core-js/stable': 457 }],
  509: [function (require, module, exports) {
    (function (global) {
      (function () {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = void 0

        require('core-js/modules/es.object.assign.js')

        require('core-js/stable')

        const _arrays = _interopRequireDefault(require('./helpers/arrays'))

        const _descriptors = _interopRequireDefault(require('./helpers/descriptors'))

        const _functions = _interopRequireDefault(require('./helpers/functions'))

        const _numbers = _interopRequireDefault(require('./helpers/numbers'))

        const _objects = _interopRequireDefault(require('./helpers/objects'))

        function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

        /**
 * All of the functionalHelpers system functions for stringing together functions and simplifying logic.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module functionalHelpers
 */

        /**
 * Store a reference to this scope which will be Window if rendered via browser
 */
        const root = void 0 || window || global || {}
        /**
 * Store reference to any pre-existing module of the same name
 * @type {module|*}
 */

        const previousFunctionalHelpers = root.functionalHelpers || {}
        /**
 * All methods exported from this module are encapsulated within functionalHelpers.
 * @typedef {module:functionalHelpers|module:arrayHelpers|module:objectDescriptors|module:functionHelpers|module:numberHelpers|module:objectHelpers} functionalHelpers
 */

        const functionalHelpers = {}
        root.functionalHelpers = functionalHelpers
        /**
 * Return a reference to this library while preserving the original same-named library
 * @function
 * @returns {functionalHelpers}
 */

        const noConflict = function noConflict () {
          root.functionalHelpers = previousFunctionalHelpers
          return functionalHelpers
        }

        functionalHelpers.noConflict = noConflict

        const _default = Object.assign(functionalHelpers, _arrays.default, _descriptors.default, _functions.default, _numbers.default, _objects.default)

        exports.default = _default
      }).call(this)
    }).call(this, typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {})
  }, { './helpers/arrays': 458, './helpers/descriptors': 465, './helpers/functions': 478, './helpers/numbers': 487, './helpers/objects': 493, 'core-js/modules/es.object.assign.js': 308, 'core-js/stable': 457 }],
  510: [function (require, module, exports) {
    /**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

    const runtime = (function (exports) {
      'use strict'

      const Op = Object.prototype
      const hasOwn = Op.hasOwnProperty
      let undefined // More compressible than void 0.
      const $Symbol = typeof Symbol === 'function' ? Symbol : {}
      const iteratorSymbol = $Symbol.iterator || '@@iterator'
      const asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator'
      const toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag'

      function define (obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        })
        return obj[key]
      }
      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, '')
      } catch (err) {
        define = function (obj, key, value) {
          return obj[key] = value
        }
      }

      function wrap (innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        const protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator
        const generator = Object.create(protoGenerator.prototype)
        const context = new Context(tryLocsList || [])

        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context)

        return generator
      }
      exports.wrap = wrap

      // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.
      function tryCatch (fn, obj, arg) {
        try {
          return { type: 'normal', arg: fn.call(obj, arg) }
        } catch (err) {
          return { type: 'throw', arg: err }
        }
      }

      const GenStateSuspendedStart = 'suspendedStart'
      const GenStateSuspendedYield = 'suspendedYield'
      const GenStateExecuting = 'executing'
      const GenStateCompleted = 'completed'

      // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.
      const ContinueSentinel = {}

      // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.
      function Generator () {}
      function GeneratorFunction () {}
      function GeneratorFunctionPrototype () {}

      // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.
      let IteratorPrototype = {}
      define(IteratorPrototype, iteratorSymbol, function () {
        return this
      })

      const getProto = Object.getPrototypeOf
      const NativeIteratorPrototype = getProto && getProto(getProto(values([])))
      if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype
      }

      const Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype)
      GeneratorFunction.prototype = GeneratorFunctionPrototype
      define(Gp, 'constructor', GeneratorFunctionPrototype)
      define(GeneratorFunctionPrototype, 'constructor', GeneratorFunction)
      GeneratorFunction.displayName = define(
        GeneratorFunctionPrototype,
        toStringTagSymbol,
        'GeneratorFunction'
      )

      // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.
      function defineIteratorMethods (prototype) {
        ['next', 'throw', 'return'].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg)
          })
        })
      }

      exports.isGeneratorFunction = function (genFun) {
        const ctor = typeof genFun === 'function' && genFun.constructor
        return ctor
          ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === 'GeneratorFunction'
          : false
      }

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype
          define(genFun, toStringTagSymbol, 'GeneratorFunction')
        }
        genFun.prototype = Object.create(Gp)
        return genFun
      }

      // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.
      exports.awrap = function (arg) {
        return { __await: arg }
      }

      function AsyncIterator (generator, PromiseImpl) {
        function invoke (method, arg, resolve, reject) {
          const record = tryCatch(generator[method], generator, arg)
          if (record.type === 'throw') {
            reject(record.arg)
          } else {
            const result = record.arg
            const value = result.value
            if (value &&
            typeof value === 'object' &&
            hasOwn.call(value, '__await')) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke('next', value, resolve, reject)
              }, function (err) {
                invoke('throw', err, resolve, reject)
              })
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped
              resolve(result)
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke('throw', error, resolve, reject)
            })
          }
        }

        let previousPromise

        function enqueue (method, arg) {
          function callInvokeWithMethodAndArg () {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject)
            })
          }

          return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg()
        }

        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue
      }

      defineIteratorMethods(AsyncIterator.prototype)
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this
      })
      exports.AsyncIterator = AsyncIterator

      // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.
      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise

        const iter = new AsyncIterator(
          wrap(innerFn, outerFn, self, tryLocsList),
          PromiseImpl
        )

        return exports.isGeneratorFunction(outerFn)
          ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function (result) {
            return result.done ? result.value : iter.next()
          })
      }

      function makeInvokeMethod (innerFn, self, context) {
        let state = GenStateSuspendedStart

        return function invoke (method, arg) {
          if (state === GenStateExecuting) {
            throw new Error('Generator is already running')
          }

          if (state === GenStateCompleted) {
            if (method === 'throw') {
              throw arg
            }

            // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
            return doneResult()
          }

          context.method = method
          context.arg = arg

          while (true) {
            const delegate = context.delegate
            if (delegate) {
              const delegateResult = maybeInvokeDelegate(delegate, context)
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue
                return delegateResult
              }
            }

            if (context.method === 'next') {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg
            } else if (context.method === 'throw') {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted
                throw context.arg
              }

              context.dispatchException(context.arg)
            } else if (context.method === 'return') {
              context.abrupt('return', context.arg)
            }

            state = GenStateExecuting

            const record = tryCatch(innerFn, self, context)
            if (record.type === 'normal') {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done
                ? GenStateCompleted
                : GenStateSuspendedYield

              if (record.arg === ContinueSentinel) {
                continue
              }

              return {
                value: record.arg,
                done: context.done
              }
            } else if (record.type === 'throw') {
              state = GenStateCompleted
              // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.
              context.method = 'throw'
              context.arg = record.arg
            }
          }
        }
      }

      // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.
      function maybeInvokeDelegate (delegate, context) {
        const method = delegate.iterator[context.method]
        if (method === undefined) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null

          if (context.method === 'throw') {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator.return) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = 'return'
              context.arg = undefined
              maybeInvokeDelegate(delegate, context)

              if (context.method === 'throw') {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel
              }
            }

            context.method = 'throw'
            context.arg = new TypeError(
              "The iterator does not provide a 'throw' method")
          }

          return ContinueSentinel
        }

        const record = tryCatch(method, delegate.iterator, context.arg)

        if (record.type === 'throw') {
          context.method = 'throw'
          context.arg = record.arg
          context.delegate = null
          return ContinueSentinel
        }

        const info = record.arg

        if (!info) {
          context.method = 'throw'
          context.arg = new TypeError('iterator result is not an object')
          context.delegate = null
          return ContinueSentinel
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value

          // Resume execution at the desired location (see delegateYield).
          context.next = delegate.nextLoc

          // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.
          if (context.method !== 'return') {
            context.method = 'next'
            context.arg = undefined
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info
        }

        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null
        return ContinueSentinel
      }

      // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.
      defineIteratorMethods(Gp)

      define(Gp, toStringTagSymbol, 'Generator')

      // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.
      define(Gp, iteratorSymbol, function () {
        return this
      })

      define(Gp, 'toString', function () {
        return '[object Generator]'
      })

      function pushTryEntry (locs) {
        const entry = { tryLoc: locs[0] }

        if (1 in locs) {
          entry.catchLoc = locs[1]
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2]
          entry.afterLoc = locs[3]
        }

        this.tryEntries.push(entry)
      }

      function resetTryEntry (entry) {
        const record = entry.completion || {}
        record.type = 'normal'
        delete record.arg
        entry.completion = record
      }

      function Context (tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{ tryLoc: 'root' }]
        tryLocsList.forEach(pushTryEntry, this)
        this.reset(true)
      }

      exports.keys = function (object) {
        const keys = []
        for (const key in object) {
          keys.push(key)
        }
        keys.reverse()

        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next () {
          while (keys.length) {
            const key = keys.pop()
            if (key in object) {
              next.value = key
              next.done = false
              return next
            }
          }

          // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.
          next.done = true
          return next
        }
      }

      function values (iterable) {
        if (iterable) {
          const iteratorMethod = iterable[iteratorSymbol]
          if (iteratorMethod) {
            return iteratorMethod.call(iterable)
          }

          if (typeof iterable.next === 'function') {
            return iterable
          }

          if (!isNaN(iterable.length)) {
            let i = -1; const next = function next () {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i]
                  next.done = false
                  return next
                }
              }

              next.value = undefined
              next.done = true

              return next
            }

            return next.next = next
          }
        }

        // Return an iterator with no values.
        return { next: doneResult }
      }
      exports.values = values

      function doneResult () {
        return { value: undefined, done: true }
      }

      Context.prototype = {
        constructor: Context,

        reset: function (skipTempReset) {
          this.prev = 0
          this.next = 0
          // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.
          this.sent = this._sent = undefined
          this.done = false
          this.delegate = null

          this.method = 'next'
          this.arg = undefined

          this.tryEntries.forEach(resetTryEntry)

          if (!skipTempReset) {
            for (const name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === 't' &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
                this[name] = undefined
              }
            }
          }
        },

        stop: function () {
          this.done = true

          const rootEntry = this.tryEntries[0]
          const rootRecord = rootEntry.completion
          if (rootRecord.type === 'throw') {
            throw rootRecord.arg
          }

          return this.rval
        },

        dispatchException: function (exception) {
          if (this.done) {
            throw exception
          }

          const context = this
          function handle (loc, caught) {
            record.type = 'throw'
            record.arg = exception
            context.next = loc

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = 'next'
              context.arg = undefined
            }

            return !!caught
          }

          for (let i = this.tryEntries.length - 1; i >= 0; --i) {
            const entry = this.tryEntries[i]
            var record = entry.completion

            if (entry.tryLoc === 'root') {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle('end')
            }

            if (entry.tryLoc <= this.prev) {
              const hasCatch = hasOwn.call(entry, 'catchLoc')
              const hasFinally = hasOwn.call(entry, 'finallyLoc')

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true)
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc)
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true)
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc)
                }
              } else {
                throw new Error('try statement without catch or finally')
              }
            }
          }
        },

        abrupt: function (type, arg) {
          for (let i = this.tryEntries.length - 1; i >= 0; --i) {
            const entry = this.tryEntries[i]
            if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, 'finallyLoc') &&
            this.prev < entry.finallyLoc) {
              var finallyEntry = entry
              break
            }
          }

          if (finallyEntry &&
          (type === 'break' ||
           type === 'continue') &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null
          }

          const record = finallyEntry ? finallyEntry.completion : {}
          record.type = type
          record.arg = arg

          if (finallyEntry) {
            this.method = 'next'
            this.next = finallyEntry.finallyLoc
            return ContinueSentinel
          }

          return this.complete(record)
        },

        complete: function (record, afterLoc) {
          if (record.type === 'throw') {
            throw record.arg
          }

          if (record.type === 'break' ||
          record.type === 'continue') {
            this.next = record.arg
          } else if (record.type === 'return') {
            this.rval = this.arg = record.arg
            this.method = 'return'
            this.next = 'end'
          } else if (record.type === 'normal' && afterLoc) {
            this.next = afterLoc
          }

          return ContinueSentinel
        },

        finish: function (finallyLoc) {
          for (let i = this.tryEntries.length - 1; i >= 0; --i) {
            const entry = this.tryEntries[i]
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc)
              resetTryEntry(entry)
              return ContinueSentinel
            }
          }
        },

        catch: function (tryLoc) {
          for (let i = this.tryEntries.length - 1; i >= 0; --i) {
            const entry = this.tryEntries[i]
            if (entry.tryLoc === tryLoc) {
              const record = entry.completion
              if (record.type === 'throw') {
                var thrown = record.arg
                resetTryEntry(entry)
              }
              return thrown
            }
          }

          // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.
          throw new Error('illegal catch attempt')
        },

        delegateYield: function (iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          }

          if (this.method === 'next') {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined
          }

          return ContinueSentinel
        }
      }

      // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.
      return exports
    }(
      // If this script is executing as a CommonJS module, use module.exports
      // as the regeneratorRuntime namespace. Otherwise create a new empty
      // object. Either way, the resulting object will be used to initialize
      // the regeneratorRuntime variable at the top of this file.
      typeof module === 'object' ? module.exports : {}
    ))

    try {
      regeneratorRuntime = runtime
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, in modern engines
      // we can explicitly access globalThis. In older engines we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      if (typeof globalThis === 'object') {
        globalThis.regeneratorRuntime = runtime
      } else {
        Function('r', 'regeneratorRuntime = r')(runtime)
      }
    }
  }, {}]
}, {}, [1])
