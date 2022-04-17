import { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'
import { MotiAnimationProp, MotiFromProp, StyleValueWithReplacedTransforms } from 'moti'

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

export interface MotifiableProps {
  from: NonNullable<MotiFromProp<ViewStyle | TextStyle | ImageStyle>>
  animate: NonNullable<MotiAnimationProp<ViewStyle | TextStyle | ImageStyle>>
  transition: { easing?: Animated.EasingFunction, repeat?: number}
  style?: ViewStyle | TextStyle | ImageStyle
}

export type MotifiableBuilder = (
  config?: Omit<MotifiableConfig, 'name'>
) => MotifiableProps
