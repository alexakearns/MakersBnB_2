const { Client } = require("pg");

const client = new Client({
  //change user
  user: "postgres",
  host: "localhost",
  database: "makersbnb",
  password: null,
  port: 5432,
});

client.connect();
