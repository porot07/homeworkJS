import axios from 'axios';
import routes from './routes';
import state from './state';

export const getPosts = async () => {
  try {
    const response = await axios.get(routes.posts());
    state.posts = response.data.reduce((acc, el) => ({
      ...acc,
      [el.id]: el,
    }), {});
  } catch (e) {
    console.log(e);
  }
};

export const getPost = async (id) => {
  try {
    const response = await axios.get(routes.post(id));
    state.post = response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(routes.users());
    state.users = response.data.reduce((acc, el) => ({
      ...acc,
      [el.id]: el,
    }), {});
  } catch (e) {
    console.log(e);
  }
};

export const getPostsByUser = async (id) => {
  try {
    const response = await axios.get(routes.posts(), {
      params: {
        userId: id,
      },
    });
    state.posts = response.data.reduce((acc, el) => ({
      ...acc,
      [el.id]: el,
    }), {});
  } catch (e) {
    console.log(e);
  }
};
