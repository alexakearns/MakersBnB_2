function Booking(startdate, enddate) {
  this.reference = "reference"
  this.space;
  this.startDate = startdate;
  this.endDate = enddate;
}

Booking.prototype.setSpace = function(space) {
  this.space = space;
  return space;
}