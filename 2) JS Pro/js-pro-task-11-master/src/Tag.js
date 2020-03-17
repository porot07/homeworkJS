function Tag(name, attr = {}) {
  this.name = name;
  this.attr = attr;
}

Tag.prototype.attrToString = function () {
  return Object.keys(this.attr).map((attrName) => ` ${attrName}="${this.attr[attrName]}"`).join('');
};

Tag.prototype.getName = function () {
  return this.name;
};

export default Tag;
