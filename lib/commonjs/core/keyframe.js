"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStylesProperties = exports.getStyles = exports.getSequenceItems = void 0;

const _getStyles = (definition, position) => {
  if (definition == null) {
    return null;
  }

  if (definition[position] != null) return definition[position];
  if (position === 0 && definition.from != null) return definition.from;
  if (position === 1 && definition.to != null) return definition.to;
  return null;
};

const _getStylesProperties = keyframeStyles => {
  return Object.keys(keyframeStyles);
};

const _getPropertyPreviousKeyframe = (definition, property, currentKeyframeIndex, keyframes) => {
  for (let i = currentKeyframeIndex - 1; i > 0; i--) {
    const keyframe = keyframes[i];

    const styles = _getStyles(definition, keyframe);

    if ((styles === null || styles === void 0 ? void 0 : styles[property]) != null) {
      return keyframe;
    }
  }

  return 0;
};

const getStyles = definition => position => {
  const keyframe = _getStyles(definition, position);

  if (keyframe != null) return keyframe;
  throw new Error('Missing animation keyframe, this should not happen');
};

exports.getStyles = getStyles;

const getStylesProperties = keyframesStyles => {
  return [...new Set(keyframesStyles.map(_getStylesProperties).flat())];
};

exports.getStylesProperties = getStylesProperties;

const getSequenceItems = (definition, keyframeIndex, keyFrames) => {
  const keyframe = keyFrames[keyframeIndex];
  const keyframeStyles = getStyles(definition)(keyframe);

  const properties = _getStylesProperties(keyframeStyles);

  return properties.reduce((acc, property) => {
    const previousKeyframe = _getPropertyPreviousKeyframe(definition, property, keyframeIndex, keyFrames);

    return { ...acc,
      [property]: {
        value: keyframeStyles[property],
        type: 'timing',
        duration: keyframe - previousKeyframe
      }
    };
  }, {});
};

exports.getSequenceItems = getSequenceItems;
//# sourceMappingURL=keyframe.js.map