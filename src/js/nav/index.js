/**
 * Функционал меню
 */

//Инициализация элементов меню
const gamb = document.querySelector('.gamb'),
        nav = document.querySelector('.header__mob__navbar');

//Добавление обработчика событий на значок меню
gamb.addEventListener('click', e => {
    const target = e.target.classList.contains('gamb') || e.target.tagName === 'SPAN';

    if(target) {
        gamb.classList.toggle('active');
        nav.classList.toggle('hide');
    }
})