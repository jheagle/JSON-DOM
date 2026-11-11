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
const domItemToJson_1 = __importDefault(require("./domItemToJson"));
const removeEmptyProperties_1 = __importDefault(require("./removeEmptyProperties"));
exports.default = {
  domItemToJson: domItemToJson_1.default,
  removeEmptyProperties: removeEmptyProperties_1.default
};