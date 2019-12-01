// class Animal
export default class Animal {
  constructor(name, foodLike) {
    this.name = name;
    this.foodLike = foodLike;
  }

  speak() {
    return `${this.name} says`;
  }

  getFavoriteFood() {
    return `${this.name} likes`;
  }

  getName() {
    return `${this.name}`;
  }
}
