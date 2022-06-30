const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', event => {
  if (event.currentTarget.value.length == inputEl.dataset.length) {
    inputEl.classList.remove('valid');

    console.log('Green', inputEl);
    console.log(event.currentTarget.value.length);
    return inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    console.log('Red', inputEl);
    console.log(event.currentTarget.value.length);
    return inputEl.classList.add('invalid');
  }
});
