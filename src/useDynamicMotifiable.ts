import { useDynamicAnimation } from 'moti'
import React from 'react'
import { compileAnimation } from './compile'
import * as Definitions from './definitions'
import { MotifiableConfig, MotifiableProps, UseDynamicMotifiableReturn } from './types'

export const useDynamicMotifiable = (): UseDynamicMotifiableReturn => {
  const animation = useDynamicAnimation()
  const [currentProps, setProps] = React.useState<MotifiableProps>()

  const animateTo = React.useCallback((config: MotifiableConfig) => {
    const { duration, delay, repeat, name } = config

    const definition = Definitions[name]
    const builder = compileAnimation(definition)

    const props = builder({ duration, delay, repeat })

    setProps(props)
    animation.animateTo(props.animate as any)
  }, [animation])

  return {
    animateTo,
    props: {
      state: animation,
      style: currentProps?.style,
      transition: currentProps?.transition ?? {}
    }
  }
}
