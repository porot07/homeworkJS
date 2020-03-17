const host = 'https://jsonplaceholder.typicode.com';

export default {
  posts: () => [host, 'posts'].join('/'),
  post: (id) => [host, 'posts', id].join('/'),
  users: () => [host, 'users'].join('/'),
  comments: () => [host, 'comments'].join('/'),
};
