import { uniqueId } from 'lodash';
import createStore from '../src';
import * as actions from '../src/actions';

test('Store', () => {
  const store = createStore();
  expect(store.getState()).toEqual({
    comments: {},
    posts: {},
  });

  store.dispatch(actions.addPost({ id: 1 }));
  expect(store.getState()).toEqual({
    comments: {},
    posts: {
      1: { id: 1 },
    },
  });
  store.dispatch(actions.addPost({ id: 2 }));
  expect(store.getState()).toEqual({
    comments: {},
    posts: {
      1: { id: 1 },
      2: { id: 2 },
    },
  });
  store.dispatch(actions.removePost(2));
  expect(store.getState()).toEqual({
    comments: {},
    posts: {
      1: { id: 1 },
    },
  });
  store.dispatch(actions.addPost({ id: 2 }));
  store.dispatch(actions.addPost({ id: 3 }));
  store.dispatch(actions.addPostComment({ id: 1, postId: 1 }));
  expect(store.getState()).toEqual({
    comments: {
      1: { id: 1, postId: 1 },
    },
    posts: {
      1: { id: 1 },
      2: { id: 2 },
      3: { id: 3 },
    },
  });
  store.dispatch(actions.addPostComment({ id: 2, postId: 1 }));
  store.dispatch(actions.addPostComment({ id: 3, postId: 2 }));
  store.dispatch(actions.addPostComment({ id: 4, postId: 2 }));
  expect(store.getState()).toEqual({
    comments: {
      1: { id: 1, postId: 1 },
      2: { id: 2, postId: 1 },
      3: { id: 3, postId: 2 },
      4: { id: 4, postId: 2 },
    },
    posts: {
      1: { id: 1 },
      2: { id: 2 },
      3: { id: 3 },
    },
  });
  store.dispatch(actions.removePostComment(3));
  expect(store.getState()).toEqual({
    comments: {
      1: { id: 1, postId: 1 },
      2: { id: 2, postId: 1 },
      4: { id: 4, postId: 2 },
    },
    posts: {
      1: { id: 1 },
      2: { id: 2 },
      3: { id: 3 },
    },
  });
  store.dispatch(actions.removePost(1));
  expect(store.getState()).toEqual({
    comments: {
      4: { id: 4, postId: 2 },
    },
    posts: {
      2: { id: 2 },
      3: { id: 3 },
    },
  });
});
