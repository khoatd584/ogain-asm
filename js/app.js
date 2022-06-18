// 'use strict';
// console.time('app');

(function ($) {
    // Set background image
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    // Loading
    $(window).on('load', function () {
        $('.loader-wrapper').fadeOut('slow');
    })
    // slideshow use SwiperJs
    let swiperPopular = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 'auto',
        grabCursor: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        }
    });
    // Filter Product
    $('.featured__controls li').on('click', function () {
        $('.featured__controls li').removeClass('active');
        $(this).addClass('active');
    });
    if ($('.featured__filter').length > 0) {
        var containerEl = document.querySelector('.featured__filter');
        var mixer = mixitup(containerEl);
    }
})(jQuery);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const indents = $$('.indent')
const infos = $$('.info-item')

indents.forEach((tab, index) => {
    const info = infos[index];
    tab.onclick = function () {
        $('.indent.active').classList.remove('active');
        $('.info-item.active').classList.remove('active');
        this.classList.add('active')
        info.classList.add('active')

    }
})

// console.timeEnd('app')