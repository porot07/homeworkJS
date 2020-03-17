# Практическое задание

В файлах `src/PairedTag.js` и `src/SingularTag`:

Реализуйте два класса и экспортируйте их по умолчанию.

Конструктор `PairedTag` принимает 4 аргумента:
- Имя HTML элемента (строка)
- Атрибуты HTML элемента (объект)
- Тело элемента, текст (строка)
- Дети элемента. Каждый элемент массива это такой же экземпляр класса `PairedTag` или `SingularTag` (массив)

Конструктор `SingularTag` принимает 2 аргумента:
- Строку - Имя HTML элемента
- Объект - Атрибуты HTML элемента

Оба конструктора должны иметь метод `toString()`, который формирует и возвращает СТРОКУ HTML, например `<div>Hello</div>`.

Пример их использования:

```js
import PairedTag from './PairedTag';
import SingularTag from './SingularTag';

const div = new PairedTag('div', { class: 'container' }, 'Hello, World!');
div.toString();
// '<div class="container">Hello, World!</div>';

const tree = new PairedTag(
  'div',
  { class: 'container' },
  '',
  [new PairedTag('div', { class: 'row' }, 'hello, world!')],
);
tree.toString();
// <div class="container">
//   <div class="row">hello, world!</div>
// </div>

const img = new SingularTag('img', { src: 'image.jpg', alt: 'Picture' });
img.toString();
// <img href="image.jpg" alt="Picture">
```
