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
 * The render-only subset of treeloom: build and sync a Virtual DOM (DomItem tree) to the real
 * HTML DOM, and forward fired events elsewhere (see events/objects/setForwardEvents) instead of
 * running local business logic - a consumer that never needs to run that logic locally never
 * needs to go the other way (DOM back to JSON) either, so this excludes deflate, the one part of
 * the full build with no other internal code path depending on it.
 */
const index_1 = __importDefault(require("./events/index"));
const index_2 = __importDefault(require("./domItem/index"));
const index_3 = __importDefault(require("./inflate/index"));
const index_4 = __importDefault(require("./render/index"));
const index_5 = __importDefault(require("./sync/index"));
const index_6 = __importDefault(require("./diff/index"));
const treeloomRenderOnly = Object.assign({}, index_1.default, index_2.default, index_3.default, index_4.default, index_5.default, index_6.default);
module.exports = treeloomRenderOnly;