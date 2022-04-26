"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMotifiable = void 0;

var _moti = require("moti");

var _react = _interopRequireDefault(require("react"));

var _hooks = require("./hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createMotifiable = Component => {
  const MotifedComponent = (0, _moti.motify)(Component)();

  const MotifiableComponent = _ref => {
    let {
      name,
      duration,
      delay,
      repeat,
      ...compProps
    } = _ref;
    const motifiableProps = (0, _hooks.useMotifiableProps)({
      name,
      repeat,
      delay,
      duration
    });
    const props = { ...motifiableProps,
      ...compProps
    };
    return /*#__PURE__*/_react.default.createElement(MotifedComponent, props);
  };

  return MotifiableComponent;
};

exports.createMotifiable = createMotifiable;
//# sourceMappingURL=createMotifiable.js.map