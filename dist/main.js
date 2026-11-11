"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
/**
 * All of the JSON DOM system functions for building and syncing a Virtual DOM (DomItem tree) to the real HTML DOM.
 */
const index_1 = __importDefault(require("./events/index"));
const index_2 = __importDefault(require("./domItem/index"));
const index_3 = __importDefault(require("./inflate/index"));
const index_4 = __importDefault(require("./deflate/index"));
const index_5 = __importDefault(require("./render/index"));
const index_6 = __importDefault(require("./sync/index"));
const index_7 = __importDefault(require("./diff/index"));
const treeloom = Object.assign({}, index_1.default, index_2.default, index_3.default, index_4.default, index_5.default, index_6.default, index_7.default);
module.exports = treeloom;