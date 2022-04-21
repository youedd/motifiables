import { motify } from 'moti'
import React from 'react'
import { useMotifiableProps } from './hooks'
import { MotifiableConfig } from './types'

export const createMotifiable = < C extends React.ComponentType<any>>(
  Component: C
): React.FC<React.ComponentProps<C> & MotifiableConfig> => {
  const MotifedComponent = motify(Component as React.FC)()

  const MotifiableComponent: React.FC<React.ComponentProps<C> & MotifiableConfig> = ({
    name,
    duration,
    delay,
    repeat,
    ...compProps
  }) => {
    const motifiableProps = useMotifiableProps({ name, repeat, delay, duration })

    const props = {
      ...motifiableProps,
      ...compProps
    }

    return (
      <MotifedComponent {...props} />
    )
  }

  return MotifiableComponent
}
