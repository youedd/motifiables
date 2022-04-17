"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zoomOutUp = exports.zoomOutRight = exports.zoomOutLeft = exports.zoomOutDown = exports.zoomOut = void 0;

var _reactNativeReanimated = require("react-native-reanimated");

function makeZoomOutTranslation(translationType, pivotPoint) {
  const modifier = Math.min(1, Math.max(-1, pivotPoint));
  return {
    easing: _reactNativeReanimated.Easing.bezier(0.175, 0.885, 0.32, 1),
    0: {
      opacity: 1,
      scale: 1,
      [translationType]: 0
    },
    0.4: {
      opacity: 1,
      scale: 0.457,
      [translationType]: pivotPoint
    },
    1: {
      opacity: 0,
      scale: 0.1,
      [translationType]: modifier * -1000
    }
  };
}

const zoomOut = {
  from: {
    opacity: 1,
    scale: 1
  },
  0.5: {
    opacity: 1,
    scale: 0.3
  },
  to: {
    opacity: 0,
    scale: 0
  }
};
exports.zoomOut = zoomOut;
const zoomOutDown = makeZoomOutTranslation('translateY', 60);
exports.zoomOutDown = zoomOutDown;
const zoomOutUp = makeZoomOutTranslation('translateY', -60);
exports.zoomOutUp = zoomOutUp;
const zoomOutLeft = makeZoomOutTranslation('translateX', 10);
exports.zoomOutLeft = zoomOutLeft;
const zoomOutRight = makeZoomOutTranslation('translateX', -10);
exports.zoomOutRight = zoomOutRight;
//# sourceMappingURL=zooming-exits.js.map