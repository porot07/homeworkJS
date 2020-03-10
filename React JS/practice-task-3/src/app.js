import {
  getPosts, getUsers, getPost, getPostsByUser,
} from './actions';
import state from './state';

const createLink = (cb, body, isShowModal) => {
  const a = document.createElement('a');
  a.setAttribute('href', '#');
  if (isShowModal) {
    a.setAttribute('data-toggle', 'modal');
    a.setAttribute('data-target', '#modal');
  }
  a.append(body);
  a.addEventListener('click', cb);
  return a;
};

const handlePostTitleClick = (postId) => async (e) => {
  e.preventDefault();
  const modalTitle = document.querySelector('#modal-title');
  const modalBody = document.querySelector('#modal-body');
  modalTitle.innerHTML = 'wait';
  modalBody.innerHTML = 'wait';
  await getPost(postId);

  modalTitle.innerHTML = state.post.title;
  modalBody.innerHTML = state.post.body;
};

const render = () => {
  const ul = document.createElement('ul');
  ul.classList.add('list-group-flush');
  const postIds = Object.keys(state.posts);
  postIds.forEach((postId) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    const postTextNode = document.createTextNode(state.posts[postId].title);
    const aTitle = createLink(handlePostTitleClick(postId), postTextNode, true);

    const { userId } = state.posts[postId];
    const userTextNode = document.createTextNode(` (${state.users[userId].name})`);
    const aUser = createLink(async (e) => {
      e.preventDefault();
      await getPostsByUser(userId);

      render();
    }, userTextNode, false);

    li.append(aTitle);
    li.append(aUser);
    ul.append(li);
  });
  document.querySelector('#container').innerHTML = '';
  document.querySelector('#container').append(ul);
};

export default async () => {
  await getPosts();
  await getUsers();
  document.querySelector('#show-all').addEventListener('click', async (e) => {
    e.preventDefault();
    await getPosts();
    render();
  });
  render();
};
