$(document).ready(function() {
    $('#example').DataTable({
        scrollY: '50vh',
        scrollX: '100%',
        scrollCollapse: true,
        columnDefs: [{
            className: 'control',
            orderable: false,
            targets: 0
        }],
        order: [1, 'asc'],
        "sDom": "Rlfrtip"
    });
});