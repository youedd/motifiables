"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePosition = exports.notNull = exports.compareNumbers = void 0;

const compareNumbers = (a, b) => {
  return a - b;
};

exports.compareNumbers = compareNumbers;

const notNull = value => {
  return value !== null;
};

exports.notNull = notNull;

const parsePosition = value => {
  if (value === 'from') {
    return 0;
  }

  if (value === 'to') {
    return 1;
  }

  const parsed = parseFloat(value);

  if (Number.isNaN(parsed) || parsed < 0 || parsed > 1) {
    return null;
  }

  return parsed;
};

exports.parsePosition = parsePosition;
//# sourceMappingURL=utils.js.map