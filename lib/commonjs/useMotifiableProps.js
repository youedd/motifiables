"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMotifiableProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _compile = require("./compile");

var Definitions = _interopRequireWildcard(require("./definitions"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useMotifiableProps = config => {
  const {
    duration,
    delay,
    repeat,
    name
  } = config;
  return _react.default.useMemo(() => {
    const definition = Definitions[name];
    const builder = (0, _compile.compileAnimation)(definition);
    return builder({
      duration,
      delay,
      repeat
    });
  }, [duration, delay, repeat, name]);
};

exports.useMotifiableProps = useMotifiableProps;
//# sourceMappingURL=useMotifiableProps.js.map