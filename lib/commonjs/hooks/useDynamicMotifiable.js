"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDynamicMotifiable = void 0;

var _moti = require("moti");

var _react = _interopRequireDefault(require("react"));

var _core = require("../core");

var _definitions = require("../definitions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useDynamicMotifiable = () => {
  const animation = (0, _moti.useDynamicAnimation)();

  const animateTo = _react.default.useCallback(config => {
    const {
      duration,
      delay,
      repeat,
      name
    } = config;
    const definition = _definitions.MotifiableDefinitions[name];
    const builder = (0, _core.compileAnimation)(definition);
    const props = builder({
      duration,
      delay,
      repeat
    });
    animation.animateTo(props.animate);
  }, [animation]);

  return {
    animateTo,
    props: {
      state: animation
    }
  };
};

exports.useDynamicMotifiable = useDynamicMotifiable;
//# sourceMappingURL=useDynamicMotifiable.js.map