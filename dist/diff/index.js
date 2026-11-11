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
const createChangeList_1 = __importDefault(require("./createChangeList"));
const domItemChanges_1 = __importDefault(require("./domItemChanges"));
const domItemHasAttribute_1 = __importDefault(require("./domItemHasAttribute"));
const elementChanges_1 = __importDefault(require("./elementChanges"));
const elementHasAttribute_1 = __importDefault(require("./elementHasAttribute"));
const getAssignedStyles_1 = __importDefault(require("./getAssignedStyles"));
exports.default = {
  createChangeList: createChangeList_1.default,
  domItemChanges: domItemChanges_1.default,
  domItemHasAttribute: domItemHasAttribute_1.default,
  elementChanges: elementChanges_1.default,
  elementHasAttribute: elementHasAttribute_1.default,
  getAssignedStyles: getAssignedStyles_1.default
};