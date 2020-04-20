'use strict';

function Space () {
    this.name;
    this.description;
    this.dailyPrice;
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

Space.prototype.addAvailability = function(date) {

}