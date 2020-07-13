function Landlord(name) {
  this.spaces = [];
  this.username = name;
}

Landlord.prototype.listSpace = function (space) {
  this.spaces.push(space);
};
