const express = require('express');
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const createTable = `CREATE TABLE IF NOT EXISTS people (id int NOT NULL AUTO_INCREMENT, name varchar(200), PRIMARY KEY (id))`;
connection.query(createTable);

app.get('/', (req, res) => {
  connection.query(`INSERT INTO people(name) value('Brunno Oliveira')`);
  connection.query('SELECT * FROM people', function (error, results) {
    if (error) throw error;

    const lstNames = results.map((result) => `<p>${result.name}</p>`);
    res.send(`<h1>Full Cycle Rocks!</h1> </ br> ${lstNames.join(' ')}`);
  });
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
});

