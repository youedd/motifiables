"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flipOutY = exports.flipOutX = exports.flipInY = exports.flipInX = void 0;

var _reactNativeReanimated = require("react-native-reanimated");

const flipInX = {
  easing: _reactNativeReanimated.Easing.in(_reactNativeReanimated.Easing.ease),
  style: {
    backfaceVisibility: 'visible',
    transform: [{
      perspective: 400
    }]
  },
  0: {
    opacity: 0,
    rotateX: '90deg'
  },
  0.4: {
    rotateX: '-20deg'
  },
  0.6: {
    opacity: 1,
    rotateX: '10deg'
  },
  0.8: {
    rotateX: '-5deg'
  },
  1: {
    opacity: 1,
    rotateX: '0deg'
  }
};
exports.flipInX = flipInX;
const flipInY = {
  easing: _reactNativeReanimated.Easing.in(_reactNativeReanimated.Easing.ease),
  style: {
    backfaceVisibility: 'visible',
    transform: [{
      perspective: 400
    }]
  },
  0: {
    opacity: 0,
    rotateY: '90deg'
  },
  0.4: {
    rotateY: '-20deg'
  },
  0.6: {
    opacity: 1,
    rotateY: '10deg'
  },
  0.8: {
    rotateY: '-5deg'
  },
  1: {
    opacity: 1,
    rotateY: '0deg'
  }
};
exports.flipInY = flipInY;
const flipOutX = {
  style: {
    backfaceVisibility: 'visible',
    transform: [{
      perspective: 400
    }]
  },
  0: {
    opacity: 1,
    rotateX: '0deg'
  },
  0.3: {
    opacity: 1,
    rotateX: '-20deg'
  },
  1: {
    opacity: 0,
    rotateX: '90deg'
  }
};
exports.flipOutX = flipOutX;
const flipOutY = {
  style: {
    backfaceVisibility: 'visible',
    transform: [{
      perspective: 400
    }]
  },
  0: {
    opacity: 1,
    rotateY: '0deg'
  },
  0.3: {
    opacity: 1,
    rotateY: '-20deg'
  },
  1: {
    opacity: 0,
    rotateY: '90deg'
  }
};
exports.flipOutY = flipOutY;
//# sourceMappingURL=flippers.js.map