"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideInUp = exports.slideInRight = exports.slideInLeft = exports.slideInDown = void 0;

function makeSlideInTranslation(translationType, fromValue) {
  return {
    from: {
      [translationType]: fromValue
    },
    to: {
      [translationType]: 0
    }
  };
}

const slideInDown = makeSlideInTranslation('translateY', -100);
exports.slideInDown = slideInDown;
const slideInUp = makeSlideInTranslation('translateY', 100);
exports.slideInUp = slideInUp;
const slideInLeft = makeSlideInTranslation('translateX', -100);
exports.slideInLeft = slideInLeft;
const slideInRight = makeSlideInTranslation('translateX', 100);
exports.slideInRight = slideInRight;
//# sourceMappingURL=sliding-entrances.js.map