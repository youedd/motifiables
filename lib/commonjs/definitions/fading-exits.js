"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeOutUpBig = exports.fadeOutUp = exports.fadeOutRightBig = exports.fadeOutRight = exports.fadeOutLeftBig = exports.fadeOutLeft = exports.fadeOutDownBig = exports.fadeOutDown = exports.fadeOut = void 0;

function makeFadeOutTranslation(translationType, toValue) {
  return {
    from: {
      opacity: 1,
      [translationType]: 0
    },
    to: {
      opacity: 0,
      [translationType]: toValue
    }
  };
}

const fadeOut = {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
};
exports.fadeOut = fadeOut;
const fadeOutDown = makeFadeOutTranslation('translateY', 100);
exports.fadeOutDown = fadeOutDown;
const fadeOutUp = makeFadeOutTranslation('translateY', -100);
exports.fadeOutUp = fadeOutUp;
const fadeOutLeft = makeFadeOutTranslation('translateX', -100);
exports.fadeOutLeft = fadeOutLeft;
const fadeOutRight = makeFadeOutTranslation('translateX', 100);
exports.fadeOutRight = fadeOutRight;
const fadeOutDownBig = makeFadeOutTranslation('translateY', 500);
exports.fadeOutDownBig = fadeOutDownBig;
const fadeOutUpBig = makeFadeOutTranslation('translateY', -500);
exports.fadeOutUpBig = fadeOutUpBig;
const fadeOutLeftBig = makeFadeOutTranslation('translateX', -500);
exports.fadeOutLeftBig = fadeOutLeftBig;
const fadeOutRightBig = makeFadeOutTranslation('translateX', 500);
exports.fadeOutRightBig = fadeOutRightBig;
//# sourceMappingURL=fading-exits.js.map