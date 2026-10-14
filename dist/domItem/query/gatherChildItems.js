"use strict";

require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.reduce.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
/**
 * A selector function for retrieving existing child domGeneral.DomItems from the given parent item.
 * This function will check all the children starting from and including item, and run the test function on each
 * child encountered. The return array contains children returned from the test from all levels.
 * WARNING: This is a recursive function.
 * @param item - The DomItem which may have child items matching the attribute
 * criteria
 * @param test - Assess each child, and return the ones which qualify
 */
const gatherChildItems = (item, test) => test(item, item.children.reduce((a, b) => a.concat(gatherChildItems(b, test)), []));
exports.default = gatherChildItems;