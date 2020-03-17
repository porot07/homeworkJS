// Write here two functions - getHotelBlock and getDepartment
// See README.md

export const getHotelBlock = (numBlock) => {
  if (numBlock >= 1001 && numBlock <= 1120) {
    return 'A';
  }
  if (numBlock >= 2001 && numBlock <= 2120) {
    return 'B';
  }
  if (numBlock >= 3001 && numBlock <= 3120) {
    return 'C';
  }
  return null;
};
//
// export const getDepartment = (numBlock) => {
//   if (numBlock === 1) {
//     return 'Reception';
//   }
//   if (numBlock === 2) {
//     return 'Restaurant';
//   }
//   if (numBlock === 3) {
//     return 'Emergency';
//   }
//   if (numBlock === 4) {
//     return 'Car rent';
//   }
//   if (numBlock === 5) {
//     return 'Pool';
//   }
//   if (numBlock === 6) {
//     return 'Spa salon';
//   }
//   return null;
// };

// Решение задачи с помощью switch && case

export const getDepartment = (numBlock) => {
  switch (numBlock) {
    case 1:
      return 'Reception';
      break;
    case 2:
      return 'Restaurant';
      break;
    case 3:
      return 'Emergency';
      break;
    case 4:
      return 'Car rent';
      break;
    case 5:
      return 'Pool';
      break;
    case 6:
      return 'Spa salon';
      break;
    default: return null;
  }
};
