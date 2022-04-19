import { Easing } from 'react-native-reanimated'
import { MotifiableDefinition } from '../types'

export const flipInX: MotifiableDefinition = {
  easing: Easing.in(Easing.ease),
  0: {
    backfaceVisibility: 'visible',
    perspective: 400,
    opacity: 0,
    rotateX: '90deg'
  },
  0.4: {
    rotateX: '-20deg'
  },
  0.6: {
    opacity: 1,
    rotateX: '10deg'
  },
  0.8: {
    rotateX: '-5deg'
  },
  1: {
    opacity: 1,
    rotateX: '0deg'
  }
}

export const flipInY: MotifiableDefinition = {
  easing: Easing.in(Easing.ease),
  0: {
    backfaceVisibility: 'visible',
    perspective: 400,
    opacity: 0,
    rotateY: '90deg'
  },
  0.4: {
    rotateY: '-20deg'
  },
  0.6: {
    opacity: 1,
    rotateY: '10deg'
  },
  0.8: {
    rotateY: '-5deg'
  },
  1: {
    opacity: 1,
    rotateY: '0deg'
  }
}

export const flipOutX: MotifiableDefinition = {
  0: {
    backfaceVisibility: 'visible',
    perspective: 400,
    opacity: 1,
    rotateX: '0deg'
  },
  0.3: {
    opacity: 1,
    rotateX: '-20deg'
  },
  1: {
    opacity: 0,
    rotateX: '90deg'
  }
}

export const flipOutY: MotifiableDefinition = {
  0: {
    backfaceVisibility: 'visible',
    perspective: 400,
    opacity: 1,
    rotateY: '0deg'
  },
  0.3: {
    opacity: 1,
    rotateY: '-20deg'
  },
  1: {
    opacity: 0,
    rotateY: '90deg'
  }
}
