import { MotifiableDefinition, StyleValues } from '../definitions'

const _getStyles = (definition: MotifiableDefinition, position: number): StyleValues | undefined | null => {
  if (definition == null) {
    return null
  }
  if (definition[position] != null) return definition[position]

  if (position === 0 && definition.from != null) return definition.from

  if (position === 1 && definition.to != null) return definition.to

  return null
}

const _getStylesProperties = (keyframeStyles: StyleValues): Array<keyof StyleValues> => {
  return Object.keys(keyframeStyles) as Array<keyof StyleValues>
}

export const getStyles = (definition: MotifiableDefinition) => (position: number): StyleValues => {
  const keyframe = _getStyles(definition, position)

  if (keyframe != null) return keyframe

  throw new Error('Missing animation keyframe, this should not happen')
}

export const getStylesProperties = (keyframesStyles: StyleValues[]): Array<keyof StyleValues> => {
  return [...new Set(keyframesStyles.map(_getStylesProperties).flat())]
}

export const getSequenceItems = (
  definition: MotifiableDefinition,
  keyframe: number,
  previousKeyframe: number): Partial<Record<keyof StyleValues, Record<string, any>>> => {
  const keyframeStyles = getStyles(definition)(keyframe)

  const properties = _getStylesProperties(keyframeStyles)

  return properties.reduce((acc, property) => {
    return {
      ...acc,
      [property]: {
        value: keyframeStyles[property],
        type: 'timing',
        duration: keyframe - previousKeyframe
      }
    }
  }, {})
}
