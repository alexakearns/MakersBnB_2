const { Client } = require('pg')

const client = new Client({
    //change user
    user: 'postgres',
    host: 'localhost',
    database: 'makersbnb',
    password: null,
    port: 5432,
})

client.connect()

function Landlord(name) {
  this.updateDatabase(name)
  this.spaces = []
  this.username = name
}

Landlord.prototype.listSpace = function(space) {
  this.spaces.push(space)
}

Landlord.prototype.updateDatabase = function(name){
  client.query("INSERT INTO landlord (name) VALUES ('"+ name +"');", (err, res) => {
      client.end()
  })
  this.username = name
}

module.exports = Landlord;
