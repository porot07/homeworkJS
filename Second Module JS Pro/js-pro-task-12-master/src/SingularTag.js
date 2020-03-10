import Tag from './Tag';

export default class SingularTag extends Tag {
  toString() {
    return `<${this.name}${this.attrToString()} />`;
  }
}
