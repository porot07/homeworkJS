import React from 'react';
import Form from './Form';
import TaskList from './TaskList';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form />
          </div>
          <div className="col-12">
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
