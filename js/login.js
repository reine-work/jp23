// hide/show password
$(function() {
    var e = document.getElementById("password-input");
    document.getElementById("pass-toggle").onclick = function() {
        '<i class="las la-eye"></i> Show' == this.innerHTML ? ((this.innerHTML = '<i class="las la-eye-slash"></i> Hide'), (e.type = "text")) : ((this.innerHTML = '<i class="las la-eye"></i> Show'), (e.type = "password"));
    };
});