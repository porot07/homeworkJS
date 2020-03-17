import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { omit } from 'lodash';

import * as actions from '../actions';

const tasks = handleActions({
  [actions.addTask](state, { payload: { task } }) {
    return {
      ...state,
      [task.id]: task,
    };
  },
  [actions.removeTask](state, { payload: { id } }) {
    return omit(state, [id]);
  },
  [actions.editTask](state, { payload: { task } }) {
    return {
      ...state,
      [task.id]: task,
    };
  },
}, {});


export default combineReducers({
  tasks,
  form: formReducer,
});
