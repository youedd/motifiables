import { compareNumbers, getKeyframesStylesProperties, getKeyframeStyles, getKeyframeStylesProperties, notNull, parsePosition } from './utils';
const DEFAULT_DURATION = 1000;

const getKeyframeSequenceItems = (definition, keyframe, previousKeyframe) => {
  const keyframeStyles = getKeyframeStyles(definition)(keyframe);
  const properties = getKeyframeStylesProperties(keyframeStyles);
  return properties.reduce((acc, property) => {
    return { ...acc,
      [property]: {
        value: keyframeStyles[property],
        type: 'timing',
        duration: keyframe - previousKeyframe
      }
    };
  }, {});
};

const compile = definition => {
  const keyframes = Object.keys(definition).map(parsePosition).filter(notNull);

  if (keyframes.length < 2) {
    throw new Error('Animation definitions must have at least two values.');
  }

  keyframes.sort(compareNumbers);
  const getDefinitionKeyframeStyles = getKeyframeStyles(definition);
  const definitionKeyframesStyles = keyframes.map(getDefinitionKeyframeStyles);
  const definitionProperties = getKeyframesStylesProperties(definitionKeyframesStyles);
  const from = getDefinitionKeyframeStyles(0);
  return config => {
    const animate = keyframes.filter(keyframe => keyframe !== 0).map((keyframe, i, filtredKeyframes) => {
      var _filtredKeyframes;

      return getKeyframeSequenceItems(definition, keyframe, (_filtredKeyframes = filtredKeyframes[i - 1]) !== null && _filtredKeyframes !== void 0 ? _filtredKeyframes : 0);
    }).reduce((acc, keyframeSequenceItems) => {
      definitionProperties.forEach(property => {
        var _config$duration;

        const sequenceItem = keyframeSequenceItems[property];
        if (sequenceItem == null) return;
        sequenceItem.duration *= (_config$duration = config === null || config === void 0 ? void 0 : config.duration) !== null && _config$duration !== void 0 ? _config$duration : DEFAULT_DURATION;

        if (acc[property] != null) {
          acc[property] = [acc[property], sequenceItem].flat();
          return;
        }

        if ((config === null || config === void 0 ? void 0 : config.delay) != null) {
          sequenceItem.delay = config.delay;
        }

        acc[property] = sequenceItem;
      });
      return acc;
    }, {});
    const result = {
      from,
      animate,
      transition: {}
    };

    if ((config === null || config === void 0 ? void 0 : config.repeat) != null) {
      result.transition.repeat = config.repeat;
    }

    if (definition.easing != null) {
      result.transition.easing = definition.easing;
    }

    if (definition.style != null) {
      result.style = definition.style;
    }

    return result;
  };
};

const cache = new Map();
export const compileAnimation = definition => {
  const cachedBuilder = cache.get(definition);

  if (cachedBuilder != null) {
    return cachedBuilder;
  }

  const builder = compile(definition);
  cache.set(definition, builder);
  return builder;
};
//# sourceMappingURL=compile.js.map