"use strict";

function Space(name, description, price, start, end) {
  this.name = name;
  this.description = description;
  this.dailyPrice = price;
  this.availabilityFrom = start;
  this.availabilityTo = end;
}

/*
        -- Future tests if needed -- 
        
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
*/
