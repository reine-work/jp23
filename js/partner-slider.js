$('.slider-home-feedbacks').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1200: {
            items: 3
        },
        1366: {
            items: 3
        },
        1400: {
            items: 3
        },
        1441: {
            items: 3
        }
    }
});