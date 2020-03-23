"use strict";function _toConsumableArray(n){return _arrayWithoutHoles(n)||_iterableToArray(n)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function _arrayWithoutHoles(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}function _defineProperty(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}(function(){var n=this||{},e=n.jDomMatrixCore||{},t={};n.jDomMatrixCore=t,t.noConflict=function(){return n.jDomMatrixCore=e,t};var r=n.jDomCore;void 0===r&&("undefined"!=typeof require?r=require("../core/core.js"):console.error("matrix/core requires core/core"));var o=n.jDomMatrixObjects;void 0===o&&("undefined"!=typeof require?o=require("./objects.js"):console.error("matrix/core requires matrix/objects")),t.bindPointData=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.point(0,0,0);return r.mergeObjects(n,n.point?{point:r.cloneObject(e)}:{children:n.children.map((function(n,r){return t.bindPointData(n,Object.assign(e,_defineProperty({},n.axis,r)))}))})},t.nextCell=function(n,e){return o.point(n.x+e.x,n.y+e.y,n.z+e.z)},t.pointDifference=function(n,e){return o.point(e.x-n.x,e.y-n.y,e.z-n.z)},t.areEqualPoints=function(n,e){return n.x===e.x&&n.y===e.y&&n.z===e.z},t.getHighestAbsoluteCoordinate=function(n){return r.reduceObject(n,r.getAbsoluteMax,0)},t.getFirstAxisOfCoordinate=function(n,e){return Object.keys(n).filter((function(t){return n[t]===e}))[0]||!1};var i=function(n){return function(n,e){return!1!==(i=t.getFirstAxisOfCoordinate(n,e))?r.mergeObjects(o.point(0,0,0),_defineProperty({},"".concat(i),e>0?1:-1)):o.point(0,0,0);var i}(n,t.getHighestAbsoluteCoordinate(n))};t.pointsToDirection=function(n,e){return i(t.pointDifference(n,e))},t.randomStart=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.point(10,10,10);return o.point(r.randomInteger(t.x-(n-1)*e.x),r.randomInteger(t.y-(n-1)*e.y),r.randomInteger(t.z-(n-1)*e.z))},t.lineEndPoint=function(n,e,t){return o.point(n.x+t.x*(e-1),n.y+t.y*(e-1),n.z+t.z*(e-1))},t.getPointsLine=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t.areEqualPoints(n,e)?r.concat([n]):t.getPointsLine(t.nextCell(n,t.pointsToDirection(n,e)),e,r.concat([n]))},t.getPointsLines=function(n){return n.reduce((function(n,e){return n.concat(t.getPointsLine.apply(t,_toConsumableArray(e)))}),[])},t.testPointsBetween=function(n,e,o,i){var c=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return t.getPointsLine(n,e).filter((function(n,e,t){return 0!==e&&e!==t.length-1||c})).reduce((function(n,e){return r.mergeObjects(n,_defineProperty({},"".concat(i(e,o)),[e]))}),{true:[],false:[]})},t.checkInBetween=function(){return!!t.testPointsBetween.apply(t,arguments).true.length},t.getAxisLengths=function(n){return o.point(n.children[0].children[0].children.length,n.children[0].children.length,n.children.length)},t.randDirection=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.length?n[r.randomInteger(n.length)]:o.point(0,0,0)},t.checkValidPoint=function(n,e){return!!(e.children[n.z]&&e.children[n.z].children[n.y]&&e.children[n.z].children[n.y].children[n.x]&&e.children[n.z].children[n.y].children[n.x].point)},t.getDomItemFromPoint=function(n,e){return!!t.checkValidPoint(n,e)&&e.children[n.z].children[n.y].children[n.x]},t.getAllPoints=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.point?e.concat([n.point]):n.children.reduce((function(n,e){return n.concat(t.getAllPoints(e,[]))}),[])},t.adjacentPoints=function(n,e){return t.getPointsLines([[o.point(-1,1,1),o.point(1,-1,-1)],[o.point(1,1,1),o.point(-1,1,-1)],[o.point(-1,-1,1),o.point(1,-1,1)],[o.point(1,0,0),o.point(1,1,-1)],[o.point(-1,1,0),o.point(1,1,0)]]).concat([o.point(0,0,1),o.point(1,0,0),o.point(-1,0,-1),o.point(0,0,-1)]).map((function(e){return t.nextCell(n,e)})).filter((function(r){return t.checkValidPoint(t.nextCell(n,r),e)}))},t.adjacentEdgePoints=function(n,e){return[o.point(-1,0,0),o.point(1,0,0),o.point(0,-1,0),o.point(0,1,0),o.point(0,0,-1),o.point(0,0,1)].map((function(e){return t.nextCell(n,e)})).filter((function(n){return t.checkValidPoint(n,e)}))},t.getPointFromElement=function(n){return o.point(Array.from(n.parentNode.childNodes).indexOf(n),Array.from(n.parentNode.parentNode.childNodes).indexOf(n.parentNode),Array.from(n.parentNode.parentNode.parentNode.childNodes).indexOf(n.parentNode.parentNode))},t.getDomItemFromElement=function(n,e){return t.getDomItemFromPoint(t.getPointFromElement(n),e)},"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=t),exports=Object.assign(exports,t))}).call(window||{});