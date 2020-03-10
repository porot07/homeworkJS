export default class Collection {
  constructor(coll = []) {
    this.coll = coll;
  }

  filter(fn) {
    const newColl = this.coll.filter(fn);
    return new Collection(newColl);
  }

  chooseBy(fn) {
    const newColl = this.coll.map(fn);
    return new Collection(newColl);
  }

  sortBy(fn) {
    const newColl = this.coll.slice();
    newColl.sort((a, b) => fn(a) - fn(b));
    return new Collection(newColl);
  }

  toArray() {
    return this.coll;
  }
}
