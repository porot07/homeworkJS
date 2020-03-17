// class Cat
import Animal from './Animal';

export default class Cat extends Animal {
  speak() {
    return `${this.name} says meow`;
  }
}
