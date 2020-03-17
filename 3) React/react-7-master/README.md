# Практическое задание React \#5

В данном задании необходимо реализовать добавление поста, но в отличие от предыдущих заданий, нужно хранить все посты в Редаксе.

### В файле `src/reducers/index.js`:

- Реализуйте обработку двух экшенов `addPost` и `removePost`.
- Структура контейнера должна быть такой:

```js
{
  posts: {
    1: { id: 1, text: 'Hello, world!' },
    2: { id: 2, text: 'Привет, мир!' },
    3: { id: 3, text: 'Это мой первый пост!' },
    4: { id: 4, text: 'Тестовый пост!' },
  }
}
```

**Подсказки:**

1. В `combineReducers()` можно передавать как множество редьюсеров, так и один.
2. Создавайте для каждого поста уникальный `id` с помощью `uniqueId()` библиотеки `lodash`.

### В файле `src/actions/index.js`:

- Реализуйте два экшена `addPost` и `removePost`.

**Вы должны использовать библиотеку `redux-actions`**


### В файле `src/Form.jsx`:

- Реализуйте компонент формы добавления поста. HTML должен быть таким:

```html
<form>
  <div class="input-group">
    <input type="text" name="title" class="form-control" />
    <div class="input-group-append">
      <button type="submit" class="btn btn-primary">Опубликовать</button>
    </div>
  </div>
</form>
```

**Подсказки**

1. Не забывайте что Вы должны вызвать `action` `addPost` на событии `onSubmit` формы.
2. `input` должен быть контролируемый. Промежуточные значения храните в локальном стейте (`state`).
3. Не забывайте очищать форму, после добавления задачи.

### В файле `src/TaskList.jsx`:

- Реализуйте компонент отрисовки всех постов. HTML должен быть таким:

```html
<ul class="list-group-flush">
  <li class="list-group-item">
    <h3>Hello, World!</h3>
    <button type="button" class="btn btn-danger">Удалить</button>
  </li>
  <li class="list-group-item">
    <h3>Привет, Мир!</h3>
    <button type="button" class="btn btn-danger">Удалить</button>
  </li>
  <li class="list-group-item">
    <h3>Это мой первый!</h3>
    <button type="button" class="btn btn-danger">Удалить</button>
  </li>
  <li class="list-group-item">
    <h3>Тестовый пост!</h3>
    <button type="button" class="btn btn-danger">Удалить</button>
  </li>
</ul>
```

**Подсказки:**

1. Все посты можно отрендерить с помощью массива.
2. Не забывайте что получить данные Вы должны из общего контейнера.
3. `Object.values(obj)` - возвращает массив значений объекта `obj`.
4. Установите расширение для браузера redux-dev-tools. В данном проекте он уже настроен и Вы можете заниматься отладкой контейнера редакс.

