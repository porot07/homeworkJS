import Tag from './Tag';

export default function PairedTag(name, attr, body = '', children = []) {
  Tag.call(this, name, attr);
  this.body = body;
  this.children = children;
}
PairedTag.prototype = Object.create(Tag.prototype);
PairedTag.prototype.toString = function () {
  return `<${this.name}${this.attrToString()}>${this.body}${this.children.map((tag) => tag.toString()).join('')}</${this.name}>`;
};
