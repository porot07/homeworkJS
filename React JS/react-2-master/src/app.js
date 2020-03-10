export default () => {
  const form = document.querySelector('.form-group-inline');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = formData.get('task');
    const textValue = document.createTextNode(values);
    const ul = document.querySelector('#tasks');
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.append(textValue);
    ul.prepend(li);
  });
};
