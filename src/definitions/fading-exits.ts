import { MotifiableDefinition } from '../types'

declare global {
  interface Motifiables {
    fadeOut: MotifiableDefinition
    fadeOutDown: MotifiableDefinition
    fadeOutUp: MotifiableDefinition
    fadeOutLeft: MotifiableDefinition
    fadeOutRight: MotifiableDefinition
    fadeOutDownBig: MotifiableDefinition
    fadeOutUpBig: MotifiableDefinition
    fadeOutLeftBig: MotifiableDefinition
    fadeOutRightBig: MotifiableDefinition
  }
}

function makeFadeOutTranslation (
  translationType: 'translateX' | 'translateY',
  toValue: number
): MotifiableDefinition {
  return {
    from: {
      opacity: 1,
      [translationType]: 0
    },
    to: {
      opacity: 0,
      [translationType]: toValue
    }
  }
}

export const fadeOut: MotifiableDefinition = {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
}

export const fadeOutDown = makeFadeOutTranslation('translateY', 100)

export const fadeOutUp = makeFadeOutTranslation('translateY', -100)

export const fadeOutLeft = makeFadeOutTranslation('translateX', -100)

export const fadeOutRight = makeFadeOutTranslation('translateX', 100)

export const fadeOutDownBig = makeFadeOutTranslation('translateY', 500)

export const fadeOutUpBig = makeFadeOutTranslation('translateY', -500)

export const fadeOutLeftBig = makeFadeOutTranslation('translateX', -500)

export const fadeOutRightBig = makeFadeOutTranslation('translateX', 500)
