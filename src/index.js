import './style.css';

console.log('funguju!');

const navElm = document.querySelector('#nav-btn');
const navBarElm = document.querySelector('nav');
const navLinkElm = document.querySelectorAll('nav a');

console.log(navElm);
console.log(navLinkElm);

navElm.addEventListener('click', () => {
  navBarElm.classList.toggle('nav-closed');
});

for (let i = 0; i < navLinkElm.length; i++) {
  navLinkElm[i].addEventListener('click', () => {
    navBarElm.classList.add('nav-closed');
  });
}

const orderElm = document.querySelector('.order-btn');
const drinkElm = document.querySelector('.drink__cup');
let notOrdered = true;

orderElm.addEventListener('click', () => {
  if (notOrdered) {
    orderElm.textContent = 'Zrušit';
    drinkElm.classList.add('drink__cup--selected');
    notOrdered = false;
  } else {
    orderElm.textContent = 'Objednat';
    drinkElm.classList.remove('drink__cup--selected');
    notOrdered = true;
  }
});

/*


*/
