# Практическая работа 4

1. Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход один аргумент:
  - древовидную структуру (см. пример)

Функция должна возвращать строку, где будут перечисленны все имена (поля `name`) через запятую.

Структура внутреннего узла выглядит так:

```js
{
  name: 'Rhaegar Targaryen',
  type: 'parent',
  children: [/* child nodes */],
}
```

Структура листового узла выглядит так:

```js
{
  name: 'Jon Snow',
  type: 'child',
}
```

Пример:

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

const result = toString(targaryen);
console.log(result);
// 'Aerys II Targaryen, Rhaegar Targaryen, Jon Snow, Rhaenys Targaryen, Aegon Targaryen, Viserys Targaryen, Daenerys Targaryen, Drogon, Rhaegal, Viserion'
```
