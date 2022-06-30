const spanEl = document.querySelector('#value');
const buttonInc = document.querySelector('button[data-action="increment"]');
const buttonDec = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;
function increment() {
  counterValue += 1;
}

function decrement() {
  counterValue -= 1;
}
buttonInc.addEventListener('click', function () {
  increment();
  spanEl.textContent = counterValue;
});
buttonDec.addEventListener('click', function () {
  decrement();
  spanEl.textContent = counterValue;
});

console.log(spanEl);
