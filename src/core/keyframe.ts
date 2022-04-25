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

const _getPropertyPreviousKeyframe = (
  definition: MotifiableDefinition,
  property: keyof StyleValues,
  currentKeyframeIndex: number,
  keyframes: number[]
): number => {
  for (let i = currentKeyframeIndex - 1; i > 0; i--) {
    const keyframe = keyframes[i]
    const styles = _getStyles(definition, keyframe)

    if (styles?.[property] != null) {
      return keyframe
    }
  }

  return 0
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
  keyframeIndex: number,
  keyFrames: number[]): Partial<Record<keyof StyleValues, Record<string, any>>> => {
  const keyframe = keyFrames[keyframeIndex]
  const keyframeStyles = getStyles(definition)(keyframe)

  const properties = _getStylesProperties(keyframeStyles)

  return properties.reduce((acc, property) => {
    const previousKeyframe = _getPropertyPreviousKeyframe(definition, property, keyframeIndex, keyFrames)
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
