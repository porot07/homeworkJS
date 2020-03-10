// Task: "Time"
// see README
// Решение исходя от значений в секундах
export default (time) => {
  const hour = Math.floor(time / 3600);
  const min = Math.floor((time - hour * 3600) / 60);
  const sec = Math.floor(time % 60);
  return `${hour}:${min}:${sec}`;
};

// Решение исходя от минут
// export default (seconds) => {
//   const rowMinutes = Math.floor(seconds / 60);
//   const finalHours = Math.floor(rowMinutes / 60);
//   const finalMinutes = rowMinutes % 60;
//   const finalSeconds = seconds % 60;
//   return `${finalHours}:${finalMinutes}:${finalSeconds}`;
// };
