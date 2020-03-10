// Task: sumOfSquares
// See README

export default (number) => number
  .filter((num) => typeof num === 'number')
  .map((a) => a * a)
  .reduce((acc, num) => acc + num, 0);
