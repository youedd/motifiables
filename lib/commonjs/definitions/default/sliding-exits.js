"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideOutUp = exports.slideOutRight = exports.slideOutLeft = exports.slideOutDown = void 0;

function makeSlideOutTranslation(translationType, fromValue) {
  return {
    from: {
      [translationType]: 0
    },
    to: {
      [translationType]: fromValue
    }
  };
}

const slideOutDown = makeSlideOutTranslation('translateY', 100);
exports.slideOutDown = slideOutDown;
const slideOutUp = makeSlideOutTranslation('translateY', -100);
exports.slideOutUp = slideOutUp;
const slideOutLeft = makeSlideOutTranslation('translateX', -100);
exports.slideOutLeft = slideOutLeft;
const slideOutRight = makeSlideOutTranslation('translateX', 100);
exports.slideOutRight = slideOutRight;
//# sourceMappingURL=sliding-exits.js.map