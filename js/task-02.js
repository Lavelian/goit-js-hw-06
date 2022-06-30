const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ulEl = document.querySelector('#ingredients');
ulEl.classList.add('#ul');
console.log(ulEl);

// document.createElement('li');

ingredients.forEach(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  console.log(itemEl);
  ulEl.append(itemEl);
});
