import * as Keyframe from '../keyframe'

it('should returns styles given a definition and a keyframe position', () => {
  const definition = {
    from: {
      opacity: 0
    },
    0.5: {
      opacity: 0.5
    },
    to: {
      opacity: 1
    }
  }

  let styles = Keyframe.getStyles(definition)(0)
  expect(styles).toEqual({ opacity: 0 })

  styles = Keyframe.getStyles(definition)(0.5)
  expect(styles).toEqual({ opacity: 0.5 })

  styles = Keyframe.getStyles(definition)(1)
  expect(styles).toEqual({ opacity: 1 })
})

it('should throw exception if no styles found', () => {
  const definition = {
    0: {
      opacity: 0
    },
    1: {
      opacity: 1
    }
  }

  expect(() => Keyframe.getStyles(definition)(0.5))
    .toThrow('Missing animation keyframe, this should not happen')
})

it('should returns style properties given one style', () => {
  const styles = [{
    opacity: 0,
    scale: 1
  }]

  expect(Keyframe.getStylesProperties(styles)).toEqual(['opacity', 'scale'])
})

it('should returns unique style properties given multiple styles', () => {
  const styles = [{
    opacity: 0,
    scale: 1
  }, {
    color: 'red',
    opacity: 1
  }, {
    backgroundColor: 'white'
  }]

  expect(Keyframe.getStylesProperties(styles)).toEqual(['opacity', 'scale', 'color', 'backgroundColor'])
})

it('should returns keyframe properties itemSequence', () => {
  const definition = {
    from: {
      opacity: 0,
      scale: 1
    },
    to: {
      opacity: 1,
      scale: 2
    }
  }

  expect(Keyframe.getSequenceItems(definition, 1, [0, 1])).toEqual({
    opacity: { value: 1, duration: 1, type: 'timing' },
    scale: { value: 2, duration: 1, type: 'timing' }
  })
})
