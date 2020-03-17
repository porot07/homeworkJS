// Task Iterative
// See README

const sumOfOdds = (n) => {
  const iter = (count, acc) => {
    if (count > n) return acc;
    return iter(count + 2, acc + count);
  };
  return iter(1, 0);
};

const getSmallestDivisor = (n) => {
  if (n === 1) return 1;
  const iter = (div, num) => {
    if (num % div === 0) return div;
    return iter(div + 1, num);
  };
  return iter(2, n);
};

export { sumOfOdds, getSmallestDivisor };
