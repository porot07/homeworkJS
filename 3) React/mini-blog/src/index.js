import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

fetch('https://jsonplaceholder.typicode.com/posts ')
  .then((posts) => posts.json())
  .then((posts) => {
    let idArr = [];
    posts.forEach((post) => {
      const { title } = post;
      const titleText = document.createTextNode(title);
      const header = document.createElement('div');
      header.classList.add('col-8');
      header.append(titleText);
      const divRow = document.querySelector('.row');
      divRow.append(header);
    });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((users) => users.json())
      .then((users) => {
        users.forEach((user) => {
          posts.map((post) => {
            if (user.id === post.userId) {
              const divCol4 = document.createElement('div');
              divCol4.classList.add('col-4');
              const userName = document.createTextNode(user.name);
              divCol4.append(userName);
              
            }
          });
        });
      });
  })
  .catch((err) => {
    throw err;
  });
