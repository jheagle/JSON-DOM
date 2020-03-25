"use strict";function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r)){for(var e=0,o=new Array(r.length);e<r.length;e++)o[e]=r[e];return o}}(function(){var r=this||{},e=r.jDomMatrixObjects||{},o={};r.jDomMatrixObjects=o,o.noConflict=function(){return r.jDomMatrixObjects=e,o};var t=r.functionalHelpers;void 0===t&&("undefined"!=typeof require?t=require("../core/core.js"):console.error("objects.js requires functionalHelpers"));var a=r.jDomObjects;void 0===a&&("undefined"!=typeof require?a=require("../core/dom/objects.js"):console.error("core.js requires objects")),o.point=function(r,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return{x:r,y:e,z:o}},o.tile=function(){return{point:{}}},o.matrix=function(){var r,e,o,i,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{coordinate:0,props:[]},s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{coordinate:0,props:[]},c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{coordinate:1,props:[]},d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return(r=a).createDomItem.apply(r,[{tagName:"div",attributes:{className:"matrix"},children:t.buildArray((e=a).createDomItem.apply(e,[{axis:"z",tagName:"div",attributes:{className:"layer"},children:t.buildArray((o=a).createDomItem.apply(o,[{axis:"y",tagName:"div",attributes:{className:"row"},children:t.buildArray((i=a).createDomItem.apply(i,[{axis:"x",tagName:"div",attributes:{className:"column"}}].concat(_toConsumableArray(n.props))),n.coordinate)}].concat(_toConsumableArray(s.props))),s.coordinate)}].concat(_toConsumableArray(c.props))),c.coordinate)}].concat(_toConsumableArray(d)))},o.square=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=r.x,t=void 0===e?[]:e,a=r.y,i=void 0===a?[]:a,n=r.z,s=void 0===n?[]:n,c=r.matrixProps,d=void 0===c?[]:c,l=arguments.length>1?arguments[1]:void 0;return o.matrix({coordinate:l,props:t},{coordinate:l,props:i},{coordinate:1,props:s},d)},o.cube=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=r.x,t=void 0===e?[]:e,a=r.y,i=void 0===a?[]:a,n=r.z,s=void 0===n?[]:n,c=r.matrixProps,d=void 0===c?[]:c,l=arguments.length>1?arguments[1]:void 0;return o.matrix({coordinate:l,props:t},{coordinate:l,props:i},{coordinate:l,props:s},d)},"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=o),exports=Object.assign(exports,o))}).call(window||{});