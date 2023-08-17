console.log('Score: 100/100');
console.log(
  'Вёрстка валидная +10\nВёрстка семантическая +16\nВёрстка соответствует макету +54\nОбщие требования к верстке +20'
);
console.log(`
|\\---/|
| o_o |
 \\_^_/
 `);


 const burgerMenu = document.querySelector('.burger-menu');
 const menuList = document.querySelector('.menu');

 burgerMenu.addEventListener('click', (e) => {
  burgerMenu.classList.toggle('close-menu');
  menuList.classList.toggle('menu-colomn');
 })