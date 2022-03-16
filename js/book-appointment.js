$(function() {
    $(".select2").select2();
});

duDatepicker('#booking-datepicker', {
    theme: 'jazzy',
    auto: true,
    inline: false,
    overlayClose: false,
    format: 'mmmm dd, yyyy',
    disabledDays: ['Sat', 'Sun'],
    disabledDates: ['December 24, 2020', 'December 25, 2020'],
    cancelBtn: true
})