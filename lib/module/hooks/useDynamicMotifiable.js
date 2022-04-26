import { useDynamicAnimation } from 'moti';
import React from 'react';
import { compileAnimation } from '../core';
import { MotifiableDefinitions } from '../definitions';
export const useDynamicMotifiable = () => {
  const animation = useDynamicAnimation();
  const animateTo = React.useCallback(config => {
    const {
      duration,
      delay,
      repeat,
      name
    } = config;
    const definition = MotifiableDefinitions[name];
    const builder = compileAnimation(definition);
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
//# sourceMappingURL=useDynamicMotifiable.js.map