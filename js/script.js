// sticky navbar
function sticky_relocate() {
    if ($(window).scrollTop() > $("#content-anchor").offset().top) {
        $("#sticky").addClass("stick");
        var e = $("#sticky").outerHeight();
        $("#sticky-phantom").height(e).show().fadeIn(), (document.getElementById("main-nav").style.padding = "0.25rem 0");
    } else $("#sticky").removeClass("stick"), $("#sticky-phantom").hide(), (document.getElementById("main-nav").style.padding = "1rem 0");
}

// scroll to top
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#top').fadeIn();
    } else {
        $('#top').fadeOut();
    }
});

$(function() {
    $("#top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
});

// sticky navbar
$(function() {
    $(window).scroll(sticky_relocate), sticky_relocate();
});


// data privacy pop up
$(function() {
    $(".close-toggle").click(function() {
        $("#privacy-popup").slideUp(500);
    });
});

// navbar hide
// $(window).click(function(e) {
//     if ($(".navbar-collapse").hasClass("show")) {
//         $('.navbar-collapse').removeClass("show");
//         e.preventDefault();
//     }
// });

// $('.navbar-collapse').click(function(event) {
//     event.stopPropagation();
// });

$(document).ready(function() {
    $(document).click(function(event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});