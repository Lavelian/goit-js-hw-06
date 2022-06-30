const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены');
  }
  console.log(`${email.value}, \n${password.value}`);
  event.currentTarget.reset();
}
