const toString = ({ name, type, children }) => (type === 'parent'
  ? `${name}, ${children.map((node) => toString(node)).join(', ')}`
  : name);

export default toString;
