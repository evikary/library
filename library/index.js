console.log('Score: 50/50');
console.log('Верстка соответсвует макету.\nШирина экрана 768px.\nРеализовано адаптивное меню');
console.log(`
|\\---/|
| o_o |
 \\_^_/
 `);

const burgerMenu = document.querySelector('.burger-menu');
const menuList = document.querySelector('.menu');
const linkMenu = document.querySelectorAll('.menu__link');
// const circle = document.querySelector('.circles');
// const onlyCircle = document.querySelectorAll('.circle__btn');
// const allCircle = document.querySelectorAll('.btn');
// const activeCircle = document.querySelector('.btn_active');

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

//slider
// circle.addEventListener('click', (e) => {
//   const currentIndex = [...allCircle].indexOf(activeCircle);
//   console.log('currentIndex', currentIndex);

//   if (currentIndex === 0) {
    
//   }
// })


