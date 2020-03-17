import Tag from './Tag';

function SingularTag(name, attr) {
  Tag.call(this, name, attr);
}
SingularTag.prototype = Object.create(Tag.prototype);
SingularTag.prototype.toString = function () {
  return `<${this.name}${this.attrToString()} />`;
};

export default SingularTag;
