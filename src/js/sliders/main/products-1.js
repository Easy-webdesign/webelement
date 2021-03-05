import Swiper from 'swiper/swiper-bundle';


const slider = new Swiper('.products__box__slider-1', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,

    navigation: {
        prevEl: '.products-prev-1',
        nextEl: '.products-next-1',
    },

    breakpoints: {
        1092: {
            slidesPerView: 3,
        },
        768: {
            centeredSlides: false,
            slidesPerView: 2,
        },
        320: {
            centeredSlides: true,
            slidesPerView: 1,
        },
    }
});

const slider2 = new Swiper('.products__box__slider-2', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,

    navigation: {
        prevEl: '.products-prev-2',
        nextEl: '.products-next-2',
    },

    breakpoints: {
        1192: {
            slidesPerView: 3,
        },

        768: {
            centeredSlides: false,
            slidesPerView: 2,
        },
        320: {
            centeredSlides: true,
            slidesPerView: 1,
        },
    }
})

const slider3 = new Swiper('.products__box__slider-3', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,

    navigation: {
        prevEl: '.products-prev-3',
        nextEl: '.products-next-3',
    },

    breakpoints: {
        1192: {
            slidesPerView: 3,
        },

        768: {
            centeredSlides: false,
            slidesPerView: 2,
        },
        320: {
            centeredSlides: true,
            slidesPerView: 1,
        },
    }
})