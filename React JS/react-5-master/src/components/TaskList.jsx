import React from 'react';

export default class TaskList extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.tasks.map((task) => (task.state === 'finish'
          ? <div className="col-3" key={task.id}>
            <div className="card m-2 text-white bg-primary">
              <div className="card-header">
                <h3 className="card-title">{task.title}</h3>
              </div>
              <div className="card-body">
                <p className="card-text">{task.body}</p>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-outline-light" onClick={this.props.finish(task.id)}>Завершить задачу</button>
              </div>
            </div>
          </div>
          : <div className="col-3" key={task.id}>
            <div className="card m-2 text-white bg-danger" key={task.id}>
              <div className="card-header">
                <h3 className="card-title">{task.title}</h3>
              </div>
              <div className="card-body">
                <p className="card-text">{task.body}</p>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-outline-light" onClick={this.props.delete(task.id)}>Удалить задачу</button>
              </div>
            </div>
          </div>))}
      </div>
    );
  }
}
