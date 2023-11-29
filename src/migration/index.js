const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const client = new Client({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: false
});

const migrate = () => {
  const scriptPath = path.join(__dirname, 'script.sql');
  const sqlScript = fs.readFileSync(scriptPath, 'utf8');
  
  client.query(sqlScript, (err) => {
    if (err) {
      console.error('Error executing SQL script:', err);
    } else {
      console.log('SQL script executed successfully!');
    }
  
    client.end();
  });
}

client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  migrate();
});

