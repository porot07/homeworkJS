// Task Sum of Nums
// See README file

const sumOfAllNums = (sum) => {
  if (sum <= 0) return 0;
  return sum + sumOfAllNums(sum - 1);
};


const sequenceSum = (start, end) => {
  if (start === end) {
    return start;
  }
  if (start >= end) {
    return NaN;
  }
  return end + sequenceSum(start, end - 1);
};

// Решение итеративным способом... пока в разработке
// const sequenceSum = (start, end) => {
//   const iter = (counter, accumulator) => {
//     if (counter === start) return accumulator;
//     return iter(counter - 1, counter + accumulator);
//   };
//   return iter(end, 1);
// };

export { sumOfAllNums, sequenceSum };

// Вложенные if конструкции, что нежелательно делать (менее читабельно)
//
// const sequenceSum = (start, end) => {
//   if (start >= end) {
//     if (start === end) {
//       return start;
//   }
//     return NaN;
//   }
//   return end + sequenceSum(start, end - 1);
// };
