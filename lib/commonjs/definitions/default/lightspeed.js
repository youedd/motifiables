"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightSpeedOut = exports.lightSpeedIn = void 0;

var _reactNativeReanimated = require("react-native-reanimated");

const lightSpeedIn = {
  easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease),
  0: {
    opacity: 0,
    translateX: 200,
    skewX: '-30deg'
  },
  0.6: {
    opacity: 1,
    translateX: 0,
    skewX: '20deg'
  },
  0.8: {
    skewX: '-5deg'
  },
  1: {
    opacity: 1,
    translateX: 0,
    skewX: '0deg'
  }
};
exports.lightSpeedIn = lightSpeedIn;
const lightSpeedOut = {
  easing: _reactNativeReanimated.Easing.in(_reactNativeReanimated.Easing.ease),
  0: {
    opacity: 1,
    translateX: 0,
    skewX: '0deg'
  },
  1: {
    opacity: 0,
    translateX: 200,
    skewX: '30deg'
  }
};
exports.lightSpeedOut = lightSpeedOut;
//# sourceMappingURL=lightspeed.js.map