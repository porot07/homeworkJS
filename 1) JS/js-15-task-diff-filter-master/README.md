# Задание "Гуси"

_**В файле `src/index.js`:**_

1. Напишите и экспортируйте по умолчанию функцию **diffFilter**, которая принимает 2 аргумента - 2 множества. Возвращать функция должна тоже множество, в котором будут элементы из первого множества, которых нет во втором. Те же самые Стоп слова.

**Например:**

```js
const geese = new Set(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]);
const all = new Set(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);

diffFilter(all, geese);
// Set { "Mallard", "Hook Bill", "Crested", "Blue Swedish" }
```
