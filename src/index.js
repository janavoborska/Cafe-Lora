import './style.css';
import { Layer } from './Layer/index.js';
import './Layer/style.css';

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

const drinkInfoElm = document.querySelector('.drink__info');
for (let i = 0; i < layers.length; i++) {
  drinkInfoElm.innerHTML += Layer(layers[i]);
  console.log(layers[i]);
  // drinkInfoElm.innerHTML += Layer({ color: '#feeeca', label: 'mléčná pěna' });
  // drinkInfoElm.innerHTML += Layer({ color: '#fed7b0', label: 'teplé mléko' });
  // drinkInfoElm.innerHTML += Layer({ color: '#613916', label: 'espresso' });

  const layers = [
    {
      color: '#feeeca',
      label: 'mléčná pěna',
    },
    {
      color: '#fed7b0',
      label: 'teplé mléko',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ];
}

/*

*/
