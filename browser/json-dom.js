/**
 * @file All of the core system functions for stringing together functions and simplifying logic.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */
;(function () {
  /**
   * Store a reference to this scope which will be Window if rendered via browser
   */
  const root = this || {}

  /**
   * Store reference to any pre-existing module of the same name
   * @type {module|*}
   */
  const previousJDomCore = root.core || {}

  /**
   * All methods exported from this module are encapsulated within core.
   * @author Joshua Heagle <joshuaheagle@gmail.com>
   * @typedef {Object} core
   * @module core/core
   */
  const core = {}
  root.core = core

  /**
   * Return a reference to this library while preserving the original same-named library
   * @function noConflict
   * @returns {core}
   */
  core.noConflict = () => {
    root.core = previousJDomCore
    return core
  }

  /**
   * Return a curried version of the passed function.
   * The returned function expects the same number of arguments minus the ones provided.
   * fn is the name of the function being curried.
   * @function curry
   * @param {function} fn - Receives a function to be curried
   * @returns {function(...[*]): function(...[*])}
   */
  core.curry = (fn) => (...args) => args.length >= fn.length
    ? fn(...args)
    : (...a) => core.curry(fn)(...[...args, ...a])

  /**
   * This was copied from a blog post on Composing Software written by Eric Elliott. The idea is to begin to make this
   * code base somewhat easier to parse and introduce point-free notation.
   * @author Eric Elliott
   * @function pipe
   * @param {...function} fns - Takes a series of functions having the same parameter, which parameter is also returned.
   * @returns {function(*=): (*|any)}
   */
  core.pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)

  /**
   * Set a value on an item, then return the item
   * @function setValue
   * @param {string|number} key - The key on the item which will have its value set
   * @param {*} value - Any value to be applied to the key
   * @param {Object|Array} item - An object or array to be updated
   * @returns {Object|Array}
   */
  core.setValue = (key, value, item) => {
    item[key] = value
    return item
  }

  /**
   * Set a value on an item, then return the value
   * @function setAndReturnValue
   * @param {Object|Array} item - An object or array to be updated
   * @param {string|number} key - The key on the item which will have its value set
   * @param {*} value - Any value to be applied to the key
   * @returns {*}
   */
  core.setAndReturnValue = (item, key, value) => {
    item[key] = value
    return value
  }

  /**
   * Function that produces a property of the new Object, taking three arguments
   * @callback module:core/core~mapCallback
   * @param {*} currentProperty - The current property being processed in the object.
   * @param {string} [currentIndex] - The property name of the current property being processed in the object.
   * @param {Object|Array} [object] - The object map was called upon.
   * @returns {*}
   */

  /**
   * This function is intended to replicate behaviour of the Array.map() function but for Objects.
   * If an array is passed in instead then it will perform standard map(). It is recommended to
   * always use the standard map() function when it is known that the object is actually an array.
   * @function mapObject
   * @param {Object|Array} obj - The Object (or Array) to be mapped
   * @param {module:core/core~mapCallback|function} fn - The function to be processed for each mapped property
   * @param {Object|Array} [thisArg] - Optional. Value to use as this when executing callback.
   * @returns {Object|Array}
   */
  core.mapObject = (obj, fn, thisArg = undefined) => Array.isArray(obj)
    ? obj.map(fn, thisArg)
    : Object.keys(obj).reduce(
      (newObj, curr) => core.setValue(curr, fn(...[obj[curr], curr, obj].slice(0, fn.length || 2)), newObj),
      thisArg || {}
    )

  /**
   * Perform map on an array property of an object, then return the object
   * @function mapArrayProperty
   * @param {string} property - The string key for the array property to be mapped
   * @param {module:core/core~mapCallback|function} mapFunction - A function suitable to be passed to map
   * @param {Object|Array} obj - An object having an array property
   * @returns {object}
   */
  core.mapProperty = (property, mapFunction, obj) => {
    obj[property] = core.mapObject(obj[property] || [], mapFunction)
    return obj
  }

  /**
   * Function is a predicate, to test each property value of the object. Return true to keep the element, false
   * otherwise, taking three arguments
   * @callback module:core/core~filterCallback
   * @param {*} currentProperty - The current property being processed in the object.
   * @param {string} [currentIndex] - The property name of the current property being processed in the object.
   * @param {Object|Array} [object] - The object filter was called upon.
   * @returns {boolean}
   */

  /**
   * This function is intended to replicate behaviour of the Array.filter() function but for Objects.
   * If an array is passed in instead then it will perform standard filter(). It is recommended to
   * always use the standard filter() function when it is known that the object is actually an array.
   * @function filterObject
   * @param {Object|Array} obj - The Object (or Array) to be filtered
   * @param {module:core/core~filterCallback|function} fn - The function to be processed for each filtered property
   * @param {Object|Array} [thisArg] - Optional. Value to use as this when executing callback.
   * @returns {Object|Array}
   */
  core.filterObject = (obj, fn, thisArg = undefined) => Array.isArray(obj)
    ? obj.filter(fn, thisArg)
    : Object.keys(obj).reduce((newObj, curr) => {
      if (fn(...[obj[curr], curr, obj].slice(0, fn.length || 2))) {
        newObj[curr] = obj[curr]
      } else {
        delete newObj[curr]
      }
      return newObj
    }, thisArg || {})

  /**
   * Function to execute on each property in the object, taking four arguments
   * @callback module:core/core~reduceCallback
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
   * @function reduceObject
   * @param {Object|Array} obj - The Object (or Array) to be filtered
   * @param {module:core/core~reduceCallback|function} fn - The function to be processed for each filtered property
   * @param {Object|Array} [initialValue] - Optional. Value to use as the first argument to the first call of the
   * callback. If no initial value is supplied, the first element in the array will be used. Calling reduce on an empty
   * array without an initial value is an error.
   * @returns {Object|Array}
   */
  core.reduceObject = (obj, fn, initialValue = obj[Object.keys(obj)[0]] || obj[0]) => Array.isArray(obj)
    ? obj.reduce(fn, initialValue)
    : Object.keys(obj).reduce(
      (newObj, curr) => fn(...[newObj, obj[curr], curr, obj].slice(0, fn.length || 2)),
      initialValue
    )

  /**
   * Helper function for testing if the item is an Object or Array that contains properties or elements
   * @function notEmptyObjectOrArray
   * @param {Object|Array} item - Object or Array to test
   * @returns {boolean}
   */
  core.notEmptyObjectOrArray = item => !!(
    (typeof item === 'object' && Object.keys(item).length) || (Array.isArray(item) && item.length)
  )

  /**
   * Re-add the Object Properties which cannot be cloned and must be directly copied to the new cloned object
   * WARNING: This is a recursive function.
   * @param {Object} cloned - A value-only copy of the original object
   * @param {Object} object - The original object that is being cloned
   * @returns {Object|Array}
   */
  const cloneCopy = (object, cloned) =>
    core.notEmptyObjectOrArray(object)
      ? core.reduceObject(object, (start, prop, key) => {
        start[key] = (cloned[key] && !/^(parentItem|listenerArgs|element)$/.test(key))
          ? cloneCopy(prop, cloned[key])
          : prop
        return start
      }, cloned)
      : cloned

  /**
   * Clone objects for manipulation without data corruption, returns a copy of the provided object.
   * @function cloneObject
   * @param {Object} object - The original object that is being cloned
   * @returns {Object}
   */
  core.cloneObject = object => cloneCopy(object, JSON.parse(
    JSON.stringify(object, (key, val) => !/^(parentItem|listenerArgs|element)$/.test(key)
      ? val
      : undefined)
  ))

  /**
   * Merge two objects and provide clone or original on the provided function.
   * The passed function should accept a minimum of two objects to be merged.
   * If the desire is to mutate the input objects, then the function name should
   * have the word 'mutable' in the name (case-insensitive).
   * @param {module:core/core.mergeObjects|module:core/core.mergeObjectsMutable|Function} fn - Pass one of
   * the mergeObjects functions to be used
   * @param {Object} obj1 - The receiving object; this is the object which will have it's properties overridden
   * @param {Object} obj2 - The contributing object; this is the object which will contribute new properties and
   * override existing ones
   * @param {boolean} [isMutable=false] - An optional flag which indicates whether we will clone objects or directly
   * modify them
   * @returns {Object}
   */
  const mergeObjectsBase = (fn, obj1, obj2, isMutable = false) => core.notEmptyObjectOrArray(obj2)
    ? core.mapObject(
      obj2,
      (prop, key) => (obj1[key] && !/^(parentItem|listenerArgs|element)$/.test(key))
        ? fn(obj1[key], prop)
        : prop,
      isMutable ? obj1 : core.cloneObject(obj1)
    )
    : obj2

  /**
   * Perform a deep merge of objects. This will combine all objects and sub-objects,
   * objects having the same attributes will overwrite starting from the end of the argument
   * list and bubbling up to return a merged version of the first object.
   * WARNING: This is a recursive function.
   * @function mergeObjects
   * @param {...Object} args - Provide a list of objects which will be merged starting from the end up into the first
   * object
   * @returns {Object}
   */
  core.mergeObjects = (...args) => args.length === 2
    ? mergeObjectsBase(core.mergeObjects, args[0], args[1])
    : args.length === 1
      ? core.cloneObject(args[0])
      : args.reduce(core.curry(mergeObjectsBase)(core.mergeObjects), {})

  /**
   * Perform a deep merge of objects. This will combine all objects and sub-objects,
   * objects having the same attributes will overwrite starting from the end of the argument
   * list and bubbling up to return the overwritten first object.
   * WARNING: This is a recursive function.
   * WARNING: This will mutate the first object passed in as input
   * @function mergeObjectsMutable
   * @param {...Object} args - Provide a list of objects which will be merged starting from the end up into the first
   * object
   * @returns {Object}
   */
  core.mergeObjectsMutable = (...args) => args.length === 2
    ? mergeObjectsBase(core.mergeObjectsMutable, args[0], args[1], true)
    : args.length === 1
      ? args[0]
      : args.reduce(core.curry(mergeObjectsBase)(core.mergeObjectsMutable), {})

  /**
   * Generate an array filled with a copy of the provided item or references to the provided item.
   * The length defines how long the array should be.
   * WARNING: This is a recursive function.
   * @param {boolean} useReference - Choose to multiply by clone or reference, true is by reference
   * @param {*} item - The item to be used for each array element
   * @param {number} length - The desired length of the array
   * @param {Array} [arr=[]] - The in-progress array of elements to be built and returned, will be used internally
   * @returns {Array.<*>}
   */
  const buildArrayBase = (useReference, item, length, arr = []) => --length > 0
    ? buildArrayBase(useReference, (useReference ? item : core.cloneObject(item)), length, arr.concat([item]))
    : arr.concat([item])

  /**
   * Leverage buildArrayBase to generate an array filled with a copy of the provided item.
   * The length defines how long the array should be.
   * @function buildArray
   * @param {*} item - The item to be used for each array element
   * @param {number} length - The desired length of the array
   * @param {Array} [arr=[]] - The in-progress array of elements to be built and returned, will be used internally
   * @returns {Array.<*>}
   */
  core.buildArray = core.curry(buildArrayBase)(false)

  /**
   * Leverage buildArrayBase to generate an array filled with references to the provided item.
   * The length defines how long the array should be.
   * @function buildArrayOfReferences
   * @param {*} item - The item to be used for each array element
   * @param {number} length - The desired length of the array
   * @param {Array} [arr=[]] - The in-progress array of elements to be built and returned, will be used internally
   * @returns {Array.<*>}
   */
  core.buildArrayOfReferences = core.curry(buildArrayBase)(true)

  /**
   * A simple function to check if an item is in an array
   * @function inArray
   * @param {Array} arr - Haystack which may contain the specified property
   * @param {*} prop - Needle to be found within the haystack
   * @returns {boolean}
   */
  core.inArray = (arr, prop) => arr.indexOf(prop) >= 0

  /**
   * Helper for returning the absolute max value
   * @function getAbsoluteMax
   * @param {number} num1 - A number to compare
   * @param {number} num2 - Another number to be compared against
   * @returns {number}
   */
  core.getAbsoluteMax = (num1, num2) => Math.abs(num1) > Math.abs(num2) ? num1 : num2

  /**
   * Helper for returning the absolute min value
   * @function getAbsoluteMin
   * @param {number} num1 - A number to compare
   * @param {number} num2 - Another number to be compared against
   * @returns {number}
   */
  core.getAbsoluteMin = (num1, num2) => Math.abs(num1) < Math.abs(num2) ? num1 : num2

  /**
   * Create a single random number within provided range. And with optional offset,
   * The distance between the result numbers can be adjusted with interval.
   * @function randomNumber
   * @param {number} range - Choose the breadth of the random number (0-100 would be 100 for range)
   * @param {number} [offset=0] - Choose the starting number (1-10 would be 1 for offset, 9 for range)
   * @param {number} [interval=1] - Choose the distance between numbers (~5, ~10, ~15 would be 5 for interval, 1 for
   * offset, 2 for range)
   * @returns {number}
   */
  core.randomNumber = (range, offset = 0, interval = 1) => (Math.random() * range + offset) * interval

  /**
   * Create a single random integer within provide range. And with optional offset,
   * The distance between the result numbers can be adjusted with interval.
   * @function randomInteger
   * @param {number} range - Choose the breadth of the random number (0-100 would be 100 for range)
   * @param {number} [offset=0] - Choose the starting number (1-10 would be 1 for offset, 9 for range)
   * @param {number} [interval=1] - Choose the distance between numbers (5, 10, 15 would be 5 for interval, 1 for
   * offset, 2 for range)
   * @returns {number}
   */
  core.randomInteger = (range, offset = 0, interval = 1) => (Math.floor(Math.random() * range) + offset) * interval

  /**
   * Compare two numbers and return:
   * -1 to indicate val1 is less than val2
   * 0 to indicate both values are the equal
   * 1 to indicate val1 is greater than val2
   * @function compare
   * @param {number} val1 - The first number to compare
   * @param {number} val2 - The second number to compare
   * @returns {number}
   */
  core.compare = (val1, val2) => val1 === val2 ? 0 : val1 > val2 ? 1 : -1

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
   * core.compareArrays(
   *   ['match1', 'firstMismatch1', 'match2', 'firstMismatch2', 'badMatch1'],
   *   ['match1', 'match2', 'secondMismatch1', 'badMatch1', 'badMatch1']
   * )
   * // unique array
   * ['secondMismatch1', 'match1', 'firstMismatch1', 'match2', 'firstMismatch2', 'badMatch1']
   * // result object
   * {secondMismatch1: -1, match1: 0, firstMismatch1: 1, match2: 0, firstMismatch2: 1, badMatch1: -1}
   * @function compareArrays
   * @param {Array} arr1 - The first array to compare
   * @param {Array} arr2 - The second array to compare
   * @returns {Object.<string, number>}
   */
  core.compareArrays = (arr1, arr2) =>
    arr2.filter(attr => !core.inArray(arr1, attr))
      .concat(arr1)
      .reduce(
        (returnObj, attr) => core.setValue(
          (typeof attr === 'string')
            ? attr
            : JSON.stringify(attr, (key, val) => !/^(parentItem|listenerArgs|element)$/.test(key) ? val : undefined),
          core.compare(arr1.filter(val => val === attr).length, arr2.filter(val => val === attr).length),
          returnObj
        ),
        {}
      )

  /**
   * This was adapted from a blog post on Composing Software written by Eric Elliott. Trace provides a way to traces
   * steps through code via the console, while maintaining the functional-style return value.
   * Returns a function which can then receive a value to output, the value will then be returned.
   * @author Eric Elliott
   * @function trace
   * @param {string} label - Pass an identifying label of the value being output.
   * @returns {function(*=)}
   */
  core.trace = label => value => {
    console.info(`${label}: `, value)
    return value
  }

  /**
   * Run Timeout functions one after the other in queue. This function needs some work to comply with the standards
   * applied to the rest of this file where this is not a Pure function, and it does not reliably return a result. This
   * implementation should likely be used with Promise instead.
   * WARNING: This is a recursive function.
   * @function queueTimeout
   * @param {function|object|boolean} fn - A callback function to be performed at some time in the future.
   * @param {number} time - The time in milliseconds to delay.
   * @param {...*} args - Arguments to be passed to the callback once it is implemented.
   * @returns {{id: number, func: function, timeout: number, args: {Array}, result: *}}
   */
  core.queueTimeout = (fn = {}, time = 0, ...args) => {
    // Track the queue to be processed in FIFO
    core.queueTimeout.queue = core.queueTimeout.queue || []
    // Do not run more than one queued item at a time
    core.queueTimeout.isRunning = core.queueTimeout.isRunning || false
    // Construct an object which will store the queued function data
    const queueItem = { id: 0, func: fn, timeout: time, args: args, result: 0 }
    if (fn) {
      // When the function is valid, append it to the end of the queue
      core.queueTimeout.queue.push(queueItem)
    }
    if (core.queueTimeout.queue.length && !core.queueTimeout.isRunning) {
      // Check that the queue is not empty, and it is not running a queued item
      // Set isRunning flag to begin processing the next queued item
      core.queueTimeout.isRunning = true
      // Pick an item off the front of the queue, and thereby reduce the queue size
      const toRun = core.queueTimeout.queue.shift()
      // Get the timeout ID when it has begun
      toRun.id = setTimeout(() => {
        // Run the function after the provided timeout
        toRun.result = toRun.func(...toRun.args)
        // Reset isRunning flag
        core.queueTimeout.isRunning = false
        // Re-run the queue which will get the next queued item if there is one
        return core.queueTimeout(false)
      }, toRun.timeout)
      // Return whatever object we have for the current queued item being processed, likely incomplete because the
      // function will complete in the future
      return toRun
    }
    // Return newly created queuedItem
    return queueItem
  }

  /**
   * Either export all functions to be exported, or assign to the Window context
   */
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = core
    }
    exports = Object.assign(exports, core)
  }
}).call(this || window || {})
// Use the external context to assign this, which will be Window if rendered via browser

/**
 * @file Core objects for representing the DOM in JSON.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */
;(function () {
  /**
   * Store a reference to this scope which will be Window if rendered via browser
   */
  let root = this || {}

  /**
   * Verify availability of document
   * @typedef {HTMLDocument|module:pseudoDom/objects.PseudoHTMLDocument} document
   */
  let document = root.document

  /**
   * If document remains undefined, attempt to retrieve it as a module
   */
  if (!Object.keys(root).length) {
    if (typeof require !== 'undefined') {
      // noinspection JSUnresolvedFunction
      /**
       * @see module:pseudoDom/objects.generate
       * @typedef {Window|module:pseudoDom/objects.PseudoEventTarget} root
       */
      root = require('../../pseudoDom/objects.js').generate(root)
      document = root.document
    } else {
      console.error('objects.js requires pseudoDom/objects')
    }
  }

  /**
   * Store reference to any pre-existing module of the same name
   * @type {module|*}
   */
  const previousJDomObjects = root.objects || {}

  /**
   * All methods exported from this module are encapsulated within objects
   * @author Joshua Heagle <joshuaheagle@gmail.com>
   * @typedef {Object} objects
   * @module core/dom/objects
   */
  const objects = {}
  root.objects = objects

  /**
   * Return a reference to this library while preserving the original same-named library
   * @function noConflict
   * @returns {objects}
   */
  objects.noConflict = () => {
    root.objects = previousJDomObjects
    return objects
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
      console.error('core/dom/objects requires core/core')
    }
  }

  /**
   * This is the standard definition of a listenerFunction to be used
   * @callback objects.listenerFunction
   * @callback listenerFunction
   * @param {Event|module:pseudoDom/objects.PseudoEvent} e - The event object passed to the listener
   * @param {module:core/dom/objects.DomItem} target - The element which triggered the event
   * @param {...*} [args] - Optional args as required by the listener
   */

  /**
   * A Boolean indicating whether events of this type will be dispatched to the registered listerFunction before being
   * dispatched to any EventTarget beneath it in the Dom tree.
   * @typedef {boolean} module:core/dom/objects.UseCapture
   */

  /**
   * OptionsObject defines the structure for the options to be passed to addEventListener
   * @typedef {Object} module:core/dom/objects.OptionsObject
   * @property {boolean} capture - Indicate that events of this type will be dispatched to the registered
   * listenerFunction before being dispatched to any EventTarget beneath it in the Dom tree.
   * @property {boolean} once - Indicate that the listenerFunction should be invoked at most once after being added. If
   * 'true', the listenerFunction would be automatically removed when invoked.
   * @property {boolean} passive - Indicate that, if 'true', indicates that the listenerFunction will never call
   * preventDefault(). If preventDefault() is called, the user agent will do nothing with it.
   */

  /**
   * EventListenerOptions is either a boolean as UseCapture or an Object as OptionsObject
   * @typedef {
   * module:core/dom/objects.OptionsObject|module:core/dom/objects.UseCapture
   * } module:core/dom/objects.EventListenerOptions
   */

  /**
   * An EventListener Object to be appended to the element within the DomItem
   * @typedef {Object} objects.EventListener
   * @typedef {Object} EventListener
   * @property {string} listenerFunc - A string function name matching an existing
   * {@link module:core/dom/objects~listenerFunction}.
   * @property {Object} listenerArgs - Additional args required for the listener function
   * @property {module:core/dom/objects.EventListenerOptions} listenerOptions - Provides support for options
   * parameter of addEventListener, or false for default
   */

  /**
   * DomItem defines the structure for a single element in the Dom
   * @typedef {Object} module:core/dom/objects.DomItem
   * @property {string} tagName - This is any valid HTMLElement tagName
   * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
   * (including the defaulted style object)
   * @property {(Object|HTMLElement|module:pseudoDom/objects.PseudoHTMLElement)} element - A reference to an existing HTML element will be stored here (default
   * empty object)
   * @property {Object.<Event, module:core/dom/objects~EventListener>} eventListeners - An object holding all
   * events to be registered for the associated element
   * @property {module:core/dom/objects.DomItem} parentItem - A reference to the parent of this object
   * @property {Array.<module:core/dom/objects.DomItem>} children - A reference to an array of child objects
   */

  /**
   * This is the basic Object for representing the Dom in a virtual perspective. All incoming attributes will be merged
   * to the specified format.
   * @function createDomItem
   * @param {...Object} attributes - DomItem-like object(s) to be merged as a DomItem
   * @returns {module:core/dom/objects.DomItem}
   */
  objects.createDomItem = (...attributes) => core.mergeObjectsMutable({
    tagName: 'div',
    attributes: {
      style: {}
    },
    element: {},
    eventListeners: {},
    parentItem: {},
    children: []
  }, ...attributes)

  /**
   * DomItemHead defines the structure for a single element in the Dom
   * @typedef {module:core/dom/objects.DomItem} module:core/dom/objects.DomItemHead
   * @typedef {module:core/dom/objects.DomItem} DomItemHead
   * @property {string} [tagName=head] - This is set to the string head referring to the HTML element of the same name
   * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
   * @property {HTMLHeadElement|module:pseudoDom/objects.PseudoHTMLElement} element - A reference to the HTML head element
   * @property {Array.<module:core/dom/objects.DomItem>} children - A reference to an array of child objects
   */

  /**
   * DomItemBody defines the structure for a single element in the Dom
   * @typedef {module:core/dom/objects.DomItem} module:core/dom/objects.DomItemBody
   * @typedef {module:core/dom/objects.DomItem} DomItemBody
   * @property {string} [tagName=body] - This is set to the string body referring to the HTML element of the same name
   * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
   * @property {HTMLBodyElement|module:pseudoDom/objects.PseudoHTMLElement} element - A reference to the HTML body element
   * @property {Array.<module:core/dom/objects.DomItem>} children - A reference to an array of child objects
   */

  /**
   * Initiate the children of Root / DocumentItem. This is a helper for {@link documentDomItem}.
   * @returns {Array.<module:core/dom/objects~DomItemHead|module:core/dom/objects~DomItemBody>}
   */
  const initChildren = () => [
    objects.createDomItem({
      tagName: 'head',
      attributes: {},
      element: document.head,
      children: []
    }),
    objects.createDomItem({
      tagName: 'body',
      attributes: {},
      element: document.body,
      children: []
    })
  ]

  /**
   * DomItemRoot defines the structure for a single element in the Dom
   * @typedef {module:core/dom/objects.DomItem} module:core/dom/objects.DomItemRoot
   * @property {string} [tagName=html] - This is set to the string html referring to the HTML element of the same name
   * @property {Object} attributes - Empty object as attributes placeholder
   * @property {HTMLDocument|module:pseudoDom/objects.PseudoHTMLDocument} element - A reference to the entire Document
   * @property {Object.<string, module:core/dom/objects~listenerFunction>} eventListeners - all registered
   * listeners stored as listener name and function pairs
   * @property {
   * Array.<module:core/dom/objects~DomItemHead|module:core/dom/objects~DomItemBody>
   *   } children - Two references: for head and body
   * @property {module:core/dom/objects~DomItemHead} head - A specific reference to head item
   * @property {module:core/dom/objects~DomItemBody} body - A specific reference to body item
   */

  /**
   * Initiate the Root for DocumentItem. This is primary a helper for {@link documentDomItem}.
   * @param {
   * Array.<module:core/dom/objects~DomItemHead|module:core/dom/objects~DomItemBody>
   *   } children - Provide an array of Head and Body (usually via {@link initChildren})
   * @param {Object.<string, module:core/dom/objects~listenerFunction>} listeners - An object of all event
   * listeners to be registered in the Dom
   * @returns {module:core/dom/objects.DomItemRoot|module:core/dom/objects.DomItem}
   */
  const initRoot = (children, listeners = {}) => objects.createDomItem({
    tagName: 'html',
    attributes: {},
    element: document,
    eventListeners: listeners,
    children: children,
    head: children[0],
    body: children[1]
  })

  /**
   * Return a DomItem reference to the document. The rootItem argument is a system variable and not necessary to
   * implement.
   * @function documentDomItem
   * @param {Object.<string, module:core/dom/objects~listenerFunction>} listeners - An object of all event
   * listeners to be registered in the Dom
   * @param {module:core/dom/objects.DomItemRoot|module:core/dom/objects.DomItem} [rootItem] - This is a
   * reference to DomItemRoot which will be defaulted with {@link initRoot}
   * @returns {module:core/dom/objects.DomItemRoot|module:core/dom/objects.DomItem}
   */
  objects.documentDomItem = (listeners = [], rootItem = initRoot(initChildren(), listeners)) => {
    rootItem.children = rootItem.children.map(child => objects.createDomItem(child, { parentItem: rootItem }))
    Object.assign(rootItem.head, rootItem.children[0])
    Object.assign(rootItem.body, rootItem.children[1])
    return objects.createDomItem(rootItem)
  }

  /**
   * Create reference for storing document changes
   * @member documentItem
   * @type {module:core/dom/objects.DomItemRoot}
   */
  objects.documentItem = objects.documentDomItem()

  /**
   * Either export all functions to be exported, or assign to the Window context
   */
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = objects
    }
    exports = Object.assign(exports, objects)
  }
}).call(this || window || {})
// Use the external context to assign this, which will be Window if rendered via browser

/**
 * @file Core Dom management functions
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */
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

/**
 * @file Core Matrix objects for representing DOM grid in JSON.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */
;(function () {
  /**
   * Store a reference to this scope which will be Window if rendered via browser
   */
  const root = this || {}

  /**
   * Store reference to any pre-existing module of the same name
   * @type {module|*}
   */
  const previousJDomMatrixObjects = root.matrixObjects || {}

  /**
   * All methods exported from this module are encapsulated within matrixObjects.
   * @author Joshua Heagle <joshuaheagle@gmail.com>
   * @typedef {Object} matrixObjects
   * @module matrix/objects
   */
  const matrixObjects = {}
  root.matrixObjects = matrixObjects

  /**
   * Return a reference to this library while preserving the original same-named library
   * @function noConflict
   * @returns {matrixObjects}
   */
  matrixObjects.noConflict = () => {
    root.matrixObjects = previousJDomMatrixObjects
    return matrixObjects
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
      core = require('../core/core.js')
    } else {
      console.error('objects.js requires core')
    }
  }

  /**
   * Verify availability of objects
   * @typedef {*|module:core/dom/objects} objects
   */
  let objects = root.objects

  /**
   * If objects remains undefined, attempt to retrieve it as a module
   */
  if (typeof objects === 'undefined') {
    if (typeof require !== 'undefined') {
      objects = require('../core/dom/objects.js')
    } else {
      console.error('core.js requires objects')
    }
  }

  /**
   * A string representing an axis: x, y, z
   * @typedef {string} module:matrix/objects.axis
   */

  /**
   * A number representing a coordinate in a {@link module:matrix/objects.Matrix}
   * @typedef {number} module:matrix/objects.coordinate
   */

  /**
   * Point stores a location in a {@link module:matrix/objects.Matrix} defined by three key-value pairs
   * ({@link module:matrix/objects.axis}=>{@link module:matrix/objects.coordinate})
   * @typedef {
   * Object.<module:matrix/objects.axis, module:matrix/objects.coordinate>
   *   } module:matrix/objects.Point
   * @property {module:matrix/objects.coordinate} x - The X-coordinate of a Point
   * @property {module:matrix/objects.coordinate} y - The Y-coordinate of a Point
   * @property {module:matrix/objects.coordinate} z - The Z-coordinate of a Point
   */

  /**
   * Point stores a location in a {@link module:matrix/objects.Matrix} defined by three key-value pairs
   * @typedef {module:matrix/objects.Point} module:matrix/objects.Direction
   * @property {module:matrix/objects.coordinate} x - The X-coordinate must be either -1, 0, or 1
   * @property {module:matrix/objects.coordinate} y - The Y-coordinate must be either -1, 0, or 1
   * @property {module:matrix/objects.coordinate} z - The Z-coordinate must be either -1, 0, or 1
   */

  /**
   * Store the point data for an x, y, z {@link module:matrix/objects.Matrix}.
   * @function point
   * @param {module:matrix/objects.coordinate} x - The numeric value for X-coordinate
   * @param {module:matrix/objects.coordinate} y - The numeric value for Y-coordinate
   * @param {module:matrix/objects.coordinate} [z=0] - The numeric value for Z-coordinate (default to 0 for 2D
   * {@link module:matrix/objects.Matrix})
   * @returns {module:matrix/objects.Point}
   */
  matrixObjects.point = (x, y, z = 0) => ({
    x: x,
    y: y,
    z: z
  })

  /**
   * MatrixTile is an Object which stores a reference a {@link Point} and can be populated with additionally associated
   * fields.
   * @typedef {Object.<string, module:matrix/objects.Point>} module:matrix/objects.MatrixTile
   * @property {module:matrix/objects.Point} point - a reference to its location in a
   * {@link module:matrix/objects.Matrix}
   * @property {module:matrix/objects.axis} axis - The axis will be 'x'
   */

  /**
   * A default tile in the {@link module:matrix/objects.Matrix}
   * @function tile
   * @returns {module:matrix/objects.MatrixTile}
   */
  matrixObjects.tile = () => ({
    point: {}
  })

  /**
   * MatrixColumn is a DomItem which represents the x axis and also stores {@link module:matrix/objects.MatrixTile}
   * @typedef {
   * module:core/dom/objects.DomItem|module:matrix/objects.MatrixTile
   * } module:matrix/objects.MatrixColumn
   */

  /**
   * MatrixRow is the parent of a group of {@link module:matrix/objects.MatrixTile}
   * @typedef {module:core/dom/objects.DomItem} module:matrix/objects.MatrixRow
   * @property {module:matrix/objects.axis} axis - The axis will be 'y'
   * @property {Array.<module:matrix/objects.MatrixColumn>} children - all of the MatrixTile items as part of this
   * MatrixRow
   */

  /**
   * MatrixLayer is the parent of a group of {@link module:matrix/objects.MatrixTile}
   * @typedef {module:core/dom/objects.DomItem} module:matrix/objects.MatrixLayer
   * @property {module:matrix/objects.axis} axis - The axis will be 'y'
   * @property {Array.<module:matrix/objects.MatrixRow>} children - all of the MatrixRow items as part of this
   * MatrixLayer
   */

  /**
   * Matrix is a multi-level {@link module:core/dom/objects.DomItem} which is used to visually represent a
   * mathematical grid / matrix.
   * The matrix consists of four DomItem levels, at the top tier is the Matrix container with class matrix.
   * The second tier represents the z axis (with property axis='z') and has the class layer.
   * The third tier represents the y axis (with property axis='y') and has the class row.
   * The fourth (final) tier represents the x axis (with property axis='x') and has the class column.
   * The {@link module:matrix/objects.MatrixTile} is attached on the x axis tier.
   * The number of children at each level is defined by the size of the matrix, the end result is a multidimensional
   * array.
   * @typedef {module:core/dom/objects.DomItem} module:matrix/objects.Matrix
   * @augments module:core/dom/objects.DomItem
   */

  /**
   * Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well
   * @function matrix
   * @param {
   * {coordinate: module:matrix/objects.coordinate, props: Array.<module:matrix/objects.MatrixTile>}
   * } x - Properties and a coordinate defining the width of the matrix.
   * @param {
   * {coordinate: module:matrix/objects.coordinate, props: Array.<module:matrix/objects.MatrixRow>}
   * } y - Properties and a coordinate defining the height of the matrix.
   * @param {
   * {coordinate: module:matrix/objects.coordinate, props: Array.<module:matrix/objects.MatrixLayer>}
   * } z - Properties and a coordinate defining the depth of the matrix.
   * @param {Array.<module:matrix/objects.Matrix>} matrixProps - Properties to be added to the matrix
   * @returns {module:matrix/objects.Matrix}
   */
  matrixObjects.matrix = (
    x = { coordinate: 0, props: [] },
    y = { coordinate: 0, props: [] },
    z = { coordinate: 1, props: [] },
    matrixProps = []
  ) => objects.createDomItem({
    tagName: 'div',
    attributes: {
      className: 'matrix'
    },
    children: core.buildArray(objects.createDomItem({
      axis: 'z',
      tagName: 'div',
      attributes: {
        className: 'layer'
      },
      children: core.buildArray(objects.createDomItem({
        axis: 'y',
        tagName: 'div',
        attributes: {
          className: 'row'
        },
        children: core.buildArray(objects.createDomItem({
          axis: 'x',
          tagName: 'div',
          attributes: {
            className: 'column'
          }
        }, ...x.props), x.coordinate)
      }, ...y.props), y.coordinate)
    }, ...z.props), z.coordinate)
  }, ...matrixProps)

  /**
   * Return a single layer matrix where x and y are equal
   * @function square
   * @param {Array.<module:matrix/objects.MatrixTile>} [x=[]] - All the data to be presented as part of the
   * specified point, requires MatrixTile base
   * @param {Array.<module:matrix/objects.MatrixRow>} [y=[]] - Additional data to append to the MatrixRow
   * @param {Array.<module:matrix/objects.MatrixLayer>} [z=[]] - Additional data to append to the MatrixLayer
   * @param {Array.<module:matrix/objects.Matrix>} [matrixProps=[]] - Additional data to append to the Matrix
   * @param {number} size - Used to define height and width as equal values (depth is set to 1)
   * @returns {module:matrix/objects.Matrix}
   */
  matrixObjects.square = ({ x = [], y = [], z = [], matrixProps = [] } = {}, size) => matrixObjects.matrix(
    { coordinate: size, props: x },
    { coordinate: size, props: y },
    { coordinate: 1, props: z },
    matrixProps
  )

  /**
   * Return a matrix where x, y, and z are equal
   * @function cube
   * @param {Array.<module:matrix/objects.MatrixTile>} [x=[]] - All the data to be presented as part of the
   * specified point, requires MatrixTile base
   * @param {Array.<module:matrix/objects.MatrixRow>} [y=[]] - Additional data to append to the MatrixRow
   * @param {Array.<module:matrix/objects.MatrixLayer>} [z=[]] - Additional data to append to the MatrixLayer
   * @param {Array.<module:matrix/objects.Matrix>} [matrixProps=[]] - Additional data to append to the Matrix
   * @param {number} size - Used to define height, width, and depth as equal values
   * @returns {module:matrix/objects.Matrix}
   */
  matrixObjects.cube = ({ x = [], y = [], z = [], matrixProps = [] } = {}, size) => matrixObjects.matrix(
    { coordinate: size, props: x },
    { coordinate: size, props: y },
    { coordinate: size, props: z },
    matrixProps
  )

  /**
   * Either export all functions to be exported, or assign to the Window context
   */
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = matrixObjects
    }
    exports = Object.assign(exports, matrixObjects)
  }
}).call(this || window || {})
// Use the external context to assign this, which will be Window if rendered via browser

/**
 * @file All of the core matrix functions for working with a grid of points.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */
;(function () {
  /**
   * Store a reference to this scope which will be Window if rendered via browser
   */
  const root = this || {}

  /**
   * Store reference to any pre-existing module of the same name
   * @type {module|*}
   */
  const previousJDomMatrixCore = root.matrixCore || {}

  /**
   * All methods exported from this module are encapsulated within matrixCore.
   * @author Joshua Heagle <joshuaheagle@gmail.com>
   * @typedef {Object} matrixCore
   * @module matrix/core
   */
  const matrixCore = {}
  root.matrixCore = matrixCore

  /**
   * Return a reference to this library while preserving the original same-named library
   * @function noConflict
   * @returns {matrixCore}
   */
  matrixCore.noConflict = () => {
    root.matrixCore = previousJDomMatrixCore
    return matrixCore
  }

  /**
   * Verify availability of matrixObjects
   * @typedef {*|module:core/core} core
   */
  let core = root.core

  /**
   * If core remains undefined, attempt to retrieve it as a module
   */
  if (typeof core === 'undefined') {
    if (typeof require !== 'undefined') {
      core = require('../core/core.js')
    } else {
      console.error('matrix/core requires core/core')
    }
  }

  /**
   * Verify availability of matrixObjects
   * @typedef {*|module:matrix/objects} matrixObjects
   */
  let matrixObjects = root.matrixObjects

  /**
   * If coreDom remains undefined, attempt to retrieve it as a module
   */
  if (typeof matrixObjects === 'undefined') {
    if (typeof require !== 'undefined') {
      matrixObjects = require('./objects.js')
    } else {
      console.error('matrix/core requires matrix/objects')
    }
  }

  /**
   * Generate point data for each item in the matrix
   * WARNING: This is a recursive function.
   * @function bindPointData
   * @param {module:matrix/objects.MatrixColumn|module:matrix/objects.MatrixRow} item - A special DomItem
   * which is either a layer, row, or column in a matrix.
   * @param {module:matrix/objects.Point} pnt - A point to be added to a specific Matrix Column
   * @returns {module:matrix/objects.MatrixColumn|module:matrix/objects.MatrixRow}
   */
  matrixCore.bindPointData = (item, pnt = matrixObjects.point(0, 0, 0)) => core.mergeObjects(
    item,
    item.point ? { point: core.cloneObject(pnt) } : {
      children: item.children.map(
        (el, i) => matrixCore.bindPointData(el, Object.assign(pnt, { [el.axis]: i }))
      )
    }
  )

  /**
   * Based on provided point and point direction generate next point.
   * @function nextCell
   * @param {module:matrix/objects.Point} pnt - Provide the current / initial point
   * @param {module:matrix/objects.Direction} dir - Provide the direction to be applied to find the next point
   * @returns {module:matrix/objects.Point}
   */
  matrixCore.nextCell = (pnt, dir) => matrixObjects.point(pnt.x + dir.x, pnt.y + dir.y, pnt.z + dir.z)

  /**
   * Based on provided point and another point, get a point with the difference between each axis
   * @function pointDifference
   * @param {module:matrix/objects.Point} start - The first point to compare
   * @param {module:matrix/objects.Point} end - The other point to be compared
   * @returns {module:matrix/objects.Point}
   */
  matrixCore.pointDifference = (start, end) => matrixObjects.point(
    end.x - start.x,
    end.y - start.y,
    end.z - start.z
  )

  /**
   * Given two points, compare the x, y, and z of each to see if they are the same
   * @function areEqualPoints
   * @param {module:matrix/objects.Point} p1 - The first point to compare
   * @param {module:matrix/objects.Point} p2 - The other point to be compared
   * @returns {boolean}
   */
  matrixCore.areEqualPoints = (p1, p2) => p1.x === p2.x && p1.y === p2.y && p1.z === p2.z

  /**
   * Return the first coordinate number with the highest absolute value.
   * @function getHighestAbsoluteCoordinate
   * @param {module:matrix/objects.Point} pnt - A Point to be assessed.
   * @returns {module:matrix/objects.coordinate}
   */
  matrixCore.getHighestAbsoluteCoordinate = pnt => core.reduceObject(pnt, core.getAbsoluteMax, 0)

  /**
   * Having provided a coordinate number, find all corresponding axis, return the first match.
   * @function getFirstAxisOfCoordinate
   * @param {module:matrix/objects.Point} pnt - The Point containing a matching coordinate.
   * @param {module:matrix/objects.coordinate} coordinate - The coordinate to search for.
   * @returns {false|module:matrix/objects.axis}
   */
  matrixCore.getFirstAxisOfCoordinate = (pnt, coordinate) => Object.keys(pnt).filter(
    (key) => pnt[key] === coordinate
  )[0] || false

  /**
   * Given a point and the value of the highest coordinate select the corresponding axis which will be the direction
   * (-1 or 1) to and set the other axis to 0.
   * @param {module:matrix/objects.Point} pnt - The which will be converted to a direction.
   * @param {module:matrix/objects.coordinate} highestCoordinate - The highest coordinate provided by the point.
   * @returns {module:matrix/objects.Direction}
   */
  const pointAndCoordinateToDirection = (pnt, highestCoordinate) => (
    axis => axis !== false
      ? core.mergeObjects(matrixObjects.point(0, 0, 0), { [`${axis}`]: highestCoordinate > 0 ? 1 : -1 })
      : matrixObjects.point(0, 0, 0)
  )(matrixCore.getFirstAxisOfCoordinate(pnt, highestCoordinate))

  /**
   * Having a point, convert it to a direction where the axis with the highest coordinate value will be set to -1 or 1.
   * @param {module:matrix/objects.Point} pnt - The point to be converted to a direction.
   * @returns {module:matrix/objects.Direction}
   */
  const pointToDirection = pnt => pointAndCoordinateToDirection(pnt, matrixCore.getHighestAbsoluteCoordinate(pnt))

  /**
   * Retrieve a directional coordinate value based on two provided points
   * (directions consist of two zero coordinates and a single coordinate of 1 / -1)
   * @function pointsToDirection
   * @param {module:matrix/objects.Point} start - The first point to assess.
   * @param {module:matrix/objects.Point} end - The other point to assess.
   * @returns {module:matrix/objects.Direction}
   */
  matrixCore.pointsToDirection = (start, end) => pointToDirection(matrixCore.pointDifference(start, end))

  /**
   * Generate a random starting point for a line with the provided length and direction.
   * @function randomStart
   * @param {number} length - The intended length the resulting line.
   * @param {module:matrix/objects.Direction} dir - The direction the line will extend towards.
   * @param {module:matrix/objects.Point} [lengthLimits={x: 10, y: 10, z: 10}] - The maximum grid size.
   * @returns {module:matrix/objects.Point}
   */
  matrixCore.randomStart = (
    length,
    dir,
    lengthLimits = matrixObjects.point(10, 10, 10)
  ) => matrixObjects.point(
    core.randomInteger(lengthLimits.x - ((length - 1) * dir.x)),
    core.randomInteger(lengthLimits.y - ((length - 1) * dir.y)),
    core.randomInteger(lengthLimits.z - ((length - 1) * dir.z))
  )

  /**
   * Given a start point, line length, and a direction, generate the end point of the line.
   * @function lineEndPoint
   * @param {module:matrix/objects.Point} start - The selected starting point.
   * @param {number} length - The total length of the line.
   * @param {module:matrix/objects.Direction} dir - The direction of the line.
   * @returns {module:matrix/objects.Point}
   */
  matrixCore.lineEndPoint = (start, length, dir) => matrixObjects.point(
    start.x + dir.x * (length - 1),
    start.y + dir.y * (length - 1),
    start.z + dir.z * (length - 1)
  )

  /**
   * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
   * includes 'start' (line[0]) and 'end' (line[line.length-1])
   * @function getPointsLine
   * @param {module:matrix/objects.Point} start - The starting location of the line.
   * @param {module:matrix/objects.Point} end - The final line destination.
   * @param {Array.<module:matrix/objects.Point>} [line=[]] - The resulting line to connect start and end.
   * @returns {Array.<module:matrix/objects.Point>}
   */
  matrixCore.getPointsLine = (start, end, line = []) => matrixCore.areEqualPoints(start, end)
    ? line.concat([start])
    : matrixCore.getPointsLine(
      matrixCore.nextCell(start, matrixCore.pointsToDirection(start, end)),
      end,
      line.concat([start])
    )

  /**
   * Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
   * array of all points captured for each line segment
   * @function getPointsLines
   * @param {Array.<Array.<module:matrix/objects.Point>>} lines - An array of lines only containing start and end.
   * @returns {Array.<Array.<module:matrix/objects.Point>>}
   */
  matrixCore.getPointsLines = lines => lines.reduce(
    (pointsArray, line) => pointsArray.concat(matrixCore.getPointsLine(...line)),
    []
  )

  /**
   * Function that produces a property of the new Object, taking three arguments
   * @callback module:matrix/core~testPointStatus
   * @param {module:matrix/objects.MatrixColumn|Object} pnt - A point which may have some status.
   * @param {module:matrix/objects.Matrix|Object} matrix - A matrix of points to find the point within.
   * @returns {boolean}
   */

  /**
   * Given a start and end point, test the points between with the provided function. Return the points as part of true
   * and / or false properties based on the test.
   * @function module:matrix/core~testPointsBetween
   * @param {module:matrix/objects.Point} start - The beginning point to check.
   * @param {module:matrix/objects.Point} end - The terminating point to check between.
   * @param {module:matrix/objects.Matrix} matrix - The grid of points all the points can exist on.
   * @param {module:matrix/core~testPointStatus} func - The test function which will return true or false.
   * @param {boolean} [inclusive=true] - Choose whether to include or exclude the start and end points in the results.
   * @returns {Object.<string, Array.<module:matrix/objects.Point>>}
   */
  matrixCore.testPointsBetween = (start, end, matrix, func, inclusive = true) =>
    matrixCore.getPointsLine(start, end).filter(
      (prop, i, line) => ((i !== 0 && i !== line.length - 1) || inclusive)
    ).reduce(
      (newPoints, next) => core.mergeObjects(newPoints, { [`${func(next, matrix)}`]: [next] }), {
        true: [],
        false: []
      }
    )

  /**
   * Given two points, check the cells between using specified function.
   * When inclusive is set to true the provided start and end points will also be tested
   * @function checkInBetween
   * @param {...*} args - These args match the parameter list for {@link module:matrix/core~testPointsBetween}
   * @returns {boolean}
   */
  matrixCore.checkInBetween = (...args) => !!matrixCore.testPointsBetween(...args).true.length

  /**
   * Return point-like object with all of the axis lengths.
   * @function getAxisLengths
   * @param {module:matrix/objects.Matrix} matrix - The matrix to get the dimensions of.
   * @returns {module:matrix/objects.Point}
   */
  matrixCore.getAxisLengths = (matrix) => matrixObjects.point(
    matrix.children[0].children[0].children.length,
    matrix.children[0].children.length,
    matrix.children.length
  )

  /**
   * Get random direction point
   * @function randDirection
   * @param {Array.<module:matrix/objects.Point>} [useCoordinates=[]] - An array of possible directions.
   * @returns {module:matrix/objects.Direction}
   */
  matrixCore.randDirection = (useCoordinates = []) => useCoordinates.length
    ? useCoordinates[core.randomInteger(useCoordinates.length)]
    : matrixObjects.point(0, 0, 0)

  /**
   * Test if the provided point exists in the matrix.
   * @function checkValidPoint
   * @param {module:matrix/objects.Point} pnt - Provide a point to validate.
   * @param {module:matrix/objects.Matrix} matrix - The matrix that contains valid points.
   * @returns {boolean}
   */
  matrixCore.checkValidPoint = (pnt, matrix) => !!matrix.children[pnt.z] &&
    !!matrix.children[pnt.z].children[pnt.y] &&
    !!matrix.children[pnt.z].children[pnt.y].children[pnt.x] &&
    !!matrix.children[pnt.z].children[pnt.y].children[pnt.x].point

  /**
   * Retrieve the DomItem associated with the provided point
   * @function getDomItemFromPoint
   * @param {module:matrix/objects.Point} pnt - A point corresponding to a DomItem.
   * @param {module:matrix/objects.Matrix} matrix - The matrix containing the point.
   * @returns {false|module:core/dom/objects.DomItem}
   */
  matrixCore.getDomItemFromPoint = (pnt, matrix) => matrixCore.checkValidPoint(pnt, matrix)
    ? matrix.children[pnt.z].children[pnt.y].children[pnt.x]
    : false

  /**
   * Return an array of all the points in the matrix
   * @function getAllPoints
   * @param {module:matrix/objects.Matrix|module:matrix/objects.MatrixColumn} matrix - The matrix to retrieve
   * points from.
   * @param {Array.<module:matrix/objects.Point>} [allPoints=[]] - The array of points to be returned
   * @returns {Array.<module:matrix/objects.Point>}
   */
  matrixCore.getAllPoints = (matrix, allPoints = []) => (matrix.point)
    ? allPoints.concat([matrix.point])
    : matrix.children.reduce((allPoints, child) => allPoints.concat(matrixCore.getAllPoints(child, [])), [])

  /**
   * Return all valid points surrounding a provided point
   * @function adjacentPoints
   * @param {module:matrix/objects.Point} pnt - The point we want to find adjacent points for.
   * @param {module:matrix/objects.Matrix} matrix - The matrix having the point.
   * @returns {Array.<module:matrix/objects.Point>}
   */
  matrixCore.adjacentPoints = (pnt, matrix) => matrixCore.getPointsLines([
    [matrixObjects.point(-1, 1, 1), matrixObjects.point(1, -1, -1)],
    [matrixObjects.point(1, 1, 1), matrixObjects.point(-1, 1, -1)],
    [matrixObjects.point(-1, -1, 1), matrixObjects.point(1, -1, 1)],
    [matrixObjects.point(1, 0, 0), matrixObjects.point(1, 1, -1)],
    [matrixObjects.point(-1, 1, 0), matrixObjects.point(1, 1, 0)]
  ]).concat([
    matrixObjects.point(0, 0, 1),
    matrixObjects.point(1, 0, 0),
    matrixObjects.point(-1, 0, -1),
    matrixObjects.point(0, 0, -1)
  ]).map(p => matrixCore.nextCell(pnt, p))
    .filter(p => matrixCore.checkValidPoint(matrixCore.nextCell(pnt, p), matrix))

  /**
   * Return all points which touch on edges (not diagonal)
   * @function adjacentEdgePoints
   * @param {module:matrix/objects.Point} pnt - The point we want to find adjacent points for.
   * @param {module:matrix/objects.Matrix} matrix - The matrix having the point.
   * @returns {Array.<module:matrix/objects.Point>}
   */
  matrixCore.adjacentEdgePoints = (pnt, matrix) => [
    matrixObjects.point(-1, 0, 0),
    matrixObjects.point(1, 0, 0),
    matrixObjects.point(0, -1, 0),
    matrixObjects.point(0, 1, 0),
    matrixObjects.point(0, 0, -1),
    matrixObjects.point(0, 0, 1)
  ].map(p => matrixCore.nextCell(pnt, p)).filter(p => matrixCore.checkValidPoint(p, matrix))

  /**
   * Retrieve the point associated with the provided element.
   * @function getPointFromElement
   * @param {Node|HTMLElement|module:pseudoDom/objects.PseudoHTMLElement} elem - Provide an element associated with
   * a point.
   * @returns {module:matrix/objects.Point}
   */
  matrixCore.getPointFromElement = elem => matrixObjects.point(
    Array.from(elem.parentNode.childNodes).indexOf(elem),
    Array.from(elem.parentNode.parentNode.childNodes).indexOf(elem.parentNode),
    Array.from(elem.parentNode.parentNode.parentNode.childNodes).indexOf(elem.parentNode.parentNode)
  )

  /**
   * Retrieve the DomItem associated with the provided element in the matrix
   * @function getDomItemFromElement
   * @param {Node|HTMLElement|module:pseudoDom/objects.PseudoHTMLElement} elem - Provide an element having an
   * associated DomItem.
   * @param {module:matrix/objects.Matrix} matrix - The matrix potentially containing the DomItem with Point.
   * @returns {module:core/dom/objects.DomItem}
   */
  matrixCore.getDomItemFromElement = (elem, matrix) => matrixCore.getDomItemFromPoint(
    matrixCore.getPointFromElement(elem),
    matrix
  )

  /**
   * Either export all functions to be exported, or assign to the Window context
   */
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = matrixCore
    }
    exports = Object.assign(exports, matrixCore)
  }
}).call(this || window || {}) // Use the external context to assign this, which will be Window if rendered via browser

;(function () {
  /**
   * Store a reference to this scope which will be Window if rendered via browser
   */
  const root = this || {}

  /*
   * Store reference to any pre-existing module of the same name
   * @type {jsonDom|*}
   */
  const previousJsonDom = root.jsonDom || {}

  /**
   * A reference to all functions to be used globally / exported
   * @typedef (Object) jsonDom
   */
  const jsonDom = {}
  root.jsonDom = jsonDom

  /**
   * Return a reference to this library while preserving the original same-named library
   * @function noConflict
   * @returns {jsonDom}
   */
  jsonDom.noConflict = () => {
    root.jsonDom = previousJsonDom
    return jsonDom
  }

  /**
   * Verify availability of core
   * @typedef {*|module:core/core} core
   */
  jsonDom.core = root.core

  /**
   * Verify availability of objects
   * @typedef {*|module:core/dom/objects} domObjects
   */
  jsonDom.domObjects = root.domObjects

  /**
   * Verify availability of coreDom
   * @typedef {*|module:core/dom/core} domCore
   */
  jsonDom.domCore = root.domCore

  /**
   * Verify availability of objects
   * @typedef {*|module:matrix/objects} matrixObjects
   */
  jsonDom.matrixObjects = root.matrixObjects

  /**
   * Verify availability of coreDom
   * @typedef {*|module:matrix/core} matrixCore
   */
  jsonDom.matrixCore = root.matrixCore

  /**
   * Create new private reference to the document
   * @typedef {module:core/dom/objects.documentItem} documentItem
   */
  jsonDom.documentItem = jsonDom.domObjects.documentDomItem()
}).call(this || window || {}) // Use the external context to assign this, which will be Window if rendered via browser
