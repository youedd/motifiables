import { Easing } from 'react-native-reanimated'
import { AnimationDefinition } from '../types'

function makeZoomOutTranslation (
  translationType: 'translateX' | 'translateY',
  pivotPoint: number
): AnimationDefinition {
  const modifier = Math.min(1, Math.max(-1, pivotPoint))
  return {
    easing: Easing.bezier(0.175, 0.885, 0.32, 1),
    0: {
      opacity: 1,
      scale: 1,
      [translationType]: 0
    },
    0.4: {
      opacity: 1,
      scale: 0.457,
      [translationType]: pivotPoint
    },
    1: {
      opacity: 0,
      scale: 0.1,
      [translationType]: modifier * -1000
    }
  }
}

export const zoomOut: AnimationDefinition = {
  from: {
    opacity: 1,
    scale: 1
  },
  0.5: {
    opacity: 1,
    scale: 0.3
  },
  to: {
    opacity: 0,
    scale: 0
  }
}

export const zoomOutDown = makeZoomOutTranslation('translateY', 60)

export const zoomOutUp = makeZoomOutTranslation('translateY', -60)

export const zoomOutLeft = makeZoomOutTranslation('translateX', 10)

export const zoomOutRight = makeZoomOutTranslation('translateX', -10)
