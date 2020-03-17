# Практическое задание React #2

В файле `src/TaskList.jsx` реализуйте и экспортируйте по умолчанию компонент `TaskList`,  который отрисовывает список задач. Список задач изначально создан в состоянии компонента.

Отличием от предыдущей работы является то, что теперь у нас появились 2 кнопки у каждой задачи:
1. "Завершить задачу"
2. "Сделать активной"

Как это должно выглядеть примерно:
![](example.png)

При клике на кнопку "Завершить задачу", эта задача должна менять цвет фона на зеленый, а текст должен становиться зачеркнутым.

При клике на кнопку "Сделать активной" наоборот, задача должна менять цвет на синий и текст должен становиться обычным.

HTML при самом первом рендере:

```html
<ul class="list-group-flush">
  <li class="list-group-item bg-primary">
    <h5>Learn React</h5>
    <p>I should learn react</p>
    <button type="button" class="btn btn-info">Завершить задачу</button>
    <button type="button" class="btn btn-danger">Сделать активной</button>
  </li>
  <li class="list-group-item bg-success">
    <h5>
      <s>Learn JS</s>
    </h5>
    <p>
      <s>Yay!</s>
    </p>
    <button type="button" class="btn btn-info">Завершить задачу</button>
    <button type="button" class="btn btn-danger">Сделать активной</button>
  </li>
  <li class="list-group-item bg-success">
    <h5>
      <s>Learn HTML</s>
    </h5>
    <p>
      <s>DONE!</s>
    </p>
    <button type="button" class="btn btn-info">Завершить задачу</button>
    <button type="button" class="btn btn-danger">Сделать активной</button>
  </li>
  <li class="list-group-item bg-primary">
    <h5>Learn Redux</h5>
    <p>Should learn after React</p>
    <button type="button" class="btn btn-info">Завершить задачу</button>
    <button type="button" class="btn btn-danger">Сделать активной</button>
  </li>
</ul>
```

При нажатии "Завершить задачу" на первой задаче (Learn React) элемент `<li>` должен поменяться так:

```html
<li class="list-group-item bg-success">
  <h5>
    <s>Learn React</s>
  </h5>
  <p>
    <s>I should learn react</s>
  </p>
  <button type="button" class="btn btn-info">Завершить задачу</button>
  <button type="button" class="btn btn-danger">Сделать активной</button>
</li>
```
Остальная часть меняться не должна.

**Подсказки:**
1. Вы НЕ должны громоздить на каждую кнопку отдельный обработчик. Что Вы будете делать, если задач станет больше? Или появится возможность добавлять новую задачу?
2. Вспомните про замыкания. Можно создавать обработчик (функцию) из другой функции. Нужные данные прокидывать с помощью замыкания.
3. У задач могут быть одинаковые названия или текст. Поэтому менять задачу нужно строго по ID.
