// class Dog
import Animal from './Animal';

export default class Dog extends Animal {
  speak() {
    return `${this.name} says woof`;
  }

  getFavoriteFood() {
    return `${this.name} likes ${this.foodLike}`;
  }

  getName() {
    return `${this.name}`;
  }
}
