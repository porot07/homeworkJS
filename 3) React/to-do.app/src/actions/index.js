import { createActions } from 'redux-actions';

export const addTask = createActions('TASK_ADD');
export const removeTask = createActions('TASK_REMOVE');
export const editTask = createActions('TASK_EDIT');
