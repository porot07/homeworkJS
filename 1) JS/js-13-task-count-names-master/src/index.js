// Task: getUsersNames
// See README

// Решение задачи с помощью условия if
// const getUsersNames = (coll) => coll.reduce((acc, { name }) => {
//   if (acc[name]) return { ...acc, [name]: acc[name] + 1 };
//   return { ...acc, [name]: 1 };
// }, {});

// Решение задачи с помощью тернарного оператора
const getUsersNames = (coll) => coll
  .reduce(
    (acc, { name }) => (acc[name]
      ? { ...acc, [name]: acc[name] + 1 }
      : { ...acc, [name]: 1 }),
    {},
  );
export default getUsersNames;
