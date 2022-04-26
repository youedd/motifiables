"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMotifiable = void 0;

var _moti = require("moti");

var _react = _interopRequireDefault(require("react"));

var _core = require("../core");

var _definitions = require("../definitions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useMotifiable = config => {
  const {
    duration,
    delay,
    repeat,
    name
  } = config;

  const props = _react.default.useMemo(() => {
    const definition = _definitions.MotifiableDefinitions[name];
    const builder = (0, _core.compileAnimation)(definition);
    return builder({
      duration,
      delay,
      repeat
    });
  }, [duration, delay, repeat, name]);

  const state = (0, _moti.useAnimationState)({
    animation: props.animate
  });

  const animate = _react.default.useCallback(() => state.transitionTo('animation'), [state]);

  return {
    animate,
    props: {
      state,
      transition: props.transition
    }
  };
};

exports.useMotifiable = useMotifiable;
//# sourceMappingURL=useMotifiable.js.map