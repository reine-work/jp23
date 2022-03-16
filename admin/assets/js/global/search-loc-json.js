$.ajaxSetup({
    cache: false
});
$('#search-loc').keyup(function() {
    $('#result').html('');
    $('#state').val('');
    var searchField = $('#search-loc').val();
    var expression = new RegExp(searchField, "i");
    $.getJSON('json/tbl_geo_locations.json', function(data) {
        $.each(data, function(key, value) {
            if (value.city_or_municipality.search(expression) != -1) {
                $('#result').append('<li class="list-group-item link-class">' + value.city_or_municipality + ', ' + '<span class="region-name">' + value.province + ', ' + value.region_name + ', ' + value.country_name + '</span></li>');
            }
        });
    });
});

$('#result').on('click', 'li', function() {
    var click_text = $(this).text();
    $('#search-loc').val(click_text);
    $("#result").html('');
});