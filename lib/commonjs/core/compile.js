"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compileAnimation = void 0;

var Keyframe = _interopRequireWildcard(require("./keyframe"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DEFAULT_DURATION = 1000;

const compile = definition => {
  const keyframes = Object.keys(definition).map(_utils.parsePosition).filter(_utils.notNull);

  if (keyframes.length < 2) {
    throw new Error('Animation definitions must have at least two values.');
  }

  keyframes.sort(_utils.compareNumbers);
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

const compileAnimation = definition => {
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

exports.compileAnimation = compileAnimation;
//# sourceMappingURL=compile.js.map