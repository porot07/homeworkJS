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
    this.body = str;
    if (this.children) return [null, { code: 'ECANTSETBODY' }];
    return [this, null];
  }
}
