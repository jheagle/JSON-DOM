/**
 * Create the default listeners for common events.
 * @return {{}}
 */
const commonEvents = () => {
  const events = [
    'animationcancel',
    'animationend',
    'animationiteration',
    'animationstart',
    'auxclick',
    'beforeinput',
    'blur',
    'click',
    'compositionend',
    'compositionstart',
    'compositionupdate',
    'contentvisibilityautostatechange',
    'contextmenu',
    'copy',
    'cut',
    'dblclick',
    'focus',
    'focusin',
    'focusout',
    'fullscreenchange',
    'fullscreenerror',
    'gotpointercapture',
    'input',
    'keydown',
    'keyup',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'paste',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointermove',
    'pointerout',
    'pointerover',
    'pointerup',
    'scroll',
    'scrollend',
    'securitypolicyviolation',
    'touchcancel',
    'touchend',
    'touchmove',
    'touchstart',
    'transitioncancel',
    'transitionend',
    'transitionrun',
    'transitionstart',
    'wheel'
  ]
  const defaultListeners = {}
  for (let event of events) {
    defaultListeners[event] = () => {}
  }
  return defaultListeners
}

export default commonEvents
