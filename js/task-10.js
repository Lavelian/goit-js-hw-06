const divBoxes = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');

function onClickCreate() {
  const value = inputEl.value;
  divBoxes.innerHTML = '';
  createBoxes(value);
}

function createBoxes(amount) {
  const arrBox = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    size += 10;
    const box = document.createElement('div');
    box.style.background = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    arrBox.push(box);
  }
  divBoxes.append(...arrBox);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onDelateListner() {
  buttonCreate.removeEventListener('click', onClickCreate);
}

buttonCreate.addEventListener('click', onClickCreate);
buttonDestroy.addEventListener('click', onDelateListner);
