# Практическое задание

Реализуйте и экспортируйте по умолчанию функцию `parse`, которая умеет парсить выдуманный нами DSL язык в AST.

Сам язык достаточно прост, вот пример листового узла:

```js
['nodeName']
```

Вот пример внутреннего узла:

```js
['nodeName', [
  ['leaf'],
  ['leaf'],
]]
```

Как видно из примеров,

1. Массив, состоящий из одного элемента является листовым узлом.
2. Массив, состоящий из двух элементов является внутренним узлом. При этом второй элемент - дети. Дети это всегда массив, состоящий из узлов (т.е других массивов)

Функция `parse` должна возвращать AST следующего вида:

```js
const ast = {
  name: 'nodeName',
  type: 'internal',
  children: [
    {
      name: 'nodeName',
      type: 'internal',
      children: [
        { name: 'nodeName', type: 'leaf' },
        { name: 'nodeName', type: 'leaf' },
      ],
    },
    {
      name: 'nodeName',
      type: 'internal',
      children: [
        { name: 'nodeName', type: 'leaf' },
        { name: 'nodeName', type: 'leaf' },
      ],
    },
  ],
};
```

- `nodeName` - это имя узла;
- `type: internal` - если узел внутренний;
- `type: leaf` - усли узел листовой;
- У листовых узлов не может быть детей, т.е. поля `children`.

Пример использования:

```js
import parse from '../src/index.js';

const dsl = [
  'grandpa', [
    ['dad', [
      ['me'],
      ['brother']
    ]],
    ['aunt', [
      ['cousin'],
      ['cousin'],
    ]],
  ]
];

const ast = parse(dsl);
console.log(ast);
// {
//   name: 'grandpa',
//   type: 'internal',
//   children: [
//     {
//       name: 'dad',
//       type: 'internal',
//       children: [
//         { name: 'me', type: 'leaf' },
//         { name: 'brother', type: 'leaf' },
//       ],
//     },
//     {
//       name: 'aunt',
//       type: 'internal',
//       children: [
//         { name: 'cousin', type: 'leaf' },
//         { name: 'cousin', type: 'leaf' },
//       ],
//     },
//   ],
// }
```