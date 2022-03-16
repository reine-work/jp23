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

$(function() {
    document.querySelectorAll("#feedback-smileys input").forEach((e) =>
        e.addEventListener("click", (e) =>
            (function(e) {
                document.querySelector("#result").innerHTML = e.target.value;
            })(e)
        )
    );
});

// file input
$(".custom-file-input").on("change", function() {
    var e = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(e);
});