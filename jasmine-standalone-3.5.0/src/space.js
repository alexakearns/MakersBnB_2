'use strict';

function Space () {
    this.name;
    this.description;
    this.dailyPrice;
    this.availability
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

Space.prototype.addAvailability = function(dateString) {
  this.availability = new Date(dateString).toDateString();
}