$(window).on('orientationchange resize load', function() {
    ww = $(window).width();
    if (ww < 993) {
        $(".filter-options").appendTo(".search-filter-mobile");
    } else {
        $(".filter-options").appendTo(".search-filter-web");
    }
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
});

$(function() {
    $('[data-toggle="popover"]').popover()
});