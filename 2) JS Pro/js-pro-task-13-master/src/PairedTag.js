import Tag from './Tag';

export default class PairedTag extends Tag {
  constructor(name, attr, body = '', children = []) {
    super(name, attr);
    this.body = body;
    this.children = children;
  }

  appendChild(tag) {
    this.children = [...this.children, tag];
  }

  toString() {
    return `<${this.name}${this.attrToString()}>${this.body}${this.children.map((tag) => tag.toString()).join('')}</${this.name}>`;
  }

  setBody(str) {
    if (this.children.length > 0) throw new Error('ECANTSETBODY');
    this.body = str;
  }

  removeChildren(tagName) {
    const error = this.children.find((tag) => tagName === tag.getName() && tag.children);
    if (error) throw new Error('EPERM');
    this.children = this.children.filter((tag) => tag.getName() !== tagName);
  }
}
