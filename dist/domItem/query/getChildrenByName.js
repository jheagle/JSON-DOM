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
const getChildrenFromAttribute_1 = __importDefault(require("./getChildrenFromAttribute"));
/**
 * Helper for getting all domGeneral.DomItems starting at parent and having specified name attribute
 * @param name - The name searched for
 * @param item - The DomItem which may have child items matching the attribute
 * criteria
 */
const getChildrenByName = si_funciona_1.default.curry(getChildrenFromAttribute_1.default)('name');
exports.default = getChildrenByName;