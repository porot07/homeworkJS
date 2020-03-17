import React from 'react';

export default class TaskList extends React.Component {
  render() {
    const liElements = this.props.tasks.map((el) => (
      <li className={el.state === 'finished' ? 'list-group-item bg-success' : 'list-group-item bg-primary'} key={el.id}>
        <h5>{el.state === 'finished' ? <s>{el.title}</s> : el.title}</h5>
        <p>{el.state === 'finished' ? <s>{el.body}</s> : el.body}</p>
      </li>));

    return (
        <ul className="list-group-flush">
            {liElements}
        </ul>
    );
  }
}
