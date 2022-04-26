"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMotifiableProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("../core");

var _definitions = require("../definitions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useMotifiableProps = config => {
  const {
    duration,
    delay,
    repeat,
    name
  } = config;
  return _react.default.useMemo(() => {
    const definition = _definitions.MotifiableDefinitions[name];
    const builder = (0, _core.compileAnimation)(definition);
    return builder({
      duration,
      delay,
      repeat
    });
  }, [duration, delay, repeat, name]);
};

exports.useMotifiableProps = useMotifiableProps;
//# sourceMappingURL=useMotifiableProps.js.map