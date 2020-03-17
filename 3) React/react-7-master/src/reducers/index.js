import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { uniqueId, omit } from 'lodash';
import * as actions from '../actions';


const posts = handleActions({
  [actions.addPost](state, { payload: { text } }) {
    const newPost = { id: uniqueId(), text };
    return { ...state, [newPost.id]: newPost };
  },
  [actions.removePost](state, { payload: { id } }) {
    return omit(state, [id]);
  },
}, {});

export default combineReducers({
  posts,
});
