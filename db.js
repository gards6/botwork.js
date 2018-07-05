// NOT FUNCTIONAL

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.HEROKU_POSTGRESQL_JADE_URL,
  ssl: true,
});


client.connect();

client.query('SELECT table_schema, test_table FROM information_schema.tables;', (err, res) => 
{
	if (err) throw err;
	for (let row of res.rows)
	{
		console.log(JSON.stringify(row));
	}
	client.end();
});
