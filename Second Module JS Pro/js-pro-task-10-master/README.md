# Практическое задание

В `src/parse.js`:

Реализуйте и экспортируйте по умолчанию функцию, которая будет парсить вымышленный нами DSL (см. конспект)

Данная функция, должна возвращать AST из наших тэгов.

Например:

```js
const dsl = ['div', { class: 'container' }, [
  ['div', { class: 'row' }, [
    ['div', { class: 'col' }, [
      ['img', { src: 'path/to/file.png', alt: 'picture' } ],
      ['br'],
    ]],
    ['div', { class: 'col' }, [
      ['h1', { class: 'title' }, 'Hello, World!' ],
    ]],
  ]],
]];

parse(dsl);
// PairedTag('div', { class: 'container' }, '', [
//   PairedTag('div', { class: 'row' }, '', [
//     PairedTag('div', { class: 'col' }, '', [
//       SingularTag('img', { src: 'path/to/file.png', alt: 'picture' }),
//       SingularTag('br'),
//     ]),
//     PairedTag('div', { class: 'col' }, '', [
//       PairedTag('h1', { class: 'title' }, 'Hello, World!'),
//     ]),
//   ]),
// ]);
```

Также, обратите внимание на то, что в данном задании уже реализованны `PairedTag`, `SingularTag`, `makeTag` и `Tag`. Вам не нужно создавать их заново. Сосредоточтесь на функции `parse`.

**Подсказки:**

1. Используйте динамическую диспетчеризацию.
2. В этом задании активно используются операторы `spread`, `rest` и `destructuring`.

