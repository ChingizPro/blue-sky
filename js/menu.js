(() => {
    const menu = $('.menu__list');
    const toggler = $('.menu__toggler');
    const links = $('.menu__link');

    openMenu = () => {
        toggler.addClass('toggler__active');

        menu.css('opacity', '1');
        let height = menu.prop('scrollHeight') + 'px';
        menu.css('height', height);
    }

    closeMenu = () => {
        menu.css('height', '');
        menu.css('opacity', '0');
        toggler.removeClass('toggler__active');
    }

    checkWindow = () => {
        if ($(window).width() < 1157) {
            toggler.addClass('toggler__on');
            menu.addClass('menu__closed');
            closeMenu();
        } else {
            menu.removeClass('menu__closed');
            toggler.removeClass('toggler__on toggler__active');
            openMenu();
        }
    }

    handleMenu = () => {
        if ($('.menu__list').css('opacity') == 0) {
            openMenu();
        } else {
            closeMenu();
        }
    }

    toggler.click(debounce(handleMenu, 100));

    $(document).ready(checkWindow);
    $(window).resize(checkWindow);

    $('#inner-menu').on('click', () => {
        if ($('.lang-list').hasClass('lang-list--closed')) {
            $('.lang-list').removeClass('lang-list--closed');
            $('.lang-list').addClass('lang-list--open');
        } else {
            $('.lang-list').removeClass('lang-list--open');
            $('.lang-list').addClass('lang-list--closed');
        }
    });

    $('#inner-menu2').on('click', () => {
        if ($('.lang-list2').hasClass('lang-list--closed')) {
            $('.lang-list2').removeClass('lang-list--closed');
            $('.lang-list2').addClass('lang-list--open');
        } else {
            $('.lang-list2').removeClass('lang-list--open');
            $('.lang-list2').addClass('lang-list--closed');
        }
    });

    // * activating nav link
    links.on('click', (e) => {
        $('.menu__link.active-link').removeClass('active-link');
        $(e.target).addClass('active-link');
    })
})();