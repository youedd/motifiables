import { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'
import { MotiAnimationProp, MotiFromProp, MotiProps, StyleValueWithReplacedTransforms } from 'moti'

type KeyframePosition = number | 'from' | 'to'
export type AnimateType = ViewStyle & ImageStyle & TextStyle
export type StyleValues= StyleValueWithReplacedTransforms<AnimateType>
export type MotifiableDefinition = Partial<Record<KeyframePosition, StyleValues> & {
  easing: Animated.EasingFunction
  style: ViewStyle
}>

export type MotifiableKey = keyof Motifaibles

export interface MotifiableConfig {
  name: MotifiableKey
  duration?: number
  delay?: number
  repeat?: number
}

export interface MotifiableTransition {
  easing?: Animated.EasingFunction
  repeat?: number
}
export type MotifiableStyle = ViewStyle | TextStyle | ImageStyle

export interface MotifiableProps {
  from: NonNullable<MotiFromProp<MotifiableStyle>>
  animate: NonNullable<MotiAnimationProp<MotifiableStyle>>
  transition: MotifiableTransition
  style?: MotifiableStyle
}

export type MotifiableBuilder = (
  config?: Omit<MotifiableConfig, 'name'>
) => MotifiableProps

export interface UseMotifiableResult {
  animate: () => void
  resetInitialState: () => void
  props: {
    state: MotiProps<MotifiableStyle>['state']
    transition: MotifiableTransition
    style?: MotifiableStyle
  }
}
