$("#worning").click(function(){
        $("#successAlert").toggle();
    });

    $("#error").click(function(){
        $("#dangerAlert").toggle();
    });

    /* Formatting function for row details - modify as you need */
    function format ( d ) {
        // `d` is the original data object for the row
          return '<div class="col-sm-12">'+
				'<div class="col-sm-2 text-center"><div class="col-sm-12 subtitle">Type of deal</div><div class="col-sm-12 title">'+d[7]+'</div></div>'+
				'<div class="col-sm-2 text-center"><div class="col-sm-12 subtitle">Start</div><div class="col-sm-12 title">'+d[8]+'</div></div>'+
				'<div class="col-sm-2 text-center"><div class="col-sm-12 subtitle">End</div><div class="col-sm-12 title">'+d[9]+'</div></div>'+
				'<div class="col-sm-2 text-center"><div class="col-sm-12 subtitle">Size</div><div class="col-sm-12 title">'+d[10]+'</div></div>'+
				'<div class="col-sm-2 text-center"><div class="col-sm-12 subtitle">Price</div><div class="col-sm-12 title">'+d[11]+'</div></div>'+
				'<div class="col-sm-2 text-center"><button class="btn btn-danger"><h6><i class="glyphicon fa-lg glyphicon-flash"></i> Performance</h6></button></div>'+
                '</div>';
      
    }
    

    $(document).ready(function() {
        var dataSet = $('[ng-controller="PublisherDatatableCtrl"]').scope().dataSet;
        var packageDataTable = $('#packageDataTable').DataTable({
            "aaData": dataSet,
            "aoColumns": [
                { "title": "RANK", "width": "10%" },
                { "title": "NAME", "width": "25%"},
                { "title": "PUBLISHER", "width":"15%"},
                { "title": "STATUS", "width": "10%" },
                { "title": "IMPRES.", "width": "10%"},
                { "title": "PRICE", "width": "10%"},
                { "title": "REVENUE", "width": "10%"}
            ],
            "bLengthChange": false,
            "bPaginate": false,
            "bInfo": false,
            "searching": true,
            "bFilter" : false
        });

        $('#searchPackage').keyup(function(){
              // packageDataTable.fnFilter( $(this).val() );
               packageDataTable.search( $(this).val() ).draw();
        });

        // Add event listener for opening and closing details
        $('#packageDataTable tbody tr').on('click', function () {
            var tr = $(this).closest('tr');
            var row = packageDataTable.row( tr );

            if ( row.child.isShown() ) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            } else {
                // Open this row
                row.child( format(row.data()) ).show();
                tr.addClass('shown');
            }
        } );
    } );