import { motify } from 'moti';
import React from 'react';
import { useMotifiableProps } from './hooks';
export const createMotifiable = Component => {
  const MotifedComponent = motify(Component)();

  const MotifiableComponent = _ref => {
    let {
      name,
      duration,
      delay,
      repeat,
      ...compProps
    } = _ref;
    const motifiableProps = useMotifiableProps({
      name,
      repeat,
      delay,
      duration
    });
    const props = { ...motifiableProps,
      ...compProps
    };
    return /*#__PURE__*/React.createElement(MotifedComponent, props);
  };

  return MotifiableComponent;
};
//# sourceMappingURL=createMotifiable.js.map