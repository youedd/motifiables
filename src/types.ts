import { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'
import { MotiAnimationProp, StyleValueWithReplacedTransforms } from 'moti'

type KeyframePosition = number | 'from' | 'to'
export type StyleValues = StyleValueWithReplacedTransforms< ViewStyle & ImageStyle & TextStyle>
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
  from: StyleValues
  animate: NonNullable<MotiAnimationProp<any>>
  transition: { easing?: Animated.EasingFunction, repeat?: number}
  style?: ViewStyle
}

export type MotifiableBuilder = (
  config?: Omit<MotifiableConfig, 'name'>
) => MotifiableProps
