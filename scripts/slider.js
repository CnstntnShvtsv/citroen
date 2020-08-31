$(document).ready(function () {
    $('.back-part').slick({
        lazyLoad: 'progressive',
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        // fade: true,
        // infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.btn-prev').on('click', function () {
        $('.back-part').slick('slickPrev');
    });

    $('.btn-next').on('click', function () {
        $('.back-part').slick('slickNext');
    });
});