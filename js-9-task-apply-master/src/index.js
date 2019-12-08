const apply = (cnt, fn, arg) => {
  if (cnt === 0) return arg;
  return apply(cnt - 1, fn, fn(arg));
};

export default apply;
