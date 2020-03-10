import SingularTag from './SingularTag';
import PairedTag from './PairedTag';

const singularTags = new Set(['img', 'br', 'input']);

export default (name, attributes, body, children) => {
  if (singularTags.has(name)) return new SingularTag(name, attributes);
  return new PairedTag(name, attributes, body, children);
};
