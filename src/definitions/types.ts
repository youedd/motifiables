import { StyleValueWithReplacedTransforms } from 'moti'
import { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'

type KeyframePosition = number | 'from' | 'to'
type AnimateType = ViewStyle & ImageStyle & TextStyle

export type StyleValues= StyleValueWithReplacedTransforms<AnimateType>

export type MotifiableDefinition = Partial<Record<KeyframePosition, StyleValues> & {
  easing: Animated.EasingFunction
}>

export type MotifiableKey = keyof Motifiables.MotifiableDefinitions

/*eslint-disable*/
declare global {
  namespace Motifiables {
   export interface MotifiableDefinitions {
      // attention-seekers
      bounce: MotifiableDefinition
      flash: MotifiableDefinition
      jello: MotifiableDefinition
      pulse: MotifiableDefinition
      rotate: MotifiableDefinition
      shake: MotifiableDefinition
      swing: MotifiableDefinition
      rubberBand: MotifiableDefinition
      tada: MotifiableDefinition
      wobble: MotifiableDefinition

      // bouncing-entrances
      bounceIn: MotifiableDefinition
      bounceInUp: MotifiableDefinition
      bounceInDown: MotifiableDefinition
      bounceInRight: MotifiableDefinition
      bounceInLeft: MotifiableDefinition

      // bouncing-exits
      bounceOut: MotifiableDefinition
      bounceOutUp: MotifiableDefinition
      bounceOutDown: MotifiableDefinition
      bounceOutRight: MotifiableDefinition
      bounceOutLeft: MotifiableDefinition

      // fading-entrances
      fadeIn: MotifiableDefinition
      fadeInDown: MotifiableDefinition
      fadeInUp: MotifiableDefinition
      fadeInLeft: MotifiableDefinition
      fadeInRight: MotifiableDefinition
      fadeInDownBig: MotifiableDefinition
      fadeInUpBig: MotifiableDefinition
      fadeInLeftBig: MotifiableDefinition
      fadeInRightBig: MotifiableDefinition

      // fading-exits
      fadeOut: MotifiableDefinition
      fadeOutDown: MotifiableDefinition
      fadeOutUp: MotifiableDefinition
      fadeOutLeft: MotifiableDefinition
      fadeOutRight: MotifiableDefinition
      fadeOutDownBig: MotifiableDefinition
      fadeOutUpBig: MotifiableDefinition
      fadeOutLeftBig: MotifiableDefinition
      fadeOutRightBig: MotifiableDefinition

      // flippers
      // flipInX: MotifiableDefinition
      // flipInY: MotifiableDefinition
      // flipOutX: MotifiableDefinition
      // flipOutY: MotifiableDefinition

      // lightspeed
      lightSpeedIn: MotifiableDefinition
      lightSpeedOut: MotifiableDefinition

      // sliding-entrances
      slideInDown: MotifiableDefinition
      slideInUp: MotifiableDefinition
      slideInLeft: MotifiableDefinition
      slideInRight: MotifiableDefinition

      // sliding-exits
      slideOutDown: MotifiableDefinition
      slideOutUp: MotifiableDefinition
      slideOutLeft: MotifiableDefinition
      slideOutRight: MotifiableDefinition

      // zooming-entrances
      zoomIn: MotifiableDefinition
      zoomInDown: MotifiableDefinition
      zoomInUp: MotifiableDefinition
      zoomInLeft: MotifiableDefinition
      zoomInRight: MotifiableDefinition

      // zooming-exits
      zoomOut: MotifiableDefinition
      zoomOutDown: MotifiableDefinition
      zoomOutUp: MotifiableDefinition
      zoomOutLeft: MotifiableDefinition
      zoomOutRight: MotifiableDefinition
    }

  }
}