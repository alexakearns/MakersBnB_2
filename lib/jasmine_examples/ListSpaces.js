const { Client } = require("pg");

const client = new Client({
  //change user
  user: "postgres",
  host: "localhost",
  database: "makersbnb",
  password: null,
  port: 5432,
});

function Listspaces() {}

client.connect();

Listspaces.prototype.getList = function () {
  console.log("hello");
  client.query("SELECT * FROM spaces", (err, res) => {
    console.log(res.rows);
    client.end();
  });
};

module.exports = Listspaces;
