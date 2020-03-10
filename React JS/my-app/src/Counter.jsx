import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
    };
  }

  removeUser = (id) => () => {
    this.setState({
      users: this.state.users.filter((user) => user.id !== id),
    });
  }

  render() {
    const { users } = this.state;
    return (
      <ul className="list-group list-group-flush">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            <button type="button" className="btn btn-danger mr-5" onClick={this.removeUser(user.id)}>Удалить</button>
            {user.name}
          </li>
        ))}
      </ul>
    )
  }
}
