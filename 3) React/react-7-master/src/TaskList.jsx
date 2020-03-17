import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions';

class TaskList extends React.Component {
  delete = (id) => () => {
    const { removePost } = this.props;
    removePost({ id });
  }

  render() {
    const { posts } = this.props;
    const postToArray = Object.values(posts);
    return (
      <ul className="list-group-flush">
        {postToArray.map((task) => (
          <li className="list-group-item" key={task.id}>
            <h3>{task.text}</h3>
          <button type="button" className="btn btn-danger" onClick={this.delete(task.id)}>Удалить</button>
        </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, actionCreators)(TaskList);
