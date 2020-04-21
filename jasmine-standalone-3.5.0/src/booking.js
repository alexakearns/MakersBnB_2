function Booking() {
  this.reference = "reference"
  this.space;
}

Booking.prototype.setSpace = function(space) {
  this.space = space;
  return space;
}