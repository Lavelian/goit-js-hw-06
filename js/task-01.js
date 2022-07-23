const categoriesEl = document.querySelector('#categories');
console.log('Number of categories:', categoriesEl.children.length);
const arrayLi = document.querySelectorAll('h2 + ul');
const itemsEl = document.querySelectorAll('.item');

itemsEl.forEach((element, index) => {
  console.log(
    `Category: ${element.firstElementChild.textContent} \nElements:${arrayLi[index].children.length}`
  );
});
