import Tag from './Tag';

export default class PairedTag extends Tag {
  constructor(name, attr, body = '', children = []) {
    super(name, attr);
    this.body = body;
    this.children = children;
  }

  toString() {
    return `<${this.name}${this.attrToString()}>${this.body}${this.children.map((tag) => tag.toString()).join('')}</${this.name}>`;
  }
}
