# Практическое задание React \#3

В этом задании Вам нужно будет реализовать недостающий функционал для приложения менеджера задач.

В директории `src/components` есть 3 компонента:
- `TaskContainer.jsx` - Компонент, который объединяет в себя два других компонента - `TaskForm` и `TaskList`.
- `TaskForm.jsx` - Компонент для формы (Добавление новой задачи)
- `TaskList.jsx` - Компонент для отрисовки списка задач

Ваша задача реализовать все 3 компонента.

В целом, приложение должно выглядеть и работать так:
![./example.gif](./example.gif)
(Если гифка не проигрывается, то она находится в корне проекта (`example.gif`))

**HTML для `TaskForm` должен быть таким:**

```html
<form>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Заголовок задачи..." />
  </div>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Текст задачи..." />
  </div>
  <button class="btn btn-outline-secondary" type="submit">Добавить задачу</button>
</form>
```

**HTML для `TaskList` должен быть таким:**

```html
<div class="row">
    <div class="col-3">
      <div class="card m-2 text-white bg-primary"> <!-- или <div class="card m-2 text-white bg-danger">  -->
        <div class="card-header">
          <h3 class="card-title">Заголовок задачи</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Тело задачи</p>
        </div>
        <div className="card-footer">
          <button type="button" class="btn btn-outline-light">Удалить задачу</button>
          <!-- или
          <button type="button" class="btn btn-outline-light">Завершить задачу</button>
          -->
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="card m-2 text-white bg-primary"> <!-- или <div class="card m-2 text-white bg-danger">  -->
        <div class="card-header">
          <h3 class="card-title">Еще задача</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Еще Тело задачи</p>
        </div>
        <div className="card-footer">
          <button type="button" class="btn btn-outline-light">Удалить задачу</button>
          <!-- или
          <button type="button" class="btn btn-outline-light">Завершить задачу</button>
          -->
        </div>
      </div>
    </div>
</div>
```

Общий HTML:

```html
<div className="container">
  <div className="row">
    <div className="col-12">
      <form>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Заголовок задачи..." />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Текст задачи..." />
        </div>
        <button class="btn btn-outline-secondary" type="submit">Добавить задачу</button>
      </form>
    </div>
    <div className="col-12">
      <div class="row">
        <div class="col-3">
          <div class="card m-2 text-white bg-primary"> <!-- или <div class="card m-2 text-white bg-danger">  -->
            <div class="card-header">
              <h3 class="card-title">Заголовок задачи</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Тело задачи</p>
            </div>
            <div className="card-footer">
              <button type="button" class="btn btn-outline-light">Удалить задачу</button>
              <!-- или
              <button type="button" class="btn btn-outline-light">Завершить задачу</button>
              -->
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card m-2 text-white bg-primary"> <!-- или <div class="card m-2 text-white bg-danger">  -->
            <div class="card-header">
              <h3 class="card-title">Еще задача</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Еще Тело задачи</p>
            </div>
            <div className="card-footer">
              <button type="button" class="btn btn-outline-light">Удалить задачу</button>
              <!-- или
              <button type="button" class="btn btn-outline-light">Завершить задачу</button>
              -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

Подсказки:
1. Состояние должно быть только в одном компоненте - `TaskContainer`. Дочерние компоненты должны получать нужные части состояния через пропсы
2. Не забывайте про обработчики, они также должны быть инициализированны в родительском компоненте.
3. При добавлении задачи, форма должны очищаться.