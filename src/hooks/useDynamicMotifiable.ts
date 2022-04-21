import { useDynamicAnimation } from 'moti'
import React from 'react'
import { compileAnimation, MotifiableConfig } from '../core'
import { MotifiableDefinitions } from '../definitions'
import { UseDynamicMotifiableHook } from './types'

export const useDynamicMotifiable: UseDynamicMotifiableHook = () => {
  const animation = useDynamicAnimation()

  const animateTo = React.useCallback(
    (config: MotifiableConfig) => {
      const { duration, delay, repeat, name } = config

      const definition = MotifiableDefinitions[name]
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
