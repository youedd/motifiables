import { Easing } from 'react-native-reanimated'
import { MotifiableDefinition } from '../types'

export const lightSpeedIn: MotifiableDefinition = {
  easing: Easing.out(Easing.ease),
  0: {
    opacity: 0,
    translateX: 200,
    skewX: '-30deg'
  },
  0.6: {
    opacity: 1,
    translateX: 0,
    skewX: '20deg'
  },
  0.8: {
    skewX: '-5deg'
  },
  1: {
    opacity: 1,
    translateX: 0,
    skewX: '0deg'
  }
}

export const lightSpeedOut: MotifiableDefinition = {
  easing: Easing.in(Easing.ease),
  0: {
    opacity: 1,
    translateX: 0,
    skewX: '0deg'
  },
  1: {
    opacity: 0,
    translateX: 200,
    skewX: '30deg'
  }
}
