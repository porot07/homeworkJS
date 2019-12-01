// class Cat
import Animal from './Animal';

export default class Cat extends Animal {
  speak() {
    return `${this.name} says meow`;
  }

  getFavoriteFood() {
    return `${this.name} likes ${this.foodLike}`;
  }

  getName() {
    return `${this.name}`;
  }
}
