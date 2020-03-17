# Практическое задание React \#1

В файле `src/TaskList.jsx` реализуйте и экспортируйте по умолчанию компонент `TaskList`, который отрисовывает список задач. Тестовый список задач можно посмотреть в файле `src/index.js`. Компонент должен принимать данный список в виде "пропсов".

Ваш компонент должен реализовывать следующий html код:

```html
<ul className="list-group-flush">
  <li className="list-group-item bg-primary">
    <h5>Learn React</h5>
    <p>I should learn react</p>
  </li>
  <li className="list-group-item bg-success">
    <h5>
      <s>Learn JS</s>
    </h5>
    <p>
      <s>Yay!</s>
    </p>
  </li>
  <li className="list-group-item bg-success">
    <h5>
      <s>Learn HTML</s>
    </h5>
    <p>
      <s>DONE!</s>
    </p>
  </li>
  <li className="list-group-item bg-primary">
    <h5>Learn Redux</h5>
    <p>Should learn after React</p>
  </li>
</ul>
```

Обратите внимание, что задачи, у которых статус "finished" должны иметь зеленый цвет фона (класс `.bg-success`) и зачеркнутый текст (тег `<s>`).

Структура списка задач такая:

```js
const tasks = [
  {
    id: uniqueId(), title: 'Learn React', body: 'I should learn react', state: 'current',
  },
  {
    id: uniqueId(), title: 'Learn JS', body: 'Yay!', state: 'finished',
  },
  {
    id: uniqueId(), title: 'Learn HTML', body: 'DONE!', state: 'finished',
  },
  {
    id: uniqueId(), title: 'Learn Redux', body: 'Should learn after React', state: 'current',
  },
];
```
