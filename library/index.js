console.log('Score: 50/50');
console.log('Верстка соответсвует макету. Ширина экрана 768px. Реализовано адаптивное меню');
console.log(`
|\\---/|
| o_o |
 \\_^_/
 `);

const burgerMenu = document.querySelector('.burger-menu');
const menuList = document.querySelector('.menu');
const linkMenu = document.querySelectorAll('.menu__link');

burgerMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  burgerMenu.classList.toggle('close-menu');
  menuList.classList.toggle('menu-colomn');
});

document.body.addEventListener('click', (e) => {
  burgerMenu.classList.remove('close-menu');
  menuList.classList.remove('menu-colomn');
});

menuList.addEventListener('click', (e) => {
  e.stopPropagation();
});

linkMenu.forEach((item) => {
  item.addEventListener('click', (e) => {
    burgerMenu.classList.remove('close-menu');
    menuList.classList.remove('menu-colomn');
  });
});
