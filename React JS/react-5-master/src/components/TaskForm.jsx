import React from 'react';

export default class TaskForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Заголовок задачи..."
            value={this.props.title}
            onChange={this.props.changeTitle}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Текст задачи..."
            value={this.props.body}
            onChange={this.props.changeBody}
          />
        </div>
        <button className="btn btn-outline-secondary" type="submit" onClick={this.props.addTask}>Добавить задачу</button>
      </form>
    );
  }
}
