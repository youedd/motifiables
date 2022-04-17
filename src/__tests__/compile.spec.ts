import { compileAnimation } from '../compile'

describe('compileAnimation specs', () => {
  it('should return a function', () => {
    const builder = compileAnimation({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    })

    expect(builder).toBeInstanceOf(Function)
  })

  it('should support from and to keys', () => {
    const builder = compileAnimation({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    })

    const props = builder()

    expect(props).toEqual({
      from: {
        opacity: 0
      },
      animate: {
        opacity: [
          { value: 0, duration: 0, type: 'timing' },
          { value: 1, duration: 1000, type: 'timing' }
        ]
      },
      transition: {}
    })
  })

  it('should support fraction keyframes', () => {
    const builder = compileAnimation({
      0: {
        opacity: 0
      },
      1: {
        opacity: 1
      }
    })

    const props = builder()

    expect(props).toEqual({
      from: {
        opacity: 0
      },
      animate: {
        opacity: [
          { value: 0, duration: 0, type: 'timing' },
          { value: 1, duration: 1000, type: 'timing' }
        ]
      },
      transition: {}
    })
  })

  it('should throw if only one keyframe is defined', () => {
    expect(() => compileAnimation({
      style: {},
      from: {
        opacity: 1
      }
    })
    ).toThrow('Animation definitions must have at least two values.')
  })

  it('should support multiple properties with different keyframes', () => {
    const builder = compileAnimation({
      0: {
        scale: 0,
        opacity: 0
      },
      0.6: {
        scale: 1,
        opacity: 0.5
      },
      1: {
        opacity: 1
      }
    })

    const props = builder({ duration: 2000 })

    expect(props).toEqual({
      transition: {},
      from: {
        scale: 0,
        opacity: 0
      },
      animate: {
        opacity: [
          { value: 0, type: 'timing', duration: 0 },
          { value: 0.5, type: 'timing', duration: 1200 },
          { value: 1, type: 'timing', duration: 800 }
        ],
        scale: [
          { value: 0, type: 'timing', duration: 0 },
          { value: 1, type: 'timing', duration: 1200 }
        ]
      }
    })
  })

  it('should support custom duration', () => {
    const builder = compileAnimation({
      0: {
        scale: 0,
        opacity: 0
      },
      0.6: {
        scale: 1,
        opacity: 0.5
      },
      1: {
        opacity: 1
      }
    })

    const props = builder()

    expect(props).toEqual({
      transition: {},
      from: {
        scale: 0,
        opacity: 0
      },
      animate: {
        opacity: [
          { value: 0, type: 'timing', duration: 0 },
          { value: 0.5, type: 'timing', duration: 600 },
          { value: 1, type: 'timing', duration: 400 }
        ],
        scale: [
          { value: 0, type: 'timing', duration: 0 },
          { value: 1, type: 'timing', duration: 600 }
        ]
      }
    })
  })

  it('should support custom delay', () => {
    const builder = compileAnimation({
      0: {
        scale: 0,
        opacity: 0
      },
      0.6: {
        scale: 1,
        opacity: 0.5
      },
      1: {
        opacity: 1
      }
    })

    const props = builder({ delay: 500 })

    expect(props).toEqual({
      transition: {},
      from: {
        scale: 0,
        opacity: 0
      },
      animate: {
        opacity: [
          { value: 0, type: 'timing', duration: 0 },
          { value: 0.5, type: 'timing', duration: 600, delay: 500 },
          { value: 1, type: 'timing', duration: 400 }
        ],
        scale: [
          { value: 0, type: 'timing', duration: 0 },
          { value: 1, type: 'timing', duration: 600, delay: 500 }
        ]
      }
    })
  })

  it('should support repeat', () => {
    const builder = compileAnimation({
      0: {
        scale: 0,
        opacity: 0
      },
      0.6: {
        scale: 1,
        opacity: 0.5
      },
      1: {
        opacity: 1
      }
    })

    const props = builder({ repeat: 3 })

    expect(props).toEqual({
      transition: { repeat: 3 },
      from: {
        scale: 0,
        opacity: 0
      },
      animate: {
        opacity: [
          { value: 0, type: 'timing', duration: 0 },
          { value: 0.5, type: 'timing', duration: 600 },
          { value: 1, type: 'timing', duration: 400 }
        ],
        scale: [
          { value: 0, type: 'timing', duration: 0 },
          { value: 1, type: 'timing', duration: 600 }
        ]
      }
    })
  })

  it('should support easing', () => {
    const easing = (number: number): number => number
    const builder = compileAnimation({
      easing,
      0: {
        opacity: 0
      },
      1: {
        opacity: 1
      }
    })

    const props = builder()

    expect(props.transition.easing).toBe(easing)
  })

  it('should support custom styles', () => {
    const builder = compileAnimation({
      style: {
        backgroundColor: 'red'
      },
      0: {
        opacity: 0
      },
      1: {
        opacity: 1
      }
    })

    const props = builder()

    expect(props).toEqual({
      style: {
        backgroundColor: 'red'
      },
      transition: {},
      from: {
        opacity: 0
      },
      animate: {
        opacity: [
          { value: 0, type: 'timing', duration: 0 },
          { value: 1, type: 'timing', duration: 1000 }
        ]
      }
    })
  })

  it('should return value from cache', () => {
    const definition = {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    }
    const firstAnimation = compileAnimation(definition)
    const secondAnimation = compileAnimation(definition)
    expect(secondAnimation).toBe(firstAnimation)
  })
})
