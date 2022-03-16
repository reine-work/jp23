/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

"use strict";

$(document).ready(function() {
    $("#copy-share").click(function() {
        $("#shareURL").select();
        document.execCommand("copy");
        alert("Share URL copied!");
    });
});

$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

if (jQuery().select2) {
    $(".select2").select2();
}

$('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
});

$('input[name="daterange"]').on('cancel.daterangepicker', function(ev, picker) {
    $(this).val('');
});

$(document).ready(function() {
    $("input[type=number]").on("focus", function() {
        $(this).on("keydown", function(e) {
            38 !== e.keyCode && 40 !== e.keyCode || e.preventDefault();
        });
    });
});

$(function() {
    $("input[type=number]").on("mousewheel", function(e) {
        $(this).blur();
    });
});

$(".inputtags").tagsinput('items');