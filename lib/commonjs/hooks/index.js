"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _useDynamicMotifiable = require("./useDynamicMotifiable");

Object.keys(_useDynamicMotifiable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useDynamicMotifiable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useDynamicMotifiable[key];
    }
  });
});

var _useMotifiable = require("./useMotifiable");

Object.keys(_useMotifiable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useMotifiable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useMotifiable[key];
    }
  });
});

var _useMotifiableProps = require("./useMotifiableProps");

Object.keys(_useMotifiableProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useMotifiableProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useMotifiableProps[key];
    }
  });
});
//# sourceMappingURL=index.js.map