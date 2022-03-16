// disable arrow keys and scrollbar from changing input[type=number] content
$(document).ready(function() {
    $("input[type=number]").on("focus", function() {
        $(this).on("keydown", function(e) {
            (38 !== e.keyCode && 40 !== e.keyCode) || e.preventDefault();
        });
    });
});

$(function() {
    $("input[type=number]").on("mousewheel", function(e) {
        $(this).blur();
    });
});

$('form').on('focus', 'input[type=number]', function(e) {
    $(this).on('wheel.disableScroll', function(e) {
        e.preventDefault()
    })
});

$('form').on('blur', 'input[type=number]', function(e) {
    $(this).off('wheel.disableScroll')
});