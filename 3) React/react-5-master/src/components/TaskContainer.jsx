import React from 'react';
import { uniqueId } from 'lodash';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: '',
      bodyValue: '',
      taskList: [],
    };
  }

  changeTitle = (e) => {
    e.preventDefault();
    this.setState({
      titleValue: e.target.value,
    });
  }

  changeBody = (e) => {
    e.preventDefault();
    this.setState({
      bodyValue: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      taskList: [
        {
          id: uniqueId(), title: this.state.titleValue, body: this.state.bodyValue, state: 'finish',
        },
        ...this.state.taskList,
      ],
      titleValue: '',
      bodyValue: '',
    });
  }

  finishTask = (id) => () => {
    this.setState({
      taskList: this.state.taskList.map((task) => (task.id === id
        ? { ...task, state: 'delete' }
        : task)),
    });
  }

  deleteTask = (id) => () => {
    this.setState({
      taskList: this.state.taskList.filter((task) => task.id !== id),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TaskForm
              title={this.state.titleValue}
              body={this.state.bodyValue}
              changeTitle={this.changeTitle}
              changeBody={this.changeBody}
              submit={this.onSubmit}
            />
          </div>
          <div className="col-12">
            <TaskList
              tasks={this.state.taskList}
              finish={this.finishTask}
              delete={this.deleteTask}
            />
          </div>
        </div>
      </div>
    );
  }
}
