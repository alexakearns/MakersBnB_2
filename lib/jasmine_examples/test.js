var Space = require('../../lib/jasmine_examples/space')

var space = new Space('Hello', 25, 'nice place', 'monday', 'tuesday', 5678);

//space.updateDatabase('Hello', 25, 'nice place', 'monday', 'tuesday', 5678)

// var Renter = require('../../lib/jasmine_examples/renter')

// var renter = new Renter();

// renter.addName('Tom')

// const { Client } = require('pg')

// const client = new Client({
//     //change user
//     user: 'macbookpro',
//     host: 'localhost',
//     database: 'makersbnb',
//     password: null,
//     port: 5432,
// })

// client.connect()


// client.query("INSERT INTO spaces (name, price, description, startdate, enddate, landlordid) VALUES


// client.query("INSERT INTO spaces (name, price, description, startdate, enddate, landlordid) VALUES ('name', 20, 'description', 'today', 'tomorrow', 1234);", (err, res) => {
//     client.end()
// })