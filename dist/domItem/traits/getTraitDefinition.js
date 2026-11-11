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
 * The runtime definition of a trait, if it was defined.
 * @param name - The name of the trait.
 */
const getTraitDefinition = name => definitions_1.default.get(name);
exports.default = getTraitDefinition;