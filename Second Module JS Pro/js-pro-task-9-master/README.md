# Практическое задание

В файлах `src/Tag.js`, `src/PairedTag.js`, `src/SingularTag.js`:

Необходимо реализовать и экспортировать по умолчанию 3 класса:

Надтип `Tag`:
  - Реализовать общую логику для `SingularTag` и `PairedTag` (Они будут наследоваться от него)
  - Реализуйте метод `getName()`, который будет возвращать имя тэга.

Подтипы `SingularTag` и `PairedTag`:
  - Они должны наследоваться от `Tag` и реализовывать собственную логику.

Поведение `SingularTag` и `PairedTag` должно быть таким же, какое было в предыдущем задании. Должен быть реализован метод `toString()`.

В файле `src/makeTag.js`:

Реализуйте и экспортируйте по умолчанию функцию, которая будет диспетчером. В зависимости от переданного тэга, будет создавать Парный или Одиночны тэги.

Список одиночных тэгов уже прописан у Вас в файле `const singularTags = new Set(['img', 'br', 'input']);`

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
