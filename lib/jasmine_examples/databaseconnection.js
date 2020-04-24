const { Client } = require('pg')

const client = new Client({
    //change user
    user: 'student',
    host: 'localhost',
    database: 'makersbnb',
    password: null,
    port: 5432,
})

client.connect()