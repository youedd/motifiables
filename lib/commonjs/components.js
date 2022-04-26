"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MotifiableText = exports.MotifiableFlatScrollView = exports.Motifiable = void 0;

var _reactNative = require("react-native");

var _createMotifiable = require("./createMotifiable");

const Motifiable = (0, _createMotifiable.createMotifiable)(_reactNative.View);
exports.Motifiable = Motifiable;
const MotifiableText = (0, _createMotifiable.createMotifiable)(_reactNative.Text);
exports.MotifiableText = MotifiableText;
const MotifiableFlatScrollView = (0, _createMotifiable.createMotifiable)(_reactNative.ScrollView);
exports.MotifiableFlatScrollView = MotifiableFlatScrollView;
//# sourceMappingURL=components.js.map