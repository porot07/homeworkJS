import User from './newUser';

const simpleUser = new User('John', 25, false);
const admin = new User('Mike', 30, true);

simpleUser.getName();
console.log(simpleUser.age);

admin.getName();
console.log(admin.isAdmin);
