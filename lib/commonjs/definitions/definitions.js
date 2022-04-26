"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMotifiableDefinition = exports.MotifiableDefinitions = void 0;

var DefaultDefenitions = _interopRequireWildcard(require("./default"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const MotifiableDefinitions = { ...DefaultDefenitions
};
exports.MotifiableDefinitions = MotifiableDefinitions;

const setMotifiableDefinition = (key, defenition) => {
  MotifiableDefinitions[key] = defenition;
};

exports.setMotifiableDefinition = setMotifiableDefinition;
//# sourceMappingURL=definitions.js.map