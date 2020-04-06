"use strict";function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}(function(){var e=this||{},t=e.jDomCore||{},n={};e.jDomCore=n,n.noConflict=function(){return e.jDomCore=t,n};var r=e.document;void 0===r&&("undefined"!=typeof require?(e=require("../pseudoDom/objects.js").generate(e),r=e.document):console.error("dom//core requires pseudoDom/objects"));var i=e.functionalHelpers;void 0===i&&("undefined"!=typeof require?i=require("functional-helpers"):console.error("dom//core requires functional-helpers"));var o=e.jDomObjects;void 0===o&&("undefined"!=typeof require?o=require("./objects.js"):console.error("dom//core requires dom//objects")),n.elementHasAttribute=function(e,t,n){return!!e.style&&(/^(style|className)$/.test(t)?i.compareArrays("string"==typeof n?n.split(" "):Object.keys(n),"string"==typeof n?e[t].split(" "):Object.keys(e[t])):e.hasAttribute(t)&&e.getAttribute(t)===n)},n.elementCompareClassList=function(e,t){return i.compareArrays(t.split(" "),[].from(e.classList))},n.elementChanges=function(e){return e.element.tagName.toLowerCase()!==e.tagName.toLowerCase()?n.generateElement(e):i.setValue("attributes",i.filterObject(e.attributes,(function(t,r){return i.filterObject(i.mapObject(e.attributes,(function(t,r){return"object"===_typeof(t)||"className"===r?i.filterObject(n.elementHasAttribute(e.element,r,t),(function(e){return 1===e})):!n.elementHasAttribute(e.element,r,t)})),(function(e){return!!e}))[r]})),e)},n.setAttribute=function(e,t,n){return e.element.setAttribute(t,n),e},n.setAndReturnAttribute=function(e,t,n){return e.element.setAttribute(t,n),n},n.updateElement=function(e){return e.element.style?i.setValue("attributes",i.mapObject(n.elementChanges(e).attributes,(function(t,r){return i.notEmptyObjectOrArray(t)?i.mapObject(i.filterObject(t,(function(e,t){return/^\D+$/.test(t)})),(function(t,n){return i.setAndReturnValue(e.element.style,n,t)}),e.element.style):r in e.element?i.setAndReturnValue(e.element,r,t):n.setAndReturnAttribute(e,r,t)})),e):e},n.updateElements=function(e){return i.mapProperty("children",(function(e){return n.updateElements(e)}),n.updateElement(e))},n.generateElement=function(e){return n.updateElement(i.setValue("element",r.createElement(e.tagName),e))},n.bindElement=function(e){return i.setValue("element",e.element&&e.element.style?e.element:n.generateElement(e).element,e)};var u=function(e){return e.body?e.body:e},s=function(e,t){return i.inArray(t,e)?t:t.concat([e])},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.documentItem.body;return u(t).element.appendChild(e.element),e};n.appendHTML=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.documentItem.body;return c(n.bindElement(e),i.setValue("children",s(e,u(t).children),u(t)))},n.removeChild=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.documentItem.body;return t.element.removeChild(e.element),t.children.splice(t.children.indexOf(e),1)},n.registerListener=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.name,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.documentItem;return Object.assign(n.eventListeners,_defineProperty({},t,e))},n.registerListeners=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.documentItem;return i.mergeObjects(t,{eventListeners:t.eventListeners},{eventListeners:e})},n.retrieveListener=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.documentItem;return i.inArray(Object.keys(t.eventListeners),e)?t.eventListeners[e]:{}};n.assignListener=function(e,t,n,r){return t.addEventListener?t.addEventListener(e,n,function e(t){if(void 0===e.supportsOptions){e.supportsOptions=!0;try{window.addEventListener("test",null,{capture:!1,once:!1,passive:!1})}catch(t){e.supportsOptions=!1}}return!("object"!==_typeof(t)||!e.supportsOptions)&&t}(r)):t.attachEvent?t.attachEvent("on".concat(e),n):t["on".concat(e)]=n,n},n.appendListeners=function(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return i.mapProperty("children",(function(e){return n.appendListeners(e,t,r,o,u)}),i.setValue("eventListeners",i.setValue(t,{listenerFunc:r,listenerArgs:o,listenerOptions:u},e.eventListeners),e))};n.bindListeners=function(e){return e.eventListeners&&Object.keys(e.eventListeners).length&&e.element.style?function(e){return i.mapProperty("eventListeners",(function(t,r){return n.assignListener(r,e.element,(function(n){return t.listenerFunc(n,e,t.listenerArgs)}),t.listenerOptions)}),e)}(e):e},n.bindAllListeners=function(e){return i.mapProperty("children",(function(e){return n.bindAllListeners(e)}),n.bindListeners(e))},n.gatherChildItems=function(e,t){return t(e,e.children.reduce((function(e,r){return e.concat(n.gatherChildItems(r,t))}),[]))};var a=function(e,t){return function(n,r){return n.attributes[e]&&n.attributes[e]===t?r.concat([n]):r}};n.getChildrenFromAttribute=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.documentItem.body;return n.gatherChildItems(r,a(e,t))},n.getChildrenByClass=i.curry(n.getChildrenFromAttribute)("className"),n.getChildrenByName=i.curry(n.getChildrenFromAttribute)("name"),n.getParentsFromAttribute=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.documentItem.body;return Object.keys(r.parentItem).length?(r.parentItem.attributes[e]||r[e]||!1)===t?n.getParentsFromAttribute(e,t,r.parentItem).concat([r.parentItem]):n.getParentsFromAttribute(e,t,r.parentItem):[]},n.getParentsByClass=i.curry(n.getParentsFromAttribute)("className"),n.getParentsByName=i.curry(n.getParentsFromAttribute)("name"),n.getParentsByTagName=i.curry(n.getParentsFromAttribute)("tagName"),n.getTopParentItem=function(e){return Object.keys(e.parentItem).length?n.getTopParentItem(e.parentItem):e},n.renderHTML=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.documentItem;return i.pipe((function(e){return i.setValue("element",e.element&&e.element.style?e.element:n.bindElement(e).element,e)}),(function(e){return i.setValue("eventListeners",i.mapObject(e.eventListeners,(function(e){return i.mergeObjects(e,{listenerFunc:n.retrieveListener(e.listenerFunc,n.getTopParentItem(t))})})),e)}),i.curry(i.setValue)("parentItem",t.body||t),(function(e){return n.bindListeners(n.appendHTML(e,t))}),(function(e){return i.mapProperty("children",(function(t){return n.renderHTML(t,e)}),e)}))(i.mapObject(o.createDomItem(e),(function(e){return e}),e))},"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=n),exports=Object.assign(exports,n))}).call(window||{});