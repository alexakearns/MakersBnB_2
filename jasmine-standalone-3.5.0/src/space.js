'use strict';

function Space () {
  this.name;
  this.description;
}

Space.prototype.addName = function(name) {
  this.name = name;
}

Space.prototype.addDecription = function(string) {
  this.description = string;
}