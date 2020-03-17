// Task: Count names
// See README

export default (users, stopNames) => users.reduce((acc, { name }) => {
  if (!stopNames.includes(name)) {
    if (acc.has(name)) return acc.set(name, acc.get(name) + 1);
    return acc.set(name, 1);
  }
  return acc;
}, new Map());
