# Задание "Считаем имена 2"

_**В файле `src/index.js`:**_

1. Напишите и экспортируйте по умолчанию функцию **getUsersNames**, которая принимает 1 аргумент - Массив с объектами. Один объект в массиве это конкретный пользователь. Функция должна возвращать объект типа `Map` в котором ключ будет именем пользователя, а значением количество пользователей c данным именем. В дополнении ко всему у Вас будет список имен которые учитывать не нужно.

_Пример:_

```js
const users = [
  { name: 'Aziz' },
  { name: 'Avaz' },
  { name: 'Ivan' },
  { name: 'John' },
  { name: 'Aziz' },
];

const stopNames = ['Aziz', 'John'];

getUsersNames(users, stopNames);
// Map { 'Avaz' => 1, 'Ivan' => 1 }
```