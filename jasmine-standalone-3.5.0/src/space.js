'use strict';

function Space () {
    this.name;
    this.description;
    this.dailyPrice;
    this.availabilityFrom;
    this.availabilityTo;
}

Space.prototype.addName = function(name) {
    this.name = name;
}

Space.prototype.addDescription = function(string) {
    this.description = string;
}

Space.prototype.addDailyPrice = function(price) {
    this.dailyPrice = price;
}

Space.prototype.addAvailabilityFrom = function(dateString) {
  this.availabilityFrom = new Date(dateString).toDateString();
}

Space.prototype.addAvailabilityTo = function(dateString) {
  this.availabilityTo = new Date(dateString).toDateString();
}