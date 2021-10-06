const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crown_94',
  password: '0000',
  port: 5432,
});

pool.query('SELECT * from category_94', (err, res) => {
  console.log(JSON.stringify(res.rows));
});

module.exports = pool;
