export default class Tag {
  constructor(name, attr = []) {
    this.name = name;
    this.attr = attr;
  }

  attrToString() {
    return Object.keys(this.attr).map((attrName) => ` ${attrName}="${this.attr[attrName]}"`).join('');
  }

  getName() {
    return this.name;
  }
}
