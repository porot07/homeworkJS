# Практическое задание DOM \#2

В файле `src/app.js` реализуйте и экспортируйте функцию по умолчанию, которая выполняет всю логику:

Дана верстка:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App!</title>
</head>
<body>
  <div id="container" class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form class="form-group-inline">
          <div class="input-group">
            <input type="text" class="form-control" name="task">
            <div class="input-group-append">
              <button type="submit" class="btn btn-primary">Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <ul id="tasks" class="list-group"></ul>
      </div>
    </div>
  </div>
</body>
</html>
```

Вам необходимо получать данные из формы и отрисовывать их в виде списка в контейнере `ul#tasks`.

Логика:
1. Пользователь вводит данные и нажимает кнопку "Add".
2. Данные отображаются на странице без перезагрузки.
3. Последние введенные данные отображаются сверху списка.

То есть после трех добавленных задач, html должен быть таким:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App!</title>
</head>
<body>
  <div id="container" class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form class="form-group-inline">
          <div class="input-group">
            <input type="text" class="form-control" name="task">
            <div class="input-group-append">
              <button type="submit" class="btn btn-primary">Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <ul id="tasks" class="list-group">
          <li class="list-group-item">3</li>
          <li class="list-group-item">2</li>
          <li class="list-group-item">1</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>
```