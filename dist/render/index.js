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
const generateElement_1 = __importDefault(require("./generateElement"));
const renderHtml_1 = __importDefault(require("./renderHtml"));
const updateChildNodes_1 = __importDefault(require("./updateChildNodes"));
const updateElement_1 = __importDefault(require("./updateElement"));
const updateElements_1 = __importDefault(require("./updateElements"));
exports.default = {
  generateElement: generateElement_1.default,
  renderHtml: renderHtml_1.default,
  updateChildNodes: updateChildNodes_1.default,
  updateElement: updateElement_1.default,
  updateElements: updateElements_1.default
};