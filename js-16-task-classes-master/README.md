# Практическое задание на классы

**_В файле `src/Animal.js`:_**

- Реализуйте и экспортируйте по умолчанию класс надтип __Animal__. Подумайте какие свойства должны быть общие у всех животных (В контексте задания, а не в принципе).

**_В файлах `src/Cat.js` и `src/Dog.js`:_**

- Реализуйте и экспортируйте по умолчанию подтипы __Cat__ и __Dog__ в  соответствующих файлах (`src/Cat.js` и `src/Dog.js`).

**_Требования:_**

- Животные должны уметь "говорить", например: "Barsik says meow". (Реализовать метод `speak`)
- Мы должны иметь возможность узнать любимое блюдо питомца. (Реализовать метод `getFavoriteFood`)
- Мы должны иметь возможность узнать имя питомца. (Реализовать метод `getName`)

__*Пример использования:*__

```js
const barsik = new Cat('Barsik', 'fish');
barsik.speak(); // 'Barsik says meow'
barsik.getFavoriteFood(); // 'Barsik likes fish'

const sharik = new Dog('Sharik', 'bone');
sharik.speak(); // 'Sharik says woof'
sharik.getFavoriteFood(); // 'Sharik likes bone'

sharik.getName(); // 'Sharik'
```
