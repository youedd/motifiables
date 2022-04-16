import { MotifiableDefinition } from '../types'

declare global {
  interface Motifiables {
    fadeIn: MotifiableDefinition
    fadeInDown: MotifiableDefinition
    fadeInUp: MotifiableDefinition
    fadeInLeft: MotifiableDefinition
    fadeInRight: MotifiableDefinition
    fadeInDownBig: MotifiableDefinition
    fadeInUpBig: MotifiableDefinition
    fadeInLeftBig: MotifiableDefinition
    fadeInRightBig: MotifiableDefinition
  }
}

function makeFadeInTranslation (
  translationType: 'translateX' | 'translateY',
  fromValue: number
): MotifiableDefinition {
  return {
    from: {
      opacity: 0,
      [translationType]: fromValue
    },
    to: {
      opacity: 1,
      [translationType]: 0
    }
  }
}

export const fadeIn: MotifiableDefinition = {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}

export const fadeInDown = makeFadeInTranslation('translateY', -100)

export const fadeInUp = makeFadeInTranslation('translateY', 100)

export const fadeInLeft = makeFadeInTranslation('translateX', -100)

export const fadeInRight = makeFadeInTranslation('translateX', 100)

export const fadeInDownBig = makeFadeInTranslation('translateY', -500)

export const fadeInUpBig = makeFadeInTranslation('translateY', 500)

export const fadeInLeftBig = makeFadeInTranslation('translateX', -500)

export const fadeInRightBig = makeFadeInTranslation('translateX', 500)
