import React from 'react'
import { compileAnimation } from '../core'
import { MotifiableDefinitions } from '../definitions'
import { UseMotifiablePropsHook } from './types'

export const useMotifiableProps: UseMotifiablePropsHook = (config) => {
  const { duration, delay, repeat, name } = config
  return React.useMemo(() => {
    const definition = MotifiableDefinitions[name]
    const builder = compileAnimation(definition)

    return builder({ duration, delay, repeat })
  }, [duration, delay, repeat, name])
}
