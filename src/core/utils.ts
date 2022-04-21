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
