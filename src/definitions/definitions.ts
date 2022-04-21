import * as DefaultDefenitions from './default'
import { MotifiableKey, MotifiableDefinition } from './types'

export const MotifiableDefinitions: Record<MotifiableKey, MotifiableDefinition> = {
  ...DefaultDefenitions
}

export const setMotifiableDefinition = (key: string, defenition: MotifiableDefinition): void => {
  MotifiableDefinitions[key as MotifiableKey] = defenition
}
