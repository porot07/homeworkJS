import React from 'react';
import { uniqueId } from 'lodash';

// TaskList component
export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
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
      ],
    };
  }

  activeFn = (id) => () => {
    this.setState({
      tasks: this.state.tasks.map((task) => (task.id === id ? { ...task, state: 'current' } : task))
    })
  }

  finishFn = (id) => () => {
    this.setState({
      tasks: this.state.tasks.map((task) => (task.id === id ? { ...task, state: 'finished' } : task))
    })
  }

  render() {
    const liElements = this.state.tasks.map((el) => (
      <li className={el.state === 'finished' ? 'list-group-item bg-success' : 'list-group-item bg-primary'} key={el.id}>
        <h5>{el.state === 'finished' ? <s>{el.title}</s> : el.title}</h5>
        <p>{el.state === 'finished' ? <s>{el.body}</s> : el.body}</p>
        <button type="button" className="btn btn-info" onClick={this.finishFn(el.id)}>Завершить задачу</button>
        <button type="button" className="btn btn-danger" onClick={this.activeFn(el.id)}>Сделать активной</button>
      </li>));

    return (
        <ul className="list-group-flush">
            {liElements}
        </ul>
    );
  }
}

// import React from 'react';

// export default class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: this.props.users,
//     };
//   }

//   removeUser = (id) => () => {
//     this.setState({
//       users: this.state.users.filter((user) => user.id !== id),
//     });
//   }

//   render() {
//     const { users } = this.state;
//     return (
//       <ul className="list-group list-group-flush">
//         {users.map((user) => (
//           <li className="list-group-item" key={user.id}>
//             <button type="button" className="btn btn-danger mr-5"
//            onClick={this.removeUser(user.id)}>Удалить</button>
//             {user.name}
//           </li>
//         ))}
//       </ul>
//     )
//   }
// }
