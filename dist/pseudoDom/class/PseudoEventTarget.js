'use strict'

require('core-js/modules/es.symbol')

require('core-js/modules/es.symbol.description')

require('core-js/modules/es.symbol.iterator')

require('core-js/modules/es.array.concat')

require('core-js/modules/es.array.for-each')

require('core-js/modules/es.array.iterator')

require('core-js/modules/es.array.reduce')

require('core-js/modules/es.array.splice')

require('core-js/modules/es.object.assign')

require('core-js/modules/es.object.keys')

require('core-js/modules/es.object.to-string')

require('core-js/modules/es.string.iterator')

require('core-js/modules/web.dom-collections.for-each')

require('core-js/modules/web.dom-collections.iterator')

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
