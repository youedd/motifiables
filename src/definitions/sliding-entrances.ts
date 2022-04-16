import { AnimationDefinition } from '../types'

function makeSlideInTranslation (
  translationType: 'translateX' | 'translateY',
  fromValue: number
): AnimationDefinition {
  return {
    from: {
      [translationType]: fromValue
    },
    to: {
      [translationType]: 0
    }
  }
}

export const slideInDown = makeSlideInTranslation('translateY', -100)

export const slideInUp = makeSlideInTranslation('translateY', 100)

export const slideInLeft = makeSlideInTranslation('translateX', -100)

export const slideInRight = makeSlideInTranslation('translateX', 100)
