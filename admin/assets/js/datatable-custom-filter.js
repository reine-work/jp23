$(document).ready(function() {
    $('#example').dataTable({
        "dom": '<lf<"toolbar"><t>ip>',

        scrollY: '50vh',
        scrollX: '100%',
        scrollCollapse: true,
        columnDefs: [{
            className: 'control',
            orderable: false,
            targets: 0
        }],
        order: [1, 'asc'],
        "paging": true,
        "ordering": true,
        "info": true
    });

    $("div.toolbar").html(
        '<div class="row"><div class="col-lg-2 col-md-4"><label class="d-inline">Search Date From:</label><input class="form-control form-control-sm d-inline" type="date"></div><div class="col-lg-2 col-md-4"><label class="d-inline">Search Date To:</label><input class="form-control form-control-sm d-inline" type="date"></div><div class="col-lg-2 col-md-4"><label class="d-inline">Category:</label><input class="form-control form-control-sm d-inline" type="text"></div><div class="col-lg-2 col-md-4"><label class="d-inline">Payment Method:</label><input class="form-control form-control-sm d-inline" type="text"></div><div class="col-lg-2 col-md-4"><label class="d-inline">Payment Status:</label><input class="form-control form-control-sm d-inline" type="text"></div><div class="col-lg-2 col-md-4"><label class="d-inline">Status:</label><select class="custom-select"><option selected>Open this select menu</option><option value="1">Mark</option><option value="2">Jacob</option><option value="3">Luke</option></select></div></div>');
});