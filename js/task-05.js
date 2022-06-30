const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', function (event) {
  if (event.currentTarget.value !== '') {
    return (spanEl.textContent = event.currentTarget.value);
  }
  return (spanEl.textContent = 'Anonymous');
});
