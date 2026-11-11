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
const definitions_1 = __importDefault(require("./definitions"));
/**
 * The properties an item has only because of its traits, and which do not belong in json (the element of the render
 * trait, for one).
 * @param item - The item to look at.
 * @private
 */
const getNonSerializableKeys = item => Object.keys(item.has ?? {}).flatMap(trait => {
  const definition = definitions_1.default.get(trait);
  return definition && definition.serializable === false ? definition.keys : [];
});
exports.default = getNonSerializableKeys;