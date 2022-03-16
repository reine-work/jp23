// password validation
$(function() {
    var e = document.getElementById("user-password"),
        s = document.getElementById("pw-length"),
        t = document.getElementById("pw-number"),
        n = document.getElementById("pw-letter"),
        i = document.getElementById("pw-capital");
    (e.onfocus = function() {
        document.getElementById("password-message").style.display = "block";
    }),
    (e.onblur = function() {
        document.getElementById("password-message").style.display = "none";
    }),
    (e.onkeyup = function() {
        e.value.length >= 8 ? (s.classList.remove("invalid-pass"), s.classList.add("valid-pass")) : (s.classList.remove("valid-pass"), s.classList.add("invalid-pass")),
            e.value.match(/[0-9]/g) ? (t.classList.remove("invalid-pass"), t.classList.add("valid-pass")) : (t.classList.remove("valid-pass"), t.classList.add("invalid-pass")),
            e.value.match(/[a-z]/g) ? (n.classList.remove("invalid-pass"), n.classList.add("valid-pass")) : (n.classList.remove("valid-pass"), n.classList.add("invalid-pass")),
            e.value.match(/[A-Z]/g) ? (i.classList.remove("invalid-pass"), i.classList.add("valid-pass")) : (i.classList.remove("valid-pass"), i.classList.add("invalid-pass"));
    });
});