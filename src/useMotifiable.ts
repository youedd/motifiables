import { useAnimationState } from 'moti'
import React from 'react'
import { compileAnimation } from './compile'
import * as Definitions from './definitions'
import { MotifiableConfig, UseMotifiableReturn } from './types'

export const useMotifiable = (config: MotifiableConfig): UseMotifiableReturn => {
  const { duration, delay, repeat, name } = config
  const props = React.useMemo(() => {
    const definition = Definitions[name]
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
