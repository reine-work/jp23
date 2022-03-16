$('.slider-home-feedbacks').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
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