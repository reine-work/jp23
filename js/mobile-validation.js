var input = document.getElementById("phone"),
    errorMsg = document.getElementById("error-msg"),
    validMsg = document.getElementById("valid-msg");

// here, the index maps to the error code returned from getValidationError - see readme
var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

// initialise plugin
var iti = window.intlTelInput(input, {
    allowDropdown: !0,
    formatOnDisplay: !0,
    placeholderNumberType: "MOBILE",
    autoPlaceholder: "aggressive",
    preferredCountries: ["ph", "sg"],
    nationalMode: true,
    separateDialCode: false,
    utilsScript: "../../plugins/mobile/build/js/utils.js"
});

var reset = function() {
    input.classList.remove("error");
    errorMsg.innerHTML = "";
    errorMsg.classList.add("hide");
    validMsg.classList.add("hide");
};

// on blur: validate
input.addEventListener('blur', function() {
    reset();
    if (input.value.trim()) {
        if (iti.isValidNumber()) {
            validMsg.classList.remove("hide");
        } else {
            input.classList.add("error");
            var errorCode = iti.getValidationError();
            errorMsg.innerHTML = errorMap[errorCode];
            errorMsg.classList.remove("hide");
        }
    }
});

// on keyup / change flag: reset
input.addEventListener('change', reset);
input.addEventListener('keyup', reset);