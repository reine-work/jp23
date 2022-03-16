$(document).ready(function() {
    var url = "json/tbl_banks.json";

    $.getJSON(url, function(data) {
        $.each(data, function(index, value) {
            // APPEND OR INSERT DATA TO SELECT ELEMENT.
            $('#merchant-bank').append('<option value="' + value.bank_short_name + '">' + value.bank_long_name + '</option>');
        });
    });

});

// dynamic email field
$(document).ready(function() {
    var max_fields_limit = 3; //set limit for maximum input fields
    var x = 1; //initialize counter for text box
    $('.add-mobile-field').click(function(e) { //click event on add more fields button having class add-mobile-field
        e.preventDefault();
        if (x < max_fields_limit) { //check conditions
            x++; //counter increment
            $('.multi-email').append('<div class="mt-2"><input class="form-control" type="email" required /><span class="del-mobile"><i class="las la-times-circle"></i> Remove</span></div>'); //add input field
        }
    });
    $('.multi-email').on("click", ".del-mobile", function(e) { //user click on remove text links
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })
});

// show input for referral name
$(function() {
    $('input[name="add-referral-field"]').hide();

    //show it when the checkbox is clicked
    $('input[name="add-referral"]').on('click', function() {
        if ($(this).prop('checked')) {
            $('input[name="add-referral-field"]').fadeIn();
        } else {
            $('input[name="add-referral-field"]').hide();
        }
    });
});

$(function() {
    var subCat = {
        'Auto Detailing Services': [
            'Auto Detailing Services'
        ],
        'Beauty and Wellness': [
            'Massage',
            'Salon',
            'Spa'
        ],
        'Fitness Centers': [
            'Fitness Centers'
        ],
        'Clinics': [
            'Dental',
            'Diagnostic',
            'EENT',
            'Maternity',
            'Medical',
            'Polyclinic',
            'Optical',
            'Pediatric',
            'Veterinary',
            'Facial'
        ],
        'Hospitals': [
            'Hospitals'
        ],
        'Schools': [
            'Preschool',
            'Elementary',
            'High School',
            'Vocational',
            'College and Universities',
            'Special Education',
            'Review and Training Centers',
            'Special Education'
        ],
        'Special Care Centers': [
            'Mental',
            'Rehabilitation',
            'Retirement Home'
        ],
        'Others': [
            'Death Care',
            'Suppliers',
            'Others',
            'Laboratory'
        ],
        'Travel Agencies': [
            'Travel Agency'
        ],
    }

    var merchCateg = function() {

        this.p = [], this.c = [], this.a = [], this.e = {};
        window.onerror = function() {
            return true;
        }

        this.getMainCateg = function() {
            for (let mainCat in subCat) {
                this.p.push(mainCat);
            }
            return this.p;
        }
        this.getSubCateg = function(mainCat) {
            if (mainCat.length == 0) {
                console.error('Please select sub category');
                return;
            }
            for (let i = 0; i <= subCat[mainCat].length - 1; i++) {
                this.c.push(subCat[mainCat][i]);
            }
            return this.c;
        }
        this.getAllCateg = function() {
            for (let i in subCat) {
                for (let j = 0; j <= subCat[i].length - 1; j++) {
                    this.a.push(subCat[i][j]);
                }
            }
            this.a.sort();
            return this.a;
        }
        this.mainCateg = function(element) {
            var str = '<option selected disabled>Select category</option>';
            for (let i in this.getMainCateg()) {
                str += '<option>' + this.p[i] + '</option>';
            }
            this.p = [];
            document.querySelector(element).innerHTML = '';
            document.querySelector(element).innerHTML = str;
            this.e = element;
            return this;
        }
        this.subCateg = function(mainCat, element) {
            var str = '<label>Select sub category <span class="required-ast">*</span></label>';
            var elem = '';
            if ((mainCat.indexOf(".") !== -1 || mainCat.indexOf("#") !== -1)) {
                elem = mainCat;
            } else {
                for (let i in this.getSubCateg(mainCat)) {
                    str += '<div class="custom-control custom-checkbox pl-0"><label class="custom-checkbox mb-0"><input type=checkbox name=chkbx1> <span class="custom-label"> ' + this.c[i] + '</span></label></div>';
                }
                elem = element;
            }
            this.c = [];
            document.querySelector(elem).innerHTML = '';
            document.querySelector(elem).innerHTML = str;
            document.querySelector(this.e).onchange = function() {
                var Obj = new merchCateg();
                Obj.subCateg(this.value, elem);
            }
            return this;
        }
    }

    window.onload = function() {

        var $ = new merchCateg();
        $.mainCateg("#merch-main-categ");
        $.subCateg("#merch-sub-categ");

        console.log($.getMainCateg());
        console.log($.getSubCateg());
    }
});

// mobile number input
$(function() {

    var telInput = $("#phone"),
        errorMsg = $("#error-msg"),
        validMsg = $("#valid-msg");

    // initialise plugin
    telInput.intlTelInput({
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
            });
        },
        allowDropdown: true,
        formatOnDisplay: true,
        placeholderNumberType: "MOBILE",
        autoPlaceholder: "aggressive",
        preferredCountries: ['ph', 'sg'],
        nationalMode: true,
        separateDialCode: true,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
    });

    var reset = function() {
        telInput.removeClass("error");
        errorMsg.addClass("hide");
        validMsg.addClass("hide");
    };

    // on blur: validate
    telInput.blur(function() {
        reset();
        if ($.trim(telInput.val())) {
            if (telInput.intlTelInput("isValidNumber")) {
                validMsg.removeClass("hide");
                var getCode = telInput.intlTelInput('getSelectedCountryData').dialCode;
            } else {
                telInput.addClass("error");
                errorMsg.removeClass("hide");
            }
        }
    });

    // on keyup / change flag: reset
    telInput.on("keyup change", reset);
});