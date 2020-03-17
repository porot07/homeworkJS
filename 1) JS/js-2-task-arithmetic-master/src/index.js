// Task: "Arithmetic's day"
// see README file;
export const calcPercent = (num, total) => Math.round((num * 100) / total);
export const isEven = (num) => (num % 2) === 0;

// В комментариях ещё одно решение этой задачи...
// Только насильный перевод в булев тип нежелателен,
// т.к значение можно перевести и со стандартными возможностями

// export const isEven = (num) => !(num % 2);
