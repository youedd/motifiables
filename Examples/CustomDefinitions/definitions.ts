import { Easing } from 'react-native-reanimated'
import { MotifiableDefinition, setMotifiableDefinition } from 'motifiables'

// override definition
setMotifiableDefinition('rotate', {
  0: {
    rotate: '0deg'
  },

  1: {
    rotate: '360deg'
  }
})

// add custom definition
setMotifiableDefinition('custom', {
  easing: Easing.linear,
  0: {
    rotate: '0deg',
    opacity: 1
  },
  0.25: {
    opacity: 0
  },
  0.5: {
    opacity: 1,
    rotate: '180deg'
  },
  0.75: {
    opacity: 0
  },
  1: {
    rotate: '360deg',
    opacity: 1
  }
})

/* eslint-disable */
declare global {
  namespace Motifiables {
    interface MotifiableDefinitions {
      custom: MotifiableDefinition
    }
  }
}
