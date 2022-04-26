import * as Keyframe from './keyframe';
import { compareNumbers, notNull, parsePosition } from './utils';
const DEFAULT_DURATION = 1000;

const compile = definition => {
  const keyframes = Object.keys(definition).map(parsePosition).filter(notNull);

  if (keyframes.length < 2) {
    throw new Error('Animation definitions must have at least two values.');
  }

  keyframes.sort(compareNumbers);
  const getDefinitionKeyframeStyles = Keyframe.getStyles(definition);
  const definitionKeyframesStyles = keyframes.map(getDefinitionKeyframeStyles);
  const definitionProperties = Keyframe.getStylesProperties(definitionKeyframesStyles);
  const from = getDefinitionKeyframeStyles(0);
  return config => {
    const animate = keyframes.map((_, keyframeIndex) => Keyframe.getSequenceItems(definition, keyframeIndex, keyframes)).reduce((acc, keyframeSequenceItems) => {
      definitionProperties.forEach(property => {
        var _config$duration, _acc$property;

        const sequenceItem = keyframeSequenceItems[property];

        if (sequenceItem == null) {
          return;
        }

        sequenceItem.duration *= (_config$duration = config === null || config === void 0 ? void 0 : config.duration) !== null && _config$duration !== void 0 ? _config$duration : DEFAULT_DURATION;

        if (acc[property] == null) {
          acc[property] = [sequenceItem];
          return;
        }

        if (((_acc$property = acc[property]) === null || _acc$property === void 0 ? void 0 : _acc$property.length) === 1 && (config === null || config === void 0 ? void 0 : config.delay) != null) {
          sequenceItem.delay = config.delay;
        }

        if (definition.easing != null) {
          sequenceItem.easing = definition.easing;
        }

        acc[property] = [acc[property], sequenceItem].flat();
      });
      return acc;
    }, {});
    const result = {
      from,
      animate
    };

    if ((config === null || config === void 0 ? void 0 : config.repeat) != null) {
      result.transition = {
        repeat: config.repeat
      };
    }

    return result;
  };
};

const cache = new Map();
export const compileAnimation = definition => {
  if (definition == null) {
    throw new Error('Animation definitions must be defined');
  }

  const cachedBuilder = cache.get(definition);

  if (cachedBuilder != null) {
    return cachedBuilder;
  }

  const builder = compile(definition);
  cache.set(definition, builder);
  return builder;
};
//# sourceMappingURL=compile.js.map