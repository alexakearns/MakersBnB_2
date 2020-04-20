function Landlord() {
  this.spaces = []
  this.username = "Tom"
}

Landlord.prototype.listSpace = function(space) {
  this.spaces.push(space)
}

