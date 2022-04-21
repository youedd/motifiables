import { MotiProps } from 'moti'
import { MotifiableKey } from '../definitions'
import { MotifiableConfig, MotifiableProps, MotifiableStyle, MotifiableTransitionProp } from '../core'

interface DynamicMotifiableConfig {
  name: MotifiableKey
  duration?: number
  delay?: number
}

export type UseMotifiablePropsHook = (config: MotifiableConfig) => MotifiableProps

export type UseMotifiableHook = (config: MotifiableConfig) => {
  animate: () => void
  props: {
    state: MotiProps<MotifiableStyle>['state']
    transition?: MotifiableTransitionProp
  }
}

export type UseDynamicMotifiableHook = () => {
  animateTo: (config: DynamicMotifiableConfig) => void
  props: {
    state: MotiProps<MotifiableStyle>['state']
  }
}
