import { useAnimationState } from 'moti'
import React from 'react'
import { compileAnimation } from '../core'
import { MotifiableDefinitions } from '../definitions'
import { UseMotifiableHook } from './types'

export const useMotifiable: UseMotifiableHook = (config) => {
  const { duration, delay, repeat, name } = config
  const props = React.useMemo(() => {
    const definition = MotifiableDefinitions[name]
    const builder = compileAnimation(definition)

    return builder({ duration, delay, repeat })
  }, [duration, delay, repeat, name])

  const state = useAnimationState<any>({
    animation: props.animate
  })

  const animate = React.useCallback(() => state.transitionTo('animation'), [state])

  return {
    animate,
    props: { state, transition: props.transition }
  }
}
