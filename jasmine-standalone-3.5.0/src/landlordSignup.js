$ (document).ready(function(){
let landlord = new Landlord();


$( "#submit-listing" ).click(function( event ) {

   
    var spaceID = $("#space-ID").val();
    var spaceDescription = $("#space-description").val();
    var dailyPrice = $("#daily-price").val();
    var availableForm= $("#available-from").val();
    var availableTo = $("#available-to").val();
    space = new Space (spaceID, spaceDescription, dailyPrice, availableForm, availableTo);

    $("#this").text(spaceID + " " + spaceDescription + " " + dailyPrice + " " + availableForm + " " + availableTo)

  });



})