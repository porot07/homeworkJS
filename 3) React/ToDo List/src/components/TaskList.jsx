import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTask } from '../actions';
import Form from './Form';

const TaskContainer = ({
  task,
}) => {
  const dispatch = useDispatch();

  const handleClickChangeMode = () => {
    dispatch(enterEditMode({ id: task.id }));
  };

  return (
    <>
      <div className="tasks-list-title">{task.title}</div>
      <div className="tasks-list-body">{task.body}</div>
      <button type="button" onClick={handleClickChangeMode}>Редактироват</button>
    </>
  );
};

const TaskList = () => {
  const tasks = useSelector((state) => Object.values(state.tasks));

  const dispatch = useDispatch();

  const handleEditTask = (id) => (formValues) => {
    dispatch(editTask({
      task: {
        ...formValues,
        id,
      },
    }));
  };

  return (
    <div className="tasks">
      <h1 className="tasks-title" />
      <div className="tasks-filter" />
      <div className="tasks-list">
        {tasks.map((task) => (
          <div key={task.id} className="tasks-list-item">
             {task.isEditMode
               ? <Form submitTaskForm={handleEditTask(task.id)} className="edit-task" initialValues={task} />
               : <TaskContainer task={task} />
             }
           </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
