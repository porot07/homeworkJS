import makeTag from './makeTag';

const props = [
  {
    type: 'body',
    check: (prop) => typeof prop === 'string',
    operation: (body) => body,
  },
  {
    type: 'children',
    check: (prop) => prop instanceof Array,
    operation: (child, cb) => child.map(cb),
  },
  {
    type: 'attr',
    check: (prop) => prop instanceof Object,
    operation: (attr) => attr,
  },
];

const getType = (el) => props.find((prop) => prop.check(el));

const parse = (dsl) => {
  const [name, ...rest] = dsl;
  const root = {
    name,
    attr: {},
    body: '',
    children: [],
  };

  const ast = rest.reduce((acc, el) => {
    const { type, operation } = getType(el);
    return { ...acc, [type]: operation(el, parse) };
  }, root);

  return makeTag(ast.name, ast.attr, ast.body, ast.children);
};

export default parse;
