import { MotiAnimationProp, MotiFromProp } from 'moti'
import { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'
import { MotifiableKey } from '../definitions'

export interface MotifiableConfig {
  name: MotifiableKey
  duration?: number
  delay?: number
  repeat?: number
}

export type MotifiableStyle = ViewStyle | TextStyle | ImageStyle

export interface MotifiableTransitionProp {
  easing?: Animated.EasingFunction
  repeat?: number
}

export interface MotifiableProps {
  from: NonNullable<MotiFromProp<MotifiableStyle>>
  animate: NonNullable<MotiAnimationProp<MotifiableStyle>>
  transition?: MotifiableTransitionProp
}

export type MotifiableBuilder = (
  config?: Omit<MotifiableConfig, 'name'>
) => MotifiableProps
