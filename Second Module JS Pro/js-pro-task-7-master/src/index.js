const parse = (dsl) => {
  const [name, children] = dsl;
  if (children) {
    return {
      name,
      type: 'internal',
      children: children.map(parse),
    };
  }
  return {
    name,
    type: 'leaf',
  };
};

export default parse;
