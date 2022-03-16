$('.slider-home-merchants').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1200: {
            items: 5
        },
        1366: {
            items: 5
        },
        1400: {
            items: 5
        },
        1441: {
            items: 6
        }
    }
})