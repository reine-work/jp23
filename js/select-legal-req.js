$(function() {
    $("input[name='select-business']").click(function() {
        if ($("#radio-sole").is(":checked")) {
            $(".legreq-sole").show();
        } else {
            $(".legreq-sole").hide();
        }
    });

    $("input[name='select-business']").click(function() {
        if ($("#radio-part").is(":checked")) {
            $(".legreq-part").show();
        } else {
            $(".legreq-part").hide();
        }
    });

    $("input[name='select-business']").click(function() {
        if ($("#radio-corp").is(":checked")) {
            $(".legreq-corp").show();
        } else {
            $(".legreq-corp").hide();
        }
    });
});