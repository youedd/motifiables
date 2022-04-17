import * as Keyframe from './keyframe'
import { MotifiableDefinition, MotifiableBuilder, MotifiableProps } from './types'
import { compareNumbers, notNull, parsePosition } from './utils'

const DEFAULT_DURATION = 1000

const compile = (definition: MotifiableDefinition): MotifiableBuilder => {
  const keyframes = Object.keys(definition)
    .map(parsePosition)
    .filter(notNull) as number[]

  if (keyframes.length < 2) {
    throw new Error('Animation definitions must have at least two values.')
  }

  keyframes.sort(compareNumbers)

  const getDefinitionKeyframeStyles = Keyframe.getStyles(definition)

  const definitionKeyframesStyles = keyframes.map(getDefinitionKeyframeStyles)
  const definitionProperties = Keyframe.getStylesProperties(definitionKeyframesStyles)

  const from = getDefinitionKeyframeStyles(0) as MotifiableProps['from']

  return (config) => {
    const animate = keyframes
      .map((keyframe, i) =>
        Keyframe.getSequenceItems(definition, keyframe, keyframes[i - 1] ?? 0)
      )
      .reduce((acc, keyframeSequenceItems) => {
        definitionProperties.forEach(property => {
          const sequenceItem = keyframeSequenceItems[property]

          if (sequenceItem == null) {
            return
          }

          sequenceItem.duration *= config?.duration ?? DEFAULT_DURATION

          if (acc[property] == null) {
            acc[property] = [sequenceItem]
            return
          }

          if (acc[property]?.length === 1 && config?.delay != null) {
            sequenceItem.delay = config.delay
          }

          acc[property] = [acc[property], sequenceItem].flat()
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
