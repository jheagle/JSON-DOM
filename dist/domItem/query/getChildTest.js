"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Retrieve the {@link module:domGeneral~testChildItem} function by providing an attribute and value to check.
 * @param attr - Provide the attribute name to be searched
 * @param value - The attribute value to be compared
 */
const getChildTest = (attr, value) => (item, gatheredResults) => item.attributes[attr] && item.attributes[attr] === value ? gatheredResults.concat([item]) : gatheredResults;
exports.default = getChildTest;