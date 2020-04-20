function Landlord() {
  this.spaces = []
}

Landlord.prototype.listSpace = function(space) {
  this.spaces.push(space)
}