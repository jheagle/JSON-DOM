"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const si_funciona_1 = __importDefault(require("si-funciona"));
const getParentsFromAttribute_1 = __importDefault(require("./getParentsFromAttribute"));
/**
 * Helper for getting all domGeneral.DomItems starting at child and having specified name attribute
 * @param name - The name to search for
 * @param item - The DomItem which may have parent items matching the
 * attribute criteria
 */
const getParentsByName = si_funciona_1.default.curry(getParentsFromAttribute_1.default)('name');
exports.default = getParentsByName;