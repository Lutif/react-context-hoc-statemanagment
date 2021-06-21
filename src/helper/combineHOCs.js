export const combineHOCs = (...rest) =>
  rest.reduce((a, b) => (...args) => a(b(...args)));
