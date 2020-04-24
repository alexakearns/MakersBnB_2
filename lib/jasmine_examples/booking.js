const { Client } = require('pg')

const client = new Client({
    //change user
    user: 'postgres',
    host: 'localhost',
    database: 'makersbnb',
    password: null,
    port: 5432,
})

client.connect()

function Booking(startdate, enddate, landlordid = 1234, renterid = 5678) {
  this.setReference(landlordid, renterid)
  this.reference;
  this.space;
  this.startDate = startdate;
  this.endDate = enddate;
}

Booking.prototype.setSpace = function(space) {
  this.space = space;
  return space;
}

Booking.prototype.setReference = function(landlordid, renterid) {
  this.reference = uniqueId()
  client.query("INSERT INTO bookings (reference, landlordspaceid, renterid) VALUES ('"+ this.reference +"', '"+ landlordid +"', '"+ renterid +"');", (err, res) => {
    client.end()
})
}


function uniqueId(stringLength, possible)
{
  stringLength = stringLength || 20;
  possible = possible || "ABCDEFGHJKMNPQRSTUXY1234567890";
  var text = "";

  for(var i = 0; i < stringLength; i++) {
    var character = getCharacter(possible);
    while(text.length > 0 && character === text.substr(-1)) {
      character = getCharacter(possible);
    }
    text += character;
  }

  return text;
}

function getCharacter(possible) {
  return possible.charAt(Math.floor(Math.random() * possible.length));
}

module.exports = Booking;