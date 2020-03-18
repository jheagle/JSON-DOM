/**
 * @file Core Dom management functions
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */
'use strict'
;(function () {
  /**
   * Store a reference to this scope which will be Window if rendered via browser
   */
  let root = this || {}

  /**
   * Store reference to any pre-existing module of the same name
   * @type {module|*}
   */
  const previousJDomCoreDom = root.coreDom || {}

  /**
   * All methods exported from this module are encapsulated within coreDom.
   * @author Joshua Heagle <joshuaheagle@gmail.com>
   * @typedef {Object} coreDom
   * @module core/dom/core
   */
  const coreDom = {}
  root.coreDom = coreDom

  /**
   * Return a reference to this library while preserving the original same-named library
   * @function noConflict
   * @returns {coreDom}
   */
  coreDom.noConflict = () => {
    root.coreDom = previousJDomCoreDom
    return coreDom
  }

  /**
   * Verify availability of document
   * @typedef {HTMLDocument|module:pseudoDom/objects.PseudoHTMLDocument} document
   */
  let document = root.document

  /**
   * If document remains undefined, attempt to retrieve it as a module
   */
  if (typeof document === 'undefined') {
    if (typeof require !== 'undefined') {
      // noinspection JSUnresolvedFunction
      /**
       * @see module:pseudoDom/objects.generate
       * @typedef {Window|module:pseudoDom/objects.PseudoEventTarget} root
       */
      root = require('../../pseudoDom/objects.js').generate(root)
      document = root.document
    } else {
      console.error('core/dom/core requires pseudoDom/objects')
    }
  }

  /**
   * Verify availability of core
   * @typedef {*|module:core/core} core
   */
  let core = root.core

  /**
   * If core remains undefined, attempt to retrieve it as a module
   */
  if (typeof core === 'undefined') {
    if (typeof require !== 'undefined') {
      core = require('../core.js')
    } else {
      console.error('core/dom/core requires core/core')
    }
  }

  /**
   * Verify availability of core
   * @typedef {*|module:core/dom/objects} objects
   */
  let objects = root.objects

  /**
   * If objects remains undefined, attempt to retrieve it as a module
   */
  if (typeof objects === 'undefined') {
    if (typeof require !== 'undefined') {
      objects = require('./objects.js')
    } else {
      console.error('core/dom/core requires core/dom/objects')
    }
  }

  /**
   * Check if the provided Element has the provided attributes.
   * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
   * @function elementHasAttribute
   * @param {HTMLElement|module:pseudoDom/objects.PseudoHTMLElement} element - Receive the element to be assessed
   * @param {string} key - The attribute name to search for
   * @param {string|Object} attr - The expected value of the attribute to compare against
   * @returns {boolean|Object.<string, number>}
   */
  coreDom.elementHasAttribute = (element, key, attr) => {
    if (!element.style) {
      // if element is not a valid element then return false
      return false
    }
    if (/^(style|className)$/.test(key)) {
      // For attributes which are objects or multi-part strings
      // -1 = remove attribute, 0 = no change, 1 = add attribute
      return core.compareArrays(
        typeof attr === 'string' ? attr.split(' ') : Object.keys(attr),
        typeof attr === 'string' ? element[key].split(' ') : Object.keys(element[key])
      )
    }
    // Check that the key is a property of the element
    // Compare current to new one
    return (element.hasAttribute(key) && element.getAttribute(key) === attr)
  }

  /**
   * Check if a class exists on the element, return object with keys for each class and a -1, 0, 1 difference indicator.
   * @param {HTMLElement|module:pseudoDom/objects.PseudoHTMLElement} element - Provide an element to check classes
   * on.
   * @param {string} classes - A string of classes (like the content of the 'class' attribute) to be compared
   * @returns {Object<string, number>|*}
   */
  coreDom.elementCompareClassList = (element, classes) => core.compareArrays(
    classes.split(' '),
    [].from(element.classList)
  )

  /**
   * Given a objects.DomItem as config, this function will return the changes to be applied
   * to the stored element property.
   * @function elementChanges
   * @param {module:core/dom/objects.DomItem} config - The DomItem having config changes to be applied to its
   * element
   * @returns {module:core/dom/objects.DomItem}
   */
  coreDom.elementChanges = config => (config.element.tagName.toLowerCase() !== config.tagName.toLowerCase())
    // Generate a new element since the tag has changed
    ? coreDom.generateElement(config)
    // Remove all the similarities
    : core.setValue(
      'attributes',
      core.filterObject(
        config.attributes,
        // For each attribute, check if it becomes true / false based on the comparison results
        (attr1, key1) =>
          core.filterObject(
            // Get attributes as object of truthy and falsy values
            core.mapObject(
              config.attributes,
              (attr2, key2) => (typeof attr2 === 'object' || key2 === 'className')
                // Apply custom logic for class and styles, only keep the updates
                ? core.filterObject(
                  coreDom.elementHasAttribute(config.element, key2, attr2),
                  attr3 => attr3 === 1
                )
                // True when the element does not already have the attribute
                : !coreDom.elementHasAttribute(config.element, key2, attr2)
            ),
            // Remove when the attr4 value is 0 or false, or not empty object
            attr4 => !!attr4
          )[key1]
      ),
      config
    )

  /**
   * Set an attribute on the element within a DomItem, then return the config data.
   * @function setAttribute
   * @param {module:core/dom/objects.DomItem} config - The DomItem having config changes to be applied to its
   * element
   * @param {string} name - The attribute name to be updated
   * @param {string} value - The new value to be applied to the attribute
   * @returns {module:core/dom/objects.DomItem}
   */
  coreDom.setAttribute = (config, name, value) => {
    config.element.setAttribute(name, value)
    return config
  }

  /**
   * Set an attribute on the element within a DomItem, then return the attribute.
   * @function setAndReturnAttribute
   * @param {module:core/dom/objects.DomItem} config - The DomItem having config changes to be applied to its
   * element
   * @param {string} name - The attribute name to be updated
   * @param {string} value - The new value to be applied to the attribute
   * @returns {string}
   */
  coreDom.setAndReturnAttribute = (config, name, value) => {
    config.element.setAttribute(name, value)
    return value
  }

  /**
   * Update a single objects.DomItem element with the provided attributes / style / elementProperties
   * @function updateElement
   * @param {module:core/dom/objects.DomItem} config - The DomItem having config changes to be applied to its
   * element
   * @returns {module:core/dom/objects.DomItem}
   */
  coreDom.updateElement = config => !config.element.style
    // if element is not a valid element then return the config without changes
    ? config
    // Set the the current attributes to contain all the changes
    : core.setValue(
      'attributes',
      core.mapObject(
        // Retrieve only the changes to be applied from the attributes
        coreDom.elementChanges(config).attributes,
        (attr, key) => (core.notEmptyObjectOrArray(attr))
          ? core.mapObject(
            core.filterObject(
              // Remove attributes which have a numeric key (these are unwanted styles stored on elements)
              attr,
              (param, k) => /^\D+$/.test(k)
            ),
            (p, i) => core.setAndReturnValue(config.element.style, i, p),
            config.element.style
          )
          : (key in config.element)
            ? core.setAndReturnValue(config.element, key, attr)
            : coreDom.setAndReturnAttribute(config, key, attr)
      ),
      config
    )

  /**
   * Generate HTML element data for each object in the matrix
   * WARNING: This is a recursive function.
   * @function updateElements
   * @param {module:core/dom/objects.DomItem} config - The DomItem having child DomItems with config changes to be
   * applied
   * @returns {module:core/dom/objects.DomItem}
   */
  coreDom.updateElements = config => core.mapProperty(
    'children',
    child => coreDom.updateElements(child),
    coreDom.updateElement(config)
  )

  /**
   * Create an HTML element based on the provided attributes and return the element as an Object.
   * @function generateElement
   * @param {module:core/dom/objects.DomItem} config - The DomItem requiring matching HTML element property
   * @return {module:core/dom/objects.DomItem}
   */
  coreDom.generateElement = config => coreDom.updateElement(
    core.setValue('element', document.createElement(config.tagName), config)
  )

  /**
   * Generate HTML element data for a provided DomItem
   * @function bindElement
   * @param {module:core/dom/objects.DomItem} item - The DomItem needing element to be generated
   * @return {module:core/dom/objects.DomItem}
   */
  coreDom.bindElement = item => core.setValue(
    'element',
    (!item.element || !item.element.style) ? coreDom.generateElement(item).element : item.element,
    item
  )

  /**
   * Simplify detecting the parent item which can be appended to, whether root, or just a parent at any part of the tree
   * @param {
   * module:core/dom/objects.DomItemRoot|module:core/dom/objects.DomItem
   * } parent - A parent DomItem which may or may not have a body
   * @returns {module:core/dom/objects.DomItemBody|module:core/dom/objects.DomItem}
   */
  const retrieveParentItem = parent => parent.body ? parent.body : parent

  /**
   * Having an array and a potential new array element, check if the element is in the array, if not append to array.
   * @param {module:core/dom/objects.DomItem|*} item - An potential array element, possibly a DomItem
   * @param {Array} array - An array where an element may be appended.
   * @returns {Array|Buffer|*|T[]|string}
   */
  const addUniqueToArray = (item, array) => !core.inArray(array, item) ? array.concat([item]) : array

  /**
   * Provide a DomItem to be appended to a parent item, return the DomItem.
   * @param {module:core/dom/objects.DomItem} child - A DomItem to be appended
   * @param {module:core/dom/objects.DomItem} parent - A parent item to have a new child appended
   * @returns {module:core/dom/objects.DomItem}
   */
  const appendAndReturnChild = (child, parent = objects.documentItem.body) => {
    retrieveParentItem(parent).element.appendChild(child.element)
    return child
  }

  /**
   * Append a new DomItem which has the element generated.
   * @function appendHTML
   * @param {module:core/dom/objects.DomItem} item - A new DomItem to append
   * @param {module:core/dom/objects.DomItem} parent - The parent to have DomItems appended
   * @returns {module:core/dom/objects.DomItem}
   */
  coreDom.appendHTML = (item, parent = objects.documentItem.body) => appendAndReturnChild(
    coreDom.bindElement(item),
    core.setValue(
      'children',
      addUniqueToArray(item, retrieveParentItem(parent).children),
      retrieveParentItem(parent)
    )
  )

  /**
   * Reverse of appendHTML, remove a DomItem and have the associated element removed.
   * @function removeChild
   * @param {module:core/dom/objects.DomItem} item - The DomItem with HTMLElement to be removed
   * @param {module:core/dom/objects.DomItem} parent - The parent of the items
   * @returns {Array.<HTMLElement|PseudoHTMLElement>}
   */
  coreDom.removeChild = (item, parent = objects.documentItem.body) => {
    parent.element.removeChild(item.element)
    return parent.children.splice(parent.children.indexOf(item), 1)
  }

  /**
   * Register a single listener function as part of the root objects.DomItem.
   * @function registerListener
   * @param {module:core/dom/objects~listenerFunction|function} listener - Provide a function which will be called
   * when a Dom event is triggered.
   * @param {string} [name] - The name of the listener to be used.
   * @param {module:core/dom/objects.DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
   * stores has eventListeners property.
   * @returns {Object.<string, module:core/dom/objects~listenerFunction>}
   */
  coreDom.registerListener = (listener, name = listener.name, parent = objects.documentItem) => Object.assign(
    parent.eventListeners,
    { [name]: listener }
  )

  /**
   * Register multiple listeners from an array of functions.
   * @function registerListeners
   * @param {Array.<module:core/dom/objects~listenerFunction|function>} listeners - An array of functions to be
   * used as the registered event listeners.
   * @param {module:core/dom/objects.DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
   * stores has eventListeners property.
   * @returns {module:core/dom/objects.DomItemRoot|Object}
   */
  coreDom.registerListeners = (listeners, parent = objects.documentItem) => core.mergeObjects(
    parent,
    { eventListeners: parent.eventListeners },
    { eventListeners: listeners }
  )

  /**
   * Based on the provided function / listener name, retrieve the associated function from the root objects.DomItem
   * @function retrieveListener
   * @param {string} listenerName - The name of one of the registered listener functions.
   * @param {module:core/dom/objects.DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
   * stores has eventListeners property.
   * @returns {module:core/dom/objects~listenerFunction|function|Object}
   */
  coreDom.retrieveListener = (listenerName, parent = objects.documentItem) => core.inArray(
    Object.keys(parent.eventListeners),
    listenerName
  ) ? parent.eventListeners[listenerName] : {}

  /**
   * Provide compatibility for using the options parameter of addEventListener
   * @param {module:core/dom/objects.EventListenerOptions} options - An object or boolean with the listener options
   * @returns {boolean}
   */
  const listenerOptions = options => {
    if (typeof listenerOptions.supportsOptions === 'undefined') {
      // Check if supportsOptions has been defined. This is a compatibility checking flag.
      listenerOptions.supportsOptions = true
      try {
        // If it is possible to use OptionsObject, then set our flag to true
        window.addEventListener('test', null, { capture: false, once: false, passive: false })
      } catch (err) {
        // When using an OptionsObjects fails, it is only possible to pass the boolean UseCapture as the option
        listenerOptions.supportsOptions = false
      }
    }
    return (typeof options === 'object' && listenerOptions.supportsOptions) ? options : false
  }

  /**
   * Provide compatibility for assigning listeners.
   * @function assignListener
   * @param {string} trigger - The name of the event which will trigger the listenerFunction on the element.
   * @param {HTMLElement|module:pseudoDom/objects~PseudoHTMLElement} elem - An element to append the listener onto
   * @param {module:core/dom/objects~listenerFunction|function} fn - The function which will be invoked when the
   * event is triggered
   * @param {module:core/dom/objects.EventListenerOptions} options - Additional options to how the event will be
   * fired
   * @returns {module:core/dom/objects~listenerFunction|function}
   */
  coreDom.assignListener = (trigger, elem, fn, options) => {
    // Attaching a listener may be done differently based on the browser support
    if (elem.addEventListener) {
      // Latest support is provided fro addEventListener with the options parameter varying slightly
      elem.addEventListener(trigger, fn, listenerOptions(options))
    } else if (elem.attachEvent) {
      // Older browsers, especially Internet Explorer
      elem.attachEvent(`on${trigger}`, fn)
    } else {
      // General support for adding a new function onto the element which can be called to trigger the function
      elem[`on${trigger}`] = fn
    }
    return fn
  }

  /**
   * When there may be extra data needed for the event listener function call, this function may be used as a helper
   * to pass the additional data. Also, if it is desirable to add event listeners during run-time, this function can be
   * used to achieve this.
   * WARNING: This is a recursive function.
   * @function appendListeners
   * @param {module:core/dom/objects.DomItem} item - The DomItem which will have its eventListeners updated.
   * @param {string} event - The string name of the event trigger type to be added.
   * @param {string} listener - The name of the function to be called once the event is triggered.
   * @param {Object} args - Additional arguments to be used in the listener function.
   * @param {module:core/dom/objects.EventListenerOptions} options - The strategy used when the event is triggered.
   * @returns {module:core/dom/objects.DomItem}
   */
  coreDom.appendListeners = (item, event, listener, args = {}, options = false) => core.mapProperty(
    'children',
    i => coreDom.appendListeners(i, event, listener, args, options),
    core.setValue(
      'eventListeners',
      core.setValue(
        event,
        {
          listenerFunc: listener,
          listenerArgs: args,
          listenerOptions: options
        },
        item.eventListeners
      ),
      item
    )
  )

  /**
   * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
   * @param {module:core/dom/objects.DomItem} item - The DomItem which has eventListeners to apply to its element
   * @returns {module:core/dom/objects.DomItem}
   */
  const bindElementListeners = item => core.mapProperty(
    'eventListeners',
    (attr, event) => coreDom.assignListener(
      event,
      item.element,
      e => attr.listenerFunc(e, item, attr.listenerArgs), attr.listenerOptions
    ),
    item
  )

  /**
   * Based on the eventListeners property of the provided item, bind the
   * listeners to the associated element property for the provided objects.DomItem.
   * @function bindListeners
   * @param {module:core/dom/objects.DomItem} item - The DomItem which may have eventListeners to apply to its
   * element
   * @returns {module:core/dom/objects.DomItem}
   */
  coreDom.bindListeners = item =>
    (item.eventListeners && Object.keys(item.eventListeners).length && item.element.style)
      ? bindElementListeners(item)
      : item

  /**
   * Based on the eventListeners property of the provided item, bind the listeners to the associated element property
   * for each item in the objects.DomItem structure.
   * WARNING: This is a recursive function.
   * @function bindAllListeners
   * @param {module:core/dom/objects.DomItem} item - The DomItem with an associated HTMLElement to have a listener
   * assigned
   * @returns {module:core/dom/objects.DomItem}
   */
  coreDom.bindAllListeners = item => core.mapProperty(
    'children',
    i => coreDom.bindAllListeners(i),
    coreDom.bindListeners(item)
  )

  /**
   * To be used with coreDom.gatherChildItems which will start at item and recurse over all child items, this test
   * will then choose which child items will be returned as the result of the test.
   * @callback module:core/dom/core~testChildItem
   * @param {module:core/dom/objects.DomItem|Object} item - The DomItem is the child being tested
   * @param {Array.<module:core/dom/objects.DomItem>} gatheredResults - All of the child items gathered based on
   * the test
   * @returns {Array.<module:core/dom/objects.DomItem>}
   */

  /**
   * A selector function for retrieving existing child objects.DomItems from the given parent item.
   * This function will check all the children starting from and including item, and run the test function on each
   * child encountered. The return array contains children returned from the test from all levels.
   * WARNING: This is a recursive function.
   * @function gatherChildItems
   * @param {module:core/dom/objects.DomItem} item - The DomItem which may have child items matching the attribute
   * criteria
   * @param {module:core/dom/core~testChildItem} test - Assess each child, and return the ones which qualify
   * @returns {Array.<module:core/dom/objects.DomItem>}
   */
  coreDom.gatherChildItems = (item, test) => test(
    item,
    item.children.reduce((a, b) => a.concat(coreDom.gatherChildItems(b, test)), [])
  )

  /**
   * Retrieve the {@link module:core/dom/core~testChildItem} function by providing an attribute and value to check.
   * @param {string} attr - Provide the attribute name to be searched
   * @param {*} value - The attribute value to be compared
   * @returns {module:core/dom/core~testChildItem}
   */
  const getChildTest = (attr, value) => (item, gatheredResults) => (item.attributes[attr] && item.attributes[attr] === value)
    ? gatheredResults.concat([item])
    : gatheredResults

  /**
   * A selector function for retrieving existing child objects.DomItems from the given parent item.
   * This function will check all the children starting from item, and scan the attributes
   * property for matches. The returned array contains children matching from all levels.
   * WARNING: This calls a recursive function.
   * @function getChildrenFromAttribute
   * @param {string} attr - Provide the attribute name to be searched
   * @param {*} value - The attribute value to be compared
   * @param {module:core/dom/objects.DomItem} item - The DomItem which may have child items matching the attribute
   * criteria
   * @returns {Array.<module:core/dom/objects.DomItem>}
   */
  coreDom.getChildrenFromAttribute = (attr, value, item = objects.documentItem.body) =>
    coreDom.gatherChildItems(
      item,
      getChildTest(attr, value)
    )

  /**
   * Helper for getting all objects.DomItems starting at parent and having specified className attribute
   * @function getChildrenByClass
   * @returns {module:core/dom/objects.DomItem[]}
   */
  coreDom.getChildrenByClass = core.curry(coreDom.getChildrenFromAttribute)('className')

  /**
   * Helper for getting all objects.DomItems starting at parent and having specified name attribute
   * @function getChildrenByName
   * @returns {module:core/dom/objects.DomItem[]}
   */
  coreDom.getChildrenByName = core.curry(coreDom.getChildrenFromAttribute)('name')

  /**
   * A selector function for retrieving existing child objects.DomItems from the given parent item.
   * This function will check all the children starting from item, and scan the attributes
   * property for matches. The return array contains children matching from all levels.
   * WARNING: This is a recursive function.
   * @function getParentsFromAttribute
   * @param {string} attr - Provide the attribute name to be searched
   * @param {*} value - The attribute value to be compared
   * @param {module:core/dom/objects.DomItem} item - The DomItem which may have parent items matching the
   * attribute criteria
   * @returns {Array}
   */
  coreDom.getParentsFromAttribute = (attr, value, item = objects.documentItem.body) =>
    Object.keys(item.parentItem).length
      ? (item.parentItem.attributes[attr] || item[attr] || false) === value
        ? coreDom.getParentsFromAttribute(attr, value, item.parentItem).concat([item.parentItem])
        : coreDom.getParentsFromAttribute(attr, value, item.parentItem)
      : []

  /**
   * Helper for getting all objects.DomItems starting at child and having specified className attribute
   * @function getParentsByClass
   * @returns {Array}
   */
  coreDom.getParentsByClass = core.curry(coreDom.getParentsFromAttribute)('className')

  /**
   * Helper for getting all objects.DomItems starting at child and having specified name attribute
   * @function getParentsByName
   * @returns {Array}
   */
  coreDom.getParentsByName = core.curry(coreDom.getParentsFromAttribute)('name')

  /**
   * Helper for getting all objects.DomItems starting at child and having specified tagName
   * @function getParentsByTagName
   * @returns {Array}
   */
  coreDom.getParentsByTagName = core.curry(coreDom.getParentsFromAttribute)('tagName')

  /**
   * Get the upper parentItem for the provided child. (usually this is a objects.documentItem reference)
   * WARNING: This is a recursive function.
   * @function getTopParentItem
   * @param {module:core/dom/objects.DomItem} item - The DomItem which we want the highest parent item of
   * @returns {module:core/dom/objects.DomItemRoot}
   */
  coreDom.getTopParentItem = item => Object.keys(item.parentItem).length
    ? coreDom.getTopParentItem(item.parentItem)
    : item

  /**
   * This is a shortcut for building the specified HTML elements and appending them to the Dom
   * with associated listeners.
   * The final argument is specific for adding event listeners with options.
   * @function renderHTML
   * @param {module:core/dom/objects.DomItem} item - The DomItem that we want to render the element for
   * @param {module:core/dom/objects.DomItemRoot} parent - The Base Dom item which is the parent of all the items
   * @returns {module:core/dom/objects.DomItem}
   */
  coreDom.renderHTML = (item, parent = objects.documentItem) => core.pipe(
    (domItem) => core.setValue(
      'element',
      (domItem.element && domItem.element.style) ? domItem.element : coreDom.bindElement(domItem).element,
      domItem
    ),
    (domItem) => core.setValue(
      'eventListeners',
      core.mapObject(
        domItem.eventListeners,
        prop => core.mergeObjects(
          prop,
          { listenerFunc: coreDom.retrieveListener(prop.listenerFunc, coreDom.getTopParentItem(parent)) }
        )
      ),
      domItem
    ),
    core.curry(core.setValue)('parentItem', parent.body || parent),
    (domItem) => coreDom.bindListeners(coreDom.appendHTML(domItem, parent)),
    (domItem) => core.mapProperty('children', child => coreDom.renderHTML(child, domItem), domItem)
  )(core.mapObject(objects.createDomItem(item), prop => prop, item))

  /**
   * Either export all functions to be exported, or assign to the Window context
   */
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = coreDom
    }
    exports = Object.assign(exports, coreDom)
  }
}).call(this || window || {})
// Use the external context to assign this, which will be Window if rendered via browser