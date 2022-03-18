const pgp = require('pg-promise')();
const db = pgp('postgress://localhost:5432/eventonica');

module.exports = db;

