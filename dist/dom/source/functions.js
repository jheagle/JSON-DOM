'use strict'

require('core-js/modules/es.symbol')

require('core-js/modules/es.symbol.description')

require('core-js/modules/es.symbol.iterator')

require('core-js/modules/es.array.concat')

require('core-js/modules/es.array.includes')

require('core-js/modules/es.array.index-of')

require('core-js/modules/es.array.iterator')

require('core-js/modules/es.array.reduce')

require('core-js/modules/es.array.splice')

require('core-js/modules/es.function.name')

require('core-js/modules/es.object.assign')

require('core-js/modules/es.object.keys')

require('core-js/modules/es.object.to-string')

require('core-js/modules/es.regexp.exec')

require('core-js/modules/es.string.includes')

require('core-js/modules/es.string.iterator')

require('core-js/modules/es.string.split')

require('core-js/modules/web.dom-collections.iterator')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.renderHTML = exports.getTopParentItem = exports.getParentsByTagName = exports.getParentsByName = exports.getParentsByClass = exports.getParentsFromAttribute = exports.getChildrenByName = exports.getChildrenByClass = exports.getChildrenFromAttribute = exports.gatherChildItems = exports.bindAllListeners = exports.bindListeners = exports.appendListeners = exports.assignListener = exports.retrieveListener = exports.registerListeners = exports.registerListener = exports.removeChild = exports.appendHTML = exports.bindElement = exports.generateElement = exports.updateElements = exports.updateElement = exports.setAndReturnAttribute = exports.setAttribute = exports.elementChanges = exports.elementCompareClassList = exports.elementHasAttribute = void 0

var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

var _objects = require('./objects')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _defineProperty (obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }) } else { obj[key] = value } return obj }

function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

/**
   * Check if the provided Element has the provided attributes.
   * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
   * @function elementHasAttribute
   * @param {HTMLElement|module:pseudoDom/objects.PseudoHTMLElement} element - Receive the element to be assessed
   * @param {string} key - The attribute name to search for
   * @param {string|Object} attr - The expected value of the attribute to compare against
   * @returns {boolean|Object.<string, number>}
   */
var elementHasAttribute = function elementHasAttribute (element, key, attr) {
  if (!element.style) {
    // if element is not a valid element then return false
    return false
  }

  if (/^(style|className)$/.test(key)) {
    // For attributes which are objects or multi-part strings
    // -1 = remove attribute, 0 = no change, 1 = add attribute
    return _functionalHelpers.default.compareArrays(typeof attr === 'string' ? attr.split(' ') : Object.keys(attr), typeof attr === 'string' ? element[key].split(' ') : Object.keys(element[key]))
  } // Check that the key is a property of the element
  // Compare current to new one

  return element.hasAttribute(key) && element.getAttribute(key) === attr
}
/**
   * Check if a class exists on the element, return object with keys for each class and a -1, 0, 1 difference indicator.
   * @param {HTMLElement|module:pseudoDom/objects.PseudoHTMLElement} element - Provide an element to check classes
   * on.
   * @param {string} classes - A string of classes (like the content of the 'class' attribute) to be compared
   * @returns {Object<string, number>|*}
   */

exports.elementHasAttribute = elementHasAttribute

var elementCompareClassList = function elementCompareClassList (element, classes) {
  return _functionalHelpers.default.compareArrays(classes.split(' '), [].from(element.classList))
}
/**
   * Given a jDomObjects.DomItem as config, this function will return the changes to be applied
   * to the stored element property.
   * @function elementChanges
   * @param {module:dom/objects.DomItem} config - The DomItem having config changes to be applied to its
   * element
   * @returns {module:dom/objects.DomItem}
   */

exports.elementCompareClassList = elementCompareClassList

var elementChanges = function elementChanges (config) {
  return config.element.tagName.toLowerCase() !== config.tagName.toLowerCase() // Generate a new element since the tag has changed
    ? generateElement(config) // Remove all the similarities
    : _functionalHelpers.default.setValue('attributes', _functionalHelpers.default.filterObject(config.attributes, // For each attribute, check if it becomes true / false based on the comparison results
      function (attr1, key1) {
        return _functionalHelpers.default.filterObject( // Get attributes as object of truthy and falsy values
          _functionalHelpers.default.mapObject(config.attributes, function (attr2, key2) {
            return _typeof(attr2) === 'object' || key2 === 'className' // Apply custom logic for class and styles, only keep the updates
              ? _functionalHelpers.default.filterObject(elementHasAttribute(config.element, key2, attr2), function (attr3) {
                return attr3 === 1
              }) // True when the element does not already have the attribute
              : !elementHasAttribute(config.element, key2, attr2)
          }), // Remove when the attr4 value is 0 or false, or not empty object
          function (attr4) {
            return !!attr4
          })[key1]
      }), config)
}
/**
   * Set an attribute on the element within a DomItem, then return the config data.
   * @function setAttribute
   * @param {module:dom/objects.DomItem} config - The DomItem having config changes to be applied to its
   * element
   * @param {string} name - The attribute name to be updated
   * @param {string} value - The new value to be applied to the attribute
   * @returns {module:dom/objects.DomItem}
   */

exports.elementChanges = elementChanges

var setAttribute = function setAttribute (config, name, value) {
  config.element.setAttribute(name, value)
  return config
}
/**
   * Set an attribute on the element within a DomItem, then return the attribute.
   * @function setAndReturnAttribute
   * @param {module:dom/objects.DomItem} config - The DomItem having config changes to be applied to its
   * element
   * @param {string} name - The attribute name to be updated
   * @param {string} value - The new value to be applied to the attribute
   * @returns {string}
   */

exports.setAttribute = setAttribute

var setAndReturnAttribute = function setAndReturnAttribute (config, name, value) {
  config.element.setAttribute(name, value)
  return value
}
/**
   * Update a single objects.DomItem element with the provided attributes / style / elementProperties
   * @function updateElement
   * @param {module:dom/objects.DomItem} config - The DomItem having config changes to be applied to its
   * element
   * @returns {module:dom/objects.DomItem}
   */

exports.setAndReturnAttribute = setAndReturnAttribute

var updateElement = function updateElement (config) {
  if (!config.element.style) {
    // if element is not a valid element then return the config without changes
    return config
  }

  var domItem = elementChanges(config) // Set the the current attributes to contain all the changes

  domItem.attributes = _functionalHelpers.default.mapObject( // Retrieve only the changes to be applied from the attributes
    domItem.attributes, function (attr, key) {
      if (_functionalHelpers.default.emptyObject(attr)) {
        return key in config.element ? _functionalHelpers.default.setAndReturnValue(config.element, key, attr) : setAndReturnAttribute(config, key, attr)
      }

      var cleanedStyles = _functionalHelpers.default.filterObject( // Remove attributes which have a numeric key (these are unwanted styles stored on elements)
        attr, function (param, k) {
          return /^\D+$/.test(k)
        })

      return _functionalHelpers.default.reduceObject(cleanedStyles, function (newStyle, p, i) {
        return _functionalHelpers.default.setValue(i, p, newStyle)
      }, config.element.style)
    })
  return domItem
}
/**
   * Generate HTML element data for each object in the matrix
   * WARNING: This is a recursive function.
   * @function updateElements
   * @param {module:dom/objects.DomItem} config - The DomItem having child DomItems with config changes to be
   * applied
   * @returns {module:dom/objects.DomItem}
   */

exports.updateElement = updateElement

var updateElements = function updateElements (config) {
  var domItem = updateElement(config)
  return _functionalHelpers.default.setValue('children', _functionalHelpers.default.mapObject(domItem.children, function (child) {
    return updateElements(child)
  }), domItem)
}
/**
   * Create an HTML element based on the provided attributes and return the element as an Object.
   * @function generateElement
   * @param {module:dom/objects.DomItem} config - The DomItem requiring matching HTML element property
   * @return {module:dom/objects.DomItem}
   */

exports.updateElements = updateElements

var generateElement = function generateElement (config) {
  return updateElement(_functionalHelpers.default.setValue('element', document.createElement(config.tagName), config))
}
/**
   * Generate HTML element data for a provided DomItem
   * @function bindElement
   * @param {module:dom/objects.DomItem} item - The DomItem needing element to be generated
   * @return {module:dom/objects.DomItem}
   */

exports.generateElement = generateElement

var bindElement = function bindElement (item) {
  return _functionalHelpers.default.setValue('element', !item.element || !item.element.style ? generateElement(item).element : item.element, item)
}
/**
   * Simplify detecting the parent item which can be appended to, whether root, or just a parent at any part of the tree
   * @param {
   * module:dom/objects.DomItemRoot|module:dom/objects.DomItem
   * } parent - A parent DomItem which may or may not have a body
   * @returns {module:dom/objects.DomItemBody|module:dom/objects.DomItem}
   */

exports.bindElement = bindElement

var retrieveParentItem = function retrieveParentItem (parent) {
  return parent.body ? parent.body : parent
}
/**
   * Having an array and a potential new array element, check if the element is in the array, if not append to array.
   * @param {module:dom/objects.DomItem|*} item - An potential array element, possibly a DomItem
   * @param {Array} array - An array where an element may be appended.
   * @returns {Array|Buffer|*|T[]|string}
   */

var addUniqueToArray = function addUniqueToArray (item, array) {
  return !array.includes(item) ? array.concat([item]) : array
}
/**
   * Provide a DomItem to be appended to a parent item, return the DomItem.
   * @param {module:dom/objects.DomItem} child - A DomItem to be appended
   * @param {module:dom/objects.DomItem} parent - A parent item to have a new child appended
   * @returns {module:dom/objects.DomItem}
   */

var appendAndReturnChild = function appendAndReturnChild (child) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _objects.documentItem.body
  retrieveParentItem(parent).element.appendChild(child.element)
  return child
}
/**
   * Append a new DomItem which has the element generated.
   * @function appendHTML
   * @param {module:dom/objects.DomItem} item - A new DomItem to append
   * @param {module:dom/objects.DomItem} parent - The parent to have DomItems appended
   * @returns {module:dom/objects.DomItem}
   */

var appendHTML = function appendHTML (item) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _objects.documentItem.body
  return appendAndReturnChild(bindElement(item), _functionalHelpers.default.setValue('children', addUniqueToArray(item, retrieveParentItem(parent).children), retrieveParentItem(parent)))
}
/**
   * Reverse of appendHTML, remove a DomItem and have the associated element removed.
   * @function removeChild
   * @param {module:dom/objects.DomItem} item - The DomItem with HTMLElement to be removed
   * @param {module:dom/objects.DomItem} parent - The parent of the items
   * @returns {Array.<HTMLElement|PseudoHTMLElement>}
   */

exports.appendHTML = appendHTML

var removeChild = function removeChild (item) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _objects.documentItem.body
  parent.element.removeChild(item.element)
  return parent.children.splice(parent.children.indexOf(item), 1)
}
/**
   * Register a single listener function as part of the root jDomObjects.DomItem.
   * @function registerListener
   * @param {module:dom/objects~listenerFunction|function} listener - Provide a function which will be called
   * when a Dom event is triggered.
   * @param {string} [name] - The name of the listener to be used.
   * @param {module:dom/objects.DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
   * stores has eventListeners property.
   * @returns {Object.<string, module:dom/objects~listenerFunction>}
   */

exports.removeChild = removeChild

var registerListener = function registerListener (listener) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : listener.name
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _objects.documentItem
  return Object.assign(parent.eventListeners, _defineProperty({}, name, listener))
}
/**
   * Register multiple listeners from an array of functions.
   * @function registerListeners
   * @param {Array.<module:dom/objects~listenerFunction|function>} listeners - An array of functions to be
   * used as the registered event listeners.
   * @param {module:dom/objects.DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
   * stores has eventListeners property.
   * @returns {module:dom/objects.DomItemRoot|Object}
   */

exports.registerListener = registerListener

var registerListeners = function registerListeners (listeners) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _objects.documentItem
  return _functionalHelpers.default.mergeObjects({}, parent, {
    eventListeners: parent.eventListeners
  }, {
    eventListeners: listeners
  })
}
/**
   * Based on the provided function / listener name, retrieve the associated function from the root jDomObjects.DomItem
   * @function retrieveListener
   * @param {string} listenerName - The name of one of the registered listener functions.
   * @param {module:dom/objects.DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
   * stores has eventListeners property.
   * @returns {module:dom/objects~listenerFunction|function|Object}
   */

exports.registerListeners = registerListeners

var retrieveListener = function retrieveListener (listenerName) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _objects.documentItem
  return Object.keys(parent.eventListeners).includes(listenerName) ? parent.eventListeners[listenerName] : {}
}
/**
   * Provide compatibility for using the options parameter of addEventListener
   * @param {module:dom/objects.EventListenerOptions} options - An object or boolean with the listener options
   * @returns {boolean}
   */

exports.retrieveListener = retrieveListener

var listenerOptions = function listenerOptions (options) {
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
/**
   * Provide compatibility for assigning listeners.
   * @function assignListener
   * @param {string} trigger - The name of the event which will trigger the listenerFunction on the element.
   * @param {HTMLElement|module:pseudoDom/objects~PseudoHTMLElement} elem - An element to append the listener onto
   * @param {module:dom/objects~listenerFunction|function} fn - The function which will be invoked when the
   * event is triggered
   * @param {module:dom/objects.EventListenerOptions} options - Additional options to how the event will be
   * fired
   * @returns {module:dom/objects~listenerFunction|function}
   */

var assignListener = function assignListener (trigger, elem, fn, options) {
  // Attaching a listener may be done differently based on the browser support
  if (elem.addEventListener) {
    // Latest support is provided fro addEventListener with the options parameter varying slightly
    elem.addEventListener(trigger, fn, listenerOptions(options))
  } else if (elem.attachEvent) {
    // Older browsers, especially Internet Explorer
    elem.attachEvent('on'.concat(trigger), fn)
  } else {
    // General support for adding a new function onto the element which can be called to trigger the function
    elem['on'.concat(trigger)] = fn
  }

  return fn
}
/**
   * When there may be extra data needed for the event listener function call, this function may be used as a helper
   * to pass the additional data. Also, if it is desirable to add event listeners during run-time, this function can be
   * used to achieve this.
   * WARNING: This is a recursive function.
   * @function appendListeners
   * @param {module:dom/objects.DomItem} item - The DomItem which will have its eventListeners updated.
   * @param {string} event - The string name of the event trigger type to be added.
   * @param {string} listener - The name of the function to be called once the event is triggered.
   * @param {Object} args - Additional arguments to be used in the listener function.
   * @param {module:dom/objects.EventListenerOptions} options - The strategy used when the event is triggered.
   * @returns {module:dom/objects.DomItem}
   */

exports.assignListener = assignListener

var appendListeners = function appendListeners (item, event, listener) {
  var args = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false
  return _functionalHelpers.default.setValue('children', _functionalHelpers.default.mapObject(item.children, function (i) {
    return appendListeners(i, event, listener, args, options)
  }), _functionalHelpers.default.setValue('eventListeners', _functionalHelpers.default.setValue(event, {
    listenerFunc: listener,
    listenerArgs: args,
    listenerOptions: options
  }, item.eventListeners), item))
}
/**
   * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
   * @param {module:dom/objects.DomItem} item - The DomItem which has eventListeners to apply to its element
   * @returns {module:dom/objects.DomItem}
   */

exports.appendListeners = appendListeners

var bindElementListeners = function bindElementListeners (item) {
  return _functionalHelpers.default.setValue('eventListeners', _functionalHelpers.default.mapObject(item.eventListeners, function (attr, event) {
    return assignListener(event, item.element, function (e) {
      return attr.listenerFunc(e, item, attr.listenerArgs)
    }, attr.listenerOptions)
  }), item)
}
/**
   * Based on the eventListeners property of the provided item, bind the
   * listeners to the associated element property for the provided jDomObjects.DomItem.
   * @function bindListeners
   * @param {module:dom/objects.DomItem} item - The DomItem which may have eventListeners to apply to its
   * element
   * @returns {module:dom/objects.DomItem}
   */

var bindListeners = function bindListeners (item) {
  return item.eventListeners && Object.keys(item.eventListeners).length && item.element.style ? bindElementListeners(item) : item
}
/**
   * Based on the eventListeners property of the provided item, bind the listeners to the associated element property
   * for each item in the jDomObjects.DomItem structure.
   * WARNING: This is a recursive function.
   * @function bindAllListeners
   * @param {module:dom/objects.DomItem} item - The DomItem with an associated HTMLElement to have a listener
   * assigned
   * @returns {module:dom/objects.DomItem}
   */

exports.bindListeners = bindListeners

var bindAllListeners = function bindAllListeners (item) {
  return _functionalHelpers.default.setValue('children', _functionalHelpers.default.mapObject(item.children, function (i) {
    return bindAllListeners(i)
  }), bindListeners(item))
}
/**
   * To be used with gatherChildItems which will start at item and recurse over all child items, this test
   * will then choose which child items will be returned as the result of the test.
   * @callback module:dom/core~testChildItem
   * @param {module:dom/objects.DomItem|Object} item - The DomItem is the child being tested
   * @param {Array.<module:dom/objects.DomItem>} gatheredResults - All of the child items gathered based on
   * the test
   * @returns {Array.<module:dom/objects.DomItem>}
   */

/**
   * A selector function for retrieving existing child jDomObjects.DomItems from the given parent item.
   * This function will check all the children starting from and including item, and run the test function on each
   * child encountered. The return array contains children returned from the test from all levels.
   * WARNING: This is a recursive function.
   * @function gatherChildItems
   * @param {module:dom/objects.DomItem} item - The DomItem which may have child items matching the attribute
   * criteria
   * @param {module:dom/core~testChildItem} test - Assess each child, and return the ones which qualify
   * @returns {Array.<module:dom/objects.DomItem>}
   */

exports.bindAllListeners = bindAllListeners

var gatherChildItems = function gatherChildItems (item, test) {
  return test(item, item.children.reduce(function (a, b) {
    return a.concat(gatherChildItems(b, test))
  }, []))
}
/**
   * Retrieve the {@link module:dom/core~testChildItem} function by providing an attribute and value to check.
   * @param {string} attr - Provide the attribute name to be searched
   * @param {*} value - The attribute value to be compared
   * @returns {module:dom/core~testChildItem}
   */

exports.gatherChildItems = gatherChildItems

var getChildTest = function getChildTest (attr, value) {
  return function (item, gatheredResults) {
    return item.attributes[attr] && item.attributes[attr] === value ? gatheredResults.concat([item]) : gatheredResults
  }
}
/**
   * A selector function for retrieving existing child jDomObjects.DomItems from the given parent item.
   * This function will check all the children starting from item, and scan the attributes
   * property for matches. The returned array contains children matching from all levels.
   * WARNING: This calls a recursive function.
   * @function getChildrenFromAttribute
   * @param {string} attr - Provide the attribute name to be searched
   * @param {*} value - The attribute value to be compared
   * @param {module:dom/objects.DomItem} item - The DomItem which may have child items matching the attribute
   * criteria
   * @returns {Array.<module:dom/objects.DomItem>}
   */

var getChildrenFromAttribute = function getChildrenFromAttribute (attr, value) {
  var item = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _objects.documentItem.body
  return gatherChildItems(item, getChildTest(attr, value))
}
/**
   * Helper for getting all jDomObjects.DomItems starting at parent and having specified className attribute
   * @function getChildrenByClass
   * @returns {module:dom/objects.DomItem[]}
   */

exports.getChildrenFromAttribute = getChildrenFromAttribute

var getChildrenByClass = _functionalHelpers.default.curry(getChildrenFromAttribute)('className')
/**
   * Helper for getting all jDomObjects.DomItems starting at parent and having specified name attribute
   * @function getChildrenByName
   * @returns {module:dom/objects.DomItem[]}
   */

exports.getChildrenByClass = getChildrenByClass

var getChildrenByName = _functionalHelpers.default.curry(getChildrenFromAttribute)('name')
/**
   * A selector function for retrieving existing child jDomObjects.DomItems from the given parent item.
   * This function will check all the children starting from item, and scan the attributes
   * property for matches. The return array contains children matching from all levels.
   * WARNING: This is a recursive function.
   * @function getParentsFromAttribute
   * @param {string} attr - Provide the attribute name to be searched
   * @param {*} value - The attribute value to be compared
   * @param {module:dom/objects.DomItem} item - The DomItem which may have parent items matching the
   * attribute criteria
   * @returns {Array}
   */

exports.getChildrenByName = getChildrenByName

var getParentsFromAttribute = function getParentsFromAttribute (attr, value) {
  var item = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _objects.documentItem.body
  return Object.keys(item.parentItem).length ? (item.parentItem.attributes[attr] || item[attr] || false) === value ? getParentsFromAttribute(attr, value, item.parentItem).concat([item.parentItem]) : getParentsFromAttribute(attr, value, item.parentItem) : []
}
/**
   * Helper for getting all jDomObjects.DomItems starting at child and having specified className attribute
   * @function getParentsByClass
   * @returns {Array}
   */

exports.getParentsFromAttribute = getParentsFromAttribute

var getParentsByClass = _functionalHelpers.default.curry(getParentsFromAttribute)('className')
/**
   * Helper for getting all jDomObjects.DomItems starting at child and having specified name attribute
   * @function getParentsByName
   * @returns {Array}
   */

exports.getParentsByClass = getParentsByClass

var getParentsByName = _functionalHelpers.default.curry(getParentsFromAttribute)('name')
/**
   * Helper for getting all jDomObjects.DomItems starting at child and having specified tagName
   * @function getParentsByTagName
   * @returns {Array}
   */

exports.getParentsByName = getParentsByName

var getParentsByTagName = _functionalHelpers.default.curry(getParentsFromAttribute)('tagName')
/**
   * Get the upper parentItem for the provided child. (usually this is a documentItem reference)
   * WARNING: This is a recursive function.
   * @function getTopParentItem
   * @param {module:dom/objects.DomItem} item - The DomItem which we want the highest parent item of
   * @returns {module:dom/objects.DomItemRoot}
   */

exports.getParentsByTagName = getParentsByTagName

var getTopParentItem = function getTopParentItem (item) {
  return Object.keys(item.parentItem).length ? getTopParentItem(item.parentItem) : item
}
/**
   * This is a shortcut for building the specified HTML elements and appending them to the Dom
   * with associated listeners.
   * The final argument is specific for adding event listeners with options.
   * @function renderHTML
   * @param {module:dom/objects.DomItem} item - The DomItem that we want to render the element for
   * @param {module:dom/objects.DomItemRoot} parent - The Base Dom item which is the parent of all the items
   * @returns {module:dom/objects.DomItem}
   */

exports.getTopParentItem = getTopParentItem

var renderHTML = function renderHTML (item) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _objects.documentItem
  return _functionalHelpers.default.pipe(function (domItem) {
    return _functionalHelpers.default.setValue('element', domItem.element && domItem.element.style ? domItem.element : bindElement(domItem).element, domItem)
  }, function (domItem) {
    return _functionalHelpers.default.setValue('eventListeners', _functionalHelpers.default.mapObject(domItem.eventListeners, function (prop) {
      return _functionalHelpers.default.mergeObjects({}, prop, {
        listenerFunc: retrieveListener(prop.listenerFunc, getTopParentItem(parent))
      })
    }), domItem)
  }, _functionalHelpers.default.curry(_functionalHelpers.default.setValue)('parentItem', parent.body || parent), function (domItem) {
    return bindListeners(appendHTML(domItem, parent))
  }, function (domItem) {
    return _functionalHelpers.default.setValue('children', _functionalHelpers.default.mapObject(domItem.children, function (child) {
      return renderHTML(child, domItem)
    }), domItem)
  })(_functionalHelpers.default.mapObject((0, _objects.createDomItem)(item), function (prop) {
    return prop
  }, item))
}

exports.renderHTML = renderHTML
