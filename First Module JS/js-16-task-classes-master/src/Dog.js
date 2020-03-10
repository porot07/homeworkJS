// class Dog
import Animal from './Animal';

export default class Dog extends Animal {
  speak() {
    return `${this.name} says woof`;
  }
}
