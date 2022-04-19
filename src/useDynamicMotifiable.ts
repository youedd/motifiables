import { useDynamicAnimation } from 'moti'
import React from 'react'
import { compileAnimation } from './compile'
import * as Definitions from './definitions'
import {
  MotifiableConfig,
  UseDynamicMotifiableReturn
} from './types'

export const useDynamicMotifiable = (): UseDynamicMotifiableReturn => {
  const animation = useDynamicAnimation()

  const animateTo = React.useCallback(
    (config: MotifiableConfig) => {
      const { duration, delay, repeat, name } = config

      const definition = Definitions[name]
      const builder = compileAnimation(definition)

      const props = builder({ duration, delay, repeat })
      animation.animateTo(props.animate as any)
    },
    [animation]
  )

  return {
    animateTo,
    props: {
      state: animation
    }
  }
}
