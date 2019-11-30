// Task Reverse
// See README

const reverse = (str) => {
  if (str.length === 0) return '';
  const lastChar = str[str.length - 1];
  const rest = str.substring(0, str.length - 1);
  return lastChar + reverse(rest);
};

export default reverse;
