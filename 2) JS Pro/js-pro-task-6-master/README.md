# Практическое задание

В файле `src/index.js`:

Реализуйте и экспортируйте по умолчанию функцию `reduce`, работающую с деревьями. Ее сигнатура должна выглядеть так:

```js
reduce(<function>, <tree>, <accumulator>);
```

Данная функция принимает 3 аргумента:

- Функцию-обработчик
- Дерево
- Аккумулятор

То есть, нужно применить данную функцию к каждому узлу. Функция возвращает агрегированные данные

*Функция-обработчик, как и предполагается в обычном методе `reduce`, принимает в виде аргумента аккумулятор и сам узел:*

```js
const result = reduce(
  (acc, node) => acc + 1, // <- 1-й аргумент - функция-обработчик
  tree, // <- 2-й аргумент - дерево
  0, // <- 3-й аргумент - начальное значение аккумулятора
);
```

Подсказки:
1. У нас нет задачи создать универсальную функцию `reduce`, поэтому пускай наша функция всегда принимает начальное значение аккумулятора.
2. Аккумулятор должен прокидывать дальше, в каждый последующий, рекурсивный вызов функции `reduce`.

Пример использования:

```js
const targaryen = {
  name: 'Aerys II Targaryen',
  state: 'deceased',
  type: 'parent',
  children: [
    {
      name: 'Rhaegar Targaryen',
      state: 'deceased',
      type: 'parent',
      children: [
        { name: 'Jon Snow', type: 'child', },
        { name: 'Rhaenys Targaryen', state: 'deceased', type: 'child' },
        { name: 'Aegon Targaryen', state: 'deceased', type: 'child' },
      ],
    },
    {
      name: 'Viserys Targaryen',
      state: 'deceased',
      type: 'child',
    },
    {
      name: 'Daenerys Targaryen',
      state: 'deceased',
      type: 'parent',
      children: [
        { name: 'Drogon', type: 'child' },
        { name: 'Rhaegal', state: 'deceased', type: 'child' },
        { name: 'Viserion', state: 'deceased', type: 'child' },
      ],
    },
  ],
};

const totalDeceased = reduce(
  (acc, node) => node.state === 'deceased' ? acc + 1 : acc, // 1-й аргумент
  targaryen, // 2-й аргумент
  0 // 3-й аргумент
);

console.log(totalDeceased); // 8
```