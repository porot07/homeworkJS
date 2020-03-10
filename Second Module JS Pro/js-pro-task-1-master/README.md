# Практическое Задание 1.

В `src/Collection.js` необходимо реализовать и экспортировать по умолчанию класс `Collection`, в котором будут реализованны методы:
  1. `filter(func)` - Фильтрует коллекцию исходя из переданной функции
  2. `sortBy(func)` - Сортирует коллекцию на основе переданной функции
  3. `chooseBy(func)` - Выбирает определенные поля в объекте, исходя из переданной функции (тоже что и метод `map` у массивов).
  4. `toArray()` - возвращает результирующий массив.

Класс должен поддерживать `fluent interface` и быть иммутабельным.
Если в момент создания коллекции не передаются значения, то должны быть создана пустая коллекция.

Пример использования класса:

```js
const users = [
  { name: 'Eddard', secondName: 'Stark', age: 45 },
  { name: 'Daenerys', secondName: 'Targaryen', age: 16 },
  { name: 'Cersei', secondName: 'Lannister', age: 40 },
  { name: 'Jon', secondName: 'Snow', age: 18 },
];
const coll = new Collection(users);
const collFilteredByAge = coll.filter((user) => user.age >= 18);
collFilteredByAge.chooseBy((user) => user.name);
// ['Eddard', 'Cersei', 'Jon']
collFilteredByAge.chooseBy((user) => user.secondName);
// ['Stark', 'Lannister', 'Snow']


const coll2 = new Collection(users);
const result = coll2
  .filter((user) => user.age >= 18)
  .sortBy((user) => user.age)
  .chooseBy((user) => user.secondName)
  .toArray();

console.log(result); // ['Snow', 'Lannister', 'Stark']


const emptyColl = new Collection();
emptyColl.toArray(); // []
```