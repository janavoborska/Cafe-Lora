import './style.css';
import { Layer } from '../Layer/index';

export const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  drinkElm.innerHTML = `
  <div class="drink">
  <div class="drink__product">
     <div class="drink__cup">
     <img src="/assets/cups/${props.id}.png" />
     </div>
     <div class="drink__info">
       <h3>${props.name}</h3>
     </div>
   </div>
   <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div> 
          </div> `;

  const drinkInfoElm = drinkElm.querySelector('.drink__info');
  /*for (let i = 0; i < props.layers.length; i++) {
   drinkInfoElm.innerHTML += Layer(layers[i]);
    console.log(layers[i]);
  }
*/
  const orderElm = drinkElm.querySelector('.order-btn');
  const drinkCupElm = drinkElm.querySelector('.drink__cup');

  orderElm.addEventListener('click', () => {
    if (props.ordered === false) {
      orderElm.textContent = 'Zrušit';
      drinkCupElm.classList.add('drink__cup--selected');
      props.ordered = true;
    } else {
      orderElm.textContent = 'Objednat';
      drinkCupElm.classList.remove('drink__cup--selected');
      props.ordered = false;
    }
  });

  return drinkElm;
};
