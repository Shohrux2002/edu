const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )`);

  db.run(`CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT
  )`);

  db.run(`INSERT INTO products (title, description) VALUES ('React Course', 'Learn React from scratch.')`);
  db.run(`INSERT INTO products (title, description) VALUES ('Node.js Course', 'Master backend development.')`);
});

module.exports = db;