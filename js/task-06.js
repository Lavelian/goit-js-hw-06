const inputEl = document.querySelector('input');
console.log(inputEl.dataset.length);
inputEl.addEventListener('blur', event => {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove('invalid');

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
