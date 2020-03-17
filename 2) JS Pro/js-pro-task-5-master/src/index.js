const map = (cb, node) => {
  const newNode = cb(node);
  if (node.type === 'parent') return { ...newNode, children: node.children.map((n) => map(cb, n)) };
  return newNode;
};

export default map;
