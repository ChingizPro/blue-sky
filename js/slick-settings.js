(() => {
    $('.gallery__row').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.gallery__nav',
        prevArrow: '<button class="gallery__controller gallery__controller--prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="gallery__controller gallery__controller--next"><i class="fa fa-chevron-right"></i></button>'
    });
    $('.gallery__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.gallery__row',
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<button class="nav__controller nav__controller--prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="nav__controller nav__controller--next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1327,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 636,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 541,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    centerMode: false
                }
            }
        ]
    });
})();