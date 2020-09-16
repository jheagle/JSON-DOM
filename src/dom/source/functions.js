/**
 * @file Core Dom management functions
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */

import functionalHelpers from 'functional-helpers'
import { createDomItem, documentItem } from './objects'

/**
   * Check if the provided Element has the provided attributes.
   * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
   * @function elementHasAttribute
   * @param {HTMLElement|module:pseudoDom/objects.PseudoHTMLElement} element - Receive the element to be assessed
   * @param {string} key - The attribute name to search for
   * @param {string|Object} attr - The expected value of the attribute to compare against
   * @returns {boolean|Object.<string, number>}
   */
export const elementHasAttribute = (element, key, attr) => {
  if (!element.style) {
    // if element is not a valid element then return false
    return false
  }
  if (/^(style|className)$/.test(key)) {
    // For attributes which are objects or multi-part strings
    // -1 = remove attribute, 0 = no change, 1 = add attribute
    return functionalHelpers.compareArrays(
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
export const elementCompareClassList = (element, classes) => functionalHelpers.compareArrays(
  classes.split(' '),
  [].from(element.classList)
)

/**
   * Given a jDomObjects.DomItem as config, this function will return the changes to be applied
   * to the stored element property.
   * @function elementChanges
   * @param {module:dom/objects.DomItem} config - The DomItem having config changes to be applied to its
   * element
   * @returns {module:dom/objects.DomItem}
   */
export const elementChanges = config => (config.element.tagName.toLowerCase() !== config.tagName.toLowerCase())
// Generate a new element since the tag has changed
  ? generateElement(config)
// Remove all the similarities
  : functionalHelpers.setValue(
    'attributes',
    functionalHelpers.filterObject(
      config.attributes,
      // For each attribute, check if it becomes true / false based on the comparison results
      (attr1, key1) =>
        functionalHelpers.filterObject(
          // Get attributes as object of truthy and falsy values
          functionalHelpers.mapObject(
            config.attributes,
            (attr2, key2) => (typeof attr2 === 'object' || key2 === 'className')
            // Apply custom logic for class and styles, only keep the updates
              ? functionalHelpers.filterObject(
                elementHasAttribute(config.element, key2, attr2),
                attr3 => attr3 === 1
              )
            // True when the element does not already have the attribute
              : !elementHasAttribute(config.element, key2, attr2)
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
   * @param {module:dom/objects.DomItem} config - The DomItem having config changes to be applied to its
   * element
   * @param {string} name - The attribute name to be updated
   * @param {string} value - The new value to be applied to the attribute
   * @returns {module:dom/objects.DomItem}
   */
export const setAttribute = (config, name, value) => {
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
export const setAndReturnAttribute = (config, name, value) => {
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
export const updateElement = config => !config.element.style
// if element is not a valid element then return the config without changes
  ? config
// Set the the current attributes to contain all the changes
  : functionalHelpers.setValue(
    'attributes',
    functionalHelpers.mapObject(
      // Retrieve only the changes to be applied from the attributes
      elementChanges(config).attributes,
      (attr, key) => (functionalHelpers.notEmptyObjectOrArray(attr))
        ? functionalHelpers.mapObject(
          functionalHelpers.filterObject(
            // Remove attributes which have a numeric key (these are unwanted styles stored on elements)
            attr,
            (param, k) => /^\D+$/.test(k)
          ),
          (p, i) => functionalHelpers.setAndReturnValue(config.element.style, i, p),
          config.element.style
        )
        : (key in config.element)
          ? functionalHelpers.setAndReturnValue(config.element, key, attr)
          : setAndReturnAttribute(config, key, attr)
    ),
    config
  )

/**
   * Generate HTML element data for each object in the matrix
   * WARNING: This is a recursive function.
   * @function updateElements
   * @param {module:dom/objects.DomItem} config - The DomItem having child DomItems with config changes to be
   * applied
   * @returns {module:dom/objects.DomItem}
   */
export const updateElements = config => functionalHelpers.mapProperty(
  'children',
  child => updateElements(child),
  updateElement(config)
)

/**
   * Create an HTML element based on the provided attributes and return the element as an Object.
   * @function generateElement
   * @param {module:dom/objects.DomItem} config - The DomItem requiring matching HTML element property
   * @return {module:dom/objects.DomItem}
   */
export const generateElement = config => updateElement(
  functionalHelpers.setValue('element', document.createElement(config.tagName), config)
)

/**
   * Generate HTML element data for a provided DomItem
   * @function bindElement
   * @param {module:dom/objects.DomItem} item - The DomItem needing element to be generated
   * @return {module:dom/objects.DomItem}
   */
export const bindElement = item => functionalHelpers.setValue(
  'element',
  (!item.element || !item.element.style) ? generateElement(item).element : item.element,
  item
)

/**
   * Simplify detecting the parent item which can be appended to, whether root, or just a parent at any part of the tree
   * @param {
   * module:dom/objects.DomItemRoot|module:dom/objects.DomItem
   * } parent - A parent DomItem which may or may not have a body
   * @returns {module:dom/objects.DomItemBody|module:dom/objects.DomItem}
   */
const retrieveParentItem = parent => parent.body ? parent.body : parent

/**
   * Having an array and a potential new array element, check if the element is in the array, if not append to array.
   * @param {module:dom/objects.DomItem|*} item - An potential array element, possibly a DomItem
   * @param {Array} array - An array where an element may be appended.
   * @returns {Array|Buffer|*|T[]|string}
   */
const addUniqueToArray = (item, array) => !array.includes(item) ? array.concat([item]) : array

/**
   * Provide a DomItem to be appended to a parent item, return the DomItem.
   * @param {module:dom/objects.DomItem} child - A DomItem to be appended
   * @param {module:dom/objects.DomItem} parent - A parent item to have a new child appended
   * @returns {module:dom/objects.DomItem}
   */
const appendAndReturnChild = (child, parent = documentItem.body) => {
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
export const appendHTML = (item, parent = documentItem.body) => appendAndReturnChild(
  bindElement(item),
  functionalHelpers.setValue(
    'children',
    addUniqueToArray(item, retrieveParentItem(parent).children),
    retrieveParentItem(parent)
  )
)

/**
   * Reverse of appendHTML, remove a DomItem and have the associated element removed.
   * @function removeChild
   * @param {module:dom/objects.DomItem} item - The DomItem with HTMLElement to be removed
   * @param {module:dom/objects.DomItem} parent - The parent of the items
   * @returns {Array.<HTMLElement|PseudoHTMLElement>}
   */
export const removeChild = (item, parent = documentItem.body) => {
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
export const registerListener = (listener, name = listener.name, parent = documentItem) => Object.assign(
  parent.eventListeners,
  { [name]: listener }
)

/**
   * Register multiple listeners from an array of functions.
   * @function registerListeners
   * @param {Array.<module:dom/objects~listenerFunction|function>} listeners - An array of functions to be
   * used as the registered event listeners.
   * @param {module:dom/objects.DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
   * stores has eventListeners property.
   * @returns {module:dom/objects.DomItemRoot|Object}
   */
export const registerListeners = (listeners, parent = documentItem) => functionalHelpers.mergeObjects(
  parent,
  { eventListeners: parent.eventListeners },
  { eventListeners: listeners }
)

/**
   * Based on the provided function / listener name, retrieve the associated function from the root jDomObjects.DomItem
   * @function retrieveListener
   * @param {string} listenerName - The name of one of the registered listener functions.
   * @param {module:dom/objects.DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
   * stores has eventListeners property.
   * @returns {module:dom/objects~listenerFunction|function|Object}
   */
export const retrieveListener = (listenerName, parent = documentItem) => Object.keys(parent.eventListeners).includes(listenerName)
  ? parent.eventListeners[listenerName]
  : {}

/**
   * Provide compatibility for using the options parameter of addEventListener
   * @param {module:dom/objects.EventListenerOptions} options - An object or boolean with the listener options
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
   * @param {module:dom/objects~listenerFunction|function} fn - The function which will be invoked when the
   * event is triggered
   * @param {module:dom/objects.EventListenerOptions} options - Additional options to how the event will be
   * fired
   * @returns {module:dom/objects~listenerFunction|function}
   */
export const assignListener = (trigger, elem, fn, options) => {
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
   * @param {module:dom/objects.DomItem} item - The DomItem which will have its eventListeners updated.
   * @param {string} event - The string name of the event trigger type to be added.
   * @param {string} listener - The name of the function to be called once the event is triggered.
   * @param {Object} args - Additional arguments to be used in the listener function.
   * @param {module:dom/objects.EventListenerOptions} options - The strategy used when the event is triggered.
   * @returns {module:dom/objects.DomItem}
   */
export const appendListeners = (item, event, listener, args = {}, options = false) => functionalHelpers.mapProperty(
  'children',
  i => appendListeners(i, event, listener, args, options),
  functionalHelpers.setValue(
    'eventListeners',
    functionalHelpers.setValue(
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
   * @param {module:dom/objects.DomItem} item - The DomItem which has eventListeners to apply to its element
   * @returns {module:dom/objects.DomItem}
   */
const bindElementListeners = item => functionalHelpers.mapProperty(
  'eventListeners',
  (attr, event) => assignListener(
    event,
    item.element,
    e => attr.listenerFunc(e, item, attr.listenerArgs), attr.listenerOptions
  ),
  item
)

/**
   * Based on the eventListeners property of the provided item, bind the
   * listeners to the associated element property for the provided jDomObjects.DomItem.
   * @function bindListeners
   * @param {module:dom/objects.DomItem} item - The DomItem which may have eventListeners to apply to its
   * element
   * @returns {module:dom/objects.DomItem}
   */
export const bindListeners = item =>
  (item.eventListeners && Object.keys(item.eventListeners).length && item.element.style)
    ? bindElementListeners(item)
    : item

/**
   * Based on the eventListeners property of the provided item, bind the listeners to the associated element property
   * for each item in the jDomObjects.DomItem structure.
   * WARNING: This is a recursive function.
   * @function bindAllListeners
   * @param {module:dom/objects.DomItem} item - The DomItem with an associated HTMLElement to have a listener
   * assigned
   * @returns {module:dom/objects.DomItem}
   */
export const bindAllListeners = item => functionalHelpers.mapProperty(
  'children',
  i => bindAllListeners(i),
  bindListeners(item)
)

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
export const gatherChildItems = (item, test) => test(
  item,
  item.children.reduce((a, b) => a.concat(gatherChildItems(b, test)), [])
)

/**
   * Retrieve the {@link module:dom/core~testChildItem} function by providing an attribute and value to check.
   * @param {string} attr - Provide the attribute name to be searched
   * @param {*} value - The attribute value to be compared
   * @returns {module:dom/core~testChildItem}
   */
const getChildTest = (attr, value) => (item, gatheredResults) => (item.attributes[attr] && item.attributes[attr] === value)
  ? gatheredResults.concat([item])
  : gatheredResults

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
export const getChildrenFromAttribute = (attr, value, item = documentItem.body) =>
  gatherChildItems(
    item,
    getChildTest(attr, value)
  )

/**
   * Helper for getting all jDomObjects.DomItems starting at parent and having specified className attribute
   * @function getChildrenByClass
   * @returns {module:dom/objects.DomItem[]}
   */
export const getChildrenByClass = functionalHelpers.curry(getChildrenFromAttribute)('className')

/**
   * Helper for getting all jDomObjects.DomItems starting at parent and having specified name attribute
   * @function getChildrenByName
   * @returns {module:dom/objects.DomItem[]}
   */
export const getChildrenByName = functionalHelpers.curry(getChildrenFromAttribute)('name')

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
export const getParentsFromAttribute = (attr, value, item = documentItem.body) =>
  Object.keys(item.parentItem).length
    ? (item.parentItem.attributes[attr] || item[attr] || false) === value
      ? getParentsFromAttribute(attr, value, item.parentItem).concat([item.parentItem])
      : getParentsFromAttribute(attr, value, item.parentItem)
    : []

/**
   * Helper for getting all jDomObjects.DomItems starting at child and having specified className attribute
   * @function getParentsByClass
   * @returns {Array}
   */
export const getParentsByClass = functionalHelpers.curry(getParentsFromAttribute)('className')

/**
   * Helper for getting all jDomObjects.DomItems starting at child and having specified name attribute
   * @function getParentsByName
   * @returns {Array}
   */
export const getParentsByName = functionalHelpers.curry(getParentsFromAttribute)('name')

/**
   * Helper for getting all jDomObjects.DomItems starting at child and having specified tagName
   * @function getParentsByTagName
   * @returns {Array}
   */
export const getParentsByTagName = functionalHelpers.curry(getParentsFromAttribute)('tagName')

/**
   * Get the upper parentItem for the provided child. (usually this is a documentItem reference)
   * WARNING: This is a recursive function.
   * @function getTopParentItem
   * @param {module:dom/objects.DomItem} item - The DomItem which we want the highest parent item of
   * @returns {module:dom/objects.DomItemRoot}
   */
export const getTopParentItem = item => Object.keys(item.parentItem).length
  ? getTopParentItem(item.parentItem)
  : item

/**
   * This is a shortcut for building the specified HTML elements and appending them to the Dom
   * with associated listeners.
   * The final argument is specific for adding event listeners with options.
   * @function renderHTML
   * @param {module:dom/objects.DomItem} item - The DomItem that we want to render the element for
   * @param {module:dom/objects.DomItemRoot} parent - The Base Dom item which is the parent of all the items
   * @returns {module:dom/objects.DomItem}
   */
export const renderHTML = (item, parent = documentItem) => functionalHelpers.pipe(
  (domItem) => functionalHelpers.setValue(
    'element',
    (domItem.element && domItem.element.style) ? domItem.element : bindElement(domItem).element,
    domItem
  ),
  (domItem) => functionalHelpers.setValue(
    'eventListeners',
    functionalHelpers.mapObject(
      domItem.eventListeners,
      prop => functionalHelpers.mergeObjects(
        prop,
        { listenerFunc: retrieveListener(prop.listenerFunc, getTopParentItem(parent)) }
      )
    ),
    domItem
  ),
  functionalHelpers.curry(functionalHelpers.setValue)('parentItem', parent.body || parent),
  (domItem) => bindListeners(appendHTML(domItem, parent)),
  (domItem) => functionalHelpers.mapProperty('children', child => renderHTML(child, domItem), domItem)
)(functionalHelpers.mapObject(createDomItem(item), prop => prop, item))
