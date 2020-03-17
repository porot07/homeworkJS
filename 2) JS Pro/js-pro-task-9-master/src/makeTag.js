import SingularTag from './SingularTag';
import PairedTag from './PairedTag';

const singularTags = new Set(['img', 'br', 'input']);

export default (name, attr, body, children) => {
  if (singularTags.has(name)) return new SingularTag(name, attr);
  return new PairedTag(name, attr, body, children);
};
