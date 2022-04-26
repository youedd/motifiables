export const compareNumbers = (a, b) => {
  return a - b;
};
export const notNull = value => {
  return value !== null;
};
export const parsePosition = value => {
  if (value === 'from') {
    return 0;
  }

  if (value === 'to') {
    return 1;
  }

  const parsed = parseFloat(value);

  if (Number.isNaN(parsed) || parsed < 0 || parsed > 1) {
    return null;
  }

  return parsed;
};
//# sourceMappingURL=utils.js.map