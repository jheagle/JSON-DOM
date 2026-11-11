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
/**
 * Be able to use Flags (Options) in a well-formed way.
 */
const getListenerOptions_1 = __importDefault(require("./options/getListenerOptions"));
const numberToOptions_1 = __importDefault(require("./options/numberToOptions"));
const optionsToNumber_1 = __importDefault(require("./options/optionsToNumber"));
exports.default = {
  getListenerOptions: getListenerOptions_1.default,
  numberToOptions: numberToOptions_1.default,
  optionsToNumber: optionsToNumber_1.default
};