export default class Collection {
  constructor(coll = [], operations = []) {
    this.coll = coll;
    this.operations = operations;
  }

  filter(fn) {
    const operation = (coll) => coll.filter(fn);
    const newOperations = [...this.operations, operation];
    return new Collection(this.coll, newOperations);
  }

  chooseBy(fn) {
    const operation = (coll) => coll.map(fn);
    const newOperations = [...this.operations, operation];
    return new Collection(this.coll, newOperations);
  }

  sortBy(fn) {
    const operation = (coll) => {
      const newColl = coll.slice();
      return newColl.sort((a, b) => fn(a) - fn(b));
    };
    const newOperations = [...this.operations, operation];
    return new Collection(this.coll, newOperations);
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, op) => op(acc), this.coll);
    }
    const result = this.memo.map((el) => el);
    return result;
  }

  get length() {
    this.toArray();
    return this.memo.length;
  }
}
