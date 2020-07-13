$(document).ready(function () {
  let landlord = new Landlord();

  $("#submit-listing").click(function (event) {
    var spaceID = $("#space-ID").val();
    var spaceDescription = $("#space-description").val();
    var dailyPrice = $("#daily-price").val();
    var availableFrom = $("#available-from").val();
    var availableTo = $("#available-to").val();
    space = new Space(
      spaceID,
      spaceDescription,
      dailyPrice,
      availableFrom,
      availableTo
    );

    landlord.listSpace(space);

    $("#Listing").text("Your new listing:");
    $("#space").text("Space: " + spaceID);
    $("#spacedec").text("Description: " + spaceDescription);
    $("#dailyP").text("Price per night: " + dailyPrice);
    $("#datesFrom").text("From: " + availableFrom);
    $("#datesTo").text("To: " + availableTo);
  });

  //navigates to confirmation page
  $("#confirm-request").click(function (event) {
    $("#request-confirmed").text("You have confirmed the request");
  });
});
