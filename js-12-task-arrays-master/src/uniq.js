// Task: uniq
// See README

export default (arr) => arr.reduce((acc, el) => {
  if (acc.includes(el)) return acc;
  return acc.concat(el);
}, []);
