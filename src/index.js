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

/*

Navigaci budeme chtít schovat i po přesunutí na nějakou sekci. Připojte tedy posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda querySelectorAll.
Jakmile je váš kód funkční, proveďte commmit s hezky popisnou zprávou a pushněte do vzdáleného repozitáře.
*/
