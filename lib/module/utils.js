export const compareNumbers = (a, b) => {
  return a - b;
};
export const notNull = value => {
  return value !== null;
};
export const parsePosition = value => {
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

const _getKeyframeStyles = (definition, position) => {
  if (definition[position] != null) return definition[position];
  if (position === 0 && definition.from != null) return definition.from;
  if (position === 1 && definition.to != null) return definition.to;
  return null;
};

export const getKeyframeStyles = definition => position => {
  const keyframe = _getKeyframeStyles(definition, position);

  if (keyframe != null) return keyframe;
  throw new Error('Missing animation keyframe, this should not happen');
};
export const getKeyframeStylesProperties = keyframeStyles => {
  return Object.keys(keyframeStyles);
};
export const getKeyframesStylesProperties = keyframesStyles => {
  return [...new Set(keyframesStyles.map(getKeyframeStylesProperties).flat())];
};
//# sourceMappingURL=utils.js.map