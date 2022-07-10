function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
  // The maximum is exclusive and the minimum is inclusive
}

// eslint-disable-next-line import/prefer-default-export
export { randomInt };
