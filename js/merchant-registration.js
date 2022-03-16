$(document).ready(function() {
    $.getJSON("json/tbl_banks.json", function(e) {
        $.each(e, function(e, t) {
            $("#merchant-bank").append('<option value="' + t.bank_short_name + '">' + t.bank_long_name + "</option>");
        });
    });
});

$(document).ready(function() {
    var e = 1;
    $(".add-mobile-field").click(function(t) {
            t.preventDefault(), e < 3 && (e++, $(".multi-email").append('<div class="mt-2"><input class="form-control" type="email" required /><span class="del-mobile"><i class="las la-times-circle"></i> Remove</span></div>'));
        }),
        $(".multi-email").on("click", ".del-mobile", function(t) {
            t.preventDefault(), $(this).parent("div").remove(), e--;
        });
});

$(function() {
    $('input[name="add-referral-field"]').hide(),
        $('input[name="add-referral"]').on("click", function() {
            $(this).prop("checked") ? $('input[name="add-referral-field"]').fadeIn() : $('input[name="add-referral-field"]').hide();
        });
});

$(function() {
    var e = {
            "Auto Detailing Services": ["Auto Detailing Services"],
            "Beauty and Wellness": ["Massage", "Salon", "Spa"],
            "Fitness Centers": ["Fitness Centers"],
            Clinics: ["Dental", "Diagnostic", "EENT", "Maternity", "Medical", "Polyclinic", "Optical", "Pediatric", "Veterinary", "Facial"],
            Hospitals: ["Hospitals"],
            Schools: ["Preschool", "Elementary", "High School", "Vocational", "College and Universities", "Special Education", "Review and Training Centers", "Special Education"],
            "Special Care Centers": ["Mental", "Rehabilitation", "Retirement Home"],
            Others: ["Death Care", "Suppliers", "Others", "Laboratory"],
            "Travel Agencies": ["Travel Agency"],
        },
        t = function() {
            (this.p = []),
            (this.c = []),
            (this.a = []),
            (this.e = {}),
            (window.onerror = function() {
                return !0;
            }),
            (this.getMainCateg = function() {
                for (let t in e) this.p.push(t);
                return this.p;
            }),
            (this.getSubCateg = function(t) {
                if (0 != t.length) {
                    for (let n = 0; n <= e[t].length - 1; n++) this.c.push(e[t][n]);
                    return this.c;
                }
                console.error("Please select sub category");
            }),
            (this.getAllCateg = function() {
                for (let t in e)
                    for (let n = 0; n <= e[t].length - 1; n++) this.a.push(e[t][n]);
                return this.a.sort(), this.a;
            }),
            (this.mainCateg = function(e) {
                var t = "<option selected disabled>Select category</option>";
                for (let e in this.getMainCateg()) t += "<option>" + this.p[e] + "</option>";
                return (this.p = []), (document.querySelector(e).innerHTML = ""), (document.querySelector(e).innerHTML = t), (this.e = e), this;
            }),
            (this.subCateg = function(e, n) {
                var i = '<label>Select sub category <span class="required-ast">*</span></label>',
                    a = "";
                if (-1 !== e.indexOf(".") || -1 !== e.indexOf("#")) a = e;
                else {
                    for (let t in this.getSubCateg(e))
                        i += '<div class="custom-control custom-checkbox pl-0"><label class="custom-checkbox mb-0"><input type=checkbox name=chkbx1> <span class="custom-label"> ' + this.c[t] + "</span></label></div>";
                    a = n;
                }
                return (
                    (this.c = []),
                    (document.querySelector(a).innerHTML = ""),
                    (document.querySelector(a).innerHTML = i),
                    (document.querySelector(this.e).onchange = function() {
                        new t().subCateg(this.value, a);
                    }),
                    this
                );
            });
        };
    window.onload = function() {
        var e = new t();
        e.mainCateg("#merch-main-categ"), e.subCateg("#merch-sub-categ"), console.log(e.getMainCateg()), console.log(e.getSubCateg());
    };
});