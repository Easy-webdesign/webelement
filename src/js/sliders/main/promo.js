import Swiper from 'swiper/swiper-bundle';


const slider = new Swiper('.promo__box__slider', {
    loop: true,
    effect: 'fade',

    navigation: {
        prevEl: '.promo-prev',
        nextEl: '.promo-next',
    }
})