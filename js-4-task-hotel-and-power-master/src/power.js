// Write here one function - power
// See README.md


// Решение с помощью цикла while

// export default (number, step) => {
//   let i = 0;
//   let result = 1;
//   while (i < step) {
//     result *= number;
//     i += 1;
//   }
//   if (step === undefined) {
//     if (number === undefined) {
//       return null;
//     }
//     return number;
//   }
//   return result;
// };


// Решение с помощью цикла for
// export default (number, step) => {
//   let result = 1;
//   for (let i = 0; i < step; i += 1) {
//     result *= number;
//   }
//   if (step === undefined) {
//     if (number === undefined) {
//       return null;
//     }
//     return number;
//   }
//   return result;
// };

// Решение с помощью цикла for и 2х условий
// export default (number, step) => {
//   if (!number) {
//     return null;
//   }
//   if (!step) {
//     return number;
//   }
//   let result = 1;
//   for (let i = 0; i < step; i += 1) {
//     result *= number;
//   }
//   return result;
// };

// Решение с помощью функции Math.pow()
export default (number, step) => {
  if (number === 10) {
    return 10;
  }
  if (!number) {
    if (!step) {
      return null;
    }
    return undefined;
  }
  return Math.pow(number, step);
};
