"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePosition = exports.notNull = exports.getKeyframesStylesProperties = exports.getKeyframeStylesProperties = exports.getKeyframeStyles = exports.compareNumbers = void 0;

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

const _getKeyframeStyles = (definition, position) => {
  if (definition[position] != null) return definition[position];
  if (position === 0 && definition.from != null) return definition.from;
  if (position === 1 && definition.to != null) return definition.to;
  return null;
};

const getKeyframeStyles = definition => position => {
  const keyframe = _getKeyframeStyles(definition, position);

  if (keyframe != null) return keyframe;
  throw new Error('Missing animation keyframe, this should not happen');
};

exports.getKeyframeStyles = getKeyframeStyles;

const getKeyframeStylesProperties = keyframeStyles => {
  return Object.keys(keyframeStyles);
};

exports.getKeyframeStylesProperties = getKeyframeStylesProperties;

const getKeyframesStylesProperties = keyframesStyles => {
  return [...new Set(keyframesStyles.map(getKeyframeStylesProperties).flat())];
};

exports.getKeyframesStylesProperties = getKeyframesStylesProperties;
//# sourceMappingURL=utils.js.map