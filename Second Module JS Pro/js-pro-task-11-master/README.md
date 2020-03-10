# Практическое задание

Необходимо реализовать классы, как это делалось раньше - с помощью функций. Задача повторяется из предыдущей самостоятельной работы ([js-pro-task-9](https://github.com/knowledgeuz/js-pro-task-9)):

В файлах `src/Tag.js`, `src/PairedTag.js`, `src/SingularTag.js`:

Необходимо реализовать и экспортировать по умолчанию 3 функции-конструктора:

Надтип `Tag`:
  - Реализовать общую логику для `SingularTag` и `PairedTag` (Они будут наследоваться от него)
  - Реализуйте метод `getName()`, который будет возвращать имя тэга.

Подтипы `SingularTag` и `PairedTag`:
  - Они должны наследоваться от `Tag` и реализовывать собственную логику.

Поведение `SingularTag` и `PairedTag` должно быть таким же, какое было в предыдущем задании. Должен быть реализован метод `toString()`.

Файл `src/makeTag.js` уже реализован - его можете не трогать.

Пример:

```js
const tree = makeTag('div', { id: 'container' }, '', [
  makeTag('div', { class: 'row' }, '', [
    makeTag('div', { class: 'col' }, '', [
      makeTag('img', { src: 'path/to/file.png' }),
      makeTag('br'),
    ]),
    makeTag('div', { class: 'col' }, '', [
      makeTag('h1', { class: 'title' }, 'Hello, World!'),
    ])
  ]),
]);

tree.toString();
// <div id="container">
//   <div class="row">
//     <div class="col">
//       <img src="path/to/file/png" />
//       <br />
//     </div>
//     <div class="col">
//       <h1 class="title">Hello, World!</h1>
//     </div>
//   </div>
// </div>
```

Подсказки:
1. [Наследования](https://developer.mozilla.org/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/Inheritance)
2. [Прототипы](https://developer.mozilla.org/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/Object_prototypes)