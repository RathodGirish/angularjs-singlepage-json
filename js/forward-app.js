/**
 * Created by megha on 1/9/15.
 */
$(document).ready(function(){

	$(".marketPlaceTabs").click(function(){
		$(".marketPlaceTabs").removeClass("active");
        var current_id = $(this).attr('id');
        $("#"+current_id).addClass("active");
    });
	
    /* Menu to Display packages in grid and list view */

  /*  $("#gridView").click(function(){
        $("#gridViewDiv").show();
        $("#listViewDiv").hide();
    });*/

   /* $("#listView").click(function(){
        $("#gridViewDiv").hide();
        $("#listViewDiv").show();
    });*/

  /*  $("#gridViewGroup").click(function(){
        $("#gridViewGroupDiv").show();
        $("#listViewGroupDiv").hide();
    });

    $("#listViewGroup").click(function(){
        $("#gridViewGroupDiv").hide();
        $("#listViewGroupDiv").show();
    });*/

    /* By default show Progress rang */



    /* Accordion menu */

    $(".accordion div").hide();

    $("#age-range").show();
    $("#price-range").show();

    $(".accordion h6").click(function(){
        $(this).children("i").toggleClass("glyphicon-chevron-up glyphicon-chevron-down");
        $(this).siblings("h6").children("i").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
        $(this).next("div").slideToggle("slow")
            .siblings("div:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings("h6").removeClass("active");
    });

    /* End Accordion menu */
});


$(function() {

    /* Tab active code */

    $("#basicTabNext").click(function(){
        $("#basicResult").append('<hr />');
        if($("#schedule").val() == "Select your period") {
            $("#basicResult").append("<br />Period : ");
        } else {
            $("#basicResult").append("<br />Period : <h3 class='summaryResult'>" + $("#schedule").val().substring(5));
        }

        $("#BasicSetup_Tab").removeClass("active");
        $("#Inventory_Tab").addClass("active");
        $("#basicSetupTab").removeClass("active");
        $("#inventoryTab").addClass("active");
    });

    $("#inventoryNext").click(function(){
        $("#inventoryResult").append('<hr />');
        $("#inventoryResult").append("Publisher 1 : <h3 class='summaryResult'>" + $("#select-publisher").val());
        $("#inventoryResult").append("<br />Category : <h3 class='summaryResult'>" + $("#select-categories").val());
        $("#inventoryResult").append("<br />Size : <h3 class='summaryResult'>" + $("#select-size").val());
        $("#inventoryResult").append("<br />Site : <h3 class='summaryResult'>" + $("#select-sites").val());
        $("#inventoryResult").append("<br />Placement : <h3 class='summaryResult'>" + $("#select-placements").val());
        $("#Inventory_Tab").removeClass("active");
        $("#Audience_Tab").addClass("active");
        $("#inventoryTab").removeClass("active");
        $("#audienceTab").addClass("active");
    });

    $("#inventoryPrev").click(function(){
        $("#Inventory_Tab").removeClass("active");
        $("#BasicSetup_Tab").addClass("active");
        $("#inventoryTab").removeClass("active");
        $("#basicSetupTab").addClass("active");
        $("#basicResult").html('');
    });

    $("#audienceNext").click(function(){
        $("#pricingModify").hide();
        $("#pricingNext").show();
        $("#pricingPrev").show();
        
        $("#Pricing_Tab").addClass("active");
        $("#Audience_Tab").removeClass("active");
        $("#audienceTab").removeClass("active");
        $("#pricingTab").addClass("active");
        
        $("#audienceResult").append('<hr />');
        var gender = "Male & Female";
        if ($("#genderMale").hasClass("active-button"))
        {
            gender = "Male";
        }
        else if ($("#genderFemale").hasClass("active-button"))
        {
            gender = "Female";
        }
        $("#audienceResult").append("Gender : <h3 class='summaryResult'>" + gender);
        var locationstr = locations.substr(3);
        locationstr = locationstr.substr(0,locationstr.length-3);
        $("#audienceResult").append("<br />Locations : <h3 class='summaryResult'>" + locationstr);
        $("#audienceResult").append("<br />Interest : <h3 class='summaryResult'>" + $("#interest").val());
    });


    $("#audiencePrev").click(function(){
        $("#inventoryResult").html('');
        $("#audienceModify").hide();
        $("#Audience_Tab").removeClass("active");
        $("#Inventory_Tab").addClass("active");
        $("#audienceTab").removeClass("active");
        $("#inventoryTab").addClass("active");
    });
    
    $("#pricingNext").click(function(){
        $("#pricingNext").hide();
        $("#pricingPrev").hide();
        $("#pricingModify").show();
    });

    $("#pricingPrev").click(function(){
        $("#audienceResult").html('');
        $("#pricingModify").hide();
        $("#Pricing_Tab").removeClass("active");
        $("#Audience_Tab").addClass("active");
        $("#pricingTab").removeClass("active");
        $("#audienceTab").addClass("active");
    });

    $("#basicSetupTab").click(function(){
        $("#basicResult").html('');
        $("#inventoryResult").html('');
        $("#audienceResult").html('');
        $("#pricingResult").html('');
    });

    $("#inventoryTab").click(function(){
        if($("#audienceTab").hasClass("active") || $("#pricingTab").hasClass("active"))
        {
            $("#inventoryResult").html('');
            $("#audienceResult").html('');
            $("#pricingResult").html('');
        }
        else
        {
            return false;
        }
    });

    $("#audienceTab").click(function(){
        if($("#pricingTab").hasClass("active"))
        {
            $("#audienceResult").html('');
            $("#pricingResult").html('');
            $("#Pricing_Tab").removeClass("active");
            $("#Audience_Tab").addClass("active");
            $("#pricingTab").removeClass("active");
            $("#audienceTab").addClass("active");
        }
        else
        {
            return false;
        }
    });

    $("#pricingTab").click(function(){
        return false;
    });

    $("#pricingModify").click(function(){
        window.location.reload(true);
    });

    /* Add tag input */

    $( "#includeKeywordInput" ).masterblaster( {
        animate: true,
        showAddButton:false,
        helpText:''
    });

    $( "#excludeKeywordInput" ).masterblaster( {
        animate: true,
        showAddButton:false,
        helpText:''
    });

    var locations = ' / ';
    var $tagInclude = $( "#addLocation" );
    $tagInclude.masterblaster( {
        animate: true,
        showAddButton:false,
        helpText:'',
        tagRules: {
            unique: true,
            regexp: null
        }
    });
    $tagInclude.on( "mb:add", function( e, tagName ){
        locations = locations + tagName + ' / ';
    });
    $tagInclude.on( "mb:remove", function( e, tagName ){
        var  temp = ' / ' + tagName + ' / ';
        locations = locations.replace(temp,' / ');
    });

    /* End tag input */

    $( "#gender" ).selectmenu();
    $( "#audience" ).selectmenu();
    $( "#location" ).selectmenu();
    $( "#views" ).selectmenu();
    $( "#size" ).selectmenu();
    $( "#fold" ).selectmenu();

    $( "#age-range" ).slider({
        range: true,
        min: 0,
        max: 100,
        values: [0,77],
        slide: function( event, ui ) {
            $( "#ageStart" ).html( "Min : " + ui.values[ 0 ] + " y/o");
            $( "#ageEnd" ).html( "Max : " + ui.values[ 1 ] + " y/o");
        }
    });

    $( "#ageStart" ).html( "Min : " + $( "#age-range" ).slider( "values", 0 ) + " y/o");
    $( "#ageEnd" ).html( "Max : " + $( "#age-range" ).slider( "values", 1 ) + " y/o");

    $( "#price-range" ).slider({
        range: true,
        min: 0,
        max: 30000,
        values: [ 0,25454],
        slide: function( event, ui ) {
            $( "#priceStart" ).html( "Min : $" + ui.values[ 0 ] );
            $( "#priceEnd" ).html( "Max : $" + ui.values[ 1 ] );
        }
    });

    $( "#priceStart" ).html( "Min : $" + $( "#price-range" ).slider( "values", 0 ));
    $( "#priceEnd" ).html( "Max : $" + $( "#price-range" ).slider( "values", 1 ));



    $( "#winrate-range" ).slider({
        range: "min",
        min: 0,
        max: 100,
        value:60,
        slide: function( event, ui ) {
            $( "#winrateCurrent" ).html( ui.value + "%").position({
                my: 'center top',
                at: 'center bottom',
                of: ui.handle,
                offset: "0, 10"
            });
        }
    });

    $( "#winrateCurrent" ).html( $( "#winrate-range" ).slider( "value" ) + "%").position({
        my: 'center top',
        at: 'center bottom',
        of: $('#winrate-range .ui-slider-handle'),
        offset: "0, 10"
    });

    $( "#impressions-range" ).slider({
        range: "min",
        min: 0,
        max: 500000,
        value:100000,
        step:10000,
        slide: function( event, ui ) {
            $( "#impressioinsCurrent" ).html( ui.value).position({
                my: 'center top',
                at: 'center bottom',
                of: ui.handle,
                offset: "0, 10"
            });
        }
    });

    $( "#impressioinsCurrent" ).html( $( "#impressions-range" ).slider( "value" )).position({
        my: 'center top',
        at: 'center bottom',
        of: $('#impressions-range .ui-slider-handle'),
        offset: "0, 10"
    });

    /*Toggle button on male, female or both*/
    $(".gender-toggle").click(function(){
        $(".gender-toggle").removeClass("active-button");
        var current_id = $(this).attr('id');
        $("#"+current_id).addClass("active-button");
        $("#"+current_id).removeClass("default-button");
    });

    /*Toggle button on yes and no*/
    $(".view-toggle").click(function(){
        $(".view-toggle").removeClass("active-button");
        $(this).toggleClass("active-button default-button");
    });

});
