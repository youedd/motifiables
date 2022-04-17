"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zoomInUp = exports.zoomInRight = exports.zoomInLeft = exports.zoomInDown = exports.zoomIn = void 0;

var _reactNativeReanimated = require("react-native-reanimated");

function makeZoomInTranslation(translationType, pivotPoint) {
  const modifier = Math.min(1, Math.max(-1, pivotPoint));
  return {
    easing: _reactNativeReanimated.Easing.bezier(0.175, 0.885, 0.32, 1),
    0: {
      opacity: 0,
      scale: 0.1,
      [translationType]: modifier * -1000
    },
    0.6: {
      opacity: 1,
      scale: 0.457,
      [translationType]: pivotPoint
    },
    1: {
      scale: 1,
      [translationType]: 0
    }
  };
}

const zoomIn = {
  from: {
    opacity: 0,
    scale: 0.3
  },
  0.5: {
    opacity: 1
  },
  to: {
    opacity: 1,
    scale: 1
  }
};
exports.zoomIn = zoomIn;
const zoomInDown = makeZoomInTranslation('translateY', 60);
exports.zoomInDown = zoomInDown;
const zoomInUp = makeZoomInTranslation('translateY', -60);
exports.zoomInUp = zoomInUp;
const zoomInLeft = makeZoomInTranslation('translateX', 10);
exports.zoomInLeft = zoomInLeft;
const zoomInRight = makeZoomInTranslation('translateX', -10);
exports.zoomInRight = zoomInRight;
//# sourceMappingURL=zooming-entrances.js.map