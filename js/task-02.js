const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ulEl = document.querySelector('#ingredients');
ulEl.classList.add('#ul');

const clone = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  return itemEl;
});
ulEl.append(...clone);
console.log(clone);
