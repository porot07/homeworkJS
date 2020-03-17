const reduce = (cb, node, initAcc) => {
  const iter = (acc, n) => {
    const newAcc = cb(acc, n);
    if (n.type === 'parent') return n.children.reduce((rAcc, el) => iter(rAcc, el), newAcc);
    return newAcc;
  };
  return iter(initAcc, node);
};

export default reduce;
