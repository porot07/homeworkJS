import users from './users';

export default () => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-deck');

  const cards = users.map((user) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const ul = document.createElement('ul');
    ul.classList.add('list-group-flush');

    const userName = document.createTextNode(user.name);
    const userAge = document.createTextNode(user.info.age);
    const userEmail = document.createTextNode(user.info.email);

    const liAge = document.createElement('li');
    liAge.classList.add('list-item');

    const liEmail = document.createElement('li');
    liEmail.classList.add('list-item');

    liAge.appendChild(userAge);
    liEmail.appendChild(userEmail);
    ul.appendChild(liAge);
    ul.appendChild(liEmail);
    cardHeader.appendChild(userName);
    cardBody.appendChild(ul);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    return card;
  });
  cards.forEach((li) => cardContainer.appendChild(li));
  const container = document.getElementById('container');
  container.appendChild(cardContainer);
};


// <div class="card">
//         <div class="card-header">Jon</div>
//         <div class="card-body">
//           <ul class="list-group-flush">
//             <li class="list-item">20</li>
//             <li class="list-item">jon@winter.com</li>
//           </ul>
//         </div>
//       </div>
