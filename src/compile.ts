import { MotifiableDefinition, MotifiableBuilder, StyleValues, MotifiableProps } from './types'
import { compareNumbers, getKeyframesStylesProperties, getKeyframeStyles, getKeyframeStylesProperties, notNull, parsePosition } from './utils'

const DEFAULT_DURATION = 1000

const getKeyframeSequenceItems = (
  definition: MotifiableDefinition,
  keyframe: number,
  previousKeyframe: number): Partial<Record<keyof StyleValues, Record<string, any>>> => {
  const keyframeStyles = getKeyframeStyles(definition)(keyframe)

  const properties = getKeyframeStylesProperties(keyframeStyles)

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

const compile = (definition: MotifiableDefinition): MotifiableBuilder => {
  const keyframes = Object.keys(definition)
    .map(parsePosition)
    .filter(notNull) as number[]

  if (keyframes.length < 2) {
    throw new Error('Animation definitions must have at least two values.')
  }

  keyframes.sort(compareNumbers)

  const getDefinitionKeyframeStyles = getKeyframeStyles(definition)

  const definitionKeyframesStyles = keyframes.map(getDefinitionKeyframeStyles)
  const definitionProperties = getKeyframesStylesProperties(definitionKeyframesStyles)

  const from = getDefinitionKeyframeStyles(0) as MotifiableProps['from']

  return (config) => {
    const animate = keyframes
      .filter(keyframe => keyframe !== 0)
      .map((keyframe, i, filtredKeyframes) =>
        getKeyframeSequenceItems(definition, keyframe, filtredKeyframes[i - 1] ?? 0)
      )
      .reduce((acc, keyframeSequenceItems) => {
        definitionProperties.forEach(property => {
          const sequenceItem = keyframeSequenceItems[property]
          if (sequenceItem == null) return

          sequenceItem.duration *= config?.duration ?? DEFAULT_DURATION

          if (acc[property] != null) {
            acc[property] = [acc[property], sequenceItem].flat()
            return
          }

          if (config?.delay != null) {
            sequenceItem.delay = config.delay
          }

          acc[property] = sequenceItem
        })
        return acc
      }, {}) as MotifiableProps['animate']

    const result: MotifiableProps = {
      from,
      animate,
      transition: {}
    }

    if (config?.repeat != null) {
      result.transition.repeat = config.repeat
    }

    if (definition.easing != null) {
      result.transition.easing = definition.easing
    }

    if (definition.style != null) {
      result.style = definition.style
    }

    return result
  }
}
const cache = new Map<MotifiableDefinition, MotifiableBuilder>()

export const compileAnimation = (definition: MotifiableDefinition): MotifiableBuilder => {
  const cachedBuilder = cache.get(definition)

  if (cachedBuilder != null) {
    return cachedBuilder
  }

  const builder = compile(definition)
  cache.set(definition, builder)

  return builder
}
