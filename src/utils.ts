import { MotifiableDefinition, StyleValues } from './types'

export const compareNumbers = (a: number, b: number): number => {
  return a - b
}

export const notNull = (value: unknown): boolean => {
  return value !== null
}

export const parsePosition = (value: string): number | null => {
  if (value === 'from') {
    return 0
  }
  if (value === 'to') {
    return 1
  }

  const parsed = parseFloat(value)

  if (Number.isNaN(parsed) || parsed < 0 || parsed > 1) {
    return null
  }

  return parsed
}

const _getKeyframeStyles = (definition: MotifiableDefinition, position: number): StyleValues | undefined | null => {
  if (definition[position] != null) return definition[position]

  if (position === 0 && definition.from != null) return definition.from

  if (position === 1 && definition.to != null) return definition.to

  return null
}

export const getKeyframeStyles = (definition: MotifiableDefinition) => (position: number): StyleValues => {
  const keyframe = _getKeyframeStyles(definition, position)

  if (keyframe != null) return keyframe

  throw new Error('Missing animation keyframe, this should not happen')
}

export const getKeyframeStylesProperties = (keyframeStyles: StyleValues): Array<keyof StyleValues> => {
  return Object.keys(keyframeStyles) as Array<keyof StyleValues>
}

export const getKeyframesStylesProperties = (keyframesStyles: StyleValues[]): Array<keyof StyleValues> => {
  return [...new Set(keyframesStyles.map(getKeyframeStylesProperties).flat())]
}
