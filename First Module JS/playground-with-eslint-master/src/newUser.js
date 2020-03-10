export default class User {
  constructor(name, age, isAdmin) {
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;
  }
  getName() {
    console.log(this.name);
  }
}
