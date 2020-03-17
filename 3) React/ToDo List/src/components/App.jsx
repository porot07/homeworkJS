import React from 'react';
import { useDispatch } from 'react-redux';
import { uniqueId } from 'lodash';
import { addTask } from '../actions';

import Form from './Form';
import TaskList from './TaskList';

const App = () => {
  const dispatch = useDispatch();

  const handleAddTask = (formValues) => {
    dispatch(addTask({
      task: {
        ...formValues,
        isEditMode: false,
        id: uniqueId(),
      },
    }));
  };

  return (
    <div className="wrapper">
      <Form submitTaskForm={handleAddTask} className="add-task" />
      <TaskList />
    </div>
  );
};

export default App;
