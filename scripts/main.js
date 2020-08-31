// ПЛАВНАЯ ПРОКРУТКА ЭКРАНА:
var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500); // длительность прокрутки 0.5s
    return false;
});


// БУРГЕР-МЕНЮ:

// Сохранение добавленных классов при перезагрузке страницы
$(document).ready(function () {
    if ($(window).width() > 1186) {
        $('.btn-toggle').removeClass('active')
        $('.navbar-nav').removeClass('hide')
        $('.navbar-nav').removeClass('show')
        $('.collapse').removeClass('hide')
        $('.collapse').removeClass('show')
    }
});

$(document).ready(function () {
    if ($(window).width() <= 1186) {
        $('.navbar-nav').addClass('hide')
        $('.collapse').addClass('hide')
    }
});

$(document).ready(function () {
    if ($(window).width() <= 562) {
        $('.btn-toggle').removeClass('active')
        $('.navbar-nav').removeClass('hide')
        $('.navbar-nav').removeClass('show')
        $('.collapse').removeClass('hide')
        $('.collapse').removeClass('show')
    }
});

// Добавление нужных классов для бургер-меню
$(window).resize(function () {
    if ($(window).width() > 1186) {
        $('.btn-toggle').removeClass('active')
        $('.navbar-nav').removeClass('hide')
        $('.navbar-nav').removeClass('show')
        $('.collapse').removeClass('hide')
        $('.collapse').removeClass('show')
    }
});

$(window).resize(function () {
    if ($(window).width() <= 1186) {
        $('.navbar-nav').addClass('hide')
        $('.collapse').addClass('hide')
    }
});

$(window).resize(function () {
    if ($(window).width() <= 562) {
        $('.btn-toggle').removeClass('active')
        $('.navbar-nav').removeClass('hide')
        $('.navbar-nav').removeClass('show')
        $('.collapse').removeClass('hide')
        $('.collapse').removeClass('show')
    }
});

// Действия при нажатии на кнопку бургер-меню
$(document).ready(function () {
    $('.btn-toggle').click(function () {
        $('.btn-toggle').toggleClass('active')
        $('.navbar-nav').toggleClass('show')
        $('.collapse').toggleClass('show')
    })
});

$(document).ready(function () {
    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active')
        $(this).toggleClass('active')
    })
});


// POP-UPS:

// Pop-Up "Обратный звонок"
$('.open-popup-callback').click(function () {
    $('#popup-callback').fadeIn();
    $('#popup-callback').addClass('disabled');
    // $('body').css('overflow', 'hidden');
});

// Pop-Up "Получить предложение"
$('.open-popup-offer').click(function () {
    $('#popup-offer').fadeIn();
    $('#popup-offer').addClass('disabled');
    // $('body').css('overflow', 'hidden');
});

// Pop-Up "Спасибо за обращение!"
$('.open-popup-thanx').click(function () {
    $('#popup-callback').fadeOut();
    $('#popup-offer').fadeOut();

    $('#popup-thanx').fadeIn();
    $('#popup-thanx').addClass('disabled');
    // $('body').css('overflow', 'hidden');
});

$('#popup-thanx .btn-gold').click(function () {
    $('.popup-bg').fadeOut();
    // $('body').css('overflow', 'auto');
});

// закрыть на крестик
$('.close-popup').click(function () {
    $('.popup-bg').fadeOut();
    // $('body').css('overflow', 'auto');
});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.popup');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.popup-bg').fadeOut();
        // $('body').css('overflow', 'auto');
    }
});

// MAIN-CARS меню переключения вкладок
$(document).ready(function () {
    $('#btn-set-of-cars-01').click(function () {
        $('.item-header .link').removeClass('active')
        $(this).toggleClass('active')
        $('#set-of-cars-01').toggleClass('hide')
        $('#set-of-cars-01').toggleClass('show')

        $('#set-of-cars-02, #set-of-cars-03, #set-of-cars-04, #set-of-cars-05, #set-of-cars-06').removeClass('show')
        $('#set-of-cars-02, #set-of-cars-03, #set-of-cars-04, #set-of-cars-05, #set-of-cars-06').addClass('hide')
    })

    $('#btn-set-of-cars-02').click(function () {
        $('.item-header .link').removeClass('active')
        $(this).toggleClass('active')
        $('#set-of-cars-02').toggleClass('hide')
        $('#set-of-cars-02').toggleClass('show')

        $('#set-of-cars-01, #set-of-cars-03, #set-of-cars-04, #set-of-cars-05, #set-of-cars-06').removeClass('show')
        $('#set-of-cars-01, #set-of-cars-03, #set-of-cars-04, #set-of-cars-05, #set-of-cars-06').addClass('hide')
    })

    $('#btn-set-of-cars-03').click(function () {
        $('.item-header .link').removeClass('active')
        $(this).toggleClass('active')
        $('#set-of-cars-03').toggleClass('hide')
        $('#set-of-cars-03').toggleClass('show')

        $('#set-of-cars-01, #set-of-cars-02, #set-of-cars-04, #set-of-cars-05, #set-of-cars-06').removeClass('show')
        $('#set-of-cars-01, #set-of-cars-02, #set-of-cars-04, #set-of-cars-05, #set-of-cars-06').addClass('hide')
    })

    $('#btn-set-of-cars-04').click(function () {
        $('.item-header .link').removeClass('active')
        $(this).toggleClass('active')
        $('#set-of-cars-04').toggleClass('hide')
        $('#set-of-cars-04').toggleClass('show')

        $('#set-of-cars-01, #set-of-cars-02, #set-of-cars-03, #set-of-cars-05, #set-of-cars-06').removeClass('show')
        $('#set-of-cars-01, #set-of-cars-02, #set-of-cars-03, #set-of-cars-05, #set-of-cars-06').addClass('hide')
    })

    $('#btn-set-of-cars-05').click(function () {
        $('.item-header .link').removeClass('active')
        $(this).toggleClass('active')
        $('#set-of-cars-05').toggleClass('hide')
        $('#set-of-cars-05').toggleClass('show')

        $('#set-of-cars-01, #set-of-cars-02, #set-of-cars-03, #set-of-cars-04, #set-of-cars-06').removeClass('show')
        $('#set-of-cars-01, #set-of-cars-02, #set-of-cars-03, #set-of-cars-04, #set-of-cars-06').addClass('hide')
    })

    $('#btn-set-of-cars-06').click(function () {
        $('.item-header .link').removeClass('active')
        $(this).toggleClass('active')
        $('#set-of-cars-06').toggleClass('hide')
        $('#set-of-cars-06').toggleClass('show')

        $('#set-of-cars-01, #set-of-cars-02, #set-of-cars-03, #set-of-cars-04, #set-of-cars-05').removeClass('show')
        $('#set-of-cars-01, #set-of-cars-02, #set-of-cars-03, #set-of-cars-04, #set-of-cars-05').addClass('hide')
    })
});