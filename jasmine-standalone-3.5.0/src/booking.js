function Booking(startdate, enddate) {
  this.setReference();
  this.reference;
  this.space;
  this.startDate = startdate;
  this.endDate = enddate;
}

Booking.prototype.setSpace = function (space) {
  this.space = space;
  return space;
};

Booking.prototype.setReference = function () {
  this.reference = uniqueId();
};

function uniqueId(stringLength, possible) {
  stringLength = stringLength || 20;
  possible = possible || "ABCDEFGHJKMNPQRSTUXY1234567890";
  var text = "";

  for (var i = 0; i < stringLength; i++) {
    var character = getCharacter(possible);
    while (text.length > 0 && character === text.substr(-1)) {
      character = getCharacter(possible);
    }
    text += character;
  }

  return text;
}

function getCharacter(possible) {
  return possible.charAt(Math.floor(Math.random() * possible.length));
}
