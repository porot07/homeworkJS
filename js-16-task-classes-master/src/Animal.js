// class Animal
export default class Animal {
  constructor(name, foodLike) {
    this.name = name;
    this.foodLike = foodLike;
  }

  getFavoriteFood() {
    return `${this.name} likes ${this.foodLike}`;
  }

  getName() {
    return `${this.name}`;
  }
}
