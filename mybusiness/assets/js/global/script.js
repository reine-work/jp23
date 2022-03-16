$(function() {
    var jq34 = jQuery.noConflict(true);
});

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

// stickynav
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#content-anchor').offset().top;
    if (window_top > div_top) {

        $('#sticky').addClass('stick');

        // Get the height of #sticky
        // outerHeight() gets height including padding and borders
        var phantomHeight = $('#sticky').outerHeight();

        // Set the height of $sticky-phantom
        $('#sticky-phantom').height(phantomHeight).show().fadeIn();
        document.getElementById("main-nav").style.padding = "0.25rem 0";

    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-phantom').hide();
        document.getElementById("main-nav").style.padding = "1rem 0";
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

// privacy popup
$(function() {
    $(".close-toggle").click(function() {
        $("#privacy-popup").slideUp(500);
    });
});

// feedback smileys
$(function() {
    const INPUTS = document.querySelectorAll("#feedback-smileys input");

    function updateValue(e) {
        document.querySelector("#result").innerHTML = e.target.value;
    }
    INPUTS.forEach((el) => el.addEventListener("click", (e) => updateValue(e)));
});

$(function() {
    var ele2 = document.getElementById('password-input');

    document.getElementById('pass-toggle').onclick = function() {
        if (this.innerHTML == '<i class="las la-eye"></i> Show') {
            this.innerHTML = '<i class="las la-eye-slash"></i> Hide'
            ele2.type = "text";
        } else {
            this.innerHTML = '<i class="las la-eye"></i> Show'
            ele2.type = "password";
        }
    }
});

$(function() {

    // password validation upon registration
    var inputPassword = document.getElementById("user-password");
    var length = document.getElementById("pw-length");
    var number = document.getElementById("pw-number");
    var letter = document.getElementById("pw-letter");
    var capital = document.getElementById("pw-capital");

    inputPassword.onfocus = function() {
        document.getElementById("password-message").style.display = "block";
    }

    inputPassword.onblur = function() {
        document.getElementById("password-message").style.display = "none";
    }

    inputPassword.onkeyup = function() {

        // validate length
        if (inputPassword.value.length >= 8) {
            length.classList.remove("invalid-pass");
            length.classList.add("valid-pass");
        } else {
            length.classList.remove("valid-pass");
            length.classList.add("invalid-pass");
        }

        // validate numeric
        var numbers = /[0-9]/g;
        if (inputPassword.value.match(numbers)) {
            number.classList.remove("invalid-pass");
            number.classList.add("valid-pass");
        } else {
            number.classList.remove("valid-pass");
            number.classList.add("invalid-pass");
        }

        // validate lowercase
        var lowerCaseLetters = /[a-z]/g;
        if (inputPassword.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid-pass");
            letter.classList.add("valid-pass");
        } else {
            letter.classList.remove("valid-pass");
            letter.classList.add("invalid-pass");
        }

        // validate uppercase
        var upperCaseLetters = /[A-Z]/g;
        if (inputPassword.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid-pass");
            capital.classList.add("valid-pass");
        } else {
            capital.classList.remove("valid-pass");
            capital.classList.add("invalid-pass");
        }

    }
});