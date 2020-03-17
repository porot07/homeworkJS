# Практическое задание DOM \#1

В файле `src/app.js` реализуйте и экспортируйте функцию по умолчанию, которая генерирует карточки с информацией по пользователю.

Изначально, у Вас есть шаблон HTML, который выглядет так:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App!</title>
</head>
<body>
  <div id="container"></div>
</body>
</html>
```

Вам необходимо внедрить нужны HTML в `div#container`. Пользоваться `innerHTML` НЕЛЬЗЯ!

Список пользователей сразу создан в файле `src/users.js`.

Вы должны использовать только специальные методы, которые создают элементы, добавляют классы и пр.

В итоге у Вас должна получиться вот такая верстка:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App!</title>
</head>
<body>
  <div id="container">
    <div class="card-deck">
      <div class="card">
        <div class="card-header">Jon</div>
        <div class="card-body">
          <ul class="list-group-flush">
            <li class="list-item">20</li>
            <li class="list-item">jon@winter.com</li>
          </ul>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Daenerys</div>
        <div class="card-body">
          <ul class="list-group-flush">
            <li class="list-item">19</li>
            <li class="list-item">daenerys@dragons.com</li>
          </ul>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Eddard</div>
        <div class="card-body">
          <ul class="list-group-flush">
            <li class="list-item">45</li>
            <li class="list-item">eddard@winter.com</li>
          </ul>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Cersei</div>
        <div class="card-body">
          <ul class="list-group-flush">
            <li class="list-item">35</li>
            <li class="list-item">cersei@shame.com</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

**Подсказки:**
1. У вас есть возможность посмотреть написанный Вами код в бразуере. Для этого запустите команду `npm run dev`;
2. Если хотите, то можете сбилдить проект, запустив команду `npm run build`;
3. К проекту уже подключен Bootstrap. Так что стили уже прописаны, Вам лишь нужно указать правильные классы.