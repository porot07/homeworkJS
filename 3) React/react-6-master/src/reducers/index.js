import _ from 'lodash';
import { combineReducers } from 'redux';

const posts = (state = {}, action) => {
  switch (action.type) {
    case 'POST_ADD': return ({ ...state, [action.payload.post.id]: action.payload.post });
    case 'POST_REMOVE': return _.omit(state, [action.payload]);
    default: return state;
  }
};

const comments = (state = {}, action) => {
  switch (action.type) {
    case 'POST_COMMENT_ADD': return ({ ...state, [action.payload.comment.id]: action.payload.comment });
    case 'POST_COMMENT_REMOVE': return _.omit(state, [action.payload]);
    case 'POST_REMOVE': return _.omitBy(state, (comment) => comment.postId === action.payload);
    default: return state;
  }
};

export default combineReducers({
  posts, comments,
});
