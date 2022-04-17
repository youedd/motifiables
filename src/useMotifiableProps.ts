import React from 'react'
import { compileAnimation } from './compile'
import * as Definitions from './definitions'
import { MotifiableConfig, MotifiableProps } from './types'

export const useMotifiableProps = (config: MotifiableConfig): MotifiableProps => {
  const { duration, delay, repeat, name } = config
  return React.useMemo(() => {
    const definition = Definitions[name]
    const builder = compileAnimation(definition)

    return builder({ duration, delay, repeat })
  }, [duration, delay, repeat, name])
}
