# Практическое задание

В файле `src/index.js`:

1. Реализуйте и экспортируйте функцию по умолчанию `map`, которая работает с деревьями. По аналогии с методом `.map()` у массивов, данная функция должна проходить по каждому узлу и применять к нему функцию обработчик.

Данная функция должна принимать 2 аргумента:
1. Функцию-обработчик
2. Дерево

Например:

```js
map(func, tree);
```

Возвращать данная функция должна дерево с измененными узлами.

_Подсказки:_
1. Функция обработчик должна принимать весь узел.
```js
map((node) => ({ ...node, name: node.name.toUpperCase() }), tree);
```

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

const result = map((node) => ({
  ...node,
  name: node.name.toUpperCase(),
}), targaryen);

console.log(result);
// {
//   name: 'AERYS II TARGARYEN',
//   state: 'deceased',
//   type: 'parent',
//   children: [
//     {
//       name: 'RHAEGAR TARGARYEN',
//       state: 'deceased',
//       type: 'parent',
//       children: [
//         { name: 'JON SNOW', type: 'child', },
//         { name: 'RHAENYS TARGARYEN', state: 'deceased', type: 'child' },
//         { name: 'AEGON TARGARYEN', state: 'deceased', type: 'child' },
//       ],
//     },
//     {
//       name: 'VISERYS TARGARYEN',
//       state: 'deceased',
//       type: 'child',
//     },
//     {
//       name: 'DAENERYS TARGARYEN',
//       state: 'deceased',
//       type: 'parent',
//       children: [
//         { name: 'DROGON', type: 'child' },
//         { name: 'RHAEGAL', state: 'deceased', type: 'child' },
//         { name: 'VISERION', state: 'deceased', type: 'child' },
//       ],
//     },
//   ],
// };
```