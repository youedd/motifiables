"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeInUpBig = exports.fadeInUp = exports.fadeInRightBig = exports.fadeInRight = exports.fadeInLeftBig = exports.fadeInLeft = exports.fadeInDownBig = exports.fadeInDown = exports.fadeIn = void 0;

function makeFadeInTranslation(translationType, fromValue) {
  return {
    from: {
      opacity: 0,
      [translationType]: fromValue
    },
    to: {
      opacity: 1,
      [translationType]: 0
    }
  };
}

const fadeIn = {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
};
exports.fadeIn = fadeIn;
const fadeInDown = makeFadeInTranslation('translateY', -100);
exports.fadeInDown = fadeInDown;
const fadeInUp = makeFadeInTranslation('translateY', 100);
exports.fadeInUp = fadeInUp;
const fadeInLeft = makeFadeInTranslation('translateX', -100);
exports.fadeInLeft = fadeInLeft;
const fadeInRight = makeFadeInTranslation('translateX', 100);
exports.fadeInRight = fadeInRight;
const fadeInDownBig = makeFadeInTranslation('translateY', -500);
exports.fadeInDownBig = fadeInDownBig;
const fadeInUpBig = makeFadeInTranslation('translateY', 500);
exports.fadeInUpBig = fadeInUpBig;
const fadeInLeftBig = makeFadeInTranslation('translateX', -500);
exports.fadeInLeftBig = fadeInLeftBig;
const fadeInRightBig = makeFadeInTranslation('translateX', 500);
exports.fadeInRightBig = fadeInRightBig;
//# sourceMappingURL=fading-entrances.js.map